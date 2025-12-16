<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid column chooser feature. Click the column chooser
        icon in the toolbar to open column chooser and you can select columns to hide/show from the checkbox list. 
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :showColumnChooser='true' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :showInColumnChooser='false' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150' :showInColumnChooser='false' :validationRules='customeridrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150' editType='dropdownedit'></e-column>
                <e-column field='ShipCity' headerText='Ship City' :visible='false' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid columns can be shown/hidden dynamically by using column chooser. To enable column chooser behavior, set
            <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#showcolumnchooserr">showColumnChooser
        </a></code> property as true. You can also prevent the display of a column in column chooser
            by setting
            <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/#showincolumnchooser">columns->showInColumnChooser
        </a></code> as false in columns definition.

        </p>
        <br/>

        <p>
            In this demo, when the user clicks column chooser icon from the toolbar then the column chooser menu will open. User can
            show or hide the columns by changing the state of the checkbox.
        </p>
        
        <p style="font-weight: 500">Injecting Module</p>
        
        <p>
            Grid component features are segregated into individual feature-wise modules. To use column chooser feature, we need to inject
            <code>ColumnChooser</code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, ColumnChooser, Page, Toolbar, Edit, Filter, Sort } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: orderDetails,
      filterSettings: { type: 'Excel' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      orderidrules: { required: true, number: true },
      customeridrules: { required: true, minLength: 5 },
      freightrules:  { required: true, min: 0 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'],
      pageSettings: {pageCount: 5},
    };
  },
  provide: {
      grid: [ColumnChooser, Page, Toolbar, Edit, Filter, Sort]
  }
}
</script>