<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :tooltip='tooltip'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Pareto' xName='x' yName='y' name='Defect' width=2 opacity= 0.75 columnWidth= 0.4
                        :paretoOptions='paretoOptions' :cornerRadius='cornerRadius'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample visualizes the defects in shirts with default pareto series in the chart. Data points are enhanced with marker and tooltip.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure a pareto chart. The pareto chart is used to find the cumulative values of the data in different categories. It is a combination of the column and line series. The initial values are shown in the column chart and the cumulative values are shown in the line chart.
            </p>
            <p>
                The line series in the pareto chart can be customized using the <code>fill</code>, <code>dashArray</code>, <code>width</code>, and <code>marker</code> properties in <code>paretoOptions</code>. Additionally, the secondary axis in the pareto chart can be shown or hidden using the <code>showAxis</code> property in <code>paretoOptions</code>.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use pareto series, we
                need to inject
                <code>ParetoSeries</code>, <code>ColumnSeries</code> and <code>LineSeries</code> module using
                <code>provide: { chart: [ ParetoSeries, LineSeries, ColumnSeries] }</code> method.
            </p>
            <p>
                More information on the pareto series can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/pareto" aria-label="Navigate to the documentation for Pareto Chart in Vue Chart component">documentation
                    section
                </a>.
            </p>

        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, StackingColumnSeries, Tooltip, ColumnSeries, Category, Legend, ParetoSeries, Highlight } from "@syncfusion/ej2-vue-charts";

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
                { x: 'Button Defect', y: 23 }, { x: 'Pocket Defect', y: 16 },
                { x: 'Collar Defect', y: 10 }, { x: 'Cuff Defect', y: 7 },
                { x: 'Sleeve Defect', y: 6 }, { x: 'Other Defect', y: 2}
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                interval: 1,
                valueType: 'Category',
                majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
                majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
                labelRotation: Browser.isDevice ? -45 : 0
            },

            //Initializing Primary Y Axis
            primaryYAxis:
            {
                title: 'Frequency of Occurrence',
                minimum: 0,
                maximum: 25,
                interval: 5,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
                minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            paretoOptions: {
                marker: { visible: true, isFilled: true, width: 7, height: 7 },
                dashArray: '3,2',
                width: 2
            },
            cornerRadius: { topLeft: Browser.isDevice? 4 : 6, topRight: Browser.isDevice ? 4 : 6 },
            width: Browser.isDevice ? '100%' : '75%',
            legendSettings: {
                visible: true,
                enableHighlight: true
            },
            tooltip: {
                enable: true,
                shared: true,
                format: '${series.name} : <b>${point.y}</b>'
            },
            title: "Defects in Shirts"
        };
    },
    provide: {
        chart: [StackingColumnSeries, LineSeries, Category, ColumnSeries, Legend, Tooltip, ParetoSeries, Highlight]
    },
    methods: {
    },

};
</script>