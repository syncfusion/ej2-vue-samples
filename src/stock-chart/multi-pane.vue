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
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='x' low='low' high='high' open='open' close='close' yAxisName="yAxis1"></e-stockchart-series>
          <e-stockchart-series :dataSource="seriesData" type="Column" xName="x" yName="volume"></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample visualizes stock chart with multiple pane.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the Stock chart with volume.
        <code>CandleSeries</code> is used to represent selected data value and <code>ColumnSeries</code> is used to represent the volume.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and <code>CandleSeries</code> module using <code> provide: { stockchart: [ DateTime, CandleSeries] },</code> method.
      </p>

    </div>
  </div>
</template>
<style>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { chartData } from "./indicator-data";
import {
  StockChartPlugin,
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
      tooltip: { enable: true },
      crosshair: {
        enable: true,
       
      }
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
    } ,
      axisLabelRender: function(args){
        let text  = parseInt(args.text);
        if (args.axis.name === "primaryYAxis") {
            args.text = text / 100000000 + 'B';
        }

    }
  }
});
</script>