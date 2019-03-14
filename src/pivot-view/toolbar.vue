<template>
  <div>
    <div class="control-section" id="pivot-grid-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSource="dataSource"
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
      <p>This sample demonstrates the toolbar options of the pivotgrid widget.</p>
    </div>
    <div id="description">
      <p>
        In this sample, users can generate a report at runtime, as well as save and load them. Save and load operations
        are performed in localStorage (session storage) using the saveReport and loadReport events. Users can change the
        grid or chart view using the toggle option. Other toolbar options available are:
      </p>
      <p>
        <ul>
            <li>Create new report.</li>
            <li>Rename report.</li>
            <li>Remove report.</li>
            <li>Save as option.</li>
            <li>Hide subtotals and grand totals.</li>
            <li>Export to PDF, Excel, and CSV.</li>
            <li>PivotTable Field List</li>
        </ul>
      </p>
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
      dataSource: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        data: Pivot_Data,
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
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
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
        pivotGridObj.dataSource = JSON.parse(args.report).dataSource;
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
      let pivotGridObj = (<any>this.$refs.pivotview).ej2Instances;
      pivotGridObj.setProperties(
        {
          dataSource: {
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