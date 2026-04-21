<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart id="charts" style="display:block; text-align:center"
        :theme="theme"
        :title="title"
        :subTitle="subTitle"
        :chartArea="chartArea"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :width="width"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
        :load="load"
        :loaded="chartLoaded">
        <e-series-collection>
          <e-series :dataSource="seriesData" type="Bar" xName="Company" yName="Revenue" name="Revenue"
            :cornerRadius="{ topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10 }"
            :columnWidth="0.75" :columnSpacing="0.25"
            :linearGradient="linearGradient"
            :marker="{ dataLabel: { visible: true, position: 'Outer', format: '{value} B' } }">
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>

    <div id="action-description">
      <p>
        This example visualizes the top revenue-generating companies in India for 2024. A horizontal bar chart with a left-to-right color gradient
        is used to highlight each company's revenue in USD Billions. Company names appear on the left axis, and revenue values are displayed at the
        end of each bar. Companies are ordered by revenue to emphasize ranking and relative contribution. Compare bar lengths to quickly identify the top
        contributors among India's leading corporations.
      </p>
    </div>

    <div id="description">
      <p>
        In this example, you can see how to render and configure a horizontal bar chart with a linear gradient fill using the
        <code>linearGradient</code> property of the series. The gradient is applied horizontally from left to right with multiple color stops
        to create smooth color transitions across all bars, visually reinforcing the revenue differences across companies.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a bar or tap on a bar on touch-enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use bar series, we need to inject
            <code>BarSeries</code> module using <code>provide: { chart: [BarSeries] }</code> method.
        </p>
        <p>
          More information about the bar series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/bar" aria-label="Navigate to the documentation for Bar Chart in Vue Chart component">documentation section</a>.
        </p> 
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { Browser } from '@syncfusion/ej2-base';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective,
  BarSeries, Category, Tooltip, Legend, DataLabel, Highlight
} from "@syncfusion/ej2-vue-charts";
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
      theme: theme,
      // data equivalent to the React sample
      seriesData: [
        { Company: 'Tata Motors',                         Revenue: 52.9  },
        { Company: 'State Bank of India',                 Revenue: 71.8  },
        { Company: 'Oil and Natural Gas Corporation',     Revenue: 77.5  },
        { Company: 'Indian Oil Corporation',              Revenue: 93.8  },
        { Company: 'Life Insurance Corporation of India', Revenue: 98.0  },
        { Company: 'Reliance Industries',                 Revenue: 108.8 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 1 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        edgeLabelPlacement: 'Shift',
        enableWrap: true,
        maximumLabelWidth: 100
      },
      primaryYAxis: {
        visible: false
      },
      width: Browser.isDevice ? '100%' : '90%',
      tooltip: {
        enable: true, header: '',
        format: '${point.x}: <b>${point.y} B</b>'
      },
      chartArea: {
        border: { width: 0}
      },
      legendSettings: { visible: false },
      title: 'Leading Revenue Drivers in India: 2024 Rankings',
      subTitle: 'Source: Wikipedia (Forbes 2024) | Revenue in USD Billions',
      linearGradient: {
        x1: 0, y1: 0, x2: 1, y2: 0,
        gradientColorStop: [
          { color: '#1a9fd4', offset: 0,   opacity: 1 },
          { color: '#9b4dca', offset: 50,  opacity: 1 },
          { color: '#f95d8f', offset: 100, opacity: 1 }
        ]
      }
    };
  },
  provide: {
    chart: [BarSeries, DataLabel, Category, Legend, Tooltip, Highlight]
  },
  methods: {
    load: function (args) {
      loadChartTheme(args);
    },
    chartLoaded: function (args) {
      let chart = document.getElementById('charts');
      if (chart) { chart.setAttribute('title', ''); }
    }
  }
};
</script>