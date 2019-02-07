<template>
  <div class="col-lg-12 control-section default">
    <div class='content-wrapper'>
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
        <p>
            In this demo, the default, MinRange and range slider types can be seen.
        </p>
        <p>
            More information about Slider instantiation can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/slider/getting-started.html">
                documentation section</a>
        </p>
    </ul>
</div>
  </div>
</template>
<style>
.default .content-wrapper {
        width: 40%;
        margin: 0 auto;
        min-width: 185px;
    }

    .sliderwrap.default{
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
Vue.use(SliderPlugin);
export default Vue.extend({
  data: function() {
    return {
      value: 30,
      minValue: 30,
      rangevalue: [30,70]
    };
  }
});
</script>
