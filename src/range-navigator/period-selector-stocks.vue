<template>
<div>
<div class="control-section">
  <div style="width: 90%">
     <div id="stockRange" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:14px;">
        <div id="title">AAPL 2012-2015</div>
        <div id="close" style=" font-size:10px">
            <div id="value" style="float: left;"> 
                <span style="font-size:10px;">1,095.32</span>
                <span id="inc" style="font-size:10px; color: green;">&nbsp;&nbsp;&nbsp;+11.49 (+1.06%)</span>
            </div>
        </div>
    </div>
  </div>
    <br>
    <div align="center">
        <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerStock' valueType= 'DateTime'  disableRangeSelector=true
        :dataSource='data' xName='x' yName='close' :theme='theme' :width='widthRange' :load='load' :loaded='loadedRange' :changed='changed'
        :periodSelectorSettings='periodSelectorSettings'>
    </ejs-rangenavigator>
   </div>
   <div align="center">

      <ejs-chart id='chartStock' ref='chart' align='center' style="display:block;" :primaryXAxis='primaryXAxis' 
            :primaryYAxis='primaryYAxis' :rows='rows' :axes = 'axes' height='350' :axisLabelRender='axisLabelRender'
            :loaded='loaded' :series='series' :tooltip='tooltip' :tooltipRender='tooltipRender' :pointRender='pointRender'
            :chartMouseLeave='chartMouseLeave' :chartMouseMove='chartMouseMove' :margin='margin' :chartArea='chartArea'
            :zoomSettings='zoomSettings' :crosshair='crosshair' :width='width' :theme='theme'  :legendSettings='legendSettings'>
            <e-annotations>
                <e-annotation :content='annotationTemplate' coordinateUnits='Pixel' region='Chart' x='15%' y= '20%'>
                </e-annotation>
            </e-annotations>
             <e-indicators>
                <e-indicator  type='Tma' :period='period' :fastPeriod='fastPeriod' :slowPeriod='slowPeriod' 
                    seriesName="Apple Inc" :macdType='macdType' width=2  macdPositiveColor='#2ecd71' macdNegativeColor='#e74c3d' 
                    fill='#6063ff'> </e-indicator>
                </e-indicators>
            </ejs-chart>
   </div>
</div>
<div id="action-description">
    <p>
       This sample illustrates a stock price for AAPL over a period. Period Selector shows the information about the stock values without range navigator.
    </p>
</div>
<div id="description">
    <p>
       In this example, you can see how to render and configure the period Selector with the financial chart. Tooltip is enabled in this example, to see the tooltip in action, while the selected range is changed.
     </p>     
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           Range Navigator component features are segregated into individual feature-wise modules. To use period selector, we need to inject
           <code>PeriodSelector</code> module in the <code>provide</code> section.
        </p>
</div>
</div>
</template>
<style>
#control-containerStock {
  padding: 0px !important;
}

#chartStock_tooltip {
  opacity: 0;
}

#chartStock_HorizontalLine,
#chartStock_VerticalLine {
  stroke-dasharray: 2;
}
</style>
<script>
import Vue from "vue";
import { Browser, remove } from "@syncfusion/ej2-base";
import { RangeNavigatorPlugin, ChartPlugin, DateTime, Zoom, LineSeries, ChartTheme, ChartAnnotation,
  PeriodSelector, CandleSeries, Tooltip, ColumnSeries, Crosshair, StripLine } from "@syncfusion/ej2-vue-charts";
import { SmaIndicator, EmaIndicator, TmaIndicator, AccumulationDistributionIndicator, AtrIndicator } from "@syncfusion/ej2-vue-charts";
import { chartData } from "./stock-chart-data";
import { getElement } from "@syncfusion/ej2-svg-base/src/tooltip/helper";
import { RsiIndicator, MacdIndicator, StochasticIndicator, MomentumIndicator, BollingerBands } from "@syncfusion/ej2-charts";
import { withInBounds } from "@syncfusion/ej2-charts/src/common/utils/helper";

Vue.use(RangeNavigatorPlugin);
Vue.use(ChartPlugin);

let index = 0;
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

let periodsValue = {
  position: "Top",
  periods: [
    { text: "1M", interval: 1, intervalType: "Months" },
    { text: "3M", interval: 3, intervalType: "Months" },
    { text: "6M", interval: 6, intervalType: "Months" },
    { text: "YTD" },
    { text: "1Y", interval: 1, intervalType: "Years" },
    { text: "2Y", interval: 2, intervalType: "Years", selected: true },
    { text: "All" }
  ]
};
let annotationString =
  '<div id="annotation" style="line-height: 18px;' +
  " font-size: 13px;background: #fff; opacity:0.9; color: #464e56; " +
  " box-shadow:0 0 8px 0 rgba(70,78,86,.25); padding: 7px 10px;" +
  ' border-radius: 3px">';

let range;
let pointColors = [];
let chartSeries = [
  { 
    dataSource: chartData,  width: 2, type: "Candle", animation: { enable: true },
    xName: "x", yName: "y", low: "low", high: "high", close: "close", volume: "volume", open: "open",
    name: "Apple Inc", bearFillColor: "#2ecd71", bullFillColor: "#e74c3d" },
  {
    dataSource: chartData, width: 2, type: "Column", animation: { enable: true }, xName: "x", yName: "volume",
    yAxisName: "secondary"
  }
];

function getContent(value) {
  let text = value.split("<br/>");
  let html = "<table><thead>" + text[0] + "</thead>";
  for (let i = 1; i < text.length; i++) {
    let value = text[i].split(":");
    if (i === text.length - 1) {
      html += '<tr><td style="opacity:0.5">' + value[0] + '</td><td style="padding-left: 5px;">' +
        Math.round(+value[1].split("</b>")[0].split("<b>")[1] / 10000000) + "B";
    } else {
      html += '<tr><td style="opacity:0.5">' + value[0] + '</td><td style="padding-left: 5px;">$' +
        (+value[1].split(' <b>')[1].split('</b>')[0]).toFixed(2) + '</td></tr>';
    }
  }
  return html;
}

export default Vue.extend({
  data: function() {
    return {
       annotationTemplate: function () {
                    return {
                        template: Vue.component('annotationTemplate', {
                            template: `<div id="annotation"></div>`,
                            data: function () { return { data: {} }; }
                        })
                    }
                },
      primaryXAxis: {
        valueType: "DateTime", majorGridLines: { width: 0 }, crosshairTooltip: { enable: true },
        stripLines: [{ visible: true }]
      },
      primaryYAxis: {
        crosshairTooltip: { enable: true }, labelFormat: "n0", plotOffset: 25, rowIndex: 1,
        opposedPosition: true, lineStyle: { width: 0 }, rangePadding: "None", majorGridLines: { width: 0 }
      },
      rows: [{ height: "30%" }, { height: "70%" }],
      axes: [
        {
          name: "secondary", opposedPosition: true, rowIndex: 0, majorGridLines: { width: 0 },
          lineStyle: { width: 0 }, majorTickLines: { width: 0 }, rangePadding: "None"
        }
      ],
      series: chartSeries,
      tooltip: {
        enable: true, shared: true,
        format: "${point.x}<br/>High : <b>${point.high}</b><br/>Low :" +
          " <b>${point.low}</b><br/>Open : <b>${point.open}</b><br/>Close : <b>${point.close}</b><br/>Volume : <b>${point.volume}</b>"
      },
      fastPeriod: 8,
      slowPeriod: 5,
      macdType: "Both",
      period: 3,
      margin: { top: 0 },
      chartArea: { border: { width: 1, color: "whitesmoke" } },
      zoomSettings: { enableMouseWheelZooming: true, mode: "X", toolbarItems: []},
      crosshair: { enable: true, lineType: "Both" },
      width: Browser.isDevice ? "100%" : "80%",
      theme: theme,
      legendSettings: { visible: false },

      //Range Navigator Properties
      widthRange: Browser.isDevice ? "100%" : "75%",
      periodSelectorSettings: periodsValue,
      data: chartData
    };
  },
  provide: {
    rangeNavigator: [PeriodSelector, DateTime],
    chart: [ CandleSeries, Tooltip, DateTime, Crosshair, LineSeries, Zoom, StripLine, ColumnSeries, ChartAnnotation,
      SmaIndicator, EmaIndicator, TmaIndicator, AccumulationDistributionIndicator, AtrIndicator, RsiIndicator,
      MacdIndicator, StochasticIndicator, MomentumIndicator, BollingerBands]
  },
  methods: {
    load: function(args) {
      args.rangeNavigator.periodSelectorSettings.height = document.body.className.indexOf("e-bigger") > -1 ? 56 : 42;
    },
    changed: function(args) {
      var chart = document.getElementById("chartStock").ej2_instances;
      if (chart) {
        let data = chartData.filter(data => {
          return (
            data["x"].getTime() >= args.start.getTime() &&
            data["x"].getTime() <= args.end.getTime()
          );
        });
        chart[0].series[0].animation.enable = false;
        chart[0].primaryXAxis.zoomPosition = 0;
        chart[0].primaryXAxis.zoomFactor = 1;
        chart[0].series[1].animation.enable = false;
        chart[0].primaryXAxis.stripLines = [{ visible: true }];
        chart[0].indicators[0].animation.enable = false;
        pointColors = [];
        chart[0].series[0].dataSource = data;
        chart[0].series[1].dataSource = data;
        chart[0].refresh();
        chart[0].setAnnotationValue(0, '<div id="annotation"></div>');
      }
    },

    tooltipRender: function(args) {
      if (args.series.type === "Candle") {
        this.$refs.chart.ej2Instances.setAnnotationValue(0,annotationString + (getContent(args.text) + "</table>") + "</div>");
      }
      args.text = "";
    },
    chartMouseLeave: function() {
      setTimeout(() => {
        if (getElement("annotation")) {
          remove(getElement("annotation"));
        }
      }, 2000);
    },
    axisLabelRender: function(args) {
      if (args.axis.name === "secondary") {
        args.text = Math.round(args.value / 10000000) + "B";
      } else if (args.axis.orientation === "Vertical") {
        args.text = "$" + Math.round(args.value);
      }
    },
    loaded: function(args) {
      let labels = args.chart.axisCollections[0].visibleLabels;
      let maxValue = args.chart.axisCollections[0].visibleRange.max;
      if (args.chart.primaryXAxis.stripLines.length === 1) {
        for (let i = 0; i < labels.length; i += 2) {
          args.chart.primaryXAxis.stripLines.push({
            start: new Date(labels[i].value), end: labels[i + 1] ? new Date(labels[i + 1].value) : new Date(maxValue),
            zIndex: "Behind", border: { width: 0, color: "transparent" }, rotation: null, opacity: 0.7,
            textStyle: {}, text: "", color: "whitesmoke", visible: true});
        }
        args.chart.refresh();
      }
    },
    pointRender: function(args) {
      if (args.series.type === "Candle") {
        pointColors.push(args.fill);
      } else {
        args.fill = pointColors[args.point.index];
      }
    },
    chartMouseMove: function(args) {
      var chart = this.$refs.chart.ej2Instances;
      if (!withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
        setTimeout(() => { if (getElement("annotation")) { remove(getElement("annotation")); }}, 2000);
      }
    },
    loadedRange: function(args) {      
      if (!Browser.isDevice) {
        document.getElementById("containerStock_Secondary_Element").style.transform = "translate(14%)";
      }
      var range = this.$refs.range.ej2Instances;
      let value = range.svgObject.getBoundingClientRect().left - range.element.getBoundingClientRect().left;
      document.getElementById("stockRange").style.transform = "translateX(" + (value - 10) + "px)";
    }
  }
});
</script>