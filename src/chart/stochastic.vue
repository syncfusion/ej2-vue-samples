<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :indicators='indicators' :crosshair='crosshair' :tooltip='tooltip'
                :zoomSettings='zoomSettings' :axes='axes' :rows='rows'>
                <e-series-collection>
                    <e-series :dataSource='cData' type='Candle' xName='period' name='Apple Inc' width=2 low='low'
                        high='high' close='close' open='open' volume='volume' bearFillColor='#2ecd71'
                        bullFillColor='#e74c3d' :animation='animation'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates a chart with candle series and a stochastic oscillator. 
                The trackball shows information about each day’s stock and indicator values.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure a stochastic oscillator that is a momentum indicator. 
                It shows the location of the close relative to the high-low range over a set number of periods.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>

            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Stochastic
                Indicator, we need to Inject
                <code>StochasticIndicator</code> module using <code>provide: { chart: [ StochasticIndicator ] },</code>
                method.
            </p>
            <p>
                More information on the Stochastic Indicator can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/technical-indicators/#stochastic" aria-label="Navigate to the documentation for Stochastic in Technical Indicators of Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Category, CandleSeries, Tooltip, DateTime, Zoom, Crosshair, LineSeries, Logarithmic, StripLine, StochasticIndicator } from "@syncfusion/ej2-vue-charts";
import { chartValue } from './financial-data';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');


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

            //Initializing Primary Y Axis
            primaryYAxis: {
                title: 'Price (in Million)',
                labelFormat: '${value}M',
                minimum: 50, maximum: 170,
                plotOffset: 25,
                interval: 30, rowIndex: 1, opposedPosition: true, lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
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
                majorGridLines: { width: 0 }, lineStyle: { width: 0 }, minimum: 0, maximum: 120, interval: 60,
                majorTickLines: { width: 0 }, title: 'Stochastic', stripLines: [
                    {
                        start: 0, end: 120, text: '', color: 'black', visible: true,
                        opacity: 0.03, zIndex: 'Behind'
                    }]
            }],

            indicators: [{
                type: 'Stochastic', field: 'Close', seriesName: 'Apple Inc', yAxisName: 'secondary', fill: '#6063ff',
                kPeriod: 2, dPeriod: 3, showZones: true, periodLine: { color: '#f2ec2f' },
                period: 3, animation: { enable: false }, upperLine: { color: '#2ecd71' }, lowerLine: { color: '#e74c3d' }
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
                enablePinchZooming: true,
                enablePan: true
            },

            width: Browser.isDevice ? '100%' : '75%',

            legendSettings: { visible: false },

            title: "AAPL Stock Price 2012-2017"
        };
    },
    provide: {
        chart: [CandleSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, LineSeries, StochasticIndicator, StripLine]
    },
    methods: {

    },

};
</script>