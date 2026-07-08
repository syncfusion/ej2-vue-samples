<template>
  <div class="control-section">
    <div align="center">
      <ejs-accumulationchart style="display:block" :theme="theme" align="center" id="container" 
            :legendSettings="legendSettings" :tooltip="tooltip" :title="title" :centerLabel="centerLabel"
            :enableBorderOnMouseMove="false" :loaded="chartLoaded" :load="load">
        <e-accumulation-series-collection>
            <e-accumulation-series :dataSource="countryData" type="Pie" xName="x" yName="y"
                pointColorMapping="color" radius="90%" innerRadius="75%" :border="border"
                :dataLabel="outerDataLabel" :animation="animation">
            </e-accumulation-series>

            <e-accumulation-series :dataSource="regionData" type="Pie" xName="x" yName="y" 
                pointColorMapping="color" radius="67%" innerRadius="35%" :border="border" :dataLabel="innerDataLabel" :animation="animation">
            </e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>

    <div id="action-description">
      <p>
        This nested donut chart example demonstrates how to visualize the population of Qatar by nationality using multiple pie series.
        The outer ring represents individual countries, while the inner ring shows regional distribution with consistent color grouping.
      </p>
    </div>

    <div id="description">
      <p>
        In this example, multiple pie series are used to display hierarchical data in concentric rings.
        This approach makes it easy to compare nationality-level population distribution alongside broader regional groupings within Qatar.
      </p>
      <p>
        The
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationseries/#radius"
        ><code>radius</code></a>
        and
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationseries/#innerradius"
        ><code>innerRadius</code></a>
        properties control the size and thickness of each ring, enabling the nested donut appearance. The
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/accumulationseries/#pointcolormapping"
        ><code>pointColorMapping</code></a>
        property ensures that countries and their corresponding regions share the same color for visual consistency.
      </p>
      <p>
         The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/tooltipsettings#enable"><code>Tooltip</code></a> feature is enabled to provide additional information. Hover over a segment (or tap on touch devices) to view the nationality and its population share percentage.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The accumulation chart component's features are segregated into individual feature modules.
        To use pie/doughnut series, we inject the required modules via <code>provide</code>.
      </p>
      <p>
        More information about multiple pie series can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#multiple-pie-series"
          aria-label="Navigate to the documentation for Multiple Pie Series in Vue Accumulation Chart component"
        >documentation section</a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { Browser } from '@syncfusion/ej2-base';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip
} from '@syncfusion/ej2-vue-charts';

import { loadAccumulationChartTheme } from './theme-color';

let theme = loadAccumulationChartTheme();

const regionColors = {
  'South Asia': '#1f4e8c',
  'Middle East': '#7a3b8f',
  'S.E. Asia': '#e91e63',
  'Africa': '#f4c20d',
  'Others': '#66a99c'
};

const regionData = [
  { x: 'South Asia', y: 55.85, color: regionColors['South Asia'], text: Browser.isDevice ? 'SA' : 'South Asia' },
  { x: 'Middle East', y: 16.15, color: regionColors['Middle East'], text: Browser.isDevice ? 'ME' : 'Middle East' },
  { x: 'S.E. Asia', y: 7.36, color: regionColors['S.E. Asia'], text: Browser.isDevice ? 'SEA' : 'S.E. Asia' },
  { x: 'Africa', y: 11.25, color: regionColors['Africa'], text: Browser.isDevice ? 'AF' : 'Africa' },
  { x: 'Others', y: 9.39, color: regionColors['Others'], text: Browser.isDevice ? 'Others' : 'Others' }
];

const countryData = [
  { x: 'India', y: 21.8, color: regionColors['South Asia'], text: Browser.isDevice ? 'IND' : 'India' },
  { x: 'Bangladesh', y: 12.5, color: regionColors['South Asia'], text: Browser.isDevice ? 'BGD' : 'Bangladesh' },
  { x: 'Nepal', y: 12.5, color: regionColors['South Asia'], text: Browser.isDevice ? 'NPL' : 'Nepal' },
  { x: 'Pakistan', y: 4.7, color: regionColors['South Asia'], text: Browser.isDevice ? 'PAK' : 'Pakistan' },
  { x: 'Sri Lanka', y: 4.35, color: regionColors['South Asia'], text: Browser.isDevice ? 'LKA' : 'Sri Lanka' },
  { x: 'Qatar', y: 10.5, color: regionColors['Middle East'], text: Browser.isDevice ? 'QAT' : 'Qatar' },
  { x: 'Iran', y: 1.0, color: regionColors['Middle East'], text: Browser.isDevice ? 'IRN' : 'Iran' },
  { x: 'Jordan', y: 1.6, color: regionColors['Middle East'], text: Browser.isDevice ? 'JOR' : 'Jordan' },
  { x: 'Syria', y: 1.8, color: regionColors['Middle East'], text: Browser.isDevice ? 'SYR' : 'Syria' },
  { x: 'Lebanon', y: 1.25, color: regionColors['Middle East'], text: Browser.isDevice ? 'LBN' : 'Lebanon' },
  { x: 'Philippines', y: 7.36, color: regionColors['S.E. Asia'], text: Browser.isDevice ? 'PHL' : 'Philippines' },
  { x: 'Sudan', y: 1.9, color: regionColors['Africa'], text: Browser.isDevice ? 'SDN' : 'Sudan' },
  { x: 'Egypt', y: 9.35, color: regionColors['Africa'], text: Browser.isDevice ? 'EGY' : 'Egypt' },
  { x: 'Others', y: 9.39, color: regionColors['Others'], text: Browser.isDevice ? 'Others' : 'Others' }
];

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      title: 'The Population of Qatar by Nationality',
      countryData: countryData,
      regionData: regionData,
      border: {
        color: '#fff',
        width: 2
      },
      animation: {
        enable: false
      },
      outerDataLabel: {
        visible: true,
        name: 'text',
        position: 'Outside'
      },
      innerDataLabel: {
        visible: true,
        name: 'text',
        position: 'Inside'
      },
      tooltip: {
        enable: true,
        format: '<b>${point.x}</b><br/>Population: <b>${point.y}%</b>',
        textStyle: { fontWeight: 'bold' }
      },
      legendSettings: {
        visible: true,
        mappingKey: 'x'
      },
      centerLabel: {
        text: 'Qatar Population<br><b>3.1 Million</b>',
        textStyle: {
          size: '12px',
          fontWeight: 'bold'
        }
      }
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {
    load: function(args) {
      loadAccumulationChartTheme(args);
    },
    chartLoaded: function() {
      let chart = document.getElementById('container');
      if (chart) {
        chart.setAttribute('title', '');
      }
    }
  }
};
</script>
