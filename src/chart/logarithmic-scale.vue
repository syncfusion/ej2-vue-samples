<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :width='width' :tooltip='tooltip'
        :chartArea='chartArea' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='Product X' width = 2 :marker='marker'>
          </e-series>

        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample shows a logarithmic axis in a chart with data about the sales of a product between 1995 and 2005.
      </p>
    </div>
    <div id="description">
      <p>
        The logarithmic axis uses a logarithmic scale and is very useful when viewing data with values of both lower orders of magnitude (e.g., 10^-6) and higher orders of magnitude (e.g. 10^6). 
        To use the logarithmic axis, set <code>ValueType</code> in axis to <b>Logarithmic</b>.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use Logarithmic axis, we need
        to inject
        <code>Logarithmic</code> module using <code>provide: { chart: [ Logarithmic ] },</code> method.
      </p>
      <p>
        More information on the Logarithmic axis can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/logarithmic-axis/">documentation
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
import { ChartPlugin, SplineSeries, Tooltip, DateTime, Logarithmic, Legend } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { x: new Date(1995, 0, 1), y: 80 },
        { x: new Date(1996, 0, 1), y: 200 },
        { x: new Date(1997, 0, 1), y: 400 },
        { x: new Date(1998, 0, 1), y: 600 },
        { x: new Date(1999, 0, 1), y: 700 },
        { x: new Date(2000, 0, 1), y: 1400 },
        { x: new Date(2001, 0, 1), y: 2000 },
        { x: new Date(2002, 0, 1), y: 4000 },
        { x: new Date(2003, 0, 1), y: 6000 },
        { x: new Date(2004, 0, 1), y: 8000 },
        { x: new Date(2005, 0, 1), y: 11000 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        labelFormat: 'y',
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
      },

      //Initializing Primary Y Axis
      primaryYAxis:
      {
        valueType: 'Logarithmic',
        edgeLabelPlacement: 'Shift',
        minorTicksPerInterval: 5,
        majorGridLines: { width: 1.5 },
        minorTickLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 100000,
        interval: 1,
        labelFormat: '${value}'
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      marker: {
        visible: true, height: 7, width: 7, isFilled: true
      },

      width: Browser.isDevice ? '100%' : '75%',
      tooltip: {
        enable: true,
        header: '',
        shared: true,
        format: '${point.x} : <b>${point.y}</b>'
      },
      legendSettings: {
        visible: false
      },

      title: "Product X Growth [1995-2005]"
    };
  },
  provide: {
    chart: [SplineSeries, DateTime, Logarithmic, Tooltip, Legend]
  },
  methods: {
  },

});
</script>