<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        style="display:block"
        id="stockcharteventcontainer"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :crosshair="crosshair"
        :tooltip="tooltip"
        :seriesType="seriesType"
        :title="title"
        :indicatorType="indicator"
        :border="border"
        :theme="theme"
      >
        <e-stockchart-series-collection>
          <e-stockchart-series
            :dataSource="seriesData"
            type="Spline"
            xName="x"
            name="Apple Inc"
            yName="high"            
            close="high"
          ></e-stockchart-series>
        </e-stockchart-series-collection>
        <e-stockchart-stockevents>
          <e-stockchart-stockevent
            :date="date1"
            text="Q2"
            description="2012 Quarter2 starts"
            type="Flag"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date="date2"
            text="Open"
            description="Markets opened"
            :textStyle="textStyle"
            background="#f48a21"
            :border="borderCircle"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date3
            text="Q3"
            description="2013 Quarter3 starts"
            type="Flag"
            :textStyle="textStyle"
            background="#6c6d6d"
            :border="borderFlag"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date4
            text="Q4"
            description="2013 Quarter4 starts"
            type="Flag"
            :textStyle="textStyle"
            background="#6c6d6d"
            :border="borderFlag"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date5
            text="G"
            description="Google stocks bought"
            :textStyle="textStyle"
            background="#f48a21"
            :border="borderCircle"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date6
            text="Y"
            description="Yahoo stocks sold"
            type="Square"
            :textStyle="textStyle"
            background="#841391"
            :border="borderSquare"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date7
            text="Y2"
            description="Year 2013"
            type="Pin"
            :showOnSeries="onAxis"
            :textStyle="textStyle"
            background="#6322e0"
            :border="borderPin"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date8
            text="Q2"
            description="2013 Quarter2 starts"
            type="Flag"
            :textStyle="textStyle"
            background="#6c6d6d"
            :border="borderFlag"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date9
            text="Q2"
            description="Surge in Stocks"
            type="ArrowUp"
            :textStyle="textStyle"
            background="#3ab0f9"
            :border="borderArrow"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date10
            text="Q3"
            description="2013 Quarter3 starts"
            type="Flag"
            :textStyle="textStyle"
            background="#6c6c6d"
            :border="borderFlag"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date11
            text="Q4"
            description="2013 Quarter4 starts"
            type="Flag"
            :textStyle="textStyle"
            background="#6c6c6d"
            :border="borderFlag"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date12
            text="Y3"
            description="Year 2014"
            type="Pin"
            :showOnSeries="onAxis"
            :textStyle="textStyle"
            background="#6322e0"
            :border="borderPin"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date13
            text="Q2"
            description="2014 Quarter2 starts"
            type="ArrowDown"
            :textStyle="textStyle"
            background="#3ab0f9"
            :border="borderArrow"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date14
            text="Q3"
            description="2014 Quarter3 starts"
            :textStyle="textStyle"
            background="#f48a21"
            :border="borderCircle"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date15
            text="Q4"
            description="2014 Quarter4 starts"
            type="Flag"
            :textStyle="textStyle"
            background="#6c6d6d"
            :border="borderFlag"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date16
            text="Y4"
            description="Year 2015"
            type="Pin"
            :showOnSeries="onAxis"
            :textStyle="textStyle"
            background="#6322e0"
            :border="borderPin"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date17
            text="End"
            description="Markets closed"
            type="ArrowDown"
            :textStyle="textStyle"
            background="#3ab0f9"
            :border="borderArrow"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date18
            text="A"
            description="This is event description"
            :textStyle="textStyle"
            background="#f48a21"
            :border="borderCircle"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date19
            text="Q1"
            description="Add longer text"
            :textStyle="textStyle"
            background="#dd3c9f"
            :border="borderText"
            type="Text"
          ></e-stockchart-stockevent>
          <e-stockchart-stockevent
            :date=date20
            text="Close"
            description="Markets closed"
            :textStyle="textStyle"
            background="#f48a21"
            :border="borderCircle"
          ></e-stockchart-stockevent>
        </e-stockchart-stockevents>
      </ejs-stockchart>
    </div>

    <div id="action-description">
      <p>This sample visualizes stock data with spline series. Period and range selector help us to navigate different of data.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the Stock chart.
        <code>SplineSeries</code> is used to represent selected data value.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject
        the
        <code>DateTime</code> and
        <code>SplineSeries</code> module using
        <code>provide: { stockchart: [ DateTime, SplineSeries] },</code> method.
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

Vue.use(StockChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      seriesData: aapl,
      theme: theme,
      seriesType: [],
      indicator: [],
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { color: "transparent" },
        crosshairTooltip: { enable: true }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { color: "transparent" },
        majorTickLines: { color: "transparent" },
        crosshairTooltip: { enable: true }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      date1: new Date(2012, 3, 1),
      date2: new Date(2012, 3, 20),
      date3: new Date(2012, 6, 1),
      date4: new Date(2012, 9, 1),
      date5: new Date(2012, 7, 30),
      date6: new Date(2012, 10, 1),
      date7: new Date(2012, 12, 0),
      date8: new Date(2013, 3, 1),
      date9: new Date(2013, 3, 20),
      date10: new Date(2013, 6, 1),
      date11: new Date(2013, 9, 1),
      date12: new Date(2013, 12, 0),
      date13: new Date(2014, 3, 1),
      date14: new Date(2014, 6, 1),
      date15: new Date(2014, 9, 1),
      date16: new Date(2014, 12, 0),
      date17: new Date(2014, 2, 2),
      date18: new Date(2015, 1, 7),
      date19: new Date(2015, 1, 2),
      date20: new Date(2015, 2, 12),
      textStyle: { color: "white" },
      borderFlag: { color: '#6c6d6d'},
      borderSquare: { color: '#841391'},
      borderArrow: { color: '#3ab0f9'},
      borderPin: { color: '#6233e0'},
      borderText: { color: '#dd3c9f'},
      borderCircle: { color: '#f48a21'},
      title: "AAPL Stock Price",
      tooltip: { enable: true },
      crosshair: { enable: true },
      border: { width: 0 },
      onAxis: false
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
});
</script>