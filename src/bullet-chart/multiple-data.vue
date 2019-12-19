<template>
  <div class="control-section">
    <div align="center">
      <ejs-bulletchart
        id="localdata"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data"
        valueField="completedStories"
        targetField="requiredStories"
        valueFill="#304560"
        targetColor="#304560"
        categoryField="name"
        :animation="animation"
        :width="width"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Sprint Planning"
        subtitle="Estimated in story points"
        titlePosition="Top"
        :height="height"
        :minorTickLines="minorTickLines"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="25" color="#DBE7F3" opacity="1"></e-bullet-range>
          <e-bullet-range end="37" color="#BBCEE7" opacity="1"></e-bullet-range>
          <e-bullet-range end="45" color="#96B2D7" opacity="1"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>

    <div id="action-description">
      <p>This sample illustrates a bullet chart with multiple data to compare different values.</p>
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

Vue.use(BulletChartPlugin);

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
      data: [
        {
          requiredStories: 20,
          completedStories: 25,
          name: "David"
        },
        {
          requiredStories: 25,
          completedStories: 20,
          name: "Asif"
        },
        {
          requiredStories: 15,
          completedStories: 10,
          name: "Thomas"
        },
        {
          requiredStories: 40,
          completedStories: 39,
          name: "Rohit"
        },
        {
          requiredStories: 35,
          completedStories: 40,
          name: "Virat"
        },
        {
          requiredStories: 28,
          completedStories: 25,
          name: "Jude"
        },
        {
          requiredStories: 10,
          completedStories: 18,
          name: "Warner"
        },
        {
          requiredStories: 30,
          completedStories: 28,
          name: "Malik"
        }
      ],
      animation: { enable: false },
      minimum: 5,
      maximum: 45,
      interval: 5,
      height: "400",
      minorTickLines: { width: 0 }
    };
  },

  provide: {
    bulletChart: [BulletTooltip]
  },
  methods: {}
});
</script>