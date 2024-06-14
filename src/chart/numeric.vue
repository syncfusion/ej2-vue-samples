<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :load='load' :tooltip='tooltip' :legendSettings='legendSettings'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Column' xName='Over' yName='ENG_Score' name='England'
                        width=2 :marker='marker' fill='#1e90ff' opacity=1 columnSpacing=0.1> </e-series>
                    <e-series :dataSource='seriesData' type='Column' xName='Over' yName='WI_Score' name='West Indies'
                        width=2 :marker='marker' fill='#b22222' opacity=1 columnSpacing=0.1> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample shows the numeric axis in a chart with England and West Indies cricket match data.
            </p>
        </div>
        <div id="description">
            <p>
                You can use a numeric axis to represent numeric value data in a chart. 
                To render a numeric axis, set the <code>ValueType</code> in axis to <b>Double</b>.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p>
                More information on the numeric axis can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/numeric-axis/" aria-label="Navigate to the documentation for Numeric Axis in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Legend, Tooltip, DataLabel, Highlight } from "@syncfusion/ej2-vue-charts";

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
            seriesData: [
                { Over: 16, ENG_Score: 2, WI_Score: 7 },
                { Over: 17, ENG_Score: 14, WI_Score: 7 },
                { Over: 18, ENG_Score: 7, WI_Score: 11 },
                { Over: 19, ENG_Score: 7, WI_Score: 8 },
                { Over: 20, ENG_Score: 10, WI_Score: 24 }
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                minimum: 15,
                maximum: 21,
                interval: 1,
                majorGridLines: { width: 0 }
            },

            //Initializing Primary Y Axis
            primaryYAxis:
            {
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelStyle: {
                    color: 'transparent'
                }
            },

            chartArea: {
                border: {
                    width: 0
                }
            },
            tooltip: { enable: true, format: '${point.x}th Over : <b>${point.y} Runs</b>' },
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: {
                        fontWeight: '600'
                    }
                }
            },
            legendSettings: {
                visible: true,
                enableHighlight: true
            },
            width: Browser.isDevice ? '100%' : '75%',
            title: "England vs West Indies"
        };
    },
    provide: {
        chart: [ColumnSeries, DataLabel, Tooltip, Legend, Highlight]
    },
    methods: {
        load: function (args) {
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            if (selectedTheme === 'highcontrast') {
                args.chart.series[0].fill = '#57BCFF';
                args.chart.series[1].fill = '#E58184';
            }
        }
    },

};
</script>