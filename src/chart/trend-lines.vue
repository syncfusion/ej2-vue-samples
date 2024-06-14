<template>
    <div class="control-section">
        <ejs-chart ref='chart' align='center' id='trendline' :theme='theme' :primaryXAxis='primaryXAxis'
            :primaryYAxis='primaryYAxis' :chartArea='chartArea' :title='title' :legendSettings='legendSettings'
            :tooltip='tooltip' :width='width'>
            <e-series-collection>
                <e-series :dataSource='chartData' type='Spline' xName='Period' yName='Rupees' name='Rupees'
                    :marker='marker'>
                    <e-trendlines>
                        <e-trendline type='Linear' enableTooltip=false width=3 name='Trends' fill='#C64A75'>
                        </e-trendline>
                    </e-trendlines>
                </e-series>
            </e-series-collection>
        </ejs-chart>
        <div id="action-description">
            <p>
                This sample shows the trend of Indian rupees and US dollar variations in the chart.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure the trendlines. The <code>trendline</code> is a line drawn
                over the chart to display the overall direction of the results.
            </p>
            <p>This chart supports the following types.
            </p>
            <ul>
                <li>
                    Linear
                </li>
                <li>
                    Exponential
                </li>
                <li>
                    Logarithmic
                </li>
                <li>
                    Polynomial
                </li>
                <li>
                    Power
                </li>
                <li>
                    Moving Average
                </li>
                <li>
                    Forecasting
                </li>
            </ul>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Trend lines, we
                need to Inject <code>Treandlines</code> module using <code> provide: { chart: [Trendlines] },</code>
                method.
            </p>
            <p>
                More information on the trendlines can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/trend-lines/" aria-label="Navigate to the documentation for Trendlines in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style>
#trendline_Series_0_TrendLine_0 {
    stroke-dasharray: 10px 10px;
    stroke-linejoin: round;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
}

@-webkit-keyframes dash {
    100% {
        stroke-dashoffset: -20px;
    }
}

@keyframes dash {
    100% {
        stroke-dashoffset: -20px;
    }
}
</style>
<script>
import { EmitType, Browser, extend } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, TrendlinesDirective, TrendlineDirective, ScatterSeries, Category, Tooltip, Trendlines, SplineSeries, LineSeries, Legend } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
    components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'e-trendlines': TrendlinesDirective,
    'e-trendline': TrendlineDirective
  },
    data: function () {
        return {
            theme: theme,
            chartData: [
                { Period: 1947, Rupees: 4.76 },
                { Period: 1967, Rupees: 7.50 },
                { Period: 1974, Rupees: 8.10 },
                { Period: 1989, Rupees: 16.64 },
                { Period: 1990, Rupees: 17.32 },
                { Period: 2000, Rupees: 43.56 },
                { Period: 2007, Rupees: 39.27 },
                { Period: 2013, Rupees: 56.57 },
                { Period: 2019, Rupees: 71.74 },
                { Period: 2020, Rupees: 76.67 },
                { Period: 2021, Rupees: 72.75 },
            ],
            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'Category',
                edgeLabelPlacement: 'Shift',
                labelFormat: 'yyyy',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 1 }
            },
            //Initializing Primary Y Axis
            primaryYAxis: {
                title: 'Rupees against Dollars',
                labelFormat: '₹{value}',
                minimum: 0,
                maximum: 80,
                interval: 10,
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                lineStyle: { width: 0 }
            },
            chartArea: {
                border: { width: 0 }
            },
            marker: {
                visible: true,
                isFilled: true,
                height: 7,
                width: 7
            },
            width: Browser.isDevice ? '100%' : '75%',
            tooltip: { enable: true },
            legendSettings: { visible: true, shapeHeight: 15, shapeWidth: 15 },
            title: 'USD to INR Rates',
        };
    },
    provide: {
        chart: [Category, ScatterSeries, SplineSeries, Tooltip, LineSeries, Trendlines, Legend]
    },

    methods: {
    },


};
</script>