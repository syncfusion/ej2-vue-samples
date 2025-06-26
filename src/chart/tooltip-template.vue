<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart id="chartcontainer" :backgroundImage="backgroundImage" :title="title" :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis" :tooltip="tooltip" :chartArea="chartArea" :width="width" :theme="theme">
        <template v-slot:myTemplate="{ data }">
          <div id="wrap">
            <table style="width:100%;  border: 1px solid black;" class="table-borderless">
              <tr>
                <th rowspan="2" style="background-color: #C1272D">
                  <img src="./images/grain.png" alt="Grain Picture"/>
                </th>
                <td
                  style="height: 25px; width: 50px; background-color: #C1272D; font-size: 14px; color: #E7C554; font-weight: bold; padding-left: 5px">
                  {{ data.x }}</td>
              </tr>
              <tr>
                <td
                  style="height: 25px; width: 50px; background-color: #C1272D; font-size: 18px; color:#FFFFFF ; font-weight: bold; padding-left: 5px">
                  {{ data.y + 'B' }}</td>
              </tr>
            </table>
          </div>
        </template>
        <e-series-collection>
          <e-series :dataSource="seriesData" type="Line" xName="x" yName="y" width="2" fill="#333333"
            :marker="marker"></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample visualizes USA wheat production data with the default line series in the chart. 
        Data points are enhanced with a background image and a tooltip template.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a background image and the tooltip template for the chart. 
        You can use the <code>BackgroundImage</code> property to configure the background for the chart and the <code>Template</code> property in <code>ChartTooltipSettings</code> to customize the tooltip UI.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use line series, we need to
        inject
        <code>LineSeries</code> module using
        <code>provide: { chart: [LineSeries] }</code> method.
      </p>
      <p>
        More information on the tooltip template can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/tool-tip/#tooltip-template" aria-label="Navigate to the documentation for Tooltip template in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  LineSeries,
  Category,
  Legend,
  Tooltip, Highlight
} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      backgroundImage: "source/chart/images/wheat.png",
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
        intervelType: 'Years',
        valueType: "Category",
        labelForamt: 'y',
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { color: "#EFEFEF", width: 3 }
      },

      primaryYAxis: {
        rangePadding: "None",
        labelStyle: { color: "white" },
        majorGridLines: { color: "#EFEFEF", width: 2 },
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
      width: Browser.isDevice ? "100%" : "75%",
      marker: {
        visible: true,
        width: 10,
        height: 10,
        fill: "#C1272D",
        border: { color: "#333333", width: 2 }
      },
      tooltip: {
        enable: true,
        template: "myTemplate", enableHighlight: true, showNearestTooltip: true
      },
      title: "USA Wheat Production"
    };
  },
  provide: {
    chart: [LineSeries, Category, Legend, Tooltip, Highlight]
  },
  methods: {}
};
</script>