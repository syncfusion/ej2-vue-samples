<template>
  <div>
    <div class="control-section" id="pivot-grid-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :load="load"
          :dataBound="dataBound"
          :allowExcelExport="allowExcelExport"
          :allowConditionalFormatting="allowConditionalFormatting"
          :allowPdfExport="allowPdfExport"
          :showToolbar="showToolbar"
          :allowCalculatedField="allowCalculatedField"
          :showFieldList="showFieldList"
          :toolbar="toolbar"
          :saveReport="saveReport"
          :loadReport="loadReport"
          :fetchReport="fetchReport"
          :renameReport="renameReport"
          :removeReport="removeReport"
          :newReport="newReport"
		  :toolbarRender="beforeToolbarRender"
		  :displayOption="displayOption"
        ></ejs-pivotview>
      </div>
    </div>

    <div id="action-description">
      <p>This sample demonstrates the toolbar options of the pivot table. The options include report manipulations like create, save, save as, rename and delete, show or hide subtotals and grand totals, conditional formatting and exporting in the pivot table and pivot chart.</p>
    </div>
    <div id="description">
          <p>
        In this example, users can generate a report at runtime, as well as save and load them. Save and load operations
        are performed in localStorage (session storage) using the <b>saveReport</b> and <b>loadReport</b> events. Users can change to
        either pivot table or pivot chart using the toolbar options. Other toolbar options available are:
        </p>
        <table>
        <tr>
        <td style="vertical-align: top;padding: 10px 0;width:200px">
        <code>Create new report:</code>
        </td>
        <td>Allows user to create new reports at runtime.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Rename report:</code>
        </td>
        <td>Allows user to change current report name dynamically through UI.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Remove report:</code>
        </td>
        <td>Allows user to remove current report from the report collection at runtime.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Save as option:</code>
        </td>
        <td>Allows user to save report locally in browser memory.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Report list:</code>
        </td>
        <td>Allows user to swap between the reports within the report collection.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Pivot Table:</code>
        </td>
        <td>Allows user to view data in cross-tabulation format.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Pivot Chart and its types:</code>
        </td>
        <td>Allows user to view data in graphical format. The chart types include column, bar, line, area, etc.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Export:</code>
        </td>
        <td>Provides options to save data in PDF, Excel, and CSV document types.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Hide subtotals and grand totals:</code>
        </td>
        <td>Allows user to hide grand totals and subtotals (based on fields) in row and column.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Conditional formatting:</code>
        </td>
        <td>Allows user to customize cells base on certain conditions.</td>
        </tr>
        <tr>
        <td style="vertical-align: top;padding: 4px 0;">
        <code>Field List:</code>
        </td>
        <td>Provides option to alter the report dynamically through UI.</td>
        </tr>
        </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  GroupingBar,
  FieldList,
  IDataSet,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting
} from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
/* tslint:disable */
declare let require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        dataSource: Pivot_Data,
        expandAll: false,
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [{ name: "Product_Categories", caption: "Product Categories" }]
      },
      width: "100%",
      height: 300,
      gridSettings: { columnWidth: 140 },
      allowExcelExport: true,
      allowConditionalFormatting: true,
      allowPdfExport: true,
      displayOption: { view:'Both' },
      showToolbar: true,
      allowCalculatedField: true,
      showFieldList: true,
      toolbar: [
        "New",
        "Save",
        "SaveAs",
        "Rename",
        "Remove",
        "Load",
        "Grid",
        "Chart",
        "Export",
        "SubTotal",
        "GrandTotal",
        "ConditionalFormatting",
        "FieldList"
      ]
    };
  },
  methods: {
    saveReport: function(args: any) {
      let reports = [];
      let isSaved = false;
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reports = JSON.parse(localStorage.pivotviewReports);
      }
      if (args.report && args.reportName && args.reportName !== "") {
        reports.map(function(item: any) {
          if (args.reportName === item.reportName) {
            item.report = args.report;
            isSaved = true;
          }
        });
        if (!isSaved) {
          reports.push(args);
        }
        localStorage.pivotviewReports = JSON.stringify(reports);
      }
    },
    fetchReport: function(args: any) {
      let reportCollection = [];
      let reeportList: any = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function(item: any) {
        reeportList.push(item.reportName);
      });
      args.reportName = reeportList;
    },
    loadReport: function(args: any) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function(item: any) {
        if (args.reportName === item.reportName) {
          args.report = item.report;
        }
      });
      if (args.report) {
        pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
      }
    },
    removeReport: function(args: any) {
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      for (let i = 0; i < reportCollection.length; i++) {
        if (reportCollection[i].reportName === args.reportName) {
          reportCollection.splice(i, 1);
        }
      }
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportCollection);
      }
    },
    renameReport: function(args: any) {
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function(item: any) {
        if (args.reportName === item.reportName) {
          item.reportName = args.rename;
        }
      });
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportCollection);
      }
    },
    newReport: function() {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      pivotObj.setProperties(
        {
          dataSourceSettings: {
            columns: [],
            rows: [],
            values: [],
            filters: []
          }
        },
        false
      );
    },
	beforeToolbarRender: function(args: any) {
        args.customToolbar.splice(6, 0, {
            type: 'Separator' 
        });
        args.customToolbar.splice(9, 0, {
            type: 'Separator' 
        });
    }
  },
  provide: {
    pivotview: [
      FieldList,
      CalculatedField,
      Toolbar,
      PDFExport,
      ExcelExport,
      ConditionalFormatting
    ]
  }
});
</script>

<style>
#PivotView_PivotFieldList {
  width: auto !important;
}

#pivotview {
  width: 100%;
}

@media only screen and (max-width: 400px) {
  #pivot-grid-section {
    overflow: auto;
  }
}
</style>