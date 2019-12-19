<template>
  <div class="control-section">
    <div align="center">
      <ejs-bulletchart
        id="tooltip"
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
        title="Revenue YTD"
        subtitle="US $ in Thousands"
        labelFormat="${value}K"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="30" color="#599C20"></e-bullet-range>
          <e-bullet-range end="60" color="#EFC820"></e-bullet-range>
          <e-bullet-range end="100" color="#CA4218"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>

    <div id="action-description">
      <p>This sample illustrates bullet chart with tooltip template.</p>
    </div>
    <div id="description">
      <p>Tooltip is enabled in this example, to see the tooltip in action, hover a feature bar or comparative bar on the bullet chart.</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { BulletChartPlugin, BulletTooltip } from "@syncfusion/ej2-vue-charts";
import TooltipTemplate from "./tooltip-template.vue";
Vue.use(BulletChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
  .replace(/-dark/i, "Dark")
  .replace(/light/i, "Light")
  .replace(/contrast/i, "Contrast");

let tooltipTemp = function() {
  return { template: TooltipTemplate };
};

export default Vue.extend({
  data: function() {
    return {
      width: Browser.isDevice ? "100%" : "70%",
      theme: theme,
      tooltip: {
        enable: true,
        template: tooltipTemp
      },
      data: [{ value: 70, target: 50 }],
      animation: { enable: false },
      minimum: 0,
      maximum: 100,
      interval: 10,
    };
  },
  provide: {
    bulletChart: [BulletTooltip]
  },
  methods: {}
});
</script>