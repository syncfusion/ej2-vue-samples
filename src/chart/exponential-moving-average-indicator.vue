<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :indicators='indicators' :crosshair='crosshair' :tooltip='tooltip'
                :zoomSettings='zoomSettings'>
                <e-series-collection>
                    <e-series :dataSource='cData' type='Candle' xName='period' name='Apple Inc' width=2 low='low'
                        high='high' close='close' open='open' volume='volume' bearFillColor='#2ecd71'
                        bullFillColor='#e74c3d' :animation='animation'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates a chart with candle series and an exponential moving average indicator. 
                The trackball shows information about each day’s stock rates and signal values.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure an exponential moving average indicator. 
                This indicator tracks the price of an investment over time and is used to define the direction of the trend.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>

            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use EMA Indicator, we
                need to Inject
                <code>EmaIndicator</code> module using <code>provide: { chart: [ EmaIndicator] },</code> method.
            </p>
            <p>
                More information on the exponential moving average indicator can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/technical-indicators/#exponential-moving-average-ema" aria-label="Navigate to the documentation for Exponential Moving Average in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Category, CandleSeries, Tooltip, DateTime, Zoom, Crosshair, LineSeries, Logarithmic, EmaIndicator } from "@syncfusion/ej2-vue-charts";
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
                majorGridLines: { width: 0 },
                zoomFactor: 0.2, zoomPosition: 0.6,
                crosshairTooltip: { enable: true },
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
                type: 'Ema', field: 'Close', seriesName: 'Apple Inc', fill: 'blue',
                period: 14, animation: { enable: true }
            }],

            tooltip: {
                enable: true, shared: true
            },
            animation: { enable: false },

            crosshair: { enable: true, lineType: 'Vertical' },

            zoomSettings: {
                enableSelectionZooming: true,
                mode: 'X',
                enablePan: true
            },

            width: Browser.isDevice ? '100%' : '75%',

            legendSettings: { visible: false },

            title: "AAPL Stock Price 2012-2017"
        };
    },
    provide: {
        chart: [CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, LineSeries, EmaIndicator]
    },
    methods: {
    },

};
</script>