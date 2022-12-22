<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
      <ejs-chart
        ref="chart"
        style="display:block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
        :selectionMode="selectionMode"
        :highlightMode="highlightMode"
        :selectionPattern="selectionPattern"
        :highlightPattern="highlightPattern"
        :highlightColor="highlightColor"
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="Column"
            xName="x"
            yName="y"
            name="Age 0-14"
            width="2"
            :animation='animation'
          ></e-series>
          <e-series
            :dataSource="seriesData1"
            type="Column"
            xName="x"
            yName="y"
            name="Age 15-64"
            width="2"
            :animation='animation'
          ></e-series>
          <e-series
            :dataSource="seriesData2"
            type="Column"
            xName="x"
            yName="y"
            name="Age 65 & Above"
            width="2"
            :animation='animation'
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <br>
          <br>
          <tr style="height: 50px">
            <td>
              <div>Selection Mode</div>
            </td>
            <td>
              <ejs-dropdownlist
                id="selmode"
                ref="dropDownValue"
                :change="indexChange"
                :dataSource="indexdata"
                index="0"
                :width="indexwidth"
              ></ejs-dropdownlist>
            </td>
          </tr>
          <tr id style="height: 50px">
            <td style="width: 80%">
              <div>Enable Multi-selection:</div>
            </td>
            <td style="width: 50%; padding-left: 10px; padding-right:10px">
              <input type="checkbox" id="multiselect" @change="check">
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>Selection Patterns:</div>
            </td>
            <td>
              <ejs-dropdownlist
                id="patternMode"
                :change="selectionChange"
                :dataSource="patternTypes1"
                index="0"
                :width="indexwidth"
              ></ejs-dropdownlist>
            </td>
          </tr>
          <tr style="height: 50px">
                <td style="width: 60%">
                    <div>Highlight Color:</div>
                </td>
                <td style="width: 40%;">
                    <ejs-colorpicker id="highlighColor" value="null" :mode="mode" :change="colorChange"></ejs-colorpicker>
                </td>
          </tr>
          <tr id style="height: 50px">
            <td style="width: 80%">
              <div>Enable Highlight:</div>
            </td>
            <td style="width: 50%; padding-left: 10px; padding-right:10px">
              <input
                type="checkbox"
                id="highlightCheckbox"
                style="margin-top: 15px"
                @change="highlightPatternChange"
               >
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 60%">
              <div>Highlight Patterns:</div>
            </td>
            <td>
              <ejs-dropdownlist
                 id="highpattern"
                :change="highlightPatternChange"
                :dataSource="patternTypes2"
                index="0"
                :width="indexwidth"
              ></ejs-dropdownlist>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the selection behavior and its mode along with the highlight and highlight patterns in the chart.
      </p>
    </div>

    <div id="description">
      <p>
        In this sample, any point or series can be selected in the chart by clicking on or touching the point. You can also change the selection mode by changing the <code>Selection Mode</code> option in the properties panel. 
        You can enable multiple selections with the <code>Enable Multi Selection</code> option. You can also select a point while loading a chart using the <code>SelectedDataIndexes</code> option. 
        While hovering the point, the point is highlighted using the <code>Enable Highlight</code> option, as well as you can set different highlight patterns and colors using the <code>Highlight Patterns</code> and <code>Highlight Color</code> option.
      </p>
      <p>Tap to select a point or series, double tap and drag to enable rectangular selection in touch enabled devices.</p>
      <p>
        Chart supports seven mode of selection which can be set using
        <code>SelectionMode</code> property.
      </p>
      <ul>
        <li>
          <code>Series</code> - Select the series in chart.
        </li>
        <li>
          <code>Point</code> - Select a point in the series .
        </li>
        <li>
          <code>Cluster</code> - Select a group of points in the chart.
        </li>
        <li>
          <code>DragXY</code> - Rectangular selection with respect to both axis.
        </li>
        <li>
          <code>DragX</code> - Rectangular selection with respect to horizontal axis.
        </li>
        <li>
          <code>DragY</code> - Rectangular selection with respect to vertical axis.
        </li>
        <li>
          <code>Lasso</code> - Select free form of selection area points.
        </li>
      </ul>
      <p><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use selection feature, we need to inject
        <code>Selection</code> module using
        <code>provide: { chart: [Selection] },</code> method.
      </p>
    </div>
  </div>
</template>
<style scoped>
  .property-panel-table div{
    padding-top: 0px;
  }
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";
import {
  ChartPlugin,
  Selection,
  ScatterSeries,
  ColumnSeries,
  Legend,
  Category,
  Highlight
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);
Vue.use(ColorPickerPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      mode: "Palette",
      seriesData: [
        { x: "CHN", y: 17 },
        { x: "USA", y: 19 },
        { x: "IDN", y: 29 },
        { x: "JAP", y: 13 },
        { x: "BRZ", y: 24 }
      ],
      seriesData1: [
        { x: "CHN", y: 54 },
        { x: "USA", y: 67 },
        { x: "IDN", y: 65 },
        { x: "JAP", y: 61 },
        { x: "BRZ", y: 68 }
      ],
      seriesData2: [
        { x: "CHN", y: 9 },
        { x: "USA", y: 14 },
        { x: "IDN", y: 6 },
        { x: "JAP", y: 26 },
        { x: "BRZ", y: 8 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        labelIntersectAction: "Rotate90",
        labelIntersectAction: 'Rotate90',
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Distribution",
        labelFormat: "{value}%",
        interval: 20
      },
      legendSettings: { visible: true, toggleVisibility: false },

      animation: {
        enable: false
      },
      selectionMode: "Point",
      highlightMode: "None",
      selectionPattern: "None",
      highlightPattern: "None",
      highlightColor: '',
      indexdata: ["Point", "Series", "Cluster"],
      patternTypes1: [
        "None",
        "DiagonalForward",
        "Chessboard",
        "Triangle",
        "Box",
        "HorizontalDash"
      ],
         patternTypes2: [
        "None",
        "Dots",
        "Chessboard",
        "Triangle",
        "Tile",
        "Grid"
      ],
      indexwidth: 120,
      tooltip: { enable: false },
      title: "Age Distribution by Country"
    };
  },
  provide: {
    chart: [Selection, Legend, ColumnSeries, Category, ScatterSeries, Highlight]
  },
  methods: {
    indexChange: function(args) {
      this.$refs.chart.ej2Instances.selectionMode = selmode.value;
      var checkBox = document.getElementById("highlightCheckbox");
      if (checkBox.checked) {
        this.$refs.chart.ej2Instances.highlightMode = selmode.value;
      } else {
        this.$refs.chart.ej2Instances.highlightMode = "None";
      }
      this.$refs.chart.ej2Instances.dataBind();
    },
    check: function(e) {
      this.$refs.chart.ej2Instances.isMultiSelect = e.target.checked;
      this.$refs.chart.ej2Instances.dataBind();
    },
    selectionChange: function(e) {
      this.$refs.chart.ej2Instances.selectionPattern = patternMode.value;
      this.$refs.chart.ej2Instances.dataBind();
    },
    colorChange: function(args) {
      this.$refs.chart.ej2Instances.highlightColor = args.currentValue.hex;
      this.$refs.chart.ej2Instances.dataBind();
    },
    highlightPatternChange: function(e) {
      var checkBox = document.getElementById("highlightCheckbox");
     if (checkBox.checked) {
        this.$refs.chart.ej2Instances.highlightMode = selmode.value;
        this.$refs.chart.ej2Instances.highlightPattern = highpattern.value;
      } else {
        this.$refs.chart.ej2Instances.highlightMode = "None";
        this.$refs.chart.ej2Instances.highlightPattern = "None";
      }
      this.$refs.chart.ej2Instances.dataBind();
    },
  }
});
</script>