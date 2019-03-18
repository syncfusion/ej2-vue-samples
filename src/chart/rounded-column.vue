<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        :theme="theme"
        ref="chart"
        align="center"
        id="chartcontainerR"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
        :pointRender="pointRender"       
        :loaded="loaded"
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="Column"
            xName="x"
            yName="y"
            name="Tiger"
            width="2"
            :marker="marker"
            :cornerRadius="cornerRadius"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div style="float: right; margin-right: 10px;">
      Source:
      <a
        href="https://blogs.scientificamerican.com/extinction-countdown/tiger-populations-increasing/"
        target="_blank"
      >blogs.scientificamerican.com</a>
    </div>
    <div id="action-description">
      <p>This sample illustrates a rounded column series. Data points values are showed by using data label.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the column type charts. Column type charts are used for comparing
        the frequency, count, total or average of data in different categories. You can use
        <code>border</code>,
        <code>fill</code> properties to customize the vertical rect.
        <code>dataLabel</code> is used to represent individual
        data and its value.
      </p>
      <p>Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using
        <code>provide: { chart: [ ColumnSeries ] },</code> method.
      </p>
      <p>
        More information on the column series can be found in this
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype"
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
  ColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend
} from "@syncfusion/ej2-vue-charts";
import {
  fabricColors,
  materialColors,
  bootstrapColors,
  highContrastColors
} from "./theme-color";
Vue.use(ChartPlugin);
let count = 0;
let datasource1 = [
  { x: "Tea", y: 206, text: "Bangaladesh" },
  { x: "Misc", y: 123, text: "Bhutn" },
  { x: "Fish", y: 48, text: "Nepal" },
  { x: "Egg", y: 240, text: "Thiland" },
  { x: "Fruits", y: 170, text: "Malaysia" }
];
let datasource2 = [
  { x: "Tea", y: 86, text: "Bangaladesh" },
  { x: "Misc", y: 173, text: "Bhutn" },
  { x: "Fish", y: 188, text: "Nepal" },
  { x: "Egg", y: 109, text: "Thiland" },
  { x: "Fruits", y: 100, text: "Malaysia" }
];
let datasource3 = [
  { x: "Tea", y: 156, text: "Bangaladesh" },
  { x: "Misc", y: 33, text: "Bhutn" },
  { x: "Fish", y: 260, text: "Nepal" },
  { x: "Egg", y: 200, text: "Thiland" },
  { x: "Fruits", y: 30, text: "Malaysia" }
];
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
        { x: "Tea", y: 106, text: "Bangaladesh" },
        { x: "Misc", y: 103, text: "Bhutn" },
        { x: "Fish", y: 198, text: "Nepal" },
        { x: "Egg", y: 189, text: "Thiland" },
        { x: "Fruits", y: 250, text: "Malaysia" }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        majorGridLines: { width: 0 },
        tickPosition: "Inside",
        labelPosition: "Inside",
        labelStyle: { color: "#ffffff" }
      },
      chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 300,
        interval: 50,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: "transparent" }
      },

      width: Browser.isDevice ? "100%" : "60%",

      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { fontWeight: "600", color: "#ffffff" }
        }
      },

      legendSettings: { visible: false },

      tooltip: {
        enable: false
      },

      cornerRadius: {
        bottomLeft: 10,
        bottomRight: 10,
        topLeft: 10,
        topRight: 10
      },
      title: "Trade in Food Groups"
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip]
  },
  methods: {
    
    pointRender: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      if (selectedTheme && selectedTheme.indexOf("fabric") > -1) {
        args.fill = fabricColors[args.point.index % 10];
      } else if (selectedTheme === "material") {
        args.fill = materialColors[args.point.index % 10];
      } else if (selectedTheme === "highcontrast") {
        args.fill = highContrastColors[args.point.index % 10];
      } else {
        args.fill = bootstrapColors[args.point.index % 10];
      }
    },
    loaded: function(args) {
      this.$refs.chart.ej2Instances.loaded = null;
      let columninterval = setInterval(() => {
        if (document.getElementById('chartcontainerR')) {
        if (count === 0) {
          this.$refs.chart.ej2Instances.series[0].dataSource = datasource1;
          this.$refs.chart.ej2Instances.animate();
          count++;
        } else if (count === 1) {
          this.$refs.chart.ej2Instances.series[0].dataSource = datasource2;
          this.$refs.chart.ej2Instances.animate();
          count++;
        } else if (count === 2) {
          this.$refs.chart.ej2Instances.series[0].dataSource = datasource3;
          this.$refs.chart.ej2Instances.animate();
          count = 0;
        }
        } else {
          clearInterval(columninterval)
        }
      }, 2000);
    }
  }
});
</script>