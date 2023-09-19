<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :legendSettings='legendSettings' :tooltip='tooltip' :animation='animation'>
        <e-series-collection>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='GDP_2013' name='2013'
            drawType='StackingArea' :animation='animation'> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='GDP_2014' name='2014'
            drawType='StackingArea' :animation='animation'> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='GDP_2015' name='2015'
            drawType='StackingArea' :animation='animation'> </e-series>
          <e-series :dataSource='seriesData' :type='seriesType' xName='Country' yName='GDP_2016' name='2016'
            drawType='StackingArea' :animation='animation'> </e-series>
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
        This sample shows GDP growth of various countries for a few years in the polar and radar charts using the
        stacked area series.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure polar and radar charts with stacking area series.
        Switching between polar and radar series can be done using <b>Series Type</b> in the property panel.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking area drawtype in
        Polar series
        and Radar series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>StackingAreaSeries</code> module using
        <code>provide: { chart: [ PolarSeries, RadarSeries, StackingAreaSeries] },</code> method.
      </p>
      <p>
        More information on the polar and radar series with a stacking area type chart can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#stacked-area">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style >
#control-container {
  padding: 0px !important;
}

text[id*=_AxisLabel_] {
  text-shadow: 0 0 1px white !important;
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
  Legend,
  Category,
  StackingAreaSeries,
  RadarSeries,
  Highlight,
  ChartDrawType
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

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
        { Country: "Japan", GDP_2013: 5156, GDP_2014: 4849, GDP_2015: 4382, GDP_2016: 4939 },
        { Country: "Germany", GDP_2013: 3754, GDP_2014: 3885, GDP_2015: 3365, GDP_2016: 3467 },
        { Country: "France", GDP_2013: 2809, GDP_2014: 2844, GDP_2015: 2420, GDP_2016: 2463 },
        { Country: "United Kingdom", GDP_2013: 2721, GDP_2014: 3002, GDP_2015: 2863, GDP_2016: 2629 },
        { Country: "Brazil", GDP_2013: 2472, GDP_2014: 2456, GDP_2015: 1801, GDP_2016: 1799 },
        { Country: "Russia", GDP_2013: 2231, GDP_2014: 2064, GDP_2015: 1366, GDP_2016: 1281 },
        { Country: "Italy", GDP_2013: 2131, GDP_2014: 2155, GDP_2015: 1826, GDP_2016: 1851 },
        { Country: "India", GDP_2013: 1857, GDP_2014: 2034, GDP_2015: 2088, GDP_2016: 2256 },
        { Country: "Canada", GDP_2013: 1843, GDP_2014: 1793, GDP_2015: 1553, GDP_2016: 1529 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        interval: 1,
        coefficient: Browser.isDevice ? 80 : 100
      },

      legendSettings: {
        visible: true,
        enableHighlight: true
      },
      tooltip: {
        enable: true,
        header: '',
        format: '<b>${point.x}</b><br>GDP: <b>${point.y}USD</b>'
      },
      animation: { enable: true },

      polardata: ['Polar', 'Radar'],

      polarwidth: 120,
      seriesType: "Polar",

      title: "GDP in current prices (USD Billion)"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, StackingAreaSeries, RadarSeries, Highlight]
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
      this.animation = SelectSeriesType.value;
    }
  }

};
</script>