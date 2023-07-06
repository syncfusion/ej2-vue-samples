<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='GDP_2013' name='2015'
            drawType='Scatter' width=2 :marker='marker'> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='GDP_2014' name='2016'
            drawType='Scatter' width=2 :marker='marker1'> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='GDP_2015' name='2017'
            drawType='Scatter' width=2 :marker='marker2'> </e-series>
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
        This sample shows GDP growth of different countries for a few years in the polar and radar charts using the scatter series.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure polar and radar charts with a scatter series. Switching between polar and radar series can be done using the <b>Series Type</b> in the property panel.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use scatter drawtype in Polar
        series and
        Radar series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>ScatterSeries</code> module using
        <code>provide: { chart: [ PolarSeries, RadarSeries, ScatterSeries ] },</code> method.
      </p>
      <p>
        More information on the polar and radar chart with a scatter series can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#scatter">documentation
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
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
  ScatterSeries,
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
        { TooltipMappingName: "Myanmar", Country: "Myanmar", GDP_2013: 7.3, GDP_2014: 6.3, GDP_2015: 7.5 },
        { TooltipMappingName: "India", Country: "India", GDP_2013: 7.9, GDP_2014: 6.8, GDP_2015: 7.2 },
        { TooltipMappingName: "Bangladesh", Country: "Bangladesh", GDP_2013: 6.8, GDP_2014: 6.9, GDP_2015: 6.9 },
        { TooltipMappingName: "Cambodia", Country: "Cambodia", GDP_2013: 7.0, GDP_2014: 7.0, GDP_2015: 6.9 },
        { TooltipMappingName: "China", Country: "China", GDP_2013: 6.9, GDP_2014: 6.7, GDP_2015: 6.6 },
        { TooltipMappingName: "Bhutan", Country: "Bhutan", GDP_2013: 6.1, GDP_2014: 6.2, GDP_2015: 5.9 },
        { TooltipMappingName: "Iceland", Country: "Iceland", GDP_2013: 4.1, GDP_2014: 7.2, GDP_2015: 5.7 },
        { TooltipMappingName: "Nepal", Country: "Nepal", GDP_2013: 2.7, GDP_2014: 0.6, GDP_2015: 5.5 },
        { TooltipMappingName: "Pakistan", Country: "Pakistan", GDP_2013: 4.0, GDP_2014: 4.7, GDP_2015: 5.0 },
        { TooltipMappingName: "Poland", Country: "Poland", GDP_2013: 3.9, GDP_2014: 2.7, GDP_2015: 3.4 },
        { TooltipMappingName: "Australia", Country: "Australia", GDP_2013: 2.4, GDP_2014: 2.5, GDP_2015: 3.1 },
        { TooltipMappingName: "Korea", Country: "Korea", GDP_2013: 2.8, GDP_2014: 2.8, GDP_2015: 2.7 },
        { TooltipMappingName: "Singapore", Country: "Singapore", GDP_2013: 1.9, GDP_2014: 2.0, GDP_2015: 2 },
        { TooltipMappingName: "Canada", Country: "Canada", GDP_2013: 0.9, GDP_2014: 1.4, GDP_2015: 1.9 },
        { TooltipMappingName: "Germany", Country: "Germany", GDP_2013: 1.5, GDP_2014: 1.8, GDP_2015: 1.6 },
        { TooltipMappingName: "Denmark", Country: "Denmark", GDP_2013: 1.6, GDP_2014: 1.1, GDP_2015: 1.5 },
        { TooltipMappingName: "France", Country: "France", GDP_2013: 1.3, GDP_2014: 1.3, GDP_2015: 1.4 },
        { TooltipMappingName: "Austria", Country: "Austria", GDP_2013: 1.0, GDP_2014: 1.5, GDP_2015: 1.4 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        interval: 1,
        coefficient: Browser.isDevice ? 80 : 100
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0, maximum: 8, interval: 2
      },

      marker: { visible: false, height: 7, width: 7, dataLabel: { name: 'TooltipMappingName' } },
      marker1: { visible: false, height: 7, width: 7, shape: 'Diamond', dataLabel: { name: 'TooltipMappingName' } },
      marker2: { visible: false, height: 7, width: 7, shape: 'Triangle', dataLabel: { name: 'TooltipMappingName' } },
      tooltip: {
        enable: true,
        header: '',
        format: '<b>${point.x}</b> <br>GDP: <b>${point.y}%</b>'
      },
      legendSettings: {
        enableHighlight: true,
      },
      polardata: ['Polar', 'Radar'],

      polarwidth: 120,

      seriesType: "Polar",

      title: "GDP by Countries"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, ScatterSeries, RadarSeries, Highlight]
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
  },

});
</script>