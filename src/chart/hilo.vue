<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :crosshair='crosshair' :tooltip='tooltip'>
                <e-series-collection>
                    <e-series :dataSource='data' :animation='animation' type='Hilo' xName='period'
                        name='Apple Inc.(AAPL)' low='low' high='high'> </e-series>

                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>This <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-charts/chart-types/hilo-chart" aria-label="Navigate to explore the Syncfusion Vue Hilo Chart">Vue Hilo Chart</a> example visualizes the AAPL stock price with a default Hilo series in the chart. The tooltip and crosshair show information about the stock price.</p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure the HILO series. This series shows the high and
                low stock values over a given period of time.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Hilo series, we
                need to Inject
                <code>HiloSeries</code> module using <code>provide: { chart: [HiloSeries] },</code> method.
            </p>
            <p>
                More information on the HILO series can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/high-low" aria-label="Navigate to the documentation for Hilo Chart in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Category, HiloSeries, Tooltip, DateTime, Zoom, Crosshair, Logarithmic } from "@syncfusion/ej2-vue-charts";
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
            chartArea: {
                border: {
                    width: 0
                }
            },

            //Initializing Primary Y Axis
            primaryYAxis: {
                title: 'Price',
                minimum: 10,
                maximum: 180,
                interval: 20,
                labelFormat: '${value}',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },

            legendSettings: { visible: false },

            width: Browser.isDevice ? '100%' : '75%',

            animation: { enable: true },

            tooltip: {
                enable: true,
                shared: true,
                enableMarker: false,
                header: "",
                format: '<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b>'
            },
            crosshair: {
                enable: false,
            },

            title: "AAPL Historical"

        };
    },
    provide: {
        chart: [HiloSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]
    },
    methods: {
    },

};
</script>