<template>
  <div id="container" style='display:block;height:100%, width:100%;'>
      <ejs-chart class="chart-content" ref="splineInstance" :theme='theme' style='display:block;height:100%, width:100%;' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :height='height' :width='width' :border='border'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='SplineArea' xName='x' yName='y' name='Jan' width=2 opacity=0.5 :fill="fill0"></e-series>
                <e-series :dataSource='seriesData1' type='SplineArea' xName='x' yName='y' name='Feb' width=2 opacity=0.5 :fill="fill1"></e-series>
            </e-series-collection>
        </ejs-chart>
  </div>
</template>

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
            { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.6 },
            { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.7 },
            { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.2 }
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
       width :"100%",
       fill1: 'rgb(0, 189, 174)',
       fill0: 'rgb(239, 183, 202)',
       height: "99%"
    };
  },
  provide: {
    chart: [SplineAreaSeries, Legend, DateTime]
  },
  mounted(){
    this.$refs.splineInstance.height ="100%";
    this.$refs.splineInstance.width ="100%";
  }
 
});
</script>

<style>
  .chart-content{
    height: 100%;
    width:100%;
  }
</style>