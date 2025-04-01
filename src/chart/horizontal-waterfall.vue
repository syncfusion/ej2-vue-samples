<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' align='center' :theme='theme' id='HorizontalWaterfallContainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :tooltip='tooltip' :legendSettings='legendSettings' :animation='animation'
                isTransposed=true :legendRender='legendRender'>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' width=2 :name="'Increases'"
                        columnWidth=0.5 :border='border' :connector='connector' :marker='marker' :cornerRadius='cornerRadius'
                        negativeFillColor='#e56590' :sumIndexes='sum'></e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the company's budget distribution over a year using a donut chart with rounded corners.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure a horizontal waterfall chart. The waterfall chart illustrates the gradual change in an entity's quantitative value due to increments or decrements.
           </p>
            <p>
                <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a
                point in touch enabled devices.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use Waterfall series, we
                need to inject
                <code>WaterfallSeries</code> module using <code>provide: { chart: [ WaterfallSeries] },</code> method.
            </p>
            <p>
                More information on the waterfall series can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/waterfall"
                    aria-label="Navigate to the documentation for Waterfall Chart in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
  </template>
  
  <style scoped>
  /* Add your custom styles here if necessary */
  </style>
  
  <script>
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartComponent, SeriesDirective, SeriesCollectionDirective, WaterfallSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";
  

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
                  { x: 'JAN', y: 55 },
                  { x: 'MAR', y: 42 },
                  { x: 'JUNE', y: -12 },
                  { x: 'AUG', y: 40 },
                  { x: 'OCT', y: -26 },
                  { x: 'DEC', y: 45 },
                  { x: '2023' }
            ],
            chartArea: { border: { width: 0 } },
            primaryXAxis: {
                valueType: 'Category',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 1 },
                majorTickLines: { width: 0 },
                isInversed: true
            },
            primaryYAxis: {
                minimum: 0, maximum: 150, interval: 25,
                labelFormat: '{value}K',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 1 }
            },
            width: Browser.isDevice ? '100%' : '75%',
            border: { width: 0.2, color: 'Black' },
            animation: { enable: true },
            sum: [6],
            marker: {
                dataLabel: { visible: true, position: 'Middle' }
            },
            connector: { width: 0.8, dashArray: '1,2', color: '#5F6A6A' },
            cornerRadius: { topLeft: 3, bottomLeft: 3, bottomRight: 3, topRight: 3 },
            tooltip: {
                enable: true, header: '', format: "<b>${point.x}</b> <br> Product Revenue : <b>${point.y}</b>"
            },
            legendSettings: { mode: 'Point', toggleVisibility: false },
            title: "Revenue Variation"
        };
    },
    provide: {
        chart: [WaterfallSeries, Category, Legend, Tooltip, DateTime, Zoom, Logarithmic, DataLabel]
    },
    methods: {
        legendRender(args) {
            if (args.text === 'JAN') {
                args.text = 'Increase';
            } else if (args.text === 'OCT') {
                args.text = 'Decrease';
                args.fill = '#e56590';
            } else if (args.text === '2023') {
                args.text = 'Total';
                args.fill = '#4E81BC';
            } else {
                args.cancel = true;
            }
        },
    }
  };
  </script>
  