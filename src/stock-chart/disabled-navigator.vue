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
      <p>This sample renders the stock chart without range selector, data's can be navigated through period selector.</p>
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
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { chartData } from './indicator-data';
import {
  StockChartPlugin,
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

Vue.use(StockChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
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
});
</script>