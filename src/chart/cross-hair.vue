<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :width='width' :legendSettings='legendSettings'
        :axes='axes' :crosshair='crosshair' :chartArea='chartArea' :zoomSettings='zoomSettings'>
        <e-series-collection>
          <e-series :dataSource='cData' type='Line' xName='xDate' yName='High' name='Product X' :marker='marker'
             :border='border'> </e-series>
          <e-series :dataSource='cData' type='HiloOpenClose' xName='xDate' yAxisName='yAxis' name='Product X'
            bearFillColor='#2ecd71' bullFillColor='#e74c3d' high='High' low='Low' open='Open'
            close='Close'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample depicts the crosshair behavior in the charts. 
        To view the crosshair and its tooltip, hover over the chart or tap on it in touch-enabled devices.
      </p>
    </div>
    <div id="description">
      <p>The crosshair is used to inspect or focus on an individual data point using a vertical and a horizontal line. 
        You can enable the crosshair using the <code>Enable</code> property in the <code>ChartCrosshairSettings</code> class and customize its tooltip by using the <code>ChartAxisCrosshairTooltip</code> in the axis.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use Crosshair, we need to
        inject
        <code>Crosshair</code> module using <code> provide: { chart: [Crosshair] },</code> method.
      </p>
      <p>
        More information on the Crosshair can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/cross-hair-and-track-ball/">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, HiloOpenCloseSeries, DateTime, Crosshair, Zoom } from "@syncfusion/ej2-vue-charts";
import { axesData } from './financial-data';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      cData: axesData,
      //Initializing Primary X Axis
      primaryXAxis: {
        majorGridLines: { width: 0 },
        valueType: 'DateTime',
        crosshairTooltip: { enable: true },
        labelFormat: 'MMM'
      },

      //Initializing Primary Y Axis
      primaryYAxis:
      {
        minimum: 83, maximum: 87, interval: 1,
        title: 'Million in USD',
        labelFormat: '{value}M',
        rowIndex: 0,
        crosshairTooltip: {
          enable: true
        }
      },
      axes: [
        {
          majorGridLines: { width: 0 },
          rowIndex: 0,
          opposedPosition: true,
          minimum: 82, maximum: 88, interval: 2,
          name: 'yAxis',
          title: 'Million in USD (Stock)',
          crosshairTooltip: { enable: true }
        }
      ],
      zoomSettings: {
        mode: 'X',
        enablePinchZooming: true,
        enableSelectionZooming: true,
      },
      chartArea: { border: { width: 0 } },
      crosshair: { enable: true, lineType : 'Both' },
      legendSettings: { visible: false },
      marker: {
        visible: true, height : 7, width : 7
      },
      width: Browser.isDevice ? '100%' : '75%',
      border: { color : 'transparent' },
      title: "Conns, Inc Stock Details"
    };
  },
  provide: {
    chart: [LineSeries, DateTime, Crosshair, HiloOpenCloseSeries, Zoom]
  },
  methods: {
  },

});
</script>