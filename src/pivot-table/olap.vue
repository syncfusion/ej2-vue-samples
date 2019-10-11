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
          :showGroupingBar="showGroupingBar"
          :toolbar="toolbar"
          :saveReport="saveReport"
          :loadReport="loadReport"
          :fetchReport="fetchReport"
          :renameReport="renameReport"
          :removeReport="removeReport"
          :newReport="newReport"
          :toolbarRender="beforeToolbarRender"
          :displayOption="displayOption"
          :chartSettings="chartSettings"
        ></ejs-pivotview>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the rendering of a pivot table bound to an online SSAS OLAP cube as its data source.
        OLAP cube elements like dimension, hierarchy, measure, and others can be arranged in row, column, value, and
        slicer axes to create desired views at runtime.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, users can explore all of an OLAP cube and its elements and view the resultant report in a pivot
        table or pivot chart at runtime. Grouping bar and field list options are included for exploring the data. Along
        with these, toolbar options are included for switching to the pivot chart, performing report manipulation, and
        more:
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
          <td>Swap between reports within the report collection.</td>
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
            <code>Show MDX query:</code>
          </td>
          <td>View the MDX query of the current pivot table that is used to fetch the data from the cube.</td>
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
          <td>Hide grand totals and subtotals based on hierarchies in rows and columns.</td>
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
import { ChartTheme, ILoadedEventArgs } from "@syncfusion/ej2-vue-charts";
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
declare var require: any;
export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        catalog: "Adventure Works DW 2008 SE",
        cube: "Adventure Works",
        providerType: "SSAS",
        url: "https://bi.syncfusion.com/olap/msmdpump.dll",
        enableSorting: true,
        rows: [
          {
            name: "[Customer].[Customer Geography]",
            caption: "Customer Geography"
          }
        ],
        columns: [
          {
            name: "[Product].[Product Categories]",
            caption: "Product Categories"
          },
          { name: "[Measures]", caption: "Measures" }
        ],
        values: [
          { name: "[Measures].[Customer Count]", caption: "Customer Count" },
          {
            name: "[Measures].[Internet Sales Amount]",
            caption: "Internet Sales Amount"
          }
        ],
        filters: [{ name: "[Date].[Fiscal]", caption: "Date Fiscal" }],
        filterSettings: [
          {
            name: "[Date].[Fiscal]",
            items: [
              "[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]",
              "[Date].[Fiscal].[Fiscal Year].&[2005]"
            ],
            levelCount: 3
          }
        ]
      },
      width: "100%",
      height: 600,
      gridSettings: { columnWidth: 160 },
      allowExcelExport: true,
      allowConditionalFormatting: true,
      allowPdfExport: true,
      displayOption: { view: "Both" },
      showToolbar: true,
      allowCalculatedField: true,
      showFieldList: true,
      showGroupingBar: true,
      chartSettings: {
        load: (args: ILoadedEventArgs) => {
          let selectedTheme: string = location.hash.split("/")[1];
          selectedTheme = selectedTheme ? selectedTheme : "Material";
          args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)) as ChartTheme;
        }
      },
      toolbar: [
        "New",
        "Save",
        "SaveAs",
        "Rename",
        "Remove",
        "Load",
        "Grid",
        "Chart",
        "MDX",
        "Export",
        "SubTotal",
        "GrandTotal",
        "ConditionalFormatting",
        "FieldList"
      ]
    };
  },
  methods: {
    fetchReport: function(args: any) {
      let reportsCollection = [];
      let reeportList: any = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportsCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportsCollection.map(function(item: any) {
        reeportList.push(item.reportName);
      });
      args.reportName = reeportList;
    },
    newReport: function() {
      let pivotObject = (<any>this.$refs.pivotview).ej2Instances;
      pivotObject.setProperties(
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
    loadReport: function(args: any) {
      let pivotObject = (<any>this.$refs.pivotview).ej2Instances;
      let reportsCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportsCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportsCollection.map(function(item: any) {
        if (args.reportName === item.reportName) {
          args.report = item.report;
        }
      });
      if (args.report) {
        pivotObject.dataSourceSettings = JSON.parse(
          args.report
        ).dataSourceSettings;
      }
    },
    renameReport: function(args: any) {
      let reportsCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportsCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportsCollection.map(function(item: any) {
        if (args.reportName === item.reportName) {
          item.reportName = args.rename;
        }
      });
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportsCollection);
      }
    },
    removeReport: function(args: any) {
      let reportsCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportsCollection = JSON.parse(localStorage.pivotviewReports);
      }
      for (let i = 0; i < reportsCollection.length; i++) {
        if (reportsCollection[i].reportName === args.reportName) {
          reportsCollection.splice(i, 1);
        }
      }
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        localStorage.pivotviewReports = JSON.stringify(reportsCollection);
      }
    },
    beforeToolbarRender: function(args: any) {
      args.customToolbar.splice(6, 0, {
        type: "Separator"
      });
      args.customToolbar.splice(9, 0, {
        type: "Separator"
      });
    },
    saveReport: function(args: any) {
      let report = [];
      let isSave = false;
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        report = JSON.parse(localStorage.pivotviewReports);
      }
      if (args.report && args.reportName && args.reportName !== "") {
        report.map(function(item: any) {
          if (args.reportName === item.reportName) {
            item.report = args.report;
            isSave = true;
          }
        });
        if (!isSave) {
          report.push(args);
        }
        localStorage.pivotviewReports = JSON.stringify(report);
      }
    }
  },
  provide: {
    pivotview: [
      FieldList,
      CalculatedField,
      Toolbar,
      PDFExport,
      ExcelExport,
      ConditionalFormatting,
      GroupingBar
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