<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :crosshair='crosshair' :tooltip='tooltip'>
                <e-series-collection>
                    <e-series :dataSource='data' :animation='animation' type='HiloOpenClose' xName='period'
                        name='Apple Inc.(AAPL)' low='low' high='high' open='open' close='close' bearFillColor='#2ecd71'
                        bullFillColor='#e74c3d'> </e-series>

                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample visualizes the AAPL stock price with default HILO Open Close series in the chart. 
                The tooltip and the crosshairs display the data and period information.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure the HILO Open Close series. The horizontal lines on the left and the right are used to show the opening and closing values of the stock, and the vertical line represents both high and low values.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>

            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Hilo Open Close
                series, we need to Inject
                <code>HiloOpenCloseSeries</code> module using <code>provide: { chart: [HiloOpenCloseSeries] },</code>
                method.
            </p>
            <p>
                More information on the HILO Open Close series can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/high-low-open-close" aria-label="Navigate to the documentation for High Low Open Close in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Category, HiloOpenCloseSeries, Tooltip, DateTime, Zoom, Crosshair, Logarithmic } from "@syncfusion/ej2-vue-charts";
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
            data: chartValue,
            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'DateTime',
                crosshairTooltip: { enable: true },
                majorGridLines: { width: 0 },
            },

            //Initializing Primary Y Axis
            primaryYAxis: {
                title: 'Price',
                interval: 20,
                labelFormat: 'n0',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minimum: 40,
                maximum: 140,
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            legendSettings: { visible: false },
            width: Browser.isDevice ? '100%' : '75%',
            animation: { enable: true },
            tooltip: {
                enable: true, shared: true,
                header: '',
                format: '<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b>',
            },
            crosshair: {
                enable: true, lineType: 'Vertical'
            },
            title: "AAPL Historical"
        };
    },
    provide: {
        chart: [HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]
    },
    methods: {
    }
};
</script>