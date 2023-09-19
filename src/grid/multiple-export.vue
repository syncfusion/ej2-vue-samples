<template>
    <div class="col-lg-9 control-section">

    <div id="action-description">
        <p>This sample demonstrates the client-side exporting of mutliple grids, which allows you to export the data of
            multiple grids in the same or different pages to Excel and PDF formats.
        </p>
    </div>
        <div>
            <div class='e-mastertext'>Master Grid</div>

            <ejs-grid id=MasterGrid :dataSource='data' ref='grid' :selectedRowIndex=2 :exportGrids='exportGrids'
                :rowSelected="onRowSelected" :allowExcelExport='true' :toolbar='toolbar' :toolbarClick="toolbarClick" :allowPdfExport='true'>
                <e-columns>
                    <e-column field='ContactName' headerText='Customer Name' width='150'></e-column>
                    <e-column field='CompanyName' headerText='Company Name' width='150'></e-column>
                    <e-column field='Address' headerText='Address' width='150'></e-column>
                    <e-column field='Country' headerText='Country' width='150'></e-column>
                </e-columns>
            </ejs-grid>

            <div class='e-statustext' v-if="key">Showing orders of Customer: <b>{{ key }}</b></div>

            <detailsGrid :selected='key'></detailsGrid>

        </div>

    <div id='description'>
        <p>Data Grids support client-side exporting which allows you to export data to Excel and PDF formats.</p>
        <p>Multiple grids can be exported by providing their <code>IDs</code> in the <code>exportGrids</code> property.</p>
        <p>In this demo, Excel and PDF exports are enabled in both grids by setting the <code>allowExcelExport</code> and 
            <code>allowPdfExport</code> properties to true. In the master grid, the grid IDs are listed in the 
            <code>exportGrids</code> property which can be exported to Excel and PDF formats by clicking the toolbar buttons.
        </p>
        <p>The ExcelExport and PdfExport items are defined in the toolbar of the Grid. Actions are defined in
            the <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick">toolbarClick</a></code> event
            to export Grid data using <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#excelexport">excelExport</a></code> 
            and<code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfexport">pdfExport</a></code> methods.
        </p>
        <p>By default, in this demo grids are exported on the same page. They can be exported in separate pages by
            unchecking the checkbox. This can be achieved by setting the multipleExport <code>type</code> of 
            <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/excelexportproperties/">ExcelExportProperties</a></code> 
            and <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/">PdfExportProperties.</a></code>
        </p>

        <p style="font-weight: 500">Injecting Modules</p>
        <p>
            Grid features are segregated into individual feature-wise modules.
            To use selection and export features, inject <code>Selection</code>, <code>ExcelExport</code>
            and <code>PdfExport</code> modules into the <code>provide</code> section.
        </p>
        <p>
            More information on the exporting configuration can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/grid/excel-export/excel-exporting">Excel-export</a> 
            and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/pdf-export/pdf-export">PDF-export</a> documentation sections.
        </p>
    </div>

    </div>
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tr>
                <div class="checkbox-control" style="padding-left: 0px">
                    <div class="row" style="padding-left: 5px">
                        <ejs-checkbox ref='checkbox' label='Export Grids in same sheet' v-model="isExportChecked"
                            labelPosition='Before'></ejs-checkbox>
                    </div>
                </div>
            </tr>
        </table>
    </div>
</template>
    <!-- custom code start -->
<style scoped>
ej-gridmaster,
ej-griddetail {
    display: block;
}

.e-statustext,
.e-mastertext {
    font-size: 15px;
    font-family: Roboto;
    opacity: 0.87;
    padding: 1em;
}
</style>
    <!-- custom code end -->
<script lang="ts">
import { createApp } from "vue";
import { GridComponent, ColumnsDirective, ColumnDirective, RowSelectEventArgs, PdfExport, ExcelExport, Toolbar } from "@syncfusion/ej2-vue-grids";
import { customerData, data } from "./data-source";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

const detailsGrid = {
    components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
  },
    props: ['selected'],
    data: () => {
        return {
        };
    },
    template: `<div>
            <ejs-grid id='DetailGrid' :dataSource='detailData' ref='detailgrid' :allowSelection='false' :allowExcelExport='true' :allowPdfExport='true' >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='150' textAlign='Right'></e-column>
                    <e-column field='Freight' headerText='Freight' format='C2' width='150' textAlign='Right'></e-column>
                    <e-column field='ShipName' headerText="Ship Name" width='150'></e-column>
                    <e-column field='ShipCountry' headerText="Ship Country" width='150'></e-column>
                </e-columns>
            </ejs-grid>
        </div>`,
    computed: {
        detailData: function (): Object[] {
            return data.filter((record: any) => record.CustomerName === (this as GridComponent).selected).slice(0, 5);
        }
    },
};

export default {
    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-checkbox': CheckBoxComponent,
        detailsGrid
    },
    data: () => {
        var names = ['AROUT', 'BERGS', 'BLONP', 'CHOPS', 'ERNSH'];
        return {
            names: names,
            isExportChecked: true,
            toolbar: ['ExcelExport', 'PdfExport'],
            exportGrids: ['MasterGrid', 'DetailGrid'],
            newSheetExcelProperties: {
                multipleExport: { type: 'NewSheet' }
            },
            sameSheetPdfProperties: {
                multipleExport: { type: "AppendToPage", blankSpace: 10 }
            },
            data: customerData.filter((e: any) => names.indexOf(e.CustomerID) !== -1),
            key: null
        };
    },
    methods: {
        onRowSelected: function (args: RowSelectEventArgs): void {
            let record: any = args.data;
            (this as GridComponent).key = record.ContactName;
        },
        toolbarClick: function (args: ClickEventArgs) {
            if ((this as any).isExportChecked) {
                switch (args.item.id) {
                    case 'MasterGrid_excelexport':
                        ((this as any).$refs.grid).excelExport({}, true);
                        break;
                    case 'MasterGrid_pdfexport':
                        ((this as any).$refs.grid).pdfExport((this as any).sameSheetPdfProperties, true);
                        break;
                }
            }
            else {
                switch (args.item.id) {
                    case 'MasterGrid_excelexport':
                        ((this as any).$refs.grid).excelExport((this as any).newSheetExcelProperties, true);
                        break;
                    case 'MasterGrid_pdfexport':
                        ((this as any).$refs.grid).pdfExport({}, true);
                        break;
                }
            }
        }
    },
    provide: {
        grid: [PdfExport, ExcelExport, Toolbar],
    }
};

</script>