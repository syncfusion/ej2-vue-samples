<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerplot"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :title="title"
        :border="border"
        :theme="theme"
        :indicatorType="indicator"
        :seriesType="series"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="Line"
            xName="x"
            yName="close"
            name="google"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample visualizes stock chart with plot line on y axis.</p>
    </div>
    <div id="description">
      <p>
         In this example, you can see how to add threshold lines in the stock chart. Period and range selector help us to navigate different of data.
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
import { amzn } from "./stock-data";
import {
  StockChartPlugin,
  DateTime,
  LineSeries,
  Tooltip,
  RangeTooltip,
  StripLine,
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
  SplineSeries,
  CandleSeries,
  HiloOpenCloseSeries,
  HiloSeries,
  RangeAreaSeries,
  Trendlines,
  Export
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      seriesData: amzn,
      theme: theme,
      indicator:[],
      series: [],
      //Initializing Primary X Axis
      primaryXAxis: {
        majorGridLines: { color: "transparent" }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        stripLines: [
          {
            start: 320,
            sizeType: "Pixel",
            size: 1,
            color: "green",
            dashArray: "10,5"
          },
          {
            start: 380,
            sizeType: "Pixel",
            size: 1,
            color: "red",
            dashArray: "10,5"
          }
        ],
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", width: 0 }
      },
      title: "Plot line on Y axis",
      border : {width : 0}
    };
  },
  provide: {
    stockChart: [
      DateTime,
      LineSeries,
      Tooltip,
      StripLine,
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
      SplineSeries,
      CandleSeries,
      HiloOpenCloseSeries,
      HiloSeries,
      RangeAreaSeries,
      Trendlines,
      Export
    ]
  },
  methods: {}
});
</script>