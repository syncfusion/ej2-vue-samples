<template>
<div>
<div class="control-section">
      <h1 id="days" style="font-family: Segoe UI; font-weight: 500; font-size: 15px; font-style: normal; margin-top: 10px;" align="center">Inflation - Consumer Price</h1>
    <div align="center">
        <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerRtl' valueType='DateTime' :value='value'
        intervalType='Years' labelPosition='Outside' :width='width'  enableRtl=true :tooltip='tooltip' :theme='themes' :changed='changed' >
           <e-rangenavigator-series-collection>
               <e-rangenavigator-series :dataSource='dataSource' type='Area' xName='xDate' yName='High' :fill='fill' :border='border'>
               </e-rangenavigator-series>
           </e-rangenavigator-series-collection>
       </ejs-rangenavigator>
   </div>
   <div align="center">
        <ejs-chart style='display:block;' ref='chart' id='chartRtl' align='center' :chartArea='chartArea' :width='width' enableRtl=true
           :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='chartTooltip' height='350' :theme='themes' :legendSettings='legendSettings'>
           <e-series-collection>
               <e-series :dataSource='dataSource' type='Area' xName='xDate' name='England' yName='High' width='2'
                :fill='fill' :border='border'>
               </e-series>
           </e-series-collection>
       </ejs-chart>
   </div>
</div>
<div id="action-description">
    <p>
       This sample illustrates RTL in the range navigator.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to inverse the axis in range navigator. Here both the X and Y axis are inversed using <code>isInversed</code> property.
        Tooltip is enabled in this example, to see the tooltip in action, while the selected range is changed.
    </p>
    
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        The range navigator component features are segregated into individual feature-wise modules. To use area series, inject the
        <code>AreaSeries</code> module using <code>provide: { rangeNavigator: [AreaSeries] }</code> method.
    </p>
</div>
<svg style="height: 0">
    <defs>
        <linearGradient id="material-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fabric-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap4-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="highcontrast-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
		<linearGradient id="tailwind-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
			<stop offset="0"></stop>
			<stop offset="1"></stop>
		</linearGradient>
        <linearGradient id="tailwind3-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
			<stop offset="0"></stop>
			<stop offset="1"></stop>
		</linearGradient>
        <linearGradient id="bootstrap5-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="material-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fabric-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="tailwind-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="tailwind3-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap5-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
			<stop offset="0"></stop>
			<stop offset="1"></stop>
		</linearGradient>
        <linearGradient id="fluent-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
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
    #control-containerRtl {
        padding: 0px !important;
    }
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
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  RangeNavigatorComponent,
  RangenavigatorSeriesDirective,
  RangenavigatorSeriesCollectionDirective,
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  DateTime,
  AreaSeries,
  Crosshair,
  RangeTooltip, Tooltip
} from "@syncfusion/ej2-vue-charts";
import { axesData } from './stock-data';

import {  loadRangeNavigatorTheme } from "./theme-color";

let theme = loadRangeNavigatorTheme();
let selectedTheme = loadRangeNavigatorTheme(null, true);

let themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
let borderColor = ['#FD7E14', '#FD7E14', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
let regionColor = ['rgba(38, 46, 11, 0.3)', 'rgba(94, 203, 155, 0.3)', 'rgba(90, 97, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 189, 174, 0.3)',
    'rgba(158, 203, 8, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(68, 114, 196, 0.3)', 'rgba(121, 236, 228, 0.3)', 'rgba(97, 69, 112, 0.3)', 'rgba(138, 177, 19, 0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)', 'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-rangenavigator': RangeNavigatorComponent,
    'e-rangenavigator-series-collection': RangenavigatorSeriesCollectionDirective,
    'e-rangenavigator-series': RangenavigatorSeriesDirective
  },
  data: function() {
    return {
      //Chart Properties
      primaryXAxis: { valueType: "DateTime", crosshairTooltip: { enable: true }, edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 }, zoomFactor: 0.411578588315553, zoomPosition: 0.3981580587868594
      },
      primaryYAxis: { majorTickLines: { width: 0 }, lineStyle: { width: 0 },labelFormat: '{value}%',
        maximum: 87, minimum: 82, interval: 1 },
      chartArea: { border: { width: 0 } },
      dataSource: axesData,
      chartTooltip: { enable: true, shared: true, header: '<b>England</b>' , format: '${point.x} : <b>${point.y}</b>'},
      
      //Range Navigator Properties
      value: [new Date('2014-01-01'), new Date('2015-12-31')],
      width: Browser.isDevice ? "100%" : "80%",
      tooltip: { enable: true, displayMode: 'Always' },
      fill: 'url(#' + selectedTheme + '-gradient-chart)',
      border: { width: 2, color: borderColor[themes.indexOf(theme.toLowerCase())] },
      themes: theme,
      legendSettings: { visible: false }
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries, RangeTooltip],
    chart: [DateTime, Crosshair, AreaSeries, Tooltip]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.chart.ej2Instances.refresh();
      });
    },
  methods: {
   changed: function(args){
       if(document.getElementById('chartRtl').children.length && !document.getElementById('chartRtl').querySelector('div.e-directive')) {
            this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
            this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
            this.$refs.chart.ej2Instances.dataBind();
       }
    },
  }
};
</script>