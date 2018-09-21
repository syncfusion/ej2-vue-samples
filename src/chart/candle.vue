<template>
  <div class="control-section">
      <h4 align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;">AAPL Historical</h4>
      <div id="selector" align="center">
          <ejs-rangenavigator align='center' id='containerRange' labelPosition='Outside' valueType= 'DateTime' :width='width'
           :changed='changed' disableRangeSelector=true :periodSelectorSettings='periodSelectorSettings' :load='load'
            :dataSource='data1' xName='x' yName='Close' :loaded='loadedRange'>     
            </ejs-rangenavigator>
    </div>
    <div align='center'>
        <ejs-chart ref='chart' :chartArea='chartArea' id='chartCandle' :width='width' align='center' style="display:block;" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :crosshair='crosshair'
        :axes='axes' :rows='rows' :legendSettings='legendSettings' :axisLabelRender='axisLabelRender' :theme='theme' :tooltipRender='tooltipRender' :pointRender='pointRender'>
            <e-series-collection>
                <e-series :dataSource='data1' type='Column' xName='x' yName='volume' :marker='marker' name='Volume'> </e-series>
                <e-series :dataSource='data1' type='Candle' xName='x' yAxisName='secondary' :marker='marker' high='high' low='low'
                 open='open' close='close' volume='volume' name='Apple Inc' bearFillColor= '#2ecd71' bullFillColor= '#e74c3d'> </e-series>
            </e-series-collection>
        </ejs-chart>
        </div>
<div id="action-description">
    <p>
        This sample visualizes the AAPL historical data with default candle series in the chart. Tooltip and crosshair shows the information about the data and period.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the candle type chart. Candle type chart is used
        to represent the price movements in stock. You can use <code>border</code>, <code>fill</code> properities to customize
        the data appearance.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use Candle feature, we need to inject
        <code>CandleService</code> into the <code>provide</code> option of chart.
    </p>

</div>
</div>

</template>
<style>
#control-container {
  padding: 0px !important;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { chartData } from './stock-chart-data';
import { CandleSeries, RangeNavigatorPlugin, StripLine, Category, PeriodSelector, Tooltip, DateTime, Zoom, ColumnSeries, Logarithmic, Crosshair, ChartPlugin } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
Vue.use(RangeNavigatorPlugin);

let date1 = new Date(2017, 1, 1);

let pointColors = [];
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

export default Vue.extend({
  data: function() {
    return {
    theme: theme,
    data1: chartData,
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'DateTime',
        crosshairTooltip: { enable: true },
        majorGridLines: { width: 0 },
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
       title: 'Volume', valueType: 'Logarithmic', opposedPosition: true,
            majorGridLines: { width: 1 }, lineStyle: { width: 0 },rangePadding: "None",
            stripLines: [
                {
                    end: 1300000000, startFromAxis: true, text: '', color: 'black', visible: true,
                    opacity: 0.03, zIndex: 'Behind'
                }]
    },
    rows: [
        {
            height: '30%'
        }, {
            height: '70%'
        }
    ],
    axes: [{
         name: 'secondary', opposedPosition: true, rowIndex: 1, majorGridLines: { width: 1 },
        labelFormat: 'n0', title: 'Price', plotOffset: 30, lineStyle: { width: 0 },rangePadding: "None"

    }],
    tooltip: {
        enable: true,
        shared: true
    },
    crosshair: {
        enable: true, lineType: 'Vertical'
    },
    chartArea: {
        border: { width: 0 }
    },
    marker: {
        visible: false
    },
    width: Browser.isDevice ? '100%' : '80%',
    legendSettings: {
        visible: false
    },
    periodSelectorSettings: {
        position: 'Top',
        periods: [
                { text: '1M', interval: 1, intervalType: 'Months' },
                { text: '3M', interval: 2, intervalType: 'Months' },
                { text: '2Q', interval: 2, intervalType: 'Quarter' },
                { text: '1Y', interval: 1, intervalType: 'Years' },
                { text: '2Y', interval: 2, intervalType: 'Years', selected: true },
                { text: 'YTD' },
                { text: 'All' }
            ]
        }
    };
  },
  provide: {
    rangeNavigator: [PeriodSelector,DateTime],
    chart: [CandleSeries, StripLine, Category, Tooltip, DateTime, Zoom, ColumnSeries, Logarithmic, Crosshair]
  },
  methods: {
    axisLabelRender: function (args) {
        if (args.axis.name === 'primaryYAxis') {
            args.text = this.getLabelText(args.text);
        }
        if (args.axis.name === 'secondary') {
            args.text = '$' + args.text;
        }

    },
    pointRender: function(args){
         if (args.series.type === 'Candle') { pointColors.push(args.fill); } else {
                args.fill = pointColors[args.point.index];
            }
    },
    tooltipRender: function (args) {
        if (!args.series.index) {
            this.text = 'Volume : <b>' +
                this.getLabelText(args.text.split('<b>')[1].split('</b>')[0]) + '</b>';
        }
    },
    getLabelText: function (value) {
        return (((value) / 1000000000)).toFixed(1) + 'bn';
    },
    load: function(args) {
      args.rangeNavigator.periodSelectorSettings.height = document.body.className.indexOf("e-bigger") > -1 ? 56 : 42;
    },
    changed: function(args) {
      var chart = document.getElementById("chartCandle").ej2_instances;
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
        chart[0].series[0].dataSource = data;
        chart[0].series[1].dataSource = data;
        chart[0].refresh();
        }
    },
     loadedRange: function(args) {
      var range = document.getElementById("containerRange").ej2_instances;
      if (!Browser.isDevice) {
        document.getElementById("containerRange_Secondary_Element").style.transform = "translate(14%)";
      }
     
    }
  }
});
</script>