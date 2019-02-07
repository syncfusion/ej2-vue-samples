<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerohlc"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :crosshair="crosshair"
        :tooltip="tooltip"
        :tooltipRender="tooltipRender"
        :title="title"
        :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="HiloOpenClose"
            bearFillColor="#2ecd71"
            bullFillColor="#e74c3d"
            xName="x"
            high="high"
            low="low"
            open="open"
            close="close"
            name="google"
            border="border"
            :animation="animation"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample visualizes stock chart with OHLC series.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the Stock chart.
        <code>HILO Open Close series</code> is used to represent selected data value.
      </p>
      <br>
           <p style="font-weight: 500">Injecting Module</p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>HiloOpenCloseSeries</code> module using <code> provide: { stockchart: [ DateTime, HiloOpenCloseSeries] },</code> method.
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
  Tooltip,
  RangeTooltip,
  Crosshair,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      seriesData: googl,
      theme: theme,
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
      title: 'AAPL Stock Price',
      animation: { enable: true },
      tooltip: { enable: true, shared: true },
      chartArea: {
        border: {
          width: 0
        }
      },
      border: { width: 0},
      crosshair: {
        enable: true,
       
      }
    };
  },
  provide: {
    stockChart: [
      DateTime,
      Tooltip,
      RangeTooltip,
      Crosshair,
      LineSeries,
      SplineSeries,
      CandleSeries,
      HiloOpenCloseSeries,
      HiloSeries,
      RangeAreaSeries,
      Trendlines,
      EmaIndicator,
      RsiIndicator,
      BollingerBands,
      TmaIndicator,
      MomentumIndicator,
      SmaIndicator,
      AtrIndicator,
      AccumulationDistributionIndicator,
      MacdIndicator,
      StochasticIndicator,
      Export
    ]
  },
  methods: {
    tooltipRender: function(args){
        if (args.text.split('<br/>')[4]) { 
            let target = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
            let value  = (target / 100000000).toFixed(1) + 'B';
            args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
        }
    } 
  }
});
</script>