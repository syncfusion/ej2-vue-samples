<template>
<div>
<div class="control-section" align="center">
    <div id="Sample">
        <div class="row" align="center">
            <h4 id="days" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;" >AAPL 2012-17</h4>
            <div align='center'>
                <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerEmpty' :value='value'
                    valueType='DateTime' :majorTickLines='majorTickLines' :majorGridLines='majorGridLines' :tooltip='tooltip'
                    :navigatorBorder:='navigatorBorder' :legendSettings='legendSettings' :width='width' :changed='changed' :theme='theme'>
                    <e-rangenavigator-series-collection>
                        <e-rangenavigator-series :dataSource='data' xName='x' yName='open' type='Area' width=2 :animation='animation'
                        :fill='fill' :border='border'>
                        </e-rangenavigator-series>
                    </e-rangenavigator-series-collection>
                </ejs-rangenavigator>
            </div>
            <div align='center'>
                <ejs-chart style='display:block;' ref='chart' id='chartEmpty' align='center' :chartArea='chartArea' :width='width'
                 :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' height='350' :theme='theme' :tooltip='chartTooltip'>
                    <e-series-collection>
                        <e-series :dataSource='data' xName='x' yName='open' type='Area' width=2 name='AAPL' :fill='fill' :border='border'></e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
    </div>
</div>

<div id="action-description">
    <p>
        This sample illustrates the functionality of empty points in the range navigator series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render empty points in range navigator. Tooltip is enabled in this example, to see the tooltip in action, while the selected range is changed.
    </p>
    <br>
    
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
#control-containerEmpty {
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
import { RangeNavigatorPlugin, ChartPlugin, AreaSeries, DateTime, Crosshair, RangeTooltip, Tooltip } from "@syncfusion/ej2-vue-charts";
import { chartData } from "./stock-data";

Vue.use(RangeNavigatorPlugin);
Vue.use(ChartPlugin);

var stockData = [];
for (var i = 0; i <= 250; i++) {
  stockData.push(chartData[i]);
  if (i > 45 && 50 > i) {
    stockData[i]["open"] = null;
  } else if (i > 95 && 100 > i) {
    stockData[i]["open"] = null;
  } else if (i > 145 && 150 > i) {
    stockData[i]["open"] = null;
  } else if (i > 195 && 200 > i) {
    stockData[i]["open"] = null;
  } else if (i > 245 && 250 > i) {
    stockData[i]["open"] = null;
  }
}
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
        valueType: "DateTime", crosshairTooltip: { enable: true }, edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 }, zoomFactor: 0.25771428571428573, zoomPosition: 0.3621547619047619
      },
      legendSettings: { visible: false },
      primaryYAxis: {
        labelFormat: "${value}", minimum: 40, maximum: 140, interval: 20,
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }
      },
      chartArea: { border: { width: 0 } },
      chartTooltip: { enable: true, shared: true },
      //Range Navigator Properties
      majorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      value: [new Date('2013-12-27'), new Date('2015-03-23')],
      tooltip: { enable: true, displayMode: "Always" },
      width: Browser.isDevice ? "100%" : "80%",
      navigatorBorder: { width: 0 },
      data: stockData,
      fill: "url(#" + theme.toLowerCase() + "-gradient-chart)",
      border: { width: 2, color: borderColor[themes.indexOf(theme)] },
      theme: theme,
      animation: { enable: false }
    };
  },
  provide: {
    rangeNavigator: [AreaSeries, DateTime, RangeTooltip],
    chart: [AreaSeries, DateTime, Crosshair, Tooltip]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.chart.ej2Instances.refresh();
      });
    },
  methods: {
   changed: function(args) {
     if(document.getElementById('chartEmpty').children.length) {
        this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
        this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
        this.$refs.chart.ej2Instances.dataBind();
     }
    }
  }
});
</script>