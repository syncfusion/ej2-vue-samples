<template>
    <div class="control-section">
      <div align='center'>
          <ejs-chart ref="chart" style='display:block' :theme='theme' :load='load' :axisRangeCalculated='axisRangeCalculated' align='center' id='spline' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
              :chartArea='chartArea' :width='width'>
              <e-series-collection>
                  <e-series :dataSource='seriesData2' type='Spline' xName='x' yName='y' width=2 :marker='marker'> </e-series>
              </e-series-collection>
          </ejs-chart>
      </div>
  <div id="action-description">
      <p>
          This sample demonstrates how to add and remove data in a spline chart, allowing users to modify the data at set intervals.
      </p>
  </div>
  <div id="description">
      <p>
          In this example, you can see how to render and configure a spline chart to display data that updates every second using the <code>addPoint</code> method, with old data being removed using the <code>removePoint</code> method. The X-axis represents the time at which the data is added, while the Y-axis displays the data values.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
          Chart component features are segregated into individual feature-wise modules. To use the spline series, we need to inject the
          <code>SplineSeries</code> module using <code>provide: { chart: [SplineSeries] }</code> method.
      </p>
      <p>
          More information about the spline series can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/spline" aria-label="Navigate to the documentation for Spline Chart in Vue Chart component">documentation section</a>.
      </p>
  </div>
    </div>
  </template>
<style>
#spline_Series_0_Point_15_Symbol {
    -webkit-animation: opac 1s ease-out infinite;
    animation: opac 1s ease-out infinite;
}

@keyframes opac {
    0% {
        stroke-opacity: 1;
        stroke-width: 0px;
    }

    100% {
        stroke-opacity: 0;
        stroke-width: 20px;
    }
}
</style>
  <script>
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartComponent, SeriesDirective, SeriesCollectionDirective, SplineSeries, DateTime, DataLabel, Tooltip } from "@syncfusion/ej2-vue-charts";
   
  let selectedTheme = location.hash.split("/")[1];
  selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
  let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
   
let splineData = [
    { x: new Date(2024, 5, 6, 6, 7, 3), y: 42 },
    { x: new Date(2024, 5, 6, 6, 7, 5), y: 52 },
    { x: new Date(2024, 5, 6, 6, 7, 7), y: 83 },
    { x: new Date(2024, 5, 6, 6, 7, 9), y: 75 },
    { x: new Date(2024, 5, 6, 6, 7, 11), y: 35 },
    { x: new Date(2024, 5, 6, 6, 7, 13), y: 85 },
    { x: new Date(2024, 5, 6, 6, 7, 15), y: 78 },
    { x: new Date(2024, 5, 6, 6, 7, 17), y: 29 },
    { x: new Date(2024, 5, 6, 6, 7, 19), y: 62 },
    { x: new Date(2024, 5, 6, 6, 7, 21), y: 95 },
    { x: new Date(2024, 5, 6, 6, 7, 23), y: 32 },
    { x: new Date(2024, 5, 6, 6, 7, 25), y: 76 },
    { x: new Date(2024, 5, 6, 6, 7, 27), y: 83 },
    { x: new Date(2024, 5, 6, 6, 7, 29), y: 53 },
    { x: new Date(2024, 5, 6, 6, 7, 31), y: 32 },
    { x: new Date(2024, 5, 6, 6, 7, 33), y: 75 },
];
   
  export default {
    components: {
      'ejs-chart': ChartComponent,
      'e-series-collection': SeriesCollectionDirective,
      'e-series': SeriesDirective
    },
    data: function() {
      return {
          theme: theme,
          seriesData2: splineData,
          //Initializing Primary X Axis
          primaryXAxis: {
              valueType: 'DateTime',
              edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
              labelRotation: Browser.isDevice ? 45 : 0,
              majorGridLines: { width: 0 },
              interval: 7,
              plotOffsetRight: 30,
              labelIntersectAction: 'Hide'
          },
          //Initializing Primary Y Axis
          primaryYAxis:
          {
              title: 'Value',
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
              interval: 20
          },
          chartArea: {
              border: {
                  width: 0
              }
          },
          width : Browser.isDevice ? '100%' : '75%',
          title: "Live data",
          marker: {
              visible: true,
              height: 7,
              width: 7,
              isFilled: true
          }
      };
    },
    provide: {
      chart: [SplineSeries, DateTime, DataLabel, Tooltip]
    },
    methods: {
        load: function (args) {
            this.clearInterval();
            this.intervalId = setInterval(() => {
                if (document.getElementById('spline')) {
                    if (args.chart && args.chart.series.length > 0 && args.chart.series[0].dataSource) {
                        var lastDataPointIndex = args.chart.series[0].dataSource.length - 1;
                        if (lastDataPointIndex >= 0) {
                            var timestamp = args.chart.series[0].dataSource[lastDataPointIndex].x;
                            var lastTimestamp = new Date(timestamp).getTime();
                            var x = new Date(lastTimestamp + 2000);
                            var y;
                            if (x.getSeconds() % 3 === 0) {
                                y = Math.max(30, Math.random() * 150);
                            } else if (x.getSeconds() % 2 === 0) {
                                y = Math.max(30, Math.random() * 200);
                            } else {
                                y = Math.max(30, Math.random() * 100);
                            }
                            (args.chart.series[0]).addPoint({ x: x, y: y }, 800);
                            (args.chart.series[0]).removePoint(0,800);
                        }
                    }
                } else {
                    this.clearInterval();
                }
            }, 1000);
        },
        clearInterval() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },
      axisRangeCalculated: function(args) {
          if (args.axis.name === 'primaryXAxis') {
              let lastPoint = args.axis.series[0].points[args.axis.series[0].points.length - 1].x;
              args.maximum = new Date(lastPoint).getTime() + 500;
          }
      }
    }
  };
  </script>