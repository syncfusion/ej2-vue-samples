<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :isTransposed='isTransposed' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='RangeColumn' xName='country' high='high' low='low' :marker='marker' columnSpacing=0.4 :cornerRadius='cornerRadius'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visually represents changes in visa-free access for various countries using an inverted Range Column chart. It highlights the countries that have experienced the most significant increases and decreases over the past decade.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the range column chart in an inverted manner. You can use <code>isTransposed</code> property to invert your chart.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use range column series, we need to inject
        <code>RangeColumnSeries</code> module using <code>provide: { chart: [RangeColumnSeries] }</code> method.
    </p>
    <p>
      More information about the column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/range-column" aria-label="Navigate to the documentation for Range Column in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, RangeColumnSeries, Category, Tooltip, Legend, DataLabel} from "@syncfusion/ej2-vue-charts";

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
          { country: 'Solomon Islands', low: 44, high: 134 },
          { country: 'Tonga', low: 52, high: 131 },
          { country: 'Trinidad and Tobago', low: 36, high: 151 },
          { country: 'Samoa', low: 49, high: 131 },
          { country: 'Saint Lucia', low: 39, high: 148 },
          { country: 'Georgia', low: 68, high: 122 },
          { country: 'Peru', low: 56, high: 141 },
          { country: 'Grenada', low: 41, high: 147 },
          { country: 'Dominica', low: 46, high: 143 },
          { country: 'Ukraine', low: 64, high: 148 },
          { country: 'Colombia', low: 64, high: 134 }
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
            labelFormat: '{value}',
            minimum: 0,
            maximum: 200,
            interval: 20,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            title: 'Growth in Visa-Free Destinations',
            labelRotation: Browser.isDevice ? -45 : 0
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        isTransposed: true,
        width : Browser.isDevice ? '100%' : '75%',
        tooltip: { 
            enable: true,
            format: '${point.x}: <b>${point.low} - ${point.high}</b>'
        },
        marker: { dataLabel: { visible: true, position: 'Outer' } },
        title: 'Global Passport Rankings: Growth in Visa-Free Access (2006–2024)',
        subTitle: 'Source: wikipedia.org',
        legendSettings: { visible: false },
        cornerRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 }
    };
  },
  provide: {
    chart: [RangeColumnSeries, Legend, Category, Tooltip, DataLabel]
  },
  methods: {
    load: function(args) {
        loadChartTheme(args);
    }
  },
 
};
</script>