<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y' name='Bank Transfer' :border='border'> </e-series>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y1' name='Credit Card' :border='border'> </e-series>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y2' name='Debit Card' :border='border'> </e-series>
                <e-series :dataSource='seriesData' type='StackingArea100' xName='x' yName='y3' name='Cash' :border='border'> </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
      This Vue 100% Stacked Area Chart example visualizes the amount of sales by payment mode  with default 100% stacked area series. A legend in the sample shows information about the series.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the 100% stacked area chart. This chart visualizes data with y-values stacked, ensuring that the cumulative proportion of each stacked element always totals 100%.         
    </p>
    
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use 100% stacked area series, we need to inject
        <code>StackingAreaSeries</code> module using <code>provide: { chart: [ StackingAreaSeries ] },</code> method.
    </p>
    <p>
      More information about the 100% stakced area series can be found in this
      <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stacked-area" aria-label="Navigate to the documentation for 100% Stacked Area Chart in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StackingAreaSeries, Legend, DateTime,Tooltip, Highlight} from "@syncfusion/ej2-vue-charts";

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
                { x: new Date(2000, 0, 1), y: 0.61, y1: 0.03, y2: 0.48, y3: 0.23 },
                { x: new Date(2001, 0, 1), y: 0.81, y1: 0.05, y2: 0.53, y3: 0.17 },
                { x: new Date(2002, 0, 1), y: 0.91, y1: 0.06, y2: 0.57, y3: 0.17 },
                { x: new Date(2003, 0, 1), y: 1.00, y1: 0.09, y2: 0.61, y3: 0.20 },
                { x: new Date(2004, 0, 1), y: 1.19, y1: 0.14, y2: 0.63, y3: 0.23 },
                { x: new Date(2005, 0, 1), y: 1.47, y1: 0.20, y2: 0.64, y3: 0.36 },
                { x: new Date(2006, 0, 1), y: 1.74, y1: 0.29, y2: 0.66, y3: 0.43 },
                { x: new Date(2007, 0, 1), y: 1.98, y1: 0.46, y2: 0.76, y3: 0.51 },
                { x: new Date(2008, 0, 1), y: 1.99, y1: 0.64, y2: 0.77, y3: 0.72 },
                { x: new Date(2009, 0, 1), y: 1.70, y1: 0.75, y2: 0.55, y3: 1.29 },
                { x: new Date(2010, 0, 1), y: 1.48, y1: 1.06, y2: 0.54, y3: 1.38 },
                { x: new Date(2011, 0, 1), y: 1.38, y1: 1.25, y2: 0.57, y3: 1.82 },
                { x: new Date(2012, 0, 1), y: 1.66, y1: 1.55, y2: 0.61, y3: 2.16 },
                { x: new Date(2013, 0, 1), y: 1.66, y1: 1.55, y2: 0.67, y3: 2.51 },
                { x: new Date(2014, 0, 1), y: 1.67, y1: 1.65, y2: 0.67, y3: 2.61 }

              ],

      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'DateTime',
          intervalType: 'Years',
          majorGridLines: { width: 0 },
          labelFormat: 'y',
          edgeLabelPlacement: 'Shift',
          lineStyle: { width: 0 },
          minimum: new Date(1999, 0, 1), maximum: new Date(2015, 0, 1)
        },
        chartArea: {
            border: {
                width: 0
            }
        },
       
      //Initializing Primary Y Axis
        primaryYAxis:
        {
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          rangePadding: 'None',
          interval: 20
        },

      border : { width: 1, color: '#ffffff' },
      tooltip: {
        enable: true, enableHighlight: true, showNearestTooltip: true
      },
      width : Browser.isDevice ? '100%' : '75%',
      legend: {enableHighlight : true},
      title: "Sales by Payment Mode"
    };
  },
  provide: {
    chart: [StackingAreaSeries, Legend, DateTime,Tooltip, Highlight]
  },
  methods: {
  },
 
};
</script>