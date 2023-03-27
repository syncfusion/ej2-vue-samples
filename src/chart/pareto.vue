<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :legendSettings='legendSettings' :tooltip='tooltip'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Pareto' xName='x' yName='y' name='Defect' width=2
                        :marker='marker'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates a pareto chart with line and column series.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure a pareto chart. The pareto chart is used to find the cumulative values of the data in different categories. It is a combination of the column and line series.
                 The initial values are shown in the column chart and the cumulative values are shown in the line chart.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p style="font-weight: 500">Injecting Module</p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use pareto series, we
                need to inject
                <code>ParetoSeries</code>,<code>ColumnSeries</code> and <code>LineSeries</code> module using
                <code>provide: { chart: [ ParetoSeries, LineSeries, ColumnSeries] }</code> method.
            </p>
            <p>
                More information on the pareto series can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/other-types/#pareto-chart">documentation
                    section
                </a>.
            </p>

        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, StackingColumnSeries, Tooltip, ColumnSeries, Category, Legend, ParetoSeries } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
    data: function () {
        return {
            theme: theme,
            seriesData: [
                { x: 'Button Defect', y: 23 }, { x: 'Pocket Defect', y: 16 },
                { x: 'Coller Defect', y: 10 }, { x: 'Cuff Defect', y: 7 },
                { x: 'Sleeve Defect', y: 6 }
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                interval: 1,
                valueType: 'Category',
                majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
                majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
                lineStyle: { width: 0 }, labelIntersectAction: 'Rotate45',
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
            marker: {
                visible: true,
            },
            width: Browser.isDevice ? '100%' : '75%',
            legendSettings: {
                visible: false
            },
            tooltip: {
                enable: true,
                shared: false
            },
            title: "Pareto chart - Defects in Shirts"
        };
    },
    provide: {
        chart: [StackingColumnSeries, LineSeries, Category, ColumnSeries, Legend, Tooltip, ParetoSeries]
    },
    methods: {
    },

});
</script>