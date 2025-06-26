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
            type="StackingLine100"
            xName="x"
            yName="y"
            name="Canada"
            width="2"
            :marker='circleMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData2"
            type="StackingLine100"
            xName="x"
            yName="y"
            name="Algeria"
            width="2"
            :marker='diamondMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData3"
            type="StackingLine100"
            xName="x"
            yName="y"
            name="Ireland"
            width="2"
            :marker='rectangleMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData4"
            type="StackingLine100"
            xName="x"
            yName="y"
            name="Armenia"
            width="2"
            :marker='triangleMarker'
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This Vue 100% Stacked Line Chart example visualizes the blood type distribution across different
        countries.
    </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the 100% stacked line chart. This chart displays
        multiple series of data as stacked lines, ensuring that the cumulative proportion of each stacked element always totals 100%.
        <code>Markers</code> are used to represent individual data and its values.
      </p>
      <p>
        <code>Tooltips</code> are enabled in this example. To see a tooltip in action, hover over or tap on the chart.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use 100% stacking line series, we need to inject
        <code>StackingLineSeries</code> module using
        <code>provide: { chart: [StackingLineSeries] }</code> method.
      </p>
      <p>
        More information about the 100% stacked line series can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stacked-line" aria-label="Navigate to the documentation for 100% Stacked Line Chart in Vue Chart component">documentation section</a>.
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
        { x: 'O+ve', y: 39.0 },
        { x: 'A+ve', y: 36.0 },
        { x: 'B+ve', y: 7.6 },
        { x: 'AB+ve', y: 2.5 },
        { x: 'O-ve', y: 7.0 },
        { x: 'A-ve', y: 6.0 },
        { x: 'B-ve', y: 1.4 },
        { x: 'AB-ve', y: 0.5 }
      ],
      seriesData2: [
        { x: 'O+ve', y: 40.0 },
        { x: 'A+ve', y: 30.0 },
        { x: 'B+ve', y: 15.0 },
        { x: 'AB+ve', y: 4.25 },
        { x: 'O-ve', y: 6.6 },
        { x: 'A-ve', y: 2.3 },
        { x: 'B-ve', y: 1.1 },
        { x: 'AB-ve', y: 0.75 }
      ],
      seriesData3: [
        { x: 'O+ve', y: 47.0 },
        { x: 'A+ve', y: 26.0 },
        { x: 'B+ve', y: 9.0 },
        { x: 'AB+ve', y: 2.0 },
        { x: 'O-ve', y: 8.0 },
        { x: 'A-ve', y: 5.0 },
        { x: 'B-ve', y: 2.0 },
        { x: 'AB-ve', y: 1.0 }
      ],
      seriesData4: [
        { x: 'O+ve', y: 29.0 },
        { x: 'A+ve', y: 46.3 },
        { x: 'B+ve', y: 12.0 },
        { x: 'AB+ve', y: 5.6 },
        { x: 'O-ve', y: 2.0 },
        { x: 'A-ve', y: 3.7 },
        { x: 'B-ve', y: 1.0 },
        { x: 'AB-ve', y: 0.4 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        lineStyle: { width: 0 },
        valueType: 'Category',
        labelRotation: Browser.isDevice ? -45 : 0,
        labelIntersectAction: Browser.isDevice ? 'None' : 'Trim'
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: 'Population Share (%)',
        lineStyle: { width: 0 },
        interval: 20,
        minorTickLines: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }
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
      legend: { enableHighlight: true },
      tooltip: {
        enable: true,
        format: '${point.x} : <b>${point.y}% (${point.percentage}%)</b>',
        enableHighlight: true,
        showNearestTooltip: true
      },
      title: 'Blood Type Distribution by Country',
      subTitle: 'Source: wikipedia.org'
    };
  },
  provide: {
    chart: [StackingLineSeries, Legend, Tooltip, Category, Highlight]
  },
  methods: {
    
  }
};
</script>