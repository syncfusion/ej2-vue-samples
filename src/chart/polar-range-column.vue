<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" :theme="theme" style="display:block" align="center" id="chartcontainer" :title="title"
        :primaryXAxis="primaryXAxis" :legendSettings="legendSettings" :primaryYAxis="primaryYAxis" :tooltip='tooltip'>
        <e-series-collection>
          <e-series :dataSource="seriesData" :type="seriesType" xName="Month" name="Germany" drawType="RangeColumn" tooltipMappingName="MinTemp"
            :border="border" low="MinTemp" high="MaxTemp" :marker="marker"></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr style="height: 50px">
            <td>
              <div>Series Type</div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist id="SelectSeriesType" :change="polarType" :dataSource="polardata" index="0"
                  :width="polarwidth"></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample shows minimum and maximum temperature variations in polar and radar charts using a range column series.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure polar and radar charts with a range column series. 
        Switching between polar and radar series can be done using <b>Series Type</b> in the property panel.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use range column drawtype in
        Polar series
        and Radar series, we need to inject
        <code>PolarSeries</code>,
        <code>RadarSeries</code> and
        <code>RangeColumnSeries</code> module using
        <code>provide: { chart: [ PolarSeries, RadarSeries, RangeColumnSeries] },</code> method.
      </p>
      <p>
        More information on the polar and radar chart with a range column series can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#range-column" aria-label="Navigate to the documentation for Polar Range Column in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
#control-container {
  padding: 0px !important;
}
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ChartDataService } from "./chart-data";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  PolarSeries,
  Tooltip,
  Category,
  RadarSeries,
  ChartDrawType,
  DataLabel,
  RangeColumnSeries
} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { Month: "Jan", MinTemp: 2, MaxTemp: 7 },
        { Month: "Feb", MinTemp: 3, MaxTemp: 7 },
        { Month: "Mar", MinTemp: 3, MaxTemp: 7 },
        { Month: "Apr", MinTemp: 4, MaxTemp: 9 },
        { Month: "May", MinTemp: 6, MaxTemp: 11 },
        { Month: "June", MinTemp: 8, MaxTemp: 14 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        labelPlacement: "OnTicks",
        coefficient: Browser.isDevice ? 80 : 100
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}",
        minimum: 0,
        maximum: 15,
        interval: 5
      },
      tooltip: { enable: true, header: '', format: '<b>${point.x}</b> <br> Low : <b>${point.low}°C</b> <br> High : <b>${point.high}°C' },
      border: { width: 3, color: "white" },
      legendSettings: { visible: false },

      polardata: ["Polar", "Radar"],

      polarwidth: 120,
      seriesType: "Polar",
      title: "Temperatures of Germany",
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { color: "#ffffff"},
          enableRotation: true
        }
      }
    };
  },
  provide: {
    chart: [PolarSeries, Category, RadarSeries, Tooltip, DataLabel, RangeColumnSeries]
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    polarType: function (args) {
      this.seriesType = SelectSeriesType.value;
    }
  }
};
</script>