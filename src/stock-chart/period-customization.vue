<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerperiod"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :seriesType="seriesType"
        :indicatorType="indicatorType"
        :trendlineType="trendlineType"
        :exportType="exportType"
        :crosshair="crosshair"
        :border="border"
        :title="title"
        :theme="theme"
      >
        <e-stockchart-periods>
          <e-stockchart-period intervalType="Minutes" interval="1" text="1m"></e-stockchart-period>
          <e-stockchart-period intervalType="Minutes" interval="30" text="30m"></e-stockchart-period>
          <e-stockchart-period intervalType="Hours" interval="1" text="1H"></e-stockchart-period>
          <e-stockchart-period intervalType="Hours" interval="12" text="12H" selected="true"></e-stockchart-period>
          <e-stockchart-period text="1D"></e-stockchart-period>
        </e-stockchart-periods>
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="Line"
            xName="x"
            yName="y"
            name="Apple Inc"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample visualizes data for intraday using stock chart. Period and range selector help us to navigate different of data.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the Stock chart.
        <code>LineSeries</code> is used to represent selected data value.
      </p>
      
           <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>LineSeries</code> module using <code> provide: { stockchart: [ DateTime, LineSeries] },</code> method.
      </p>

    </div>
  </div>
</template>
 
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  StockChartPeriodsDirective,
  StockChartPeriodDirective,
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
} from "@syncfusion/ej2-vue-charts";

import { loadStockChartTheme } from './theme-color';
let theme = loadStockChartTheme();

function GetZoomingData() {
  let series = [];
  let point1;
  let value = 80;
  for (let i = 1; i < 1440; i++) {
    if (Math.random() > 0.5) {
      value += Math.random();
    } else {
      value -= Math.random();
    }
    point1 = { x: new Date(2000, 1, 1,0, i), y: value.toFixed(1) };
    series.push(point1);
  }
  return { series: series };
}
let seriesData1 = GetZoomingData().series;
export default {
  components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective,
    'e-stockchart-periods': StockChartPeriodsDirective,
    'e-stockchart-period': StockChartPeriodDirective
  },
  data: function() {
    return {
      theme: theme,
      seriesData: seriesData1,
      seriesType:[],
      indicatorType:[],
      trendlineType: [],
      exportType: [],
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { color: "transparent" },
        crosshairTooltip: { enable: true },
        edgeLabelPlacement: 'Shift'
      },
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", width: 0 },
        crosshairTooltip: { enable: true }
      },
     
       title: 'AAPL stock price by minutes',
       crosshair: {
          enable: true,
          lineType: 'Both' 
        },
        border: { width: 0}, 
       chartArea: {
        border: {
          width: 1
        }
      }
    };
  },
  provide: {
    stockChart: [
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
};
</script>