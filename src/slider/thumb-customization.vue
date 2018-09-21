<template>
  <div class="col-lg-12 control-section">
    <div class="slider-content-wrapper">
        <div class="slider_container">
            <div class="labelText slider-userselect">Square</div>
            <!-- Square slider element -->
            <ejs-slider id='square_slider' :value='value' :min='min' :max='max'></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="labelText slider-userselect">Circle</div>
            <!-- Circle slider element -->
            <ejs-slider id='circle_slider' :value='value' :min='min' :max='max'></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="labelText slider-userselect">Oval</div>
            <!-- Oval slider element -->
            <ejs-slider id='oval_slider' :value='value' :min='min' :max='max'></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="labelText slider-userselect">Custom image</div>
            <!-- Image slider element -->
            <ejs-slider id='image_slider' :value='value' :min='min' :max='max' :ticks='ticks'></ejs-slider>
        </div>
    </div>

    <div id="action-description">
    <p>This sample demonstrates the customization of Slider's thumb. Drag the thumb over the bar for selecting the values between
        min and max.
    </p>
</div>

<div id="description">
    <p>In this demo, customization of thumb by changing CSS is demonstrated.</p>
    <ul>
        <li>Square - In this sample, thumb has been customized to square shape.</li>
        <li>Circle - In this sample, thumb has been customized to circle shape. </li>
        <li>Oval - In this sample, thumb has been customized to oval shape. </li>
        <li>Custom image - In this sample, thumb has been replaced with custom image. </li>
    </ul>
</div>
  </div>
</template>
<style>
 .slider-content-wrapper {
        width: 40%;
        margin: 0 auto;
        min-width: 185px;
    }

    .slider-userselect {
        -webkit-user-select: none;
        /* Safari 3.1+ */
        -moz-user-select: none;
        /* Firefox 2+ */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
        /* Standard syntax */
    }

    .labelText {
        text-align: -webkit-left;
        font-weight: 500;
        font-size: 13px;
        padding-bottom: 10px;
    }

    .slider_container {
        margin-top: 40px;
    }

    .e-bigger .content-wrapper {
        width: 80%;
    }

    #square_slider.e-control.e-slider .e-handle {
        border-radius: 0%;
        background-color: #f9920b;
        border: 0;
    }

    #circle_slider.e-control.e-slider .e-handle {
        background-color: #f9920b;
        border-radius: 50%;
        border: 0;
    }

    .material.e-bigger .e-slider-container.e-horizontal #image_slider.e-slider .e-handle,
    .material .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle {
        top: calc(50% - 7px);
    }

    .material.e-bigger .e-slider-container.e-horizontal #image_slider.e-slider .e-handle.e-handle-active,
    .material .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle.e-handle-active {
        top: calc(50% - 6px);
        transform: scale(1.3) !important;
    }

    .e-bigger .e-slider-container.e-horizontal #image_slider.e-slider .e-handle,
    .e-slider-container.e-bigger.e-horizontal #image_slider.e-slider .e-handle {
        top: calc(50% - 9px);
    }

    #image_slider.e-control.e-slider .e-handle {
        height: 25px;
        width: 24px;
        background-size: 24px;

    }

    .material #image_slider.e-control.e-slider .e-handle {
        height: 20px;
        width: 20px;
        background-size: 20px;

    }

    .material #image_slider.e-control.e-slider .e-handle {
        background-image: url('./images/thumb-mat.png');
        background-repeat: no-repeat;
        background-color: transparent;
        border: 0;
    }

    #image_slider.e-control.e-slider .e-handle {
        background-image: url('./images/thumb.png');
        background-repeat: no-repeat;
        background-color: transparent;
        border: 0;
    }

    #square_slider .e-tab-handle::after,
    #circle_slider .e-tab-handle::after {
        background-color: #f9920b;
    }

    #image_slider .e-tab-handle::after {
        background-color: transparent;
    }

    #oval_slider.e-control.e-slider .e-handle {
        height: 25px;
        width: 8px;
        top: 3px;
        border-radius: 15px;
        background-color: #f9920b;
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
      min: 0,
      max: 100,
      ticks: {
        placement: 'After'
    }
    };
  }
});
</script>