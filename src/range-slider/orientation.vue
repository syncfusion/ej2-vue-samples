<template>
  <div>
    <div class="col-lg-8 slider-orientation control-section">
      <div class="content_wrapper orientation">
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
                    :tooltip ="tooltip"
                    :ticks="ticks"
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
                    :tooltip ="tooltip"
                    :ticks="ticks"
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
                    :tooltip ="tooltip"
                    :ticks="ticks"
                  ></ejs-slider>
                </div>
              </td>
              <td>
                <div class="sliderwrap">
                  <ejs-slider
                    id="reverse"
                    ref="reverseSlider"
                    :min="min"
                    :max="max"
                    :tooltip ="tooltip"
                    v-model="reversevalue"
                    :type="rangetype"
                    :orientation="orientation"
                    :ticks="ticks"
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
              <div id="ticksLabel" class="userselect">Ticks</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
              <ejs-checkbox id="ticks" :checked="check" :change="enableDisableTicks" aria-labelledby="ticksLabel"></ejs-checkbox>
            </td>
          </tr>
          <tr>
            <td style="width: 30%">
              <div id="tooltipLabel" class="userselect">Tooltip</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
              <ejs-checkbox id="tooltip" :checked="check" :change="enableDisableTooltip" aria-labelledby="tooltipLabel"></ejs-checkbox>
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
        over the slider bar in vertical <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider#orientation">orientation</a>. Three types of sliders in vertical orientation are:
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
        <li>Reverse – Allows to render the component in reverse order. To utilise this, set the maximum value to the Min
            property and set the minimum value to the Max property</li>
      </ul>
      <p>In this demo, the default, MinRange, and range slider types can be seen.</p>
      <p>The dragInterval is used to drag both handles using the range bar which is also applicable only to the range slider.</p>
      <p>
        For more information, refer to the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider#orientation">orientation</a> section from the documentation.
      </p>
    </div>
  </div>
</template>
<style>
.slider-orientation .content_wrapper {
  width: 80%;
  margin: 0 auto;
  min-width: 185px;
}
.slider-orientation .sliderwrap {
  height: 375px;
  margin-top: 10px;
  width: 60%;
  margin: auto;
}

.e-bigger .slider-orientation .content_wrapper {
  width: 80%;
}

.slider-orientation .slider_table td {
  text-align: center;
}

.slider-orientation .slider_table {
  border: 0;
  width: 100%;
}

.slider-orientation .content_wrapper .orientation {
  display: inline-block;
  margin-left: 70px;
}
</style>
<script>
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
export default {
  data: function() {
    return {
      value: 30,
      minValue: 30,
      rangevalue: [30, 70],
      reversevalue: [30, 70],
      min: 100,
      max: 0,
      mintype: "MinRange",
      rangetype: "Range",
      orientation: "Vertical",
      check: true,
      ticks: {
        placement: "Before",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      tooltip: { isVisible: true, placement: "Before" }
    };
  },
  components: { 
    'ejs-slider': SliderComponent,
    'ejs-checkbox': CheckBoxComponent,
  },
  methods: {
    enableDisableTicks: function (args) {
      this.ticks = args.checked ? { placement: "Before", largeStep: 20, smallStep: 5, showSmallTicks: true } : { placement: "None", largeStep: 20, smallStep: 5, showSmallTicks: true };
    },
    enableDisableTooltip: function (args) {
      this.tooltip = args.checked ? { isVisible: true, placement: "Before" } : { isVisible: false, placement: "Before" };
    },
    onScroll: function() {
      if (
        document.getElementById("minrange") &&
        this.$refs.defaultSlider &&
        this.$refs.minSlider &&
        this.$refs.rangeSlider &&
        this.$refs.reverseSlider
      ) {
        this.$refs.defaultSlider.ej2Instances.refreshTooltip(this.$refs.defaultSlider.ej2Instances.tooltipTarget);
        this.$refs.minSlider.ej2Instances.refreshTooltip(this.$refs.minSlider.ej2Instances.tooltipTarget);
        this.$refs.rangeSlider.ej2Instances.refreshTooltip(this.$refs.rangeSlider.ej2Instances.tooltipTarget);
        this.$refs.reverseSlider.ej2Instances.refreshTooltip(this.$refs.reverseSlider.ej2Instances.tooltipTarget);
      }
    }
  },
  mounted: function() {
    if (document.getElementById('right-pane')) {
      document
        .getElementById('right-pane')
        .addEventListener('scroll', this.onScroll.bind(this));
    }
  }
};
</script>
