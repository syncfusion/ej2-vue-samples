<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :isTransposed='isTransposed'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='London' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Spline' xName='x' yName='y' name='France' width=2 :marker='marker'> </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates a spline series by inversing X and Y Axis. 
        Data points are enhanced with marker and tooltip.
    </p>
</div>
<div id="description">
     <p>
        In this example, you can see how to render and configure the spline type charts. Spline chart connects each point in series through a curved line.
        You can use <code>dashArray</code>, <code>width</code>, <code>fill</code> properties to customize the spline. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use spline series, we need to inject
            <code>SplineSeries</code> module using <code>provide: { chart: [SplineSeries] }</code> method.
        </p>
        <p>
            More information on the spline series can be found in this
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
import { ChartPlugin, SplineSeries, Category, Legend, Tooltip} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                    { x: 'Jan', y: -1 },
                    { x: 'Mar', y: 12 },
                    { x: 'Apr', y: 25 },
                    { x: 'Jun', y: 31 },
                    { x: 'Aug', y: 26 },
                    { x: 'Oct', y: 14 },
                    { x: 'Dec', y: 8 },


                ],

      seriesData1: [
               { x: 'Jan', y: 7 },
               { x: 'Mar', y: 2 },
               { x: 'Apr', y: 13 },
               { x: 'Jun', y: 21 },
               { x: 'Aug', y: 26 },
               { x: 'Oct', y: 10 },
               { x: 'Dec', y: 0 },


      ],
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            labelIntersectAction: 'Rotate90',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
      

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            labelFormat: '{value}°C',
            majorGridLines: { width: 0 }
        },


     isTransposed: true,

      width : Browser.isDevice ? '100%' : '60%',
       marker: {
        visible: true,
        height: 10,
        width: 10
      },
      tooltip: {
        enable: true
      },
     title: "Climate Graph - 2012"
    };
  },
  provide: {
    chart: [SplineSeries, Legend, Category, Tooltip]
  },
  methods: {

  },

});
</script>