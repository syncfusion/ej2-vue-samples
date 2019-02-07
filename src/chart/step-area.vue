<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepArea' xName='x' yName='y' name='Renewable' width=2 > </e-series>
                <e-series :dataSource='seriesData1' type='StepArea' xName='x' yName='y' name='Non-Renewable' width=2 > </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the data about electricity production by using renewable and non-renewable resources by using default step area series in the chart. 
    </p>
</div>
<div id="description">
  <p>
    In this example, you can see how to render and configure the StepArea type charts. This series forms the step line progress, by connecting points through vertical and horizontal lines with area filled.
    You can use <code>dashArray</code>, <code>width</code>, <code>fill</code> properties to customize the area. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
  </p>
    <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use step area series, we need to inject
            <code>StepAreaSeries</code> module using <code>provide: { chart: [StepAreaSeries] }</code> method.
        </p>
        <p>
            More information on the StepArea series can be found in this
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
import { ChartPlugin, StepAreaSeries, Legend} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 },
                { x: 2004, y: 449 }, { x: 2005, y: 470 }, { x: 2006, y: 437 }, { x: 2007, y: 458 },
                { x: 2008, y: 500 }, { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 509 }
              ],

      seriesData1: [
             { x: 2000, y: 180 }, { x: 2001, y: 240 }, { x: 2002, y: 370 }, { x: 2003, y: 200 },
             { x: 2004, y: 229 }, { x: 2005, y: 210 }, { x: 2006, y: 337 }, { x: 2007, y: 258 },
             { x: 2008, y: 300 }, { x: 2009, y: 173 }, { x: 2010, y: 220 }, { x: 2011, y: 309 }

      ],
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Double',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },


      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'Production (Billion as kWh)',
            valueType: 'Double',
            labelFormat: '{value}B',
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },
      width: "60%",
      title: "Electricity- Production"
    };
  },
  provide: {
    chart: [StepAreaSeries, Legend]
  },
  methods: {
 
  },
 
});
</script>