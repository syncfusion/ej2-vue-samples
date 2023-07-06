<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings'
        :chartArea='chartArea'>
        <e-series-collection>
          <e-series :dataSource='seriesData' :type='seriesType' :emptytype='emptytype' xName='x' yName='y' name='Profit'
            width=2 :marker='marker' :emptyPointSettings='emptyPointSettings'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr style="height: 50px">
            <td>
              <div>Series Type
              </div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist id='SelectSeriesType' :change='edgeMode' :dataSource='datadrop' index=0
                  :width='listwidth'></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>Empty Point Mode
              </div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist id='emptypointmode' :change='mode' :dataSource='emptydata' index=0
                  :width='listwidth'></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample illustrates the annual profit by product analysis of an organization with empty point functionality.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure empty points for a chart. Users can customize the empty points using <code>ChartEmptyPointSettings</code> in series. Default empty point <code>Mode</code> is <b>Gap</b>.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p>
        More information on the empty points can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/working-with-data/#empty-points">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { extend } from '@syncfusion/ej2-base';
import { Browser } from "@syncfusion/ej2-base";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import {
  ChartPlugin,
  ColumnSeries,
  SplineSeries,
  EmptyPointMode,
  Category,
  Legend,
  Tooltip,
  SplineAreaSeries
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { x: "Rice", y: 80 },
        { x: "Wheat", y: null },
        { x: "Oil", y: 70 },
        { x: "Corn", y: 60 },
        { x: "Gram", y: null },
        { x: "Milk", y: 70 },
        { x: "Peas", y: 80 },
        { x: "Fruit", y: 60 },
        { x: "Butter", y: null }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category', interval: 1, labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0,
        majorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 100,
        interval: 20,
        labelFormat: "{value}%",
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 }
      },
      chartArea: { border: { width: 0 } },
      seriesType: "Column",
      marker: { visible: false, height: 7, width: 7 },
      emptyPointSettings: {
        fill: "#e6e6e6",
        mode: "Gap"
      },
      tooltip: {
        enable: true, header: '', enableMarker: false
      },
      legendSettings: { visible: false },
      datadrop: ['Column', 'SplineArea', 'Spline'],
      emptydata: ['Gap', 'Drop', 'Zero', 'Average'],
      listwidth: 120,
      emptytype: "Gap",
      title: "Annual Product-Wise Profit Analysis"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Tooltip, SplineSeries, SplineAreaSeries, EmptyPointMode]
  },
  methods: {
    edgeMode: function (args) {
      this.$refs.chart.ej2Instances.series[0].type = SelectSeriesType.value;
      if (SelectSeriesType.value === 'Spline') {
        this.$refs.chart.ej2Instances.series[0].marker.visible = true;
      }
      else {
        this.$refs.chart.ej2Instances.series[0].marker.visible = false;
      }

      this.$refs.chart.ej2Instances.refresh();
    },
    mode: function (args) {
      let empty = document.getElementById('emptypointmode').value;
      this.$refs.chart.ej2Instances.series[0].emptyPointSettings.mode = empty;
      this.$refs.chart.ej2Instances.refresh();
    }
  }

});
</script>