<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart ref="chart" :theme='theme' style='display:block;' :chartArea='chartArea' :width='width'
                align='center' id='chart-vertical' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
                :title='title' :legendSettings='legendSettings' :axes='axes' :tooltip='tooltip'
                :isTransposed='isTransposed'>
                <e-series-collection>
                    <e-series :dataSource='data' type='Column' xName='Year' yName='column' width=2
                        name='Sales'></e-series>
                    <e-series :dataSource='data' yAxisName='yAxis2' type='Line' xName='Year' yName='series'
                        name='Profit Margin' width=2 :marker='marker'></e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates a sales versus profit margin analysis using a vertical chart by changing the
                orientation of the x-axis to vertical and the y-axis to horizontal.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure a vertical chart.
                Use the <code>IsTransposed</code> property to render the chart vertically.
            </p>
            <p>
                More information on the vertical chart can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/vertical" aria-label="Navigate to the documentation for Vertical Chart in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Legend, Tooltip, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
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
            data: [
                { Year: "2016", column: 13600, series: 0.5 },
                { Year: "2017", column: 12900, series: 1.5 },
                { Year: "2018", column: 12500, series: 3.5 },
                { Year: "2019", column: 14500, series: 1.5 },
                { Year: "2020", column: 14500, series: 3 },
                { Year: "2021", column: 12000, series: 2.5 }],

            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 }
            },
            isTransposed: true,
            primaryYAxis: {
                title: 'Sales in Billion',
                minimum: 11000,
                maximum: 15000,
                interval: 500,
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                edgeLabelPlacement: 'Shift'
            },
            axes: [{
                name: 'yAxis2',
                title: 'Profit(In Percentage)',
                maximum: 4, minimum: 0, interval: 0.5,
                opposedPosition: true,
                labelFormat: '{value}%',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 0 }, lineStyle: { width: 0 }, majorTickLines: { width: 0 }
            }],
            marker: {
                visible: true,
                isFilled: true,
                height: 7,
                width: 7
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            tooltip: { enable: true },
            legendSettings: { visible: false },
            width: Browser.isDevice ? '100%' : '75%',
            title: 'Sales Vs Profit Margin'
        };
    },
    provide: {
        chart: [LineSeries, Legend, Tooltip, ColumnSeries, Category]
    },
    methods: {
    },
};
</script>