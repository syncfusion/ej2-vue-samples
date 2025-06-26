<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :isTransposed='isTransposed' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Spline' xName='country' yName='y' width=2 :marker='marker'> </e-series> 
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample showcases an inversed spline chart depicting stock market capitalization as a percentage of GDP by
        country, with enhanced interactivity through markers and tooltips.
    </p>
</div>
<div id="description">
     <p>
        In this example, you can see how to render and configure inversed spline type charts using the
        <code>isTransposed</code> property. A spline chart uses a curved line to connect points in a data series.
        <code>Markers</code> are used to represent individual data points and their values.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example. To see a tooltip in action, hover over or tap on the chart.
    </p>
      
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use spline series, we need to inject
            <code>SplineSeries</code> module using <code>provide: { chart: [SplineSeries] }</code> method.
        </p>
        <p>
          More information about the spline type series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/spline" aria-label="Navigate to the documentation for Spline Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>

</div>


</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, SplineSeries, Category, Highlight, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";

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
        seriesData: [
            { country: 'United States', y: 194.55 },
            { country: 'Japan', y: 146.2 },
            { country: 'China', y: 65.1 },
            { country: 'France', y: 84.9 },
            { country: 'India', y: 140.1 },
            { country: 'Canada', y: 160.7 },
            { country: 'Brazil', y: 68.4 },
            { country: 'United Kingdom', y: 100.2 },
            { country: 'Sweden', y: 162 },
            { country: 'Netherlands', y: 132.3 },
            { country: 'Bangladesh', y: 27.7 }
        ],
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            labelPlacement: 'OnTicks'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
      //Initializing Primary Y Axis
        primaryYAxis:
        {
            labelFormat: '{value}%',
            title: 'Capitalization Ratio (% of GDP)',
            interval: 40,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            labelRotation: Browser.isDevice ? -45 : 0
        },
        isTransposed: true,
        width : Browser.isDevice ? '100%' : '75%',
        marker: {
            visible: true,
            height: 7,
            width: 7,
            isFilled: true
        },
        tooltip: {
            enable: true,
            showNearestTooltip: true,
            header: '<b>Stock Market Cap</b>',
            format: '${point.x}: <b>${point.y}</b>',
            enableHighlight: true
        },
        title: 'Stock Market Capitalization as a Percentage of GDP by Country',
        subTitle: 'Source: wikipedia.org',
        legendSettings: { visible: false }
    };
  },
  provide: {
    chart: [SplineSeries, Category, Highlight, Tooltip, Legend]
  },
  methods: {

  },

};
</script>