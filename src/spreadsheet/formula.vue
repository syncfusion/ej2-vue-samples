<template>
  <div class="control-section">
    <div id="spreadsheet-number-format">
      <ejs-spreadsheet ref="spreadsheet" :showRibbon="false" :created="created">
        <e-sheets>
          <e-sheet name="Stock Details" selectedRange="F15">
            <e-ranges>
              <e-range :dataSource="dataSource"></e-range>
            </e-ranges>
            <e-rows>
              <e-row :height="height1"></e-row>
              <e-row :index="rowIndex" :height="height2">
                <e-cells>
                  <e-cell :index="colIndex1" value="Average profit:"></e-cell>
                  <e-cell :index="colIndex2" formula="=AVERAGE(F2:F11)" format="0.00"></e-cell>
                </e-cells>
              </e-row>
              <e-row :height="height2">
                <e-cells>
                  <e-cell :index="colIndex1" value="Maximum stock value:"></e-cell>
                  <e-cell :index="colIndex2" formula="=MAX(D2:D11)" format="0.00"></e-cell>
                </e-cells>
              </e-row>
              <e-row :height="height2">
                <e-cells>
                  <e-cell :index="colIndex1" value="Minimum stock value:"></e-cell>
                  <e-cell :index="colIndex2" formula="=MIN(E2:E11)" format="0.00"></e-cell>
                </e-cells>
              </e-row>
              <e-row :height="height2">
                <e-cells>
                  <e-cell :index="colIndex1" value="Non-profitable days:"></e-cell>
                  <e-cell :index="colIndex2" formula='=COUNTIF(F2:F11,"<=0")' ></e-cell>
                </e-cells>
              </e-row>
            </e-rows>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width3"></e-column>
              <e-column :width="width3"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
    <div id="action-description">
      <p>
        This sample demonstrates the analysis of a company's stock value for a certain period with formula and named range feature.
      </p>
    </div>
    <div id="description">
      <p>
        The <code>Spreadsheet</code> component provides a built-in calculation library that supports most commonly used
          formulas. In this demo, a formula is specified to a cell using the <code>formula</code> property.The ranges are specified
        using its name and its defined using <code>definedNames</code> property.

      </p>
      <p>
        More information about formula and named range support can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/formulas/">
            documentation</a> section.
      </p>
    </div>
    <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-number-format {
      height: 550px;
    }
    #sb-content .e-spreadsheet .e-tab .e-tab-text {
      display: inherit;
    }
</style>
<!-- custom code end -->
<script>
import { SpreadsheetComponent, SheetDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, SheetsDirective, ColumnsDirective, ColumnDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-vue-spreadsheet';
import dataSource from "./formula-data.json";

export default {
   components: {
    'ejs-spreadsheet': SpreadsheetComponent,
    'e-sheet': SheetDirective,
    'e-sheets': SheetsDirective,
    'e-row': RowDirective,
    'e-rows': RowsDirective,
    'e-cell': CellDirective,
    'e-cells': CellsDirective,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'e-range': RangeDirective,
    'e-ranges': RangesDirective
   },
   data: () => {
    return {
      dataSource: dataSource.formulaData,
      rowIndex: 11,
      height1: 40,
      height2: 25,
      colIndex1: 3,
      colIndex2: 5,
      width1: 100,
      width2: 130,
      width3: 140,
      definedNames: [
        { name: 'Profit', refersTo: '=F2:F11' },
        { name: 'High', refersTo: '=D2:D11'}
      ]
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#279377', color: '#fff', textAlign: 'center',verticalAlign: 'middle', fontSize: '14px' }, 'A1:F1');
        spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#EEEEEE' }, 'A12:F15');
        spreadsheet.numberFormat('0.00', 'F2:F11');
        spreadsheet.numberFormat('m/d/yyyy', 'A2:A11');
    }
  }
}
</script>