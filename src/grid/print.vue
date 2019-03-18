<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the different options to print the hierarchy Grid. 
            Select the hierarchy grid's print mode in the toobar and click the print button from the grids's toolbar item to print Grid.
        </p>
    </div>
    <div>
      <div class='e-mastertext'>Select Hierarchy PrintMode</div>
        <ejs-toolbar ref='toolbar' class='e-gridlist' :clicked="onClicked">
            <e-items>
                <e-item text='Expanded'></e-item>
                <e-item text='All' cssClass="e-ghidden"></e-item>
                <e-item text='None'></e-item>
            </e-items>
        </ejs-toolbar>
        <br/>
        <ejs-grid ref='grid' :dataSource="parentData" :childGrid="childGrid" :toolbar="['Print']" hierarchyPrintMode="All">
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
        <p>The Grid can be printed using the <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/api/grid#print">print
            </a></code> method. While printing the pager and scrollbar will be removed if they are enabled in Grid.
            By default, all pages will be printed. We can print current page alone by setting the <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/api/grid#printmode">printMode
            </a></code> property value as <code>currentpage</code>. The child grid allows us to print the grid with following options,
        </p>
        <ul>
            <li><code>Expanded</code> - Prints the master grid with expanded child grids.</li>
            <li><code>All</code> - Prints the master grid with all the child grids.</li>
            <li><code>None</code> - Prints the master grid alone.</li>
        </ul>
        <p>
            We can change the child grid's print option by using the <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/api/grid#hierarchyprintmode">hierarchyPrintMode
            </a></code> property.
        </p>
        <p>
            In this demo, we have set the hierarchyPrintMode as<code>All</code>. You can change the hierarchy grid's print mode by selecting the toolbar and click the print icon to print the Grid.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid features are segregated into individual feature-wise modules.         
            To use Hierarchy Grid feature, we need to inject <code>DetailRow</code> into the <code>provide</code> section.
        </p>
        <p>More information on the print feature can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/print.html">
            documentation section</a>.
        </p>
    </div>

</div>
</template>
<!-- custom code start -->
<style>
  .e-mastertext {
      font-size: 15px;
      font-family: Roboto;
      opacity: 0.87;
      padding: 1em;
  }

  .e-toolbar-item.e-ghidden .e-btn {
      background: rgba(0, 0, 0, 0.12);
      border-color: rgba(0, 0, 0, 0.12);
      color: #212121;
  }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { GridPlugin, DetailRow, Grid, HierarchyGridPrintMode, Toolbar } from "@syncfusion/ej2-vue-grids";
import { employeeData, orderDatas, customerData, hierarchyOrderdata } from "./data-source";
import { ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { ClickEventArgs, ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { removeClass, addClass } from "@syncfusion/ej2-base";

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);

export default Vue.extend({
  data: () => {
    let secondLevelGrid = {
        dataSource: customerData,
        queryString: 'CustomerID',
        columns: [
            { field: 'CustomerID', headerText: 'Customer ID', width: 75 },
            { field: 'ContactName', headerText: 'Name', width: 100 },
            { field: 'Address', headerText: 'Address', width: 120 },
            { field: 'Country', headerText: 'Country', width: 100 }
        ]
    };

    return {
      parentData: employeeData,
      childGrid: {
            dataSource: hierarchyOrderdata,
            queryString: 'EmployeeID',
            hierarchyPrintMode: "All",
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'ShipCity', headerText: 'Ship City', width: 120 },
                { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
                { field: 'ShipName', headerText: 'Ship Name', width: 150 }
            ],
            childGrid: secondLevelGrid
      }
    };
  },
  methods: {
      onClicked: function(e: ClickEventArgs) {
        let element: HTMLElement = e.originalEvent.target as HTMLElement;

        if (!element.classList.contains('e-tbar-btn-text') && !element.classList.contains('e-tbar-btn')) {
            return;
        }

        element = <HTMLElement>(element.tagName === 'BUTTON' ? element.firstElementChild : element);
        removeClass([].slice.apply(document.getElementsByClassName('e-ghidden')), 'e-ghidden');
        addClass([(<any>element.parentElement).parentElement], 'e-ghidden');
        (<any>this.$refs.grid).hierarchyPrintMode = (<any>this.$refs.grid).childGrid.hierarchyPrintMode = <HierarchyGridPrintMode>element.innerHTML;
      }
  },
  provide: {
    grid: [DetailRow, Toolbar]
  }
});
</script>