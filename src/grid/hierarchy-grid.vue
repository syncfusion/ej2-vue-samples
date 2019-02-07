<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the hierarchical binding of the Grid component. Click the expand button to view the child Grid
        of a particular record.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="parentData" :childGrid="childGrid" :allowSorting="true" >
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='140'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
                <e-column field='HireDate' headerText='Hired Date' width='120' format='yMd' textAlign='Right'></e-column>
                <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

    <div id="description">
        <p>
            The Hierarchy Grid is used to display table data in hierarchical structure which can show or hide by clicking on expand or collapse button. 
            This feature can be enabled by defining <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#childgrid-gridmodel">
                childGrid</a></code> and <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#querystring-string">
                childGrid.queryString</a></code>. And the <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#detaildatabound-emittypedetaildataboundeventargs">
                detailDataBound</a></code> event triggers at initial expand of every child Grid.         
            </p>
            <p>
            In this demo, three level hierarchy is demonstrated with hierarchical structure Employee -> Orders -> Customers. 
            </p>    
            <br/>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Grid features are segregated into individual feature-wise modules.         
                To use Hierarchy Grid feature, we need to inject <code>DetailRow</code> into the <code>provide</code> section.
        </p>

    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, DetailRow, Sort } from "@syncfusion/ej2-vue-grids";
import { employeeData, orderDatas, customerData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    let secondChildGrid = {
      dataSource: customerData,
      queryString: "CustomerID",
      columns: [
        {
          field: "CustomerID",
          headerText: "Customer ID",
          textAlign: "Right",
          width: 75
        },
        { field: "Address", headerText: "Address", width: 120 },
        { field: "Country", headerText: "Country", width: 100 }
      ]
    };

    return {
      parentData: employeeData,
      childGrid: {
        dataSource: orderDatas,
        queryString: "EmployeeID",
        allowPaging: true,
        pageSettings: { pageSize: 6, pageCount: 5 },
        columns: [
          {
            field: "OrderID",
            headerText: "Order ID",
            textAlign: "Right",
            width: 120
          },
          { field: "ShipCity", headerText: "Ship City", width: 120 },
          { field: "Freight", headerText: "Freight", width: 120 },
          { field: "ShipName", headerText: "Ship Name", width: 150 }
        ],
        childGrid: secondChildGrid
      }
    };
  },
  provide: {
    grid: [DetailRow, Sort]
  }
});
</script>