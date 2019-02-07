<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' id='chartHistogram' :primaryXAxis='primaryXAxis'
        :chartArea='chartArea' :legendSettings='legendSettings' :primaryYAxis='primaryYAxis' :width='width'
        :title='title' :load='load' :tooltip='tooltip' :theme='theme'>
            <e-series-collection>
                <e-series type='Histogram' width=2 yName='y' name='Score' :dataSource='dataSource' 
                :binInterval='binInterval' :marker='marker' :showNormalDistribution='showNormalDistribution' :columnWidth='columnWidth'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the student's results of the final examination with histogram series in chart. Number of students between each interval is shown by using the data label.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the histogram type charts. Histogram type charts can provide a visual display of large amounts of data that are difficult to understand in a tabular or spreadsheet form. You can use the border and fill properties to customize the vertical rectangle. The dataLabel property is used to represent individual data and its value.
    </p>
    <p>
       Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a point or tap a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Chart component features are segregated into individual feature-wise modules. To use histogram series, you should inject the 
        <code>HistogramSeries </code> module using the
        <code>Chart.Inject(HistogramSeries)</code> method.
    </p>
   </div>
</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ChartTheme, HistogramSeries, DataLabel, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

let chartData = [];
let points = [5.250, 7.750, 0, 8.275, 9.750, 7.750, 8.275, 6.250, 5.750,
        5.250, 23.000, 26.500, 27.750, 25.025, 26.500, 26.500, 28.025, 29.250, 26.750, 27.250,
        26.250, 25.250, 34.500, 25.625, 25.500, 26.625, 36.275, 36.250, 26.875, 40.000, 43.000,
        46.500, 47.750, 45.025, 56.500, 56.500, 58.025, 59.250, 56.750, 57.250,
        46.250, 55.250, 44.500, 45.525, 55.500, 46.625, 46.275, 56.250, 46.875, 43.000,
        46.250, 55.250, 44.500, 45.425, 55.500, 56.625, 46.275, 56.250, 46.875, 43.000,
        46.250, 55.250, 44.500, 45.425, 55.500, 46.625, 56.275, 46.250, 56.875, 41.000, 63.000,
        66.500, 67.750, 65.025, 66.500, 76.500, 78.025, 79.250, 76.750, 77.250,
        66.250, 75.250, 74.500, 65.625, 75.500, 76.625, 76.275, 66.250, 66.875, 80.000, 85.250,
        87.750, 89.000, 88.275, 89.750, 97.750, 98.275, 96.250, 95.750, 95.250
    ];
points.map((value) => {
    chartData.push({
        y: value
    });
});

export default Vue.extend({
  data: function() {
    return {
        primaryXAxis: {
            majorGridLines: { width: 0 }, title: 'Score of Final Examination',
            minimum: 0, maximum: 100
        },
        chartArea: { border: { width: 0 } },
        legendSettings: { visible: false },
        primaryYAxis: {
            title: 'Number of Students',
            minimum: 0, maximum: 50, interval: 10,
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }
        },
          marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
           width: Browser.isDevice ? '100%' : '60%',
        title: 'Examination Result', tooltip: { enable: true },
       theme: theme,
       dataSource: chartData,
       tooltip: {enable: true},
       binInterval: 20,
       columnWidth: 0.99,
       showNormalDistribution: true


    };
  },
  provide: {
    chart: [HistogramSeries, DataLabel, Tooltip]
  },
  methods: {
    load: function(args) {
       if (args.chart.theme === 'Highcontrast') {
                args.chart.series[0].marker.dataLabel.font.color = '#000000';
            }
    }
  },
   
});
</script>