<template>
  <div class="control-section">
    <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
      :primaryXAxis='primaryXAxis' :tooltip='tooltip' :legendSettings='legendSettings'>
      <e-series-collection>
        <e-series :dataSource='seriesData' :type='seriesType' xName='XValue' yName='YValue' name='6-9'
          drawType='StackingColumn' width=2> </e-series>
        <e-series :dataSource='seriesData' :type='seriesType' xName='XValue' yName='YValue1' name='9-11'
          drawType='StackingColumn' width=2> </e-series>
        <e-series :dataSource='seriesData' :type='seriesType' xName='XValue' yName='YValue2' name='11-14'
          drawType='StackingColumn' width=2> </e-series>
        <e-series :dataSource='seriesData' :type='seriesType' xName='XValue' yName='YValue3' name='14-17'
          drawType='StackingColumn' width=2> </e-series>
        <e-series :dataSource='seriesData' :type='seriesType' xName='XValue' yName='YValue4' name='17-20'
          drawType='StackingColumn' width=2> </e-series>
        <e-series :dataSource='seriesData' :type='seriesType' xName='XValue' yName='YValue5' name='23 Above'
          drawType='StackingColumn' width=2> </e-series>
      </e-series-collection>
    </ejs-chart>
    <div>
    </div>
    <div id="action-description">
      <p>
        This sample shows a wind rose chart designed using polar and radar charts with a stacking column series. 
        A wind rose chart helps visualize wind patterns, i.e., wind speed and wind direction.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the polar and radar charts with a stacking column series.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking column drawtype in
        Polar series
        and Radar series, we need to inject
        <code>PolarSeries</code> and <code>RadarSeries</code> module using
        <code>provide: { chart: [ PolarSeries, RadarSeries] },</code> method.
      </p>
      <p>
        More information on the polar and radar series with a stacking column type chart can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#stacked-column">documentation
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
  LineSeries,
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
        { XValue: "N", YValue: 1, YValue1: 0.8, YValue2: 0.8, YValue3: 0.3, YValue4: 0.2, YValue5: 0.2 },
        { XValue: "NNE", YValue: 0.9, YValue1: 0.7, YValue2: 0.7, YValue3: 0.3, YValue4: 0.2, YValue5: 0.2 },
        { XValue: "NE", YValue: 0.7, YValue1: 0.8, YValue2: 0.5, YValue3: 1.1, YValue4: 1.2, YValue5: 0.5 },
        { XValue: "ENE", YValue: 0.9, YValue1: 1, YValue2: 0.4, YValue3: 0.9, YValue4: 1, YValue5: 0.4 },
        { XValue: "E", YValue: 0.9, YValue1: 0.6, YValue2: 0.9, YValue3: 0.5, YValue4: 0.7, YValue5: 0.4 },
        { XValue: "ESE", YValue: 0.8, YValue1: 0.5, YValue2: 0.7, YValue3: 0.3, YValue4: 0.8, YValue5: 0.3 },
        { XValue: "SE", YValue: 0.7, YValue1: 0.4, YValue2: 0.6, YValue3: 0.5, YValue4: 0.5, YValue5: 0.3 },
        { XValue: "SSE", YValue: 1.4, YValue1: 0.4, YValue2: 0.5, YValue3: 0.4, YValue4: 0.6, YValue5: 0.2 },
        { XValue: "S", YValue: 2, YValue1: 1.2, YValue2: 0.6, YValue3: 0.6, YValue4: 0.4, YValue5: 0.4 },
        { XValue: "SSW", YValue: 2, YValue1: 2.5, YValue2: 2, YValue3: 1, YValue4: 0.5, YValue5: 0.3 },
        { XValue: "SW", YValue: 2.2, YValue1: 2, YValue2: 1.8, YValue3: 1, YValue4: 0.4, YValue5: 0.2 },
        { XValue: "WSW", YValue: 1.8, YValue1: 1.1, YValue2: 0.8, YValue3: 0.1, YValue4: 0.4, YValue5: 0.2 },
        { XValue: "W", YValue: 1.6, YValue1: 1.8, YValue2: 2.1, YValue3: 1, YValue4: 0.4, YValue5: 0.4 },
        { XValue: "WNW", YValue: 1.2, YValue1: 1.2, YValue2: 1.5, YValue3: 1.3, YValue4: 1.1, YValue5: 1.2 },
        { XValue: "NW", YValue: 2, YValue1: 2.5, YValue2: 2, YValue3: 1, YValue4: 0.2, YValue5: 0.7 },
        { XValue: "NNW", YValue: 1.8, YValue1: 1.1, YValue2: 0.8, YValue3: 0.1, YValue4: 0.4, YValue5: 0.2 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        labelPlacement: "OnTicks",
        interval: 1,
        coefficient: Browser.isDevice ? 80 : 100
      },
      tooltip: { enable: true },
      seriesType: "Polar",
      legendSettings: { enableHighlight: true },
      polardata: ["Polar", "Radar"],
      polarwidth: 120,
      title: "Wind Rose Chart"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, LineSeries, RadarSeries, Highlight]
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