<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='RangeColumn' xName='month' high='max' low='min' :marker='marker' columnSpacing=0.4 tooltipMappingName='text' :cornerRadius='cornerRadius'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates the Range Column series, highlighting the maximum and minimum temperature changes in the Contiguous U.S. for the year 2024 over different months.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the range column chart. The range column chart is used to display a range of data by plotting two y-values per data point. The two y-values are used as the upper and lower bounds of a column.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices.
    </p>

    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use range column series, we need to inject
        <code>RangeColumnSeries</code> module using <code>provide: { chart: [RangeColumnSeries] }</code> method.
    </p>
    <p>
        More information about the range column type series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/range-column" aria-label="Navigate to the documentation for Range Column in Vue Chart component">documentation section</a>.
    </p>
</div>

</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, RangeColumnSeries, Category, Tooltip, DataLabel} from "@syncfusion/ej2-vue-charts";

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
          { month: 'Jan', min: 22.75, max: 41.02, text: 'January' },
          { month: 'Feb', min: 29.71, max: 51.93, text: 'February' },
          { month: 'Mar', min: 33.53, max: 56.39, text: 'March' },
          { month: 'Apr', min: 41.22, max: 66.06, text: 'April' },
          { month: 'May', min: 49.87, max: 74.64, text: 'May' },
          { month: 'Jun', min: 59.02, max: 84.58, text: 'June' },
          { month: 'Jul', min: 62.94, max: 88.43, text: 'July' },
          { month: 'Aug', min: 61.27, max: 86.72, text: 'August' },
          { month: 'Sep', min: 55.36, max: 81.86, text: 'September' },
          { month: 'Oct', min: 44.76, max: 73.13, text: 'October' },
          { month: 'Nov', min: 34.79, max: 55.54, text: 'November' },
          { month: 'Dec', min: 28.04, max: 48.36, text: 'December' }
        ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        },

      //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}°F',
            minimum: 0,
            maximum: 100,
            interval: 20,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            title: 'Monthly Temperature Variation (°F)'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        width : Browser.isDevice ? '100%' : '75%',
        tooltip: {
            enable: true,
            header: '<b>${point.tooltip}</b>',
            format: 'Temperature : <b>${point.low} - ${point.high}</b>'
        },
        marker: { dataLabel: { visible: true, position: 'Outer' } },
        cornerRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 },
        title: 'Contiguous U.S. Average Temperature in 2024',
        subTitle: 'Source: ncei.noaa.gov',
        legendSettings: { visible: false }
    };
  },
  provide: {
    chart: [RangeColumnSeries, Category, Tooltip, DataLabel]
  },
  methods: {
    load: function(args) {
       loadChartTheme(args);
    }
  },
 
};
</script>