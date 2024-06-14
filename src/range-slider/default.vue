<template>
  <div class="col-lg-12 control-section slider-default">
    <div class='content_wrapper'>
        <div class='sliderwrap default'>
            <label class='labeltext'>Default Slider</label>
            <ejs-slider id='default' v-model="value"></ejs-slider>
        </div>
        <div class='sliderwrap default'>
            <label class='labeltext'>MinRange Slider</label>
            <ejs-slider id='minrange' v-model="minValue" type="MinRange"></ejs-slider>
        </div>
        <div class='sliderwrap default'>
            <label class='labeltext'>Range Slider</label>
            <ejs-slider id='range' v-model="rangevalue" type="Range"></ejs-slider>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the default rendering of Slider component. Drag the thumb over the bar for selecting the values
        between min and max.</p>
    </div>

<div id="description">
    <p>The Slider component allows to select a value or range of values in-between a min and max range, by dragging the thumb
        over the slider bar. Three types of sliders are:</p>
    <ul>
        <li>Default - allows to select a single value</li>
        <li>MinRange – allows to select a single value, but highlights with a range selection from the min value to the current
            handle value</li>
        <li>Range – allows to select a range of values with two handles, where the handles are connected with a range selection</li>
    </ul>
    <p>
        In this demo, the default, MinRange and range slider types can be seen.
    </p>
    <p>
        More information about Slider instantiation can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/range-slider/getting-started.html">
            documentation section</a>
    </p>
</div>
  </div>
</template>
<style>
    .slider-default .content_wrapper {
        width: 40%;
        margin: 0 auto;
        min-width: 185px;
    }

    .slider-default .sliderwrap.default{
        margin-top: 40px;
    }

    .e-bigger .slider-default .content_wrapper {
        width: 80%;
    }

    .slider-default .sliderwrap label {
        padding-bottom: 26px;
        font-size: 13px;
        font-weight: 500;
        margin-top: 15px;
    }

</style>
<script>
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";
export default {
  data: function() {
    return {
      value: 30,
      minValue: 30,
      rangevalue: [30,70]
    };
  },
  components: { 'ejs-slider': SliderComponent },
};
</script>
