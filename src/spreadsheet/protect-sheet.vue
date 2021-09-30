<template>
  <div class="control-section">
    <div id="spreadsheet-protect-sheet">
        <ejs-spreadsheet  ref="spreadsheet" password="spreadsheet" :openUrl="openUrl" :saveUrl="saveUrl" :allowOpen="false" :allowSave="false" :created="created" :beforeCellRender="beforeCellRender">
            <e-sheets>
                <e-sheet isProtected="true" name="EMI Calculator">
                    <e-rows>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Home Loan Calculator"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Loan Amount:"></e-cell>
                                <e-cell value="100000" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Interest Rate:"></e-cell>
                                <e-cell value="0.08" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Periods (terms in year):"></e-cell>
                                <e-cell value="1"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Start Date:"></e-cell>
                                <e-cell value="03-03-2020"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Loan EMI:"></e-cell>
                                <e-cell value="8698.84" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Number of Payments:"></e-cell>
                                <e-cell value="12"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row height:45>
                            <e-cells>
                                <e-cell index=1 value="Total Repayment Amount:"></e-cell>
                                <e-cell value="104386.11" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                        <e-row>
                            <e-cells>
                                <e-cell index=1 value="Total Interest Amount:"></e-cell>
                                <e-cell value="4386.11" format="$#,##0.00"></e-cell>
                            </e-cells>
                        </e-row>
                    </e-rows>
                    <e-columns>
                        <e-column index=1 :width=190></e-column>
                        <e-column :width=100></e-column>
                    </e-columns>
                </e-sheet>
                <e-sheet isProtected="true" name="EMI Schedule">
                    <e-ranges>
                        <e-range :dataSource="dataSource"></e-range>
                    </e-ranges>
                    <e-columns>
                            <e-column index=1 :width=110></e-column>
                            <e-column :width=85></e-column>
                            <e-column :width=85></e-column>
                            <e-column :width=80></e-column>
                            <e-column :width=90></e-column>
                    </e-columns>
                </e-sheet>
            </e-sheets>
        </ejs-spreadsheet>
    </div>
    <!-- custom code start -->
     <div id="action-description">
       <p>
        This sample demonstrates protect sheet and protect workbook with EMI calculation scenario as an example. To unprotect the sheet, click the unprotect sheet button in the Data tab. Meanwhile, to unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as <code>spreadsheet</code> in the dialog box.
    </p>
     </div>
    <div id="description">
        <p>
        Protect sheet helps you to prevent the users from modifying the data in the spreadsheet. Protect workbook helps you to protect the workbook with a password. In this demo, the `EMI Schedule` sheet is locked using <code>isProtected</code> property inside the `Sheet` property and protect the workbook with a password using <code>password</code> property.
    </p>
    <p>
        More information about protection feature can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/spreadsheet/protect-sheet/">
            documentation</a> section.
    </p>
     </div>
     <!-- custom code end -->
  </div>
</template>
<!-- custom code start -->
<style>

    #spreadsheet-protect-sheet {
      height: 550px;
    }
.control-section .control-wrapper {
        height: 550px;
    }

    #sb-content .e-spreadsheet .e-tab .e-tab-text {
        display: inherit;
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
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import * as dataSource from "./protect-sheet-data.json";
Vue.use(SpreadsheetPlugin);
export default Vue.extend({
   data: () => {
    return {
        dataSource: dataSource.protectSheet,
        openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',
        saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'
    }
  },
  methods: {
    created: function() {
        var spreadsheet = this.$refs.spreadsheet;
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'EMI Schedule!A1:F1');
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'EMI Calculator!B1');
        spreadsheet.numberFormat('$#,##0.00', 'EMI Schedule!C2:F13');
    },
    beforeCellRender: function(args) {
        var spreadsheet = this.$refs.spreadsheet;
        if (args.address === "B1" && spreadsheet.ej2Instances.sheets[spreadsheet.ej2Instances.activeSheetIndex].name === 'EMI Calculator') {
            (args.element).colSpan = 2;
        }
    }
}
});
</script>