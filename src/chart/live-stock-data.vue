<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart ref="chart" style='display:block' :theme='theme' :load='load' :axisRangeCalculated='axisRangeCalculated' :pointRender='pointRender' align='center' id='stock' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :crosshair='crosshair'>
            <e-annotations>
                <e-annotation content="<div style='width: 800px; height: 0; border-width: 1px 0; border-style: dashed; border-color: #868180; background: none; position: absolute;'></div>" coordinateUnits='Point' region='Series'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Candle' bearFillColor='#2ecd71' bullFillColor='#e74c3d' columnWidth=0.4
                xName='x' low='low' high='high' open='open' close='close'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the animation in the candle chart when existing data is updated or new data is added.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a candlestick series to display data that updates every second using the <code>setData</code> method and adds new data every five seconds using the <code>addPoint</code> method. The chart demonstrates setting up a crosshair to follow the latest data and adjusting the point color based on the value.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use the candle series, we need to inject the <code>CandleSeries</code> module using <code>provide: { chart: [CandleSeries] }</code> method.
    </p>
    <p>
        More information on the candle series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/candle" aria-label="Navigate to the documentation for Candle Chart in Vue Chart component">documentation section</a>.
    </p> 
</div>
  </div>
</template>

<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AnnotationDirective, AnnotationsDirective, CandleSeries, DateTime, Crosshair, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

let value = 180;
let getData = () => {
    let series = [];
    let point;
    for (let i = 0; i < 30; i++) {
        value = 180 + Math.round((Math.random() * 25) * Math.sin(i * Math.PI / 8)); // Adjust the function as needed
        value = Math.max(140, Math.min(260, value));
        if (value > 260) {
            value = 260;
        }
        if (value < 140) {
            value = 140;
        }
        let open = value + Math.round(Math.random() * 18);
        let low = Math.min(value, open) - Math.round(Math.random() * 6);
        let high = Math.min(220, Math.max(value, open) + Math.round(Math.random() * 15));
        point = {
            x: new Date(2000, 5, 2, 2, 0, i),
            close: value,
            open: open,
            low: low,
            high: high
        };
        series.push(point);
    }
    return { series: series };
};

let data = getData().series;
let incVal = 0;
let updateVal = data.length;
let pointAdded = false;

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective
  },
  data: function() {
    return {
        theme: theme,
        seriesData1: data,
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime', 
            interval: Browser.isDevice ? 8 : 4,
            crosshairTooltip: { enable: true }, 
            edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift', 
            majorGridLines: { width: 0 },
            labelIntersectAction: 'Hide'
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        { 
            interval: 20, 
            opposedPosition: true, 
            minimum: 120,
            crosshairTooltip: { enable: true }, 
            lineStyle: { width: 0 }, 
            majorGridLines: { width: 1 }, 
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        width : Browser.isDevice ? '100%' : '90%',
        title: "AAPL Historical",
        crosshair: { 
            enable: true, 
            dashArray: '5,5' 
        },
        annotations: [{
            x: new Date(2000, 5, 2, 2, 0, 1),
            region: "Series",
            coordinateUnits: 'Point',
            y: 140,
            content: `<div></div>`
        }]
    };
  },
  provide: {
    chart: [CandleSeries, DateTime, Crosshair, ChartAnnotation]
  },
  methods: {
      load: function (args) {
          this.clearInterval();
          this.intervalId = setInterval(() => {
              var container = document.getElementById('stock');
              if (container && container.id === args.chart.element.id) {
                  let newData1 = [];
                  let value = 180;
                  pointAdded = true;
                  for (let i = 0; i < args.chart.series[0].dataSource.length; i++) {
                      newData1.push(Object.assign({}, args.chart.series[0].dataSource[i]));
                  }
                  if (newData1.length > 0) {
                      let lastIndex = newData1.length - 1;
                      let previousClose = newData1[lastIndex].close;
                      newData1[lastIndex].close += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 25;
                      newData1[lastIndex].close = Math.min(Math.min(Math.max(newData1[lastIndex].close, newData1[lastIndex].low + 5), newData1[lastIndex].high - 5), newData1[lastIndex].open - 2);
                      if (previousClose === newData1[lastIndex].close) {
                          newData1[lastIndex].close -= 5;
                      }
                  }
                  if (incVal < 10) {
                      if (args.chart.series.length > 0) {
                          args.chart.series[0].setData(newData1);
                          incVal++;
                      }
                  }
                  else {
                      let change = Math.round((Math.random() < 0.49 ? 1 : -1) * Math.random() * 10);
                      value += change;
                      if (value > 260) {
                          value = 260;
                      }
                      if (value < 140) {
                          value = 140;
                      }
                      let open = value + Math.round(Math.random() * 12);
                      let low = Math.min(value, open) - Math.round(Math.random() * 8);
                      let high = Math.max(value, open) + Math.round(Math.random() * 15);
                      if (args.chart.series.length > 0) {
                          var lastDataPointIndex = args.chart.series[0].dataSource.length - 1;
                          if (lastDataPointIndex >= 0) {
                              var timestamp = args.chart.series[0].dataSource[lastDataPointIndex].x;
                              var lastTimestamp = new Date(timestamp).getTime();
                              args.chart.series[0].addPoint({ x: new Date(lastTimestamp + 1000), high: high, low: low, open: open, close: value });
                          }
                      }
                      incVal = 0;
                      updateVal++;
                  }
              }
              else {
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
            args.maximum = new Date(lastPoint).getTime() + 2500;
            let firstPoint = args.axis.series[0].points[0].x;
            args.minimum = new Date(firstPoint).getTime() + 500;
        }
    },
    pointRender: function(args) {
        if (args.series.chart.enableRtl) {
            args.series.chart.annotations[0].x = 0;
        }
        if (pointAdded && args.series.points[args.series.points.length - 1] === args.point) {
            let firstPoint = args.series.chart.enableRtl ? args.series.points[args.series.points.length - 1].x : args.series.points[0].x;
            args.series.chart.annotations[0].x = new Date(firstPoint).getTime() + (args.series.chart.enableRtl ? 2000 : 1000);
            args.series.chart.annotations[0].y = args.point.close + 0.25;
            args.series.chart.annotations[0].content = `<div style="width: ${args.series.chart.initialClipRect.width}px; height: 0; left: ${Browser.isDevice ? -10 : -16}px; position: absolute;">
                <svg width="100%" height="2" style="display: block;">
                  <line x1="0" y1="1" x2="${args.series.chart.initialClipRect.width}" y2="1" 
                    style="stroke:#868180; stroke-width:0.75; stroke-dasharray:5,5;" />
                </svg>
              </div>
              <div style="width: 40px; height: 18px; background-color: ${args.fill}; border: 1px solid rgba(48, 153, 245, 0.4); color: white; font-size: 11px; display: flex; align-items: center; justify-content: center; text-align: center; line-height: 18px; position: absolute; left: ${(args.series.chart.enableRtl ? -args.series.chart.initialClipRect : args.series.chart.initialClipRect.width - 20)}px; top: -9px;">
                ${(args.point.close).toFixed(2)}
                </div>`;
        }
    }
  }
};
</script>