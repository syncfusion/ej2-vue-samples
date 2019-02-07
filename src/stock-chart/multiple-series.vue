<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainermultiple"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :indicatorType="indicatorType"
        :trendlineType="trendlineType"
        :crosshair="crosshair"
        :border="border"
        :title="title"
        :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Line" xName="x" yName="close"></e-stockchart-series>
          <e-stockchart-series :dataSource="seriesData1" type="Line" xName="x" yName="close"></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample visualizes stock chart with multiple series.</p>
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
        <code>DateTime</code> and <code>LineSeries</code> module using <code> provide: { stockchart: [ DateTime, LineSeries] },</code> method.
      </p>

    </div>
  </div>
</template>
<style>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { goog, googl } from "./stock-data";
import {
  StockChartPlugin,
  DateTime,
  LineSeries,
  SplineSeries,
  CandleSeries,
  Crosshair,
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
      theme: theme,
      seriesData: goog,
      seriesData1: googl,
      trendlineType:[],
      indicatorType:[],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { width: 0 },
        crosshairTooltip: { enable: true }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        interval: 40,
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", width: 0 },
        crosshairTooltip: { enable: true }
      },
       crosshair: {
          enable: true
        },
      title: 'Multiple Series',
      chartArea: {
        border: {
          width: 0
        }
      },
      border: { width: 0}
    };
  },
  provide: {
    stockChart: [
      DateTime,
      LineSeries,
      SplineSeries,
      CandleSeries,
      Crosshair,
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
  methods: {}
});
</script>