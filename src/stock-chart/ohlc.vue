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
      <p>This <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-stock-chart" aria-label="Vue Stock Chart in OHLC">Vue Stock Chart</a> example visualizes the AAPL stock price with OHLC chart. Tooltip and crosshair show the information about the data and period.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the stock chart with <code>HILO Open Close</code> type series. The horizontal lines on the left and the right are used to show the open and close values of the stock, and the vertical line represents both high and low values.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the chart or tap on it in touch enabled devices.
      </p>

           <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>HiloOpenCloseSeries</code> module using <code> provide: { stockchart: [ DateTime, HiloOpenCloseSeries] },</code> method.
      </p>
      <p>
        More information about the series type can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/series-types" aria-label="Navigate to the documentation for Vue Stock Chart Series Types">documentation section</a>.
      </p>

    </div>
  </div>
</template>
  <style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { googl } from "./stock-data";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
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
      tooltip: { enable: true, shared: true, position: 'Nearest' },
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
};
</script>