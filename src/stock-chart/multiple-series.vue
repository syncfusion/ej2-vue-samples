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
        :seriesType="seriesType"
        :crosshair="crosshair"
        :legendSettings="legend"
        :border="border"
        :title="title"
        :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Spline" xName="x" yName="close" name="GOOG"></e-stockchart-series>
          <e-stockchart-series :dataSource="seriesData1" type="Spline" xName="x" yName="close" name="GOOGL"></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample visualizes the close value of multiple stock. Crosshair show the information about the data and period.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure stock chart to visualize the data for multiple stock. Stock Chart supports 6 major types of series namely <code>Line</code>, <code>Spline</code>, <code>Hilo</code>, <code>HiloOpenClose</code>, <code>Hollow Candle</code> and <code>Candle</code>. By using the series dropdown button in period selector you can navigate between the above listed series types.
      </p>
      <p>
        The legend is enabled, and you can use it to toggle the visibility of series in the stock chart. To customize the legend in the stock chart, use the <code>stockChartLegendSettings</code> property.
      </p>
      
      <p style="font-weight: 500"><b>Injecting Module</b>:</p>
      <p>
        The Stock Chart component features are segregated into individual feature-wise modules. To use date-time axis, inject 
        <code>DateTime</code> and <code>LineSeries</code> module using <code> provide: { stockchart: [ DateTime, LineSeries] },</code> method. 
        To use Legend in Stock Chart, inject <code>StockLegend</code> module using <code> provide: { stockchart: [ StockLegend] },</code> method.
      </p>
      <p>
        More information about the series type can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/series-types">documentation section</a>.
      </p>

    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { goog, googl } from "./stock-data";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
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
  Export,
  StockLegend
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
      theme: theme,
      seriesData: goog,
      seriesData1: googl,
      trendlineType:[],
      indicatorType:[],
      seriesType: ['Line', 'Hilo', 'HiloOpenClose', 'Spline', 'Candle'],
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
          enable: true,
          lineType: 'Both' 
        },
      legend: {
        visible: true
      },
      title: 'Multiple Series',
      chartArea: {
        border: {
          width: 0
        }
      },
      border: { width: 1}
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
      Export,
      StockLegend
    ]
  },
  methods: {}
};
</script>