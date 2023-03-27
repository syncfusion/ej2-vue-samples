<template>
  <div class="control-section">
    <div>
      <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings'
        :chartArea='chartArea' :width='width'>
        <e-series-collection>
          <e-series :dataSource='WeatherReportsA' type='Spline' xName='Day' yName='Temperature' name='Product A'
            :marker='marker' width=2> </e-series>
          <e-series :dataSource='WeatherReportsB' type='Spline' xName='Day' yName='Temperature' name='Product B'
            :marker='marker' width=2> </e-series>
          <e-series :dataSource='WeatherReportsC' type='Spline' xName='Day' yName='Temperature' name='Product C'
            :marker='marker' width=2> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
    </div>
    <div id="action-description">
      <p>
        This sample highlights a certain temperature range recorded over a year using the strip line feature.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a strip line for the chart. 
        Use the <code>Start</code> and <code>End</code> properties in the <code>ChartStripline</code> option to add a strip line to an axis. 
        You can add more than one strip line to the axis.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use strip line, we need to
        inject
        <code>StripLine</code> module using
        <code>Chart.Inject(StripLine)</code> method.
      </p>
      <p>
        More information on the strip line can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/strip-line/">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style>
#control-container {
  padding: 0px !important;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  SplineSeries,
  Tooltip,
  Legend,
  Category,
  StripLine,
  Highlight
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let fontSize = Browser.isDevice ? "14px" : "16px";

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      WeatherReportsA: [
        { Day: "Jan", Temperature: 90 },
        { Day: "Feb", Temperature: 92 },
        { Day: "Mar", Temperature: 94 },
        { Day: "Apr", Temperature: 95 },
        { Day: "May", Temperature: 94 },
        { Day: "Jun", Temperature: 96 },
        { Day: "Jul", Temperature: 97 },
        { Day: "Aug", Temperature: 98 },
        { Day: "Sep", Temperature: 97 },
        { Day: "Oct", Temperature: 95 },
        { Day: "Nov", Temperature: 90 },
        { Day: "Dec", Temperature: 95 },
      ],
      WeatherReportsB: [
        { Day: "Jan", Temperature: 85 },
        { Day: "Feb", Temperature: 86 },
        { Day: "Mar", Temperature: 87 },
        { Day: "Apr", Temperature: 88 },
        { Day: "May", Temperature: 87 },
        { Day: "Jun", Temperature: 90 },
        { Day: "Jul", Temperature: 91 },
        { Day: "Aug", Temperature: 90 },
        { Day: "Sep", Temperature: 93 },
        { Day: "Oct", Temperature: 90 },
        { Day: "Nov", Temperature: 85 },
        { Day: "Dec", Temperature: 90 },
      ],
      WeatherReportsC: [
        { Day: "Jan", Temperature: 80 },
        { Day: "Feb", Temperature: 81 },
        { Day: "Mar", Temperature: 82 },
        { Day: "Apr", Temperature: 83 },
        { Day: "May", Temperature: 84 },
        { Day: "Jun", Temperature: 83 },
        { Day: "Jul", Temperature: 82 },
        { Day: "Aug", Temperature: 81 },
        { Day: "Sep", Temperature: 85 },
        { Day: "Oct", Temperature: 84 },
        { Day: "Nov", Temperature: 83 },
        { Day: "Dec", Temperature: 82 },
      ],
      chartArea: {
        border: {
          width: 0
        }
      },
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 80,
        maximum: 100,
        interval: 5,
        lineStyle: { color: "#808080" },
        labelFormat: "{value}%",
        rangePadding: "None",
        majorTickLines: { width: 0 },
        //Initializing Striplines
        stripLines: [
          {
            start: 95,
            end: 100,
            text: "Good",
            color: "#ff512f",
            visible: true,
            horizontalAlignment: 'Middle',
            textStyle: { size: fontSize, color: "#ffffff", fontWeight: "500" },
            border: { width: 0 }
          },
          {
            start: 85,
            end: 95,
            text: "ok",
            color: "#fc902a",
            horizontalAlignment: 'Middle',
            visible: true,
            textStyle: { size: fontSize, color: "#ffffff", fontWeight: "500" },
            border: { width: 0 }
          },
          {
            start: 80,
            end: 85,
            text: "Average",
            visible: true,
            textStyle: { size: fontSize, color: "#ffffff", fontWeight: "500" },
            border: { width: 0 },
            color: "#f9d423"
          }
        ]
      },
      legendSettings: { visible: true, enableHighlight: true },
      tooltip: { enable: true, header: '', format: '<b>${point.x}</b> <br> Ratings : <b>${point.y}</b>' },
      marker: {
        visible: true,
        width: 7,
        height: 7,
      },
      width: Browser.isDevice ? "100%" : "75%",
      title: "Customer Satisfaction Rating"
    };
  },
  provide: {
    chart: [SplineSeries, Category, Legend, Tooltip, StripLine, Highlight]
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
  }
});
</script>