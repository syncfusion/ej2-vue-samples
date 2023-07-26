<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='Population' name='Population' width=2
            drawType='Column' :border='border' :marker='marker'> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='MobileSubscriber' name='Mobile Subscriptions'
            width=2 drawType='Column' :border='border' :marker='marker'> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='NetworkSubscriber' name='3G/4G Subscriptions' width=2
            drawType='Column' :border='border' :marker='marker'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>

      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr style="height: 50px">
            <td>
              <div>Series Type :
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
        This sample shows the top 10 mobile markets by the number of subscriptions in polar and radar charts using column series.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure polar and radar charts with a column series. Switching between polar and radar series can be done using <b>Series Type</b> in the property panel.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use column drawtype in Polar
        series and
        Radar series, we need to inject
        <code>PolarSeries</code> and <code>RadarSeries</code> module using
        <code>provide: { chart: [ PolarSeries, RadarSeries ] },</code> method.
      </p>
      <p>
        More information on the polar and radar chart with column series can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#column">documentation
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
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import { ChartDataService } from "./chart-data";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
  RadarSeries,
  Highlight,
  ChartDrawType
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
        { TooltipMappingName: "Japan", Country: "Japan", MobileSubscriber: 137.9, Population: 127.6, NetworkSubscriber: 108.8 },
        { TooltipMappingName: "Indonesia", Country: "Indonesia", MobileSubscriber: 85.0, Population: 246.9, NetworkSubscriber: 45.5 },
        { TooltipMappingName: "Russia", Country: "Russia", MobileSubscriber: 237.1, Population: 143.5, NetworkSubscriber: 41.2 },
        { TooltipMappingName: "Vietnam", Country: "Vietnam", MobileSubscriber: 127.7, Population: 88.8, NetworkSubscriber: 18.0 },
        { TooltipMappingName: "Pakistan", Country: "Pakistan", MobileSubscriber: 126.1, Population: 179.2 },
        { TooltipMappingName: "Nigeria", Country: "Nigeria", MobileSubscriber: 175.0, Population: 168.8, NetworkSubscriber: 12.7 },
        { TooltipMappingName: "Germany", Country: "Germany", MobileSubscriber: 113.6, Population: 81.9, NetworkSubscriber: 46.0 },
        { TooltipMappingName: "Bangladesh", Country: "Bangladesh", MobileSubscriber: 116.0, Population: 154.7, NetworkSubscriber: 34.6 },
        { TooltipMappingName: "Philippines", Country: "Philippines", MobileSubscriber: 109.5, Population: 96.7, NetworkSubscriber: 16.6 },
        { TooltipMappingName: "Mexico", Country: "Mexico", MobileSubscriber: 102.7, Population: 120.8, NetworkSubscriber: 19.8 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        labelPlacement: 'OnTicks', interval: 1,
        coefficient: Browser.isDevice ? 80 : 100
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: '{value}M'
      },

      border: { width: 1, color: 'white' },

      marker: { dataLabel: { name: 'TooltipMappingName' } },

      tooltip: {
        enable: true,
        header:'',
        format: '<b>${point.text}</b> <br> ${series.name} : <b>${point.y}</b>'
      },
      polardata: ['Polar', 'Radar'],

      legendSettings: {
        enableHighlight: true
      },
      polarwidth: 120,

      title: "Top 10 Mobile Markets by Number of Subscriptions",
      seriesType: "Polar"

    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, RadarSeries, Highlight]
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