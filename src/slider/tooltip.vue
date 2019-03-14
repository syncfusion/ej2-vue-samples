<template>
  <div>
    <div class="col-lg-8 control-section slider-tooltip">
      <div class="content-wrapper">
        <div class="slidertooltip sliderwrap">
          <label style="padding-bottom: 50px">Default Slider</label>
          <ejs-slider
            id="defaultslidertooltip"
            ref="defaultSlider"
            v-model="value"
            :showButtons="showButtons"
            :tooltip="tooltip"
          ></ejs-slider>
        </div>
        <div class="slidertooltip sliderwrap">
          <label style="padding-bottom: 50px">Range Slider</label>
          <ejs-slider
            id="rangeslidertooltip"
            ref="rangeSlider"
            v-model="rangevalue"
            :showButtons="showButtons"
            :type="rangetype"
            :tooltip="tooltip"
          ></ejs-slider>
        </div>
      </div>
    </div>
    <div class="col-lg-4 property-section">
      <table id="property" title="Properties ">
        <tbody>
          <tr>
            <td style="width: 50%;padding-left: 10px">
              <div>Placement</div>
            </td>
            <td style="width: 50%;padding-right: 10px">
              <div>
                <ejs-dropdownlist
                  id="filter-type"
                  :dataSource="datasource"
                  :fields="fields"
                  index="0"
                  :change="changeTooltip"
                  placeholder="Select a Placement"
                  popupHeight="200px"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr id="slider-showon">
            <td style="width: 50%;padding-left: 10px">
              <div>ShowOn</div>
            </td>
            <td style="width: 50%;padding-right: 10px">
              <div>
                <ejs-dropdownlist
                  id="filter-type1"
                  ref="ddlShowOn"
                  :dataSource="datasource1"
                  :fields="fields1"
                  index="0"
                  :change="changeShowon"
                  placeholder="Select a ShowOn"
                  popupHeight="200px"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the rendering of Slider component with tooltip. Drag the thumb over the bar for selecting the
        values between min and max to enable the tooltip.
      </p>
    </div>

    <div id="description">
      <p>Slider component displays the tooltip to indicate the current value to the user.</p>
      <p>In this demo, we have demonstrated Tooltip with Default and Range Slider.</p>
      <p>
        Buttons can be used to increment or decrement the slider value. Buttons can be enabled in Slider using
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/api-slider.html#showbuttons-boolean"
        >showButtons</a> property
      </p>
      <p>
        Tooltip position and opening behavior can be customized through the
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/api-tooltipData.html#placement-string"
        >placement</a> and
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/api-tooltipData.html#showon-string"
        >showOn</a> properties from property pane.
      </p>
      <p>The dragInterval is used to drag both handles using the range bar which is also applicable only to the range slider.</p>
      <p>
        For more information, refer to the
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/api-tooltipData.html#placement-string"
        >placement</a> and
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/tooltip.html"
        >tooltip</a> section from the documentation.
      </p>
    </div>
  </div>
</template>
<style>
.slider-tooltip .content-wrapper {
  width: 52%;
  margin: 0 auto;
  min-width: 185px;
}

.slidertooltip.sliderwrap {
  margin-top: 45px;
  margin-left: -20%;
}

.sliderwrap label {
  padding-bottom: 26px;
  font-size: 13px;
  font-weight: 500;
  margin-top: 15px;
}

.userselect {
  -webkit-user-select: none;
  /* Safari 3.1+ */
  -moz-user-select: none;
  /* Firefox 2+ */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}
</style>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { TooltipPlacement, TooltipShowOn } from "@syncfusion/ej2-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { Z_NULL } from "zlib";
Vue.use(SliderPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
  data: function() {
    return {
      value: 30,
      showButtons: true,
      rangevalue: [30, 70],
      rangetype: "Range",
      tooltip: {
        placement: "Before",
        isVisible: true,
        showOn: "Focus"
      },
      datasource: [
        { value: "Before", text: "Before" },
        { value: "After", text: "After" }
      ],
      fields: { text: "text", value: "value" },
      datasource1: [
        { value: "Focus", text: "Focus" },
        { value: "Hover", text: "Hover" },
        { value: "Auto", text: "Auto" },
        { value: "Always", text: "Always" }
      ],
      fields1: { text: "text", value: "value" }
    };
  },
  methods: {
    changeTooltip: function(e) {
      this.$refs.defaultSlider.ej2Instances.tooltip = { placement: e.value };
      this.$refs.rangeSlider.ej2Instances.tooltip = { placement: e.value };
      this.$refs.rangeSlider.ej2Instances.tooltipObj.dataBind();
    },
    changeShowon: function(e) {
      this.$refs.defaultSlider.ej2Instances.tooltip = { showOn: e.value };
      this.$refs.rangeSlider.ej2Instances.tooltip = { showOn: e.value };
    },
    onScroll: function() {
      if (
        document.getElementById("rangeslidertooltip") &&
        this.$refs.defaultSlider &&
        this.$refs.rangeSlider
      ) {
        this.$refs.defaultSlider.ej2Instances.refreshTooltip(this.$refs.defaultSlider.ej2Instances.tooltipTarget);
        this.$refs.rangeSlider.ej2Instances.refreshTooltip(this.$refs.rangeSlider.ej2Instances.tooltipTarget);
      }
    }
  },
  mounted: function() {
    if (!isNullOrUndefined(document.getElementById("right-pane"))) {
      document
        .getElementById("right-pane")
        .addEventListener("scroll", this.onScroll.bind(this));
    }
  }
});
</script>
