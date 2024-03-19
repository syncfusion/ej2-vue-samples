<template>
  <div class="control-section">
    <div class="control-section">
      <ejs-circularchart3d id="container" ref="pie" style='display:block;' :title='title' :theme='theme' :highlightMode="highlightMode"
        :legendSettings="legendSettings" :tooltip="tooltip" :tilt='tilt' :rotation='rotation' :enableAnimation='enableAnimation' >
        <e-circularchart3d-series-collection>
          <e-circularchart3d-series :dataSource='data' xName='x' yName='y' :radius='radius' innerRadius="55%"
            :dataLabel="dataLabel"> </e-circularchart3d-series>
        </e-circularchart3d-series-collection>
      </ejs-circularchart3d>
    </div>
    <div id="action-description">
      <p>
          This sample shows the browser market share using a 3D donut chart with a legend displayed on the right side of the chart.
      </p>
  </div>
  <div id="description">
      <p>
          In this example, you can see how to render a 3D donut chart with a legend. The legend provides information about
          the data points in the chart. Clicking on a legend item can collapse the corresponding data point, and hovering
          over a legend item can highlight the data point.
      </p>
      <p><code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a
          point on touch-enabled devices. </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        3D circular chart component features are segregated into individual feature-wise modules. To use legend, you need
        to inject the
        <code>CircularChartLegend3D</code> module using 
        <code>provide: { circularChart3D: [ CircularChartLegend3D ] }</code> method.
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
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective,  PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D, CircularChartHighlight3D } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

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
        { 'x': 'Chrome', y: 62.92, text: '62.92%' },
        { 'x': 'Internet Explorer', y: 6.12, text: '6.12%' },
        { 'x': 'Opera', y: 3.15, text: '3.15%' },
        { 'x': 'Edge', y: 5.5, text: '5.5%' },
        { 'x': 'Safari', y: 19.97, text: '19.97%' },
        { 'x': 'Others', y: 2.34, text: '2.34%' }
      ],
      radius: '75%',
      legendSettings: {
        visible: true,
        enableHighlight: true,
        position: Browser.isDevice ? 'Bottom' : 'Right',
      },
      highlightMode: 'Point',
      dataLabel: {
        visible: true, position: 'Inside',
        font: { fontWeight: '600' }, name: 'text', connectorStyle: { length: '20px' },
        enableRotation: true
      },
      tooltip: { enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "" },
      enableAnimation: true,
      title: 'Browser Market Shares in November 2023',
      rotation: 15,
      tilt: -15,
    };
  },
  provide: {
    circularchart3d: [CircularChartLegend3D, PieSeries3D, CircularChartDataLabel3D, CircularChartTooltip3D, CircularChartHighlight3D]
  },
  methods: {

  },
};
</script>
