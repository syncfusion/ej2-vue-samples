<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
         :width='width' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='All sources' > </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Autos && Light Trucks' > </e-series>                
            </e-series-collection>
        </ejs-chart>
        </div>
    <div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
             <tr style="height: 50px">
                <td>
                    <div>X Axis: 
                    </div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" id="xIndex" checked=true  @change='xChange' >
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Y Axis: 
                    </div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" id="yIndex" checked=true  @change='yChange' >
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="action-description">
   <p>
        This sample visualizes the World Population Report with default column series in the chart. Data points values are showed
        by using data label.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the recurrence stripline in chart. Striplines are used to annotate the highlighted region with some notes. You
        can use
        <code>border</code>,
        <code>fill</code>
        <code>dash-array</code> properties to customize the striplines.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>StripLine</code> module using
        <code>provide: { chart: [ StripLine] }</code> method.
    </p>
    <p>
        More information on the strip line feature can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
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
import Vue from "vue";
import { Browser, extend } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import {
  ChartPlugin,
  ColumnSeries,
  DateTime,
  Tooltip,
  Legend,
  Category,
  StripLine
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
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
        valueType: 'DateTime', interval: 5, intervalType: 'Years', majorGridLines: { width: 0 },
        edgeLabelPlacement: 'Shift',
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

      tooltip: { enable: true, format: ' Year: ${point.x}<br> Tons Per Day: ${point.y}'},

      width: "100%",
      title: "World Pollution Report"
    };
  },
  provide: {
    chart: [ColumnSeries, DateTime, Category, Legend, Tooltip, StripLine]
  },
  updated: function() {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
     xChange: function(args) {
      let x = document.getElementById("xIndex");
      let primaryXAxis = extend({}, this.primaryXAxis);
      primaryXAxis.stripLines[0].visible = x.checked;
      this.primaryXAxis = primaryXAxis;
    },
     yChange: function(args) {
      let y = document.getElementById("yIndex");
      let primaryYAxis = extend({}, this.primaryYAxis);
      primaryYAxis.stripLines[0].visible = y.checked;
      this.primaryYAxis = primaryYAxis;
    }
    }
});
</script>