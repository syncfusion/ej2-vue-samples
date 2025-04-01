<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
        :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea' :width='width' :crosshair='crosshair'
        :indicators='indicators' :legendSettings='legendSettings' :theme='theme' :zoomSettings='zoomSettings'>
        <e-series-collection>
          <e-series :dataSource='cData' width=2 xName='period' low='low' high='high' close='close' open='open'
            volume='volume' name='Apple Inc' bearFillColor='#2ecd71' bullFillColor='#e74c3d' type='Candle'
            :animation='animation'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample illustrates a chart with candle series and a Bollinger band indicator. 
        The trackball shows information about the stock, signal line, upper line, and lower line values each day.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a Bollinger band indicator. 
        This indicator shows the upper and lower limits of normal price movements based on the standard deviation of prices. The bands offer insights into price and volatility.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>

      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use BollingerBands Indicator,
        we need to Inject
        <code>BollingerBands</code> module using <code> provide: { chart: [ BollingerBands] },</code> method.
      </p>
      <p>
        More information on the Bollinger Indicator can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/technical-indicators/#bollinger-band" aria-label="Navigate to the documentation for Bollinger Band in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, LineSeries, BollingerBands, RangeAreaSeries, SplineRangeAreaSeries } from "@syncfusion/ej2-vue-charts";
import { chartValue } from './financial-data';

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
      theme: theme,
      cData: chartValue,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'DateTime',
        intervalType: 'Months',
        majorGridLines: { width: 0 },
        zoomFactor: 0.2, zoomPosition: 0.6,
        crosshairTooltip: { enable: true }
      },
      chartArea: {
        border: {
          width: 0
        }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        title: 'Price (in Million)',
        labelFormat: '${value}M',
        minimum: 50, maximum: 170, interval: 30,
        majorTickLines: { width: 1 },
        lineStyle: { width: 0 }
      },

      indicators: [{
        type: 'BollingerBands', field: 'Close', seriesName: 'Apple Inc', fill: '#606eff',
        period: 14, animation: { enable: true }, upperLine: { color: '#ffb735', width: 1 }, lowerLine: { color: '#f2ec2f', width: 1 }
      }],

      animation: { enable: false },

      zoomSettings: {
        enableSelectionZooming: true,
        mode: 'X',
        enablePan: true
      },

      legendSettings: {
        visible: false
      },

      crosshair: { enable: true, lineType: 'Vertical' },

      width: Browser.isDevice ? '100%' : '75%',

      tooltip: {
        enable: true, shared: true
      },

      title: "AAPL Stock Price 2012-2017"
    };
  },
  provide: {
    chart: [CandleSeries, Category, LineSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, RangeAreaSeries, BollingerBands, SplineRangeAreaSeries]
  },
  methods: {
  },

};
</script>