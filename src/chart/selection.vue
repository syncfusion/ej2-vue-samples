<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
      <ejs-chart ref="chart" style="display:block" :theme="theme" align="center" id="chartcontainer" :title="title"
        :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :legendSettings="legendSettings" :tooltip="tooltip"
        :selectionMode="selectionMode" :highlightMode="highlightMode" :selectionPattern="selectionPattern"
        :highlightPattern="highlightPattern" :highlightColor="highlightColor" :chartArea='chartArea' :width='width'>
        <e-series-collection>
          <e-series :dataSource="seriesData" type="Column" xName="Country" yName="Children" name="Age 0-14" width="2"
            :animation='animation' columnSpacing=0.1></e-series>
          <e-series :dataSource="seriesData" type="Column" xName="Country" yName="Adult" name="Age 15-64" width="2"
            :animation='animation' columnSpacing=0.1></e-series>
          <e-series :dataSource="seriesData" type="Column" xName="Country" yName="SeniorAdult" name="Age 65 & Above"
            width="2" :animation='animation' columnSpacing=0.1></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>
      <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
          <tr id style="height: 50px">
            <td style="width: 80%">
              <div id="multiSelection">Enable Multi-selection:</div>
            </td>
            <td style="width: 50%; padding-left: 10px; padding-right:10px">
              <input type="checkbox" id="multiselect" @change="check" aria-labelledby="Checkbox unchecked">
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>Selection Mode</div>
            </td>
            <td>
              <ejs-dropdownlist id="selmode" ref="dropDownValue" :change="indexChange" :dataSource="indexdata" index="0"
                :width="indexwidth"></ejs-dropdownlist>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>Selection Patterns:</div>
            </td>
            <td>
              <ejs-dropdownlist id="patternMode" :change="selectionChange" :dataSource="patternTypes1" index="0"
                :width="indexwidth"></ejs-dropdownlist>
            </td>
          </tr>
          <tr id style="height: 50px">
            <td style="width: 80%">
              <div id="highLight">Enable Highlight:</div>
            </td>
            <td style="width: 50%; padding-left: 10px; padding-right:10px">
              <input type="checkbox" id="highlightCheckbox" style="margin-top: 15px" @change="highlightPatternChange" aria-labelledby="Checkbox unchecked">
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
          <tr style="height: 50px">
            <td style="width: 60%">
              <div>Highlight Patterns:</div>
            </td>
            <td>
              <ejs-dropdownlist id="highpattern" :change="highlightPatternChange" :dataSource="patternTypes2" index="0"
                :width="indexwidth"></ejs-dropdownlist>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the different modes of selection and highlight behavior in the charts.
      </p>
    </div>

    <div id="description">
      <p>
        In this sample, any point or series can be selected in a chart by clicking on or touching the point. 
        You can change the <b>Selection Mode</b> option in the properties panel. 
        You can also enable multiple selection. You can select a point while loading a chart using the <code>SelectedDataIndexes</code> option.
      </p>
      <p>Highlight the points in the sample using the <b>Enable Highlight</b> option. You can set different <b>highlight patterns</b> and <b>colors</b>.
      </p>
      <p>
        Selection can be set using the <code>SelectionMode</code> property, and it supports the following modes.
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
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use selection feature, we need
        to inject
        <code>Selection</code> module using
        <code>provide: { chart: [Selection] },</code> method.
      </p>
      <p>
        More information on the selection can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/selection/" aria-label="Navigate to the documentation for Selection in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
.property-panel-table div {
  padding-top: 0px;
}
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ColorPickerComponent } from "@syncfusion/ej2-vue-inputs";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  Selection,
  ScatterSeries,
  ColumnSeries,
  Legend,
  Category,
  Highlight
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function () {
    return {
      theme: theme,
      mode: "Palette",
      seriesData: [
        { Country: "China", Children: 17, Adult: 54, SeniorAdult: 9 },
        { Country: "USA", Children: 19, Adult: 67, SeniorAdult: 14 },
        { Country: "India", Children: 29, Adult: 65, SeniorAdult: 6 },
        { Country: "Japan", Children: 13, Adult: 61, SeniorAdult: 26 },
        { Country: "Brazil", Children: 24, Adult: 68, SeniorAdult: 8 },
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        majorTickLines: { width: 0 }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Distribution",
        labelFormat: "{value}%",
        interval: 20,
      },
      legendSettings: { visible: true, toggleVisibility: false },
      chartArea: { border: { width: 0 } },
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
        "Bubble",
        "Triangle",
        "Tile",
        "Grid"
      ],
      width : Browser.isDevice ? '100%' : '92%',
      indexwidth: 120,
      tooltip: { enable: false },
      title: "Age Distribution by Country"
    };
  },
  provide: {
    chart: [Selection, Legend, ColumnSeries, Category, ScatterSeries, Highlight]
  },
  methods: {
    indexChange: function (args) {
      this.$refs.chart.ej2Instances.selectionMode = selmode.value;
      var checkBox = document.getElementById("highlightCheckbox");
      if (checkBox.checked) {
        this.$refs.chart.ej2Instances.highlightMode = selmode.value;
      } else {
        this.$refs.chart.ej2Instances.highlightMode = "None";
      }
      this.$refs.chart.ej2Instances.dataBind();
    },
    check: function (e) {
      this.$refs.chart.ej2Instances.isMultiSelect = e.target.checked;
      this.$refs.chart.ej2Instances.dataBind();
    },
    selectionChange: function (e) {
      this.$refs.chart.ej2Instances.selectionPattern = patternMode.value;
      this.$refs.chart.ej2Instances.dataBind();
    },
    colorChange: function (args) {
      this.$refs.chart.ej2Instances.highlightColor = args.currentValue.hex;
      this.$refs.chart.ej2Instances.dataBind();
    },
    highlightPatternChange: function (e) {
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
};
</script>