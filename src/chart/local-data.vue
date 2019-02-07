<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :crosshair='crosshair'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Product X' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='Product Y' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates plotting of local data about stock price analysis of two products for a certain period.
    </p>
</div>
<div id="description">
    <p>
    For fetching data for chart, local data can be used. The <code> dataSource </code> property can be assigned either with the array of JavaScript objects or instance of <code> DataManager </code>.
    </p>
    <p>
    Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
     <br>
        <p>
           In this demo, the array of JavaScript objects is assigned as the data source to the Chart.
        </p> 
</div>

</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, Legend, Tooltip, DateTime, Crosshair } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

let series1 = [];
let series2 = [];
let point1;
let point2;
let value = 80;
let value1 = 90;
let i;
for (i = 1; i < 500; i++) {

    if (Math.random() > .5) {
        value += Math.random();
        value1 += Math.random();
    } else {
        value -= Math.random();
        value1 -= Math.random();
    }
    point1 = { x: new Date(1960, (i + 1), i), y: Math.round(value) };
    point2 = { x: new Date(1960, (i + 1), i), y: Math.round(value1) };
    series1.push(point1);
    series2.push(point2);
}


export default Vue.extend({
  data: function() {
    return {
      seriesData: series1,
      seriesData1: series2,
      theme: theme,
      //Initializing Primary X Axis
     primaryXAxis: {
            title: 'Years',
            skeleton: 'y',
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift'
        },

      //Initializing Primary Y Axis
       primaryYAxis:
        {
            title: 'Price',
            labelFormat: '${value}',
            rangePadding: 'None',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
          crosshair: {
            enable: true,
            line: {
                color: 'rgba(204,214,235,0.25)',
                width: Browser.isDevice ? 50 : 20,
            },
            lineType: 'Vertical'
        },
      width: "80%",
      marker: {
        visible: false,
        
      },
        tooltip: {
            enable: true, shared: true
        },
      title: "Stock Price Analysis"
    };
  },
  provide: {
    chart: [LineSeries, DateTime, Legend, Tooltip, Crosshair]
  },
  methods: {
  },
   
});
</script>