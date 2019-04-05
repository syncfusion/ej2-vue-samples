<template>
<div class="control-section list-formatting">
    <div class="control_wrapper timepicker_format">
        <div class="tabs-wrap">
            <div class="wrap">
                 <ejs-timepicker id="timepicker" ref="timeObj"  :placeholder="waterMarkText" :value="value" :cssClass="cssValue" :itemRender="itemRanderHandler" v-on:open="onOpen" :scrollTo="scrollTo" ></ejs-timepicker>
            </div>
        </div>
    </div>
    <div id="action-description">
    <p>
         The following sample demonstrates the popup list element in specific time duration. Click/Touch the TimePicker popup icon to select the desired value.
    </p>
   </div>
   <div id="description">
    <p>
        The Time Duration sample illustrates, how to customize or disable the time values in time list popup by using
        <code>itemRender</code> event. Here, all the time values has addition information on duration between them in sequence and some of the values
        are disabled through itemRender event by adding the
        <code>e-disabled</code> class.By using the
        <code>scrollTo</code> property can set the scroll position to the given value when no value is selected or the selected value is not availble
        in the timepicker popup list.
    </p>
    <p>More information about the TimePicker and it's configuration can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/timepicker/getting-started.html#add-timepicker-to-the-application" target="_blank">
            documentation section</a>.</p>
    </div>
</div>
</template>

<script>

import Vue from "vue";
import { TimePickerComponent } from "@syncfusion/ej2-vue-calendars";

export default Vue.extend({
  data: function() {
    return {
      waterMarkText: "Select a time",
      value: new Date(),
      cssValue: "e-custom-style",
      scrollTo: new Date(),
      startTime: new Date()
    };
  },
  methods: {
    onOpen: function(args) {
      if (this.value && !isNaN(+this.value))
        //assign the current value as the scrollTo value
        this.scrollTo = this.value;
    },
    itemRanderHandler: function(args) {
      let span = document.createElement("span");
      if (
        args.value.getHours() === 0 &&
        args.value.getMinutes() === 0 &&
        args.value.getMinutes() === 0
      ) {
        //assign the initial value to the variable
        this.startTime = args.value;
      }
      let minutes = (+args.value - +this.startTime) / 60000;
      let hours = parseInt("" + minutes / 60, 10);
      let mins = (minutes % 60) / 6;
      let minText;
      if (minutes === 0 || minutes === 30) {
        minText = minutes + " mins";
      } else {
        minText = mins > 0 ? "." + mins : "";
      }
      span.innerHTML =
        " (" + (hours > 0 ? hours + minText + " hrs" : "" + minText) + ")";
      if ((minutes / 60) % 3 === 0) {
        //disable the time values by addeding the e-disabled class.
        args.element.classList.add("e-disabled");
      }

      //append the custom SPAN element into LI element
      args.element.appendChild(span);
    }
  }
});
</script>

<style>
.control_wrapper.timepicker_format {
  display: block;
  margin: 0 auto;
  max-width: 300px;
  padding: 5% 0;
}

.tabs-wrap {
  padding: 0 0px 10px;
}

.e-bigger .control-section.list-formatting {
  margin-top: 60px;
}

.e-custom-style.e-timepicker.e-popup li.e-disabled span {
  color: #b7b1b1;
}

.e-custom-style.e-timepicker.e-popup li span {
  color: #727070;
}

body.bootstrap4 .e-custom-style.e-timepicker.e-popup li span {
  color: #6c757d;
}

body.bootstrap4 .e-custom-style.e-timepicker.e-popup li.e-disabled span {
  color: #adb5bd;
}

.e-custom-style.e-timepicker.e-popup li.e-disabled span {
  height: 25px;
  width: 25px;
  font-size: 15px;
}

.e-custom-style.e-timepicker.e-popup li.e-disabled span:before {
  content: "\e212";
  position: absolute;
  right: 10px;
  line-height: 36px;
}

.e-bigger .e-custom-style.e-timepicker.e-popup li.e-disabled span:before {
  line-height: 48px;
}

body.highcontrast .e-custom-style.e-timepicker.e-popup li.e-hover span:hover,
body.highcontrast
  .e-custom-style.e-timepicker.e-popup
  li.e-active.e-hover
  span {
  color: #fff;
}

body.bootstrap4 .e-custom-style.e-timepicker.e-popup li.e-hover span:hover,
body.bootstrap4 .e-custom-style.e-timepicker.e-popup li.e-active.e-hover span {
  color: #6c757d;
}

body.highcontrast .e-custom-style.e-timepicker.e-popup li.e-active span {
  color: #000;
}

body.bootstrap4 .e-custom-style.e-timepicker.e-popup li.e-active span {
  color: #fff;
}
</style>