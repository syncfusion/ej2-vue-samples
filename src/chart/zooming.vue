
<template>
  <div>
      <div class="control-section">
          <div align='center'>
              <ejs-chart style='display:block;width: 100%' :theme='theme' :chartArea='chartArea' :width='width'
                  align='center' id='chart-zooming' :primaryXAxis='primaryXAxis' :legendSettings='legend' :tooltip='tooltip' :margin = 'margin' :titleStyle = 'titleStyle'
                  :zoomSettings='zoomSettings' :title='title' :primaryYAxis='primaryYAxis'>
                  <e-series-collection>
                      <e-series :dataSource='series' type='Line' xName='x' yName='y' :animation='animation'
                         >
                      </e-series>
                  </e-series-collection>
              </ejs-chart>
          </div>
      </div>
      <div id="action-description">
          <p>
            This sample demonstrates the zooming and panning features of the chart, allowing users to explore data interactively.
          </p>
      </div>
      <div id="description">
          <p>The chart component supports four types of zooming, which can be configured using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#enableselectionzooming" aria-label="Navigate to the enableSelectionZooming property reference for Vue Chart ZoomSettings">enableSelectionZooming</a>, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#enablepinchzooming" aria-label="Navigate to the enablePinchZooming property reference for Vue Chart ZoomSettings">enablePinchZooming</a>, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#enablemousewheelzooming" aria-label="Navigate to the enableMouseWheelZooming property reference for Vue Chart ZoomSettings">enableMouseWheelZooming</a>, and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#enabledeferredzooming" aria-label="Navigate to the enableDeferredZooming property reference for Vue Chart ZoomSettings">enableDeferredZooming</a> properties. This sample demonstrates the following zooming and panning behaviors:</p>
          <ul>
            <li><b>Selection Zooming</b> : Click and drag the mouse over the chart area to enable selection zooming.</li>
            <li><b>Toolbar</b> : Hover over the toolbar at the top-right corner of the chart area to switch between zooming and panning.</li>
            <li><b>Pinch Zooming</b> : Pinch in or pinch out on the chart area to zoom in or out on touch-enabled devices.</li>
            <li><b>Panning</b> : Touch and drag to pan the chart.</li>
            <li><b>Reset Zoom</b> : Double-tap to reset the zoomed chart.</li>
          </ul> 
          <p>The chart also supports different zooming modes, which can be configured using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/zoomSettingsModel/#mode" aria-label="Navigate to the mode property reference for Vue Chart ZoomSettings">mode</a> property.</p>
          <ul>
            <li><b>XY</b> - Zoom the chart with respect to both axes.</li>
            <li><b>X</b> - Zoom the chart with respect to the horizontal axis only.</li>
            <li><b>Y</b> - Zoom the chart with respect to the vertical axis only.</li>
          </ul>  
          <p>The <code>toolbarPosition</code> property is used to adjust the position of the zoom toolbar. In this example, the toolbar is moved 60 pixels upward from its default position. The <code>draggable</code> property is used to drag and drop the zoom toolbar to any position within the chart area.</p>
          <p>The chart supports different scrollbar positions. By default, it appears next to the axis line, but you can adjust its placement using the <code>position</code> property of <code>scrollbarSettings</code>. This positioning allows better customization and flexibility in the chart's design.</p>
            
          <p style="font-weight: 500"><b>Injecting Module</b></p>
          <p>
            Chart component features are segregated into individual feature-wise modules. To use zooming, we need to inject <code>Zoom</code> module using <code>provide: { chart: [Zoom] },</code> method.
          </p>
          <p>
            More information on the Zooming can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/zooming/" aria-label="Navigate to the documentation for Zooming in Vue Chart component">documentation section</a>.
          </p>
      </div>
      <svg style="height: 0">
          <defs>
              <linearGradient id="material-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                  y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="fabric-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                  y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="bootstrap-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                  y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="bootstrap4-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="highcontrast-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="tailwind-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                  y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="tailwind3-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                  y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="bootstrap5-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="material-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="fabric-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="bootstrap-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="tailwind-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="tailwind3-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="bootstrap5-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="fluent-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                  y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="fluent-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                  x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="material3-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="material3-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="fluent2-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="fluent2-highcontrast-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
              <linearGradient id="fluent2-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0"></stop>
                  <stop offset="1"></stop>
              </linearGradient>
          </defs>
      </svg>
  </div>
</template>
<style scoped>
#material-gradient-chart stop {
  stop-color: #00bdae;
}
#fabric-gradient-chart stop {
  stop-color: #4472c4;
}
#bootstrap-gradient-chart stop {
  stop-color: #a16ee5;
}
#bootstrap4-gradient-chart stop {
  stop-color: #a16ee5;
}
#highcontrast-gradient-chart stop {
  stop-color: #79ECE4;
}
#tailwind-gradient-chart stop {
  stop-color: #5A61F6;
}
#tailwind3-gradient-chart stop {
  stop-color: #2F4074;
}
#bootstrap5-gradient-chart stop {
  stop-color: #FD7E14;
}
#material-dark-gradient-chart stop {
  stop-color: #9ECB08;
}
#fabric-dark-gradient-chart stop {
  stop-color: #4472c4;
}
#bootstrap-dark-gradient-chart stop {
  stop-color: #a16ee5;
}
#tailwind-dark-gradient-chart stop {
  stop-color: #8B5CF6;
}
#tailwind3-dark-gradient-chart stop {
  stop-color: #8029F1;
}
#bootstrap5-dark-gradient-chart stop {
  stop-color: #FD7E14;
}
#fluent-gradient-chart stop {
  stop-color: #614570;
}
#fluent-dark-gradient-chart stop {
  stop-color: #8AB113;
}
#material3-gradient-chart stop {
  stop-color: #6355C7;
}
#material3-dark-gradient-chart stop {
  stop-color: #4EAAFF;
}
#fluent2-gradient-chart stop {
  stop-color: #6200EE;
}
#fluent2-highcontrast-gradient-chart stop {
  stop-color: #9BB449;
}
#fluent2-dark-gradient-chart stop {
      stop-color: #9BB449;
}
.chart-gradient stop[offset="0"] {
  stop-opacity: 0.9;
}
.chart-gradient stop[offset="1"] {
  stop-opacity: 0.3;
}
#control-container {
  padding: 0px !important;
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Zoom, DateTime, ScrollBar, Tooltip, Highlight } from "@syncfusion/ej2-vue-charts";
import { data } from './financial-data';
import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

let themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentdark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
let borderColor = ['#FD7E14', '#FD7E14', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
  const seriesData = [];
    let point;
    let i;
    for (i = 0; i < data.length; i++) {
        point = { x: new Date(1941, i + 2, i), y: data[i] / 1000 - 0.5 };
        seriesData.push(point);
    }

export default {
  components: {
      'ejs-chart': ChartComponent,
      'e-series-collection': SeriesCollectionDirective,
      'e-series': SeriesDirective
  },
  data: function () {
      return {
          theme: theme,
          primaryXAxis: {
            valueType: 'DateTime',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            scrollbarSettings: {
                enableZoom: false,
                position: 'Bottom'
            }
          },
          //Initializing Primary Y Axis
          primaryYAxis: {
            title: 'Temperature Anomaly (°C)',
            intervalType: 'Months',
            labelFormat: '{value}°C',
            enableScrollbarOnZooming: false,
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
          },
          legend: {
              visible: false
          },
          animation: { enable: true },
          zoomSettings: {
            enableSelectionZooming: true,
            enableMouseWheelZooming: true,
            enableDeferredZooming: false,
            enableScrollbar: true,
            mode: 'X',
            enablePinchZooming: true,
            enableAnimation: true,
            showToolbar : true,
            toolbarPosition:{y: -60, draggable: true},
          },
          chartArea: {
              border: {
                  width: 0
              }
          },
          tooltip: {
          header: '<b>${point.x}</b>',
          showNearestTooltip: true,
          enable: true,
          format: 'Temperature: <b>${point.y}</b>', enableHighlight: true
          },
          margin : {top: 20},
          width: Browser.isDevice ? '100%' : '80%',
          border: { width: 2, color: borderColor[themes.indexOf(theme.toLowerCase())] },       
          title: Browser.isDevice ? 'Monthly Temperature Anomalies' : 'Global Warming: Monthly Temperature Anomalies',
          titleStyle: { textAlignment: Browser.isDevice ? 'Near' : 'Center' },
          series: seriesData,
      };
  },
  provide: {
      chart: [LineSeries, DateTime, Zoom, ScrollBar, Tooltip, Highlight]
  },
  methods: {
  }
};
</script>
