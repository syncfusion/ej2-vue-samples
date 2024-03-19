<template>
  <div class="control-section">
    <div class="control-section">
      <ejs-circularchart3d id="container" ref="pie" style='display:block;' :title='title' :theme='theme'
        :enableRotation='enableRotation' :tilt='tilt' :legendSettings="legendSettings" :tooltip="tooltip"
        :enableAnimation='enableAnimation'>
        <e-circularchart3d-series-collection>
          <e-circularchart3d-series :dataSource='data' xName='x' yName='y' :radius='radius' innerRadius="65%"
            :dataLabel="dataLabel"> </e-circularchart3d-series>
        </e-circularchart3d-series-collection>
      </ejs-circularchart3d>
    </div>
    <div id="action-description">
      <p>
          This sample visualizes the top-selling electric cars in China using a 3D donut chart. Data points are enhanced
          with tooltip.
      </p>
  </div>
  <div id="description">
      <p> In this example, you can see how to render and configure a 3D donut chart. The donut chart is a circular
          graphic, which is ideal for displaying categories as a proportion or a percentage of the whole. To create a
          donut in the pie series, use the <code>innerRadius</code> property. You can rotate and tilt the donut chart
          using a mouse or
          touch-enabled devices.</p>
      <p><code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a
          point on touch-enabled devices. </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>3D circular chart component features are segregated into individual feature-wise modules. To use datalabel, you 
        need to inject the 
        <code>CircularChartDataLabel3D</code> module using 
        <code>provide: { circularChart3D: [ CircularChartDataLabel3D ] }</code> method.
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
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D } from "@syncfusion/ej2-vue-charts";

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
        { x: 'Tesla', y: 137429 }, { x: 'Aion', y: 80308 }, { x: 'Wuling', y: 76418 }, { x: 'Changan', y: 52849 }, { x: 'Geely', y: 47234 }, { x: 'Nio', y: 31041 }, { x: 'Neta', y: 22449 }, { x: 'BMW', y: 18733 }
      ],
      radius: Browser.isDevice ? '45%' : '75%',
      legendSettings: { visible: false },
      dataLabel: {
        visible: true,
        name: 'x',
        position: 'Outside',
        font: {
          fontWeight: '600',
        },
        connectorStyle: { length: Browser.isDevice ? '20px' : '40px' }
      },
      tooltip: { enable: true, header: "${point.x}", format: 'Sales Count : <b>${point.y}' },
      enableAnimation: true,
      enableRotation: true,
      tilt: -30,
      title: 'Top Selling Electric Cars in China'
    };
  },
  provide: {
    circularchart3d: [ PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D]
  },
  methods: {

  },
};
</script>
