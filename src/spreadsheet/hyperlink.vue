<template>
  <div class="control-section">
    <div id="spreadsheet">
        <ejs-spreadsheet  ref="spreadsheet" :created="created">
            <e-sheets>
                <e-sheet name="Cart">
                    <e-ranges>
                        <e-range :dataSource="dataSource1" startCell="B3" ></e-range>
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
                    <e-column :width="110"></e-column>
                    <e-column :width="110"></e-column>
                    </e-columns>
                </e-sheet>
                <e-sheet name="Stock">
                    <e-ranges>
                        <e-range :dataSource="dataSource2" ></e-range>
                    </e-ranges>
                    <e-rows>
                        <e-row :cells="cells00"></e-row>
                        <e-row :cells="cells11"></e-row>
                        <e-row :cells="cells22"></e-row>
                        <e-row :cells="cells33"></e-row>
                        <e-row :cells="cells44"></e-row>
                        <e-row :cells="cells55"></e-row>
                        <e-row :cells="cells66"></e-row>
                        <e-row :cells="cells77"></e-row>
                        <e-row :cells="cells88"></e-row>
                        <e-row :cells="cells99"></e-row>
                    </e-rows>
                    <e-columns>
                    <e-column :width="88"></e-column>
                    <e-column :width="88"></e-column>
                    <e-column :width="88"></e-column>
                    <e-column :width="88"></e-column>
                    <e-column :width="88"></e-column>
                    </e-columns>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
<div id="action-description">
    <p>
        This sample demonstrates the Hyperlink feature with the shopping cart scenario as an example. To add hyperlink, click the link button in the insert tab or click hyperlink option using the cell context menu.
    </p>
</div>
<div id="description">
    <ul>
        <li>
            This feature allows you to add reference as cell address or any web url to a cell and also navigate to a reference by clicking or tapping. You can enable or disable hyperlink by using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#allowhyperlink">
                allowHyperlink</a> property. 
        </li>
        <li>  
            In this sample, we have applied hyperlink to the cells using the <code>hyperlink</code> property in cell. We can also add hyperlink using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#addhyperlink">
                addHyperlink</a> method. In shopping cart scenario, we have added cell reference as hyperlink in the product id column. In the stock sheet, we have added web url as hyperlink in the place order column.
        </li>
    </ul>
    <p>
        More information about the Hyperlink can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/link">
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
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import * as dataSource from "./hyperlink-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
                        dataSource1: dataSource.hyperlinkCart,
                        dataSource2: dataSource.hyperlinkStock,
                        cells0: [{
                            value: 'Shopping Cart', style: {
                            fontSize: '20pt', fontWeight: 'bold',
                            textAlign: 'center', backgroundColor: '#279377', verticalAlign: 'middle', color: '#ffffff'
                        }
                    }],

                        cells1: [
                        {
                            value: 'Product ID', style: {
                                fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',
                                color: '#ffffff'
                            }
                        }
                    ],

                        cells2: [{ value: 'AG940Z', hyperlink: 'Stock!A2:D2' }],

                        cells3: [{ value: 'BJ120K', hyperlink: 'Stock!A3:D3' }],

                        cells4: [{ value: 'BC120M', hyperlink: 'Stock!A4:D4' }],

                        cells5: [{ value: 'BS121L', hyperlink: 'Stock!A5:D5' }],

                        cells6: [{ value: 'BU121K', hyperlink: 'Stock!A6:D6' }],

                        cells7: [{ value: 'BD121M', hyperlink: 'Stock!A7:D7' }],

                        cells8: [{ value: 'AT992X', hyperlink: 'Stock!A8:D8' }],

                        cells9: [{ value: 'AP992Z', hyperlink: 'Stock!A9:D9' }],

                        cells10: [{ value: 'AW920X', hyperlink: 'Stock!A10:D10' }],

                        cells111: [{
                        index: 4, value: 'Total Amount', style: { border: '1px solid #A6A6A6', fontWeight: 'bold',
                            textAlign: 'center', verticalAlign: 'middle' }
                    },
                    {
                        formula: '=Sum(F4:F12)', format: '$#,##0.00', style: {
                            border: '1px solid #A6A6A6',
                            textAlign: 'center', verticalAlign: 'middle', fontWeight: 'bold'
                        }
                    }],
                    cells00: [
                        {
                            index: 4, value: 'Place Order', style: {
                                fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',
                                color: '#ffffff'
                            }
                        }
                    ],
                        cells11: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],

                        cells22: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],

                        cells33: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],

                        cells44: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],

                        cells55: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],

                        cells66: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],

                        cells77: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],

                        cells88: [{ index: 4, value: 'EBay', hyperlink: 'https://www.ebay.com/' }],

                        cells99: [{ index: 4, value: 'Amazon', hyperlink: 'https://www.amazon.com/' }],

    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.merge('Cart!A1:F2');
        spreadsheet.numberFormat('$#,##0.00', 'Cart!E4:F12');
        spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, 'Cart!A1:F12');
        spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle' }, 'A1:F12');
        spreadsheet.cellFormat({
                    fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',
                    color: '#ffffff'
                }, 'Cart!A3:F3');
        spreadsheet.cellFormat({
                    fontWeight: 'bold', textAlign: 'center', backgroundColor: '#279377',
                    color: '#ffffff'
                }, 'Stock!A1:E1');
        spreadsheet.wrap('Stock!B1:D1');
        spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, 'Stock!A1:E10');
        spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle' }, 'Stock!A1:E11');
    }
  }
});
</script>