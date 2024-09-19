<template>
  <div class="control-section">
    <div id="spreadsheet">
        <ejs-spreadsheet  ref="spreadsheet" :created="created">
            <e-sheets>
                <e-sheet name="Gross Pay">
                    <e-ranges>
                        <e-range :dataSource="dataSource" startCell="A3" ></e-range>
                    </e-ranges>
                    <e-rows>
                        <e-row :cells="cells0"></e-row>
                        <e-row :index="13" :cells="cells12"></e-row>
                    </e-rows>
                    <e-columns>
                    <e-column :width="88"></e-column>
                    <e-column :width="120"></e-column>
                    <e-column :width="106"></e-column>
                    <e-column :width="98"></e-column>
                    <e-column :width="110"></e-column>
                    <e-column :width="110"></e-column>
                    <e-column :width="110"></e-column>
                    <e-column :width="98"></e-column>
                    <e-column :width="130"></e-column>
                    </e-columns>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
<div id="action-description">
    <p>
        This sample explains the Data Validation feature with the gross pay calculation as an example. It is used to restrict the data that the user enters into a cell. To clear the applied validation, click the <code>Data Validation</code> button in the Data tab and <code>Clear Validation</code> option. You can also highlight the invalid data by selecting <code>Highlight Invalid Data</code> option.
    </p>
</div>
<div id="description">
    <ul>
        <li>
            This feature allows you to apply validation to a cell or range of cells based on the conditions required. You can enable or disable data validation by using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#allowdatavalidation">
                allowDataValidation</a> property.
        </li>
        <li>
            In this sample, we have applied data validation for List, String, Number, Date and Time by using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#adddatavalidation">
                addDataValidation</a> method with <code>ValidationModel</code> as argument.
        </li>
        <li>
            In the Employee Name column, we have used <code>TextLength</code> validation to provide proper name with more than 3 text length.
            In time in and time out column, we have provided <code>Time</code> validation for working hours between 8.00 AM to 6.00 PM. In the weekdays column, we have used <code>List</code> validation for weekdays (Monday to Friday).
        </li>
        <li>
            In the hours worked column, we have used <code>WholeNumber</code> validation to find out overtime calculation(i.e more than 8 hours). And also, we used the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addinvalidhighlight">addInvalidHighlight</a> to highlight the overtime hours of the employee.
        </li>
        <li>
            In the gross pay with overtime column, we have used <code>WholeNumber</code> validation.
            In this validation, we have used the input value as the cell reference. It helps in changing the criteria dynamically.
        </li>
    </ul>
    <p>
        More information about the Data Validation can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/cell-range/#data-validation">
            documentation</a> section.
    </p>
</div>
<!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet {
        height: 550px;
    }
    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }
</style>
<!-- custom code end -->
<script>
import { SpreadsheetComponent, SheetDirective, RowsDirective, RowDirective, SheetsDirective, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-spreadsheet';
import  dataSource from "./data-validation-data.json";

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
        dataSource: dataSource.grossPay,
        cells0: [{  value: 'Gross Pay Calculation', style:{ fontSize: "20pt", fontWeight : "bold", textAlign: "center", backgroundColor: '#B3FFB3', verticalAlign: 'middle'} }],
        cells12: [{ index: 7, value: 'Total Gross', style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight:'bold'}},
            {
                index: 8, formula: '=Sum(I4:I13)', format:'$#,##0.00', style: {border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight:'bold'}
            }]
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.merge('A1:I2');
        spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, "A1:I13");
        spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle'}, 'A3:I13');
        spreadsheet.cellFormat({ backgroundColor: '#B3FFB3', fontWeight : "bold"}, 'A3:I3');
        spreadsheet.numberFormat('$#,##0.00', 'H4:I13');
        spreadsheet.numberFormat('m/d/yyyy', 'C4:C13');
        spreadsheet.wrap('H3:I3');
        //Add Data validation to range.
        spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '9', ignoreBlank: false }, 'G4:G13');
        spreadsheet.addDataValidation({ type: 'TextLength', operator: 'GreaterThan', value1: '3', ignoreBlank: false }, 'B4:B13');
        spreadsheet.addDataValidation({ type: 'Time', operator: 'GreaterThan', value1: '8:00:00 AM', ignoreBlank: false  }, 'E4:E13');
        spreadsheet.addDataValidation({ type: 'Time', operator: 'LessThan', value1: '6:00:00 PM', ignoreBlank: false  }, 'F4:F13');
        spreadsheet.addDataValidation({ type: 'List', value1: 'Mon, Tue, Wed, Thu, Fri', ignoreBlank: false  }, 'D4:D13');
        spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '=H5', ignoreBlank: false }, 'I4:I13');
        //Highlight Invalid Data.
        spreadsheet.addInvalidHighlight('G4:G13');
        spreadsheet.addInvalidHighlight('I4:I13');
    }
  }
}
</script>