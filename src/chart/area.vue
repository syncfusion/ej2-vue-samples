<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' name='Product A' width=2 opacity=0.5> </e-series>
                <e-series :dataSource='seriesData1' type='Area' xName='x' yName='y' name='Product B' width=2 opacity=0.5> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the data about average sales comparison of two products by using default area series in the chart. 
        Legend in the sample shows the information about the series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the area type charts. Similar to line type series, but the area get closed and filled with series color.
        You can use <code>border</code>, <code>fill</code> properties to customize the area. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
        Legend is enabled in this example with series type shape.
     </p>     
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
            <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
        </p>
        <p>
            More information on the area series can be found in this
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
import { ChartPlugin, AreaSeries, Legend, DateTime } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
       theme: theme,      
      seriesData: [
        { x: new Date(2000, 0, 1), y: 4 },
        { x: new Date(2001, 0, 1), y: 3.0 },
        { x: new Date(2002, 0, 1), y: 3.8 },
        { x: new Date(2003, 0, 1), y: 3.4 },
        { x: new Date(2004, 0, 1), y: 3.2 },
        { x: new Date(2005, 0, 1), y: 3.9 },
      ],
      seriesData1: [
        { x: new Date(2000, 0, 1), y: 2.6 },
        { x: new Date(2001, 0, 1), y: 2.8 },
        { x: new Date(2002, 0, 1), y: 2.6 },
        { x: new Date(2003, 0, 1), y: 3 },
        { x: new Date(2004, 0, 1), y: 3.6 },
        { x: new Date(2005, 0, 1), y: 3 },
      ],
      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            majorGridLines: { width: 0 },
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift'
        },
      //Initializing Primary Y Axis
       primaryYAxis:
        {
            title: 'Revenue in Millions',
            labelFormat: '{value}M',
            lineStyle: { width: 0},
            interval: 1,
            majorTickLines: { width: 0}
        },
      chartArea: {
        border: {
          width: 0
        }
      },
       width : Browser.isDevice ? '100%' : '60%',
      title: "Average Sales Comparision"
    };
  },
  provide: {
    chart: [AreaSeries, Legend, DateTime]
  },
  methods: {
   }
 
});
</script>