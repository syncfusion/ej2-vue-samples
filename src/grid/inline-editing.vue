<template>
<div class="control-section">
    <div id="action-description">
        <p>This sample demonstrates CRUD operations in Grid. You can perform CRUD operations as follows,</p>
            <ul>
                <li><code>Add</code> -  To add new record, click Add toolbar button </li>
                <li><code>Edit</code> - To edit record, double click a row or click toolbar Edit button after selected a row </li>
                <li><code>Delete</code> - To delete record, click toolbar Delete button after selected a row </li>
                <li><code>Update</code>,<code>Cancel</code> - You can save or discard changes by click toolbar Update and Cancel button respectively</li>
            </ul>
        <p>By default, a new row will be added at the top of the grid. You can change it by setting <code>editSettings.newRowPosition</code> as <code>Bottom</code></p>
    </div>
    <div class="col-lg-9 control-section">
        <ejs-grid ref='grid' id='grid' :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar' :actionBegin='actionBegin'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customeridrules'></e-column>
                <e-column field='Freight' headerText='Freight' width='180' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' editType='datetimepickeredit' :format='formatoptions' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tr>
                <td style="width: 100%">
                    <div style="padding-top: 7px">Add New Row Position</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                    <div id='typeddl'>
                        <ejs-dropdownlist id='newRowPosition' :dataSource='newRowPositionDataSource' :fields='fields' :change='valueChange' :value='dropdownValue'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
        </table>
    </div>    

     <div id="description">
        <p> The Grid supports CRUD operations. This CRUD operations can be configured in Grid using
            <code><a target="_blank" class="code" href="http://ej2.syncfusion.com/vue/documentation/grid/api-editSettings.html">
            editSettings</a></code>. Also, it has different modes to manipulate the datasource.
        </p>
        <p>The available modes are,</p>
        <ul>
            <li><code>Normal</code></li>
            <li><code>Dialog</code></li>
            <li><code>Batch</code></li>
        </ul>
        <p>
            In this demo, Normal mode is enabled for editing. You can start editing any row by double clicking on it or clicking on toolbar’s
            <code>Edit</code> button, then the currently selected row will be changed to edited state. You can change the row values
            and save edited data to the datasource.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use editing feature, we need to inject
            <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-edit.html">
                Edit </a></code> into the <code>provide</code> section.
        </p>
    </div>
</div>
</template>
<!-- custom code start-->
<style>
    #typeddl {
        min-width: 100px;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { GridPlugin, Edit, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { orderDataSource } from "./data-source";
import { DropDownList, DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
      newRowPositionDataSource: [{ value: 'Top', text: 'Top' }, { value: 'Bottom', text: 'Bottom' }],
      fields: { text: 'text', value: 'value' },
      dropdownValue: 'Top',
      data: orderDataSource.slice(0),
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' },
      freightrules:  { required: true },
      editparams: { params: { popupHeight: '300px' }},
      pageSettings: {pageCount: 5}
    };
  },
  provide: {
      grid: [Edit, Page, Toolbar]
  },
  methods: {
    valueChange: function (args) {
        this.$refs.grid.ej2Instances.editSettings.newRowPosition = args.value;
    },
    actionBegin: function (args) {
        if (args.requestType === 'save') {
            if (this.$refs.grid.ej2Instances.pageSettings.currentPage !== 1 && this.$refs.grid.ej2Instances.editSettings.newRowPosition === 'Top') {
                args.index = (this.$refs.grid.ej2Instances.pageSettings.currentPage * this.$refs.grid.ej2Instances.pageSettings.pageSize) - this.$refs.grid.ej2Instances.pageSettings.pageSize;
            } else if (this.$refs.grid.ej2Instances.editSettings.newRowPosition === 'Bottom') {
                args.index = (this.$refs.grid.ej2Instances.pageSettings.currentPage * this.$refs.grid.ej2Instances.pageSettings.pageSize) - 1;
            }
        }
    }
  }
});
</script>
