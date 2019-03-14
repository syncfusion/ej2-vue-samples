<template>
  <div>
    <div class="col-lg-8 limits control-section">
      <div class="content-wrapper" id="all-option-sample">
        <div class="sliderwrap">
          <label class="userselect">MinRange Slider With Limits</label>
          <ejs-slider
            ref="slider"
            id="limitslider"
            :value="value"
            :min="min"
            :max="max"
            :type="type"
            :tooltip="tooltip"
            :ticks="ticks"
            :step="step"
            :limits="limits"
          ></ejs-slider>
        </div>
        <div class="sliderwrap limits">
          <label class="userselect">Range Slider With Limits</label>
          <ejs-slider
            ref="rangeslider"
            :value="rangevalue"
            :min="min"
            :max="max"
            :type="rangetype"
            :tooltip="rangetooltip"
            :ticks="rangeticks"
            :step="step"
            :limits="rangelimits"
          ></ejs-slider>
        </div>
      </div>
    </div>
    <div class="col-lg-4 property-section" id="all-option-table">
      <table id="property" title="Properties">
        <tbody>
          <tr>
            <td style="width: 50%">
              <div class="userselect">MinStart</div>
            </td>
            <td style="width: 50%;padding-right: 10px">
              <div>
                <ejs-numerictextbox :value="minstartvalue" :change="minstartChange"></ejs-numerictextbox>
              </div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%">
              <div class="userselect">MinEnd</div>
            </td>
            <td style="width: 50%;padding-right: 10px">
              <div>
                <ejs-numerictextbox
                  :min="min"
                  :max="max"
                  :value="minendvalue"
                  :change="minendChange"
                ></ejs-numerictextbox>
              </div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%">
              <div class="userselect">MaxStart</div>
            </td>
            <td style="width: 50%;padding-right: 10px">
              <div>
                <ejs-numerictextbox
                  :min="min"
                  :max="max"
                  :value="maxstartvalue"
                  :change="maxstartChange"
                ></ejs-numerictextbox>
              </div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%">
              <div class="userselect">MaxEnd</div>
            </td>
            <td style="width: 50%;padding-right: 10px">
              <div>
                <ejs-numerictextbox
                  :min="min"
                  :max="max"
                  :value="maxendvalue"
                  :change="maxendChange"
                ></ejs-numerictextbox>
              </div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%">
              <div class="labeltext">Lock First Handle</div>
            </td>
            <td style="width: 50%">
              <ejs-checkbox id="button" :change="lockFirstHandle"></ejs-checkbox>
            </td>
          </tr>
          <tr>
            <td style="width: 50%">
              <div class="labeltext">Lock Second Handle</div>
            </td>
            <td style="width: 50%">
              <ejs-checkbox id="disabled" :change="lockSecondHandle"></ejs-checkbox>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the rendering of Slider component with limits. Drag the thumb over the bar for selecting the
        values between assigned limit values. Change the values in the property pane to set different limit values.
      </p>
    </div>

    <div id="description">
      <p>
        The limits are used to limit between certain range. When the limits are assigned, draggable limited area will be in the dark
        shadow color of the current theme. The limits APIs are explained below.
      </p>
      <p></p>
      <table>
        <tr>
          <td>
            <a
              target="_blank"
              href="http://ej2.syncfusion.com/vue/documentation/slider/api-limitData.html#minstart"
            >minStart</a>
          </td>
          <td>- &nbsp;&nbsp;Used to set minimum limit value for first handle.</td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              href="http://ej2.syncfusion.com/vue/documentation/slider/api-limitData.html#minend"
            >minEnd</a>
          </td>
          <td>- &nbsp;&nbsp;Used to set maximum limit value for first handle.</td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              href="http://ej2.syncfusion.com/vue/documentation/slider/api-limitData.html#maxstart"
            >maxStart</a>
          </td>
          <td>- &nbsp;&nbsp;Used to set minimum limit value for second handle.</td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              href="http://ej2.syncfusion.com/vue/documentation/slider/api-limitData.html#maxend"
            >maxEnd</a>
          </td>
          <td>- &nbsp;&nbsp;Used to set maximum limit value for first handle.</td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              href="http://ej2.syncfusion.com/vue/documentation/slider/api-limitData.html#starthandlefixed"
            >startHandleFixed</a>
          </td>
          <td>- &nbsp;&nbsp;Used to lock the first handle in the current position.</td>
        </tr>
        <tr>
          <td>
            <a
              target="_blank"
              href="http://ej2.syncfusion.com/vue/documentation/slider/api-limitData.html#endhandlefixed"
            >endHandleFixed</a>
          </td>
          <td>- &nbsp;&nbsp;Used to lock the second handle in the current position.</td>
        </tr>
      </table>

      <p>In this demo, Limits with MinRange and range Slider is demonstrated.</p>
      <ul>
        <li>MinRange Slider – In this sample, the minimum and maximum limit of the slider is set to 10 and 40 respectively.</li>
        <li>
          Range Slider – In this sample, the minimum and maximum limit of the first handle is set to 10 and 40 respectively
          and the minimum and maximum limit of the second handle is set to 60 and 90 respectively.
        </li>
      </ul>
      <p>
        For more information, refer to the
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/vue/documentation/slider/limits.html"
        >limits</a> section from the documentation.
      </p>
    </div>
  </div>
</template>

<style>
.limits .content-wrapper {
  width: 52%;
  margin: 0 auto;
  min-width: 185px;
}

.limits .sliderwrap {
  margin-top: 45px;
}

.e-bigger .content-wrapper {
  width: 80%;
}

.sliderwrap label {
  padding-bottom: 50px;
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

.property-custom td {
  padding: 5px;
}
</style>

<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
Vue.use(CheckBoxPlugin);
Vue.use(SliderPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
  data: function() {
    return {
      min: 0,
      max: 100,
      value: 25,
      // Set the step value
      step: 1,
      // Initialize ticks with placement, largestep, smallstep
      ticks: {
        placement: "Before",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      // Set the type for slider
      type: "MinRange",
      // Set the limit values for the slider
      limits: { enabled: true, minStart: 10, minEnd: 40 },
      // Initialize tooltip with placement and showOn
      tooltip: { isVisible: true, placement: "Before", showOn: "Focus" },

      // Set the intial range values for slider
      rangevalue: [25, 75],
      // Set the type to render range slider
      rangetype: "Range",
      // Initialize ticks with placement, largestep, smallstep
      rangeticks: {
        placement: "Before",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      // Set the limit values for the slider
      rangelimits: {
        enabled: true,
        minStart: 10,
        minEnd: 40,
        maxStart: 60,
        maxEnd: 90
      },
      // Initialize tooltip with placement and showOn
      rangetooltip: { isVisible: true, placement: "Before", showOn: "Focus" },
      minstartvalue: 10,
      minendvalue: 40,
      maxstartvalue: 60,
      maxendvalue: 90,
      checked: false
    };
  },
  methods: {
    minstartChange: function(args) {
      this.$refs.slider.ej2Instances.limits.minStart = args.value;
      this.$refs.rangeslider.ej2Instances.limits.minStart = args.value;
    },
    minendChange: function(args) {
      this.$refs.slider.ej2Instances.limits.minEnd = args.value;
      this.$refs.rangeslider.ej2Instances.limits.minEnd = args.value;
    },
    maxstartChange: function(args) {
      this.$refs.rangeslider.ej2Instances.limits.maxStart = args.value;
    },
    maxendChange: function(args) {
      this.$refs.rangeslider.ej2Instances.limits.maxEnd = args.value;
    },
    lockFirstHandle: function(args) {
      this.$refs.slider.ej2Instances.limits.startHandleFixed = args.checked;
      this.$refs.rangeslider.ej2Instances.limits.startHandleFixed =
        args.checked;
    },
    lockSecondHandle: function(args) {
      this.$refs.slider.ej2Instances.limits.endHandleFixed = args.checked;
      this.$refs.rangeslider.ej2Instances.limits.endHandleFixed = args.checked;
    },
    onScroll: function() {
      if (
        document.getElementById("limitslider") &&
        this.$refs.slider &&
        this.$refs.rangeslider
      ) {
        this.$refs.slider.ej2Instances.refreshTooltip(this.$refs.slider.ej2Instances.tooltipTarget);
        this.$refs.rangeslider.ej2Instances.refreshTooltip(this.$refs.rangeslider.ej2Instances.tooltipTarget);
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
