<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
      <ejs-chart
        ref="chart"
        :theme="theme"
        style="display:block"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :legendSettings="legendSettings"
        :primaryYSAxis="primaryYAxis"
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            :type="seriesType"
            xName="x"
            name="Germany"
            drawType="RangeColumn"
            :border="border"
            low="low"
            high="high"
            :marker="marker"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <br />
          <br />
          <tr style="height: 50px">
            <td>
              <div>Series Type</div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist
                  id="SelectSeriesType"
                  :change="polarType"
                  :dataSource="polardata"
                  index="0"
                  :width="polarwidth"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates polar series with range column type for temperature variation. The switching between polar and radar series can be done by using
        <code>Series Type</code> in property panel.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the range column type chart You can use
        <code>border</code>,
        <code>fill</code> properties to customize the area.
        <code>dataLabel</code> are used to represent individual data
        and its value.
      </p>
      <p>Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>

      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use range column drawtype in Polar series
        and Radar series, we need to inject
        <code>PolarSeries</code>,
        <code>RadarSeries</code> and
        <code>RangeColumnSeries</code> module using
        <code>provide: { chart: [ PolarSeries, RadarSeries, RangeColumnSeries] },</code> method.
      </p>
      <p>
        More information on the range column series can be found in this
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype"
        >documentation section</a>.
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
import { Browser } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import { ChartDataService } from "./chartdata.service";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Category,
  RadarSeries,
  ChartDrawType,
  DataLabel
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: "Jan", low: 2, high: 7 },
        { x: "Feb", low: 3, high: 7 },
        { x: "Mar", low: 3, high: 7 },
        { x: "Apr", low: 4, high: 9 },
        { x: "May", low: 6, high: 11 },
        { x: "June", low: 8, high: 14 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        title: "Months",
        interval: 1,
        labelPlacement: "OnTicks",
        startAngle: 90,
        coefficient: Browser.isDevice ? 80 : 100
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}˚C",
        minimum: 0,
        maximum: 15,
        interval: 5
      },

      border: { width: 3, color: "white" },
      legendSettings: { visible: false },

      polardata: ["Polar", "Radar"],

      polarwidth: 120,
      seriesType: "Polar",
      title: "Maximum and Minimum Temperature",
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { color: "#ffffff", fontWeight: "600" },
          enableRotation: true
        }
      }
    };
  },
  provide: {
    chart: [PolarSeries, Category, RadarSeries, DataLabel]
  },
  updated: function() {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    polarType: function(args) {
      this.seriesType = SelectSeriesType.value;
    }
  }
});
</script>