<template>
    <div class="control-section">
        <div>
            <ejs-stockchart style="display:block" id="stockchartcontainerdefault" :primaryXAxis="primaryXAxis"
                :primaryYAxis="primaryYAxis" :chartArea="chartArea" :tooltip="tooltip" :crosshair="crosshair" :title="title" 
                :theme="theme">
                <e-stockchart-series-collection>
                     <e-stockchart-series :dataSource="seriesData" type="Spline"></e-stockchart-series>
                </e-stockchart-series-collection>
            </ejs-stockchart>
        </div>
  
        <div id="action-description">
            <p>This sample demonstrates the AAPL stock price using the <code>DateTimeCategory</code> axis type in the stock chart to display the minimum number of labels without any overlap on various business days.</p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure a stock chart to visualize stock data using the <code>DateTimeCategory</code> axis type. Use series <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/series/#type" aria-label="Navigate to the type property reference for Vue Stock Chart component">type</a> as <code>Spline</code> to render a spline series.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the chart or tap on it in touch enabled devices.
            </p>
            
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                The stock chart component features are segregated into individual feature-wise modules. To use datetime category
                axis and spline, inject the
                <code>DateTimeCategory</code> and <code>SplineSeries</code> module using
                <code> provide: { stockchart: [ DateTimeCategory, SplineSeries] },</code> method.
            </p>
            <p>
                More information about axis type can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/stock-chart/axis-types" aria-label="Navigate to the documentation for axis types in Vue Stock Chart component">documentation
                    section</a>.
            </p>
  
        </div>
    </div>
  </template>
  <script>
  import { Browser } from "@syncfusion/ej2-base";
  import { datetimeCategoryData } from "./stock-data";
  import {
    StockChartComponent,
    StockChartSeriesCollectionDirective,
    StockChartSeriesDirective,
    DateTimeCategory,
    CandleSeries,
    Tooltip,
    Crosshair,
    RangeTooltip,
    LineSeries,
    SplineSeries,
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
    data: function () {
        return {
            seriesData: datetimeCategoryData,
            theme: theme,
            //Initializing Primary X Axis
            primaryXAxis: {
                majorGridLines: { width: 0 },
                crosshairTooltip: { enable: true },
                valueType: 'DateTimeCategory',
                edgeLabelPlacement: 'Shift'
            },
  
            //Initializing Primary Y Axis
            primaryYAxis: {
                lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
            },
            crosshair: {
                enable: true,
            },
            title: 'AAPL Stock Price',
            chartArea: {
                border: {
                    width: 0
                }
            },
            tooltip: { enable: true, header: 'AAPL Stock Price', format: '${point.x}: <b>${point.y}</b>' },
        };
    },
    provide: {
        stockChart: [
        DateTimeCategory,
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
    }
  };
  </script>