<template>
    <div class="control-section">
      <div align='center'>
          <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
              :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legend' >
              <e-series-collection>
                  <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y1' name='United States' width=3 :animation='animation1' > </e-series>
                  <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y2' name='China'  width=3 :animation='animation2'> </e-series>
                  <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y3' name='Afghanistan'  width=3 :animation='animation3'> </e-series>
                  <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y4' name='Yemen' width=3  :animation='animation4'> </e-series>
                  <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='Australia'  width=3 :animation='animation5'> </e-series>
              </e-series-collection>
          </ejs-chart>
      </div>
      <div id="action-description">
      <p>
        This sample visualizes the almond yield per hectare data for different countries using a spline series in the chart. 
          The data points are enhanced with tooltip and the animation delay is configured to provide a smooth, staggered effect.
      </p>
  </div>
  <div id="description">
    <p>
          In this example, you can see how to render and configure a spline chart with multiple series representing almond yield across different countries over time. Spline charts are ideal for visualizing smooth trends in data over equal intervals, particularly time-dependent data.
          The <code>width</code> and <code>animation</code> properties are used to customize the appearance and behavior of the spline. The staggered animations enhance the visual experience by introducing each spline in sequence.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover over or tap on the chart.
      </p>
       
      <p style="font-weight: 500"><b>Injecting Module</b></p>
          <p>
              Chart component features are segregated into individual feature-wise modules. To use spline series, we need to inject
              <code>SplineSeries</code> module using <code>provide: { chart: [SplineSeries] }</code> method.
          </p>
          <p>
            More information about the spline series can be found in this
              <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/spline" aria-label="Navigate to the documentation for Spline Chart in Vue Chart component">documentation section</a>.
          </p> 
  </div>
  
  </div>
  </template>
  <style scoped>
  
  </style>
  <script>
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartComponent, SeriesDirective, SeriesCollectionDirective, SplineSeries, Legend, Tooltip,DateTime, Category, Highlight, ChartAnnotation } from "@syncfusion/ej2-vue-charts";
  
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
        { x: new Date(2010, 0, 1), y: 5.00, y1: 4.54, y2: 3.62, y3: 2.92, y4: 1.87 },
      { x: new Date(2011, 0, 1), y: 5.69, y1: 4.50, y2: 3.23, y3: 3.00, y4: 1.87 },
      { x: new Date(2012, 0, 1), y: 4.99, y1: 4.60, y2: 4.19, y3: 2.97, y4: 1.85 },
      { x: new Date(2013, 0, 1), y: 5.65, y1: 5.04, y2: 2.99, y3: 2.97, y4: 1.84 },
      { x: new Date(2014, 0, 1), y: 5.43, y1: 4.39, y2: 3.07, y3: 2.00, y4: 1.84 },
      { x: new Date(2015, 0, 1), y: 5.51, y1: 3.86, y2: 3.19, y3: 1.88, y4: 1.65 },
      { x: new Date(2016, 0, 1), y: 6.12, y1: 4.12, y2: 3.28, y3: 1.81, y4: 1.69 },
      { x: new Date(2017, 0, 1), y: 6.68, y1: 6.35, y2: 4.12, y3: 1.79, y4: 1.38 },
      { x: new Date(2018, 0, 1), y: 5.52, y1: 3.90, y2: 3.39, y3: 1.75, y4: 1.72 },
      { x: new Date(2019, 0, 1), y: 5.59, y1: 4.01, y2: 3.46, y3: 1.75, y4: 1.31 },
      { x: new Date(2020, 0, 1), y: 5.46, y1: 4.64, y2: 3.52, y3: 1.78, y4: 1.75 },
      { x: new Date(2021, 0, 1), y: 6.08, y1: 4.12, y2: 3.58, y3: 1.74, y4: 1.29 },
      { x: new Date(2022, 0, 1), y: 6.23, y1: 3.64, y2: 3.40, y3: 1.73, y4: 1.64 }
          
      ],
        //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'DateTime', labelFormat: 'y',
              majorGridLines: { width: 0 },
              edgeLabelPlacement: 'Shift'
        },
        //Initializing Primary Y Axis
        primaryYAxis: {
          title: 'Yield (In Tons per Hectare)',
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
              minorTickLines: { width: 0 },
              maximum: 8,
              interval: 2
        },
        chartArea: {
          border: {
            width: 0
          }
        },
        animation1: { enable: true, duration: 1500 },
        animation2: { enable: true,delay: 2300,  duration: 1500 },
        animation3: { enable: true,delay: 3400,  duration: 1500 },
        animation4: { enable: true,delay: 4800,  duration: 1500 },
        animation5: { enable: true,delay: 6200,  duration: 1500 },
        width : Browser.isDevice ? '100%' : '75%',
        title: 'Almond Yield',
          legend: { visible: true, enableHighlight: true },
          tooltip: {
              enable: true,
              showNearestTooltip: true,
              enableHighlight: true,
              header: '<b>Almond Yield - ${point.x}</b>',
              format: '${series.name}: <b>${point.y}</b>'
          },
      };
    },
    provide: {
      chart: [SplineSeries, Legend, Tooltip, Category,DateTime, Highlight, ChartAnnotation]
    },
    methods: {
  
    }
     
  };
  </script>