<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :crosshair='crosshair' :indicators='indicators' :legendSettings='legendSettings' :zoomSettings='zoomSettings'
            :rows='rows' :axes='axes' :axisLabelRender='axisLabelRender'>
            <e-series-collection>
                <e-series :dataSource='cData' :animation='animation' type='Candle' xName='x' yName='y' name='Apple Inc' width=2 low='low' high='high' close='close' open='open' volume='volume' bearFillColor='#2ecd71' bullFillColor='#e74c3d' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        This sample illustrates a stock chart with candle series and an accumulation distribution indicator. Trackball shows the information about the stock and signal value of a day.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the Accumulation Distribution Indicator. You can use <code>border</code>, 
        <code>fill</code> properties to customize the area.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use Accumulation Distribution Indicator, we need to Inject
        <code>AccumulationDistributionIndicator</code> module using <code> provide: { chart: [ AccumulationDistributionIndicator] },</code> method.
    </p>
    <p>
        More information on the Accumulation Distribution Indicator can be found in this
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
import { ChartPlugin, CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, LineSeries, AccumulationDistributionIndicator, StripLine } from "@syncfusion/ej2-vue-charts";
import { chartData } from './financial-data';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        cData : chartData,
        theme: theme,
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
            minimum: 50, maximum: 170,
            plotOffset: 25,
            interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 }
        },

        axes: [{
            name: 'secondary',
            opposedPosition: true, rowIndex: 0,
            majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: -7000000000, maximum: 5000000000,
            interval: 6000000000, majorTickLines: { width: 0 }, title: 'Accumulation Distribution',
            stripLines: [
                {
                    start: -7000000000, end: 6000000000, text: '', color: '#6063ff', visible: true,
                    opacity: 0.1, zIndex: 'Behind'
                }]
        }],
        
          rows: [
            {
                height: '40%'
            }, {
                height: '60%'
            }
        ],
        

        animation: { enable: true },

        indicators: [{
            type: 'AccumulationDistribution', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
            period: 3, animation: { enable: true }
        }],
     
          zoomSettings:
        {
            enableSelectionZooming: true,
            mode: 'X',
            enablePan : true
        },

        legendSettings: {
            visible: false
        },

       crosshair: { enable: true, lineType: 'Vertical' },

      chartArea: { border: { width: 0 } },

       width: Browser.isDevice ? '100%' : '80%',

      tooltip: {
        enable: true,
        shared: true
      },

      title: "AAPL 2012-2017"
    };
  },
  provide: {
    chart: [CandleSeries, Category, LineSeries, Tooltip, DateTime, StripLine, Zoom, Logarithmic, Crosshair, AccumulationDistributionIndicator]
  },
  methods: {
    axisLabelRender: function(args) {
         if (args.axis.name === 'secondary') {
                let value = Number(args.text) / 1000000000;
                args.text = String(value) + 'bn';
            }

    }
  },
   
});
</script>