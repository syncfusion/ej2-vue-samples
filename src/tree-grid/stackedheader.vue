<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true'>
            <e-columns>
                <e-column headerText='Order Details' :columns='orderColumns'></e-column>
                <e-column headerText='Shipment Details' :columns='shipColumns'></e-column>
                <e-column headerText='Price Details' :columns='priceColumns'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

     <div id="action-description">
    <p>This sample demonstrates the TreeGrid component with the stacked header feature. In this sample, we have shown multiple levels of column header.
    </p>
</div>
<div id="description">
    <p>The TreeGrid columns can be stacked/grouped in order to show multiple levels of column header. 
        It can be done by setting the <code>columns->columns</code> property.
    </p>
    <p>
        In this demo, the columns <strong>Order ID, Order Name, Order Date</strong> are grouped under Order Details, the columns <strong>Shipment Category, Shipped Date, Units</strong> are grouped under Shipment Details and <strong>Price per Unit, Total Price</strong> are grouped under Price details. 
    </p>
    <p>
        More information on the stacked header configuration can be found in this documentation section.
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { stackedData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: stackedData,
      orderColumns : [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 180 },
            { field: 'orderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
        ],
        shipColumns : [
            { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 150 },
            { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', format: 'yMd', width: 120 },
            { field: 'units', headerText: 'Units', textAlign: 'Right', width: 90 }
        ],
        priceColumns : [
            { field: 'unitPrice', headerText: 'Price per unit', width: 120, format: 'c2', textAlign: 'Right' },
            { field: 'price', headerText: 'Total Price', width: 120, format: 'c', textAlign: 'Right' }
        ]
    };
  },
   provide : {
      treegrid: [ Page],
    },

});
</script>