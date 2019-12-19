<template>
  <div class="control-section">
    <div id="spreadsheet-default-section">
      <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :dataBound="dataBound">
        <e-sheets>
          <e-sheet name="Car Sales Report">
            <e-rangesettings>
              <e-rangesetting :dataSource="dataSource"></e-rangesetting>
            </e-rangesettings>
            <e-rows>
              <e-row :index="rowIndex" :cells="cells"></e-row>
            </e-rows>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width3"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the <code>Spreadsheet</code> component and its features such as editing, formulas,
        formatting, importing, and exporting.
      </p>
    </div>
    <div id="description">
      <p>
        The <code>Spreadsheet</code> component is used to organize and analyze data in a tabular format.
        It has a built-in calculation library that supports most commonly used formulas. Excel workbook files can be
        imported and exported by providing <code>openUrl</code> &
        <code>saveUrl</code> property.
      </p>
      <p>
        Data binding can be achieved by setting an array of JavaScript objects or an instance of Data Manager to the
        <code>dataSource</code> property under the rangeSettings of sheet. The <code>cellFormat</code> and
        <code>numberFormat</code> methods are used to apply format to a range of cells in the <code>dataBound</code> event.
      </p>
      <p>
        More information about the Spreadsheet component can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/getting-started">
            documentation</a> section.
      </p>
    </div>
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-default-section {
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
import * as dataSource from "./default-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
      dataSource: dataSource.defaultData,
      rowIndex: 30,
      colIndex: 4,
      cells: [
        { index: 4, value: 'Total Amount:', style: { fontWeight: 'bold', textAlign: 'right' } },
        { formula: '=SUM(F2:F30)', style: { fontWeight: 'bold' } },
      ],
      width1: 180,
      width2: 130,
      width3: 120,
      openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
      saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'
    }
  },
  methods: {
    dataBound: function() {
      var spreadsheet = this.$refs.spreadsheet;
      if (!spreadsheet.ej2Instances.isOpen && spreadsheet.ej2Instances.sheets[spreadsheet.ej2Instances.activeSheetTab - 1].name === 'Car Sales Report') {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
      }
    }
  }
});
</script>