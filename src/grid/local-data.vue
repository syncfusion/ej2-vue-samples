<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the way of data binding Grid component with JavaScript object array (local data source).
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :allowSorting='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid supports data binding. 
        The <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource">
        dataSource
        </a></code> property can be assigned either with the array of JavaScript objects or instance of <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
        DataManager</a></code>.</p>
        <p>In this demo, the array of JavaScript objects is assigned as the data source to the Grid.</p>
        <p>
            More information on the data binding can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/data-binding.html#local-data">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Sort } from "@syncfusion/ej2-vue-grids";
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
      pageSettings: { pageCount: 5},
    };
  },
  provide : {
      grid: [Page, Sort]
  }
}
</script>