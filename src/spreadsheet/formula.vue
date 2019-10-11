<template>
  <div class="control-section">
    <div id="spreadsheet-number-format">
      <ejs-spreadsheet ref="spreadsheet" :showRibbon="false" :dataBound="dataBound">
        <e-sheets>
          <e-sheet name="Stock Details" selectedRange="F15">
            <e-rangesettings>
              <e-rangesetting :dataSource="dataSource"></e-rangesetting>
            </e-rangesettings>
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
                  <e-cell :index="colIndex2" formula="=MIN(E2:E11)"></e-cell>
                </e-cells>
              </e-row>
              <e-row :height="height2">
                <e-cells>
                  <e-cell :index="colIndex1" value="Non-profitable days:"></e-cell>
                  <e-cell :index="colIndex2" formula="=COUNTIF(F2:F11,'<=0')" ></e-cell>
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
    <div id="action-description">
      <p>
        This sample demonstrates the analysis of a company's stock value for a certain period with formula feature.
      </p>
    </div>
    <div id="description">
      <p>
        The <code>Spreadsheet</code> component provides a built-in calculation library that supports most commonly used
          formulas. In this demo, a formula is specified to a cell using the <code>formula</code> property.
      </p>
      <p>
        More information about formula support can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/">
            documentation</a> section.
      </p>
    </div>
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
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import * as dataSource from "./formula-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
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
      width3: 140
    }
  },
  methods: {
    dataBound: function() {
        var spreadsheet = this.$refs.spreadsheet;
        if (!spreadsheet.ej2Instances.isOpen && spreadsheet.ej2Instances.sheets[spreadsheet.ej2Instances.activeSheetTab - 1].name === 'Stock Details') {
            spreadsheet.cellFormat
                ({ fontWeight: 'bold', backgroundColor: '#4ECDC4', textAlign: 'center', fontSize: '14px' }, 'A1:F1');
            spreadsheet.cellFormat({ backgroundColor: '#F2F2F2' }, 'A2:F11');
            spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#C6EFCE' }, 'A12:F15');
            spreadsheet.numberFormat('0.00', 'F2:F11');
        }
    }
  }
});
</script>