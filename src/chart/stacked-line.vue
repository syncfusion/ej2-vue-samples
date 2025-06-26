<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :subTitle="subTitle"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :tooltip="tooltip"
        :chartArea="chartArea"
        :width="width"
        :legendSettings='legend'
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData1"
            type="StackingLine"
            xName="x"
            yName="y"
            name="Wind"
            width="2"
            :marker='circleMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData2"
            type="StackingLine"
            xName="x"
            yName="y"
            name="Bio mass"
            width="2"
            :marker='diamondMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData3"
            type="StackingLine"
            xName="x"
            yName="y"
            name="Small Hydro"
            width="2"
            :marker='rectangleMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData4"
            type="StackingLine"
            xName="x"
            yName="y"
            name="Solar"
            width="2"
            :marker='triangleMarker'
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This Vue Stacked Line Chart example visualizes the yearly renewable energy generation in India from 2015
        to 2023.
    </p>
    </div>
    <div id="description">
      <p>In this example, you can see how to render and configure the stacked line chart. The stacked line chart
        visualizes data with y-values stacked one over another in a series order. It shows the relationship between individual values to the total sum of points.
      </p>
      <p>
        <code>Tooltips</code> are enabled in this example. To see a tooltip in action, hover over or tap on the chart.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking line series, we need to inject
        <code>StackingLineSeries</code> module using
        <code>provide: { chart: [StackingLineSeries] }</code> method.
      </p>
      <p>
        More information about the stacked line series can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stack-line" aria-label="Navigate to the documentation for Stacked Line Chart in Vue Chart component">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  StackingLineSeries,
  Legend,
  Tooltip,
  Category,
  Highlight
} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      seriesData1: [
        { x: 2015, y: 28.2 },
        { x: 2016, y: 28.6 },
        { x: 2017, y: 46.0 },
        { x: 2018, y: 52.7 },
        { x: 2019, y: 62.0 },
        { x: 2020, y: 64.6 },
        { x: 2021, y: 60.1 },
        { x: 2022, y: 68.6 },
        { x: 2023, y: 71.81 }
      ],
      seriesData2: [
        { x: 2015, y: 15.0 },
        { x: 2016, y: 16.7 },
        { x: 2017, y: 14.2 },
        { x: 2018, y: 15.3 },
        { x: 2019, y: 16.4 },
        { x: 2020, y: 13.9 },
        { x: 2021, y: 14.8 },
        { x: 2022, y: 16.1 },
        { x: 2023, y: 16.02 }
      ],
      seriesData3: [
        { x: 2015, y: 8.1 },
        { x: 2016, y: 8.4 },
        { x: 2017, y: 7.73 },
        { x: 2018, y: 5.1 },
        { x: 2019, y: 8.7 },
        { x: 2020, y: 9.4 },
        { x: 2021, y: 10.3 },
        { x: 2022, y: 10.4 },
        { x: 2023, y: 11.17 }
      ],
      seriesData4: [
        { x: 2015, y: 4.6 },
        { x: 2016, y: 7.5 },
        { x: 2017, y: 12.1 },
        { x: 2018, y: 25.9 },
        { x: 2019, y: 39.3 },
        { x: 2020, y: 50.1 },
        { x: 2021, y: 60.4 },
        { x: 2022, y: 73.5 },
        { x: 2023, y: 102.01 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
          majorGridLines: { width: 0 },
          minorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          valueType: 'Double',
          labelRotation: Browser.isDevice ? -45 : 0,
          labelIntersectAction: Browser.isDevice ? 'None' : 'Trim'
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          majorGridLines: { width: 1 },
          minorGridLines: { width: 1 },
          minorTickLines: { width: 0 },
          labelFormat: '{value}TWh',
          title: 'Energy Generation (TWh)'
      },
      chartArea: {
          border: {
            width: 0
          },
          margin: { 
            bottom: 12 
          }
      },
      width: Browser.isDevice ? "100%" : "75%",
      circleMarker: { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true },
      triangleMarker: { visible: true, height: 6, width: 6 , shape: 'Triangle' , isFilled: true },
      diamondMarker: {  visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true  },
      rectangleMarker: { visible: true, height: 5, width: 5 , shape: 'Rectangle' , isFilled: true },
      tooltip: {
          enable: true,
          enableHighlight: true,
          showNearestTooltip: true,
          header: '<b>${series.name}</b>',
          format: '${point.x} : <b>${point.y}</b>'
      },
      legend: { enableHighlight: true },
      title: 'Yearly Renewable Energy Generation in India (2015-2023)',
      subTitle: 'Source: wikipedia.org'
    };
  },
  provide: {
    chart: [StackingLineSeries, Legend, Tooltip, Category, Highlight]
  },
  methods: {}
};
</script>