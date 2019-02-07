<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the hierarchy Grid export feature. In this sample, you can export the hierarchy grid by clicking the corresponding export button from the grid's toolbar.</p>
    </div>
    <div>
        <ejs-grid ref='grid' :dataSource="parentData" :childGrid="childGrid" :toolbar="['PdfExport', 'ExcelExport']" 
        :allowPdfExport='true' :allowExcelExport='true' :toolbarClick="toolbarClick">
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
            <p>Grid supports client-side Hierarchy Grid exporting which allows you to export its data to the Excel and Pdf formats.</p>
            <p>In this demo, ExcelExport and PdfExport items are defined in the toolbar. For these toolbar items, we have defined actions
                in toolbarClick event to export hierarchy Grid using the 
                <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/api/grid#excelexport">excelExport</a></code>, 
                <code><a target="_blank" class="code"
                    href="http://ej2.syncfusion.com/vue/documentation/api/grid#pdfexport">pdfExport</a></code>
            methods and the grid will export using <code>All</code> mode.</p>
        The hierarchy grid allows us to export the grid with following options,
        <ul>
            <li><code>Expanded</code> - Exports only the visible child grids in expanded state.</li>
            <li><code>All</code> - Exports the all the child grids in expanded state.</li>
            <li><code>None</code> - Exports the child grids in collapse state.</li>
        </ul>
        <p>
            We can change the hierarchy grid's export option by using the <code>hierarchyExportMode</code> property.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid features are segregated into individual feature-wise modules.         
            To use Hierarchy, PdfExport and ExcelExport Grid feature, we need to inject <code>DetailRow</code>, <code>PdfExport</code>, <code>ExcelExportService</code>, and <code>Toolbar</code>into the <code>provide</code> section.
        </p>
        <p>
            More information on the exporting configuration can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/pdf-export">
            pdf-export</a> and  <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/excel-exporting">
            excel-export</a> documentation sections.
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { GridPlugin, DetailRow, Grid, PdfExport, ExcelExport, Toolbar } from "@syncfusion/ej2-vue-grids";
import { employeeData, orderDatas, customerData, hierarchyOrderdata } from "./data-source";
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

Vue.use(GridPlugin);

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
  methods:{
      toolbarClick: function(args: ClickEventArgs) {
        if (args.item.text === 'Excel Export') {
            (<any>this.$refs.grid).excelExport({hierarchyExportMode: 'All'});
        }
        if (args.item.text === 'PDF Export') {
            (<any>this.$refs.grid).pdfExport({hierarchyExportMode: 'All'});
        }
      }
  },
  provide: {
    grid: [DetailRow, Toolbar, PdfExport, ExcelExport]
  }
});
</script>