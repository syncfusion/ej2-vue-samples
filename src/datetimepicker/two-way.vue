<template>
<div class="control section">
<div id="dateTimeWrapper" class="col-lg-12 control-section">

<div class="control-label"> Two-Way Binding</div>
<div class="col-lg-6 ">
    <div id="wrapper">
        <div id="twoWayWrapper">
             <ejs-datetimepicker id="first_datetime" :placeholder="waterMark" v-model:value="date"></ejs-datetimepicker>
        </div>
    </div>
</div> 
<div class="col-lg-6 ">
    <div id="wrapper">
        <div id="twoWayWrapper">
         <ejs-datetimepicker id="second_datetime" :placeholder="waterMark" v-model:value="date"></ejs-datetimepicker>
        </div>
    </div>
</div>
</div>
    <div id="action-description">
    <p>
        In the following sample, DateTimePicker component supports Two-way binding. It keeps the data in sync with your DOM without doing anything.
    </p>
</div>
<div id="description">
    <p>
        Model binding sample illustrates the two-way binding.  when you change the value in one DateTimePicker component, it will update in the other DateTimePicker by using value property.
    </p>
    <p>More information on the DateTimePicker instantiation can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/datetimepicker/getting-started.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>
import Vue from "vue";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(DateTimePickerPlugin);

export default Vue.extend({
  data: function() {
    return {
      waterMark: "Select a date and time",
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
#dateTimeWrapper .control-label {
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