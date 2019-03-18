<template>
    <div id="container">
         <ejs-accumulationchart class="chart" ref="pieInstance" style='display:block;height:100% !important; width:100% !important;' :legendSettings="legendSettings"> 
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' :dataLabel="dataLabel" :explode="true" name='Usage' explodeOffset='10%' :explodeIndex=2></e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
export default {
  data() {
    return {
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
    this.$refs.pieInstance.height ="100%";
    this.$refs.pieInstance.width ="100%";
  }
};
</script>
<style>
 .chart-content, #container, .chart.e-control.e-accumulationchart{
    height: 100%;
    width:100%;
  }
</style>