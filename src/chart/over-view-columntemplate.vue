<template>
  <div id="container" style='display:block;'>
       <ejs-chart class="chart-content" :theme='theme' ref="columnInstance" style='display:block;height:100%, width:100%;' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :legendSettings='legend'>
          <e-series-collection>
              <e-series :dataSource='seriesData' type='Column' xName='Period' yName='Percentage' name='Online' width=2 :marker='marker' :cornerRadius='cornerRadius' fill="#2485fa"> </e-series>
              <e-series :dataSource='seriesData1' type='Column' xName='Period' yName='Percentage' name='Retail' width=2 :marker='marker' :cornerRadius='cornerRadius' fill="#FEC200"> </e-series>
          </e-series-collection>
      </ejs-chart>
  </div>
</template>
<script>
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, DataLabel, Tooltip, Legend, Highlight } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
components: {
  'ejs-chart': ChartComponent,
  'e-series-collection': SeriesCollectionDirective,
  'e-series': SeriesDirective
},
data() {
  return {
    theme: theme,
    seriesData: [
    { Period: 2020, Percentage: 60, TextMapping: "60%" },
    { Period: 2021, Percentage: 56, TextMapping: "56%" },
    { Period: 2022, Percentage: 71, TextMapping: "71%" },
    { Period: 2023, Percentage: 85, TextMapping: "85%" },
    { Period: 2024, Percentage: 73, TextMapping: "73%" }
            ],
    seriesData1: [
    { Period: 2020, Percentage: 40, TextMapping: "40%" },
    { Period: 2021, Percentage: 44, TextMapping: "44%" },
    { Period: 2022, Percentage: 29, TextMapping: "29%" },
    { Period: 2023, Percentage: 15, TextMapping: "15%" },
    { Period: 2024, Percentage: 27, TextMapping: "27%" }
            ],
            
       primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        lableStyle: { size: '11px' }
      },
      chartArea: { border: { width: 0 } },

    //Initializing Primary Y Axis
    primaryYAxis:
      {
        labelFormat: '{value}%',
        lineStyle: { width: 0 },
        maximum: 100,
        minimum: 0,
        majorTickLines: { width: 0 },
        lableStyle: { size: '11px' },
        titleStyle: { size: '13px' }
      },
   cornerRadius: { topLeft: 4, topRight: 4},
   marker: {
   dataLabel: {
    visible: true, position: 'Middle', name:'TextMapping',
    font: {
      color:'#FFFFFF'
         }
       }     
    },
  legend: {
      padding:5,
      shapeHeight:8,
      shapeWidth:8,
      enableHighlight:true
    },
  };
},
provide: {
  chart: [ColumnSeries, Category, DataLabel, Tooltip, Legend, Highlight]
},
mounted(){
  this.$refs.columnInstance.ej2Instances.height ="100%";
  this.$refs.columnInstance.ej2Instances.width ="100%";
}
};
</script>
<style>
  .dashboard-dynamic .chart-content, .dashboard-dynamic #container{
    height: 100%;
    width:100%;
  }
</style>
