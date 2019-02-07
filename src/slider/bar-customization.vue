<template>
  <div class="col-lg-12 control-section">
    <div class="slider-content-wrapper">
      <div class="slider_container">
        <div class="slider-labeltext slider_userselect">Height</div>
        <!-- Square slider element -->
        <ejs-slider id="height_slider" :value="value" :min="min" :max="max"></ejs-slider>
      </div>
      <div class="slider_container">
        <div class="slider-labeltext slider_userselect">Gradient color</div>
        <ejs-slider
          id="gradient_slider"
          :value="gradient_value"
          :min="min"
          :max="max"
          :type="range"
        ></ejs-slider>
      </div>
      <div class="slider_container">
        <div class="slider-labeltext slider_userselect">Dynamic thumb and selection bar color</div>
        <ejs-slider
          id="dynamic_color_slider"
          ref="dynamic_color_slider"
          :value="dynamic_value"
          :min="min"
          :max="max"
          :type="range"
          :created="created"
          :change="change"
        ></ejs-slider>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the customization of Slider's selection bar. Drag the thumb over the bar for selecting the values
        between min and max.
      </p>
    </div>

    <div id="description">
      <p>In this demo, customization of track using CSS is demonstrated.</p>
      <ul>
        <li>
          Height - In this sample, track has been customized to custom height. Here, thumb has to be adjusted based on the
          track height.
        </li>
        <li>Gradient color - In this sample, track has been customized with gradient color.</li>
        <li>
          Dynamic thumb and selection bar color - In this sample, track and thumb has been customized to different colors for
          different intervals by using created and change event.
        </li>
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

.slider-labeltext {
  text-align: -webkit-left;
  font-weight: 500;
  font-size: 13px;
  padding-bottom: 10px;
}

.material .e-slider-container #height_slider.e-slider .e-handle,
.material.e-bigger .e-slider-container #height_slider.e-slider .e-handle,
.material .e-slider-container #gradient_slider.e-slider .e-handle,
.material.e-bigger .e-slider-container #gradient_slider.e-slider .e-handle {
  height: 16px;
  width: 16px;
}

.material .e-slider-container.e-horizontal #height_slider .e-handle,
.material.e-bigger .e-slider-container.e-horizontal #height_slider .e-handle,
.material .e-slider-container.e-horizontal #gradient_slider .e-handle,
.material.e-bigger .e-slider-container.e-horizontal #gradient_slider .e-handle {
  margin-left: -8px;
  top: calc(50% - 8px);
}

.e-bigger:not(.material)
  .e-slider-container.e-horizontal
  #height_slider.e-slider
  .e-handle,
.e-bigger:not(.material)
  .e-slider-container.e-horizontal
  #gradient_slider.e-slider
  .e-handle {
  margin-left: -11px;
  top: calc(50% - 11px);
}

.e-bigger:not(.material) .e-slider-container #height_slider.e-slider .e-handle,
.e-bigger:not(.material)
  .e-slider-container
  #gradient_slider.e-slider
  .e-handle {
  height: 22px;
  width: 22px;
}

.e-slider-container #height_slider.e-slider .e-handle,
.e-slider-container #gradient_slider.e-slider .e-handle {
  height: 20px;
  width: 20px;
}

.e-slider-container.e-horizontal #height_slider .e-handle,
.e-slider-container.e-horizontal #gradient_slider .e-handle {
  margin-left: -10px;
  top: calc(50% - 10px);
}

.slider_container {
  margin-top: 40px;
}

.e-bigger .slider-content-wrapper {
  width: 80%;
}

#height_slider .e-tab-handle::after {
  background-color: #f9920b;
}

#height_slider.e-control.e-slider .e-slider-track {
  height: 8px;
  top: calc(50% - 4px);
  border-radius: 0;
}

.highcontrast #height_slider.e-control.e-slider .e-slider-track {
  height: 10px;
  top: calc(50% - 5px);
  border-radius: 0;
}

.fabric .slider_container .e-slider-hover .e-slider-track,
.fabric .slider_container .e-slider-container:active .e-slider-track,
.fabric .slider_container .e-slider-container .e-slider .e-tab-track {
  background-color: #c8c8c8;
}

#gradient_slider.e-control.e-slider .e-range {
  height: 6px;
  top: calc(50% - 3px);
  border-radius: 5px;
  background: -webkit-linear-gradient(
    left,
    #e1451d 0,
    #fdff47 17%,
    #86f9fe 50%,
    #2900f8 65%,
    #6e00f8 74%,
    #e33df9 83%,
    #e14423 100%
  );
  background: linear-gradient(
    left,
    #e1451d 0,
    #fdff47 17%,
    #86f9fe 50%,
    #2900f8 65%,
    #6e00f8 74%,
    #e33df9 83%,
    #e14423 100%
  );
  background: -moz-linear-gradient(
    left,
    #e1451d 0,
    #fdff47 17%,
    #86f9fe 50%,
    #2900f8 65%,
    #6e00f8 74%,
    #e33df9 83%,
    #e14423 100%
  );
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTE0NTFkIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTclIiBzdG9wLWNvbG9yPSIjZmRmZjQ3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjODZmOWZlIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjMjkwMGY4IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNzQlIiBzdG9wLWNvbG9yPSIjNmUwMGY4IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iODMlIiBzdG9wLWNvbG9yPSIjZTMzZGY5IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2UxNDQyMyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);
}
.fabric .slider_container .e-slider-hover .e-slider-track,
.fabric .slider_container .e-slider-container:active .e-slider-track,
.fabric .slider_container .e-slider-container .e-slider .e-tab-track {
  background-color: #c8c8c8;
}
#gradient_slider.e-control.e-slider .e-slider-track {
  height: 8px;
  top: calc(50% - 4px);
  border-radius: 5px;
}
</style>
<script>
import Vue from "vue";
import {
  SliderPlugin,
  SliderChangeEventArgs
} from "@syncfusion/ej2-vue-inputs";

Vue.use(SliderPlugin);
export default Vue.extend({
  data: function() {
    return {
      value: 30,
      min: 0,
      max: 100,
      gradient_value: 50,
      range: "MinRange",
      dynamic_value: 20
    };
  },
  methods: {
    created: function() {
      let sliderTrack = this.$refs.dynamic_color_slider.$el.querySelector(
        ".e-range"
      );
      let sliderHandle = this.$refs.dynamic_color_slider.$el.querySelector(
        ".e-handle"
      );
      sliderHandle.style.backgroundColor = "green";
      sliderTrack.style.backgroundColor = "green";
    },
    change: function(args) {
      let sliderTrack = this.$refs.dynamic_color_slider.$el.querySelector(
        ".e-range"
      );
      let sliderHandle = this.$refs.dynamic_color_slider.$el.querySelector(
        ".e-handle"
      );
      if (args.value > 0 && args.value <= 25) {
        // Change handle and range bar color to green when
        sliderHandle.style.backgroundColor = "green";
        sliderTrack.style.backgroundColor = "green";
      } else if (args.value > 25 && args.value <= 50) {
        // Change handle and range bar color to royal blue
        sliderHandle.style.backgroundColor = "royalblue";
        sliderTrack.style.backgroundColor = "royalblue";
      } else if (args.value > 50 && args.value <= 75) {
        // Change handle and range bar color to dark orange
        sliderHandle.style.backgroundColor = "darkorange";
        sliderTrack.style.backgroundColor = "darkorange";
      } else if (args.value > 75 && args.value <= 100) {
        // Change handle and range bar color to red
        sliderHandle.style.backgroundColor = "red";
        sliderTrack.style.backgroundColor = "red";
      }
    }
  }
});
</script>
