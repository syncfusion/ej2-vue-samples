<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the usage of sticky header feature which helps to see the header in a fixed position while scrolling.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" enableStickyHeader=true :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='150' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='160' :validationRules='customeridrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' format="yMd" width='155' textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='Freight' headerText='Freight' width='130' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' format="yMd" width='155' textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='170' editType='dropdownedit'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
    <p>The Grid headers can be fixed while scrolling its parent element. 
        It can be done by setting the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/api/grid/#enablestickyheader">
        enableStickyHeader
        </a></code> property.
    </p>
    <p>
        In this demo, while scrolling the demo page, the Grid header will be stick to the top of its parent element. 
    </p>
    <p>
        More information on the stacked header configuration can be found in this
        <a target="_blank" 
        href="https://ej2.syncfusion.com/vue/documentation/grid/scrolling/">
        documentation section</a>.
    </p>
</div>
</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Sort, Toolbar, Edit, Filter } from "@syncfusion/ej2-vue-grids";
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
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    };
  },
  provide: {
      grid: [Sort, Toolbar, Edit, Filter]
  }
}
</script>