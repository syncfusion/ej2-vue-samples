<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart style="display: block" :theme="theme" align="center" id="chartcontainer" :title="title"
        :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :chartArea="chartArea" :width="width"
        :enableRtl="enableRtl" :tooltip="tooltip" :axisLabelRender="axisLabelRender" :load="load" :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource="seriesData" type="Column" xName="Year" yName="Sales" name="Sales" width="2" columnSpacing = 0.1>
          </e-series>
          <e-series :dataSource="seriesData" type="Column" xName="Year" yName="Expense" name="Expense" width="2" columnSpacing = 0.1>
          </e-series>
          <e-series :dataSource="seriesData" type="Column" xName="Year" yName="Profit" name="Profit" width="2" columnSpacing = 0.1>
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample visualizes the company performance with default column chart in right-to-left(RTL) direction. 
        The values of the data points are displayed in a tooltip, and the legend in the sample displays information about the series.
      </p>
    </div>
    <div id="description">
      <p>
        <code>Right-to-left(RTL)</code> is used to render the component from right to left direction and it can be enabled by setting <code>enableRtl</code> property as <b>true</b>. 
        In this demo, you can see <code>axis</code>, <code>data points</code>, <code>tooltip</code> and <code>legend</code> are aligned from right to left direction.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point
        in touch enabled devices.
      </p>
      <p><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise
        modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using
        <code>provide: { chart: [ColumnSeries] }</code> method.
      </p>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { ChartPlugin, ColumnSeries, Tooltip, Legend, Highlight} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { Year :  2016, Sales :  1000, Expense :  400, Profit :  600 },
        { Year :  2017, Sales :  970, Expense :  360, Profit :  610 },
        { Year :  2018, Sales :  1060, Expense :  920, Profit :  140 },
        { Year :  2019, Sales :  1030, Expense :  540, Profit :  490 },
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        majorGridLines: { width: 0 },
        minimum: 2015,
        maximum: 2020,
        interval: 1,
      },
      chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 1200,
        interval: 200,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        labelFormat: "{value}B"
      },

      enableRtl: true,

      axisLabelRender: function (args) {
        if (args.axis.orientation === "Horizontal") {
          args.cancel = args.value === 2015 || args.value === 2020;
        }
      },
      legendSettings: { visible: true, enableHighlight: true },
      width: Browser.isDevice ? "100%" : "75%",

      tooltip: {
        enable: true,
      },

      title: "Company Performance",
    };
  },
  provide: {
    chart: [ColumnSeries, Tooltip, Legend, Highlight],
  },
  methods: {
    load: function (args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
    },
  },
});
</script>