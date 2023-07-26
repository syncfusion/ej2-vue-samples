<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' id='chartHistogram' :primaryXAxis='primaryXAxis'
        :chartArea='chartArea' :legendSettings='legendSettings' :primaryYAxis='primaryYAxis' :width='width'
        :title='title' :load='load' :tooltip='tooltip' :theme='theme'>
            <e-series-collection>
                <e-series type='Histogram' width=2 yName='Score' name='Score' :dataSource='chartData' 
                :binInterval='binInterval' :marker='marker' :showNormalDistribution='showNormalDistribution' :columnWidth='columnWidth'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-charts/chart-types/histogram-chart">Vue Histogram Chart</a> example visualizes final examination results. The number of students between each interval is shown in data labels.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the histogram chart. The histogram chart is a bar (column) chart used for frequency distribution in which the widths of the bars are proportional to classes into which variables have been divided and the heights of the bars are proportional to class frequencies. The <code>DataLabel</code> property is used to present details on individual data points.
    </p>
    <p>
       <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a point or tap a point in touch enabled devices.
    </p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Chart component features are segregated into individual feature-wise modules. To use histogram series, you should inject the 
        <code>HistogramSeries </code> module using the
        <code>Chart.Inject(HistogramSeries)</code> method.
    </p>
    <p>
        More information on the histogram series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/histogram">documentation section</a>.
    </p>
   </div>
</div>
</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ChartTheme, HistogramSeries, DataLabel, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function () {
    return {
      chartData :[{ Score: 5.250 },
      { Score: 7.750 },
      { Score: 0 },
      { Score: 8.275 },
      { Score: 9.750 },
      { Score: 7.750 },
      { Score: 8.275 },
      { Score: 6.250 },
      { Score: 5.750 },
      { Score: 5.250 },
      { Score: 23.000 },
      { Score: 26.500 },
      { Score: 27.750 },
      { Score: 25.025 },
      { Score: 26.500 },
      { Score: 28.025 },
      { Score: 29.250 },
      { Score: 26.750 },
      { Score: 27.250 },
      { Score: 26.250 },
      { Score: 25.250 },
      { Score: 34.500 },
      { Score: 25.625 },
      { Score: 25.500 },
      { Score: 26.625 },
      { Score: 36.275 },
      { Score: 36.250 },
      { Score: 26.875 },
      { Score: 40.000 },
      { Score: 43.000 },
      { Score: 46.500 },
      { Score: 47.750 },
      { Score: 45.025 },
      { Score: 56.500 },
      { Score: 58.025 },
      { Score: 59.250 },
      { Score: 56.750 },
      { Score: 57.250 },
      { Score: 46.250 },
      { Score: 55.250 },
      { Score: 44.500 },
      { Score: 45.525 },
      { Score: 55.500 },
      { Score: 46.625 },
      { Score: 46.275 },
      { Score: 56.250 },
      { Score: 46.875 },
      { Score: 43.000 },
      { Score: 46.250 },
      { Score: 55.250 },
      { Score: 44.500 },
      { Score: 45.425 },
      { Score: 55.500 },
      { Score: 56.625 },
      { Score: 46.275 },
      { Score: 56.250 },
      { Score: 46.875 },
      { Score: 43.000 },
      { Score: 46.250 },
      { Score: 55.250 },
      { Score: 44.500 },
      { Score: 45.425 },
      { Score: 55.500 },
      { Score: 46.625 },
      { Score: 56.275 },
      { Score: 46.250 },
      { Score: 56.875 },
      { Score: 41.000 },
      { Score: 63.000 },
      { Score: 66.500 },
      { Score: 67.750 },
      { Score: 65.025 },
      { Score: 66.500 },
      { Score: 76.500 },
      { Score: 78.025 },
      { Score: 79.250 },
      { Score: 76.750 },
      { Score: 77.250 },
      { Score: 66.250 },
      { Score: 75.250 },
      { Score: 74.500 },
      { Score: 65.625 },
      { Score: 75.500 },
      { Score: 76.625 },
      { Score: 76.275 },
      { Score: 66.250 },
      { Score: 66.875 },
      { Score: 80.000 },
      { Score: 85.250 },
      { Score: 87.750 },
      { Score: 89.000 },
      { Score: 88.275 },
      { Score: 89.750 },
      { Score: 97.750 },
      { Score: 98.275 },
      { Score: 96.250 },
      { Score: 95.750 },
      { Score: 95.250 }
      ],
      primaryXAxis: {
        majorGridLines: { width: 0 }, title: 'Score of Final Examination',
        minimum: 0, maximum: 100,
        edgeLabelPlacement: 'Shift'
      },
      chartArea: { border: { width: 0 } },
      legendSettings: { visible: false },
      primaryYAxis: {
        title: 'Number of Students',
        minimum: 0, maximum: 50, interval: 10,
        lineStyle: { width: 0 }
      },
      marker: {
        visible: true, height: 7, width: 7,
        dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } }
      },
      width: Browser.isDevice ? '100%' : '75%',
      title: 'Examination Result', tooltip: { enable: true, header:"" },
      theme: theme,
      binInterval: 20,
      columnWidth: 0.99,
      showNormalDistribution: true


    };
  },
  provide: {
    chart: [HistogramSeries, DataLabel, Tooltip]
  },
  methods: {
    load: function (args) {
      if (selectedTheme === 'highcontrast') {
        args.chart.series[0].marker.dataLabel.font.color = '#000000';
      }
    }
  },
});
</script>