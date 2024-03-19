<template>
  <div class="control-section">
    <div align="center">
      <ejs-bulletchart
        ref="bulletchart"
        id="legend"
        :width="width"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data"
        valueField="value"
        targetField="target"
        :animation="animation"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Package Downloads"
        subtitle="in Thousands"
        :legendSettings="legendSettings"
        height="160"
        labelFormat="{value}K"
        :legendRender="legendRender"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="8" color="#CA4218" name="Poor"></e-bullet-range>
          <e-bullet-range end="18" color="#EFC820" name="Avg"></e-bullet-range>
          <e-bullet-range end="30" color="#599C20" name="Good"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>
 
    <div id="action-description">
      <p>This sample illustrates a bullet chart with legend. Legend is used to know what the colors and shapes represent in bullet chart.</p>
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
  BulletChartComponent,
  BulletRangeCollectionDirective,
  BulletRangeDirective,
  BulletTooltip,
  BulletChartLegend,
  IBulletLegendRenderEventArgs
} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
  .replace(/-dark/i, "Dark")
  .replace(/light/i, "Light")
  .replace(/contrast/i, "Contrast");

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent,
    'e-bullet-range-collection': BulletRangeCollectionDirective,
    'e-bullet-range': BulletRangeDirective
  },
  data: function() {
    return {
      theme: theme,
      tooltip: {
        enable: true
      },
      width: Browser.isDevice ? "100%" : "70%",
      data: [{ value: 25, target: [20, 26, 28] }],
      animation: { enable: false },
      minimum: 0,
      maximum: 30,
      interval: 5,
      height: "160",
      legendSettings: { visible: true }
    };
  },

  provide: {
    bulletChart: [BulletTooltip, BulletChartLegend]
  },
  methods: {
    legendRender: function(args) {
      if (args.text === "Target_0") {
        args.text = "Previous Target";
      }
      if (args.text === "Target_1") {
        args.text = "Current Target";
      }
      if (args.text === "Target_2") {
        args.text = "Future Target";
      }
    }
  }
};
</script>
