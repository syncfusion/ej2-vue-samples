<template>
<div>
<div class="control-section">
     <div class="row">
        <div class="col-sm-12">
            <div class="row" style="width:80%; transform: translateX(13%)">
                <div class="col-sm-8">
                    <div id="text" style="
                    display: flex; font-size: 36px; font-weight: 500;
                    align-items: center;
                    justify-content: space-between;" align="left;">
                        Bitcoin (USD) Price
                    </div>
                </div>
                <div class="col-sm-4" align="right" style="margin-top: 1%">
                    <div>
                        <label for="switch" style="font-size: 16px; margin-right: 2%">Closing Price </label>
                        <ejs-switch id="checked" name='Closing Value' cssClass='custom-iOS' :change='changeSwitch' value='Closing value' checked=true></ejs-switch>
                        <label for="switch1" style="font-size: 16px; margin-left: 2%">OHLC</label>
                    </div>

                </div>
            </div>
        </div>
         <div class="col-sm-12">
            <div class="row" align="center">

    <div align="center">
      <ejs-rangenavigator style='display:block' ref='top' align='center' id='containerTop' valueType='DateTime'
        labelPosition='Outside' disableRangeSelector=true :width='width' :load='loadPeriodic' :dataSource='dataSource' xName='date' yName='Close'
        :theme='theme' :changed='changedTop' :loaded='loadedPeriodic' :periodSelectorSettings='periodSelectorSettingsTop' >
       </ejs-rangenavigator>
   </div>
   <div align="center" style="width: 90%">

       <ejs-chart style='display:block' ref='chart' align='center' id='chartPeriod' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :zoomSettings='zoomSettings' :tooltip='tooltip' height='250' :width='width' :crosshair='crosshair' :chartArea='chartArea'
            :theme='theme' :legendSettings='legendSettings' :axisLabelRender='axisLabelRender' :load='chartLoad'
            :tooltipRender='tooltipRender' :chartMouseMove='chartMouseMove' :axisRangeCalculated='axisRangeCalculated'>
            <e-annotations>
                <e-annotation :content='annotationTemplate' coordinateUnits='Pixel' region='Chart' x='15%' y= '20%'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='dataSource' type='Candle' xName='date' yName='Close' name='Bitcoin' width=2 low='Low' high='High'
                 close='Close' open='Open' volume='Volume' bearFillColor='#2ecd71' bullFillColor='#e74c3d' :animation='animation'> </e-series>
            </e-series-collection>
        </ejs-chart>
   </div>
    <div align="center">
        <ejs-rangenavigator style='display:block' ref='bottom' align='center' id='containerBottom' valueType='DateTime' :value='valueBottom'
        labelPosition='Outside' :width='width' :theme='theme' :changed='changedBottom'>
           <e-rangenavigator-series-collection>
               <e-rangenavigator-series :dataSource='dataSource' type='Line' xName='date' yName='Close'>
               </e-rangenavigator-series>
           </e-rangenavigator-series-collection>
       </ejs-rangenavigator>
   </div>
   </div>
   </div>
</div>
<div id="action-description">
    <p>
        This sample visualize the Bitcoin price change over the period with candle and line series. Period Selector shows the information about the data.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the period selector with range navigator to see the price changes for Bitcoin. Tooltip is enabled in this example, to see the tooltip in action, while the selected range is changed.
     </p>     
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Range Navigator component features are segregated into individual feature-wise modules. To use period selector, we need to inject 
            <code>PeriodSelector</code> module in the <code>provide</code> section.
        </p>
</div>
</div></div>
</template>
<style>
.e-switch-wrapper {
  margin-top: 5%;
}
#chartPeriod_tooltip {
  opacity: 0;
}
#chartPeriod_HorizontalLine,
#chartPeriod_VerticalLine {
  stroke-dasharray: 2;
}
@media only screen and (max-width: 300px) {
  #text {
    font-size: 10px;
  }
}
</style>
<script>
import Vue from "vue";
import { RangeNavigatorPlugin, ChartPlugin, LineSeries, AreaSeries, DateTime, Crosshair, ChartTheme,
  ChartAnnotation, PeriodSelector, CandleSeries, MomentumIndicator, Tooltip, withInBounds, RangeTooltip,
  Zoom, getElement } from "@syncfusion/ej2-vue-charts";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { periodData } from "./period-data";
import { Browser, remove } from "@syncfusion/ej2-base";

Vue.use(RangeNavigatorPlugin);
Vue.use(ChartPlugin);
Vue.use(SwitchPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

let dataBind = [];
for (let i = 2110; i < periodData.length; i++) {
  dataBind.push({
    High: periodData[i].High,
    Low: periodData[i].Low,
    Close: periodData[i].Close,
    Open: periodData[i].Open,
    date: new Date(2010, 6, i)
  });
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
      dataSource: dataBind,
      primaryXAxis: {
        valueType: "DateTime", majorGridLines: { width: 0 }, edgeLabelPlacement: "Shift"
      },
      primaryYAxis: {
        labelFormat: "n0", opposedPosition: true, lineStyle: { width: 0 }, rangePadding: 'None'
      },
      animation: { enable: false },
      zoomSettings: { enableMouseWheelZooming: true, mode: "X", toolbarItems: [] },
      tooltip: { enable: true, shared: true },
      width: Browser.isDevice ? "100%" : "80%",
      crosshair: { enable: true },
      chartArea: { border: { width: 0 } },
      theme: theme,
      legendSettings: { visible: false },

      //Range navigator Properties
       periodSelectorSettingsTop: {
        periods: [
          { text: "1M", interval: 1, intervalType: "Months" },
          { text: "3M", interval: 3, intervalType: "Months" },
          { text: "6M", interval: 6, intervalType: "Months" },
          { text: "1Y", interval: 1, intervalType: "Years" },
          { text: "2Y", interval: 2, intervalType: "Years", selected: true },
          { text: "ALL" }
        ],
        position: "Top"
      },

      valueBottom:[new Date('2016-05-15'), new Date('2018-05-15')]
    };
  },
  provide: {
    rangeNavigator: [AreaSeries, DateTime, PeriodSelector, RangeTooltip],
    chart: [AreaSeries, DateTime, LineSeries, Crosshair, ChartAnnotation, CandleSeries,
      MomentumIndicator, Tooltip, Zoom ]
  },
  methods: {
   loadedPeriodic: function(args) {
      if (!Browser.isDevice) {
        document.getElementById("containerTop_Secondary_Element").style.transform =  "translate(13%)";
      }
    },
    loadPeriodic: function(args) {
      args.rangeNavigator.periodSelectorSettings.height = document.body.className.indexOf("e-bigger") > -1 ? 56 : 42;
    },
    changedTop: function(args) {
      var chart = document.getElementById("chartPeriod").ej2_instances;
      var rangeBottom = document.getElementById("containerBottom").ej2_instances;
      if (rangeBottom) {
        rangeBottom[0].rangeSlider.setSlider(args.start.getTime(), args.end.getTime(), false, false);
      }
      if (chart) {
        chart[0].primaryXAxis.zoomFactor = 1;
        chart[0].primaryXAxis.zoomPosition = 0;
        let filterData = dataBind.filter(dataBind => {
          return (
            dataBind["date"].getTime() >= args.start.getTime() &&
            dataBind["date"].getTime() <= args.end.getTime()
          );
        });
        chart[0].series[0].dataSource = filterData;
        chart[0].refresh();
        chart[0].setAnnotationValue(0, '<div id="annotation"></div>');
      }
    },
    changedBottom: function(args) {
      
      var rangeTop = this.$refs.top.ej2Instances;
      if (rangeTop) {
        rangeTop.periodSelectorModule.datePicker.startDate = args.start;
        rangeTop.periodSelectorModule.datePicker.endDate = args.end;
        rangeTop.dataBind();
      }
      var chart = this.$refs.chart.ej2Instances;
      if (chart) {
        chart.primaryXAxis.zoomFactor = 1;
        chart.primaryXAxis.zoomPosition = 0;
        let filterData = dataBind.filter(dataBind => {
          return (
            dataBind["date"].getTime() >= args.start.getTime() &&
            dataBind["date"].getTime() <= args.end.getTime()
          );
        });
        chart.series[0].dataSource = filterData;
        chart.setAnnotationValue(0, '<div id="annotation"></div>');
        chart.refresh();
      }
    },
    axisLabelRender: function(args) {
      if (args.axis.opposedPosition) {
        let value = Math.round(Number(args.text)) / 1000; args.text = '$' + String(value) + 'k';
      }
    },
    tooltipRender: function(args) {
      if (args.text.length > 0) {
        let text = args.text.split("<br/>");
        let html = "<table><thead>" + text[0] + "</thead>";
        let value;
        for (let i = 1; i < text.length; i++) {
          value = text[i].split(":");
          html += '<tr><td style="opacity:0.5">' + value[0] + ':</td><td style="padding-left: 5px;">$' +
           (+value[1].split(' <b>')[1].split('</b>')[0]).toFixed(2) + '</td></tr>';
        }
        html += "</table>";
        this.$refs.chart.ej2Instances.setAnnotationValue(
          0,
          '<div id="annotation" style="line-height: 18px; font-size: 13px;background: #fff; opacity:0.9; color: #464e56; ' +
            ' box-shadow:0 0 8px 0 rgba(70,78,86,.25); padding: 7px 10px; border-radius: 3px">' +
            html + "</div>"
        );
      }
      args.text = "";
    },
    chartMouseMove: function(args) {
      var chart = this.$refs.chart.ej2Instances;
      if (!withInBounds(chart.mouseX, chart.mouseY, chart.chartAxisLayoutPanel.seriesClipRect)) {
        setTimeout(() => {if (getElement("annotation")) {remove(getElement("annotation"));}}, 2000);
      }
    },
    chartLoad: function(args) {
      args.chart.tooltip.format =
        args.chart.series[0].type === "Candle"
          ? "${point.x}<br/>High : <b>${point.high}</b><br/>Low : <b>${point.low}</b><br/>" +
            "Open : <b>${point.open}</b><br/>Close : <b>${point.close}</b>" : "${point.x}<br/>Close : <b>${point.close}</b>";
    },
    axisRangeCalculated: function(args) {
      this.$refs.chart.ej2Instances.setAnnotationValue(0, "<div></div>");
    },
    changeSwitch: function(args) {
      var chart = this.$refs.chart.ej2Instances;
      chart.series[0].type = !args.checked ? "Line" : "Candle";
      chart.annotations[0].content = "";
      chart.refresh();
    }
  }
});
</script>