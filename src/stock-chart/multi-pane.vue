<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockchartcontainerpane"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :crosshair="crosshair"
        :tooltip="tooltip"
        :axisLabelRender='axisLabelRender'
        :tooltipRender='tooltipRender'
        :border="border"
        :title="title"
        :theme="theme"
        :legendSettings="legend"
      >
        <e-stockchart-axes>
          <e-stockchart-axis
            rowIndex="1"
            name="yAxis1"
            opposedPosition="true"
            labelPosition="Inside"
            tickPosition="Inside"
          ></e-stockchart-axis>
        </e-stockchart-axes>
        <e-stockchart-rows>
          <e-stockchart-row height="30%"></e-stockchart-row>
          <e-stockchart-row height="70%"></e-stockchart-row>
        </e-stockchart-rows>
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='x' low='low' high='high' open='open' close='close' yAxisName="yAxis1" name="Apple Inc"></e-stockchart-series>
          <e-stockchart-series :dataSource="seriesData" type="Column" xName="x" yName="volume" :enableTooltip="false" name="Volume"></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-stock-chart">Vue Stock Chart</a> example visualizes the AAPL stock price with Candle chart. Tooltip and crosshair show the information about the data and period.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a stock chart for AAPL data, as well as how to use column charts to display data volume. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/period-selector">Period Selector</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/range-selector">Range Selector</a> can be used to select a range with specified periods.
      </p>
      <p>
        The legend is enabled, and you can use it to toggle the visibility of series in the stock chart. To customize the legend in the stock chart, use the <code>stockChartLegendSettings</code> property.
      </p>
      
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>CandleSeries</code> module using <code> provide: { stockchart: [ DateTime, CandleSeries] },</code> method.
      </p>

    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { chartData } from "./indicator-data";
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  StockChartAxesDirective,
  StockChartAxisDirective,
  StockChartRowDirective,
  StockChartRowsDirective,
  DateTime,
  Crosshair,
  ColumnSeries,
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
    'e-stockchart-series': StockChartSeriesDirective,
    'e-stockchart-axes': StockChartAxesDirective,
    'e-stockchart-axis': StockChartAxisDirective,
    'e-stockchart-rows': StockChartRowsDirective,
    'e-stockchart-row': StockChartRowDirective
  },
  data: function() {
    return {
      seriesData: chartData,
      theme: theme,
      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent", width: 0 }
      },
      primaryXAxis: {
       valueType: 'DateTime', 
       majorGridLines: { width: 0 }, 
       crosshairTooltip: { enable: true } 
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      title: 'AAPL Historical',
      border: {width: 0},
      tooltip: { enable: true, format:'High : <b>${point.high}</b><br/>Low : <b>${point.low}</b><br/>Open : <b>${point.open}</b><br/>Close : <b>${point.close}</b><br/>Volume : <b>${point.volume}</b>' },
      crosshair: {
        enable: true 
      },
      legend: {
        visible: true,
        padding: 3
      },
    };
  },
  provide: {
    stockChart: [
      ColumnSeries,
      DateTime,
      Tooltip,
      Crosshair,
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
      Export,
      StockLegend
    ]
  },
  methods: {
        tooltipRender: function(args){
            if (args.text.split('<br/>')[4]) { 
              let target = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
              let value  = (target / 100000000).toFixed(1) + 'B';
              args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
            }
    } ,
      axisLabelRender: function(args){
        let text  = parseInt(args.text);
        if (args.axis.name === "primaryYAxis") {
            args.text = text / 100000000 + 'B';
        }

    }
  }
};
</script>