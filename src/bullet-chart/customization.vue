<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
      <ejs-bulletchart
        ref="bulletchart"
        id="color"
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
        title="Package Downloads"
        subtitle="in Thousands"
        :minorTickLines="minorTickLines"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="1.5" color="#599C20"></e-bullet-range>
          <e-bullet-range end="2.5" color="#EFC820"></e-bullet-range>
          <e-bullet-range end="3" color="#CA4218"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>
    <div class="col-md-4 property-section">
      <div class="property-panel-header">Properties</div>
      <table title="Properties" style="width: 100%; height: 100%;">
        <tr>
          <td style="width: 60%">
            <div class="prop-text">Start Color:</div>
          </td>
          <td style="width: 40%;">
            <div align="center">
              <ejs-colorpicker id="startColor" value="#599C20" :mode="mode" :change="colorChange1"></ejs-colorpicker>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 60%">
            <div class="prop-text">Middle Color:</div>
          </td>
          <td style="width: 40%;">
            <div align="center">
              <ejs-colorpicker id="middleColor" value="#EFC820" :mode="mode" :change="colorChange2"></ejs-colorpicker>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 60%">
            <div class="prop-text">End Color:</div>
          </td>
          <td style="width: 40%;">
            <div align="center">
              <ejs-colorpicker id="endColor" value="#CA4218" :mode="mode" :change="colorChange3"></ejs-colorpicker>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 60%">
            <div class="prop-text">Use Range Color:</div>
          </td>
          <td style="width: 40%;">
            <div align="center">
              <ejs-checkbox id="range" :checked="checked" :change="buttonChange1"></ejs-checkbox>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 60%">
            <div class="prop-text">Opposed position:</div>
          </td>
          <td style="width: 40%;">
            <div align="center">
              <ejs-checkbox id="position" :checked="checked" :change="buttonChange2"></ejs-checkbox>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div id="action-description">
      <p>This sample illustrates a bullet chart with with different customization for ranges and labels in bullet chart.</p>
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

.prop-text {
  font-size: small;
}

tr {
  height: 50px !important;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { BulletChartPlugin, BulletTooltip } from "@syncfusion/ej2-vue-charts";
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(BulletChartPlugin);
Vue.use(ColorPickerPlugin);
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
      width: "100%",
      theme: theme,
      mode: "Palette",
      tooltip: {
        enable: true
      },
      data: [{ value: 1.7, target: 2.5 }],
      animation: { enable: false },
      minimum: 0,
      maximum: 3,
      interval: 0.5,
      minorTickLines: { width: 0 },
      checked: false
    };
  },
  provide: {
    bulletChart: [BulletTooltip]
  },
  methods: {
    colorChange1: function(args) {
      this.$refs.bulletchart.ej2Instances.ranges[0].color =
        args.currentValue.hex;
      this.$refs.bulletchart.ej2Instances.refresh();
    },

    colorChange2: function(args) {
      this.$refs.bulletchart.ej2Instances.ranges[1].color =
        args.currentValue.hex;
      this.$refs.bulletchart.ej2Instances.refresh();
    },

    colorChange3: function(args) {
      this.$refs.bulletchart.ej2Instances.ranges[2].color =
        args.currentValue.hex;
      this.$refs.bulletchart.ej2Instances.refresh();
    },

    buttonChange1: function(args) {
      this.$refs.bulletchart.ej2Instances.majorTickLines.useRangeColor =
        args.checked;
      this.$refs.bulletchart.ej2Instances.minorTickLines.useRangeColor =
        args.checked;
      this.$refs.bulletchart.ej2Instances.labelStyle.useRangeColor =
        args.checked;
      this.$refs.bulletchart.ej2Instances.refresh();
    },

    buttonChange2: function(args) {
      this.$refs.bulletchart.ej2Instances.opposedPosition = args.checked;
      this.$refs.bulletchart.ej2Instances.refresh();
    }
  }
});
</script>