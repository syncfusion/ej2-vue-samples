<template>
  <div>
    <div class="col-lg-8 control-section slider-ticks">
      <div class="content_wrapper">
        <div class="sliderwrap">
          <label style="padding-bottom: 50px">Default Slider</label>
          <ejs-slider
            id="default"
            ref="defaultSlider"
            v-model="value"
            :enabled="enabled"
            :min="min"
            :max="max"
            :step="step"
            :ticks="ticks"
          ></ejs-slider>
        </div>
        <div class="sliderwrap ticks">
          <label style="padding-bottom: 50px">Range Slider</label>
          <ejs-slider
            id="range"
            ref="rangeSlider"
            v-model="rangevalue"
            :type="rangetype"
            :enabled="enabled"
            :min="min"
            :max="max"
            :step="step"
            :ticks="rangeticks"
          ></ejs-slider>
        </div>
      </div>
    </div>
    <div class="col-lg-4 property-section">
      <table id="property" title="Properties">
        <tbody>
          <tr>
            <td style="width: 50%;padding-left: 10px;padding-top: 10px">
              <div>Placement</div>
            </td>
            <td style="width: 50%;padding-right: 10px;padding-top: 10px">
              <div>
                <ejs-dropdownlist
                  id="filter-type"
                  dropdownlist
                  :dataSource="datasource"
                  :fields="fields"
                  index="0"
                  :change="onChange"
                  placeholder="Select a Placement"
                  popupHeight="200px"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%;padding-left: 10px;padding-top: 10px;">
              <div class="userselect">Disabled</div>
            </td>
            <td style="width: 50%;padding-right: 10px;padding-top: 10px;">
              <div style="padding-left: 0;padding-top: 0">
                <ejs-checkbox id="disabled" :checked="check" :change="checkbox_onChange"></ejs-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the rendering of Slider component with Ticks placement. Drag the thumb over the bar for selecting the values between min and max.</p>
    </div>
    <div id="description">
      <p>The Ticks are the visual representation of the Slider values. The ticks are differentiated as small ticks and large ticks based on its size. The ticks position can be defined by the<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider/ticksData/#smallstep"> smallStep</a> and<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider/ticksData/#largestep">largeStep</a> properties.</p>
      <p> In this demo, we have demonstrated Ticks position with Default and Range Slider.</p>
      <ul>
        <li>Default Slider – In this sample, the small ticks and large ticks are rendered with the frequency of 0.05 and 0.20.</li>
        <li>Range Slider – In this sample, the small ticks and large ticks are rendered with the frequency of 5 and 20.</li>
      </ul>
      <p> We can also change the Ticks placement of  Slider and Disable Slider component from the property pane.</p>
      <p>We can use the below property to restrict the value range for the slider:</p>
      <ul>
        <li>
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider/#step">step </a> - to define incremental/decremental step value for slider</li>
        <li>
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider/#min">min </a> – to specify minimum value of the slider</li>
        <li>
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider/#max">max </a> – to specify maximum value of the slider</li>
      </ul>
      <p>For more information, we can refer the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/range-slider/ticks">ticks</a> section from the documentation.</p>
    </div>
  </div>
</template>
<style>
.slider-ticks .content_wrapper {
  width: 52%;
  margin: 0 auto;
  min-width: 185px;
}

.slider-ticks .sliderwrap {
  margin-top: 45px;
}

.e-bigger .slider-ticks .content_wrapper {
  width: 80%;
}

.slider-ticks .sliderwrap label {
  padding-bottom: 50px;
  font-size: 13px;
  font-weight: 500;
  margin-top: 15px;
}

.slider-ticks .userselect {
  -webkit-user-select: none;
  /* Safari 3.1+ */
  -moz-user-select: none;
  /* Firefox 2+ */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}

body.fluent2-highcontrast .sliderwrap .e-tick-before.e-scale.e-h-scale .e-tick,
body.fluent2 .sliderwrap .e-tick-before.e-scale.e-h-scale .e-tick,
body.fluent2-dark .sliderwrap .e-tick-before.e-scale.e-h-scale .e-tick {
    top: -5px;
}
</style>
<script>
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  data: function() {
    return {
      enabled:true,
      value: 30,
      min: 10,
      max: 90,
      step: 5,
      rangevalue: [30, 70],
      rangetype: "Range",
      check: false,
      ticks: {
        placement: "Before",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      rangeticks: {
        placement: "Before",
        largeStep: 20,
        smallStep: 5,
        showSmallTicks: true
      },
      datasource: [
        { value: "Before", text: "Before" },
        { value: "After", text: "After" },
        { value: "Both", text: "Both" },
        { value: "None", text: "None" }
      ],
      fields: { text: "text", value: "value" }
    };
  },
  components: { 
    'ejs-slider': SliderComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent
  },
  methods: {
    onChange: function(e) {
      this.$refs.defaultSlider.ej2Instances.ticks = { placement: e.value };
      this.$refs.rangeSlider.ej2Instances.ticks = { placement: e.value };
    },
    checkbox_onChange: function(args) {
      this.$refs.defaultSlider.ej2Instances.enabled = !args.checked;
      this.$refs.rangeSlider.ej2Instances.enabled = !args.checked;
    }
  }
};
</script>
