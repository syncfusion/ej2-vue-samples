<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :crosshair='crosshair' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='jData' type='Line' xName='x' yName='y' name='John' :marker='marker' width=2> </e-series>
                <e-series :dataSource='aData' type='Line' xName='x' yName='y' name='Andrew' :marker='marker' width=2 > </e-series>
                <e-series :dataSource='tData' type='Line' xName='x' yName='y' name='Thomas' :marker='marker' width=2 > </e-series>

            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample illustrates trackball feature in chart. To show trackball, hover or long press the chart and you can see the point value near to the mouse point.
    </p>
</div>

<div id="description">
    <p>
        This sample demonstrates the trackball behavior in chart. Trackball is used to track a data point closer to the current mouse position or touch contact point.
        You can show tooltip for individual point or group of points closer to mouse position using <code>shared</code> properties in tooltip.
    </p>
    <p>
        Hover the chart area to view trackball and its tooltip. Touch and hold to enable trackball in touch enabled devices. 
    </p>
    <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use Trackball, we need to inject
            <code>Trackball</code> module using <code>provide: { chart: [ Trackball ] },</code> method.
        </p>
        <p>
            More information on the Tooltip and Trackball can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-tooltipOptionsModel.html">documentation section</a>.
        </p>  
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, Tooltip, DateTime, Crosshair, LineSeries, Legend } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);
import { john, andrew, thomas } from './trackball-data';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
       theme: theme,
      jData : john,
      aData : andrew,
      tData : thomas,
      //Initializing Primary X Axis
      primaryXAxis: {
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            valueType: 'DateTime',
            skeleton: 'y',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },

      //Initializing Primary Y Axis
       primaryYAxis:
        {
            title: 'Revenue',
            labelFormat: '{value}M',
            majorTickLines: { width: 0 },
            minimum: 10, maximum: 80,
            lineStyle: { width: 0 },
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        marker: { visible: true },

        tooltip: { enable: true, shared: true },

        crosshair: { enable: true, lineType: 'Vertical' },
        width: Browser.isDevice ? '100%' : '60%',
        title: "Average Sales per Person"
    };
  },
  provide: {
    chart: [Tooltip, DateTime, Crosshair, LineSeries, Legend]
  },
  methods: {
   
  },
 
});
</script>