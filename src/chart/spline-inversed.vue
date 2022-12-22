<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :isTransposed='isTransposed'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Spline' xName='Month' yName='FR_Temperature' opacity=1 width=2 :marker='marker'> </e-series> 
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample shows the music album sales with spline series by inverting X and Y Axes. 
        Data points are enhanced by a marker and tooltip.
    </p>
</div>
<div id="description">
     <p>
      In this example, you can see how to render and configure the spline type charts. A Spline chart uses a curved line to connect points in a data series. 
        <code>Markers</code>are used to represent individual data and its value.
    </p>
    <p>
      <code>Tooltips</code>are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use spline series, we need to inject
            <code>SplineSeries</code> module using <code>provide: { chart: [SplineSeries] }</code> method.
        </p>
        <p>
          More information about the line type series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#line-charts">documentation section</a>.
        </p> 
</div>

</div>


</template>
<style scoped>

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
        { Month : 2000, LDN_Temperature : -1, FR_Temperature : 10 },
        { Month : 2002, LDN_Temperature : -1, FR_Temperature : 7 },
        { Month : 2004, LDN_Temperature : 25, FR_Temperature : 13 },
        { Month : 2005, LDN_Temperature : 31, FR_Temperature : 16 },
        { Month : 2007, LDN_Temperature : 14, FR_Temperature : 11 },
        { Month : 2010, LDN_Temperature : 8, FR_Temperature : 10 },
        { Month : 2011, LDN_Temperature : 8, FR_Temperature : 15 },
        { Month : 2013, LDN_Temperature : 8, FR_Temperature : 20 },
        { Month : 2014, LDN_Temperature : 8, FR_Temperature : 17 },
        { Month : 2015, LDN_Temperature : 8, FR_Temperature : 5 }
            ],
      //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Years',
            valueType: 'Double',
            maximum: 2016,
            minimum: 2000,
            interval: 4,
            minorTickLines: { width: 0 },

        },
        chartArea: {
            border: {
                width: 0
            }
        },
      

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Sales (In Millions)',
            maximum: 25,
            minimum: 0,
            interval: 5,
            labelFormat: '{value}M',
            edgeLabelPlacement: 'Shift'
        },


     isTransposed: true,

      width : Browser.isDevice ? '100%' : '75%',
       marker: {
        visible: true,
        height: 7,
        width: 7,
        isFilled: true
      },
      tooltip: {
        enable: true,
        header: "<b>Album Sale</b>",
        shared: true,
        format: '${point.x}: <b>${point.y}</b>',
      },
     title: "Music Album Sales"
    };
  },
  provide: {
    chart: [SplineSeries, Legend, Category, Tooltip]
  },
  methods: {

  },

});
</script>