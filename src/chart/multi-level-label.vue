<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :width='width' :chartArea='chartArea'
        :legendSettings='legendSettings' :pointRender='pointRender'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' :marker='marker'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This example shows multilevel labels in the chart axis. 
        We can add layers of labels to the axis using start and end range values.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to group axis labels based on ranges by using <code>ChartMultiLevelLabels</code>. 
        You can customize the text in each level by using <code>ChartAxisMultiLevelLabelBorder</code>, and <code>ChartAxisMultiLevelLabelTextStyle</code>.
      </p>
      <p>Axis labels in each level can be arranged smartly using the <code>Overflow</code> property. Its values and their behaviors are:
      </p>
      <ul>
        <li><code>Trim</code> - Trim the label when it intersect.</li>
        <li><code>Wrap</code> - Wrap the label when it intersect.</li>
        <li><code>None</code> - Shows all the labels.</li>
      </ul>
      <p>
        More information on the multi level labels can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/axis-labels/#multilevel-labels">documentation
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
import {
  pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors,
  pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors
} from './theme-color';
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import { ChartPlugin, ColumnSeries, DataLabel, Category, MultiLevelLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { x: "Grapes", y: 28 },
        { x: "Apples", y: 87 },
        { x: "Pears", y: 42 },
        { x: "Grapes", y: 13 },
        { x: "Apples", y: 13 },
        { x: "Pears", y: 10 },
        { x: "Tomato", y: 31 },
        { x: "Potato", y: 96 },
        { x: "Cucumber", y: 41 },
        { x: "Onion", y: 59 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        labelRotation: 90,
        labelIntersectAction: Browser.isDevice ? 'Rotate90' : 'Trim',
        border: { width: 1, type: "Rectangle" },
        isIndexed: true,
        interval: 1,
        majorGridLines: { width: 0 },
        multiLevelLabels: Browser.isDevice
          ? [
            {
              border: { type: "Rectangle" },
              categories: [
                { start: -0.5, end: 2.5, text: "In Season" },
                { start: 2.5, end: 5.5, text: "Out of Season" },
                { start: 5.5, end: 7.5, text: "In Season" },
                { start: 7.5, end: 9.5, text: "Out of Season" }
              ]
            },
            {
              border: { type: "Rectangle" },
              textStyle: { fontWeight: "Bold" },
              categories: [
                { start: -0.5, end: 5.5, text: "Fruits" },
                { start: 5.5, end: 9.5, text: "Vegetables" }
              ]
            }
          ]
          : [
            {
              border: { type: "Rectangle" },
              categories: [
                { start: -0.5, end: 0.5, text: "Seedless" },
                { start: 0.5, end: 2.5, text: "Seeded" },
                { start: 2.5, end: 3.5, text: "Seedless" },
                { start: 3.5, end: 5.5, text: "Seeded" },
                { start: 5.5, end: 6.5, text: "Seedless" },
                { start: 6.5, end: 7.5, text: "Seeded" },
                { start: 7.5, end: 8.5, text: "Seedless" },
                { start: 8.5, end: 9.5, text: "Seeded" }
              ]
            },
            {
              border: { type: "Rectangle" },
              categories: [
                { start: -0.5, end: 2.5, text: "In Season" },
                { start: 2.5, end: 5.5, text: "Out of Season" },
                { start: 5.5, end: 7.5, text: "In Season" },
                { start: 7.5, end: 9.5, text: "Out of Season" }
              ]
            },
            {
              border: { type: "Rectangle" },
              textStyle: { fontWeight: "Bold" },
              categories: [
                { start: -0.5, end: 5.5, text: "Fruits" },
                { start: 5.5, end: 9.5, text: "Vegetables" }
              ]
            }
          ]
      },
      chartArea: {
        border: { width: 0 }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 120,
        interval: 30,
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: "transparent" }
      },

      legendSettings: { visible: false },

      marker: {
        dataLabel: {
          visible: true,
          position: "Outer"
        }
      },

      width: Browser.isDevice ? "100%" : "75%",
      title: "Fruits and Vegetables - Season"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, DataLabel, MultiLevelLabel]
  },
  methods: {
    pointRender: function (args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      if (selectedTheme === 'material-dark') {
        args.fill = pointMaterialDarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'material') {
        args.fill = pointMaterialColors[args.point.index % 10];
      }
      else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {
        args.fill = pointFabricColors[args.point.index % 10];
      }
      else if (selectedTheme === 'bootstrap5-dark') {
        args.fill = pointBootstrap5DarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'bootstrap5') {
        args.fill = pointBootstrap5Colors[args.point.index % 10];
      }
      else if (selectedTheme === 'fluent-dark') {
        args.fill = pointFluentDarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'fluent') {
        args.fill = pointFluentColors[args.point.index % 10];
      }
      else if (selectedTheme === 'bootstrap4' || selectedTheme === 'bootstrap') {
        args.fill = pointBootstrapColors[args.point.index % 10];
      }
      else if (selectedTheme === 'tailwind-dark') {
        args.fill = pointTailwindDarkColors[args.point.index % 10];
      }
      else if (selectedTheme === 'tailwind') {
        args.fill = pointTailwindColors[args.point.index % 10];
      }
      else if (selectedTheme === 'highcontrast') {
        args.fill = pointHighContrastColors[args.point.index % 10];
      }
      else {
        args.fill = pointBootstrapColors[args.point.index % 10];
      }
    },
  }
});
</script>