<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates how to export detail grids. In this sample, you can export the detail grid by
        clicking the corresponding export button on the grid's toolbar.</p>
    </div>
    <div>
        <ejs-grid id='DetailTemplateExport' ref='grid' :dataSource='data' :detailTemplate ="'detailTemplate'" :toolbar='toolbar' :toolbarClick='toolbarClick'
        height=350 :exportDetailTemplate="exportDetailTemplate" :allowExcelExport='true' :allowSorting='true' :allowPdfExport='true' >
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='120'></e-column>
                <e-column field='Title' headerText='Title' width='240'></e-column>
                <e-column field='HireDate' headerText='Hire Date' width='180' textAlign='Right' format='yMd'></e-column>
            </e-columns>
             <template v-slot:detailTemplate="{data}">
                <table class="detailtable" width="100%">
                    <colgroup>
                        <col width="35%">
                        <col width="35%">
                        <col width="30%">
                    </colgroup>
                    <tbody>
                        <tr>
                            <td rowspan="4" style="text-align: center;">
                                <img class='photo' :src="'source/grid/images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID" />
                            </td>
                            <td>
                                <span style="font-weight: 500;">First Name: </span> {{data.FirstName}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">Postal Code: </span> {{data.PostalCode}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;">Last Name: </span> {{data.LastName}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">City: </span> {{data.City}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;">Title: </span> {{data.Title}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">Phone: </span> {{data.HomePhone}}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;">Address: </span> {{data.Address}}
                            </td>
                            <td>
                                <span style="font-weight: 500;">HireDate: </span> {{format(data.HireDate)}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </ejs-grid>
    </div>

        <div id="description">
            <p>
                The detail row template provides additional information about a data row which can be shown or hidden by clicking the
                expand or collapse button. The <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#detailtemplate"> 
                detailTemplate</a></code> property accepts either the string or HTML element`s ID value, which will be used as the
                template for the detail row.
            </p>
            <p>
                In this demo, Employees' information is displayed in the detail row.
            </p>
            <p>Data Grid supports client-side exporting to export data to the Excel and PDF formats.</p>
            <p>In this demo, the Employees' information can be exported using the <code>exportDetailTemplate</code> event where each cell can be customized.
                The ExcelExport and PdfExport items are defined in the toolbar of the Grid. Actions are defined in
                the <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick">toolbarClick</a></code> event
                to export Grid data using <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#excelexport">excelExport</a>
                </code> and <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfexport">pdfExport</a></code> methods with the
                <code>hierarchyExportMode</code> set to <code>All</code>.
            </p>
            <p>
                The detail grids' export options can be changed by using the <code>hierarchyExportMode</code> property.
            </p>
            <p>The detail template allows you to export the grid with the following options,</p>
            <ul>
                <li><code>Expanded</code> : Exports only the visible detail rows in an expanded state.</li>
                <li><code>All</code> : Exports all the detail rows in an expanded state.</li>
                <li><code>None</code> : Exports the detail rows in a collapsed state.</li>
            </ul>
            <p style="font-weight: 500">Injecting Modules:</p>
            <p>
                Grid features are segregated into individual feature-wise modules.
                To use the detail template, PdfExport and ExcelExport Grid features, inject <code>DetailRow</code>,
                <code>PdfExport</code>, <code>ExcelExport</code> modules into the <code>provide</code> section.
            </p>
            <p>
                More information on the exporting configuration can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/grid/excel-export/excel-exporting">Excel-export</a> 
                and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/pdf-export/pdf-export">PDF-export</a> documentation sections.
            </p>
        </div>

</div>
</template>
<style scoped>
@import "../../styles/Grid/detail-template.css";
</style>

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, DetailRow, PdfExport, ExcelExport, Toolbar, ExportDetailTemplateEventArgs } from "@syncfusion/ej2-vue-grids";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { employeeData } from "./data-source";
import detailTemplate from "./detail-temp.vue";
import { Internationalization } from '@syncfusion/ej2-base';

let instance = new Internationalization();

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: employeeData,
      toolbar: ['ExcelExport', 'PdfExport'],
    };
  },
  methods: {
    format: function(value: any){
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    },
    toolbarClick: function (args: ClickEventArgs) {
        switch (args.item.id) {
            case 'DetailTemplateExport_pdfexport':
                ((this as any).$refs.grid).pdfExport({hierarchyExportMode: 'All'});
                break;
            case 'DetailTemplateExport_excelexport':
                ((this as any).$refs.grid).excelExport({hierarchyExportMode: 'All'});
                break;
        }
    },
    exportDetailTemplate: function (args: any) {
        args.value = {
            columnCount: 3,
            rows: [
                {
                    cells: [
                        {
                            index: 0, rowSpan: 4, image: args.action === 'excelexport' ? {
                                base64: args.parentRow.data['EmployeeImage'],
                                height: 80, width: 80
                            } : { base64: args.parentRow.data['EmployeeImage'], width: 80 }
                        },
                        { index: 1, value: 'First Name: ' + args.parentRow.data['FirstName'] },
                        { index: 2, value: 'Postal Code: ' + args.parentRow.data['PostalCode'] }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: 'Last Name: ' + args.parentRow.data['LastName'] },
                        { index: 2, value: 'City: ' + args.parentRow.data['City'] }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: 'Title: ' + args.parentRow.data['Title'] },
                        { index: 2, value: 'Phone: ' + args.parentRow.data['HomePhone'] }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: 'Address: ' + args.parentRow.data['Address'] },
                        { index: 2, value: 'HireDate: ' + this.format(args.parentRow.data['HireDate']) }
                    ]
                }
            ]
        };
    }
  },
  provide: {
      grid: [DetailRow, Toolbar, PdfExport, ExcelExport]
  }
}
</script>