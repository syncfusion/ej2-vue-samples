<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the default rendering of the Grid with minimum configuration.</p>
    </div>  
    <div class="col-lg-8">
        <ejs-grid :dataSource="data" height='350' :frozenRows='rows' :frozenColumns='columns' :allowSelection='false' :enableHover='false' :allowResizing='true' :allowSorting='true' :allowMultiSorting='false' :allowPaging='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='125' format='C2'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='130'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='180'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='150' format="yMd" textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='180' format="yMd" textAlign='Right'></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='300'></e-column>
                <e-column field='ShipAddress' headerText='Ship Address' width='270'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='250'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='250'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
       <p>
           The freezing feature enables the user to freeze certain rows/columns to scroll remaining movable content. This can be achieved by setting <b>frozenRows</b> and <b>frozenColumns</b> property.
        </p>
        <p>
        In this demo sample, the first column and two rows are set to frozen by using the  <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#frozenrows-number">frozenRows</a></code>  and 
        <code><a target="_blank" class="code" href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#frozenrows-number">frozenColumns
        </a></code>  properties.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
         Grid component features are segregated into individual feature-wise modules. To use frozen rows and columns feature, we need to inject
         <code>Freeze</code> into the <code>provide</code> section.
    </p>
    </div>

</div>
</template>
<!-- custom code start -->
<style>
#buttonSet {
  float: right;
}
#frozeninput {
  min-width: 148px;
}
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Freeze, Resize, Sort } from "@syncfusion/ej2-vue-grids";
import { Browser } from '@syncfusion/ej2-base';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      rows: 2,
      columns: 1,
      columnValue: Browser.isDevice ? 1 : 2
    };
  },
  methods: {
      btnClick: function (){
        this.rows = parseInt((<any>this.$refs.row).getText(), 10);
        this.columns = parseInt((<any>this.$refs.col).getText(), 10);
    }
  },
  provide: {
      grid: [Freeze, Resize, Sort]
  }
});
</script>