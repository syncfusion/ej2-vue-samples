<template>
  <div id="container" >
      <ejs-chart class="chart-content" ref="splineInstance" :theme='theme' style='height:100%, width:100%;' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :legendSettings='legend' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='SplineArea' xName='Period' yName='Percentage' name='Online' width=2.5 opacity=0.3 :fill="fill0" :border='border'></e-series>
                <e-series :dataSource='seriesData1' type='SplineArea' xName='Period' yName='Percentage' name='Retail' width=2.5 opacity=0.3 :fill="fill1" :border='border1'></e-series>
            </e-series-collection>
        </ejs-chart>
        <svg style="height: 0">
  <defs>       
      <linearGradient id="gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0"></stop>
          <stop offset="1"></stop>
      </linearGradient>
       <linearGradient id="gradient-chart1" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0"></stop>
          <stop offset="1"></stop>
      </linearGradient>
  </defs>
</svg>
  </div>
</template>

<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, SplineAreaSeries, Legend, DateTime, Tooltip, Category , Highlight} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      seriesData: [
            { Period : "Jan", Percentage : 3600 },
            { Period : "Feb", Percentage : 6200 },
            { Period : "Mar", Percentage : 8100 },
            { Period : "Apr", Percentage : 5900 },
            { Period : "May", Percentage : 8900 },
            { Period : "Jun", Percentage : 7200 },
            { Period : "Jul", Percentage : 4300 },
            { Period : "Aug", Percentage : 4600 },
            { Period : "Sep", Percentage : 5500 },
            { Period : "Oct", Percentage : 6350 },
            { Period : "Nov", Percentage : 5700 },
            { Period : "Dec", Percentage : 8000 }
      ],
      seriesData1: [
            { Period : "Jan", Percentage : 6400,},
            { Period : "Feb", Percentage : 5300 },
            { Period : "Mar", Percentage : 4900 },
            { Period : "Apr", Percentage : 5300 },
            { Period : "May", Percentage : 4200 },
            { Period : "Jun", Percentage : 6500 },
            { Period : "Jul", Percentage : 7900 },
            { Period : "Aug", Percentage : 3800 },
            { Period : "Sep", Percentage : 6800 },
            { Period : "Oct", Percentage : 3400 },
            { Period : "Nov", Percentage : 6400 },
            { Period : "Dec", Percentage : 6800 }
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        edgeLabelPlacement: 'Shift',
        lableStyle: { size: '11px' }
        },
      //Initializing Primary Y Axis
      primaryYAxis: {
          labelFormat: '${value}',
          lineStyle: { width: 0 },
          maximum: 12000,
          minimum: 0,
          majorTickLines: { width: 0 },
          lableStyle: { size: '11px' },
          textStyle: { size: '13px' }
        },
      chartArea: {
        border: {
          width: 0
        }
      },
      tooltip: {
        enable: true ,
         shared: true, 
         enableMarker:false
      },
      border: {
        width: 2.75,
        color:'#2485fa'
        },
      border1: {
        width: 2.75,
        color:'#FEC200'
        },
       fill0: '#2485fa',
       fill1: '#FEC200',
       legend: {enableHighlight : true},
    };
  },
  provide: {
    chart: [SplineAreaSeries, Legend, DateTime, Category, Tooltip, Highlight]
  },
  mounted(){
    this.$refs.splineInstance.ej2Instances.height ="100%";
    this.$refs.splineInstance.ej2Instances.width ="100%";
  }
 
};
</script>
<style scoped>
.dashboard-seo .chart-content, .dashboard-dynamic .chart-content{
    height: 100%;
    width:100%;
  }
</style>
<style>
  .control-container {
      padding: 0px !important;
  }
 #gradient-chart stop {
      stop-color: #2485FA;        
  }
  #gradient-chart1 stop{
      stop-color: #FEC200;
  } 
</style>

