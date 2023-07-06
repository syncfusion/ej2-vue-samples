<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the row drag and drop feature within same grid. You can rearrange the grid rows by using drag icon in left side of grid column.Here you can drag and drop the grid rows between the decided rows.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :height="400" :allowRowDragAndDrop="true" :allowSorting='true' :allowGrouping='true' :selectionSettings="selection">
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
        <p>Row drag and drop enabled by setting
            <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#allowrowdraganddrop">allowRowDragAndDrop</a></code> property as true.
        </p>           
        <p>Grouping can be enabled by setting  
            <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#allowgrouping">allowGrouping</a></code> property as true.
        </p>  
        <p>
        Grid features are segregated into individual feature-wise modules.
              To use row drag and drop and grouping features, 
              we need to inject 
              <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#rowdraganddropmodule">RowDD</a></code>, 
              <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/group">Group</a></code> modules into the <code>provide</code>.
        </p> 
        <p>
            The row drag and drop functionality is enabled with grouped records in the grid.
            Now, you can drag and drop the records from one group to another group of your choice.
        </p>     
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Selection, RowDD, Group, Sort } from "@syncfusion/ej2-vue-grids";
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
      grid: [Selection, RowDD, Group, Sort]
  }
});
</script>