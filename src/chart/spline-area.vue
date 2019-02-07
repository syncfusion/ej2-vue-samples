<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :border='border'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='SplineArea' xName='x' yName='y' name='US' width=2 opacity=0.5> </e-series>
                <e-series :dataSource='seriesData1' type='SplineArea' xName='x' yName='y' name='France' width=2 opacity=0.5> </e-series>
                 <e-series :dataSource='seriesData2' type='SplineArea' xName='x' yName='y' name='Germany' width=2 opacity=0.5> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>

<div id="action-description">
    <p>
        This sample visualizes the data about inflation rate comparison for three countries by using spline area series in the chart. 
        Legend in the sample shows the information about the series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the spline area type charts. This is similar to line type series, but the area will be closed and filled with series color. 
        You can use <code>border</code> and <code>fill</code> properties to customize the area. <code>marker</code> and <code>dataLabel</code> properties are used to represent individual data and its value. 
        Legend is enabled in this example with series type shape.
     </p>     
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use spline area series, we need to inject
            <code>SplineAreaSeries</code> module using <code>provide: { chart: [SplineAreaSeries] }</code> method.
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
import { ChartPlugin, SplineAreaSeries, Legend, DateTime } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
       theme: theme,
      seriesData: [
                    { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.4 },
                    { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.6 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.5 },
                    { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.8 },
                    { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.1 }

      ],
      seriesData1: [
                    { x: new Date(2002, 0, 1), y: 2 }, { x: new Date(2003, 0, 1), y: 1.7 },
                    { x: new Date(2004, 0, 1), y: 1.8 }, { x: new Date(2005, 0, 1), y: 2.1 },
                    { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.7 },
                    { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.8 },
                    { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.3 }

      ],

      seriesData2: [
                    { x: new Date(2002, 0, 1), y: 0.8 }, { x: new Date(2003, 0, 1), y: 1.3 },
                    { x: new Date(2004, 0, 1), y: 1.1 }, { x: new Date(2005, 0, 1), y: 1.6 },
                    { x: new Date(2006, 0, 1), y: 2 }, { x: new Date(2007, 0, 1), y: 1.7 },
                    { x: new Date(2008, 0, 1), y: 2.3 }, { x: new Date(2009, 0, 1), y: 2.7 },
                    { x: new Date(2010, 0, 1), y: 1.1 }, { x: new Date(2011, 0, 1), y: 2.3 }
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
        primaryYAxis: {
            labelFormat: '{value}%',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
      chartArea: {
        border: {
          width: 0
        }
      },
      border: {
           color: 'transparent'
        },
       width : Browser.isDevice ? '100%' : '60%',
      title: "Inflation Rate in Percentage"
    };
  },
  provide: {
    chart: [SplineAreaSeries, Legend, DateTime]
  },
  methods: {
   },
 
});
</script>