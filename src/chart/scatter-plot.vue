<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='series1' type='Scatter' xName='Breadth' yName='Circumference' name='18-20 Years' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='series2' type='Scatter' xName='Breadth' yName='Circumference' name='21-25 Years' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='series3' type='Scatter' xName='Breadth' yName='Circumference' name='26-30 Years' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='series4' type='Scatter' xName='Breadth' yName='Circumference' name='31-35 years' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='series5' type='Scatter' xName='Breadth' yName='Circumference' name='36+ Years' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This Vue scatter plot chart example compares the shoulder and chest measurements for different age groups using the default scatter series.
    </p>
</div>
<div id="description">  
     <p>
        In this example, you can see how to render and configure the scatter chart. The scatter chart is used to plot data with two numeric parameters. You can use the <code>Shape</code> property in the marker to change the scatter shape.
    </p>
     <p>   
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use scatter series, we need to inject
        <code>ScatterSeries</code> module using
        <code>provide: { chart: [StackingBarSeries] }</code> method.
    </p>
    <p>
        More information about the scatter series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#scatter-charts">documentation section</a>.
    </p> 
</div>


</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { scatterData } from './scatter-data';
import { ChartPlugin, ScatterSeries, Tooltip, Legend, Highlight } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
         series1: scatterData.getCluster1Value,
         series2: scatterData.getCluster2Value,
         series3: scatterData.getCluster3Value,
         series4: scatterData.getCluster4Value,
         series5: scatterData.getCluster5Value,
           //Initializing Primary X Axis
      primaryXAxis: {
            minimum: 40,
            maximum: 56,
            majorGridLines: { width: 0 },
            title: 'Shoulder Breadth (cm)'
        },
        chartArea: {
            border: {
                width: 0
            }
        },


      //Initializing Primary Y Axis
         primaryYAxis:
            {
                mmajorTickLines: { width: 0 },
                minimum: 70,
                maximum: 140,
                interval: 10,
                lineStyle: {
                    width: 0
                },
                rangePadding: 'None',
                title: 'Bust Chest Circumference (cm)'
            },

        marker: {
                    width: 9,
                    height: 9,
                    shape: 'Circle'
                },

       width : Browser.isDevice ? '100%' : '75%',
       legend: {enableHighlight : true},
      tooltip: { 
            enable: true,
         },
    };
  },
  provide: {
    chart: [ScatterSeries, Legend, Tooltip, Highlight ]
  },
  methods: {
   
 },
 
});
</script>