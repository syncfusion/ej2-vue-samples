<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartSpline' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-annotations>
                <e-annotation :content='cloudTemplate' x='Sun' y=2 coordinateUnits='Point' verticalAlignment='Top'>
                </e-annotation>
                <e-annotation :content='sunTemplate' x='Tue' y=33 coordinateUnits='Point' verticalAlignment='Top'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='Max Temp' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Spline' xName='x' yName='y' name='Avg Temp' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData2' type='Spline' xName='x' yName='y' name='Min Temp' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
     <div style="float: right; margin-right: 10px;">Source:
       <a href="https://www.worldweatheronline.com/mooresville-weather/north-carolina/us.aspx" target="_blank">www.worldweatheronline.com</a>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the NC weather report for the year 2016 with default spline series in the chart. 
        Low and high temperature of the year are indicated by using annotation.
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
 #chartSpline_Series_0_Point_2_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-out infinite;
    }

    #chartSpline_Series_2_Point_0_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-in-out infinite;
    }

    @keyframes opac {
        0% {
            stroke-opacity: 1;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0;
            stroke-width: 10px;
        }
    }

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, SplineSeries, ChartAnnotation, Category,  Legend, Tooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        cloudTemplate: function () {
                    return {
                        template: Vue.component('cloudTemplate', {
                            template: `<div id="chart_cloud"><img src="src/chart/images/cloud.png"  style="width: 41px; height: 41px"/></div>`,
                            data: function () { return { data: {} }; }
                        })
                    }
                },
        sunTemplate: function () {
                    return {
                        template: Vue.component('sunTemplate', {
                            template: `<div id="chart_sun"><img src="src/chart/images/sunny.png"  style="width: 41px; height: 41px"/></div>`,
                            data: function () { return { data: {} }; }
                        })
                    }
                },
      theme: theme,
      seriesData: [
                    { x: 'Sun', y: 15 },
                    { x: 'Mon', y: 22 },
                    { x: 'Tue', y: 32 },
                    { x: 'Wed', y: 31 },
                    { x: 'Thu', y: 29 },
                    { x: 'Fri', y: 24 },
                    { x: 'Sat', y: 18 },
                ],

      seriesData1: [
            { x: 'Sun', y: 10 },
            { x: 'Mon', y: 18 },
            { x: 'Tue', y: 28 },
            { x: 'Wed', y: 28 },
            { x: 'Thu', y: 26 },
            { x: 'Fri', y: 20 },
            { x: 'Sat', y: 15 }

      ],
      seriesData2: [
             { x: 'Sun', y: 2 },
             { x: 'Mon', y: 12 },
             { x: 'Tue', y: 22 },
             { x: 'Wed', y: 23 },
             { x: 'Thu', y: 19 }, 
             { x: 'Fri', y: 13 },
             { x: 'Sat', y: 8 },
                ],

      //Initializing Primary X Axis
      primaryXAxis: {
            valueType: 'Category',
            interval: 1, majorGridLines: { width: 0 },
            labelIntersectAction: 'Rotate90'
        },
      //Initializing Primary Y Axis
       primaryYAxis:
        {
            labelFormat: '{value}°C',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
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
      title: "NC Weather Report - 2016"
    };
  },
  provide: {
    chart: [SplineSeries, Legend, Category, Tooltip, ChartAnnotation]
  },
  methods: {
  },
 
});
</script>