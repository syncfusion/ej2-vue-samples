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
import { DataManager, Query } from "@syncfusion/ej2-data";
import { GridComponent, Page, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      gridData: new DataManager(orderDetails).executeLocal(new Query().take(15)),
      pageSettings: { pageSizes: true, pageSize: 5 }
    };
  },
  provide: {
      grid: [Page]
  }
}
</script>