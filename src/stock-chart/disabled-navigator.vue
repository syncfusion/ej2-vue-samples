<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainernavigator"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :tooltip="tooltip"
        :border="border"
        :crosshair="crosshair"
        :enableSelector="enableSelector"
        :theme= "theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Line" xName="x" ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>By hiding the range selector in the stock chart, this sample visualizes the AAPL stock price. The tooltip and crosshair display data and period information.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure stock chart to visualize the stock data. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartModel/#enableselector">enableSelector</a> property allows to toggle the visibility of range selector.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the chart or tap on it in touch enabled devices.
      </p>
      
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>LineSeries</code> module using <code> provide: { stockchart: [ DateTime, LineSeries] },</code> method.
      </p>
      <p>
        More information about the series type can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/series-types">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { chartData } from './indicator-data';
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
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
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default {
  components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective
  },
  data: function() {
    return {
      seriesData: chartData,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { color: "transparent" },
        crosshairTooltip: { enable: true },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", width: 0 }
      },
      crosshair: {
        enable: true,
      },
      tooltip: { enable: true },
      border : {width : 0},
      enableSelector: false,
      chartArea: {
        border: {
          width: 0
        }
      }
    };
  },
  provide: {
    stockChart: [
      LineSeries,
      Tooltip,
      RangeTooltip,
      SplineSeries,
      Crosshair,
      CandleSeries,
      HiloOpenCloseSeries,
      HiloSeries,
      RangeAreaSeries,
      Trendlines,
      DateTime,
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