<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerinversed"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :crosshair="crosshair"
        :seriesType="seriesType"
        :title="title"
        :theme="theme"
        :indicatorType="indicator"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="Area"
            xName="x"
            yName="high"
            name="google"
            opacity="0.5"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample uses area series and inversed axis to visualize stock data. The crosshair display information about the data and period.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure stock chart to visualize the stock data with inversed axis and it can be inversed by setting <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartAxis/#isinversed" aria-label="Navigate to the isInversed property reference for Vue Stock Chart Axis">isInversed</a> property as <b>true</b>.
      </p>
      <p>
        <code>Crosshair</code> is enabled in this example. To see the crosshair in action, hover the chart or tap on touch enabled devices.
      </p>
      
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>AreaSeries</code> module using <code> provide: { stockchart: [ DateTime, AreaSeries] },</code> method.
      </p>
      <p>
        More information about the axis can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/axis-types" aria-label="Navigate to the documentation for Axis types in Vue Stock Chart component">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { aapl } from "./stock-data";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  DateTime,
  AreaSeries,
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

import { loadStockChartTheme } from './theme-color';
let theme = loadStockChartTheme();

export default {
  components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective
  },
  data: function() {
    return {
      seriesData: aapl,
      theme: theme,
      seriesType:[],
      indicator: [],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        isInversed: true,
        majorGridLines: { width: 0 },
        crosshairTooltip: { enable: true }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        crosshairTooltip: { enable: true },
        majorTickLines: { color: "transparent", width: 0 },
        isInversed: true
      },
       crosshair: {
        enable: true,
        lineType: 'Both' 
      },
      border : {width : 1},
       title: 'AAPL Stock Price',
      chartArea: {
        border: {
          width: 0
        }
      }
    };
  },
  provide: {
    stockChart: [
      AreaSeries,
      DateTime,
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
  methods: {}
};
</script>