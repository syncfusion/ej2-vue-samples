<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='RangeColumn' xName='x' yName='y' high='high' low='low' name='India' width=2 > </e-series>
                <e-series :dataSource='seriesData1' type='RangeColumn' xName='x' yName='y' high='high' low='low' name='Germany' width=2 > </e-series>
                
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the maximum and minimum temperatures for a week of different countries with default range column series in the chart. Tooltip shows the information about the data points.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the range column type chart. You can use <code>border</code>,
        <code>fill</code> properties to customize the columns. <code>dataLabel</code> are used to represent individual data
        and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use range column series, we need to inject
        <code>RangeColumnSeries</code> module using <code>provide: { chart: [RangeColumnSeries] }</code> method.
    </p>
    <p>
        More information on the range column series can be found in this
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
import { ChartPlugin, RangeColumnSeries, Category, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { x: 'Sun', low: 3.1, high: 10.8 },
                { x: 'Mon', low: 5.7, high: 14.4 }, { x: 'Tue', low: 8.4, high: 16.9 },
                { x: 'Wed', low: 10.6, high: 19.2 },
                { x: 'Thu', low: 8.5, high: 16.1 }, { x: 'Fri', low: 6.0, high: 12.5 },
                { x: 'Sat', low: 1.5, high: 6.9 }
              ],

      seriesData1: [
                { x: 'Sun', low: 2.5, high: 9.8 },
                { x: 'Mon', low: 4.7, high: 11.4 }, { x: 'Tue', low: 6.4, high: 14.4 },
                { x: 'Wed', low: 9.6, high: 17.2 },
                { x: 'Thu', low: 7.5, high: 15.1 }, { x: 'Fri', low: 3.0, high: 10.5 },
                { x: 'Sat', low: 1.2, high: 7.9 }
         ],

      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },


      //Initializing Primary Y Axis
          primaryYAxis: {
            labelFormat: '{value}˚C',
            maximum: 20,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
       width : Browser.isDevice ? '100%' : '60%',
        tooltip: { 
            enable: true
         },
      
      title: "Temperature Variation"
    };
  },
  provide: {
    chart: [RangeColumnSeries, Legend, Category, Tooltip]
  },
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

    }
  },
 
});
</script>