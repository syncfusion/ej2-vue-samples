<template>
    <div class="control-section">
        <div>
            <ejs-chart ref='chart' :theme="theme" style='display:block' :animation="animation" align='center'
                id='chartcontainer'  :pointRender='pointRender' :title='title' :primaryXAxis='primaryXAxis'   :width="width" :primaryYAxis='primaryYAxis'
                :chartArea='chartArea' :tooltip='tooltip' :highlightColor='highlightColor' :legendSettings='legendSettings' :tooltipRender='tooltipRender'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Column' xName='Items' yName='Quality' :marker='marker'
                        :errorBar='errorBar'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div>
        </div>

        <div id="action-description">
            <p>
                This sample shows the errors in the quantity of different items with an error bar chart.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure the error bar chart. An error bar chart is used to indicate the error or uncertainty in the reported measurement.
            </p>
            <p>Chart supports the following error bar types.
            </p>
            <ul>
                <li>
                    <code>Fixed</code> - Renders a fixed type error bar.
                </li>
                <li>
                    <code>Percentage</code> - Renders a percentage type error bar.
                </li>
                <li>
                    <code>StandardDeviation</code> - Renders a standard deviation type error bar.
                </li>
                <li>
                    <code>StandardError</code> - Renders a standard error type error bar.
                </li>
                <li>
                    <code>Custom</code> - Renders a custom type error bar.
                </li>
            </ul>
            <p>
                <code>Tooltip</code> is enabled in this example.To see the tooltip in action, hover over a point or tap on it in touch-enabled devices.
            </p>
            <br>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                The Charts component’s features are segregated into individual feature modules. To use error bar, we need
                to inject
                <code>ErrorBar</code> module using
                <code>provide: { chart: [ErrorBar] }</code> method.
            </p>
            <p>
                More information on the error bar can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/other-types/#error-bar-chart">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, Tooltip, ErrorBar } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
    data: function () {
        return {
            theme: theme,
            seriesData: [
                { Items: "Printer", Quality: 750, error: 50},
                { Items: "Desktop", Quality: 500, error: 70},
                { Items: "Charger", Quality: 550, error: 60},
                { Items: "Mobile", Quality: 575, error: 80},
                { Items: "Keyboard", Quality: 400, error: 20},
                { Items: "Power Bank", Quality: 450, error: 90},
                { Items: "Laptop", Quality: 650, error: 40},
                { Items: "Battery", Quality: 525, error: 84}
            ],
            chartArea: { border: { width: 0 } },
            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'Category',
                interval: 1,
                labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
                labelRotation: Browser.isDevice ? -45 : 0,
                majorGridLines: { width: 0 }, majorTickLines: { width: 0 },
            },
            width: Browser.isDevice ? "100%" : "75%",
           
            //Initializing Primary Y Axis
            primaryYAxis:
            {
                minimum: 0,
                maximum: 1250,
                interval: 250,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                title: "Quantity"
            },

            marker: { height: 10, width: 10 },
            width: Browser.isDevice ? '100%' : '75%',
            errorBar: { visible: true, verticalError: 'error'},
            tooltip: { enable: true, enableMarker: false},
            legendSettings: {
                visible: false
            },
           highlightColor: '',
            animation: { enable: false},
            title: "Quantity vs Items",
        };
    },
    provide: {
        chart: [ColumnSeries, Category, ErrorBar, Tooltip]
    },
    methods: {
        tooltipRender: function (args) {
            args.text = '<b>' + args.data.pointX + ' Count' + ': ' + args.data.pointY + '</b> (error range: ' + (args.data.pointY - args.series.visiblePoints[args.data.pointIndex].verticalError / 2) + '-' + (args.data.pointY + args.series.visiblePoints[args.data.pointIndex].verticalError / 2) + ')';
        },
        pointRender: function (args) {
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'material';
            if (selectedTheme === 'bootstrap5' || selectedTheme === 'fluent') {
                args.fill = '#81ccbb';
                this.highlightColor = '#c7e9b6';
            }
        }
    }

});
</script>
