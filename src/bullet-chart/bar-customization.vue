<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
      <ejs-bulletchart
        ref="bulletchart"
        id="targetbar"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data"
        valueField="value"
        targetField="target"
        :animation="animation"
        :width="width"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="New Customers"
        subtitle="in Thousands"
        :titlePosition="titlePosition"
        :titleStyle="titleStyle"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="150"></e-bullet-range>
          <e-bullet-range end="250"></e-bullet-range>
          <e-bullet-range end="300"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>
    <div class="col-md-4 property-section">
      <div class="property-panel-header">Properties</div>
      <table title="Properties" style="width: 100%; height: 100%;">
        <tr>
          <td style="width: 60%">
            <div class="prop-text">Actual Value:</div>
          </td>
          <td style="width: 40%">
            <ejs-slider
              id="actualValue"
              :value="value1"
              :min="min"
              :step="step"
              :max="max"
              :tooltip="sliderTooltip"
              :change="actualValueChange"
            ></ejs-slider>
          </td>
        </tr>
        <tr>
          <td style="width: 60%">
            <div class="prop-text">Target Value:</div>
          </td>
          <td style="width: 40%;">
            <ejs-slider
              id="targetValue"
              :value="value2"
              :min="min"
              :step="step"
              :max="max"
              :tooltip="sliderTooltip"
              :change="targetValueChange"
            ></ejs-slider>
          </td>
        </tr>
        <tr style="height: 50px">
          <td style="width: 40%">
            <div>Feature Bar Type:</div>
          </td>
          <td style="width: 60%;">
            <ejs-dropdownlist
              id="featureType"
              :change="typeChange"
              :dataSource="typeData"
              index="0"
              width="120"
            ></ejs-dropdownlist>
          </td>
        </tr>
        <tr style="height: 50px">
          <td style="width: 60%">
            <div>Feature Bar Color:</div>
          </td>
          <td style="width: 40%;">
            <ejs-colorpicker id="barColor" :value="colorValue" :mode="mode" :change="colorChange1"></ejs-colorpicker>
          </td>
        </tr>
        <tr style="height: 50px">
          <td style="width: 60%">
            <div>Target Color:</div>
          </td>
          <td style="width: 40%;">
            <ejs-colorpicker
              id="targetColor"
              :value="colorValue"
              :mode="mode"
              :change="colorChange2"
            ></ejs-colorpicker>
          </td>
        </tr>
      </table>
    </div>
    <div id="action-description">
      <p>This sample illustrates a customization of feature bar and comparative bar type in terms of color and width.</p>
    </div>
    <div id="description">
      <p>Tooltip is enabled in this example, to see the tooltip in action, hover a feature bar or comparative bar on the bullet chart.</p>
    </div>
  </div>
</template>
<style>
#control-container {
  padding: 0px !important;
}
#actualValue > * {
  padding: 0px !important;
}
#targetValue > * {
  padding: 0px !important;
}
label {
  height: 32px !important;
}
.property-text {
  font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif" !important;
  font-size: 13px !important;
  font-weight: 400 !important;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { BulletChartPlugin, BulletTooltip } from "@syncfusion/ej2-vue-charts";
import { ColorPickerPlugin, SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(BulletChartPlugin);
Vue.use(ColorPickerPlugin);
Vue.use(SliderPlugin);
Vue.use(CheckBoxPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
  .replace(/-dark/i, "Dark")
  .replace(/light/i, "Light")
  .replace(/contrast/i, "Contrast");

export default Vue.extend({
  data: function() {
    return {
      width: Browser.isDevice ? "100%" : "80%",
      theme: theme,
      tooltip: {
        enable: true
      },
      data: [{ value: 270, target: 250 }],
      animation: { enable: false },
      minimum: 0,
      maximum: 300,
      interval: 50,
      titleStyle: { textAlignment: "Center" },
      titlePosition: Browser.isDevice ? "Top" : "Left",
      sliderTooltip: { isVisible: true },
      typeData: ["Rect", "Dot"],
      colorValue: "#000000",
      mode: "Palette",
      value1: 270,
      min: 0,
      step: 10,
      max: 300,
      value2: 250,
      type: "MinRange"
    };
  },

  provide: {
    bulletChart: [BulletTooltip]
  },
  methods: {
    actualValueChange: function(args) {
      this.$refs.bulletchart.ej2Instances.dataSource[0].value = args.value;
      this.$refs.bulletchart.ej2Instances.refresh();
    },
    targetValueChange: function(args) {
      this.$refs.bulletchart.ej2Instances.dataSource[0].target = args.value;
      this.$refs.bulletchart.ej2Instances.refresh();
    },
    typeChange: function(args) {
      this.$refs.bulletchart.ej2Instances.type = args.value;
      this.$refs.bulletchart.ej2Instances.refresh();
    },
    colorChange1: function(args) {
      this.$refs.bulletchart.ej2Instances.valueFill = args.currentValue.hex;
      this.$refs.bulletchart.ej2Instances.refresh();
    },
    colorChange2: function(args) {
      this.$refs.bulletchart.ej2Instances.targetColor = args.currentValue.hex;
      this.$refs.bulletchart.ej2Instances.refresh();
    }
  }
});
</script>