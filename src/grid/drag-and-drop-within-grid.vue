<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the row drag and drop feature within same grid. You can rearrange the grid rows by using drag icon in left side of grid column.Here you can drag and drop the grid rows between the decided rows.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :height="400" :allowRowDragAndDrop="true" :selectionSettings="selection">
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
         <p>Row drag and drop enabled by settting  
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/grid/api-grid.html#allowrowdraganddrop-boolean">
        allowRowDragAndDrop
        </a></code> property as true. 
                
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid features are segregated into individual feature-wise modules. 
            To use row, drag and drop feature we need to inject
            <code>RowDD</code> module into the <code>provide</code> section.   
        </p>     
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Selection, RowDD } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      selection: { type: 'Multiple' }
    };
  },
  provide: {
      grid: [Selection, RowDD]
  }
});
</script>