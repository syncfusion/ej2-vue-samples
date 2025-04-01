<template>
<div>
<div class="control-section">
   <h1 id="days" style="font-family: Segoe UI; font-weight: 500; font-size: 15px; font-style: normal; margin-top: 10px;" align="center">Multi Level Labels</h1>
    <div align="center">
         <ejs-rangenavigator style='display:block' align='center' id='containerMulitiLvl' :value='value' animationDuration=500
         labelPosition ='Outside' valueType='DateTime' :tooltip='tooltip' intervalType='Quarter' enableGrouping=true :width='width'
          groupBy='Years' :dataSource='dataSource' xName='x' yName='y' :theme='theme'>
         </ejs-rangenavigator>
    </div>
</div>
<div id="action-description">
    <p>
        Axis labels are placed based on the values of the start and end ranges. You can add higher level of labels to the range navigator using multilevel labels.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to group the axis labels. Here the interval for the second level labels can be customized using <code>groupBy</code>
    </p>
    <br>
    
</div>
</div>
</template>
<style scoped>
#control-containerMulitiLvl {
  padding: 0px !important;
}

#containerMulitiLvl {
  transform: translateY(25%);
}
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { RangeNavigatorComponent, DateTime, RangeTooltip } from "@syncfusion/ej2-vue-charts";

import {  loadRangeNavigatorTheme } from "./theme-color";

let theme = loadRangeNavigatorTheme();

export default {
  components: {
    'ejs-rangenavigator': RangeNavigatorComponent
  },
  data: function() {
    let points = [];
    let value = 0;
    let point = {};
    for (let j = 1; j < 1090; j++) {
      value += Math.random() * 10 - 5;
      value = value < 0 ? Math.abs(value) : value;
      point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
      points.push(point);
    }
    return {
      tooltip: { enable: true, displayMode: "Always" },
      value: [new Date('2001-01-01'), new Date('2002-01-01')],
      dataSource: points,
      width: Browser.isDevice ? "100%" : "80%",
      theme: theme
    };
  },
  provide: {
    rangeNavigator: [DateTime, RangeTooltip]
  },
  methods: {
   }
};
</script>