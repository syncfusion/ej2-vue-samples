<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        align="center"
        :theme="theme"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :legendSettings='legend'
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="StackingStepArea"
            xName="x"
            yName="y"
            name="Renewable"
            :opacity="opacity"
            fill="#56CCF2"
            :border='border'
          ></e-series>
          <e-series
            :dataSource="seriesData1"
            type="StackingStepArea"
            xName="x"
            yName="y"
            name="Non-Renewable"
            :opacity="opacity"
            fill="#2F80ED"
            :border='border'
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>This sample visualizes the data about electricity production using stacked stepped area chart.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the stacked step area chart. This series forms the
        step area progress, by connecting points through vertical and horizontal lines with area filled. You can use <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/border/">border</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill">fill</a> properties to customize the stacked step area. Both <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/marker/">marker</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/dataLabel/">dataLabel</a> are used to represent individual data and its value.
      </p>
      
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use stacked step area series, we need to inject
        <code>StackingStepAreaSeries</code> module using
        <code>provide: { chart: [StackingStepAreaSeries] }</code> method.
      </p>
      <p>
        More information about the stacked step area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/range-step-area">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  StackingStepAreaSeries,
  Legend,
  Highlight
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: 2000, y: 416 },
        { x: 2001, y: 490 },
        { x: 2002, y: 470 },
        { x: 2003, y: 500 },
        { x: 2004, y: 449 },
        { x: 2005, y: 470 },
        { x: 2006, y: 437 },
        { x: 2007, y: 458 },
        { x: 2008, y: 500 },
        { x: 2009, y: 473 },
        { x: 2010, y: 520 },
        { x: 2011, y: 509 }
      ],

      seriesData1: [
        { x: 2000, y: 180 },
        { x: 2001, y: 240 },
        { x: 2002, y: 370 },
        { x: 2003, y: 200 },
        { x: 2004, y: 229 },
        { x: 2005, y: 210 },
        { x: 2006, y: 337 },
        { x: 2007, y: 258 },
        { x: 2008, y: 300 },
        { x: 2009, y: 173 },
        { x: 2010, y: 220 },
        { x: 2011, y: 220 }
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Double",
        majorGridLines: { width: 0 },
        edgeLabelPlacement: "Shift"
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Production (Billion as kWh)",
        valueType: "Double",
        labelFormat: "{value}B",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width: Browser.isDevice ? '100%' : '75%',
      legend: {enableHighlight : true},
      title: "Electricity- Production",
      opacity: 0.5,
      border: { width: 2.5 }
    };
  },
  provide: {
    chart: [StackingStepAreaSeries, Legend, Highlight]
  },
  methods: {}
};
</script>