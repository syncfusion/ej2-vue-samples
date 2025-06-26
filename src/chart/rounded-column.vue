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
        :subTitle="subTitle"
        :titleStyle="titleStyle"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
        :height="height"    
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="Bar"
            xName="x"
            yName="y"
            columnWidth=0.5
            :cornerRadius="cornerRadius"
            :marker="marker"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample showcases a bar chart with rounded corners, illustrating the anticipated growth rates across various sectors in 2024.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the bar chart. The bar chart is similar to the column chart, but the orientation of the y-axis is horizontal rather than vertical. You can use the <code>cornerRadius</code> option to customize the horizontal rectangle, resulting in a rounded bar.
      </p>
      <p>
        <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover over a point or tap on a point in
        touch-enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using
        <code>provide: { chart: [ ColumnSeries ] },</code> method.
      </p>
      <p>
        More information about the column type series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column" aria-label="Navigate to the documentation for Column Chart in Vue Chart component">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, BarSeries, Category, DataLabel, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme, roundedPointRender } from "./theme-color";
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
      seriesData: [
          { x: 'Healthcare', y: 0.9, text: '0.9%' },
          { x: 'Real Estate', y: 1.3, text: '1.3%' },
          { x: 'Energy', y: 2.3, text: '2.3%' },
          { x: Browser.isDevice ? 'Consumer <br> Staples' : 'Consumer Staples', y: 12.0, text: '12.0%' },
          { x: 'Industrials', y: 15.6, text: '15.6%' },
          { x: 'Utilities', y: 19.6, text: '19.6%' },
          { x: Browser.isDevice ? 'S&P <br> 500 Average' : 'S&P 500 Average', y: 23.3, text: '23.3%' },
          { x: 'Financials', y: 28.4, text: '28.4%' },
          { x: Browser.isDevice ? 'Consumer <br> Discretionary' : 'Consumer Discretionary', y: 29.1, text: '29.1%' },
          { x: Browser.isDevice ? 'Information <br> Technology' : 'Information Technology', y: 35.7, text: '35.7%' },
          { x: Browser.isDevice ? 'Communication <br> Services' : 'Communication Services', y: 38.9, text: '38.9%' }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelPosition: 'Outside',
        labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45'
      },
      chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 50,
        title: 'Sector-wise Growth (%)',
        labelFormat: '{value}%',
        interval: 10,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        opposedPosition: true
      },
      width: Browser.isDevice ? "100%" : "77%",
      height: "500px",
      marker: {
        dataLabel: { visible: true, name: 'text', enableRotation: false, angle: -90, font: { fontWeight: '600' } }
      },
      legendSettings: { visible: false },
      highlightColor: 'transparent',
      tooltip: {
        enable: true, 
        header: Browser.isDevice ? "" : "<b>${point.x}</b>", 
        format: "Growth Rate : <b>${point.text}</b>"
      },
      cornerRadius: { bottomLeft: Browser.isDevice ? 8 : 10, bottomRight: Browser.isDevice ? 8 : 10, topLeft: Browser.isDevice ? 8 : 10, topRight: Browser.isDevice ? 8 : 10 },
      title: 'Top Performing Market Sectors by Growth Rate (2024)',
      subTitle: 'Source: visualcapitalist.com',
      titleStyle: { position: 'Bottom' }
    };
  },
  provide: {
    chart: [BarSeries, Legend, DataLabel, Category, Tooltip]
  },
  methods: {
  }
};
</script>