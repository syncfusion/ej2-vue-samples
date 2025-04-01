<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :stackLabels='stackLabels' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :axisLabelRender='OnChartAxisLabelRender' :legendClick='legendClick' :legendSettings='legend' >
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='StackingColumn' xName='x' yName='y' name='India' columnWidth=0.4 :border='border' :marker="marker" legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData2' type='StackingColumn' xName='x' yName='y' name='China' columnWidth=0.4 :border='border' :marker="marker" legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData3' type='StackingColumn' xName='x' yName='y' name='United States' columnWidth=0.4 :border='border' :marker="marker" :cornerRadius='cornerRadius' legendShape='Rectangle'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
      This Vue stacked column chart visualizes global cotton production trends over the years, with data points enhanced by data labels.
    </p>
</div>
<div id="description">
  <p>
    In this example, you can see how to render and configure the stacked column chart. The stacked column chart stacks points in the series vertically. You can also use the <code>StackingGroup</code> property to group stacked collections based on category.
    This chart displays data labels for individual points and the total value on top of each stack.
  </p>
  <p>
    <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
  </p>
   
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use stacking column series, we need to inject
            <code>StackingColumnSeries</code> module using <code>provide: { chart: [StackingColumnSeries] }</code> method.
        </p>
        <p>
          More information about the stacked column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stack-column" aria-label="Navigate to the documentation for Stacked Column Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StackingColumnSeries, Legend, Category, Tooltip, Highlight, legendClick, DataLabel} from "@syncfusion/ej2-vue-charts";

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
        { x: '2021', y: 24.3 },
        { x: '2022', y: 26.3 },
        { x: '2023', y: 25.4 },
        { x: '2024', y: 25 }
    ] :
    [
        { x: '2019', y: 28.5 },
        { x: '2020', y: 27.5 },
        { x: '2021', y: 24.3 },
        { x: '2022', y: 26.3 },
        { x: '2023', y: 25.4 },
        { x: '2024', y: 25 }
    ],

    seriesData2: Browser.isDevice ?
    [
        { x: '2021', y: 26.7 },
        { x: '2022', y: 30.8 },
        { x: '2023', y: 27.4 },
        { x: '2024', y: 31 }
    ] :
    [
        { x: '2019', y: 26.9 },
        { x: '2020', y: 29.3 },
        { x: '2021', y: 26.7 },
        { x: '2022', y: 30.8 },
        { x: '2023', y: 27.4 },
        { x: '2024', y: 31 }
    ],

    seriesData3: Browser.isDevice ?
    [
        { x: '2021', y: 17.5 },
        { x: '2022', y: 14.5 },
        { x: '2023', y: 12.1 },
        { x: '2024', y: 14.4 }
    ] :
    [
        { x: '2019', y: 19.9 },
        { x: '2020', y: 14.6 },
        { x: '2021', y: 17.5 },
        { x: '2022', y: 14.5 },
        { x: '2023', y: 12.1 },
        { x: '2024', y: 14.4 }
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
            title: 'Production (60KG Bags)',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}M', interval: 20 
        },
        chartArea: {
            border: {
                width: 0
            },
            margin: { bottom: 12 }
        },

      tooltip: {
            enable: true, enableHighlight: true, header: '<b>${point.x}</b>', format: '${series.name} : <b>${point.y}</b>' 
        },
        marker: { visible: false, dataLabel: { visible: true, font: { size: Browser.isDevice ? '10px' : '12px' }}},
        cornerRadius: {topLeft: 4, topRight: 4},
        legend: {enableHighlight : true, shapeWidth: 9, shapeHeight: 9},
        border: {color: '#ffffff', width:1},
        width : Browser.isDevice ? '100%' : '75%',
      title: "Global Cotton Production by Country (2019–2024)",
      subTitle: "Source: fas.usda.gov",
      stackLabels: { visible: true, format: '{value}M', font: { size: Browser.isDevice ? '10px' : '12px' } }
    };
  },
  provide: {
    chart: [StackingColumnSeries, Legend, Category, Tooltip, Highlight, DataLabel]
  },
  methods: {
    load: function(args) {
        this.theme = loadChartTheme(args);
    },
    legendClick: function(args){
      if (args.series.index === 0) {
        if (args.chart.series[2].visible) {
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
        if (args.chart.series[2].visible) {
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
        if (!args.series.visible) {
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
    },
    OnChartAxisLabelRender : function(args){
      if(args.value > 999999 || args.value < -999999) {
      args.text = args.text.replace("0000000","0M").replace("000000", "M");
      }
  },
    }
};
</script>