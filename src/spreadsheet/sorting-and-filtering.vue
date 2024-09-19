<template>
  <div class="control-section">
    <div id="spreadsheet-sorting-and-filtering">
        <ejs-spreadsheet ref="spreadsheet" :created="created" :openUrl="openUrl" :saveUrl="saveUrl">
            <e-sheets>
                <e-sheet :name="Employeedetails">
                <e-ranges>
                        <e-range :dataSource="dataSource"></e-range>
                </e-ranges>
                    <e-columns>
                        <e-column :width=110></e-column>
                        <e-column :width=142></e-column>
                        <e-column :width=80></e-column>
                        <e-column :width=137></e-column>
                        <e-column :width=122></e-column>
                        <e-column :width=92></e-column>
                        <e-column :width=124></e-column>
                    </e-columns>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
     <div id="action-description">
    <p>
        This sample demonstrates sorting and filtering feature using employee details.
    </p>
     </div>
    <div id="description">
        <p>
        In this demo, sorting is applied to B(Employee Name) column in ascending order using <code>sort</code> method.
        The sort order can be specified in <code>order</code> property with following values `Ascending` or `Descending` and its
        default value is `Ascending`.

        The sorted data is filtered with value 'Services' in `D` column using <code>
            <a target="_blank" href="https://ej2.syncfusion.com/documentation/api/spreadsheet/#applyfilter">applyFilter</a>
            </code> method in call back function of <code>
                <a target="_blank" href="https://ej2.syncfusion.com/documentation/api/spreadsheet/#sort">sort</a>
                </code> method.
    </p>
    <p>
        More information about sorting and filtering feature can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/sort/">
            documentation</a> section.
    </p>
     </div>
     <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>

    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }

    #spreadsheet-sorting-and-filtering {
      height: 550px;
    }

    .ej2-new .control-section {
        height: 550px;
    }
    .e-spreadsheet .e-main-panel .e-main-content{
        margin-left: 0 !important;
    }
</style>
<!-- custom code end -->
<script>
import { SpreadsheetComponent, SheetDirective, SheetsDirective, RangeDirective, RangesDirective, ColumnDirective, ColumnsDirective, getFormatFromType  } from "@syncfusion/ej2-vue-spreadsheet";
import dataSource from "./sorting-and-filtering-data.json";

export default {
   components: {
    'ejs-spreadsheet': SpreadsheetComponent,
    'e-sheet': SheetDirective,
    'e-sheets': SheetsDirective,
    'e-range': RangeDirective,
    'e-ranges': RangesDirective,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
   },
   data: () => {
    return {
        Employeedetails:"Employee deatils",
        dataSource: dataSource.sortingAndFiltering,
        openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
        saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save'
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:G1');
        spreadsheet.sort({ sortDescriptors: { field: 'B' } }, 'A2:G51').then(() => {
                // Filtered D(Department  field) column with value 'Services'
                spreadsheet.applyFilter([{ field: 'D', operator: 'equal', value: 'Services' }], 'A1:G51');
            });
        spreadsheet.numberFormat('m/d/yyyy', 'E2:E51');
        spreadsheet.numberFormat(getFormatFromType('Currency'), 'F2:F51');
            }
        }
}
</script>