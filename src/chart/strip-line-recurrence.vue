<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :tooltip='tooltip' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='All sources' columnSpacing=0.1
            width=2> </e-series>
          <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Autos & Light Trucks'
            columnSpacing=0.1 width=2> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr style="height: 50px">
            <td style="width: 80%" id="xAxis"> X Axis Striplines:
            </td>
            <td>
              <input type="checkbox" id="xIndex" checked=true @change='xChange' aria-labelledby="Checkbox checked">
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 80%" id="yAxis">Y Axis Striplines:
            </td>
            <td>
              <input type="checkbox" id="yIndex" checked=true @change='yChange' aria-labelledby="Checkbox checked">
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample shows how to repeat a strip line in a chart.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure a strip line for the chart. To repeat the strip line, you need to set the <code>StartFromAxis</code>, <code>Size</code>, <code>IsRepeat</code>, and <code>RepeatEvery</code> properties accordingly in ChartStripline.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to
        inject
        <code>StripLine</code> module using
        <code>provide: { chart: [ StripLine] }</code> method.
      </p>
      <p>
        More information on the strip line can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/strip-line/#recurrence-stripline" aria-label="Navigate to the documentation for Recurrence Stripline in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style scoped>
#control-container {
  padding: 0px !important;
}
#yIndex:hover {
    cursor: pointer;
}
#xIndex:hover {
    cursor: pointer;
}
</style>
<script>
import { Browser, extend } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  ColumnSeries,
  DateTime,
  Tooltip,
  Legend,
  Category,
  StripLine,
  Highlight
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
      seriesData1: [
        { x: new Date(1970, 1, 1), y: 16500 }, { x: new Date(1975, 1, 1), y: 16000 }, { x: new Date(1980, 1, 1), y: 15400 },
        { x: new Date(1985, 1, 1), y: 15800 }, { x: new Date(1990, 1, 1), y: 14000 }, { x: new Date(1995, 1, 1), y: 10500 },
        { x: new Date(2000, 1, 1), y: 13300 }, { x: new Date(2005, 1, 1), y: 12800 }
      ],
      seriesData2: [
        { x: new Date(1970, 1, 1), y: 8000 }, { x: new Date(1975, 1, 1), y: 7600 }, { x: new Date(1980, 1, 1), y: 6400 },
        { x: new Date(1985, 1, 1), y: 3700 }, { x: new Date(1990, 1, 1), y: 7200 }, { x: new Date(1995, 1, 1), y: 2300 },
        { x: new Date(2000, 1, 1), y: 4000 }, { x: new Date(2005, 1, 1), y: 4800 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'DateTime', intervalType: 'Years', majorGridLines: { width: 0 },
        edgeLabelPlacement: 'Shift',
        labelIntersectAction: 'Trim',
        minimum: new Date(1965, 1, 1), maximum: new Date(2010, 1, 1),
        //Initializing Striplines
        stripLines: [{
          startFromAxis: true, size: 5, sizeType: 'Years', isRepeat: true, repeatEvery: 10, visible: true,
          color: 'rgba(167,169,171, 0.1)'
        }]
      },
      chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 18000,
        interval: 2000,
        majorGridLines: { color: 'rgba(167,169,171, 0.3)' },
        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' },
        stripLines: [
          {
            startFromAxis: true, size: 2000, isRepeat: true, repeatEvery: 4000, visible: true,
            color: 'rgba(167,169,171, 0.1)'
          }]
      },
      legendSettings: { visible: true, enableHighlight: true },
      tooltip: { enable: true, format: ' Year: <b>${point.x}</b><br> Tons Per Day: <b>${point.y}</b>', enableHighlight: true },
      title: "World Pollution Report"
    };
  },
  provide: {
    chart: [ColumnSeries, DateTime, Category, Legend, Tooltip, StripLine, Highlight]
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    xChange: function (args) {
      let x = document.getElementById("xIndex");
      let primaryXAxis = extend({}, this.primaryXAxis);
      primaryXAxis.stripLines[0].visible = x.checked;
      this.$refs.chart.ej2Instances.series[0].animation.enable = false;
      this.$refs.chart.ej2Instances.series[1].animation.enable = false;
      this.primaryXAxis = primaryXAxis;
    },
    yChange: function (args) {
      let y = document.getElementById("yIndex");
      let primaryYAxis = extend({}, this.primaryYAxis);
      primaryYAxis.stripLines[0].visible = y.checked;
      this.$refs.chart.ej2Instances.series[0].animation.enable = false;
      this.$refs.chart.ej2Instances.series[1].animation.enable = false;
      this.primaryYAxis = primaryYAxis;
    }
  }
};
</script>