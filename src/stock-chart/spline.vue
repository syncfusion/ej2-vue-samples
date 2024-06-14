<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerspline"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :crosshair="crosshair"
        :tooltip="tooltip"
        :seriesType="seriesType"
        :title="title"
        :indicatorType="indicator"
        :border= "border"
        :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="Spline"
            xName="x"
            name="Apple Inc"
            yName="high"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample uses spline series to visualize stock data. The tooltip and crosshair display information about the data and period.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure stock chart to visualize the stock data with spline series. Use series <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockSeries/#type" aria-label="Navigate to the type property reference for Vue Stock Chart component">type</a> as <b>Spline</b> to render a spline series.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the chart or tap on it in touch enabled devices.
      </p>
      
            <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>SplineSeries</code> module using <code> provide: { stockchart: [ DateTime, SplineSeries] },</code> method.
      </p>
      <p>
        More information about the series type can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/series-types" aria-label="Navigate to the documentation for Vue Stock Chart Series Types">documentation section</a>.
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
  SplineSeries,
  Crosshair,
  Tooltip,
  RangeTooltip,
  LineSeries,
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

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

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
      primaryXAxis: { valueType: "DateTime", majorGridLines: { width: 0 },crosshairTooltip: { enable: true } },
      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", width: 0 }
      },

      chartArea: {
        border: {
          width: 0
        }
      },
     title: 'AAPL Stock Price',
      tooltip: { enable: true },
      crosshair: { enable: true },
      border: { width: 0}
    };
  },
  provide: {
    stockChart: [
      DateTime,
      Crosshair,
      Tooltip,
      RangeTooltip,
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