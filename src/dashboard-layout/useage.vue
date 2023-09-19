<template>
    <div id="container">
         <ejs-accumulationchart class="chart" :theme='theme' ref="pieInstance" style='display:block;height:100% !important; width:100% !important;' :legendSettings="legendSettings"> 
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' :dataLabel="dataLabel" :explode="true" name='Usage' explodeOffset='10%' :explodeIndex=2></e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series': AccumulationSeriesDirective,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective 
  },
  data() {
    return {
      theme: theme,
      seriesData:  [
        { 'x': 'Desktop', y: 37, text: '60%' }, { 'x': 'Mobile', y: 17, text: '10%' },
        { 'x': 'Tablet', y: 19, text: '20%' }
     ],
     legendSettings: { visible: false },
     dataLabel: { visible: true, position: 'Inside', name: 'text'},    
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  mounted(){
    this.$refs.pieInstance.ej2Instances.height ="100%";
    this.$refs.pieInstance.ej2Instances.width ="100%";
  }
};
</script>
<style>
 .dashboard-seo .chart-content, .dashboard-seo #container, .dashboard-seo .chart.e-control.e-accumulationchart{
    height: 100%;
    width:100%;
  }
</style>