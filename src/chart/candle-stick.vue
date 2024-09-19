<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart ref='chart' :chartArea='chartArea' id='chartCandle' :width='width' align='center' :title='title'
                style="display:block;" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip'
                :axes='axes' :rows='rows'  :legendSettings='legendSettings' :theme='theme' :axisLabelRender='axisLabelRender'>
                <e-series-collection>
                    <e-series :dataSource='data' :enableTooltip = 'enableTooltip'  type='Column' xName='period' yName='volume' name='Volume'> </e-series>
                    <e-series :dataSource='data' type='Candle' xName='period' yAxisName='secondary' high='high'
                        low='low' open='open' close='close' volume='volume' name='Apple Inc.(AAPL)'
                        bearFillColor='#2ecd71' bullFillColor='#e74c3d'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample visualizes the AAPL stock price with a default candlestick series. The tooltip and crosshair show information about the stock price.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure the candlestick series. This chart shows financial data and trends at equal intervals. It can often be combined with line and column charts to show the closing value of the stock and volume of the data.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Candle feature, we
                need to inject
                <code>CandleService</code> into the <code>provide</code> option of chart.
            </p>
            <p>
                More information on the candle series can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/candle" aria-label="Navigate to the documentation for Candle in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>
#control-container {
    padding: 0px !important;
}
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { chartValue } from './financial-data';
import { CandleSeries, RangeNavigatorComponent, StripLine, Category, Tooltip, DateTime, Zoom, ColumnSeries, Logarithmic, Crosshair, ChartComponent, SeriesDirective, SeriesCollectionDirective } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective,
        'ejs-rangenavigator': RangeNavigatorComponent
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
                title: 'Volume',
                opposedPosition: true,
                labelFormat: '{value}M',
                majorGridLines: { width: 1 }, lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
            },
            rows: [
                {
                    height: '30%'
                }, {
                    height: '70%'
                }
            ],
            axes: [{
                name: 'secondary', opposedPosition: true, rowIndex: 1, majorGridLines: { width: 1 }, maximum: '150', 
                title: 'Price', plotOffset: 20, lineStyle: { width: 0 }, rangePadding: "None",  
            }],
            tooltip: {
                enable: true,
                shared: true,
                header: '',
                format: '<b>Apple Inc.(AAPL)</b> <br> High : <b>${point.high}</b> <br> Low : <b>${point.low}</b> <br> Open : <b>${point.open}</b> <br> Close : <b>${point.close}</b> <br> Volume : <b>${point.volume}</b>',
            },
            chartArea: {
                border: { width: 0 }
            },
            width: Browser.isDevice ? '100%' : '75%',
            legendSettings: {
                visible: false
            },
            enableTooltip : false,
            title: "AAPL Historical"
        };
    },
    provide: {
        rangeNavigator: [DateTime],
        chart: [CandleSeries, StripLine, Category, Tooltip, DateTime, Zoom, ColumnSeries, Logarithmic, Crosshair]
    },
    methods: {
        axisLabelRender: function (args) {
            args.text = args.text.replace('0000000M', 'M')
    }
    }
};
</script>