<template>
  <div class="col-lg-12 control-section tooltipcustomization">
    <div class="content-wrapper">
      <div class="sliderwrap">
        <label class="labeltext userselect">
          <span class="label-text">Background color</span>
        </label>
        <ejs-slider
          id="defaultTooltip"
          ref="defaultSlider"
          :value="value"
          :min="min"
          :max="max"
          :step="step"
          :tooltipChange="tooltipChangeHandler"
          :tooltip="tooltip"
          :renderingTicks="renderingTicksHandler"
          :ticks="ticks"
          type="Range"
        ></ejs-slider>
      </div>
      <div class="sliderwrap">
        <label class="labeltext userselect">
          <span class="label-text">Color and text</span>
        </label>
        <ejs-slider
          id="out"
          ref="outSlider"
          :value="slidervalue"
          :min="min"
          :max="max"
          :step="step"
          :tooltipChange="tooltipChangeHandler"
          :tooltip="tooltip"
          :renderingTicks="renderingTicksHandler"
          :ticks="ticks"
          type="MinRange"
        ></ejs-slider>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the customization of Slider's tooltip. Drag the thumb over the bar for selecting the values
        between min and max.
      </p>
    </div>

    <div id="description">
      <p>In this demo, customization of tooltip using CSS is demonstrated.</p>
      <ul>
        <li>Background color - In this sample, tooltip has been customized to custom color.</li>
        <li>Color and text - In this sample, tooltip and its content has been customized to custom color.</li>
      </ul>
    </div>
  </div>
</template>
<style>
.sliderwrap .label-text {
  font-weight: 500;
}

.tooltipcustomization .content-wrapper {
  width: 80%;
  margin: 0 auto;
  min-width: 185px;
}

.sliderwrap {
  margin-top: 40px;
}

#defaultTooltip .e-handle,
    #out .e-handle,
    .bootstrap #out .e-handle,
    .bootstrap #defaultTooltip .e-handle,
    .fabric #out .e-handle,
    .fabric #defaultTooltip .e-handle,
    .highcontrast #out .e-handle,
    .highcontrast #defaultTooltip .e-handle {
        background-color: #ffd939;
        border-color: #ffd939;
        z-index: 1;
    }

    .e-bigger .tooltipcustomization .content-wrapper {
        width: 80%;
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



    .e-slider-tooltip.e-tooltip-wrap.e-popup.e-tooltip-cutomization .e-tip-content,
    .e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-range.e-tooltip-cutomization .e-tip-content.e-material-tooltip-show {
        color: #333;
    }

    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-inner{
        color: #ffd939;
    }

    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {
        border-top-color: #ffd939;
    }

    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {
        border-bottom-color: #ffd939;
    }

    .e-slider-container .e-slider#defaultTooltip .e-range,
    .e-slider-container .e-slider#out .e-range {
        background-color: #0375be;
        z-index: unset;
    }
    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-default.e-slider-horizontal-after,
    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-default.e-slider-horizontal-before,
    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup {
        background-color: #ffd939;
        border-color: #ffd939;
    }

    .bootstrap .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {
        border-top-color: #ffd939;
    }

    .bootstrap .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-inner {
        color: #ffd939;
    }
</style>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import {
  Placement,
  SliderTooltipEventArgs,
  SliderTickEventArgs
} from "@syncfusion/ej2-inputs";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
Vue.use(SliderPlugin);
export default Vue.extend({
  data: function() {
    return {
      ticks: {
        placement: "After",
        // 3 * 3600000 milliseconds = 3 Hour
        largeStep: 3 * 3600000,
        smallStep: 3600000,
        showSmallTicks: true
      },
      tooltip: {
        placement: "Before",
        isVisible: true,
        cssClass: "e-tooltip-cutomization"
      },
      step: 3600000 / 6,
      min: new Date(2013, 6, 13, 11).getTime(),
      max: new Date(2013, 6, 13, 23).getTime(),
      value: [
        new Date(2013, 6, 13, 12).getTime(),
        new Date(2013, 6, 13, 18).getTime()
      ],
      slidervalue: new Date(2013, 6, 13, 17).getTime()
    };
  },
  methods: {
    renderingTicksHandler: function(args) {
      let totalMiliSeconds = Number(args.value);
      /**
       * toLocaleTimeString is predefined javascript date function, which is used to
       * customize the date in different format
       */
      let custom = { hour: "2-digit", minute: "2-digit" };
      // Assigning our custom text to the tick value.
      args.text = new Date(totalMiliSeconds).toLocaleTimeString(
        "en-us",
        custom
      );
    },
    tooltipChangeHandler: function(args) {
      /**
       * toLocaleTimeString is predefined javascript date function, which is used to
       * customize the date in different format
       */
      let custom = { hour: "2-digit", minute: "2-digit" };
      // Splitting the range values from the tooltip using space into an array.
      if (args.text.indexOf("-") !== -1) {
        let totalMiliSeconds = args.text.split(" ");
        // First part is the first handle value
        let firstPart = totalMiliSeconds[0];
        // Second part is the second handle value
        let secondPart = totalMiliSeconds[2];

        firstPart = new Date(Number(firstPart)).toLocaleTimeString(
          "en-us",
          custom
        );
        secondPart = new Date(Number(secondPart)).toLocaleTimeString(
          "en-us",
          custom
        );
        // Assigning our custom text to the tooltip value.
        args.text = firstPart + " - " + secondPart;
      } else {
        args.text =
          "Until " +
          new Date(Number(args.text)).toLocaleTimeString("en-us", custom);
      }
    },
    onScroll: function() {
      if (
        !isNullOrUndefined(document.getElementById("defaultTooltip")) &&
        this.$refs.defaultSlider
      ) {
        this.$refs.defaultSlider.ej2Instances.refreshTooltip(this.$refs.defaultSlider.ej2Instances.tooltipTarget);
        this.$refs.outSlider.ej2Instances.refreshTooltip(this.$refs.outSlider.ej2Instances.tooltipTarget);
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
