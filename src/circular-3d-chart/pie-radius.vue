<template>
  <div class="control-section">
    <div class="control-section">
      <ejs-circularchart3d id="container" ref="pie" style='display:block;' :title='title' :theme='theme'
        :tilt='tilt' :legendSettings="legendSettings" :tooltip="tooltip" :load='load'
        :enableAnimation='enableAnimation' :rotation="rotation">
        <e-circularchart3d-series-collection>
          <e-circularchart3d-series :dataSource='data' xName='x' yName='y' :radius='radius' :tooltipMappingName="radius"
            innerRadius="20%" :dataLabel="dataLabel" :animation="animation" > </e-circularchart3d-series>
        </e-circularchart3d-series-collection>
      </ejs-circularchart3d>
    </div>
    <div id="action-description">
      <p>
          This sample compares countries by population density and total area using various radii in a 3D pie series.
      </p>
  </div>
  <div id="description">
      <p>
          In this example, you can see how to render a 3D donut chart with varying radii. You can use the
          <code>radius</code> mapping property to achieve this feature. The data labels are used to represent individual
          data and its values. In addition, the sample shows how to change the order of legend for the donut
          chart by using the <code>reverse</code> property.
      </p>
      <p><code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a
          point on touch-enabled devices.</p>
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
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D, CircularChartHighlight3D } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Belgium', y: 551500, r: Browser.isDevice ? '120' : '110.7', text: 'Belgium' },
        { x: 'Dominican Republic', y: 312685, r: '137.5', text: 'Dominican Republic' },
        { x: 'Cuba', y: 350000, r: '124.6', text: 'Cuba' },
        { x: 'Egypt', y: 301000, r: Browser.isDevice ? '130.8' : '150.8', text: 'Egypt' },
        { x: 'Kazakhstan', y: 300000, r: Browser.isDevice ? '135.5' : '155.5', text: 'Kazakhstan' },
        { x: 'Somalia', y: 357022, r: Browser.isDevice ? '104.6' : '160.6', text: 'Somalia' },
        { x: 'Argentina', y: 505370, r: Browser.isDevice ? '110' : '100', text: 'Argentina' },
      ],
      radius: 'r',
      legendSettings: {
        visible: true,
        reverse: true
      },
      animation: {enable: false},
      dataLabel: {
        visible: true, position: Browser.isDevice ? 'Inside' : 'Outside',
        name: 'text', enableRotation: true,
        font: { fontWeight: '600' },
        connectorStyle: { length: '20px' }
      },
      tooltip: { enable: true, format: '<b>${point.x}</b><br/>Area in square km: <b>${point.y} </b> <br/> Population density per square km: <b>${point.tooltip}</b>' },
      enableAnimation: true,
      rotation: 15,
      tilt: -15,
      title: 'Population Density per Square Kilometer by Country'
    };
  },
  provide: {
    circularchart3d: [CircularChartLegend3D, PieSeries3D, CircularChartDataLabel3D, CircularChartTooltip3D, CircularChartHighlight3D]
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
