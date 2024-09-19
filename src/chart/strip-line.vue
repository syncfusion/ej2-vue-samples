<template>
  <div class="control-section">
    <div>
      <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings'
        :chartArea='chartArea' :width='width' :titleStyle='titleStyle' :subTitle='subTitle'>
        <e-series-collection>
          <e-series :dataSource='WeatherReportsA' type='Spline' xName='x' yName='wind' name='Wind Speed (km/h)' legendShape='HorizontalLine'
            width=4> </e-series>
          <e-series :dataSource='WeatherReportsB' type='Spline' xName='x' yName='gust' name='Wind Gust (km/h)' legendShape='HorizontalLine'
            width=4> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
    </div>
    <div id="action-description">
      <p>
        This sample displays the changes in wind speed and gust with stripline feature.
      </p>
    </div>
    <div id="description">
      <p>
          In this example, you can see how to render and configure a strip line for the chart. Use the <code>start</code> and <code>end</code> properties in the <code>chartStripline</code> option to add a strip line to an axis. Additionally, the title for the chart can be positioned anywhere in the chart by using the <code>position</code> property in <code>titleStyle</code>.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use strip line, we need to
        inject
        <code>StripLine</code> module using
        <code>Chart.Inject(StripLine)</code> method.
      </p>
      <p>
        More information on the strip line can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/strip-line/" aria-label="Navigate to the documentation for Stripline in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style>
#control-container {
  padding: 0px !important;
}
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  SplineSeries,
  Tooltip,
  Legend,
  DateTimeCategory,
  StripLine,
  Highlight
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
let fontSize = Browser.isDevice ? "14px" : "16px";

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      theme: theme,
      WeatherReportsA: [
        { x: new Date(2023, 4, 1), wind : 19 },
        { x: new Date(2023, 4, 2), wind : 17 },
        { x: new Date(2023, 4, 3), wind : 14 },
        { x: new Date(2023, 4, 4), wind : 9 },
        { x: new Date(2023, 4, 5), wind : 10 },
        { x: new Date(2023, 4, 6), wind : 8 },
        { x: new Date(2023, 4, 7), wind : 8 },
        { x: new Date(2023, 4, 8), wind : 16 },
        { x: new Date(2023, 4, 9), wind : 9 },
        { x: new Date(2023, 4, 10), wind : 13 },
        { x: new Date(2023, 4, 11), wind : 7 },
        { x: new Date(2023, 4, 12), wind : 12 },
        { x: new Date(2023, 4, 13), wind : 10 },
        { x: new Date(2023, 4, 14), wind : 5 },
        { x: new Date(2023, 4, 15), wind : 8 }
      ],
      WeatherReportsB: [
        { x: new Date(2023, 4, 1), gust : 30 },
        { x: new Date(2023, 4, 2), gust : 28 },
        { x: new Date(2023, 4, 3), gust : 26 },
        { x: new Date(2023, 4, 4), gust : 19 },
        { x: new Date(2023, 4, 5), gust : 21 },
        { x: new Date(2023, 4, 6), gust : 14 },
        { x: new Date(2023, 4, 7), gust : 13 },
        { x: new Date(2023, 4, 8), gust : 29 },
        { x: new Date(2023, 4, 9), gust : 19 },
        { x: new Date(2023, 4, 10), gust : 20 },
        { x: new Date(2023, 4, 11), gust : 15 },
        { x: new Date(2023, 4, 12), gust : 25 },
        { x: new Date(2023, 4, 13), gust : 20 },
        { x: new Date(2023, 4, 14), gust : 10 },
        { x: new Date(2023, 4, 15), gust : 15 }
      ],
      chartArea: {
        border: {
          width: 0
        }
      },
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTimeCategory",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        labelFormat : 'E dd/MM',
        labelRotation: -90,
        labelIntersectAction: Browser.isDevice ? 'Rotate90' : 'None',
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 30,
        interval: 10,
        lineStyle: { width: 0 },
        rangePadding: "None",
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        title: 'Wind Speed and Gust (km/h)',
        //Initializing Striplines
        stripLines: [
          {
            start: 0, 
            end: 5, 
            text: 'Calm', 
            color: 'rgba(68, 170, 213, 0.1)', 
            visible: true, 
            horizontalAlignment: 'Start',
            textStyle: { size: '13px' }, border: { width: 0 },
          }, 
          {
            start: 5, 
            end: 8, 
            text: 'Light Air', 
            color: 'rgba(0, 0, 0, 0)', 
            visible: true, 
            horizontalAlignment: 'Start',
            textStyle: { size: '13px' }, border: { width: 0 },
          },
          {
            start: 8, 
            end: 11, 
            text: 'Light Breeze', 
            visible: true, 
            horizontalAlignment: 'Start',
            textStyle: { size: '13px' }, border: { width: 0 }, color: 'rgba(68, 170, 213, 0.1)'
          },
          {
            start: 11, 
            end: 18, 
            text: 'Gentle Breeze', 
            color: 'rgba(0, 0, 0, 0)', 
            visible: true, 
            horizontalAlignment: 'Start',
            textStyle: { size: '13px' }, border: { width: 0 },
          }, 
          {
            start: 18, 
            end: 28, 
            text: 'Moderate Breeze', 
            visible: true, 
            horizontalAlignment: 'Start',
            textStyle: { size: '13px' }, border: { width: 0 }, color: 'rgba(68, 170, 213, 0.1)'
          },
          {
            start: 28, 
            end: 30, 
            text: 'Fresh Breeze', 
            visible: true, 
            horizontalAlignment: 'Start',
            textStyle: { size: '13px' }, border: { width: 0 }, color: 'rgba(0, 0, 0, 0)'
          }
        ]
      },
      legendSettings: { visible: true, enableHighlight: true, shapeWidth: 15 },
      tooltip: { enable: true, header: '', format: '<b>${point.x}</b> <br> ${series.name} : <b>${point.y}</b>', enableMarker: false },
      width: Browser.isDevice ? "100%" : "75%",
      title: "Wind Speed and Gust (km/h)",
      titleStyle: { position : 'Bottom', textAlignment:'Far' },
      subTitle: 'WorldWeatherOnline.com',
    };
  },
  provide: {
    chart: [SplineSeries, DateTimeCategory, Legend, Tooltip, StripLine, Highlight]
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
  }
};
</script>