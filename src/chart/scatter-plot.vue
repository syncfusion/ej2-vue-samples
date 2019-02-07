<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Scatter' xName='x' yName='y' name='Male' width=2 :marker='marker' opacity=0.6> </e-series>
                <e-series :dataSource='seriesData1' type='Scatter' xName='x' yName='y' name='Female' width=2 :marker='marker1' opacity=0.6> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample compares the height and weight of the genders by using default scatter series in the chart. Tooltip shows the
        information about the data.
    </p>
</div>
<div id="description">  
     <p>
        In this example, you can see how to render and configure the scatter type charts. Scatter charts are used to plot financial
        or scientific data. You can use
        <code>shape</code> property in the marker to change the scatter shape.
        <code>dataLabel</code> is used to represent individual data value.
    </p>
     <p>   
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use scatter series, we need to inject
        <code>ScatterSeries</code> module using
        <code>provide: { chart: [StackingBarSeries] }</code> method.
    </p>
    <p>
        More information on the scatter series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p> 
</div>


</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { scatterData } from './scatter-data';
import { ChartPlugin, ScatterSeries, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
     seriesData: scatterData.getMaleData,
    seriesData1:  scatterData.getFemaleData,
           //Initializing Primary X Axis
      primaryXAxis: {
            majorGridLines: { width: 0 },
            minimum: 100,
            maximum: 220,
            edgeLabelPlacement: 'Shift',
            title: 'Height in Inches'
        },
        chartArea: {
            border: {
                width: 0
            }
        },


      //Initializing Primary Y Axis
         primaryYAxis:
            {
                majorTickLines: {
                    width: 0
                },
                minimum: 50,
                maximum: 80,
                lineStyle: {
                    width: 0
                },
                title: 'Weight in Pounds',
                rangePadding: 'None'
            },

        marker: {
                    visible: false,
                    width: 12,
                    height: 12,
                    shape: 'Circle'
                },

         marker1: {
                    visible: false,
                    width: 12,
                    height: 12,
                    shape: 'Diamond'
                },


       width : Browser.isDevice ? '100%' : '80%',
     
      tooltip: { 
            enable: true,
             format: 'Weight: <b>${point.x} lbs</b> <br/> Height: <b>${point.y}"</b>'
         },
      
      title: "Height vs Weight"
    };
  },
  provide: {
    chart: [ScatterSeries, Legend, Tooltip]
  },
  methods: {
   
 },
 
});
</script>