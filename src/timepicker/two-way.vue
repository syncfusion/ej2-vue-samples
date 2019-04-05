<template>
<div>
<div id="timeWrapper" class="col-lg-12 control-section two-way">
<div class="control-label"> Two-Way Binding</div>
<div class="col-lg-6 ">
    <div id="wrapper">
        <div id="twoWayWrapper">
               <ejs-timepicker id="first_time" :placeholder="waterMark" v-model="date"></ejs-timepicker>
            </div>
    </div>
</div> 
<div class="col-lg-6 ">
    <div id="wrapper">
        <div id="twoWayWrapper">
               <ejs-timepicker id="second_time" :placeholder="waterMark" v-model="date"></ejs-timepicker>
            </div>
    </div>
</div>
</div>
    <div id="action-description">
    <p>
      In the following sample, TimePicker component supports Two-way binding. It keeps the data in sync with your DOM without doing anything.
    </p>
</div>
<div id="description">
    <p>
        Model binding sample illustrates the two-way binding. when you change the value in one TimePicker component, it will update in the other TimePicker by using value property.
    </p>
    <p>More information about the TimePicker and it's configuration can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/timepicker/getting-started.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(TimePickerPlugin);

export default Vue.extend({
  data: function() {
    return {
      waterMark: "Select a time",
      date: null
    };
  }
});
</script>

<style>
#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}

.e-bigger .control-section.two-way {
  margin-top: 60px;
}
#timeWrapper .control-label {
  text-align: center;
  width: 200px;
  margin: 0 auto;
  font-size: 14px;
  user-select: none;
  font-weight: 500;
  font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif",
    "-apple-system", "BlinkMacSystemFont";
}
</style>