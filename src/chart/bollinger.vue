<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :crosshair='crosshair' :indicators='indicators' :legendSettings='legendSettings'
            :theme='theme' :zoomSettings='zoomSettings'>
            <e-series-collection>
                <e-series :dataSource='cData' width=2 xName='x' yName='y' low='low' high='high' close='close' open='open' volume='volume' name='Apple Inc' bearFillColor='#2ecd71' bullFillColor='#e74c3d' type='Candle' :animation='animation'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates a stock chart with candle series and a Bollinger band indicator. 
        Trackball shows the information about the stock, signalline, upperline, and lowerline value of a day.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the BollingerBands type Indicator. You can use <code>border</code>, 
        <code>fill</code> properties to customize the area.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use BollingerBands Indicator, we need to Inject
        <code>BollingerBands</code> module using <code> provide: { chart: [ BollingerBands] },</code> method.
    </p>
    <p>
        More information on the BollingerIndicator can be found in this
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
import { ChartPlugin, CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, LineSeries, BollingerBands, RangeAreaSeries } from "@syncfusion/ej2-vue-charts";
import { chartData } from './financial-data';

Vue.use(ChartPlugin);

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
        chartArea: {
            border: {
                width: 0
            }
        },


      //Initializing Primary Y Axis
        primaryYAxis: {
            title: 'Price',
            labelFormat: '${value}M',
            minimum: 50, maximum: 170, interval: 30,
            majorGridLines: { width: 1 },
            lineStyle: { width: 0 }
        },

       indicators: [{
            type: 'BollingerBands', field: 'Close', seriesName: 'Apple Inc', fill: '#606eff',
            period: 14, animation: { enable: true }, upperLine: { color: '#ffb735', width: 1 }, lowerLine: { color: '#f2ec2f', width: 1 }
        }],
  
        animation: { enable: true },

          zoomSettings: {
           enableSelectionZooming: true,
            mode: 'X',
            enablePan : true
        },

        legendSettings: {
            visible: false
        },

       crosshair: { enable: true, lineType: 'Vertical' },

     width: Browser.isDevice ? '100%' : '80%',

      tooltip: {
            enable: true, shared: true
        },


      title: "AAPL - 2012-2017"
    };
  },
  provide: {
    chart: [CandleSeries, Category, LineSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, RangeAreaSeries, BollingerBands]
  },
  methods: {
  },
   
});
</script>