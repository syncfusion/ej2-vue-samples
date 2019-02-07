<template>
<div>
    <div class="control-section">
       <div align='center'>
        <ejs-chart style='display:block;width: 92%' :theme='theme' :chartArea='chartArea' :width='width' align='center' id='chart'
            :primaryXAxis='primaryXAxis' :legendSettings='legend' :zoomSettings='zoomSettings' :title='title' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='series' type='Area' xName='x' yName='y' :animation='animation' fill='url(#gradient-chart)' :border='border'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>

      
</div>
<div id="action-description">
    <p>
        This sample illustrates zooming feature in chart. The change can be zoomed by pinching or by mouse wheel. 
    </p>
</div>

<div id="description">
   <p>This sample demonstrates the zooming and panning behavior in chart.</p>
   <ul>
       <li>Click and drag the mouse on a chart area to enable selection zooming.</li>
       <li>Hover the mouse on the toolbar at the top right corner of chart area to switch between zooming and panning.</li>
       <li>Pinch in and pinch out the chart area to zoom in or zoom out the chart in touch enabled devices.</li>
       <li>Touch and drag to pan the chart.</li>
       <li>Double tap to reset the zoomed chart.</li>
   </ul>
    <p>Chart component supports four types of zooming which can be set using <code>enableSelectionZooming</code>, <code>enablePinchZooming</code>, <code>enableMouseWheelZooming</code>, <code>enableDeferredZooming</code> property.
    <p>Chart supports two mode of zooming which can be set using <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/chart/api-zoomSettings.html#mode-zoommode">mode</a></code> property.
    </p>
    <ul>
         <li><code>XY</code> - Zoom the chart with respect to both the axis.</li>
         <li><code>X</code> - Zoom the chart with respect to horizontal axis.</li>
         <li><code>Y</code> - Zoom the chart with respect to vertical axis.</li>
    </ul>     
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
         Chart component features are segregated into individual feature-wise modules. To use zooming, we need to inject
         <code>Zoom</code> module using <code>provide: { chart: [Zoom] },</code> method.
    </p>
    <p>
         More information on the Zooming can be found in this
         <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-zoomSettings.html#properties">documentation section</a>.
    </p> 
</div>
<svg style="height: 0">
	<defs>
        <linearGradient id="gradient-chart" style="opacity: 0.75" class="chart-material" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
    </defs>
</svg>

  </div>
  </template>
  <style>
  #gradient-chart stop {
		stop-color: #BDEDE9;
	}
	#gradient-chart stop[offset="0"] {
		stop-opacity: 0.75;
	}
	#gradient-chart stop[offset="1"] {
		stop-opacity: 0;
	}
	#control-container {
		padding: 0px !important;
	}

  </style>
  <script>
  import Vue from "vue";
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartPlugin, AreaSeries, Zoom, Legend, DateTime, ScrollBar} from "@syncfusion/ej2-vue-charts";
  Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

function GetZoomingData() {
        let series = [];
        let point1;
        let value = 80;
        for (let i = 1; i < 500; i++) {
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };
            series.push(point1);
        }
        return { 'series': series };
    }
    let seriesData = GetZoomingData().series;
  export default Vue.extend({
    data: function() {
      return {
           theme: theme,
          primaryXAxis: {
        title: 'Years',
        valueType: 'DateTime',
        skeleton: 'yMMM',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    //Initializing Primary Y Axis
    primaryYAxis:  {
        title: 'Profit ($)',
        rangePadding: 'None',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
    },
    legend:  {
        visible: false
    },
    animation: { enable: false },
     zoomSettings:  {
        mode: 'X',
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        enableScrollbar: true
    },
     chartArea:  {
        border: {
            width: 0
        }
    },

     width: Browser.isDevice ? '100%' : '80%',
     border: { width: 0.5, color: '#00bdae' },
     title: 'Sales History of Product X',
     series: seriesData

      };
    },
    provide: {
      chart: [AreaSeries, DateTime, Legend, Zoom, ScrollBar]
    },
    methods: {
     
    }   
  });
  </script>