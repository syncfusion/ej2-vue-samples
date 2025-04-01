<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea'
                :width='width' :pointRender='pointRender' :legendSettings='legendSettings'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Column' xName='Year' name='Rate' :marker='marker' width=2
                        opacity=1 yName='ExchangeRate'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample uses an inverse axis in a chart to plot an exchange rate over a period of time.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to invert the axis of the chart. 
                Here, both X and Y axis are inverse by setting the <code>IsInversed</code> property in axis to <b>true</b>.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p>
                More information on inversed axis can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/axis-customization/#inversed-axis" aria-label="Navigate to the documentation for Inversed Axis in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, Tooltip, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";
import { pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors, pointFluent2Colors, pointFluent2DarkColors, pointFluent2HighContrastColors, pointTailwind3Colors, pointTailwind3DarkColors } from './theme-color';
import { Browser, EmitType } from '@syncfusion/ej2-base';


import { loadChartTheme, pointRenderEvent} from "./theme-color";
let theme = loadChartTheme();

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
                { Year: "2008", ExchangeRate: 1.5 },
                { Year: "2009", ExchangeRate: 7.6 },
                { Year: "2010", ExchangeRate: 11 },
                { Year: "2011", ExchangeRate: 16.2 },
                { Year: "2012", ExchangeRate: 18 },
                { Year: "2013", ExchangeRate: 21.4 },
                { Year: "2014", ExchangeRate: 16 },
                { Year: "2015", ExchangeRate: 17.1 }
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'Category',
                opposedPosition: true,
                isInversed: true,
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
            },

            //Initializing Primary Y Axis
            primaryYAxis:
            {
                edgeLabelPlacement: 'Shift',
                labelIntersectAction: 'Rotate45',
                isInversed: true,
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                labelStyle: {
                    color: 'transparent'
                }
            },
            pointRender: function (args) {
                pointRenderEvent(args);
            },
            chartArea: {
                border: {
                    width: 0
                }
            },

            marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
            tooltip: {
                enable: true
            },
            legendSettings: { visible: false },

            width: Browser.isDevice ? "100%" : "75%",

            title: "Exchange Rate(INR per USD)"
        };
    },
    provide: {
        chart: [ColumnSeries, Category, Legend, Tooltip, DataLabel]
    },
    methods: {

    },

};
</script>