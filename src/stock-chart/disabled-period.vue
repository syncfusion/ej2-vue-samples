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
        :load="load"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="Area"
            xName="x"
            yName="open"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>By hiding the period selector in the stock chart, this sample visualizes the AAPL stock price. The tooltip and crosshair display data and period information.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure stock chart to visualize the stock data. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/stock-chart/stockChartModel/#enableperiodselector" aria-label="Navigate to the enablePeriodSelector property reference for Vue Stock Chart component">enablePeriodSelector</a> property allows to toggle the visibility of period selector.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the chart or tap on it in touch enabled devices.
      </p>
      
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>AreaSeries</code> module using <code> provide: { stockchart: [ DateTime, AreaSeries] },</code> method.
      </p>
      <p>
        More information about the series type can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/series-types" aria-label="Navigate to the documentation for Vue Stock Chart Series Types">documentation section</a>.
      </p>
    </div>
    <svg style="height: 0">
    <defs>
        <linearGradient id="material-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fabric-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap4-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="highcontrast-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="tailwind-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0"></stop>
                <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap5-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="material-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fabric-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="tailwind-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap5-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="material3-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="material3-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent2-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent2-highcontrast-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent2-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
    </defs>
  </svg>
</div>
</template>
<style>
#control-container {
        padding: 0px !important;
    }
    #material-gradient-chart stop {
        stop-color: #00bdae;
    }
    #fabric-gradient-chart stop {
        stop-color: #4472c4;
    }
    #bootstrap-gradient-chart stop {
        stop-color: #a16ee5;
    }
    #material-dark-gradient-chart stop {
        stop-color: #00bdae;
    }
    #fabric-dark-gradient-chart stop {
        stop-color: #4472c4;
    }
    #bootstrap-dark-gradient-chart stop {
        stop-color: #a16ee5;
    }
    #tailwind-dark-gradient-chart stop {
        stop-color: #8B5CF6;
    }
    #bootstrap4-gradient-chart stop {
        stop-color: #a16ee5;
    }
    #highcontrast-gradient-chart stop {
        stop-color: #79ECE4;
    }
    #tailwind-gradient-chart stop {
        stop-color: #4f46e5;
    }
    #bootstrap5-gradient-chart stop {
        stop-color: #FD7E14;
    }
    #bootstrap5-dark-gradient-chart stop {
        stop-color: #FD7E14;
    }
    #fluent-gradient-chart stop {
        stop-color: #614570;
    }
    #fluent-dark-gradient-chart stop {
        stop-color: #8AB113;
    }
    #material3-gradient-chart stop {
        stop-color: #6200EE;
    }
    #material3-dark-gradient-chart stop {
        stop-color: #4EAAFF;
    }
    #fluent2-gradient-chart stop {
        stop-color: #6200EE;
    }
    #fluent2-dark-gradient-chart stop {
        stop-color: #9BB449;
    }
    #fluent2-highcontrast-gradient-chart stop {
        stop-color: #9BB449;
    }

    .chart-gradient stop[offset="0"] {
        stop-opacity: 0.9;
    }
    .chart-gradient stop[offset="1"] {
        stop-opacity: 0.3;
    }
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { aapl } from "./stock-data";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
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

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
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
  methods: {
    load: function(args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.stockChart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast').replace(/-highContrast/i, 'HighContrast');
        args.stockChart.series[0].fill = 'url(#' + selectedTheme.toLowerCase() + '-gradient-chart)';
    },
  }
};
</script>