<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend' :legendClick='legendClick' :tooltipRender='tooltipRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='StackingBar100' xName='x' yName='y' name='Wind' columnWidth=0.6 :border='border' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData2' type='StackingBar100' xName='x' yName='y' name='Solar' columnWidth=0.6 :border='border' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData3' type='StackingBar100' xName='x' yName='y' name='Hydro' columnWidth=0.6 :border='border' legendShape='Rectangle' :cornerRadius='cornerRadius'> </e-series>           
            </e-series-collection>
        </ejs-chart>
    </div>
  <div id="action-description">
    <p>
        This Vue 100% stacked bar chart example visualizes the comparison of renewable energy generation in China from 2020 to 2023, segmented by wind, solar, and hydro sources, using a default 100% stacked bar series. The legend provides additional information about the series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the 100% stacked bar chart. The 100% stacked bar chart displays multiple series of data as stacked bars, ensuring that the cumulative value of each stacked element always totals 100%.</p>
    <p>
        <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices.
    </p>
    
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use 100% stacking bar series, we need to
        inject
        <code>StackingBarSeries</code> module using <code>provide: { chart: [ StackingBarSeries ] },</code> method.
    </p>
    <p>
      More information about the 100% stacked bar series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stacked-bar" aria-label="Navigate to the documentation for 100% Stacked Bar Chart in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StackingBarSeries, Legend, Category, Tooltip, Theme, Highlight} from "@syncfusion/ej2-vue-charts";

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
        seriesData1: [
            { x: '2020', y: 466 },
            { x: '2021', y: 656 },
            { x: '2022', y: 763 },
            { x: '2023', y: 886 }
        ],
        seriesData2: [
            { x: '2020', y: 261 },
            { x: '2021', y: 327 },
            { x: '2022', y: 427 },
            { x: '2023', y: 584 }
        ],
        seriesData3: [
            { x: '2020', y: 1355 },
            { x: '2021', y: 1340 },
            { x: '2022', y: 1352 },
            { x: '2023', y: 1286 }
        ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
        chartArea: {
            border: {
                width: 0
            },
            margin: {
                bottom: 12
            }
        },
        legend: {
            enableHighlight: true,
            shapeWidth: 9,
            shapeHeight: 9
        },
        tooltip: {
            enable: true,
            enableHighlight: true,
            header: '<b>Renewable Energy Generation</b>'
        },
        border: { width: 1, color: "white" },
        cornerRadius: { bottomRight: 4, topRight: 4 },
        width : Browser.isDevice ? '100%' : '75%',
        title: 'Annual Renewable Energy Generation in China (2020–2023) by Source',
        subTitle: 'Source: wikipedia.org',
    };
  },
  provide: {
    chart: [StackingBarSeries, Legend, Category, Tooltip, Highlight]
  },
  methods: {
        legendClick: function (args) {
            if (args.series.index === 0) {
                if (args.chart.series[2].visible) {
                    args.chart.series[2].cornerRadius.bottomRight = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].cornerRadius.bottomRight = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else {
                    args.chart.series[0].cornerRadius.bottomRight = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                }
            }
            if (args.series.index === 1) {
                if (args.chart.series[2].visible) {
                    args.chart.series[2].cornerRadius.bottomRight = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.bottomRight = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].cornerRadius.bottomRight = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.bottomRight = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                } else {
                    args.chart.series[1].cornerRadius.bottomRight = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                }
            }

            if (args.series.index === 2) {
                if (!args.series.visible) {
                    args.chart.series[2].cornerRadius.bottomRight = 4;
                    args.chart.series[2].cornerRadius.topRight = 4;
                    args.chart.series[1].cornerRadius.bottomRight = 0;
                    args.chart.series[1].cornerRadius.topRight = 0;
                    args.chart.series[0].cornerRadius.bottomRight = 0;
                    args.chart.series[0].cornerRadius.topRight = 0;
                } else if (args.chart.series[1].visible) {
                    args.chart.series[1].cornerRadius.bottomRight = 4;
                    args.chart.series[1].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.bottomRight = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                } else if (args.series.visible && args.chart.series[0].visible) {
                    args.chart.series[0].cornerRadius.bottomRight = 4;
                    args.chart.series[0].cornerRadius.topRight = 4;
                    args.chart.series[2].cornerRadius.bottomRight = 0;
                    args.chart.series[2].cornerRadius.topRight = 0;
                }
            }
        },
        tooltipRender: function (args) {
            if (args.text) {
                let value = args.point.y.toLocaleString('en-US');
                args.text = args.series.name + ": <b>" + value + "TWh (" + args.point.percentage + "%)</b>";
            }
        }
  }
 
};
</script>