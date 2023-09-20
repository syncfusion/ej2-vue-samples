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
        <template v-slot:TooltipTemplate="{data}">
          <div id="wrap">
            <table style="width:100%; background-color: #ffffff; border-spacing: 0px; border-collapse:separate; border: 1px solid grey; border-radius:10px; padding-top: 5px; padding-bottom:5px">
              <tr>
                <td style="font-weight:bold; color:black; padding-left: 5px;padding-top: 2px;padding-bottom: 2px;">Sales</td>
              </tr>
              <tr>
                <td style="padding-left: 5px; color:black; padding-right: 5px; padding-bottom: 2px;">Target : {{data.target}}K</td>
              </tr>
              <tr>
                <td style="padding-left: 5px; color:black; padding-right: 5px">Current : {{data.value}}</td>
              </tr>
            </table>
          </div>
        </template>
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
import { Browser } from "@syncfusion/ej2-base";
import { BulletChartComponent, BulletRangeDirective, BulletRangeCollectionDirective, BulletTooltip } from "@syncfusion/ej2-vue-charts";

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
      width: Browser.isDevice ? "100%" : "70%",
      theme: theme,
      tooltip: {
        enable: true,
        template: "TooltipTemplate"
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
};
</script>