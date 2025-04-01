<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
        :tooltip='tooltip' :legendSettings='legend'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='StepArea' xName='x' yName='y' name='Renewable' width=2 opacity=0.6
            :border='border'> </e-series>
          <e-series :dataSource='seriesData1' type='StepArea' xName='x' yName='y' name='Non-Renewable' width=2
            opacity=0.6 :border='border'> </e-series>

        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This Vue Step Area Chart example visualizes electricity generation data using renewable and non-renewable
        resources in a step area chart.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the step area chart. This series forms a step progress
        by connecting points through vertical and horizontal lines with the area being filled.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over or tap on the chart.
      </p>

      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use step area series, we need
        to inject
        <code>StepAreaSeries</code> module using <code>provide: { chart: [StepAreaSeries] }</code> method.
      </p>
      <p>
        More information about the step area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/step-area"
          aria-label="Navigate to the documentation for Step Area Chart in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StepAreaSeries, Legend, Highlight, Tooltip} from "@syncfusion/ej2-vue-charts";

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
                { x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 },
                { x: 2004, y: 449 }, { x: 2005, y: 470 }, { x: 2006, y: 437 }, { x: 2007, y: 458 },
                { x: 2008, y: 500 }, { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 509 }
              ],

      seriesData1: [
             { x: 2000, y: 180 }, { x: 2001, y: 240 }, { x: 2002, y: 370 }, { x: 2003, y: 200 },
             { x: 2004, y: 229 }, { x: 2005, y: 210 }, { x: 2006, y: 337 }, { x: 2007, y: 258 },
             { x: 2008, y: 300 }, { x: 2009, y: 173 }, { x: 2010, y: 220 }, { x: 2011, y: 220 }

      ],
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Double',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            
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
        tooltip: {
        enable: true,
        enableHighlight: true,
        showNearestTooltip: true
        },
        chartArea: {
            border: {
                width: 0
            }
        },  
      legend: {enableHighlight : true},
      width: Browser.isDevice ? '100%': "75%",
      title: "Electricity- Production",
      border:{ width:2 }
    };
  },
  provide: {
    chart: [StepAreaSeries, Legend, Tooltip, Highlight]
  },
  methods: {
 
  },
 
};
</script>