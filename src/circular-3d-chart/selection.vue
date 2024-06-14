<template>
  <div class="control-section">
    <div class="control-section">
      <ejs-circularchart3d id="container" ref="pie" style='display:block;' :title='title' :theme='theme'
        :tooltip='tooltip' :selectionPattern='selectionPattern' :legendSettings="legendSettings"
        :isMultiSelect='isMultiSelect' :tilt='tilt' :enableAnimation='enableAnimation' :load='load'
        :highlightMode='highlightMode' :selectionMode='selectionMode'>
        <e-circularchart3d-series-collection>
          <e-circularchart3d-series :dataSource='data' xName='x' yName='y' :radius='radius' innerRadius="0%" :dataLabel="dataLabel">
          </e-circularchart3d-series>
        </e-circularchart3d-series-collection>
      </ejs-circularchart3d>
    </div>
    <div id="action-description">
      <p>
          This sample displays the browser market share using a 3D pie chart with selection and highlight behavior.
      </p>
  </div>
  <div id="description">
      <p>
          In this sample, you can select and highlight any point in the chart by clicking on or touching it. Additionally,
          you have the option to select and highlight a point during the initial loading of the chart using the
          <code>selectedDataIndexes</code> option.
      </p>
      <p><code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a
          point on touch-enabled devices.</p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        3D circular chart component features are segregated into individual feature-wise modules. To use selection, you
        need to inject the
        <code>CircularChartSelection3D</code> module using
        <code>provide: { circularChart3D: [ CircularChartSelection3D ] }</code> method.
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
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D, CircularChartHighlight3D, CircularChartSelection3D } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-circularchart3d': CircularChart3DComponent,
    'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
    'e-circularchart3d-series': CircularChart3DSeriesDirective
  },
  data: function () {
    return {
      theme: theme,
      data: [
        { 'x': 'Chrome', y: 62.92 },
        { 'x': 'Internet Explorer', y: 6.12 },
        { 'x': 'Edge', y: 5.5 },
        { 'x': 'Opera', y: 3.15 },
        { 'x': 'Safari', y: 19.97 },
        { 'x': 'Others', y: 2.34 }
      ],
      dataLabel: {
        visible: true,
        name: 'x',
        position: 'Outside',
        font: {
          fontWeight: '600',
        },
        connectorStyle: { length: Browser.isDevice ? '20px' : '40px' }
      },
      radius: Browser.isDevice ? '50%' : '70%',
      legendSettings: {
        visible: true,
        toggleVisibility: false,
        position: Browser.isDevice ? 'Bottom' : 'Right',
      },
      highlightMode: 'Point',
      selectionMode: 'Point',
      selectionPattern: 'DiagonalBackward',
      isMultiSelect: true,
      enableAnimation: true,
      tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "" },
      title: 'Browser Market Shares in November 2023',
      tilt: -35,
    };
  },
  provide: {
    circularchart3d: [PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D, CircularChartHighlight3D, CircularChartSelection3D]
  },
  methods: {
    load: function (args) {
      var selectedTheme = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Material';
      args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    }

  },
};
</script>
