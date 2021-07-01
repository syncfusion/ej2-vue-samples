<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display: block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
      >
        <e-series-collection>
          <e-series
            :dataSource="data"
            type="SplineRangeArea"
            xName="x"
            :border="border"
            name="England"
            width="2"
            opacity="0.4"
            high="high"
            low="low"
            :marker="marker"
          >
          </e-series>
          <e-series
            :dataSource="data1"
            type="SplineRangeArea"
            xName="x"
            :border="border"
            name="India"
            width="2"
            opacity="0.4"
            high="high"
            low="low"
            :marker="marker"
          >
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample shows the monthly difference in temperature between two
        different countries using the spline range area series in the chart.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the spline range area type chart. 
        You can use <code>dashArray</code>, <code>width</code>, <code>fill</code> properties to customize the spline
        range area. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
      </p>
      <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module:</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. 
        To use Splinerangearea series, we need to inject <code>SplineRangeAreaSeries</code> module using
        <code>provide: { chart: [SplineRangeAreaSeries] }</code> method.
      </p>
      <p>
        More information on the area series can be found in this
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype"
          >documentation section</a
        >.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  SplineRangeAreaSeries,
  Category,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      data: [
        { x: "Jan", high: 14, low: 4 },
        { x: "Feb", high: 17, low: 7 },
        { x: "Mar", high: 20, low: 10 },
        { x: "Apr", high: 22, low: 12 },
        { x: "May", high: 20, low: 10 },
        { x: "Jun", high: 17, low: 7 },
        { x: "Jul", high: 15, low: 5 },
        { x: "Aug", high: 17, low: 7 },
        { x: "Sep", high: 20, low: 10 },
        { x: "Oct", high: 22, low: 12 },
        { x: "Nov", high: 20, low: 10 },
        { x: "Dec", high: 17, low: 7 },
      ],
      data1: [
        { x: "Jan", high: 29, low: 19 },
        { x: "Feb", high: 32, low: 22 },
        { x: "Mar", high: 35, low: 25 },
        { x: "Apr", high: 37, low: 27 },
        { x: "May", high: 35, low: 25 },
        { x: "Jun", high: 32, low: 22 },
        { x: "Jul", high: 30, low: 20 },
        { x: "Aug", high: 32, low: 22 },
        { x: "Sep", high: 35, low: 25 },
        { x: "Oct", high: 37, low: 27 },
        { x: "Nov", high: 35, low: 25 },
        { x: "Dec", high: 32, low: 22 },
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0,
        },
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}˚C",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minimum: 0,
        maximum: 40,
      },
      width: Browser.isDevice ? "100%" : "80%",
      marker: {
        visible: false,
      },
      legendSettings: {
        visible: true,
      },
      border: {
        width: 2,
      },
      tooltip: {
        enable: true,
      },
      title: "Monthly Temperature Range",
    };
  },
  provide: {
    chart: [SplineRangeAreaSeries, Category, Legend, Tooltip],
  },
  methods: {},
});
</script>