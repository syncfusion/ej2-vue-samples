<template>
<div>
<div class="control-section">
      <h1 align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px; margin-top: 10px;">Inflation vs Goods Consumers</h1>
    <div align="center">
         <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerLog' :value='value' labelIntersectAction='None'
         labelPosition ='Outside' valueType='Logarithmic' :width='width' :load='load' :labelRender='labelRender' :changed='changed'
         :tooltip='tooltip' :theme='theme' :tooltipRender='tooltipRender'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series :dataSource='dataSource' type='StepLine' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
    <div align="center">
        <ejs-chart style='display:block;' ref='chart' id='chartLog' align='center' :chartArea='chartArea' :width='width' 
            :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' height='350' :theme='theme'>
            <e-series-collection>
                <e-series :dataSource='dataSource' type='StepArea' xName='x' yName='y' width='2' :marker='marker' :fill='fill' :border='border'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</div>
<div id="action-description">
    <p>
        This sample demonstrates rendering logarithmic axis in the range navigator
    </p>
</div>
<div id="description">
    <p>
        Logarithmic axis uses logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (eg: 10^-6) and higher order of magnitude (eg: 10^6). To render Logarithmic axis, set <code>valueType</code> to <code>Logarithmic</code>. 
    </p>   
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        The range navigator component features are segregated into individual feature-wise modules. To use logarithmic axis, inject the <code>Logarithmic</code> module using <code>provide: { rangeNavigator: [Logarithmic] }</code> method.      
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
    #control-containerLog {
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
import { RangeNavigatorComponent, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, ChartComponent, SeriesDirective, SeriesCollectionDirective, Logarithmic, StepAreaSeries, StepLineSeries, ChartTheme,
  RangeTooltip} from "@syncfusion/ej2-vue-charts";
import {  loadRangeNavigatorTheme } from "./theme-color";

let theme = loadRangeNavigatorTheme();
let selectedTheme = loadRangeNavigatorTheme(null, true);

let themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentdark', 'material3', 'material3dark', 'fluent2', 'fluent2highcontrast', 'fluent2dark', 'tailwind3', 'tailwind3dark'];
let borderColor = ['#FD7E14', '#FD7E14', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#1AC9E6', '#1AC9E6', '#6355C7', '#4EAAFF', '#6200EE', '#9BB449', '#9BB449', '#2F4074', '#8029F1'];
let regionColor = ['rgba(99, 85, 199, 0.3)', 'rgba(143, 128, 244, 0.3)', 'rgba(90, 97, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 189, 174, 0.3)',
    'rgba(158, 203, 8, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(68, 114, 196, 0.3)',
     'rgba(68, 114, 196, 0.3)', 'rgba(121, 236, 228, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(26, 201, 230, 0.3)', 'rgba(99, 85, 199, 0.3)', 'rgba(78, 170, 255, 0.3)', 'rgba(98, 0, 238, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(155, 180, 73, 0.3)', 'rgba(47, 64, 116, 0.3)', 'rgba(128, 41, 241, 0.3)'];

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
    let points = [];
    let max = 100;
    for (let i = 0; i < 100; i++) {
      points.push({
        x: Math.pow(10, i * 0.1),
        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
      });
    }
    return {
      //Chart Properties
      primaryXAxis: {
        valueType: "Logarithmic", crosshairTooltip: { enable: false }, interval: 1,
        edgeLabelPlacement: "Shift", majorGridLines: { width: 0 }, title: "Numbers of Goods Consumers",
        zoomFactor: 0.2, zoomPosition: 0.4
      },
      primaryYAxis: {
        title: "Inflation", minimum: 0, maximum: 100, labelFormat: "{value}%",
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }
      },
      animation: { enable: false },
      marker: { visible: true },
      fill: "url(#" + selectedTheme + "-gradient-chart)",
      border: { width: 2, color: borderColor[themes.indexOf(theme.toLowerCase())] },
      chartArea: { border: { width: 0 } },
      dataSource: points,
      //Range Navigator Properties
      tooltip: { enable: true },
      value: [4, 6],
      width: Browser.isDevice ? "100%" : "80%",
      theme: theme
    };
  },
  provide: {
    rangeNavigator: [Logarithmic, StepLineSeries, RangeTooltip],
    chart: [Logarithmic, StepAreaSeries]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.chart.ej2Instances.refresh();
      });
    },
  methods: {
    load: function(args) {
      args.rangeNavigator.interval = 1;
    },
    changed: function(args) {
        this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
        this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
        this.$refs.chart.ej2Instances.dataBind();
    },
    labelRender: function(args) {
      args.text = (+args.text).toExponential().toLocaleUpperCase();
    },
    tooltipRender: function(args) {
      args.text = [(+(+args.text).toFixed(1)).toExponential(1).toString().toLocaleUpperCase()];
    }
  }
};
</script>