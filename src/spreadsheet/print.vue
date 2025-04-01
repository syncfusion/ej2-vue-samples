<template>
    <div class="col-lg-8 control-section">
        <div id="spreadsheet">
            <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :created="created">
                <e-sheets>
                    <e-sheet name="Car Sales">
                        <e-ranges>
                            <e-range :dataSource="dataSource" startCell="A2"></e-range>
                        </e-ranges>
                        <e-rows>
                            <e-row :height="51" :cells="cells0"></e-row>
                            <e-row :height="45" :cells="cells1"></e-row>
                            <e-row :cells="cells2"></e-row>
                            <e-row :cells="cells3"></e-row>
                            <e-row :cells="cells4"></e-row>
                            <e-row :cells="cells5"></e-row>
                            <e-row :cells="cells6"></e-row>
                            <e-row :cells="cells7"></e-row>
                            <e-row :cells="cells8"></e-row>
                            <e-row :cells="cells9"></e-row>
                            <e-row :cells="cells10"></e-row>
                            <e-row :cells="cells11"></e-row>
                            <e-row :cells="cells12"></e-row>
                            <e-row :cells="cells13"></e-row>
                            <e-row :cells="cells14"></e-row>
                            <e-row :cells="cells15"></e-row>
                            <e-row :cells="cells16"></e-row>
                            <e-row :cells="cells17"></e-row>
                            <e-row :cells="cells18"></e-row>
                            <e-row :cells="cells19"></e-row>
                            <e-row :cells="cells20"></e-row>
                            <e-row :cells="cells21"></e-row>
                            <e-row :cells="cells22"></e-row>
                            <e-row :cells="cells23"></e-row>
                            <e-row :cells="cells24"></e-row>
                            <e-row :cells="cells25"></e-row>
                            <e-row :cells="cells26"></e-row>
                            <e-row :cells="cells27"></e-row>
                            <e-row :cells="cells28"></e-row>
                            <e-row :cells="cells29"></e-row>
                            <e-row :cells="cells30"></e-row>
                            <e-row :cells="cells31"></e-row>
                            <e-row :cells="cells32"></e-row>
                            <e-row :cells="cells33"></e-row>
                            <e-row :cells="cells34"></e-row>
                            <e-row :cells="cells35"></e-row>
                            <e-row :cells="cells36"></e-row>
                            <e-row :cells="cells37"></e-row>
                            <e-row :cells="cells38"></e-row>
                            <e-row :cells="cells39"></e-row>
                            <e-row :cells="cells40"></e-row>
                            <e-row :cells="cells41"></e-row>
                            <e-row :cells="cells42"></e-row>
                            <e-row :cells="cells43"></e-row>
                            <e-row :cells="cells44"></e-row>
                            <e-row :cells="cells45"></e-row>
                            <e-row :cells="cells46"></e-row>
                            <e-row :cells="cells47"></e-row>
                            <e-row :cells="cells48"></e-row>
                            <e-row :cells="cells49"></e-row>
                            <e-row :cells="cells50"></e-row>
                            <e-row :cells="cells51"></e-row>
                            <e-row :cells="cells52"></e-row>
                            <e-row :cells="cells53"></e-row>
                            <e-row :cells="cells54"></e-row>
                            <e-row :cells="cells55"></e-row>
                            <e-row :cells="cells56"></e-row>
                            <e-row :cells="cells57"></e-row>
                            <e-row :cells="cells58" :height="25"></e-row>
                        </e-rows>
                        <e-columns>
                            <e-column :width="125"></e-column>
                            <e-column :width="205"></e-column>
                            <e-column :width="115"></e-column>
                            <e-column :width="50"></e-column>
                            <e-column :width="90"></e-column>
                            <e-column :width="80"></e-column>
                            <e-column :width="20"></e-column>
                        </e-columns>
                    </e-sheet>
                    <e-sheet name="Yearly Report">
                        <e-ranges>
                            <e-range :dataSource="yearlyReportDataSource" startCell="A2"></e-range>
                        </e-ranges>
                        <e-rows>
                            <e-row :height="51" :cells="cells100"></e-row>
                            <e-row :height="23" :cells="cells101"></e-row>
                            <e-row :height="25" :index="31" :cells="cells102"></e-row>

                        </e-rows>
                        <e-columns>
                            <e-column :width="120"></e-column>
                            <e-column :width="80"></e-column>
                            <e-column :width="80"></e-column>
                            <e-column :width="80"></e-column>
                            <e-column :width="80"></e-column>
                            <e-column :width="80"></e-column>
                            <e-column :width="80"></e-column>
                            <e-column :width="80"></e-column>
                        </e-columns>
                    </e-sheet>
                </e-sheets>
            </ejs-spreadsheet>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%; margin-left: -20px;">
            <colgroup>
                <col span="1" style="width: 60%;">
                <col span="1" style="width: 40%;">
            </colgroup>
            <tbody>
                <tr style="height: 50px">
                    <td>
                        <div class="property-text" style="width: 90%">Print Type </div>
                    </td>
                    <td>
                        <ejs-dropdownlist id='printingOption' style="width:100;" :dataSource='dropDownListDataSource' index=0
                            :width='labelswidth' :change='changePrintType'></ejs-dropdownlist>
                    </td>
                </tr>

                <tr style="height: 70px">
                    <td>
                        <div class="property-text" style="width: 90%;">Enable row and column headers</div>
                    </td>
                    <td>
                        <div style="padding-top: 0px;  margin-left: -20px; margin-top: 6px;">
                            <ejs-checkbox id="header" :change="enableHeader"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 70px">
                    <td>
                        <div class="property-text" style="width: 90%;">Enable gridlines</div>
                    </td>
                    <td>
                        <div style="padding-top: 0px;  margin-left: -20px; margin-top: 6px;">
                            <ejs-checkbox id="gridline" :change="enableGridline"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 70px">
                    <td align="center" colspan="2" style="padding-left: 50px;">
                        <div>
                            <ejs-button id='togglebtn' :style='style' :isPrimary='isPrimary' :content='content'
                                v-on:click='printButton'></ejs-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- custom code start -->
    <div id="action-description">
        <p>
            This sample demonstrates the print functionality of the Spreadsheet within a car sales scenario as an
            example.
        </p>
    </div>
    <div id="description">
        <p>
            In this example, the spreadsheet's <b>"File"</b> menu features a <b>"Print"</b> option, allowing you to print
            the
            current worksheet without gridlines as well as row and column headers, which serves as the default print
            setting.
            You can also invoke the print option using the <kbd>Ctrl</kbd> + <kbd>P</kbd> keyboard shortcut. Any texts,
            charts, images, and formatted content incorporated into the document will be previewed and then printed.
        </p>
        <p>
            Furthermore, there are built-in customization options available. If you need to print either the current
            worksheet or the entire workbook, you can select the appropriate option from the <b>"Print type"</b> dropdown
            list
            in the property panel.
            To include row and column headers in the printed output, you can check the <b>"Enable row and column
                headers"</b>
            checkbox. Similarly, you can include gridlines in the printed output by checking the <b>"Enable gridlines"</b>
            checkbox.
            Upon selecting the desired options in the property panel and clicking the <b>"Print"</b> button, the
            <code>print</code> method of the spreadsheet is invoked, facilitating customized printing.
        </p>
    </div>
    <!-- custom code end -->
</template>
<script>
import { SpreadsheetComponent, SheetDirective, RowsDirective, RowDirective, SheetsDirective, ColumnsDirective, PrintType, ColumnDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-spreadsheet';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent, ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import dataSource from './print-data.json';

var imageSource = dataSource.base64Image; 
export default {
    components: {
        'ejs-spreadsheet': SpreadsheetComponent,
        'e-sheet': SheetDirective,
        'e-sheets': SheetsDirective,
        'e-row': RowDirective,
        'e-rows': RowsDirective,
        'e-column': ColumnDirective,
        'e-columns': ColumnsDirective,
        'e-range': RangeDirective,
        'e-ranges': RangesDirective,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-checkbox': CheckBoxComponent,
        'ejs-button': ButtonComponent
    },
    data: () => {
        return {
            dataSource: dataSource.printData,
            yearlyReportDataSource: dataSource.yearlyReport,
            openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
            saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save',
            labelswidth: '100%',
            printType: 'ActiveSheet',
            allowGridLines: false,
            allowRowColumnHeader: false,
            isPrimary: true, content: 'Print', style: 'text-transform:none !important',
            dropDownListDataSource: ["Active Sheet", "Workbook"],
            cells0: [{ image: [{src: imageSource, height: 40, width: 80, top: 5, left: 130}] },
            {
                index: 1, value: '          Ivaa Premium Cars', colSpan: 5, style: {
                    fontSize: '30pt', fontWeight: 'bold',
                    textAlign: 'left'
                }
            }
            ],

            cells1: [
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    wrap: true, style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    wrap: true, style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                }
            ],

            cells2: [
                { index: 1, hyperlink: 'sarah.johnson@example.com' },
                { index: 7, chart: [{ type: 'Column', range: 'C2:D58' }] }
            ],

            cells3: [
                { index: 1, hyperlink: 'michael.smith@example.com' }
            ],

            cells4: [
                { index: 1, hyperlink: 'emily.davis@example.com' }
            ],

            cells5: [
                { index: 1, hyperlink: 'john.anderson@example.com' }
            ],

            cells6: [
                { index: 1, hyperlink: 'jessica.martinez@example.com' }
            ],

            cells7: [
                { index: 1, hyperlink: 'daniel.thompson@example.com' }
            ],

            cells8: [
                { index: 1, hyperlink: 'samantha.harris@example.com' }
            ],

            cells9: [
                { index: 1, hyperlink: 'christopher.wilson@example.com' }
            ],

            cells10: [
                { index: 1, hyperlink: 'ashley.brown@example.com' }
            ],

            cells11: [
                { index: 1, hyperlink: 'matthew.taylor@example.com' }
            ],
            cells12: [
                { index: 1, hyperlink: 'olivia.garcia@example.com' }
            ],
            cells13: [
                { index: 1, hyperlink: 'david.hernandez@example.com' }
            ],
            cells14: [
                { index: 1, hyperlink: 'emma.moore@example.com' }
            ],
            cells15: [
                { index: 1, hyperlink: 'andrew.lewis@example.com' }
            ],
            cells16: [
                { index: 1, hyperlink: 'elizabeth.clark@example.com' }
            ],
            cells17: [
                { index: 1, hyperlink: 'james.walker@example.com' }
            ],
            cells18: [
                { index: 1, hyperlink: 'ava.rodriguez@example.com' }
            ],
            cells19: [
                { index: 1, hyperlink: 'ryan.white@example.com' }
            ],
            cells20: [
                { index: 1, hyperlink: 'madison.lee@example.com' }
            ],
            cells21: [
                { index: 1, hyperlink: 'nicholas.martin@example.com' }
            ],
            cells22: [
                { index: 1, hyperlink: 'sophia.hall@example.com' }
            ],
            cells23: [
                { index: 1, hyperlink: 'joshua.young@example.com' }
            ],
            cells24: [
                { index: 1, hyperlink: 'isabella.king@example.com' }
            ],
            cells25: [
                { index: 1, hyperlink: 'joseph.allen@example.com' }
            ],
            cells26: [
                { index: 1, hyperlink: 'charlotte.scott@example.com' }
            ],
            cells27: [
                { index: 1, hyperlink: 'william.green@example.com' }
            ],
            cells28: [
                { index: 1, hyperlink: 'amelia.adams@example.com' }
            ],
            cells29: [
                { index: 1, hyperlink: 'ethan.carter@example.com' }
            ],
            cells30: [
                { index: 1, hyperlink: 'mia.turner@example.com' }
            ],
            cells31: [
                { index: 1, hyperlink: 'alexander.baker@example.com' }
            ],
            cells32: [
                { index: 1, hyperlink: 'chloe.hill@example.com' }
            ],
            cells33: [
                { index: 1, hyperlink: 'benjamin.nelson@example.com' }
            ],
            cells34: [
                { index: 1, hyperlink: 'grace.mitchell@example.com' }
            ],
            cells35: [
                { index: 1, hyperlink: 'jacob.perez@example.com' }
            ],
            cells36: [
                { index: 1, hyperlink: 'avery.roberts@example.com' }
            ],
            cells37: [
                { index: 1, hyperlink: 'ethan.thomas@example.com' }
            ],
            cells38: [
                { index: 1, hyperlink: 'lily.phillips@example.com' }
            ],
            cells39: [
                { index: 1, hyperlink: 'samuel.davis@example.com' }
            ],
            cells40: [
                { index: 1, hyperlink: 'zoey.campbell@example.com' }
            ],
            cells41: [
                { index: 1, hyperlink: 'daniel.cooper@example.com' }
            ],
            cells42: [
                { index: 1, hyperlink: 'madeline.collins@example.com' }
            ],
            cells43: [
                { index: 1, hyperlink: 'nathan.edwards@example.com' }
            ],
            cells44: [
                { index: 1, hyperlink: 'evelyn.stewart@example.com' }
            ],
            cells45: [
                { index: 1, hyperlink: 'alexander.rivera@example.com' }
            ],
            cells46: [
                { index: 1, hyperlink: 'sophia.henderson@example.com' }
            ],
            cells47: [
                { index: 1, hyperlink: 'isaac.morris@example.com' }
            ],
            cells48: [
                { index: 1, hyperlink: 'claire.rogers@example.com' }
            ],
            cells49: [
                { index: 1, hyperlink: 'luke.flores@example.com' }
            ],
            cells50: [
                { index: 1, hyperlink: 'aubrey.long@example.com' }
            ],
            cells51: [
                { index: 1, hyperlink: 'julian.coleman@example.com' }
            ],
            cells52: [
                { index: 1, hyperlink: 'leah.reed@example.com' }
            ],
            cells53: [
                { index: 1, hyperlink: 'gabriel.bell@example.com' }
            ],
            cells54: [
                { index: 1, hyperlink: 'natalie.ward@example.com' }
            ],
            cells55: [
                { index: 1, hyperlink: 'lucas.brooks@example.com' }
            ],
            cells56: [
                { index: 1, hyperlink: 'hailey.mitchell@example.com' }
            ],
            cells57: [
                { index: 1, hyperlink: 'jackson.ward@example.com' }
            ],
            cells58: [{
                index: 4, value: 'Total Amount', style: {
                    border: '1px solid #A6A6A6', fontWeight: 'bold',
                    textAlign: 'center', verticalAlign: 'middle'
                }
            },
            {
                index: 5, formula: '=Sum(F3:F56)', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            }],
            cells100: [{ image: [{src: imageSource, height: 40, width: 80, top: 5, left: 95}] },{
                value: '       Ivaa Premium Cars', colSpan: 6, style: {
                    fontSize: '30pt', fontWeight: 'bold',
                    textAlign: 'left'
                }
            }
            ],
            cells101: [
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                },
                {
                    style: {
                        fontSize: '13pt', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#919aff',
                        verticalAlign: 'middle', color: '#ffffff'
                    }
                }
            ],

            cells102: [{
                index: 0, value: 'Total cars sold', style: {
                    border: '1px solid #A6A6A6', fontWeight: 'bold',
                    textAlign: 'left', verticalAlign: 'middle'
                }
            },
            {
                index: 1, formula: '=Sum(B3:B31)', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            },
            {
                index: 2, formula: '=Sum(C3:C31)', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            },
            {
                index: 3, formula: '=Sum(D3:D31)', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            },
            {
                index: 4, formula: '=Sum(E3:E31)', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            },
            {
                index: 5, formula: '=Sum(F3:F31)', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            },
            {
                index: 6, formula: '=Sum(G3:G31)', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            }

            ]
        }
    },
    methods: {
        created: function () {
            var spreadsheet = this.$refs.spreadsheet;
            spreadsheet.numberFormat('$#,##0.00', 'Car Sales!F3:F59');
            spreadsheet.numberFormat('m/d/yyyy', 'Car Sales!E3:E58');
        },
        changePrintType: function (args) {
            this.printType = args.value === 'Active Sheet' ? 'ActiveSheet': 'Workbook' ;
        },
        enableGridline: function (args) {
            this.allowGridLines = args.checked;
        },
        enableHeader: function (args) {
            this.allowRowColumnHeader = args.checked;
        },
        printButton: function (args) {
            this.$refs.spreadsheet.ej2Instances.print({ type: this.printType, allowGridLines: this.allowGridLines, allowRowColumnHeader: this.allowRowColumnHeader });
        }
    }
}
</script>
