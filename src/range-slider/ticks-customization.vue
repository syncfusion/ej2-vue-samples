<template>
  <div class="col-lg-12 slider-customticks control-section">
    <div class="slider-content_wrapper">
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
    <p>In this demo, customization of ticks using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/slider#cssclass">CSS</a> is demonstrated.</p>
    <ul>
        <li>Dynamic ticks color - In this sample, ticks has been customized to different colors by adding icon at each ticks.</li>
        <li>Ticks with legends - In this sample, track has been formatted to display custom text using renderingTicks and renderedTicks
            events. </li>
    </ul>
</div>
  </div>
</template>
<style>
    .slider-customticks .slider-content_wrapper {
        width: 40%;
        margin: 0 auto;
        min-width: 185px;
    }

    .slider-customticks .userselect {
        -webkit-user-select: none;
        /* Safari 3.1+ */
        -moz-user-select: none;
        /* Firefox 2+ */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
        /* Standard syntax */
    }

    .slider-customticks .slider_labelText {
        text-align: -webkit-left;
        font-weight: 500;
        font-size: 13px;
        padding-bottom: 40px;
    }

    .slider-customticks .slider_container {
        margin-top: 40px;
    }

    .e-bigger .slider-customticks .slider-content_wrapper {
        width: 80%;
    }

    .slider-customticks #ticks_slider.e-control.e-slider .e-range {
        z-index: unset;
    }

    .fabric .slider-customticks #ticks_slider .e-slider-track, .fabric-dark .slider-customticks #ticks_slider .e-slider-track {
        border: 0;
        height: 4px;
        top: calc(50% - 2px);
        margin: 0;
    }

    .slider-customticks #ticks_slider .e-scale .e-tick {
        background-image: none;
        visibility: visible;
        font-family: 'e-customized-icons';
    }

    .slider-customticks #ticks_slider .e-scale {
        z-index: 0 !important;
    }

    .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
        content: '\e967';
        position: absolute;
    }

    .slider-customticks #ticks_slider .e-scale :nth-child(1)::before {
        color: red;
    }

    .slider-customticks #ticks_slider .e-scale :nth-child(2)::before {
        color: blue;
    }

    .slider-customticks #ticks_slider .e-scale :nth-child(3)::before {
        color: green;
    }

    .slider-customticks #ticks_slider .e-scale :nth-child(4)::before {
        color: blueviolet;
    }

    .slider-customticks #ticks_slider .e-scale :nth-child(5)::before {
        color: orange;
    }

    .slider-customticks #ticks_slider .e-scale :nth-child(6)::before {
        color: pink;
    }

    .material .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .material-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
        font-size: 10px;
        line-height: 2.6;
        left: calc(50% - 5px);
    }

    .material3 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .material3-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .material .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .material-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {
        left: calc(0% - 5px);
    }

    .fluent2 #slider_wrapper .e-rtl #ticks_slider .e-scale :nth-child(1)::before,
    .fluent2-dark #slider_wrapper .e-rtl #ticks_slider .e-scale :nth-child(1)::before,
    .fluent2-highcontrast #slider_wrapper .e-rtl #ticks_slider .e-scale :nth-child(1)::before,
    .fluent2 #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .fluent2-dark #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .fluent2-highcontrast #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .fluent .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .fluent-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .material3 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .material3-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .bootstrap5 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .bootstrap5-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .tailwind .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .tailwind-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .tailwind3 #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .tailwind3-dark #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .material .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .material-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {
        left: calc(100% - 6px);
    }

    .highcontrast .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
    .bootstrap .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
    .fabric .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .fabric-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
        font-size: 14px;
    }

    .fabric .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .fabric-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 2.4;
    }

    .bootstrap4 .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
    .highcontrast .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
    .bootstrap .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
    .fabric .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .fabric-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
        left: calc(50% - 7px);
    }

    .bootstrap4 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .highcontrast .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .bootstrap .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .bootstrap-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .fabric .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .fabric-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {
        left: calc(0% - 7px);
    }

    .bootstrap4 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .highcontrast .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .fabric .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .fabric-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before,
    .bootstrap .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .bootstrap-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {
        left: calc(100% - 7px);
    }

    .bootstrap .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 1.8;
    }

    .highcontrast .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 2.5;
    }

    .slider-customticks #slider+.e-scale .e-tick.e-first-tick :nth-child(2) {
        margin-left: -20px;
    }

    @font-face {
        font-family: 'e-customized-icons';
        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .fluent #ticks_slider .e-scale .e-tick.e-custom::before, .fluent-dark #ticks_slider .e-scale .e-tick.e-custom::before,
    .bootstrap5 #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5-dark #ticks_slider .e-scale .e-tick.e-custom::before,
    .tailwind #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind-dark #ticks_slider .e-scale .e-tick.e-custom::before,
    .bootstrap4 .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
    .tailwind3 #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind3-dark #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 2.3;
    }

    .fluent2 #ticks_slider .e-scale .e-tick.e-custom::before, .fluent2-dark #ticks_slider .e-scale .e-tick.e-custom::before,
    .fluent2-highcontrast #ticks_slider .e-scale .e-tick.e-custom::before,
    .fluent #ticks_slider .e-scale .e-tick.e-custom::before, .fluent-dark #ticks_slider .e-scale .e-tick.e-custom::before,
    .bootstrap5 #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5-dark #ticks_slider .e-scale .e-tick.e-custom::before,
    .tailwind #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind-dark #ticks_slider .e-scale .e-tick.e-custom::before,
    .tailwind3 #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind3-dark #ticks_slider .e-scale .e-tick.e-custom::before {
        left: calc(50% - 6px);
    }

    .bootstrap5.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before,
    .tailwind.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before,
    .tailwind3.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind3-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before {
        top: 2px;
    }

    .tailwind3.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind3-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before{
        left: calc(50% - 0px);
    }
    
    .fluent2 #slider_wrapper .e-rtl #ticks_slider .e-scale :nth-child(6)::before, .fluent2-dark #slider_wrapper .e-rtl #ticks_slider .e-scale :nth-child(6)::before,
    .fluent2-highcontrast #slider_wrapper .e-rtl #ticks_slider .e-scale :nth-child(6)::before,
    .fluent2 #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .fluent2-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .fluent2-highcontrast #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .fluent #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .fluent-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .bootstrap5 #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .bootstrap5-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .tailwind #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .tailwind-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before,
    .tailwind3 #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .tailwind3-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {
        left: calc(0% - 6px);
    }

    .fluent2 #ticks_slider .e-scale, .tailwind3 #ticks_slider .e-scale,.tailwind3-dark #ticks_slider .e-scale,
    .fluent2-dark #ticks_slider .e-scale,
    .fluent2-highcontrast #ticks_slider .e-scale {
        font-size: 14px;
    }

    .fluent2.e-bigger #ticks_slider .e-scale,
    .fluent2-dark.e-bigger #ticks_slider .e-scale,
    .fluent2-highcontrast.e-bigger #ticks_slider .e-scale {
        font-size: 16px;
    }

    .fluent2.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before,
    .fluent2-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before,
    .fluent2-highcontrast.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before {
        top: 8px;
    }

    .bootstrap5\.3 #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5\.3-dark #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 2.3;
        left: calc(50% - 6px);
    }
    .bootstrap5\.3 #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom.e-first-tick::before, .bootstrap5\.3-dark #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom.e-first-tick::before {
        left: calc(0% - 6px);
    }

    .bootstrap5\.3 #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom.e-last-tick::before, .bootstrap5\.3-dark #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom.e-last-tick::before {
        left: calc(100% - 6px);
    }

    .bootstrap5\.3.e-bigger #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5\.3-dark.e-bigger #slider_wrapper #ticks_slider .e-scale .e-tick.e-custom::before {
        line-height: 3;
    }

  .material3 .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
  .material3 .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
      line-height: 2.3;
      left: calc(50% - 5px);
  } 
  
  .e-bigger.material3 .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before,
  .e-bigger.material3-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {
      line-height: 3;
      left: calc(50% - 5px);
  } 
  
  
  .material3 .slider_container .e-slider-container.e-control-wrapper.e-horizontal.e-scale-both #slider .e-range,
  .material3-dark .slider_container .e-slider-container.e-control-wrapper.e-horizontal.e-scale-both #slider .e-range {
      top: calc(50% - 2px);
  }

    @media (max-width:550px){
        .e-bigger .e-control-wrapper.e-slider-container .e-scale .e-tick .e-tick-value{
            font-size: 10px;
            font-weight: 600;
        }
    }
</style>
<script>
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";

export default {
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
  components: { 'ejs-slider': SliderComponent },
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
};
</script>
