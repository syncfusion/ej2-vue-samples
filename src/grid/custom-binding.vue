<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the usage of grid with <code>AJAX</code>. Paging, sorting and grouping can be performed in this sample.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource='data' :allowPaging='true' :pageSettings='pageOptions' :allowSorting='true' :allowGrouping='true' :dataStateChange='dataStateChange'>
            <e-columns>
                <e-column field= "OrderID" headerText="Order ID" width="130" textAlign='Right' ></e-column>
                <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
                <e-column field= "ShipName" headerText="Ship Name" width="200"></e-column>
                <e-column field= "ShipCity" headerText="Ship City" width="150"></e-column>
            </e-columns>
        </ejs-grid>

    </div>

     <div id="description">
        <p>
            Grid can be bound with data from external API.
            In this demo, the external data communication is done using AJAX and the grid is resolved with the response data. 
            When performing grid actions such as paging, sorting and grouping etc. 
            the <code>dataStateChange</code> event will be triggered and we need perform the request and assign the new grid data. 
        </p>
        <p>
            In this demo, simply select the paging and click the column header to sort a column, multiple sorting is also enabled.
            To group a specify column, drag and drop the column in the group drop area.
            To enable paging, sorting and grouping, set the <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowpaging-boolean">
            allowPaging
            </a></code> , <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowsorting-boolean">
            allowSorting </a></code> and <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowgrouping-boolean">
            allowGrouping</a></code> as true.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use the paging ,sorting and grouping features,
            inject the <code>Page</code>, <code>Sort</code> and <code>Group</code> respectively into the 
            <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, DataStateChangeEventArgs, Sorts, Sort, Group, Page, DataResult } from "@syncfusion/ej2-vue-grids";
import { OrderService } from "./order-service";

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: {},
      pageOptions: { pageSize: 10, pageCount: 4 },
      orderService: new OrderService()
    };
  },
  mounted() {
    let state = { skip: 0, take: 10 };
    this.dataStateChange(state);
  },
  methods:{
    dataStateChange: function (state) {
        this.orderService.execute(state).then(( gridData ) => this.data = gridData );
    }
  },
  provide: {
      grid: [Sort, Group, Page]
  }
});
</script>