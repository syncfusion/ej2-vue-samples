<template>
  <div class="col-lg-12 control-section">
    <div class="slider-content-wrapper">
        <div class="slider_container" id="slider_wrapper">
            <div class="slider_labelText userselect">Dynamic ticks color</div>
            <!-- Ticks slider element -->
            <ejs-slider id='ticks_slider' :value='value' :min='min' :max='max' :type='type' :step='step' :ticks='ticks' :renderingTicks='renderingTicks' ></ejs-slider>
        </div>
        <div class="slider_container">
            <div class="slider_labelText userselect">Ticks with legends</div>
            <!-- Ticks slider element -->
            <ejs-slider id='slider' :value='value' :min='min' :max='max' :type='type' :ticks='slider_ticks' :renderedTicks='renderedTicks'></ejs-slider>
        </div>
    </div>


    <div id="action-description">
    <p>This sample demonstrates the customization of Slider's tick. Drag the thumb over the bar for selecting the values between
        min and max.</p>
</div>

<div id="description">
    <p>In this demo, customization of ticks using CSS is demonstrated.</p>
    <ul>
        <li>Dynamic ticks color - In this sample, ticks has been customized to different colors by adding icon at each ticks.</li>
        <li>Ticks with legends - In this sample, track has been formatted to display custom text using renderingTicks and renderedTicks
            events. </li>
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

    .slider_labelText {
        text-align: -webkit-left;
        font-weight: 500;
        font-size: 13px;
        padding-bottom: 40px;
    }

    .slider_container {
        margin-top: 40px;
    }

    .e-bigger .slider-content-wrapper {
        width: 80%;
    }

    #ticks_slider.e-control.e-slider .e-range {
        z-index: unset;
    }

    .fabric #ticks_slider .e-slider-track {
        border: 0;
        height: 4px;
        top: calc(50% - 2px);
        margin: 0;
    }

    #ticks_slider .e-scale .e-tick {
        background-image: none;
        visibility: visible;
        font-family: 'e-icons';
    }

    #ticks_slider .e-scale {
        z-index: 0 !important;
    }

    #ticks_slider .e-scale .e-tick.e-custom::before {
        content: '\e967';
        position: absolute;
    }

    #ticks_slider .e-scale :nth-child(1)::before {
        color: red;
    }

    #ticks_slider .e-scale :nth-child(2)::before {
        color: blue;
    }

    #ticks_slider .e-scale :nth-child(3)::before {
        color: green;
    }

    #ticks_slider .e-scale :nth-child(4)::before {
        color: blueviolet;
    }

    #ticks_slider .e-scale :nth-child(5)::before {
        color: orange;
    }

    #ticks_slider .e-scale :nth-child(6)::before {
        color: pink;
    }

    .material #ticks_slider .e-scale .e-tick.e-custom::before {
        font-size: 10px;
    }

    .material #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 2.6;
        left: calc(50% - 5px);
    }

    .material #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {
        left: calc(0% - 5px);
    }

    .material #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {
        left: calc(100% - 6px);
    }

    .fabric #ticks_slider .e-scale .e-tick.e-custom::before {
        font-size: 14px;
    }

    .fabric #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 2.4;
        left: calc(50% - 7px);
    }

    .fabric #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {
        left: calc(0% - 7px);
    }

    .fabric #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {
        left: calc(100% - 7px);
    }

    .bootstrap #ticks_slider .e-scale .e-tick.e-custom::before {
        font-size: 14px;
    }

    .bootstrap #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 1.8;
        left: calc(50% - 7px);
    }

    .bootstrap #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {
        left: calc(0% - 7px);
    }

    .bootstrap #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {
        left: calc(100% - 7px);
    }

    .highcontrast #ticks_slider .e-scale .e-tick.e-custom::before {
        font-size: 14px;
    }

    .highcontrast #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 2.5;
        left: calc(50% - 7px);
    }

    .highcontrast #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {
        left: calc(0% - 7px);
    }

    .highcontrast #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {
        left: calc(100% - 7px);
    }

    #slider+.e-scale .e-tick.e-first-tick :nth-child(2) {
        margin-left: -20px;
    }
</style>
<script>
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
import { SliderTickRenderedEventArgs, SliderTickEventArgs, Placement } from '@syncfusion/ej2-inputs'; 
Vue.use(SliderPlugin);
export default Vue.extend({
  data: function() {
    return {
     count: 1,
     value: 20,
     min: 0,
     max: 100,
     step: 5,
     type: 'MinRange',
     ticks: { placement: 'Before', largeStep: 20 },
     slider_ticks: { placement: 'Both', largeStep: 20, smallStep: 5 },
    };
  },
  methods:{
       renderingTicks: function(args) {
        if (args.tickElement.classList.contains('e-large')) {
            args.tickElement.classList.add('e-custom');
        }
      },
      renderedTicks: function(args) {
        let li = args.ticksWrapper.getElementsByClassName('e-large');
        let remarks = ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good', 'Excellent'];
        for (let i = 0; i < li.length; ++i) {
            li[i].querySelectorAll('.e-tick-both')[1].innerText = remarks[i];
        }
    }
  }
});
</script>