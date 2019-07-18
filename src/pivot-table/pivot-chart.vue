<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview_chart"
          ref="pivotview_chart"
          :dataSourceSettings="dataSourceSettings"
          :chartSettings="chartSettings"
          :displayOption="displayOption"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <table id="property" title="Properties" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div>
                <ejs-dropdownlist
                  id="charttypesddl"
                  :change="ddlOnChange"
                  :dataSource="chartTypes"
                  index="0"
                  placeholder="Chart Types"
                  floatLabelType="Auto"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
    <p>This sample demonstrates rendering a pivot chart using pivot data. Users can explore the data through drill-up and drill-down operations by clicking the grouping labels. The field list can also be used to change the report at runtime.</p>
</div>
<div id="description">
    <p>
        In this sample, the Pivot Table component plots a chart component based on the pivot report bound to it. This can be
        achieved by setting the property <code>displayOption.view</code> to <code>Chart</code>. The
        built-in options are:</br></br>

        <code>Table</code> -> Renders pivot table component only, which is the default.</br>
        <code>Chart</code> -> Renders pivot chart component only.</br>
        <code>Both</code> -> Renders both pivot table and pivot chart component.</br>
    </p>
    <p>
        You can change the chart types using the <b>Chart Types</b> dropdown list separately.
        The chart types can be set using the <code>chartSettings.chartSeries.type</code> property. The built-in chart
        types
        are:</br></br>

        <code>Column</code></br>
        <code>Line</code></br>
        <code>Spline</code></br>
        <code>Bar</code></br>
        <code>Area</code></br>
        <code>StepArea</code></br>
        <code>SplineArea</code></br>
        <code>StackingColumn</code></br>
        <code>StackingArea</code></br>
        <code>StackingBar</code></br>
        <code>StepLine</code></br>
        <code>Pareto</code></br>
        <code>Bubble</code></br>
        <code>Scatter</code></br>
        <code>StackingColumn100</code></br>
        <code>StackingBar100</code></br>
        <code>StackingArea100</code></br>
        <code>Polar</code></br>
        <code>Radar</code></br></br>


        In the sample, the field list option is enabled, through which you can see the result in the chart by altering
        the report dynamically.
        </br>
    </p>
    <p>
        <strong>Injecting Module:</strong>
    </p>
    <p>
        The pivot table features are segregated into individual modules. To take advantage of chart support,
        we need to inject the <code>PivotChart</code> module using the <code>provide</code> section.
    </p>
</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  PivotView,
  IDataSet,
  FieldList
} from "@syncfusion/ej2-vue-pivotview";
import { ChartTheme, ILoadedEventArgs } from "@syncfusion/ej2-vue-charts";
import {
  DropDownListPlugin,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple, Browser, addClass } from "@syncfusion/ej2-base";
import { PivotChart } from "@syncfusion/ej2-pivotview/src/pivotchart";
enableRipple(false);

Vue.use(PivotViewPlugin, DropDownListPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");

export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        rows: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        columns: [{ name: "Country" }, { name: "Products" }],
        valueSortSettings: { headerDelimiter: " - " },
        dataSource: Pivot_Data,
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }],
        values: [{ name: "Amount", caption: "Sales Amount" }],
        formatSettings: [{ name: "Amount", format: "C" }],
        filters: []
      },
      showFieldList: true,
      displayOption: { view: "Chart" },
      chartSettings: {
        title: "Sales Analysis",
        chartSeries: { type: "Column" },
        load: (args: ILoadedEventArgs) => {
          let selectedTheme: string = location.hash.split("/")[1];
          selectedTheme = selectedTheme ? selectedTheme : "Material";
          args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)) as ChartTheme;
        }
      },
      chartTypes: [
        "Column",
        "Bar",
        "Line",
        "Spline",
        "Area",
        "SplineArea",
        "StepLine",
        "StepArea",
        "StackingColumn",
        "StackingBar",
        "StackingArea",
        "StackingColumn100",
        "StackingBar100",
        "StackingArea100",
        "Scatter",
        "Bubble",
        "Polar",
        "Radar",
        "Pareto"
      ]
    };
  },
  methods: {
    ddlOnChange: function(args: ChangeEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview_chart).ej2Instances;
      pivotObj.chartSettings.chartSeries.type = args.value.toString();
    }
  },
  provide: {
    pivotview: [FieldList, PivotChart]
  }
});
</script>
