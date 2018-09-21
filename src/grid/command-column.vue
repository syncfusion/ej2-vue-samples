<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates CRUD operations in Grid using command column. You can perform CRUD operations as follows,</p>
            <ul>
                <li><code>Edit</code> - To edit record, double click a row or click Edit button from command column after selected a row </li>
                <li><code>Delete</code> - To delete record, click Delete button from command column after selected a row </li>
                <li><code>Update</code>,<code>Cancel</code> - You can save or discard changes by click Update and Cancel button from command column respectively</li>
            </ul>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :editSettings='editSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='120' textAlign='Right' :validationRules='customeridrules'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' editType='datepickeredit' textAlign='Right' type='date' format='yMd'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
                <e-column headerText='Manage Records' width='160' :commands='commands'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
       <p>
            The Grid provides an option to render CRUD action buttons in a column by using the CommandColumn feature. The
            <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-column.html#commands-commandmodel">columns->commands
            </a></code> property accepts array of <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-commandModel.html">CommandModel
            </a></code> object. The predefined command button can be defined by using <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-commandModel.html#type-string">type
            </a></code> property.
        </p>
        <p>The built-in command button are,</p>
        <ul>
            <li><code>Edit</code></li>
            <li><code>Delete</code></li>
            <li><code>Cancel</code></li>
            <li><code>Save</code></li>
        </ul>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Grid features are segregated into individual feature-wise modules. To use command column feature, 
            we need to inject <code>CommandColumn</code> into the <code>provide</code> section.
        </p>
        <p>
            More information on the command column configuration can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/column.html#command-column">
       documentation section</a>.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Edit, Page, CommandColumn } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails.slice(0),
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowEditOnDblClick: false },
      orderidrules: { required: true },
      customeridrules: { required: true },
      freightrules:  { required: true },
      editparams: { params: { popupHeight: '300px' }},
      pageSettings: {pageCount: 5},
      commands: [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
        { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
        { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
        { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }]
    };
  },
  provide: {
      grid: [Edit, Page, CommandColumn]
  }
});
</script>