<template>
  <div class="control-section">
    <div align="center">
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerperiod"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :tooltip="tooltip"
        :crosshair="crosshair"
        :enablePeriodSelector="enablePeriodSelector"
        :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="Area"
            xName="x"
            yName="open"
            fill="#BDEDE9"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>  This sample renders the stock chart without period selector, data's can be navigated through range selector.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the Stock chart.
        <code>AreaSeries</code> is used to represent selected data value.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>AreaSeries</code> module using <code> provide: { stockchart: [ DateTime, AreaSeries] },</code> method.
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { aapl } from "./stock-data";
import {
  StockChartPlugin,
  DateTime,
  Crosshair,
  Tooltip,
  AreaSeries,
  LineSeries,
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
      seriesData: aapl,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { color: "transparent" },
        crosshairTooltip: { enable: true }
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
      enablePeriodSelector: false,
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
       Tooltip,
      LineSeries,
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