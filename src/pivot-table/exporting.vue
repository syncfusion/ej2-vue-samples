<template>
<div>
    <div class="col-lg-8 control-section">
        <div class="content-wrapper">
            <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height" :allowExcelExport="allowExcelExport" :allowPdfExport="allowPdfExport" :showFieldList="showFieldList" :allowConditionalFormatting="allowConditionalFormatting">        
            </ejs-pivotview>
        </div>
    </div>
    
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%;height:100%;">
            <tbody>                
                <tr style="height: 50px">
                    <td style="width: 40%">
                        <div>Export Type:
                        </div>
                    </td>
                    <td style="width: 60%;">
                        <div style="margin-left: -10px">
                            <ejs-dropdownlist id='mode' ref='typeddl' :dataSource='modeData' index=0></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                  <td></td>
                    <td>
                        <div style="float:right">
                            <ejs-button id="export-btn" v-on:click="btnClick" isPrimary='true'>Export</ejs-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="action-description">
        <p>This sample demonstrates client-side exporting of the pivot table to Excel, CSV and PDF formats.</p>
    </div>
    <div id="description">
        <p>
            The pivot table supports client-side exporting and allows data to be exported in Excel, CSV, and PDF formats
            using the
            <code>excelExport</code>,
            <code>csvExport</code>, and
            <code>pdfExport</code> methods.
            To perform an export, the desired document type can be selected from the dropdown list in the property panel,
            followed by clicking the "Export" button.
        </p>

        <p>
            Headers and footers can also be added during export.
            For Excel, the <code>header</code> and <code>footer</code> properties are defined in the
            <code>excelExportProperties</code> object and passed to the <code>excelExport</code> method.
            For PDF, the <code>header</code> and <code>footer</code> properties are defined in the
            <code>pdfExportProperties</code> object and passed to the <code>pdfExport</code> method.
        </p>

        <p>
            More information on exporting is available in the corresponding
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pivotview/excel-export">Excel
                Export</a>,
            <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/pivotview/excel-export#export-data-to-a-csv-file">CSV Export</a>,
            and
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pivotview/pdf-export">PDF
                Export</a>
            documentation sections.
        </p>
    </div>

</div>
</template>

<script lang="ts">
import { PivotViewComponent, FieldList, IDataSet, ExcelExport, ExcelExportProperties, PdfExportProperties, ConditionalFormatting, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import {
  DropDownListComponent,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare var require: any;
export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        enableSorting: true,
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [
          { name: 'Amount', format: 'C0' },
          { name: 'In_Stock', format: 'N0' },
          { name: 'Sold', format: 'N0' },
        ],
        columns: [{ name: 'Year', expandAll: true }, { name: 'Quarter' }],
        dataSource: Pivot_Data,
        expandAll: false,
        conditionalFormatSettings: [
            {
                measure: 'In_Stock',
                value1: 120,
                conditions: 'LessThan',
                style: {
                    backgroundColor: '#FF005C',
                    color: 'white',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            },
            {
                value1: 150,
                measure: 'In_Stock',
                conditions: 'GreaterThan',
                style: {
                    backgroundColor: '#35B65A',
                    color: 'white',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            },
            {
                measure: 'Sold',
                value1: 1000,
                conditions: 'LessThan',
                style: {
                    backgroundColor: '#FF005C',
                    color: 'white',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            },
            {
                value1: 1100,
                measure: 'Sold',
                conditions: 'GreaterThan',
                style: {
                    backgroundColor: '#35B65A',
                    color: 'white',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            },
            {
                measure: 'Amount',
                value1: 7000,
                conditions: 'LessThan',
                style: {
                    backgroundColor: '#FF005C',
                    color: 'white',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            },
            {
                value1: 12000,
                measure: 'Amount',
                conditions: 'GreaterThan',
                style: {
                    backgroundColor: '#35B65A',
                    color: 'white',
                    fontFamily: 'Segoe UI',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            },
        ],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        filterSettings: [
            { name: 'Year', type: 'Include', items: ['FY 2026'] },
            { name: 'Products', type: 'Include', items: ['Gloves', 'Fenders'] },
        ]
      },
      width: "100%",
      height: 350,
      gridSettings: { columnWidth: 140 },
      allowExcelExport: true,
      allowPdfExport: true,
      showFieldList: true,
      modeData: ["Excel", "CSV", "PDF"],
      allowConditionalFormatting: true
    };
  },
  methods: {
    btnClick: function(args: ChangeEventArgs) {
      let ddlObj = ((this as any).$refs.typeddl).ej2Instances; 
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      const today = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      });
      if (ddlObj.value === "Excel") {
        let excelExportProperties: ExcelExportProperties = {
            header: {
                headerRows: 4,
                    rows: [
                        { cells: [{ colSpan: 10, value: "Sales Performance Report - Q1 2026", style: { fontColor: '#1B4965', fontSize: 20, hAlign: 'Center', bold: true } }] },
                        { cells: [{ colSpan: 10, value: "Region: Global | Currency: USD", style: { fontColor: '#35B65A', fontSize: 15, hAlign: 'Center', bold: true } }] }
                    ]
            },
            footer: {
                footerRows: 4,
                    rows: [
                        { cells: [{ colSpan: 10, value: "Total In Stock: 1,863 | Total Units Sold: 6,327 | Total Sold Amount: $2,381,015", style: { fontColor: '#35B65A', fontSize: 15, hAlign: 'Center', bold: true } }] },
                        { cells: [{ colSpan: 10, value: `Report generated on: ${today}`, style: { fontColor: '#1B4965', fontSize: 15, hAlign: 'Center', bold: true } }] }
                    ]
            }
        };
        pivotObj.excelExport(excelExportProperties);
      } else if (ddlObj.value === "CSV") {
        pivotObj.csvExport();
      } else {
        let pdfExportProperties: PdfExportProperties = {
            header: {
                fromTop: 0,
                    height: 130,
                        contents: [
                            {
                                type: 'Text',
                                value: 'Sales Performance Report - Q1 2026',
                                position: { x: 275, y: 30 },
                                style: { textBrushColor: '#1B4965', fontSize: 35 }
                            },
                            {
                                type: 'Text',
                                value: 'Region: Global | Currency: USD',
                                position: { x: 385, y: 80 },
                                style: { textBrushColor: '#35B65A', fontSize: 22 }
                            }
                        ]
            },
            footer: {
                fromBottom: 160,
                    height: 150,
                        contents: [
                            {
                                type: 'Text',
                                value: "Total In Stock: 1,863 | Total Units Sold: 6,327 | Total Sold Amount: $2,381,015",
                                position: { x: 275, y: 0 },
                                style: { textBrushColor: '#35B65A', fontSize: 18 }
                            },
                            {
                                type: 'Text',
                                value: `Report generated on: ${today}`,
                                position: { x: 385, y: 25 },
                                style: { textBrushColor: '#1B4965', fontSize: 18 }
                            },
                            {
                                type: 'PageNumber',
                                pageNumberType: 'Numeric',
                                format: 'Page {$current} of {$total}',
                                position: { x: 915, y: 120 },
                                style: { textBrushColor: '#1B4965', fontSize: 20 }
                            }
                        ]
            }
        };
        pivotObj.pdfExport(pdfExportProperties);
      }
    }
  },
  provide: {
    pivotview: [FieldList, ExcelExport, ConditionalFormatting, PDFExport]
  }
}
</script>

<style scoped>
/deep/ #pivotview {
  width: 100%;
}
/deep/ .e-pivottable .e-static {
  width: 80% !important;
}
</style>