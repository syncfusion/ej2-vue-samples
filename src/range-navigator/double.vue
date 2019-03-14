<template>
<div>
<div class="control-section">
     <h4 id="days" align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;">Score Comparision AUS vs SL</h4>
    <div align="center">
         <ejs-rangenavigator style='display:block' ref='range' align='center' id='containerDouble' :value='value' :tooltipRender='tooltipRender'
         labelPosition ='Outside' :width='width' :changed='changed' :theme='theme' :tooltip='tooltip' >
            <e-rangenavigator-series-collection >
                <e-rangenavigator-series :dataSource='ausData' xName='x' type='Line' yName='y' ></e-rangenavigator-series>
                <e-rangenavigator-series :dataSource='slData' xName='x' type='Line' yName='y' ></e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
    <div align="center">
        <ejs-chart style='display:block;' ref='chart' id='chartDouble' align='center' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
         height='350' :chartArea='chartArea' :annotations='annotations' :width='width' :theme='theme' :loaded='loaded'>
            <e-series-collection>
                <e-series :dataSource='ausData' type='Spline' name='AUS' width=2 xName='x' yName='y' :animation='animation'>
                </e-series>
                 <e-series :dataSource='slData' type='Spline' name='SL' width=2 xName='x' yName='y' :animation='animation'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</div>
<div id="action-description">
    <p>
This sample depicts the cricket match data between two countries with the help of numeric axis in range navigator.
    </p>
</div>
<div id="description">
    <p>
        Numeric axis is used to plot numeric data in range navigator. To render numeric axis, set <code>valueType</code> to <code>Double</code>. 
Tooltip is enabled in this example, to see the tooltip in action, while the selected range is changed. 

    </p>
    <br>
   
</div>
</div>
</template>
<style>
#control-containerDouble {
  padding: 0px !important;
}
</style>

<script>
import Vue from "vue";
import { RangeNavigatorPlugin, ChartPlugin, ChartTheme, StepLineSeries, RangeTooltip, Tooltip,
  SplineSeries, ChartAnnotation, getSeriesColor} from "@syncfusion/ej2-vue-charts";
import { Browser } from "@syncfusion/ej2-base";
import { sl, aus } from "./double-data";

Vue.use(RangeNavigatorPlugin);
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let chartAnnotation = [];
chartAnnotation.push({
  content: '<div id="exchangeRate"></div>',
  coordinateUnits: "Pixel",
  region: "Chart",
  x: "85%",
  y: "15%"
});
let backgroundColor = 'white';
//let backgroundColor = theme === 'Highcontrast-Light' ? 'black' : 'white';
getAnnotation(aus, getSeriesColor(theme)[0]);
getAnnotation(sl, getSeriesColor(theme)[1]);
function getAnnotation(args, color) {
   for (let i = 0; i < args.length; i++) {
       if (args[i]['isWicket']) {
            chartAnnotation.push({
                content: '<div id= "wicket" style="width: 20px; height:20px; border-radius: 5px;' +
                    'background: ' + backgroundColor + '; border: 2px solid ' + color + '; color:' + color + '">W</div>',
                x: args[i]['x'],
                y: args[i]['y'],
                coordinateUnits: 'Point'
            });
        }
    }

}

export default Vue.extend({
  data: function() {
    return {
      //Chart Properties
      primaryXAxis: {
        title: "Overs", edgeLabelPlacement: "Shift", majorGridLines: { width: 0 },
        zoomFactor: 0.3877551020408163, zoomPosition: 0.6122448979591837
      },
      primaryYAxis: {
        title: "Runs", minimum: 0, majorTickLines: { width: 0 }, lineStyle: { width: 0 }
      },
      chartArea: { border: { width: 0 } },
      annotations: chartAnnotation,
      animation: { enable: false },
      height: "350",
      ausData: aus,
      slData: sl,
      //Range Navigator Properties
      tooltip: { enable: true },
      value: [31, 50],
      allowSnapping: true,
      width: Browser.isDevice ? "100%" : "80%",
      theme: theme
    };
  },
  provide: {
    rangeNavigator: [RangeTooltip],
    chart: [SplineSeries, ChartAnnotation, Tooltip]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
        this.$refs.chart.ej2Instances.refresh();
      });
    },
  methods: {
     tooltipRender: function(args){
       args.text[0] = Math.round(parseFloat(args.text[0])).toString();
    },
    changed: function(args) {
        this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;
        this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;
        this.$refs.chart.ej2Instances.dataBind();
    },
    loaded: function(args) {
      let series1 = args.chart.visibleSeries[0].interior;
      let series2 = args.chart.visibleSeries[1].interior;
      let html = "<table>";
      html += '<tr><td><div style="width:10px; height: 10px; border: 2px solid ' +
        series1 + "; background: " + series1 + ';"></div></td><td style="padding-left:10px;">' +
        " Australia" + "</td>";
      html += '<tr><td><div style="width:10px; height: 10px; border: 2px solid ' +
        series2 + "; background: " + series2 + ';"></div></td><td style="padding-left:10px;">' +
        " Sri Lanka" + "</td>";
      html += "</table>";
      this.$refs.chart.ej2Instances.setAnnotationValue(
        0, '<div id="exchangeRate" style="line-height: 18px;' +
          "font-size: 13px;background: #fff; opacity:0.9; color: #464e56; " +
          " box-shadow:0 0 8px 0 rgba(70,78,86,.25); padding: 7px 10px;" +
          'border-radius: 3px">' + html + "</div>"
      );
    }
  }
});
</script>