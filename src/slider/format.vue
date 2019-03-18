<template>
  <div class="col-lg-12 control-section format">
    <div class="content-wrapper">
      <div class="sliderwrap">
        <label class="labeltext">Currency Slider</label>
        <ejs-slider
          id="currency"
          ref="currencySlider"
          :value="value"
          :min="min"
          :max="max"
          :tooltip="tooltip"
          :ticks="ticks"
          :type="rangetype"
        ></ejs-slider>
      </div>
      <div class="sliderwrap format">
        <label class="labeltext">Kilometer Slider</label>
        <ejs-slider
          id="kilometer"
          ref="kilometerSlider"
          :value="kilovalue"
          :type="rangetype"
          :min="minkilo"
          :max="maxkilo"
          :tooltip="kilotooltip"
          :ticks="kiloticks"
        ></ejs-slider>
      </div>
      <div class="sliderwrap">
        <label class="labeltext">Time Slider</label>
        <ejs-slider
          id="time"
          ref="timeSlider"
          :value="timevalue"
          :type="rangetype"
          :min="mintime"
          :step="steptime"
          :max="maxtime"
          :tooltip="timetooltip"
          :ticks="timeticks"
          :tooltipChange="tooltipChangeHandler"
          :renderingTicks="renderingTicksHandler"
        ></ejs-slider>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the formatting of ticks and tooltip of Slider. Drag the thumb over the bar for selecting the
        formatted values between min and max.
      </p>
    </div>

    <div id="description">
      <p>
        The format feature customize the units of Slider values to desired format. The formatted values will also be applied
        to the ARIA attributes of the slider
      </p>
      <p>In this demo, Slider with currency, kilometer, and time formatting is demonstrated.</p>
      <ul>
        <li>
          Currency Slider – In this sample, ticks and tooltip are formatted to currency using format API in both tooltip and
          ticks.
        </li>
        <li>
          Kilometer Slider – In this sample, ticks and tooltip are formatted to kilometer using format API in both tooltip
          and ticks.
        </li>
        <li>
          Time Slider – In this sample, ticks and tooltip are formatted to time using change event in tooltip and renderingTicks
          event in ticks
        </li>
      </ul>
      <p>
        For more information, refer to the
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/format.html"
        >format</a> section from the documentation.
      </p>
    </div>
  </div>
</template>
<style>
.format .content-wrapper {
  width: 40%;
  margin: 0 auto;
  min-width: 185px;
}

.format .sliderwrap {
  margin-top: 40px;
}

.e-bigger .content-wrapper {
  width: 80%;
}

.sliderwrap label {
  padding-bottom: 26px;
  font-size: 13px;
  font-weight: 500;
  margin-top: 15px;
  text-align: left;
  width: 100%;
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
import {
  SliderTooltipEventArgs,
  SliderTickEventArgs
} from "@syncfusion/ej2-inputs";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
Vue.use(SliderPlugin);
export default Vue.extend({
  data: function() {
    return {
      min: 0,
      max: 100,
      value: [20, 80],
      tooltip: {
        placement: "Before",
        isVisible: true,
        format: "c2"
      },
      ticks: {
        placement: "After",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true,
        format: "c1"
      },
      rangetype: "Range",
      kilovalue: [1100, 1850],
      minkilo: 900,
      maxkilo: 2100,
      kilotooltip: {
        placement: "Before",
        isVisible: true,
        format: "00##.## km"
      },
      kiloticks: {
        placement: "After",
        largeStep: 400,
        smallStep: 100,
        showSmallTicks: true,
        format: "00##.## km"
      },
      mintime: new Date(2013, 6, 13, 11).getTime(),
      maxtime: new Date(2013, 6, 13, 23).getTime(),
      steptime: 3600000 / 6,
      timevalue: [
        new Date(2013, 6, 13, 12).getTime(),
        new Date(2013, 6, 13, 18).getTime()
      ],
      timetooltip: {
        placement: "Before",
        isVisible: true
      },
      timeticks: {
        placement: "After",
        largeStep: 3 * 3600000,
        smallStep: 3600000,
        showSmallTicks: true
      }
    };
  },
  methods: {
    tooltipChangeHandler: function(args) {
      let totalMiliSeconds = args.text.split(" ");
      let firstPart = totalMiliSeconds[0];
      let secondPart = totalMiliSeconds[2];
      let custom = { hour: "2-digit", minute: "2-digit" };
      firstPart = new Date(Number(firstPart)).toLocaleTimeString(
        "en-us",
        custom
      );
      secondPart = new Date(Number(secondPart)).toLocaleTimeString(
        "en-us",
        custom
      );
      args.text = firstPart + " - " + secondPart;
    },
    renderingTicksHandler: function(args) {
      let totalMiliSeconds = Number(args.value);
      let custom = { hour: "2-digit", minute: "2-digit" };
      args.text = new Date(totalMiliSeconds).toLocaleTimeString(
        "en-us",
        custom
      );
    },
    onScroll: function() {
      if (
        document.getElementById("currency") &&
        this.$refs.currencySlider &&
        this.$refs.kilometerSlider &&
        this.$refs.timeSlider
      ) {
        this.$refs.currencySlider.ej2Instances.refreshTooltip(this.$refs.currencySlider.ej2Instances.tooltipTarget);
        this.$refs.kilometerSlider.ej2Instances.refreshTooltip(this.$refs.kilometerSlider.ej2Instances.tooltipTarget);
        this.$refs.timeSlider.ej2Instances.refreshTooltip(this.$refs.timeSlider.ej2Instances.tooltipTarget);
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
