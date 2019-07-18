<template>
  <div class="control-section">
    <div class="col-md-9 control-section">
      <ejs-accumulationchart
        ref="funnel"
        :theme="theme"
        id="container"
        style="display:block;  width: 92%"
        :tooltip="tooltip"
        :title="title"
        :legendSettings="legendSettings"
        :resized="onChartResized"
        :enableAnimation="false"
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            :dataSource="data"
            xName="x"
            yName="y"
            :neckWidth="neckWidth"
            :neckHeight="neckHeight"
            :gapRatio="gapRatio"
            :emptyPointSettings="emptyPointSettings"
            height="80%"
            width="60%"
            :explode="explode"
            :dataLabel="dataLabel"
            type="Funnel"
          ></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>
    <div class="col-md-3 property-section">
      <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
        <tr style="height: 50px">
          <td style="width: 30%">
            <div>Neck Width</div>
          </td>
          <td style="width: 70%;">
            <div data-role="rangeslider">
              <input
                type="range"
                name="range-min"
                value="15"
                min="0"
                max="45"
                @touchmove="funnelNeckWidth"
                @pointermove="funnelNeckWidth"
                @change="funnelNeckWidth"
                autocomplete="off"
                id="funnelNeckWidth"
                style="width:90%"
              >
            </div>
          </td>
          <td style="width: 70%;">
            <div data-role="rangeslider">
              <p id="neckWidth" style="font-weight: normal;padding-top:10px">15%</p>
            </div>
          </td>
        </tr>
        <tr style="height: 50px">
          <td style="width: 30%">
            <div>Neck Height</div>
          </td>
          <td style="width: 70%;">
            <div data-role="rangeslider">
              <input
                type="range"
                name="range-min"
                id="funnelNeckHeight"
                value="18"
                min="0"
                max="50"
                @touchmove="funnelNeckHeight"
                @pointermove="funnelNeckHeight"
                @change="funnelNeckHeight"
                autocomplete="off"
                style="width:90%"
              >
            </div>
          </td>
          <td style="width: 70%;">
            <div data-role="rangeslider">
              <p id="neckHeight" style="font-weight: normal;padding-top:10px">18%</p>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div id="action-description">
      <p>This sample visualizes the data about population of different countries by using default funnel series. Datalabel shows the Information about the points and are arranged smartly.</p>
    </div>
    <div id="description">
      <p>
         In this example, you can see how to render funnel chart.<code>dataLabel</code> is used to represent individual data and its value, here the labels are arranged smartly to avoid the overlap
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use Funnel feature, we need to inject
        <code>FunnelSeries</code> into the
        <code>provide</code> option.
      </p>
    </div>
  </div>
</template>
<style>
.control-section {
  min-height: 450px;
}
</style>
<script>
import Vue from "vue";
import {
  AccumulationChartPlugin,
  AccumulationTooltip,
  FunnelSeries,
  AccumulationLegend,
  AccumulationDataLabel
} from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      data: [
        { x: "China", y: 1409517397, text: "China" },
        { x: "India", y: 1339180127, text: "India" },
        { x: "United States", y: 324459463, text: "United States" },
        { x: "Indonesia", y: 263991379, text: "Indonesia" },
        { x: "Brazil", y: 209288278, text: "Brazil" },
        { x: "Pakistan", y: 197015955, text: "Pakistan" },
        { x: "Nigeria", y: 190886311, text: "Nigeria" },
        { x: "Bangladesh", y: 164669751, text: "Bangladesh" },
        { x: "Russia", y: 143989754, text: "Russia" },
        { x: "Mexico", y: 129163276, text: "Mexico" },
        { x: "Japan", y: 127484450, text: " Japan" },
        { x: "Ethiopia", y: 104957438, text: "Ethiopia" },
        { x: "Philippines", y: 104918090, text: "Philippines" },
        { x: "Egypt", y: 97553151, text: "Egypt" },
        { x: "Vietnam", y: 95540800, text: "Vietnam" },
        { x: "Germany", y: 82114224, text: "Germany" }
      ],
      neckWidth: "15%",
      neckHeight: "18%",
      xName: "x",
      yName: "y",
      dataLabel: {
        visible: true,
        position: "Outside",
        connectorStyle: { length: "6%" },
        name: "text"
      },
      explode: false,
      legendSettings: {
        visible: false
      },

      tooltip: { enable: true, format: "${point.x} : <b>${point.y}</b>" },

      title: "Top populated countries in 2017",
    };
  },
  provide: {
    accumulationchart: [
      AccumulationLegend,
      FunnelSeries,
      AccumulationDataLabel,
      AccumulationTooltip
    ]
  },
  methods: {
    funnelNeckWidth: function(e) {
      let value = document.getElementById("funnelNeckWidth").value;
      this.neckWidth = value + "%";
      document.getElementById("neckWidth").innerHTML = value + "%";
    },
    funnelNeckHeight: function(e) {
      let value = document.getElementById("funnelNeckHeight").value;
      this.neckHeight = value + "%";
      document.getElementById("neckHeight").innerHTML = value + "%";
    },
    onChartResized: function(args) {
      let bounds = document.getElementById("container").getBoundingClientRect();
      if (bounds.width < bounds.height) {
        this.width = "80%";
        this.height = "70%";
      } else {
        this.width = "60%";
        this.height = "80%";
      }
    }
  },
  updated: function() {
    this.$nextTick(function() {
      this.$refs.funnel.ej2Instances.refresh();
      this.$refs.funnel.ej2Instances.removeSvg();
      this.$refs.funnel.ej2Instances.refreshSeries();
      this.$refs.funnel.ej2Instances.refreshChart();
    });
  }
});
</script>