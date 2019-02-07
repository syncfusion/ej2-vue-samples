<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
             :width='width' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Product X' :marker='marker'> </e-series>

            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates the rendering of logarithmic axis in the chart.
    </p>
</div>
<div id="description">
    <p>
    Logarithmic axis uses logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (eg: 10^-6) and higher order of magnitude (eg: 10^6).
    To render Logarithmic axis, set <code>valueType</code> in axis to <b>Logarithmic</b>.
    </p>
    <p>
    Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use Logarithmic axis, we need to inject
            <code>Logarithmic</code> module using <code>provide: { chart: [ Logarithmic ] },</code> method.
        </p>
        <p>
            More information on the Logarithmic axis can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
        </p>  
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, Tooltip, DateTime, Logarithmic, Legend } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
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
            edgeLabelPlacement: 'Shift'
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            valueType: 'Logarithmic',
            edgeLabelPlacement: 'Shift',
            minorTicksPerInterval: 5,
            majorGridLines: { width: 1.5 },
            minorTickLines: { width: 0, height: 4 },
            minimum: 0,
            maximum: 100000,
            interval: 1,
            title: Browser.isDevice ? '' : 'Profit',
            labelFormat: '${value}'
        },        

         marker: {
                    visible: true, height: 10, width: 10
                },


      width: Browser.isDevice ? '100%' : '60%',
      tooltip: { enable: true, header: 'Profit' },
        legendSettings: {
            visible: false
        },

      title: "Product X Growth [1995-2005]"
    };
  },
  provide: {
    chart: [LineSeries, DateTime, Logarithmic, Tooltip, Legend]
  },
  methods: {
   },
 
});
</script>