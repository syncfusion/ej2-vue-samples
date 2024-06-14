<template>
  <div class="control-section">
    <div align="center">
      <ejs-bulletchart
        id="rtl"
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
        subtitle="$ in Thousands"
        :titleStyle="titleStyle"
        labelFormat="${value}K"
        :enableRtl="enableRtl"
        orientation="Horizontal"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="150"></e-bullet-range>
          <e-bullet-range end="250"></e-bullet-range>
          <e-bullet-range end="300"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>

    <div id="action-description">
      <p>This sample illustrates bullet chart with diferent mode of rendering such as right to left and left to right.</p>
    </div>
    <div id="description">
      <p>Tooltip is enabled in this example, to see the tooltip in action, hover a feature bar or comparative bar on the bullet chart.</p>
    </div>
  </div>
</template>

<script>
import { Browser } from "@syncfusion/ej2-base";
import { BulletChartComponent, BulletRangeDirective, BulletRangeCollectionDirective, BulletTooltip } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
  .replace(/-dark/i, "Dark")
  .replace(/light/i, "Light")
  .replace(/contrast/i, "Contrast")
  .replace(/-highContrast/i, "HighContrast");

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent,
    'e-bullet-range-collection': BulletRangeCollectionDirective,
    'e-bullet-range': BulletRangeDirective
  },
  data: function() {
    return {
      width: Browser.isDevice ? "100%" : "80%",
      theme: theme,
      tooltip: {
        enable: true
      },
      enableRtl: true,
      data: [{ value: 270, target: 250 }],
      animation: { enable: false },
      minimum: 0,
      maximum: 300,
      interval: 50,
      minorTickLines: { width: 0 },
      titleStyle: { textAlignment: "Center" }
    };
  },

  provide: {
    bulletChart: [BulletTooltip]
  },
  methods: {}
};
</script>