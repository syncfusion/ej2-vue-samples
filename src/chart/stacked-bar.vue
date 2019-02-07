<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y' name='Apple' width=2 > </e-series>
                <e-series :dataSource='seriesData1' type='StackingBar' xName='x' yName='y' name='Orange' width=2 > </e-series>
                <e-series :dataSource='seriesData2' type='StackingBar' xName='x' yName='y' name='Wastage' width=2 > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes sales comparison of different fruits with default stacked bar series in chart. Legend in the sample shows the information about the series.
    </p>
</div>
<div id="description">
  <p>
    In this example, you can see how to render and configure the stacking bar type charts. Stacks the points in the series horizontally and also you can use <code>stackingGroup</code> property to group the stacking collection based on categories.
    You can use <code>border</code>, <code>fill</code> properties to customize the vertical bar. <code>dataLabel</code> is used to represent individual data and its value.
  </p>
  <p>
    Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
  </p>
    <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use stacking bar series, we need to inject
            <code>StackingBarSeries</code> module using <code>provide: { chart: [StackingBarSeries] }</code> method.
        </p>
        <p>
            More information on the stacking bar series can be found in this
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
import { ChartPlugin, StackingBarSeries, Category, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 12 }, { x: 'Apr', y: 15.5 },
                { x: 'May', y: 20 }, { x: 'Jun', y: 24 }

            ],

      seriesData1: [
                { x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 11 }, { x: 'Apr', y: 16 },
                { x: 'May', y: 21 }, { x: 'Jun', y: 25 }

         ],

          seriesData2: [
                { x: 'Jan', y: -1 }, { x: 'Feb', y: -1.5 }, { x: 'Mar', y: -2 }, { x: 'Apr', y: -2.5 },
                { x: 'May', y: -3 }, { x: 'Jun', y: -3.5 }

         ],


      //Initializing Primary X Axis
      primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },


      //Initializing Primary Y Axis
         primaryYAxis:
        {
            lineStyle: { width: 0},
            majorTickLines: {width: 0},
            labelFormat: '{value}%',
            edgeLabelPlacement: 'Shift'
        },

       width : Browser.isDevice ? '100%' : '60%',
     
      tooltip: { 
            enable: true
         },
      
      title: "Sales Comparison"
    };
  },
  provide: {
    chart: [StackingBarSeries, Legend, Category, Tooltip]
  },
  methods: {
  },
 
});
</script>