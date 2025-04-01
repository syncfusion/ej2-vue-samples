<template>
<div class="control-section">
  <div class="control-section col-md-8">
    <div align="center">
      <ejs-bulletchart
        ref='bulletchart'
        id="orientation"
        :tooltip="tooltip"
        :dataSource="dataSource"
        valueField="value"
        targetField="target"
        :categoryField='categoryField'
        :animation="animation"
        :width="width"
        :margin='margin'
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        :ranges='ranges'
        :height='height'
        :orientation='orientation'
        :load='load'
        titlePosition='Top'
        labelFormat="{value}%"
      >
        <e-bullet-range-collection>
          <e-bullet-range end="20"></e-bullet-range>
          <e-bullet-range end="25"></e-bullet-range>
          <e-bullet-range end="30"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
    </div>
  </div>
  <div class="col-md-4 property-section">
    <div class="property-panel-header">Properties</div>
    <table title="Properties" style="width: 100%; height: 100%;">
        <tr>
          <td style="width: 60%">
                <div>Orientation</div>
          </td>
          <td style="width: 40%;">
            <ejs-dropdownlist
              id="featureType"
              :change="typeChange"
              :dataSource="typeData"
              value='Vertical'
            ></ejs-dropdownlist>
          </td>
        </tr>
    </table>
  </div>
<div id="action-description">
<p>
    This sample illustrates a bullet chart with vertical orientation to compare different values.
</p>
</div>
<div id="description">
<p>
    Tooltip is enabled in this example, to see the tooltip in action, hover a feature bar or comparative bar on the bullet chart.
</p>
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
  OrientationType,
  IBulletLegendRenderEventArgs
} from "@syncfusion/ej2-vue-charts";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

import { loadBulletChartTheme } from "./theme-color";
let theme = loadBulletChartTheme();

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent,
    'e-bullet-range-collection': BulletRangeCollectionDirective,
    'e-bullet-range': BulletRangeDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function() {
    return {
        width: '19%',
        tooltip: { enable: true },
        dataSource: [{ value: 23, target: 27, name: 'Product A' }],
        categoryField: 'name',
        animation: { enable: false },
        margin: { left: Browser.isDevice ? 10 : 10 },
        height: '400',
        minimum: 0, maximum: 30, interval: 5,
        orientation: 'Vertical',
        ranges: [{ end: 20 },
        { end: 25 },
        { end: 30 }
        ],
        typeData: ['Vertical', 'Horizontal'],
        load: function (args) {
             loadBulletChartTheme(args);
        }
    };
  },

  provide: {
    bulletChart: [BulletTooltip, OrientationType]
  },
  methods: {
    typeChange: function(args) {
            if (args.value === 'Horizontal') {
                this.$refs.bulletchart.ej2Instances.width = '80%';
                this.$refs.bulletchart.ej2Instances.height = '100px';
              } else {
                this.$refs.bulletchart.ej2Instances.width = '19%';
                this.$refs.bulletchart.ej2Instances.height = '400px';
            }
      this.$refs.bulletchart.ej2Instances.orientation = args.value;
      this.$refs.bulletchart.ej2Instances.refresh();
    },
  }
};
</script>
