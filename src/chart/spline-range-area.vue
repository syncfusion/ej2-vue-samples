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
            :dataSource="cData"
            type="SplineRangeArea"
            xName="x"
            :border="border"
            width="2"
            opacity="0.7"
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
        This Vue Spline range area example visualizes the monthly difference in temperature between two different countries using the spline range area series in the chart.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the spline range area type chart.
        You can use <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/border/">border</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill">fill</a> properties to customize the spline range area. Both <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/marker/">marker</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/dataLabel/">dataLabel</a> are used to represent individual data and its value.
      </p>
      <p>
       The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/tooltip/">tooltip</a> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch enabled devices.
      </p>
      <br>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. 
        To use spline range area series, we need to inject <code>SplineRangeAreaSeries</code> module using
        <code>provide: { chart: [SplineRangeAreaSeries] }</code> method.
      </p>
      <p>
        More information about the area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#area-charts">documentation section</a>.
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
  Highlight,
  DateTime
} from "@syncfusion/ej2-vue-charts";
import { chartDataValues } from './financial-data';
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function () {
    return {
      cData : chartDataValues,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'dd MMM',
        edgeLabelPlacement: (Browser.isDevice) ? 'Shift' : 'Hide',
        majorGridLines: { width: 0 } 
      },
      chartArea: {
        border: {
          width: 0,
        },
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: -10,
        maximum: 25,
        interval: 5,
        majorTickLines: { width: 0 } 
      },
      legendSettings: {
            visible: false
        },
      width: Browser.isDevice ? "100%" : "75%",
      marker: {
        visible: false,
      },
      border: {
        width: 2,
      },
      tooltip: {
        enable: true,
        format: 'Temperature : <b>${point.low} - ${point.high}</b>',
        shared: false,
        header: '<b>${point.x}</b>'
      },
      title: "Temperature Variation by Month",
    };
  },
  provide: {
    chart: [SplineRangeAreaSeries, DateTime, Tooltip, Highlight],
  },
  methods: {},
});
</script>