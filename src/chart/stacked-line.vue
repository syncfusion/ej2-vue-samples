<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :tooltip="tooltip"
        :chartArea="chartArea"
        :width="width"
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y"
            name="John"
            width="2"
            dashArray="5,1"
            :marker="marker"
          ></e-series>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y1"
            name="Peter"
            width="2"
            dashArray="5,1"
            :marker="marker"
          ></e-series>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y2"
            name="Steve"
            width="2"
            dashArray="5,1"
            :marker="marker"
          ></e-series>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y3"
            name="Charle"
            width="2"
            dashArray="5,1"
            :marker="marker"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample visualizes the family expense data with stacked line series in the chart
        to identify who spent more money in each category. Data points are enhanced
        with marker and tooltip.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the stacked line type charts.
        Stacked Line type charts are used to represent time-dependent data, showing trends in data
        at equal intervals with stacked values of multiple series.
        You can use
        <code>dashArray</code>,
        <code>width</code>,
        <code>fill</code> properties to customize the line.
        <code>marker</code> used to represent individual data.
      </p>
      <p>Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking line series, we need to inject
        <code>StackingLineSeries</code> module using
        <code>provide: { chart: [StackingLineSeries] }</code> method.
      </p>
      <p>
        More information on the Stacking Line series can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/documentation/api/chart/series/#type"
        >documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  StackingLineSeries,
  Legend,
  Tooltip,
  Category
} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: "Food", y: 90, y1: 40, y2: 70, y3: 120 },
        { x: "Transport", y: 80, y1: 90, y2: 110, y3: 70 },
        { x: "Medical", y: 50, y1: 80, y2: 120, y3: 50 },
        { x: "Clothes", y: 70, y1: 30, y2: 60, y3: 180 },
        { x: "Personal Care", y: 30, y1: 80, y2: 80, y3: 30 },
        { x: "Books", y: 10, y1: 40, y2: 30, y3: 270 },
        { x: "Fitness", y: 100, y1: 30, y2: 70, y3: 40 },
        { x: "Electricity", y: 55, y1: 95, y2: 55, y3: 75 },
        { x: "Tax", y: 20, y1: 50, y2: 40, y3: 65 },
        { x: "Pet Care", y: 40, y1: 20, y2: 80, y3: 95 },
        { x: "Education", y: 45, y1: 15, y2: 45, y3: 195 },
        { x: "Entertainment", y: 75, y1: 45, y2: 65, y3: 115 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        valueType: "Category"
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Expense",
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 400,
        interval: 100,
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: "${value}"
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width: Browser.isDevice ? "100%" : "90%",
      marker: {
        visible: true
      },
      tooltip: {
        enable: true
      },
      title: "Family Expense for Month"
    };
  },
  provide: {
    chart: [StackingLineSeries, Legend, Tooltip, Category]
  },
  methods: {}
});
</script>