<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :indicators='indicators' :crosshair='crosshair' :tooltip='tooltip' :zoomSettings='zoomSettings' :axes='axes' :rows='rows'>
            <e-series-collection>
                <e-series :dataSource='cData' type='Candle' xName='x' yName='y' name='Apple Inc' width=2 low='low' high='high' close='close' open='open' volume='volume' bearFillColor='#2ecd71' bullFillColor='#e74c3d' :animation='animation'> </e-series>

            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample illustrates a stock chart with candle series and a Moving Average Convergence Divergence indicator. Trackball shows the information about the stock, signalline, Macdline, and Histogram value of a day.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the MACD Indicator. You can use <code>border</code>, 
        <code>fill</code> properties to customize the area.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use MACD Indicator, we need to Inject
        <code>MacdIndicator</code> module using <code>provide: { chart: [ MacdIndicator] },</code> method.
    </p>
    <p>
        More information on the MACD Indicator can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, Category, CandleSeries, Tooltip, DateTime, Zoom, Crosshair, LineSeries, Logarithmic, StripLine, ColumnSeries, MacdIndicator } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);
import { chartData } from './financial-data';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
      cData : chartData,
      //Initializing Primary X Axis
      primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            zoomFactor: 0.2, zoomPosition: 0.6,
            crosshairTooltip: { enable: true }
        },

      //Initializing Primary Y Axis
      primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}',
            plotOffset: 25,
            minimum: 50, maximum: 170,
            interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 }
        },
        
        rows: [
            {
                height: '40%'
            }, {
                height: '60%'
            }
        ],

        axes: [{
            name: 'secondary',
            opposedPosition: true, rowIndex: 0,
            majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: -3.5, maximum: 3.5, interval: 3.5,
            majorTickLines: { width: 0 }, title: 'MACD', stripLines: [
                {
                    start: -3.5, end: 3.5, text: '', color: 'black', visible: true,
                    opacity: 0.03, zIndex: 'Behind'
                }]
        }],

        indicators: [{
            type: 'Macd',
            period: 3,
            fastPeriod: 8,
            slowPeriod: 5,
            seriesName: 'Apple Inc',
            macdType: 'Both',
            width: 2,
            macdPositiveColor: '#2ecd71',
            macdNegativeColor: '#e74c3d',
            fill: '#6063ff',
            yAxisName: 'secondary'
        }],

        tooltip: {
            enable: true, shared: true
        },

         animation: { enable: true },

       crosshair: { enable: true, lineType: 'Vertical' },

       chartArea: { border: { width: 0 } },

       zoomSettings:
        {

            enableSelectionZooming: true,
            mode: 'X',
            enablePan : true
        },

       width: Browser.isDevice ? '100%' : '80%',

      legendSettings: { visible: false },
        
      title: "AAPL 2012-2017"
    };
  },
  provide: {
    chart: [CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, LineSeries, MacdIndicator, StripLine, ColumnSeries]
  },
  methods: {
  },
 
});
</script>