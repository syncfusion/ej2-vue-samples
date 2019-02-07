<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainersplinearea"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :title="title"
        :crosshair="crosshair"
         :seriesType="seriesType"
         :indicatorType="indicator"
         :border="border"
         :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="SplineArea"
            xName="x"
            yName="high"
            fill="#BDEDE9"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p> This sample visualizes stock data with spline area. Period and range selector help us to navigate different of data.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the Stock chart.
        <code>SplineAreaSeries</code> is used to represent selected data value.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>SplineAreaSeries</code> module using <code> provide: { stockchart: [ DateTime, SplineAreaSeries] },</code> method.
      </p>

    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { googl } from "./stock-data";
import {
  StockChartPlugin,
  DateTime,
  SplineAreaSeries,
  LineSeries,
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  Crosshair,
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
      seriesData: googl,
       seriesType:[],
       indicator:[],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { width: 0 },
        crosshairTooltip: { enable: true }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", width: 0 },
        crosshairTooltip: { enable: true }
      },
      title: "Google Stock Price",
      chartArea: {
        border: {
          width: 0
        }
      },
       crosshair: {
        enable: true,
      },
      border: { width: 0}
    };
  },
  provide: {
    stockChart: [
      SplineAreaSeries,
      DateTime,
      LineSeries,
      SplineSeries,
      Crosshair,
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
  methods: {}
});
</script>