<template>
    <div class="control-section">
        <div align='center'>
            <ejs-accumulationchart id="container" align='center' ref="pie" style='display:block;' :theme='theme'
                :legendSettings='legendSettings' :tooltip='tooltip' :pointRender='pointRender' :title='title'
                :enableBorderOnMouseMove='false' :width="width">
                <e-accumulation-series-collection>
                    <e-accumulation-series type='Pie' :dataSource='data' xName='x' yName='y' :animation='animation'
                        :dataLabel='dataLabel' :border='border' :applyPattern='true'> </e-accumulation-series>
                </e-accumulation-series-collection>
            </ejs-accumulationchart>

        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the Mobile Browser Market Share using a pie chart with various patterns.
            </p>
        </div>
        <div id="description">
            <p>In this example, you can see how to render and configure a pie chart with different patterns. The pie chart is a
            circular graphic ideal for displaying categories as a proportion or percentage of the whole. You can apply different
            patterns to the pie slices using the <code>applyPattern</code> property in the series and the <code>pointRender</code> event.</p>
            <p>
                More information about the pie series can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#various-radius-pie-chart"
                    aria-label="Navigate to the documentation for Various Radius Pie Chart in Vue Accumulation Chart component">documentation
                    section</a>.
            </p>

        </div>

    </div>
</template>
<style scoped>
.control-section {
    min-height: 450px;
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationAnnotation } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
    components: {
        'ejs-accumulationchart': AccumulationChartComponent,
        'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
        'e-accumulation-series': AccumulationSeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            data: [
                { x: 'Internet Explorer', y: 6.12, text: Browser.isDevice ? 'Internet Explorer:<br> 6.12%' : 'Internet Explorer: 6.12%' },
                { x: 'Chrome', y: 57.28, text: Browser.isDevice ? 'Chrome:<br> 57.28%' : 'Chrome: 57.28%' },
                { x: 'Safari', y: 4.73, text: Browser.isDevice ? 'Safari:<br> 4.73%' : 'Safari: 4.73%' },
                { x: 'QQ', y: 5.96, text: Browser.isDevice ? 'QQ:<br>5.96%' : 'QQ: 5.96%' },
                { x: 'UC Browser', y: 4.37, text: Browser.isDevice ? 'UC Browser:<br>4.37%' : 'UC Browser: 4.37%' },
                { x: 'Edge', y: 7.48, text: Browser.isDevice ? 'Edge:<br> 7.48%' : 'Edge: 7.48%' },
                { x: 'Others', y: 14.06, text: Browser.isDevice ? 'Others:<br> 14.06%' : 'Others: 14.06%' }
            ],
            animation: { enable: true },
            dataLabel: {
                visible: true,
                name: 'text',
                position: 'Outside',
                font: { fontWeight: '600' },
                connectorStyle: { length: '20px', type: 'Curve' }
            },
            border: { width: 2 },
            width : Browser.isDevice ? '100%' : '75%',
            legendSettings: { visible: false },
            title: 'Browser Market Share',
            tooltip: {
                enable: true,
                format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',
                header: "",
                enableHighlight: true,
            }
        };
    },
    provide: {
        accumulationchart: [PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]
    },
    methods: {
        pointRender: (args) => {
            if (args.point.index === 0) {
                args.pattern = 'DiagonalBackward';
            } else if (args.point.index === 1) {
                args.pattern = 'DiagonalForward';
            } else if (args.point.index === 2) {
                args.pattern = 'HorizontalStripe';
            } else if (args.point.index === 3) {
                args.pattern = 'VerticalStripe';
            } else if (args.point.index === 4) {
                args.pattern = 'HorizontalDash';
            }
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            if (selectedTheme.indexOf('dark') > -1) {
                if (selectedTheme.indexOf('material') > -1) {
                    args.border.color = '#303030';
                }
                else if (selectedTheme.indexOf('bootstrap5') > -1) {
                    args.border.color = '#212529';
                }
                else if (selectedTheme.indexOf('bootstrap') > -1) {
                    args.border.color = '#1A1A1A';
                }
                else if (selectedTheme.indexOf('tailwind') > -1) {
                    args.border.color = '#1F2937';
                }
                else if (selectedTheme.indexOf('fluent') > -1) {
                    args.border.color = '#252423';
                }
                else if (selectedTheme.indexOf('fabric') > -1) {
                    args.border.color = '#201f1f';
                }
                else {
                    args.border.color = '#222222';
                }
            }
            else if (selectedTheme.indexOf('highcontrast') > -1) {
                args.border.color = '#000000';            }
            else if (selectedTheme.indexOf('fluent2-highcontrast') > -1) {
                args.border.color = '#000000';
            }
            else {
                args.border.color = '#FFFFFF';
            }
        },
    },
};
</script>
