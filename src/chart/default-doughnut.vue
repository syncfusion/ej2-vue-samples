<template>
  <div class="control-section">
    <div class="control-section">
      <ejs-accumulationchart
        id="container"
        ref="pie"
        style="display:block;"
        :theme="theme"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
        :title="title"
        :textRender="onTextRender"
        :animationComplete="onAnimationComplete"
        selectionMode="Point"
        :loaded="loaded"
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            name="Revenue"
            :dataSource="data"
            xName="x"
            yName="y"
            :startAngle="startAngle"
            :endAngle="endAngle"
            innerRadius="40%"
            :dataLabel="dataLabel"
          ></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
      <div id="center_title" style="visibility: hidden; position: absolute;">Expenses in Year
      </div>
    </div>
    <div id="action-description">
      <p>This sample illustrates an educational institute’s revenue by using the pie with legend series. The legend will be displayed at right side of the chart.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render doughnut chart. You can use
        <code>radius</code> and
        <code>innerRadius</code> properties to render the doughnut and also use
        <code>border</code>,
        <code>fill</code> properties to customize the point.
        <code>dataLabel</code> is used to represent individual data and its value.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        AccumulationChart component features are segregated into individual feature-wise modules. To use legend, we need to Inject
        <code>AccumulationLegend</code> into the
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
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
  AccumulationSelection,
  Selection
} from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);
let count = 0;
let datasource1 = [
  { x: "Net-tution and Fees", y: 10 },
  { x: "Self-supporting Operations", y: 10 },
  { x: "Private Gifts", y: 13 },
  { x: "All Other", y: 14 },
  { x: "Local Revenue", y: 9 },
  { x: "State Revenue", y: 13 },
  { x: "Federal Revenue", y: 8 }
];
let datasource2 = [
  { x: "Net-tution and Fees", y: 120 },
  { x: "Self-supporting Operations", y: 31 },
  { x: "Private Gifts", y: 6 },
  { x: "All Other", y: 12 },
  { x: "Local Revenue", y: 25 },
  { x: "State Revenue", y: 11 },
  { x: "Federal Revenue", y: 12 }
];
let datasource3 = [
  { x: "Net-tution and Fees", y: 6 },
  { x: "Self-supporting Operations", y: 22 },
  { x: "Private Gifts", y: 11 },
  { x: "All Other", y: 15 },
  { x: "Local Revenue", y: 13 },
  { x: "State Revenue", y: 10 },
  { x: "Federal Revenue", y: 8 }
];
let datasource4 = [
  { x: "Net-tution and Fees", y: 15 },
  { x: "Self-supporting Operations", y: 10 },
  { x: "Private Gifts", y: 18 },
  { x: "All Other", y: 20 },
  { x: "Local Revenue", y: 30 },
  { x: "State Revenue", y: 20 },
  { x: "Federal Revenue", y: 25 }
];
let datasource5 = [
  { x: "Net-tution and Fees", y: 21 },
  { x: "Self-supporting Operations", y: 10 },
  { x: "Private Gifts", y: 15 },
  { x: "All Other", y: 15 },
  { x: "Local Revenue", y: 11 },
  { x: "State Revenue", y: 20 },
  { x: "Federal Revenue", y: 60 }
];
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
        { x: "Net-tution and Fees", y: 21, text: "21%" },
        { x: "Self-supporting Operations", y: 21, text: "21%" },
        { x: "Private Gifts", y: 8, text: "8%" },
        { x: "All Other", y: 8, text: "8%" },
        { x: "Local Revenue", y: 4, text: "4%" },
        { x: "State Revenue", y: 21, text: "21%" },
        { x: "Federal Revenue", y: 16, text: "16%" }
      ],
      legendSettings: {
        visible: true,
        toggleVisibility: false,
        position: "Right",
        height: "28%",
        width: "44%"
      },
      dataLabel: {
        visible: true,
        position: "Inside",
        name: "${point.y}",
        font: {
          color: "white",
          fontWeight: "Bold",
          size: "14px"
        }
      },
      startAngle: 0,
      endAngle: 360,
      tooltip: {
        enable: false,
        header: "<b>${point.x}</b>",
        format: "Composition: <b>${point.y}%</b>"
      },
      title: "Education Institutional Revenue"
    };
  },
  methods: {
    onAnimationComplete: function(args) {
      let centerTitle = document.getElementById("center_title");
      centerTitle.style.fontSize = this.getFontSize(
        args.accumulation.initialClipRect.width
      );
      let rect = centerTitle.getBoundingClientRect();
      centerTitle.style.top = (args.accumulation.origin.y + args.accumulation.element.offsetTop - (rect.height / 2)) + 'px';
      centerTitle.style.left = (args.accumulation.origin.x + args.accumulation.element.offsetLeft - (rect.width / 2)) + 'px';
      centerTitle.style.visibility = "visible";
      let points = args.accumulation.visibleSeries[0].points;
      for (let point of points) {
        if (point.labelPosition === "Outside" && point.labelVisible) {
          let label = document.getElementById(
            "container_datalabel_Series_0_text_" + point.index
          );
          label.setAttribute("fill", "black");
        }
      }
    },
    getFontSize: function(width) {
      if (width > 300) {
        return "13px";
      } else if (width > 250) {
        return "8px";
      } else {
        return "6px";
      }
    },
    onTextRender: function(args) {
      args.series.dataLabel.font.size = this.getFontSize(
        this.$refs.pie.ej2Instances.initialClipRect.width
      );
       args.text = args.text + '%';
    },
    loaded: function(args) {
      this.$refs.pie.ej2Instances.loaded = null;
      setInterval(() => {
        if (count === 0) {
          this.$refs.pie.ej2Instances.series[0].dataSource = datasource1;
          this.$refs.pie.ej2Instances.animate();
          count++;
        } else if (count === 1) {
          this.$refs.pie.ej2Instances.series[0].dataSource = datasource2;
          this.$refs.pie.ej2Instances.animate();
          count++;
        } else if (count === 2) {
          this.$refs.pie.ej2Instances.series[0].dataSource = datasource3;
          this.$refs.pie.ej2Instances.animate();
          count++;
        } else if (count === 3) {
          this.$refs.pie.ej2Instances.series[0].dataSource = datasource4;
          this.$refs.pie.ej2Instances.animate();
          count++;
        } else if (count === 4) {
          this.$refs.pie.ej2Instances.series[0].dataSource = datasource5;
          this.$refs.pie.ej2Instances.animate();
          count = 0;
        }
      }, 3000);
    }
  },
  provide: {
    accumulationchart: [
      AccumulationLegend,
      PieSeries,
      AccumulationDataLabel,
      AccumulationTooltip,
      AccumulationSelection,
      Selection
    ]
  }
});
</script>