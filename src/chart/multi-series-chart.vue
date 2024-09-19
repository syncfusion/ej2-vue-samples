<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :tooltip='tooltip'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='StackingColumn' xName='Period' yName='PVT_Consumption'
                        name='Private Consumption'> </e-series>
                    <e-series :dataSource='seriesData' type='StackingColumn' xName='Period' yName='GOVT_Consumption'
                        name='Government Consumption'> </e-series>
                    <e-series :dataSource='seriesData' type='StackingColumn' xName='Period' yName='Investment'
                        name='Investment'> </e-series>
                    <e-series :dataSource='seriesData' type='StackingColumn' xName='Period' yName='Trade'
                        name='Net Foreign Trade'> </e-series>
                    <e-series :dataSource='seriesData' type='Line' xName='Period' yName='GDP' name='GDP' width=2
                        opacity=0.6 :marker='marker'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample shows the annual growth of Gross Domestic Product (GDP) in France in a combination of line
                and stacked column series.
                A tooltip shows information about the data points.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure different type of charts. You can chart
                multiple variables on the y-axis.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                In this example, we have used line and column series. To use column and line feature, we need to inject
                <code>ColumnSeries</code> <code>LineSeries</code> modules using
                <code> provide: { chart: [ ColumnSeries, LineSeries ] }</code>
                method.
            </p>
            <p>
                More information on the multiple series can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/chart-series/#multiple-series" aria-label="Navigate to the documentation for Multiple Series in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, StackingColumnSeries, Tooltip, ColumnSeries, Category, Legend, Highlight } from "@syncfusion/ej2-vue-charts";

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
            seriesData: [
                { Period: "2005", PVT_Consumption: 1.2, GOVT_Consumption: 0.5, Investment: 0.7, Trade: -0.8, GDP: 1.5 },
                { Period: "2006", PVT_Consumption: 1, GOVT_Consumption: 0.5, Investment: 1.4, Trade: 0, GDP: 2.3 },
                { Period: "2007", PVT_Consumption: 1, GOVT_Consumption: 0.5, Investment: 1.5, Trade: -1, GDP: 2 },
                { Period: "2008", PVT_Consumption: 0.25, GOVT_Consumption: 0.35, Investment: 0.35, Trade: -.35, GDP: 0.1 },
                { Period: "2009", PVT_Consumption: 0.1, GOVT_Consumption: 0.9, Investment: -2.7, Trade: -0.3, GDP: -2.7 },
                { Period: "2010", PVT_Consumption: 1, GOVT_Consumption: 0.5, Investment: 0.5, Trade: -0.5, GDP: 1.8 },
                { Period: "2011", PVT_Consumption: 0.1, GOVT_Consumption: 0.25, Investment: 0.25, Trade: 0, GDP: 2 },
                { Period: "2012", PVT_Consumption: -0.25, GOVT_Consumption: -0.5, Investment: -0.1, Trade: -0.4, GDP: 0.4 },
                { Period: "2013", PVT_Consumption: 0.25, GOVT_Consumption: 0.5, Investment: -0.3, Trade: 0, GDP: 0.9 },
                { Period: "2014", PVT_Consumption: 0.6, GOVT_Consumption: 0.6, Investment: -0.6, Trade: -0.6, GDP: 0.4 },
                { Period: "2015", PVT_Consumption: 0.9, GOVT_Consumption: 0.5, Investment: 0, Trade: -0.3, GDP: 1.3 }
            ],
            //Initializing Primary X Axis
            primaryXAxis: {
                title: 'Years',
                labelIntersectAction: 'Rotate45',
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
            },

            //Initializing Primary Y Axis
            primaryYAxis:
            {
                title: 'Growth (in Billion)',
                minimum: -3,
                maximum: 3,
                interval: 1,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                labelFormat: '{value}B',
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            marker: {
                visible: true,
                width: 7,
                height: 7
            },

            width: Browser.isDevice ? '100%' : '75%',
            legendSettings: {
                visible: true,
                enableHighlight: true
            },
            tooltip: {
                enable: true
            },

            title: "Annual Growth of GDP in France"
        };
    },
    provide: {
        chart: [StackingColumnSeries, LineSeries, Category, ColumnSeries, Legend, Tooltip, Highlight]
    },
    methods: {
    },

};
</script>