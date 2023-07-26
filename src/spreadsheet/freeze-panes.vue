<template>
  <div class="control-section">
    <div id="spreadsheet-default-section">
      <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :created="created">
        <e-sheets>
          <e-sheet name="Gross Salary" :frozenRows=2  :frozenColumns=2 selectedRange="C1">
            <e-ranges>
              <e-range :dataSource="dataSource" startCell= 'A2'></e-range>
            </e-ranges>
            <e-rows>
              <e-row :cells="cells1"></e-row>
              <e-row :index="rowIndex" :cells="cells2"></e-row>
            </e-rows>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
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
       This sample demonstrates the Spreadsheet freeze pane feature by applying frozen rows and columns with the Gross Salary scenario as an example. In this sample, you can see the frozen rows/columns that are visible while scrolling the sheet content vertically/horizontally.
      </p>
    </div>
    <div id="description">
      <p>
        Freeze Panes helps you to keep particular rows or columns visible when scrolling the sheet content in the spreadsheet. You can specify the number of frozen rows and columns using frozenRows and frozenColumns properties inside the `Sheet` property.
        In this sample, the first 2 rows and columns are frozen using the `frozenRows` and `frozenColumns` properties.
      </p>

      <p>
        More information about the Spreadsheet component can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/freeze-pane">
            documentation</a> section.
      </p>
    </div>
    <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-default-section {
        height: 550px;
    }

    .e-spreadsheet .e-main-panel .e-main-content {
        margin-left: 0 !important;
    }

    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }

    .ej2-new .sb-header,
    .ej2-new .sb-bread-crumb,
    .ej2-new #action-description,
    .ej2-new #description-section,
    .ej2-new #description {
        display: none
    }

    .ej2-new .container-fluid,
    .ej2-new .container-fluid .control-section,
    #sidebar-section {
        padding: 0px;
    }

    .ej2-new .sample-browser>.content.e-view {
        top: 0px;
        padding: 0px;
        text-align: initial;
        height: 100%;
        overflow: hidden;
    }

    .ej2-new .control-section .control-section {
        height: 100vh;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import dataSource from "./freeze-panes-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
      dataSource: dataSource.defaultData,
      rowIndex: 26,
      cells2: [
        { index: 13, value: "Total Amount", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },
        { formula: "=SUM(O4:O26)", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },
        { formula: "=SUM(P4:P26)", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },
      ],
      cells1: [
        { index: 1, value: "Period", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },
        { index: 3, value: "Total Gross Salary", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },
      ],
      width1: 80,
      width2: 100,
      openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
      saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save'
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.wrap('C2:P2');
        spreadsheet.merge('A1:B1');
        spreadsheet.merge('C1:P1');
        spreadsheet.cellFormat({ backgroundColor: '#4e4ee6', color: '#FFFFF4', fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle'}, 'A1:P2');
        spreadsheet.cellFormat({ backgroundColor: '#4e4ee6', color: '#FFFFF4' }, 'A3:B26');
        spreadsheet.numberFormat('$#,##0.00', 'C2:P26');
        spreadsheet.numberFormat('$#,##0.00', 'O27:P27');
    }
  }
});
</script>