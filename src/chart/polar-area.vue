<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='Product A' width=2 drawType='Area' :border='border' opacity=0.5 > </e-series>
                <e-series :dataSource='seriesData1' :type='seriesType' xName='x' yName='y' name='Product B' width=2 drawType='Area' :border='border' opacity=0.5 > </e-series>
                <e-series :dataSource='seriesData2' :type='seriesType' xName='x' yName='y' name='Product C' width=2 drawType='Area' :border='border' opacity=0.5 > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>Series Type
                    </div>
                </td>
                 <td>
                    <div>
                       <ejs-dropdownlist id='SelectSeriesType' :change='polarType' :dataSource='polardata' index=0 :width='polarwidth' ></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
        </table>
    </div>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates polar series with area type for average sales comparison of products in recent year.  The switching between polar and radar series can be done by using <code>Series Type</code> in property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the area type charts. Similar to line type series, but the area
        get closed and filled with series color. You can use <code>border</code>, <code>fill</code> properties to
        customize the area. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its
        value. Legend is enabled in this example with series type shape.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use area drawtype in Polar series and Radar
        series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>AreaSeries</code> module using <code>provide: { chart: [ PolarSeries, RadarSeries, AreaSeries ] },</code>        method.
    </p>
    <p>
        More information on the Polar series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
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
import { ChartDataService } from "./chartdata.service";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
  AreaSeries,
  RadarSeries,
  ChartDrawType
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
       theme: theme,
      seriesData: [
        { x: "2000", y: 4 },
        { x: "2001", y: 3.0 },
        { x: "2002", y: 3.8 },
        { x: "2003", y: 3.4 },
        { x: "2004", y: 3.2 },
        { x: "2005", y: 3.9 }
      ],

      seriesData1: [
        { x: "2000", y: 2.6 },
        { x: "2001", y: 2.8 },
        { x: "2002", y: 2.6 },
        { x: "2003", y: 3 },
        { x: "2004", y: 3.6 },
        { x: "2005", y: 3 }
      ],

      seriesData2: [
        { x: "2000", y: 2.8 },
        { x: "2001", y: 2.5 },
        { x: "2002", y: 2.8 },
        { x: "2003", y: 3.2 },
        { x: "2004", y: 2.9 },
        { x: "2005", y: 2 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        labelPlacement: "OnTicks",
        interval: 1,
        coefficient: Browser.isDevice ? 80 : 100
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Revenue in Millions",
        labelFormat: "{value}M"
      },

      polardata: ["Polar", "Radar"],

      polarwidth: 120,

      border: { color: "transparent" },

      title: "Average Sales Comparison",
      seriesType: "Polar"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, AreaSeries, RadarSeries]
  },
  updated: function () {
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