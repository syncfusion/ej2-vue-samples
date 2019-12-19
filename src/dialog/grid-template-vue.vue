<template>
    <div>
        <ejs-grid :dataSource="gridData" :allowPaging='true' :pageSettings='pageSettings'>
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
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
 import { extend } from '@syncfusion/ej2-base';
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      gridData: orderDetails,
      pageSettings: { pageSizes: [5,10,12,20], pageSize: 5 }
    };
  },
  provide: {
      grid: [Page]
  }
});
</script>