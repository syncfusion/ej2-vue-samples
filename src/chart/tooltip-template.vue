<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        id="chartcontainer"
        :backgroundImage="backgroundImage"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :tooltip="tooltip"
        :chartArea="chartArea"
        :width="width"
        :theme="theme"
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="Line"
            xName="x"
            yName="y"
            width="2"
            fill="#333333"
            :marker="marker"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample visualizes the USA Wheat Production data with default line series in the chart.
        Data points are enhanced with marker and tooltip.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the backgroundImage and tooltip template for the charts.
        You can use backgroundImage, tooltip, fill properties to customize the line. marker is used to represent individual data and its value.
      </p>
      <p>Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>
      <br />
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject
        <code>LineSeries</code> module using
        <code>provide: { chart: [LineSeries] }</code> method.
      </p>
      <p>
        More information on the line series can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/documentation/api/chart/series/#type"
        >documentation section</a>.
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import TooltipTemplate from "./tooltip-temp.vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  LineSeries,
  Category,
  Legend,
  Tooltip
} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
let tooltipTemp = function() {
  return { template: TooltipTemplate };
};
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      backgroundImage: "src/chart/images/wheat.png",
      theme: theme,
      seriesData: [
        { x: 2002, y: 1.61 },
        { x: 2003, y: 2.34 },
        { x: 2004, y: 2.16 },
        { x: 2005, y: 2.1 },
        { x: 2006, y: 1.81 },
        { x: 2007, y: 2.05 },
        { x: 2008, y: 2.5 },
        { x: 2009, y: 2.22 },
        { x: 2010, y: 2.21 },
        { x: 2011, y: 2.0 },
        { x: 2012, y: 2.27 }
      ],
      primaryXAxis: {
        labelStyle: { color: "white" },
        valueType: "Category",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { color: "#EFEFEF" }
      },

      primaryYAxis: {
        rangePadding: "None",
        labelStyle: { color: "white" },
        majorGridLines: { color: "#EFEFEF" },
        majorTickLines: { width: 0 },
        title: "Billion Bushels",
        titleStyle: { color: "white" },
        lineStyle: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width: Browser.isDevice ? "100%" : "80%",
      marker: {
        visible: true,
        width: 10,
        height: 10,
        fill: "#C1272D",
        border: { color: "#333333", width: 2 }
      },
      tooltip: {
        enable: true,
        template: tooltipTemp
      },
      title: "USA Wheat Production"
    };
  },
  provide: {
    chart: [LineSeries, Category, Legend, Tooltip]
  },
  methods: {}
});
</script>