<template>
    <div id="container" style='display:block;height:100%, width:100%;'>
         <ejs-chart class="chart-content" :theme='theme' ref="lineInstance" style='display:block;height:100%, width:100%;' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Jan' width=2 :marker='marker' > </e-series>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='Feb' width=2 :marker='marker' fill="rgb(239, 183, 202)"> </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Mar' width=2 :marker='marker' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category, DataLabel, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

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
            { x: 'Jan', y: 46 }, { x: 'Feb', y: 27 }, { x: 'Mar', y: 26 }
              ],
      seriesData1: [
            { x: 'Jan', y: 37 }, { x: 'Feb', y: 23 }, { x: 'Mar', y: 18 }
              ],
      seriesData2: [
            { x: 'Jan', y: 38 }, { x: 'Feb', y: 17 }, { x: 'Mar', y: 26 }
              ],
         primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },
     marker: 
     { dataLabel: 
           { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } 
           }
           
      },
    };
  },
  provide: {
    chart: [ColumnSeries, Category, DataLabel, Tooltip, Legend]
  },
  mounted(){
    this.$refs.lineInstance.ej2Instances.height ="100%";
    this.$refs.lineInstance.ej2Instances.width ="100%";
  }
};
</script>

<style>
  .dashboard-dynamic .chart-content, .dashboard-dynamic #container{
    height: 100%;
    width:100%;
  }
</style>