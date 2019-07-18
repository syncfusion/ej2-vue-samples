<template>
<div>
<div class="control-section">
    <h4 id="days" align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;">Exchange Rate USD to EUR</h4>
    <div align="center">
         <ejs-rangenavigator style='display:block' align='center' id='containerDT' valueType='DateTime' :value='value'
         :majorTickLines='majorTickLines' labelPosition='Outside' :width='width' :changed='changed' :tooltip='tooltip' :theme='theme'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series :dataSource='dataSource' type='Area' xName='x' yName='y' width=2 :animation='animation'
                 :fill='fill' :border='border'>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
    <div align="center">
         <ejs-chart style='display:block;' ref='chart' id='chartDT' align='center' :chartArea='chartArea' :width='width' 
            :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' height='350' :tooltip='chartTooltip' :theme='theme'
            :legendSettings='legendSettings' :axisLabelRender='axisLabelRender'>
            <e-series-collection>
                <e-series :dataSource='dataSource' type='Spline' xName='x' yName='y' width='2' name='Rate'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes rendering of date-time in the range navigator with exchange rate analysis of EUR to USD.
    </p>
</div>
<div id="description">
    <p>
        Date-time data is used in this sample, and the selected range values are showed with tooltip. Date-time axis uses date-time scale and displays date-time values as axis labels. To render date-time axis, set the <code>valueType</code> to <code>DateTime</code>. Format of the axis label will be calculated based on the <code>intervalType</code> of the range navigator. You can also directly set the format using the labelFormat property. 
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       The range navigator component features are segregated into individual feature-wise modules. To use area series, inject the <code>AreaSeries</code> module in the <code>provide</code> section.
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
import { RangeNavigatorPlugin, ChartPlugin, SplineSeries, AreaSeries, DateTime, Crosshair,
  ChartTheme, RangeTooltip, Tooltip, withInBounds, getElement} from "@syncfusion/ej2-vue-charts";
import { Browser, remove } from "@syncfusion/ej2-base";
import { stockData } from "./stock-data";

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
    return {
      //Chart Properties
      primaryXAxis: {
        valueType: "DateTime", edgeLabelPlacement: "Shift", majorGridLines: { width: 0 },
        zoomFactor: 0.33791208791208793, zoomPosition: 0.32967032967032966
      },
      dataSource: stockData,
      chartArea: { border: { width: 0 } },
      primaryYAxis: {
        labelFormat: "n1", minimum: 0.6, maximum: 1, interval: 0.1, majorTickLines: { width: 0 },
        lineStyle: { width: 0 }
      },
      legendSettings: { visible: false },
      chartTooltip: { enable: true, shared: true },
      height: "350",

      //Range Navigator Properties
      majorTickLines: { width: 0 },
      tooltip: { enable: true, format: "yyyy/MM/dd", displayMode: "Always" },
      value: [new Date('2011-01-01'), new Date('2013-12-11')],
      width: Browser.isDevice ? "100%" : "80%",
      fill: "url(#" + theme.toLowerCase() + "-gradient-chart)",
      border: { width: 2, color: borderColor[themes.indexOf(theme)] },
      animation: { enable: false },
      theme: theme
    };
  },
  provide: {
    rangeNavigator: [AreaSeries, DateTime, RangeTooltip],
    chart: [DateTime, SplineSeries, Tooltip, Crosshair]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.chart.ej2Instances.refresh();
      });
    },
  methods: {
   changed: function(args) {
       if(document.getElementById('chartDT').children.length) {
            this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
            this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
            this.$refs.chart.ej2Instances.dataBind();
       }
    },
    axisLabelRender: function(args){
        if (args.axis.name === 'primaryYAxis') {
            args.text = '€' + args.text;
        }
    }
  }
});
</script>