<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the horizontal and vertical scrollbars to view the exceeded grid content.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" height=400 :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='150' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='160' :validationRules='customeridrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' format="yMd" width='155' textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='Freight' headerText='Freight' width='130' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' format="yMd" width='155' textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
                <e-column field='ShipAddress' headerText='Ship Address' width='170'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid component will show scrollbar when the content exceeds the element width or height. The vertical and horizontal
            scrollbar will be displayed based on the following criteria.
        </p>
        <ul>
            <li>The vertical scrollbar appears when the total height of rows present in Grid exceeds its element height.</li>
            <li>The horizontal scrollbar appears when the sum of column`s width exceeds Grid element width.</li>
        </ul>
        <p>The <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#height">height
        </a></code> and <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#width">width
        </a></code> property is used to set the Grid height and width respectively. The value
        of these properties can be a numeric value, pixel(<code>px</code>) or percentage (<code>%</code>).</p>
        <p>
        In this demo, the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#height">height
        </a></code> and <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#width">width
        </a></code> property of the Grid is set to <strong><em>400</em></strong> and <strong><em>auto</em></strong>
        respectively. Now, the Grid will render with vertical scrollbar when the total height of rows 
        exceeds its element height and horizontal scrollbar will appear when the
        total column width exceeds the element width.
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