<template>
  <div class="control-section" >
     <div class="col-md-8 control-section">
      <ejs-chart ref='chart' :theme='theme' :chartArea='chartArea' id='chartid' :scrollEnd='scrollEnd'
          :primaryXAxis='primaryXAxis' :tooltip='tooltip' :crosshair='crosshair' :legendSettings='legend' :title='title' :primaryYAxis='primaryYAxis'>
          <e-series-collection>
              <e-series :dataSource='series' xName= 'x' yName= 'y' type='Line' :animation='animation'>
              </e-series>
          </e-series-collection>
      </ejs-chart>
    </div>
  <div>
  
  <div class="col-md-4 property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tr style="height: 50px">
            <td>
                <div>Lazy Load </div>
            </td>
           <td >
                  <div>
                        <ejs-dropdownlist id='lazymodeid' :change='lazymode' :dataSource='modedata' index=0 width='120' ></ejs-dropdownlist>  
                  </div>
           </td>
        </tr>
        <tr>
            <td>
                <div>Min </div>
            </td>
            <td>
                <div>
                 <ejs-datepicker id="mindatepickerid" :value='mindate' width='120' :change='mindatepicker' :enabled='enabledmin'></ejs-datepicker>
                </div>
            </td>
        </tr>
         <tr>
            <td>
                <div>Max </div>
            </td>
            <td>
                <div>
                 <ejs-datepicker id="maxdatepickerid" :value='maxdate' width='120' :change='maxdatepicker' :enabled='enabledmax'></ejs-datepicker>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>Point Length</div>
            </td>
            <td>
                <div>
                  <ejs-numerictextbox id="numeric" :min='minvalue' :max='maxvalue' format='n' width='120' :value='value' :step='stepvalue' :enabled='enabledtextbox' :change='pointlength' disabled='true' ></ejs-numerictextbox>
                </div>
            </td>
        </tr>
    </table>
</div>
</div>   

<div id="action-description">
    <p>
        This sample illustrates lazy laoding feature in chart. Loads data for chart on demand. 
    </p>
</div>

<div id="description">
     <p>
        In this example, you can see how to load data for chart on demand. Chart will fire the <code>scrollEnd</code> event,
        in that can udpate the chart with required data based on point length and axis range.
    </p>
    <p>
        ScrollBar is enabled in the sample and ScrollBar module injected to the chart.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use lazy loading, we need to inject
        <code>ScrollBar</code> and <code>Zoom</code>module using
        <code>provide: { chart: [ScrollBar, Zoom] },</code> method.
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
import { Browser, Internationalization } from "@syncfusion/ej2-base";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import {
  createSpinner,
  showSpinner,
  hideSpinner
} from "@syncfusion/ej2-popups";
import {
  ChartPlugin,
  LineSeries,
  Zoom,
  Tooltip,
  Crosshair,
  Legend,
  DateTime,
  ScrollBar
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);
Vue.use(DatePickerPlugin);
Vue.use(NumericTextBoxPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let intl = new Internationalization();
//let spinnerEle = document.getElementById("spinner");

export let GetDateTimeData = (start, end) => {
  let series = [];
  let point1;
  let date;
  let value = 80;
  let option = {
    skeleton: "full",
    type: "dateTime"
  };
  let dateParser = intl.getDateParser(option);
  let dateFormatter = intl.getDateFormat(option);
  for (let i = 1; start <= end; i++) {
    date = Date.parse(dateParser(dateFormatter(start)));
    if (Math.random() > 0.5) {
      value += Math.random() * 10 - 5;
    } else {
      value -= Math.random() * 10 - 5;
    }
    if (value < 0) {
      value = getRandomInt(20, 40);
    }
    let point1 = { x: new Date(date), y: Math.round(value) };
    new Date(start.setDate(start.getDate() + 1));
    series.push(point1);
  }
  return series;
};
export let GetNumericData = (start, end) => {
  let series1 = [];
  let value = 30;
  for (let i = start; i <= end; i++) {
    if (Math.random() > 0.5) {
      value += Math.random() * 10 - 5;
    } else {
      value -= Math.random() * 10 - 5;
    }
    if (value < 0) {
      value = getRandomInt(20, 40);
    }
    let point = { x: i, y: Math.round(value) };
    series1.push(point);
  }
  return series1;
};
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let seriesData = GetDateTimeData(new Date(2009, 0, 1), new Date(2009, 8, 1));

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      modedata: ["Range", "Points Length"],
      mindate: new Date(2009, 0, 1),
      maxdate: new Date(2014, 0, 1),
      minvalue:1000,
      maxvalue:10000,
      value:1000,
      stepvalue:100,
      enabledtextbox: "false",
      enabledmax: "true",
      enabledmin: "true",
      primaryXAxis: {
        title: "Day",
        valueType: "DateTime",
        skeleton: "yMMM",
        skeletonType: "Date",
        edgeLabelPlacement: "Shift",
        scrollbarSettings: {
          range: {
            minimum: new Date(2009, 0, 1),
            maximum: new Date(2014, 0, 1)
          },
          enable: true,
          pointsLength: 1000
        }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Server Load",
        labelFormat: "{value}MB"
      },
      legend: {
        visible: true
      },
      series: seriesData,
      animation: { enable: false },
      chartArea: {
        border: {
          width: 0
        }
      },
      title: "Network Load",
      tooltip: { enable: true, shared: true,header : '<b>${point.x}</b>', format : 'Server load : <b>${point.y}</b>' }
    };
  },
  provide: {
    chart: [LineSeries, DateTime, Legend, ScrollBar, Tooltip, Crosshair]
  },
  methods: {
    scrollEnd: function(args) {
      if (lazymodeid.value === "Range") {
        this.$refs.chart.ej2Instances.series[0].dataSource = GetDateTimeData(
          args.currentRange.minimum,
          args.currentRange.maximum
        );
      } else {
        this.$refs.chart.ej2Instances.series[0].dataSource = GetNumericData(
          args.currentRange.minimum,
          args.currentRange.maximum
        );
      }
      this.$refs.chart.dataBind();
    },
     lazymode: function(e) {
      let min;
      let max;
      let chart = document.getElementById("chartid").ej2_instances[0];
      if (lazymodeid.value === "Range") {
        chart.primaryXAxis.valueType = "DateTime";
        min = chart.primaryXAxis.scrollbarSettings.range.minimum = new Date(
          2009,
          0,
          1
        );
        max = chart.primaryXAxis.scrollbarSettings.range.maximum = new Date(
          2014,
          0,
          1
        );
        chart.series[0].dataSource = GetDateTimeData(
          new Date(2009, 0, 1),
          new Date(2009, 8, 1)
        );
        this.enabledmax = true;
        this.enabledmin = true;
        this.enabledtextbox = false;
        chart.refresh();
      } else {
        chart.primaryXAxis.valueType = "Double";
        chart.primaryXAxis.scrollbarSettings.range.minimum = null;
        chart.primaryXAxis.scrollbarSettings.range.maximum = null;
        chart.primaryXAxis.scrollbarSettings.pointsLength = 1000;
        chart.series[0].dataSource = GetNumericData(0, 200);
        this.enabledmax = false;
        this.enabledmin = false;
        this.enabledtextbox = true;
        chart.refresh();
      }
    },
    mindatepicker: function(args) {
      this.$refs.chart.ej2Instances.primaryXAxis.scrollbarSettings.range.minimum =
        args.value;
      this.$refs.chart.ej2Instances.refresh();
    },
    maxdatepicker: function(args) {
      this.$refs.chart.ej2Instances.primaryXAxis.scrollbarSettings.range.maximum =
        args.value;
      this.$refs.chart.ej2Instances.refresh();
    },
    pointlength: function(args) {
      this.$refs.chart.ej2Instances.primaryXAxis.scrollbarSettings.pointsLength =
        args.value;
      this.$refs.chart.ej2Instances.refresh();
    }
  }
});
</script>
