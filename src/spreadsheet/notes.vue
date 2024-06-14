<template>
    <div class="control-section">
        <div id="spreadsheet">
            <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :created="created">
                <e-sheets>
                    <e-sheet name="Cart">
                        <e-ranges>
                            <e-range :dataSource="dataSource" startCell="B3"></e-range>
                        </e-ranges>
                        <e-rows>
                            <e-row :cells="cells0"></e-row>
                            <e-row :index="2" :cells="cells1"></e-row>
                            <e-row :cells="cells2"></e-row>
                            <e-row :cells="cells3"></e-row>
                            <e-row :cells="cells4"></e-row>
                            <e-row :cells="cells5"></e-row>
                            <e-row :cells="cells6"></e-row>
                            <e-row :cells="cells7"></e-row>
                            <e-row :cells="cells8"></e-row>
                            <e-row :cells="cells9"></e-row>
                            <e-row :cells="cells10"></e-row>
                            <e-row :cells="cells111"></e-row>
                        </e-rows>
                        <e-columns>
                            <e-column :width="88"></e-column>
                            <e-column :width="120"></e-column>
                            <e-column :width="100"></e-column>
                            <e-column :width="100"></e-column>
                            <e-column :width="100"></e-column>
                            <e-column :width="110"></e-column>
                        </e-columns>
                    </e-sheet>
                </e-sheets>
            </ejs-spreadsheet>
        </div>
        <!-- custom code start -->
        <div id="action-description">
            <p>
                This sample demonstrates the <b>Notes</b> feature using the shopping cart scenario as an example. When
                you
                hover your mouse over the red indicator in the right corner of the cell, any note attached to the cell
                will be displayed.
            </p>
        </div>
        <div id="description">
            <p>The <b>Notes</b> feature allows you to add comments while reviewing a document. You can enable or disable
                the notes option using the <code>enableNotes</code> property; by default, it's enabled. To insert a note
                into cells, use the
                <b>"Add Note"</b> context menu option. Once added, notes can be edited or removed using the <b>"Edit
                    Note"</b> and
                <b>"Delete Note"</b> context menu options respectively.
            </p>
            <p>The following keyboard shortcuts apply to the <b>Notes</b> feature:</p>
            <ul>
                <li>
                    <span class="key-class"><kbd>Shift</kbd> + <kbd>F2</kbd></span>
                    <span>- Add a note to the current cell.</span>
                </li>
                <li><span class="key-class"><kbd>Esc</kbd></span>
                    <span>- Save and close the note.</span>
                </li>
            </ul>
        </div>
        <!-- custom code end -->
    </div>
</template>
<!-- custom code start -->
<style>
.key-class {
    display: inline-block;
    width: 130px;
}
</style>
<!-- custom code end -->
<script>
import { SpreadsheetComponent, SheetDirective, RowsDirective, RowDirective, SheetsDirective, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-spreadsheet';
import dataSource from "./notes-data.json";

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
        'e-ranges': RangesDirective
    },
    data: () => {
        return {
            dataSource: dataSource.notesData,
            openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
            saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save',
            cells0: [{
                value: 'Shopping Cart', rowSpan: 2, colSpan: 6, style: {
                    fontSize: '20pt', fontWeight: 'bold',
                    textAlign: 'center', backgroundColor: '#279377', verticalAlign: 'middle', color: '#ffffff'
                }
            }],

            cells1: [{ value: 'Product ID', style: { fontWeight: 'bold', textAlign: 'center' } },
            { style: { fontWeight: 'bold', textAlign: 'center' } },
            { style: { fontWeight: 'bold', textAlign: 'center' } },
            { style: { fontWeight: 'bold', textAlign: 'center' } },
            { style: { fontWeight: 'bold', textAlign: 'center' } },
            { style: { fontWeight: 'bold', textAlign: 'center' } }
            ],

            cells2: [{ value: '101', style: { textAlign: 'left' } },
            { index: 1, notes: 'This product has been the most profitable this month.' }
            ],

            cells3: [{ value: '102', style: { textAlign: 'left' } },
            { index: 1, notes: 'This product has had the lowest sales in terms of quantity this month.' }
            ],

            cells4: [{ value: '103', style: { textAlign: 'left' } },
            { index: 1, notes: 'This product has been the least profitable this month.' }
            ],

            cells5: [{ value: '104', style: { textAlign: 'left' } }],

            cells6: [{ value: '105', style: { textAlign: 'left' } },
            { index: 1, notes: 'This product has had the highest sales in terms of quantity this month.' }
            ],

            cells7: [{ value: '106', style: { textAlign: 'left' } }],

            cells8: [{ value: '107', style: { textAlign: 'left' } }],

            cells9: [{ value: '108', style: { textAlign: 'left' } }],

            cells10: [{ value: '109', style: { textAlign: 'left' } }],

            cells111: [{
                index: 4, value: 'Total Amount', style: {
                    border: '1px solid #A6A6A6', fontWeight: 'bold',
                    textAlign: 'center', verticalAlign: 'middle'
                }
            },
            {
                index: 5, formula: '=Sum(F4:F12)', format: '$#,##0.00', style: {
                    border: '1px solid #A6A6A6',
                    textAlign: 'right', verticalAlign: 'middle', fontWeight: 'bold'
                }
            }],
        }
    },
    methods: {
        created: function () {
            var spreadsheet = this.$refs.spreadsheet;
            spreadsheet.numberFormat('$#,##0.00', 'F4:F12');
            spreadsheet.numberFormat('$###', 'E4:E12');
            spreadsheet.freezePanes(3, 0);
        }
    }
}
</script>
