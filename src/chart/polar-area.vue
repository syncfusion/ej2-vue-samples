<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Period' yName='ProductRevenue_A' name='Product A'
            width=2 drawType='Area' :border='border' opacity=0.5> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Period' yName='ProductRevenue_B' name='Product B'
            width=2 drawType='Area' :border='border' opacity=0.5> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Period' yName='ProductRevenue_C' name='Product C'
            width=2 drawType='Area' :border='border' opacity=0.5> </e-series>
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
                <ejs-dropdownlist id='SelectSeriesType' :change='polarType' :dataSource='polardata' index=0
                  :width='polarwidth'></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample shows the average product sales comparison for 6 years in polar and radar charts.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure polar and radar charts with an area series. 
      Switching between polar and radar series can be done using <b>Series Type </b>in the property panel.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use area drawtype in Polar
        series and Radar
        series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>AreaSeries</code> module using
        <code>provide: { chart: [ PolarSeries, RadarSeries, AreaSeries ] },</code> method.
      </p>
      <p>
        More information on the polar and radar chart with an area series can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/polar-radar/">documentation
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
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { ChartDataService } from "./chart-data";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
  AreaSeries,
  RadarSeries,
  Highlight,
  ChartDrawType
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { Period: "2000", ProductRevenue_A: 4, ProductRevenue_B: 2.6, ProductRevenue_C: 2.8 },
        { Period: "2001", ProductRevenue_A: 3.0, ProductRevenue_B: 2.8, ProductRevenue_C: 2.5 },
        { Period: "2002", ProductRevenue_A: 3.8, ProductRevenue_B: 2.6, ProductRevenue_C: 2.8 },
        { Period: "2003", ProductRevenue_A: 3.4, ProductRevenue_B: 3, ProductRevenue_C: 3.2 },
        { Period: "2004", ProductRevenue_A: 3.2, ProductRevenue_B: 3.6, ProductRevenue_C: 2.9 },
        { Period: "2005", ProductRevenue_A: 3.9, ProductRevenue_B: 3, ProductRevenue_C: 2 }
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

      legendSettings: {
        enableHighlight: true
      },
      polardata: ["Polar", "Radar"],

      polarwidth: 120,

      border: { color: "transparent", width: 0 },

      title: "Average Sales Comparison",
      seriesType: "Polar"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, AreaSeries, RadarSeries, Highlight]
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
});
</script>