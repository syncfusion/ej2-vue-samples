<template>
  <div>
    <div class="col-lg-8 orientation control-section">
      <div class="content-wrapper orientation">
        <table class="slider_table">
          <tbody>
            <tr>
              <td>
                <div class="sliderwrap">
                  <ejs-slider
                    id="default"
                    ref="defaultSlider"
                    v-model="value"
                    :orientation="orientation"
                  ></ejs-slider>
                </div>
              </td>
              <td>
                <div class="sliderwrap">
                  <ejs-slider
                    id="minrange"
                    ref="minSlider"
                    v-model="minValue"
                    :type="mintype"
                    :orientation="orientation"
                  ></ejs-slider>
                </div>
              </td>
              <td>
                <div class="sliderwrap">
                  <ejs-slider
                    id="range"
                    ref="rangeSlider"
                    v-model="rangevalue"
                    :type="rangetype"
                    :orientation="orientation"
                  ></ejs-slider>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-lg-4 property-section">
      <table id="property" title="Properties">
        <tbody>
          <tr>
            <td style="width: 30%">
              <div class="userselect">Ticks</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
              <ejs-checkbox id="ticks" :checked="check" :change="enableDisableTicks"></ejs-checkbox>
            </td>
          </tr>
          <tr>
            <td style="width: 30%">
              <div class="userselect">Tooltip</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
              <ejs-checkbox id="tooltip" :checked="check" :change="enableDisableTooltip"></ejs-checkbox>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the rendering of Slider component in Vertical orientation. Drag the thumb over the bar for selecting
        the values between min and max.
      </p>
    </div>

    <div id="description">
      <p>
        The Slider component allows to select a value or range of values in-between a min and max range, by dragging the thumb
        over the slider bar in vertical orientation. Three types of sliders in vertical orientation are:
      </p>
      <ul>
        <li>Default - allows to select a single value in vertical orientation</li>
        <li>
          MinRange – allows to select a single value, but highlights with a range selection from the min value to the current
          handle value in vertical orientation
        </li>
        <li>
          Range – allows to select a range of values with two handles, where the handles are connected with a range selection
          in vertical orientation
        </li>
        <p>In this demo, the default, MinRange, and range slider types can be seen.</p>
        <p>The dragInterval is used to drag both handles using the range bar which is also applicable only to the range slider.</p>
        <p>
          For more information, refer to the
          <a
            target="_blank"
            href="http://ej2.syncfusion.com/vue/documentation/slider/getting-started.html#orientation"
          >orientation</a> section from the documentation.
        </p>
      </ul>
    </div>
  </div>
</template>
<style>
.orientation .content-wrapper {
  width: 80%;
  margin: 0 auto;
  min-width: 185px;
}
.orientation .sliderwrap {
  height: 375px;
  margin-top: 10px;
  width: 60%;
  margin: auto;
}

.e-bigger .content-wrapper {
  width: 80%;
}

.slider_table td {
  text-align: center;
}

.slider_table {
  border: 0;
  width: 100%;
}

.content-wrapper .orientation {
  display: inline-block;
  margin-left: 70px;
}
</style>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import {
  TicksDataModel,
  TooltipDataModel,
  Placement
} from "@syncfusion/ej2-inputs";
import { CheckBoxPlugin, ChangeEventArgs } from "@syncfusion/ej2-vue-buttons";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
Vue.use(SliderPlugin);
Vue.use(CheckBoxPlugin);
export default Vue.extend({
  data: function() {
    return {
      value: 30,
      minValue: 30,
      rangevalue: [30, 70],
      mintype: "MinRange",
      rangetype: "Range",
      orientation: "Vertical",
      check: false,
      ticks: {
        placement: "None",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      tooltip: { isVisible: false, placement: "Before" }
    };
  },
  methods: {
    enableDisableTicks: function(args) {
      this.ticks.placement = args.checked ? "Before" : "None";
      this.$refs.defaultSlider.ticks = this.ticks;
      this.$refs.minSlider.ticks = this.ticks;
      this.$refs.rangeSlider.ticks = this.ticks;
    },
    enableDisableTooltip: function(args) {
      this.tooltip.isVisible = args.checked;
      this.$refs.defaultSlider.tooltip = this.tooltip;
      this.$refs.minSlider.tooltip = this.tooltip;
      this.$refs.rangeSlider.tooltip = this.tooltip;
    },
    onScroll: function() {
      if (
        document.getElementById("minrange") &&
        this.$refs.defaultSlider &&
        this.$refs.minSlider &&
        this.$refs.rangeSlider
      ) {
        this.$refs.defaultSlider.ej2Instances.refreshTooltip(this.$refs.defaultSlider.ej2Instances.tooltipTarget);
        this.$refs.minSlider.ej2Instances.refreshTooltip(this.$refs.minSlider.ej2Instances.tooltipTarget);
        this.$refs.rangeSlider.ej2Instances.refreshTooltip(this.$refs.rangeSlider.ej2Instances.tooltipTarget);
      }
    }
  },
  mounted: function() {
    document
      .getElementById("right-pane")
      .addEventListener("scroll", this.onScroll.bind(this));
  }
});
</script>
