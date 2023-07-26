<template>
  <div class="control-section">
    <div id="spreadsheet-chart">
        <ejs-spreadsheet ref="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :created="created">
            <e-sheets>
                <e-sheet :name="GDP">
                    <e-rows>
                        <e-row :height="height" :cells="cells1"></e-row>
                        <e-row :height="height" :cells="cells2"></e-row>
                    </e-rows>
                <e-ranges>
                        <e-range :dataSource="dataSource" startCell="A3" ></e-range>
                </e-ranges>
                    <e-columns>
                        <e-column :width=80></e-column>
                        <e-column :width=75></e-column>
                        <e-column :width=75></e-column>
                        <e-column :width=75></e-column>
                        <e-column :width=75></e-column>
                    </e-columns>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
<div id="action-description">
    <p>
        This sample visualizes the data using chart feature by comparing the GDP of different countries with various years.
    </p>
</div>
<div id="description">
    <p>
        In this demo, the chart has been inserted in the specific cell position by using the <code>chart</code> property in the cell object. You can also insert a chart by using the <a target="_blank" href="https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#insertchart">insertChart</a> method.
        To enable or disable this feature use the <a target="_blank" href="https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowchart">allowChart</a> property in Spreadsheet.
    </p>
    <p>
        This sample is configured with import and export options. Use <b>Ctrl + O</b> to open an excel file and <b>Ctrl + S</b> to save an excel file with chart.
    </p>
    <p>
        More information about the Spreadsheet component can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/illustrations/#chart">
            documentation</a> section.
    </p>
</div>
<!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>
    .control-section .control-wrapper {
        height: 550px;
    }

    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
    }

    #spreadsheet-conditional-formatting {
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
import Vue from "vue";
import { SpreadsheetPlugin, getFormatFromType } from "@syncfusion/ej2-vue-spreadsheet";
import * as dataSource from "./chart-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
        height: 30,
        GDP:"GDP",
        dataSource: dataSource.GDPData,
        cells1: [
        { value: 'Gross Domestic Product (in trillions)', style: { backgroundColor: '#e56590', color: '#fff',
            fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }}
        ],
        cells2: [
        { index: 6, chart: [{ type: 'Column', range: 'A3:E10' }] }
        ],
         openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
         saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save'
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
           // Formatting cells dynamically using cellFormat method
             spreadsheet.cellFormat({ backgroundColor: '#e56590', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A3:E3');
             // Applying currency format to the specified range.
             spreadsheet.numberFormat(getFormatFromType('Currency'), 'B4:E10');
             // Merging the cells from A1 to E1
             spreadsheet.merge('A1:E1');
            }
        }
});
</script>
