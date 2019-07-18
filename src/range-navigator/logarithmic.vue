<template>
<div>
<div class="control-section">
      <h4 align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;">Inflation vs Goods Consumers</h4>
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
Tooltip is enabled in this example, to see the tooltip in action, while the selected range is changed.

    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The range navigator component features are segregated into individual feature-wise modules. To use logarithmic axis, inject the <code>Logarithmic</code> module in the <code>provide</code> section.
       
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
    </defs>
</svg>
</div>
</template>
<style>
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

    .chart-gradient stop[offset="0"] {
        stop-opacity: 0.9;
    }

    .chart-gradient stop[offset="1"] {
        stop-opacity: 0.3;
    }
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { RangeNavigatorPlugin, ChartPlugin, Logarithmic, StepAreaSeries, StepLineSeries, ChartTheme,
  RangeTooltip} from "@syncfusion/ej2-vue-charts";

Vue.use(RangeNavigatorPlugin);
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let themes = ["Material", "Fabric", "Bootstrap", "Highcontrast"];
let borderColor = ["#00bdae", "#4472c4", "#a16ee5", "#79ECE4"];
let regionColor = [ "rgba(0, 189, 174, 0.3)", "rgba(68, 114, 196, 0.3)", "rgba(161, 110, 229, 0.3)",
  "rgba(121, 236, 228, 0.3)"];

export default Vue.extend({
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
        edgeLabelPlacement: "Shift", majorGridLines: { width: 0 }, title: "Numers of Goods Consumers",
        zoomFactor: 0.2, zoomPosition: 0.4
      },
      primaryYAxis: {
        title: "Inflation", minimum: 0, maximum: 100, labelFormat: "{value}%",
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }
      },
      animation: { enable: false },
      marker: { visible: true },
      fill: "url(#" + theme.toLowerCase() + "-gradient-chart)",
      border: { width: 2, color: borderColor[themes.indexOf(theme)] },
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
});
</script>