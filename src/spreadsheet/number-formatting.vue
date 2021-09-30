<template>
  <div class="control-section">
    <div id="spreadsheet-number-format">
      <ejs-spreadsheet ref="spreadsheet" :showRibbon="false" :showFormulaBar="false" :created="created">
        <e-sheets>
          <e-sheet name="Restaurant Invoice" selectedRange="E17">
            <e-ranges>
              <e-range :dataSource="dataSource" startCell="A3"></e-range>
            </e-ranges>
            <e-rows>
              <e-row :height="height">
                <e-cells>
                  <e-cell value="Customer Name"></e-cell>
                  <e-cell value="Cristi Espinos"></e-cell>
                  <e-cell :index="WaiterNameColIndex" value="Waiter Name"></e-cell>
                  <e-cell value="Raye Whines"></e-cell>
                </e-cells>
              </e-row>
              <e-row :height="height">
                <e-cells>
                  <e-cell value="Table No."></e-cell>
                  <e-cell value="8"></e-cell>
                  <e-cell :index="WaiterNameColIndex" value="Date"></e-cell>
                  <e-cell value="5/7/2019"></e-cell>
                </e-cells>
              </e-row>
              <e-row :index="rowIndex">
                <e-cells>
                  <e-cell :index="subTotalColIndex" value="Subtotal:"></e-cell>
                  <e-cell :index="formulaColIndex" formula="=SUBTOTAL(9,E4:E14)" format="$#,##0.00"></e-cell>
                </e-cells>
              </e-row>
              <e-row>
                <e-cells>
                  <e-cell :index="subTotalColIndex" value="Discount (8%):"></e-cell>
                  <e-cell :index="formulaColIndex" formula="=PRODUCT(8,E15)/100" format="$#,##0.00"></e-cell>
                </e-cells>
              </e-row>
              <e-row>
                <e-cells>
                  <e-cell :index="subTotalColIndex" value="Total Amount:"></e-cell>
                  <e-cell :index="formulaColIndex" formula="=SUM(E15-E16)" :format="accountingFormat"></e-cell>
                </e-cells>
              </e-row>
            </e-rows>
            <e-columns>
              <e-column :width="width1"></e-column>
              <e-column :width="width2"></e-column>
              <e-column :width="width3"></e-column>
              <e-column :width="width1"></e-column>
              <e-column :width="width1"></e-column>
            </e-columns>
          </e-sheet>
        </e-sheets>
      </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
    <div id="action-description">
      <p>
        This sample demonstrates number formatting feature with a restaurant invoice.
      </p>
    </div>
    <div id="description">
      <p>
        In this demo, number formatting is applied to specific cells by using the <code>format</code> property,
          and a range of cells by using the <code>numberFormat</code> method.
      </p>
      <p>
        In the Amount column, we have used Custom number formatting to highlight the values less than 350 and greater than 350 with red and blue colors respectively.
      </p>
      <p>
        More information about number formatting can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/formatting/#number-formatting">
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
import Vue from "vue";
import { SpreadsheetPlugin, getFormatFromType } from "@syncfusion/ej2-vue-spreadsheet";
import * as dataSource from "./number-format-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
      dataSource: dataSource.numberFormatData,
      WaiterNameColIndex: 3,
      height: 30,
      rowIndex: 14,
      subTotalColIndex: 1,
      formulaColIndex: 4,
      accountingFormat: getFormatFromType('Accounting'),
      width1: 120,
      width2: 180,
      width3: 100
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:E2');
        spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A3:E3');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'A4:A14');
        spreadsheet.cellFormat({ textAlign: 'center' }, 'C4:C14');
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'B17');
        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'E17');
        spreadsheet.cellFormat({ backgroundColor: '#F9FBE7' }, 'A4:E15');
        spreadsheet.cellFormat({ backgroundColor: '#1E88E5', color: '#F5F5F5' }, 'A1:E2');
        spreadsheet.cellFormat({ backgroundColor: '#BBDEFB' }, 'A3:E3');
        spreadsheet.cellFormat({ backgroundColor: '#B3E5FC' }, 'A15:E17');
        spreadsheet.numberFormat('$#,##0.00', 'D4:E14');
        spreadsheet.numberFormat('$#,##0.00', 'E15:E17');
        spreadsheet.numberFormat('[Red][<=350]$#,##0.00;[Blue][>350]$#,##0.00', 'E4:E14');
    }
  }
});
</script>