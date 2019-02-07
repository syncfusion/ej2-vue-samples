<template>
<div class="control section">
<div id="rangeWrapper" class="col-lg-12 control-section">

<div class="control-label"> Two-Way Binding</div>
<div class="col-lg-6 ">
    <div id="wrapper">
        <div id="twoWayWrapper">
      <ejs-daterangepicker id="first_daterange" :placeholder="waterMark" v-model="date"></ejs-daterangepicker>
     </div>
    </div>
</div> 
<div class="col-lg-6 ">
    <div id="wrapper">
        <div id="twoWayWrapper">
      <ejs-daterangepicker id="second_daterange" :placeholder="waterMark"  v-model="date"></ejs-daterangepicker>
     </div>
    </div>
</div>
</div>
   <div id="action-description">
    <p>
        In the following sample, DateRangePicker component supports Two-way binding. It keeps the data in sync with your DOM without doing anything.
   </p>
 </div>
 <div id="description">
    <p>
        Model binding sample illustrates the two-way binding.  when you change the value in one DateRangePicker component, it will update in the other DateRangePicker by using value property.
    </p>
    <p>More information on the DateRangePicker instantiation can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/getting-started.html" target="_blank"> documentation section</a>.</p>
   </div>
</div>

</template>

<script>
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(DatePickerPlugin);

export default Vue.extend({
  data: function() {
    return {
      waterMark: "Select a Range",
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
#rangeWrapper .control-label {
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