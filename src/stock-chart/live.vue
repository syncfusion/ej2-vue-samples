<template>
  <div class="control-section">
    <div align='center'>
        <ejs-stockchart style='display:block' align='center' id='stockchartcontainer' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :crosshair='crosshair' :width='width' :enablePeriodSelector='enablePeriodSelector' :load='load' :loaded='loaded' :theme="theme">
            <e-stockchart-series-collection>
                <e-stockchart-series :dataSource='seriesData' type='Line' yName='y' name='Apple Inc'> </e-stockchart-series>
            </e-stockchart-series-collection>
        </ejs-stockchart>
    </div>
   
    <div id="action-description">
        <p>
             This sample visualizes stock chart with live data.
        </p>
    </div>
    <div id="description">
        <p>
           In this example, you can see how to render and configure the Stock chart.
          <code>LineSeries</code> is used to represent selected data value.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
        <p>
              The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
              the
              <code>DateTime</code> module using the
              <code>StockChart.Inject(DateTime)</code> method. To use the LineSeries, inject the
              <code>Line Series</code> module using the
              <code>StockChart.Inject(LineSeries)</code> method.
        </p> 
    </div>
</div>

</template>
  <style>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { googl } from "./stock-data";
import {
  StockChartPlugin,
  DateTime,
  LineSeries,
  Tooltip,
  RangeTooltip,
  Crosshair,
  AnimationModel,
  Export
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

 export let value = 80;
 export let series = [];
 let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

function GetZoomingData() {
        let point1;
        for (let i = 1; i < 500; i++) {
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            point1 = { x: new Date(2000, 1, 1, i), y: value.toFixed(1) };
            series.push(point1);
        }
        return { 'series': series };
    }
    let seriesData = GetZoomingData().series;

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: seriesData,
      enablePeriodSelector: true,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { width: 0 },
        crosshairTooltip: { enable: true }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "n0",
        lineStyle: { width: 0 },
        rangePadding: "None",
        majorTickLines: { width: 0 }
      },

      animation: { enable: true },

      chartArea: {
        border: {
          width: 0
        }
      },

      width: Browser.isDevice ? "80%" : "100%",

      crosshair: {
        enable: true,
        lineType: "Vertical",
        line: {
          width: 0
        }
      }
    };
  },
  provide: {
    stockChart: [DateTime, LineSeries, Tooltip, RangeTooltip, Crosshair, Export]
  },
  methods: {

    load: function(args) {
      let time = new Date().getTime();
    },
    loaded: function(args) {
        let setTimeoutValue = 1000;
        let intervalId;
        let count = 1;
        intervalId = setInterval(
            () => {
                if (getElement('stockchartcontainer') === null) {
                    clearInterval(this.intervalId);
                } else {
                    if (Math.random() > .5) {
                       value += Math.random();
                    } else {
                       value -= Math.random();
                    }
                  series.push({
                        date: new Date(series[series.length - 1].date.
                            setHours(series[series.length - 1].date.getHours() + 1)),
                        y: value.toFixed(1)
                    });
                    count++;
                    series.shift(); // Used to remove the first element
                    args.stockChart.series[0].dataSource = series;
                    args.stockChart.refresh();
                }
            },
            setTimeoutValue);
    },
      


  }
});
</script>