<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend' :legendClick='legendClick' :tooltipRender='tooltipRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='StackingColumn100' xName='x' yName='y' name='India' columnWidth=0.4 :border='border' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData2' type='StackingColumn100' xName='x' yName='y' name='China' columnWidth=0.4 :border='border' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData3' type='StackingColumn100' xName='x' yName='y' name='United States' columnWidth=0.4 :border='border' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData4' type='StackingColumn100' xName='x' yName='y' name='Brazil' columnWidth=0.4 :border='border' legendShape='Rectangle' :cornerRadius='cornerRadius'> </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        This Vue 100% stacked column chart example visualizes global cotton production trends by depicting the contributions of various countries over multiple years. Each stacked column represents a countries proportionate production for a given year, summing to a total of 100% per year. The legend in the sample provides information about the series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the 100% stacked column chart. The 100% stacked column chart
        displays multiple series of data as stacked columns, ensuring that the cumulative proportion of each stacked element
        always totals 100%.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover over a point or tap on a
        point in touch-enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use 100% stacking column series, we need
        to inject
        <code>StackingColumnSeries</code> module using <code>provide: { chart: [ StackingColumnSeries ] },</code> method.
    </p>
    <p>
        More information about the 100% stacked column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stacked-column" aria-label="Navigate to the documentation for 100% Stacked Column Chart in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StackingColumnSeries, Legend, Category, Tooltip, Highlight} from "@syncfusion/ej2-vue-charts";
import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
        theme: theme,
        seriesData1: Browser.isDevice ?
            [
                { x: '2021', y: 24300000 },
                { x: '2022', y: 26300000 },
                { x: '2023', y: 25400000 },
                { x: '2024', y: 25000000 }
            ] :
            [
                { x: '2019', y: 28500000 },
                { x: '2020', y: 27500000 },
                { x: '2021', y: 24300000 },
                { x: '2022', y: 26300000 },
                { x: '2023', y: 25400000 },
                { x: '2024', y: 25000000 }
            ],
        seriesData2: Browser.isDevice ?
            [
                { x: '2021', y: 26700000 },
                { x: '2022', y: 30800000 },
                { x: '2023', y: 27400000 },
                { x: '2024', y: 31000000 }
            ] :
            [
                { x: '2019', y: 26900000 },
                { x: '2020', y: 29300000 },
                { x: '2021', y: 26700000 },
                { x: '2022', y: 30800000 },
                { x: '2023', y: 27400000 },
                { x: '2024', y: 31000000 }
            ],
        seriesData3: Browser.isDevice ?
            [
                { x: '2021', y: 17500000 },
                { x: '2022', y: 14500000 },
                { x: '2023', y: 12100000 },
                { x: '2024', y: 14400000 }
            ] :
            [
                { x: '2019', y: 19900000 },
                { x: '2020', y: 14600000 },
                { x: '2021', y: 17500000 },
                { x: '2022', y: 14500000 },
                { x: '2023', y: 12100000 },
                { x: '2024', y: 14400000 }
            ],
        seriesData4: Browser.isDevice ?
            [
                { x: '2021', y: 10800000 },
                { x: '2022', y: 11700000 },
                { x: '2023', y: 14600000 },
                { x: '2024', y: 17000000 }
            ] :
            [
                { x: '2019', y: 13000000 },
                { x: '2020', y: 13800000 },
                { x: '2021', y: 10800000 },
                { x: '2022', y: 11700000 },
                { x: '2023', y: 14600000 },
                { x: '2024', y: 17000000 }
            ],

      //Initializing Primary X Axis
        primaryXAxis: {
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            lineStyle: { width: 0 },
            labelIntersectAction: 'Rotate45',
            valueType: 'Category'
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            interval: 20
        },
        chartArea: {
            border: {
                width: 0
            },
            margin: {
                bottom: 12
            }
        },
        tooltip: {
            enable: true,
            enableHighlight: true,
            header: '<b>${point.x}</b>'
        },
        border: { color: 'white', width: 1 },
        cornerRadius: { topLeft: 4, topRight: 4 },
        width : Browser.isDevice ? '100%' : '75%',
        title: Browser.isDevice ? 'Global Cotton Production by Country (2021–2024)' : 'Global Cotton Production by Country (2019–2024)',
        subTitle: 'Source: fas.usda.gov',
        legend: {
            enableHighlight: true,
            shapeWidth: 9,
            shapeHeight: 9
        },
    };
  },
  provide: {
    chart: [StackingColumnSeries, Category, Tooltip, Legend, Highlight]
  },

  methods: {
        legendClick: function (args) {
            if (args.series.index === 0) {
                if (args.chart.series[3].visible) {
                    args.chart.series[3].cornerRadius.topLeft = 4;
                    args.chart.series[3].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.topLeft = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[2].visible) {
                    args.chart.series[2].cornerRadius.topLeft = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.topLeft = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].cornerRadius.topLeft = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.topLeft = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else {
                    args.chart.series[0].cornerRadius.topLeft = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                }
            }

            if (args.series.index === 1) {
                if (args.chart.series[3].visible) {
                    args.chart.series[3].cornerRadius.topLeft = 4;
                    args.chart.series[3].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.topLeft = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                } else if (args.chart.series[2].visible) {
                    args.chart.series[2].cornerRadius.topLeft = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.topLeft = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].cornerRadius.topLeft = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.topLeft = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                } else {
                    args.chart.series[1].cornerRadius.topLeft = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.topLeft = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                }
            }

            if (args.series.index === 2) {
                if (args.chart.series[3].visible) {
                    args.chart.series[3].cornerRadius.topLeft = 4;
                    args.chart.series[3].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.topLeft = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                } else if (!args.series.visible) {
                    args.chart.series[2].cornerRadius.topLeft = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.topLeft = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                    args.chart.series[0].cornerRadius.topLeft = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].cornerRadius.topLeft = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.topLeft = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].cornerRadius.topLeft = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.topLeft = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                }
            }

            if (args.series.index === 3) {
                if (!args.series.visible) {
                    args.chart.series[3].cornerRadius.topLeft = 4;
                    args.chart.series[3].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.topLeft = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                    args.chart.series[1].cornerRadius.topLeft = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                    args.chart.series[0].cornerRadius.topLeft = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[2].visible) {
                    args.chart.series[2].cornerRadius.topLeft = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[3].cornerRadius.topLeft = 0;
                    args.chart.series[3].cornerRadius.topRight = 0;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].cornerRadius.topLeft = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[3].cornerRadius.topLeft = 0;
                    args.chart.series[3].cornerRadius.topRight = 0;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].cornerRadius.topLeft = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                    args.chart.series[3].cornerRadius.topLeft = 0;
                    args.chart.series[3].cornerRadius.topRight = 0;
                }
            }
        },
        tooltipRender: function (args) {
            if (args.text) {
                let value = args.point.y.toLocaleString('en-US');
                args.text = args.series.name + ": <b>" + value + "M (" + args.point.percentage + "%)</b>";
            }
        }
  },
 
};
</script>