<template>
  <div class="control-section">
    <div id="spreadsheet-cell-format">
      <ejs-spreadsheet ref="spreadsheet" :sheets="sheets" :showRibbon="false" :showFormulaBar="false" :beforeDataBound="beforeDataBound" :beforeCellRender="beforeCellRender"></ejs-spreadsheet>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the <code>Spreadsheet</code> cell formatting feature by applying different styles to a
          range of cells.
      </p>
    </div>
    <div id="description">
        <p>
            Cell formatting allows you to highlight cell data that appears in the Spreadsheet. It can be enabled
            or disabled using the <code>
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#allowcellformatting">allowCellFormatting</a>
            </code> property.
        </p>
        <p>
            In this sample, gridlines are hidden using the <code>showGridLines</code> property and the styles are
            applied using the <code>
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/cellModel/#style">style</a>
            </code> property and <code>
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#cellFormat">cellFormat</a>
            </code> method.
        </p>
        <p>
            More information about <code>cell formatting</code> can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/">
              documentation</a> section.
        </p>
    </div>
  </div>
</template>
<!-- custom code start -->
<style>
    #spreadsheet-cell-format {
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
import * as dataSource from "./cell-format-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
      return {
          sheets: [{
              name: 'Order Details',
              rangeSettings: [{ dataSource: dataSource.orderDetails }],
              columns:  [{ width: 80 }, { width: 140 }, { width: 100 }, { width: 232 }, { width: 120 }, { width: 100 },
                  { width: 100 }, { width: 120 }, { width: 80 }],
              rows: [{
                  height: 36,
                  // Applying cell formatting through cell binding
                  cells: [{ style: { textAlign: 'right' } }, { style: { textIndent: '2pt' } }, { style: { textAlign: 'right' } },
                      { style: { textIndent: '2pt' } }, { index: 5, style: { textAlign: 'right' } }, { index: 7, style: { textAlign: 'center' } },
                      { index: 8, style: { textAlign: 'right' } }] }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },
                      { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },
                      { height: 42 }, { height: 42 }],
                  showGridLines: false
              }]
      }
  },
  methods: {
    beforeDataBound: function() {
      // Skip setting cell formatting for other sheets and imported sheets
      if (this.applyCellFormat()) {
            // Applying cell formatting dynamically using cellFormat method
            this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#4b5366', color: '#ffffff', fontSize: '12pt' }, 'A1:I1');
            this.$refs.spreadsheet.cellFormat({ fontWeight: 'bold', textIndent: '2pt' }, 'B2:B16');
            this.$refs.spreadsheet.cellFormat({ fontStyle: 'italic', textIndent: '2pt' }, 'D2:D16');
            this.$refs.spreadsheet.cellFormat({ textIndent: '2pt' }, 'E1:E16');
            this.$refs.spreadsheet.cellFormat({ textIndent: '2pt' }, 'G1:G16');
            this.$refs.spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'H2:H16');
            this.$refs.spreadsheet.cellFormat({ fontFamily: 'Helvetica New', verticalAlign: 'middle' }, 'A1:I16');
        }
    },
    beforeCellRender: function(args) {
       if (this.applyCellFormat()) {
            if (args.cell && args.cell.value) {
                // Applying cell formatting before rendering the particular cell
                switch (args.cell.value) {
                    case 'Delivered':
                        this.$refs.spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, args.address);
                        break;
                    case 'Shipped':
                        this.$refs.spreadsheet.cellFormat({ color: '#62c9e8' }, args.address);
                        break;
                    case 'Pending':
                        this.$refs.spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, args.address);
                        break;
                    case 'Cancelled':
                        this.$refs.spreadsheet.cellFormat({ color: '#ff5b5b' }, args.address);
                        break;
                }
            }
      }
    },
    applyCellFormat: function() {
      return !this.$refs.spreadsheet.ej2Instances.isOpen && this.$refs.spreadsheet.ej2Instances.sheets[this.$refs.spreadsheet.ej2Instances.activeSheetTab - 1].name === 'Order Details';
    }
  }
});
</script>