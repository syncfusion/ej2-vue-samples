<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display: block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :load='load'
        :legendSettings="legendSettings"
        :tooltip="tooltip"
      >
        <e-series-collection>
          <e-series
            :dataSource="cData"
            type="RangeStepArea"
            xName="x"
            :border="border"
            width="2"
            opacity="0.5"
            high="high"
            low="low"
            :marker="marker"  
          >
          </e-series>
        
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This Vue range step area chart example illustrates the minimum and maximum temperatures for different days using the default range step area series.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a range step area type chart. You can use <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/border/" aria-label="Navigate to the border property reference for Vue Chart component">border</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill" aria-label="Navigate to the fill property reference for Vue Chart Series">fill</a> properties to customize the range step area. Both <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/marker/" aria-label="Navigate to the documentation for Data Markers in Vue Chart component">marker</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/dataLabel/" aria-label="Navigate to the documentation for dataLabel in Vue Chart component">dataLabel</a> are used to represent data points and their values.
      </p>
      <p>
       The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/tooltip/" aria-label="Navigate to the documentation for tooltip in Vue Chart component">tooltip</a> is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        The Charts component’s features are segregated into individual feature modules by feature. To use range step area series, we need to inject the <code>RangeStepAreaSeries</code> module using
        <code>provide: { chart: [RangeStepAreaSeries] }</code> method.
      </p>
      <p>
        More information about the range step area type series can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/range-step-area" aria-label="Navigate to the documentation for Range Step Area in Vue Chart component">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  Tooltip,
  Highlight,
  DateTime,
  RangeStepAreaSeries
} from "@syncfusion/ej2-vue-charts";
import { chartDataValues } from './financial-data';

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      cData : chartDataValues,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'dd MMM',
        edgeLabelPlacement: (Browser.isDevice) ? 'Shift' : 'Hide',
        majorGridLines: { width: 0 } 
      },
      chartArea: {
        border: {
          width: 0,
        },
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: -10,
        maximum: 25,
        interval: 5,
        majorTickLines: { width: 0 } 
      },
      legendSettings: {
            visible: false
        },
      width: Browser.isDevice ? "100%" : "75%",
      marker: {
        visible: false,
      },
      border: {
        width: 2,
      },
      tooltip: {
        enable: true,
        format: 'Temperature : <b>${point.low} - ${point.high}</b>',
        shared: false,
        header: '<b>${point.x}</b>'
      },
      title: "Temperature Variation by Month",
    };
  },
  provide: {
    chart: [RangeStepAreaSeries, DateTime, Tooltip, Highlight],
  },
  methods: {
    load: function (args) {
      let selectedTheme = loadChartTheme(args);
      switch (selectedTheme) {
        case 'Bootstrap5':
          {
            args.chart.series[0].fill = '#BDD9F5';
            args.chart.series[0].border.color = '#539DE3';
          }
          break;
        case 'Fluent':
          {
            args.chart.series[0].fill = '#C3A6DB';
            args.chart.series[0].border.color = '#9E71C2';
          }
          break;
      }
    }
  },
};
</script>