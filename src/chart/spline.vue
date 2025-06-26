<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartSpline' :title='title' :subTitle='subTitle'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
        :tooltip='tooltip' :legendSettings='legend' :crosshair='crosshair'>
        <e-annotations>
          <e-annotation :content="'cloudTemplate'" x='Jan' y=22.75 coordinateUnits='Point' verticalAlignment='Middle'>
            <template v-slot:cloudTemplate="{ }">
              <div id="chart_cloud"><img src="./images/cloud.png" alt="Cloud Picture"
                  style="width: 41px; height: 41px" /></div>
            </template>
          </e-annotation>
          <e-annotation :content="'sunTemplate'" x='Jul' y=88.43 coordinateUnits='Point' verticalAlignment='Middle'>
            <template v-slot:sunTemplate="{ }">
              <div id="chart_sun"><img src="./images/sunny.png" alt="Sunny Picture" style="width: 41px; height: 41px" />
              </div>
            </template>
          </e-annotation>
        </e-annotations>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='Max Temp' width=2 :marker='marker'>
          </e-series>
          <e-series :dataSource='seriesData1' type='Spline' xName='x' yName='y' name='Avg Temp' width=2
            :marker='marker'>
          </e-series>
          <e-series :dataSource='seriesData2' type='Spline' xName='x' yName='y' name='Min Temp' width=2
            :marker='marker'>
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This Vue Spline Chart example visualizes the average monthly high and low temperatures across the contiguous
        U.S.
        for 2024.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a spline chart. The spline chart uses a smooth, curved line to connect points in a data series.
        <code>Markers</code> represent individual data points with different shapes, while the <code>crosshair</code> enhances data tracking by highlighting the category.
      </p>
      <p>
        <code>Tooltips</code> are enabled in this example. To see a tooltip in action, hover over or tap on the chart.
      </p>

      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use spline series, we need to inject
        <code>SplineSeries</code> module using <code>provide: { chart: [SplineSeries] }</code> method.
      </p>
      <p>
        More information about the spline series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/spline"
          aria-label="Navigate to the documentation for Spline Chart in Vue Chart component">documentation section</a>.
      </p>
    </div>
  </div>

</template>
<style>
@keyframes opac {
  0% {
    stroke-opacity: 1;
    stroke-width: 0px;
  }

  100% {
    stroke-opacity: 0;
    stroke-width: 10px;
  }
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AnnotationDirective, AnnotationsDirective, SplineSeries, ChartAnnotation, Category, Legend, Tooltip, Highlight, Crosshair } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective
  },
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { x: 'Jan', y: 41.02 },
        { x: 'Feb', y: 51.93 },
        { x: 'Mar', y: 56.39 },
        { x: 'Apr', y: 66.06 },
        { x: 'May', y: 74.64 },
        { x: 'Jun', y: 84.58 },
        { x: 'Jul', y: 88.43 },
        { x: 'Aug', y: 86.72 },
        { x: 'Sep', y: 81.86 },
        { x: 'Oct', y: 73.13 },
        { x: 'Nov', y: 55.54 },
        { x: 'Dec', y: 48.36 }
      ],

      seriesData1: [
        { x: 'Jan', y: 31.89 },
        { x: 'Feb', y: 40.82 },
        { x: 'Mar', y: 44.96 },
        { x: 'Apr', y: 53.64 },
        { x: 'May', y: 62.28 },
        { x: 'Jun', y: 71.80 },
        { x: 'Jul', y: 75.69 },
        { x: 'Aug', y: 73.99 },
        { x: 'Sep', y: 68.61 },
        { x: 'Oct', y: 58.95 },
        { x: 'Nov', y: 45.18 },
        { x: 'Dec', y: 38.21 }

      ],
      seriesData2: [
        { x: 'Jan', y: 22.75 },
        { x: 'Feb', y: 29.71 },
        { x: 'Mar', y: 33.53 },
        { x: 'Apr', y: 41.22 },
        { x: 'May', y: 49.87 },
        { x: 'Jun', y: 59.02 },
        { x: 'Jul', y: 62.94 },
        { x: 'Aug', y: 61.27 },
        { x: 'Sep', y: 55.36 },
        { x: 'Oct', y: 44.76 },
        { x: 'Nov', y: 34.79 },
        { x: 'Dec', y: 28.04 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        interval: 1, majorGridLines: { width: 0 },
        labelIntersectAction: 'Rotate90', majorTickLines: { width: 0 }, minorTickLines: { width: 0 }
      },
      //Initializing Primary Y Axis
      primaryYAxis:
      {
        labelFormat: '{value}°F', minimum: 0,
        interval: 20, title: 'Temperature (°F)',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        },
        margin: {
          bottom: 12
        }
      },
      width: Browser.isDevice ? '100%' : '75%', height: '500px',
      marker: {
        visible: true,
        height: 7,
        width: 7,
        isFilled: true
      },
      tooltip: {
        enable: true, shared: true, showNearestTooltip: true, header: '<b>${point.x}<b>', format: '${series.name} : <b>${point.y}</b>'
      },
      crosshair: { enable: true, lineType: 'Vertical', highlightCategory: true },
      legend: { enableHighlight: true },
      title: '2024 US Temperature Trends with Hottest Coldest and Average Records',
      subTitle: 'Source: ncei.noaa.gov',
    };
  },
  provide: {
    chart: [SplineSeries, Legend, Category, Tooltip, ChartAnnotation, Highlight, Crosshair]
  },
  methods: {
  },
};
</script>