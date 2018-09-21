<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the client-side exporting of the Grid, which allows you to export its data to the Excel, Pdf and CSV formats.
            Use the toolbar buttons to export Grid data with advanced options in same document to desired format.
        </p>
    </div>
    <div>
        <ejs-grid ref='grid' :dataSource="data" :toolbar='toolbar' :toolbarClick='toolbarClick' 
        :allowExcelExport='true' :pageSettings='pageSettings' :allowPaging='true' :allowPdfExport='true'>
            <e-columns>
                <e-column field='ProductID' headerText='Product ID' width='170' textAlign='Right'></e-column>
                <e-column field='ProductName' headerText='Product Name' width='150'></e-column>
                <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='180' textAlign='Right'></e-column>
                <e-column field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
         <p>Grid supports client-side exporting which allows you to export its data to the Excel, Pdf and CSV formats.</p>        
        <p>In this demo, excelexport and pdfexport items are defined in the toolbar. For these toolbar items, we have defined actions
            in toolbarClick event to export the Grid data with header and footer using the
            <code><a target="_blank" class="code"            
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#excelexport">excelExport</a></code>,
            <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#pdfexport">pdfExport</a></code>            methods.</p>
        <br/>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>Grid features are segregated into individual feature-wise modules. To use exporting feature, we need to inject
            <code>ExcelExport</code> and <code>PdfExport</code> into the <code>provide</code> section.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, GridComponent, PdfExport, ExcelExport, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { ClickEventArgs } from "@syncfusion/ej2-vue-navigations";
import { categoryData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: categoryData,
      toolbar: ['ExcelExport', 'PdfExport'],
      pageSettings: { pageSize: 10 }
    };
  },
  methods: {
      toolbarClick: function(args: ClickEventArgs) {
        switch (args.item.text) {
            /* tslint:disable */
            case 'Excel Export':
                (<any>this.$refs.grid).excelExport(this.getExcelExportProperties());
                break;
            /* tslint:enable */
            case 'PDF Export':
                (<any>this.$refs.grid).pdfExport(this.getPdfExportProperties());
                break;
        }
    },
    getDate: () => {
        let date: string = '';
        date += ((new Date()).getMonth().toString()) + '/' + ((new Date()).getDate().toString());
        return date += '/' + ((new Date()).getFullYear().toString());
    },
    getExcelExportProperties: function() {
        return {
            header: {
                headerRows: 7,
                rows: [
                    {
                        index: 1,
                        cells: [
                            /* tslint:disable-next-line:max-line-length */
                            { index: 1, colSpan: 5, value: 'INVOICE', style: { fontColor: '#C25050', fontSize: 25, hAlign: 'Center', bold: true } }
                        ]
                    },
                    {
                        index: 3,
                        cells: [
                            /* tslint:disable-next-line:max-line-length */
                            { index: 1, colSpan: 2, value: 'Adventure Traders', style: { fontColor: '#C67878', fontSize: 15, bold: true } },
                            { index: 4, value: 'INVOICE NUMBER', style: { fontColor: '#C67878', bold: true } },
                            { index: 5, value: 'DATE', style: { fontColor: '#C67878', bold: true }, width: 150 }
                        ]
                    },
                    {
                        index: 4,
                        cells: [
                            { index: 1, colSpan: 2, value: '2501 Aerial Center Parkway' },
                            { index: 4, value: 2034 },
                            { index: 5, value: this.getDate(), width: 150 }
                        ]
                    },
                    {
                        index: 5,
                        cells: [
                            { index: 1, colSpan: 2, value: 'Tel +1 888.936.8638 Fax +1 919.573.0306' },
                            { index: 4, value: 'CUSOTMER ID', style: { fontColor: '#C67878', bold: true } },
                            { index: 5, value: 'TERMS', width: 150, style: { fontColor: '#C67878', bold: true } }
                        ]
                    },
                    {
                        index: 6,
                        cells: [
                            { index: 4, value: 564 },
                            { index: 5, value: 'Net 30 days', width: 150 }
                        ]
                    }
                ]
            },

            footer: {
                footerRows: 5,
                rows: [
                    /* tslint:disable-next-line:max-line-length */
                    { cells: [{ colSpan: 6, value: 'Thank you for your business!', style: { fontColor: '#C67878', hAlign: 'Center', bold: true } }] },
                    { cells: [{ colSpan: 6, value: '!Visit Again!', style: { fontColor: '#C67878', hAlign: 'Center', bold: true } }] }
                ]
            },
            
            fileName: "exceldocument.xlsx"
        };
    },
    getPdfExportProperties: function() {
        return {
            header: {
                fromTop: 0,
                height: 120,
                contents: [
                    {
                        type: 'Text',
                        value: 'INVOICE',
                        position: { x: 280, y: 0 },
                        style: { textBrushColor: '#C25050', fontSize: 25 },
                    },
                    {
                        type: 'Text',
                        value: 'INVOICE NUMBER',
                        position: { x: 500, y: 30 },
                        style: { textBrushColor: '#C67878', fontSize: 10 },
                    },
                    {
                        type: 'Text',
                        value: 'Date',
                        position: { x: 600, y: 30 },
                        style: { textBrushColor: '#C67878', fontSize: 10 },
                    }, {
                        type: 'Text',
                        value: '223344',
                        position: { x: 500, y: 50 },
                        style: { textBrushColor: '#000000', fontSize: 10 },
                    },
                    {
                        type: 'Text',
                        value: this.getDate(),
                        position: { x: 600, y: 50 },
                        style: { textBrushColor: '#000000', fontSize: 10 },
                    },
                    {
                        type: 'Text',
                        value: 'CUSTOMER ID',
                        position: { x: 500, y: 70 },
                        style: { textBrushColor: '#C67878', fontSize: 10 },
                    },
                    {
                        type: 'Text',
                        value: 'TERMS',
                        position: { x: 600, y: 70 },
                        style: { textBrushColor: '#C67878', fontSize: 10 },
                    }, {
                        type: 'Text',
                        value: '223',
                        position: { x: 500, y: 90 },
                        style: { textBrushColor: '#000000', fontSize: 10 },
                    },
                    {
                        type: 'Text',
                        value: 'Net 30 days',
                        position: { x: 600, y: 90 },
                        style: { textBrushColor: '#000000', fontSize: 10 },
                    },
                    {
                        type: 'Text',
                        value: 'Adventure Traders',
                        position: { x: 20, y: 30 },
                        style: { textBrushColor: '#C67878', fontSize: 20 }
                    },
                    {
                        type: 'Text',
                        value: '2501 Aerial Center Parkway',
                        position: { x: 20, y: 65 },
                        style: { textBrushColor: '#000000', fontSize: 11 }
                    },
                    {
                        type: 'Text',
                        value: 'Tel +1 888.936.8638 Fax +1 919.573.0306',
                        position: { x: 20, y: 80 },
                        style: { textBrushColor: '#000000', fontSize: 11 }
                    },
                ]
            },
            footer: {
                fromBottom: 160,
                height: 100,
                contents: [
                    {
                        type: 'Text',
                        value: 'Thank you for your business !',
                        position: { x: 250, y: 20 },
                        style: { textBrushColor: '#C67878', fontSize: 14 }
                    },
                    {
                        type: 'Text',
                        value: '! Visit Again !',
                        position: { x: 300, y: 45 },
                        style: { textBrushColor: '#C67878', fontSize: 14 }
                    }
                ]
            },
            
            fileName: "pdfdocument.pdf"
        };
    }
  },
  provide: {
      grid: [PdfExport, ExcelExport, Page, Toolbar]
  }
});
</script>