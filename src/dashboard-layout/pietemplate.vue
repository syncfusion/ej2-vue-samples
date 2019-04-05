<template>
    <div id="app" style='display:block;height:100%; width:100%;'>
         <ejs-accumulationchart class="chart-content" :theme='theme' ref="accumulationInstance" style='display:block;height:100%; width:100%;' :legendSettings="legendSettings" :tooltip="tooltip"> 
            <e-accumulation-series-collection>
                <e-accumulation-series :palettes='palettes' :dataSource='seriesData' xName='x' yName='y' innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default {
  data() {
    return {
      theme: theme,
      seriesData:  [
        { 'x': 'Jan', y: 12.5, text: 'January' },
        { 'x': 'Feb', y: 25, text: 'February' },
        { 'x': 'Mar', y: 50, text: 'March' },
     ],
     legendSettings: { visible: false },
     dataLabel: { visible: true, position: 'Inside', name: 'value'},
     tooltip: {
        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
     },
     palettes: ['#00bdae', '#357cd2', '#e56691'],
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
    mounted(){
    this.$refs.accumulationInstance.height ="100%";
    this.$refs.accumulationInstance.width ="100%";
  }
};
</script>

<style>
  .chart-content{
    height: 100%;
    width:100%;
  }
  #container{
    width: 100%;
    height: 100%;
  }
</style>