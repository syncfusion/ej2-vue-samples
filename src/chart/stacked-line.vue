<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :tooltip="tooltip"
        :chartArea="chartArea"
        :width="width"
        :legendSettings='legend'
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y"
            name="John"
            width="2"
            :marker='circleMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y1"
            name="Peter"
            width="2"
            :marker='diamondMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y2"
            name="Steve"
            width="2"
            :marker='rectangleMarker'
          ></e-series>
          <e-series
            :dataSource="seriesData"
            type="StackingLine"
            xName="x"
            yName="y3"
            name="Charle"
            width="2"
            :marker='triangleMarker'
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This Vue Stacked Line Chart example visualizes the family expenses data with stacked line series in the chart to identify who spent more
        money in each category.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the stacked line type chart. The stacked line chart visualizes data with y-values stacked one over another in a series order. It shows the relationship between individual values to the total sum of points.
      </p>
      <p><code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking line series, we need to inject
        <code>StackingLineSeries</code> module using
        <code>provide: { chart: [StackingLineSeries] }</code> method.
      </p>
      <p>
        More information about the line type series can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#line-charts">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  StackingLineSeries,
  Legend,
  Tooltip,
  Category,
  Highlight
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
        { x: 'Jan', y: 90, y1: 40, y2: 70, y3: 120 }, { x: 'Feb', y: 80, y1: 90, y2: 110, y3: 70 }, { x: 'Mar', y: 50, y1: 80, y2: 120, y3: 50 },
        { x: 'Apr', y: 70, y1: 30, y2: 60, y3: 180 }, { x: 'May', y: 30, y1: 80, y2: 80, y3: 30 }, { x: 'Jun', y: 10, y1: 40, y2: 30, y3: 270 },
        { x: 'Jul', y: 100, y1: 30, y2: 70, y3: 40 }, { x: 'Aug', y: 55, y1: 95, y2: 55, y3: 75 }, { x: 'Sep', y: 20, y1: 50, y2: 40, y3: 65 },
        { x: 'Oct', y: 40, y1: 20, y2: 80, y3: 95 }, { x: 'Nov', y: 45, y1: 15, y2: 45, y3: 195 }, { x: 'Dec', y: 75, y1: 45, y2: 65, y3: 115 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        majorGridLines: { width: 0 }, minorGridLines: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, interval: 1, lineStyle: { width: 0 }, valueType: 'Category', labelRotation: Browser.isDevice ? -45 : 0, labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45' 
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 400,
        interval: 100,
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: "${value}"
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width: Browser.isDevice ? "100%" : "75%",
      circleMarker: { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true },
      triangleMarker: { visible: true, height: 6, width: 6 , shape: 'Triangle' , isFilled: true },
      diamondMarker: {  visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true  },
      rectangleMarker: { visible: true, height: 5, width: 5 , shape: 'Rectangle' , isFilled: true },
      tooltip: {
        enable: true
      },
      legend: {enableHighlight : true},
      title: "Family Expense for Year"
    };
  },
  provide: {
    chart: [StackingLineSeries, Legend, Tooltip, Category, Highlight]
  },
  methods: {}
});
</script>