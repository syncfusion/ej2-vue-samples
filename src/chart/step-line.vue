<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y' name='China' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='StepLine' xName='x' yName='y' name='Australia' width=2 :marker='marker'> </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the unemployment rate from 1975 to 2010 with default stepline series in the chart. 
        Data points are enhanced with marker and tooltip.
    </p>
</div>
<div id="description">
  <p>
    In this example, you can see how to render and configure the stepline type charts. This series forms the step line progress, by connecting points through vertical and horizontal lines.
    You can use <code>dashArray</code>, <code>width</code>, <code>fill</code> properties to customize the line. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
  </p>
  <p>
    Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
  </p>
    <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use step line series, we need to inject
            <code>StepLineSeries</code> module using <code>provide: { chart: [StepLineSeries] }</code> method.
        </p>
        <p>
            More information on the StepLine series can be found in this
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
import { ChartPlugin, StepLineSeries, DateTime, Legend, Tooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
       theme: theme,
      seriesData: [
                    { x: new Date(1975, 0, 1), y: 16 },
                    { x: new Date(1980, 0, 1), y: 12.5 },
                    { x: new Date(1985, 0, 1), y: 19 },
                    { x: new Date(1990, 0, 1), y: 14.4 },
                    { x: new Date(1995, 0, 1), y: 11.5 },
                    { x: new Date(2000, 0, 1), y: 14 },
                    { x: new Date(2005, 0, 1), y: 10 },
                    { x: new Date(2010, 0, 1), y: 16 }

                ],

      seriesData1: [
             { x: new Date(1975, 0, 1), y: 10 },
                    { x: new Date(1980, 0, 1), y: 7.5 },
                    { x: new Date(1985, 0, 1), y: 11 },
                    { x: new Date(1990, 0, 1), y: 7 },
                    { x: new Date(1995, 0, 1), y: 8 },
                    { x: new Date(2000, 0, 1), y: 6 },
                    { x: new Date(2005, 0, 1), y: 3.5 },
                    { x: new Date(2010, 0, 1), y: 7 }
      ],
      //Initializing Primary X Axis
       primaryXAxis: {
            labelFormat: 'y',
            intervalType: 'Years',
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            lineStyle: { width: 0 },
            interval: 5,
            majorTickLines: { width: 0 },
            labelFormat: '{value}%'
        },
        chartArea: {
            border: {
                width: 0
            }
        },

       width : Browser.isDevice ? '100%' : '60%',
       marker: {
        visible: true,
        height: 10,
        width: 10
      },
      tooltip: {
        enable: true
      },
      
      title: "Unemployment Rates 1975-2010"
    };
  },
  provide: {
    chart: [StepLineSeries, Legend, DateTime, Tooltip]
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