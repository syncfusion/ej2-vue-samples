<template>
  <div class="control-section">
    <div align="center">
      <ejs-bulletchart
        id="revenue"
        :margin="margin1"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data1"
        valueField="value"
        targetField="target"
        :animation="animation"
        :width="width"
        :minimum="minimum1"
        :maximum="maximum1"
        :interval="interval1"
        title="Revenue"
        labelFormat="${value}"
        subtitle="U.S. $ (1,000s)"
        :titlePosition="titlePosition"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="150"></e-bullet-range>
          <e-bullet-range end="250"></e-bullet-range>
          <e-bullet-range end="300"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>

    <div align="center">
      <ejs-bulletchart
        id="profit"
        :margin="margin2"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data2"
        valueField="value"
        targetField="target"
        :animation="animation"
        :width="width"
        :minimum="minimum2"
        :maximum="maximum2"
        :interval="interval2"
        title="Profit"
        labelFormat="{value}%"
        subtitle="%"
        :titlePosition="titlePosition"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="20"></e-bullet-range>
          <e-bullet-range end="25"></e-bullet-range>
          <e-bullet-range end="30"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>

    <div align="center">
      <ejs-bulletchart
        id="order"
        :margin="margin3"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data3"
        valueField="value"
        targetField="target"
        :animation="animation"
        :width="width"
        :minimum="minimum3"
        :maximum="maximum3"
        :interval="interval3"
        title="Avg Order Size"
        labelFormat="${value}"
        subtitle="U.S. $"
        :titlePosition="titlePosition"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="350"></e-bullet-range>
          <e-bullet-range end="500"></e-bullet-range>
          <e-bullet-range end="600"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>

    <div align="center">
      <ejs-bulletchart
        id="customer"
        :margin="margin4"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data4"
        valueField="value"
        targetField="target"
        :animation="animation"
        :width="width"
        :minimum="minimum4"
        :maximum="maximum4"
        :interval="interval4"
        enableGroupSeparator={true}
        title="New Customers"
        subtitle="Count"
        :titlePosition="titlePosition"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="1700"></e-bullet-range>
          <e-bullet-range end="2000"></e-bullet-range>
          <e-bullet-range end="2500"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>

    <div align="center">
      <ejs-bulletchart
        id="rating"
        :margin="margin5"
        :theme="theme"
        :tooltip="tooltip"
        :dataSource="data5"
        valueField="value"
        targetField="target"
        :animation="animation"
        :width="width"
        :minimum="minimum5"
        :maximum="maximum5"
        :interval="interval5"
        title="Cust Satisfication"
        subtitle="Top Rating of 5"
        :titlePosition="titlePosition"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="3.7"></e-bullet-range>
          <e-bullet-range end="4.2"></e-bullet-range>
          <e-bullet-range end="5"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>
    <div id="action-description">
      <p>This sample illustrates a default bullet chart to compare the feature (value) bar with comparative (target) bar. It includes variety of configurations to change the look and feel of the chart.</p>
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
      margin1: { left: Browser.isDevice ? 10 : 35 },
      margin2: { left: Browser.isDevice ? 10 : 80 },
      margin3: { left: Browser.isDevice ? 10 : 22 }, 
      margin4: { left: Browser.isDevice ? 10 : 22 },
      margin5: { left: Browser.isDevice ? 10 : 8 },
      theme: theme,
      titlePosition: Browser.isDevice ? 'Top' : 'Left',
      tooltip: {
        enable: true
      },
      data1: [{ value: 270, target: 250 }],
      data2: [{ value: 23, target: 27 }],
      data3: [{ value: 350, target: 550 }],
      data4: [{ value: 1600, target: 2100 }],
      data5: [{ value: 4.9, target: 4 }],
      animation: { enable: false },
      minimum1: 0,
      maximum1: 300,
      interval1: 50,
      minimum2: 0,
      maximum2: 30,
      interval2: 5,
      minimum3: 0,
      maximum3: 600,
      interval3: 100,
      minimum4: 0,
      maximum4: 2500,
      interval4: 500,
      minimum5: 0,
      maximum5: 5,
      interval5: 1
    };
  },

  provide: {
    bulletChart: [BulletTooltip]
  },
  methods: {}
});
</script>