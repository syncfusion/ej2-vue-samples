<template>
<div>
<div class="control-section">
      <h4 id="days" style="font-family: Segoe UI; font-weight: 500; font-size: 15px; font-style: normal" align="center">Inflation - Consumer Price</h4>
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
        <ejs-chart style='display:block;' ref='chart' id='chartRtl' align='center' :chartArea='chartArea' :width='width'
           :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='chartTooltip' height='350' :theme='themes'>
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
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        The range navigator component features are segregated into individual feature-wise modules. To use area series, inject the
        <code>AreaSeries</code> module in the <code>provide</code> section.
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
import {
  RangeNavigatorPlugin,
  DateTime,
  AreaSeries,
  Crosshair,
  ChartPlugin, RangeTooltip, Tooltip
} from "@syncfusion/ej2-vue-charts";
import { axesData } from './stock-data';

Vue.use(RangeNavigatorPlugin);
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let themes = ['Material', 'Fabric', 'Bootstrap', 'Highcontrast'];
let borderColor = ['#00bdae', '#4472c4', '#a16ee5', '#79ECE4'];
let regionColor = ['rgba(0, 189, 174, 0.3)', 'rgba(68, 114, 196, 0.3)',
    'rgba(161, 110, 229, 0.3)', 'rgba(121, 236, 228, 0.3)'];

export default Vue.extend({
  data: function() {
    return {
      //Chart Properties
      primaryXAxis: { valueType: "DateTime", crosshairTooltip: { enable: true }, edgeLabelPlacement: "Shift",
        isInversed: true, majorGridLines: { width: 0 }, zoomFactor: 0.411578588315553, zoomPosition: 0.3981580587868594
      },
      primaryYAxis: { majorTickLines: { width: 0 }, lineStyle: { width: 0 },labelFormat: '{value}%',
        maximum: 87, minimum: 82, interval: 1 },
      chartArea: { border: { width: 0 } },
      dataSource: axesData,
      chartTooltip: { enable: true, shared: true, header: '<b>England<b>' , format: '${point.x} : <b>${point.y}<b>'},
      
      //Range Navigator Properties
      value: [new Date('2014-01-01'), new Date('2015-12-31')],
      width: Browser.isDevice ? "100%" : "80%",
      tooltip: { enable: true, displayMode: 'Always' },
      fill: 'url(#' + theme.toLowerCase() + '-gradient-chart)',
      border: { width: 2, color: borderColor[themes.indexOf(theme)] },
      themes: theme
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
       if(document.getElementById('chartRtl').children.length) {
            this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
            this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
            this.$refs.chart.ej2Instances.dataBind();
       }
    },
  }
});
</script>