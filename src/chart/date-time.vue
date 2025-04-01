<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :tooltip='tooltip'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Line' xName='Period' yName='MaxTemp' name='Warmest' width=2
            :marker='marker' opacity=1> </e-series>
          <e-series :dataSource='seriesData' type='Line' xName='Period' yName='MinTemp' name='Coldest' width=2
            :marker='marker1' opacity=1> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample shows the date-time axis in a chart with a weather report for the year 2016.
      </p>
    </div>
    <div id="description">
      <p>
        The date-time axis uses a date-time scale and displays date-time values as the axis labels. To use a date-time
        axis, set the <code>ValueType</code> in axis to <b>DateTime</b>.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over or tap on the chart.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use DateTime axis, we need to
        inject
        <code>DateTime</code> module using <code> provide: { chart: [ DateTime ] },</code> method.
      </p>
      <p>
        More information on the DateTime axis can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/date-time-axis/"
          aria-label="Navigate to the documentation for DateTime Axis in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Legend, DateTime, DataLabel, Highlight, Tooltip } from "@syncfusion/ej2-vue-charts";

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
      seriesData: [
        { Period: new Date(2016, 3, 1), MaxTemp: 6.3, MinTemp: -5.3 },
        { Period: new Date(2016, 4, 1), MaxTemp: 13.3, MinTemp: 1.0 },
        { Period: new Date(2016, 5, 1), MaxTemp: 18.0, MinTemp: 6.9 },
        { Period: new Date(2016, 6, 1), MaxTemp: 19.8, MinTemp: 9.4 },
        { Period: new Date(2016, 7, 1), MaxTemp: 18.1, MinTemp: 7.6 },
        { Period: new Date(2016, 8, 1), MaxTemp: 13.1, MinTemp: 2.6 },
        { Period: new Date(2016, 9, 1), MaxTemp: 4.1, MinTemp: -4.9 }
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'MMM d',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
      },

      //Initializing Primary Y Axis
      primaryYAxis:
      {
        edgeLabelPlacement: 'Shift',
        minimum: -20,
        maximum: 30,
        interval: 10,
        labelFormat: '{value}°C',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },

      tooltip: {
        enable: true,
        showNearestTooltip: true
      },

      marker: {
        visible: true,
        height: 8, width: 8,
        isFilled: true,
        shape: 'Pentagon',
        dataLabel: { visible: true, position: 'Top' }
      },

      marker1: {
        visible: true, height: 8, width: 8, shape: 'Diamond', isFilled: true,
        dataLabel: { visible: true, position: 'Top' }
      },

      width: Browser.isDevice ? '100%' : '75%',
      title: "Alaska Weather Statistics - 2016"
    };
  },
  provide: {
    chart: [LineSeries, Legend, DateTime, DataLabel, Highlight, Tooltip]
  },
  methods: {
  },

};
</script>