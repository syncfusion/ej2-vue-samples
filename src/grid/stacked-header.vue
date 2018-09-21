<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the stacked header feature. In this sample, we have shown multiple level of column headers.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Center"></e-column>
                <e-column headerText='Order Details' :columns='orderColumns'></e-column>
                <e-column headerText='Ship Details' :columns='shipColumns'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid columns can be stacked/grouped in order to show multiple level of column headers. It can be done by
            setting the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#columns-any">
        columns->columns
        </a></code> property.
        </p>         
        <p>
            In this demo, the columns <strong>OrderDate, Freight</strong> are grouped under <strong>Order Details</strong>,
            the columns <strong>ShippedDate, ShipCountry</strong> are grouped under <strong>Ship Details</strong>. 
        </p>
         <p>
            More information on the stacked header configuration can be found in this 
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#columns-any">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { GridPlugin, Page } from '@syncfusion/ej2-vue-grids';
import { orderDetails } from './data-source';

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
      return {
        data: orderDetails,
        orderColumns: [
            {
                field: 'OrderDate',
                headerText: 'Order Date',
                format: 'yMd',
                width: 130,
                textAlign: 'Right'
            },
            {
                field: 'Freight',
                headerText: 'Freight ($)',
                width: 120,
                format: 'C1',
                textAlign: 'Right'
            }
        ],
        shipColumns: [
            {
                field: 'ShippedDate',
                headerText: 'Shipped Date',
                format: 'yMd',
                textAlign: 'Right',
                width: 150
            },
            {
                field: 'ShipCountry',
                headerText: 'Ship Country',
                width: 150
            }
        ]
        }
  },
  provide: {
      grid: [Page]
  }
})
</script>