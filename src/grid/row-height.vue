<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates the row height feature of the Grid. In this demo, the <b>rowHeight</b> for all the Grid rows can be
    changed as <b>20px</b>, <b>40px</b> and <b>60px</b> on ToolBar button click.</p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :rowHeight='rowHeight' height='400' :toolbar='toolbar' :toolbarClick='clickHandler'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='140' format='yMd' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column> 
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
         <p>
            The Grid has support to provide <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#rowheight-number">rowHeight
        </a></code> property.
        </p>
    </div>
</div>
</template>
<style>
   @import "../../styles/Grid/row-height.css";
</style>

<script lang="ts">
import Vue from "vue";
import { GridPlugin, Toolbar } from "@syncfusion/ej2-vue-grids";
import { ClickEventArgs } from "@syncfusion/ej2-vue-navigations";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      rowHeight: 20,
      toolbar: [
            { prefixIcon: 'e-small-icon', id: 'big', align: 'Right' },
            { prefixIcon: 'e-medium-icon', id: 'medium', align: 'Right' },
            { prefixIcon: 'e-big-icon', id: 'small', align: 'Right' }
            ]
    };
  },
  methods:{
      clickHandler: function (args: ClickEventArgs) {
        if (args.item.id === 'small') {
            this.rowHeight = 20;
        }
        if (args.item.id === 'medium') {
            this.rowHeight = 40;
        }
        if (args.item.id === 'big') {
            this.rowHeight = 60;
        }
      }
  },
  provide: {
      grid: [Toolbar]
  }
});
</script>