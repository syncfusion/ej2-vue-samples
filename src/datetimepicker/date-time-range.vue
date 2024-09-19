<template>
<div class="control-section row">
<div class="col-lg-6">
    <div id="wrapper">
        <label class="example-label">DateTime Restriction</label>
        <ejs-datetimepicker id="datetimepicker1" :placeholder="waterMarkText" :min="minDate" :max="maxDate" :value="date"></ejs-datetimepicker>
    </div>
</div>
<div class="col-lg-6">
    <div id="wrapper">
        <label class="example-label">Time Restriction</label>
        <ejs-datetimepicker id="datetimepicker2" :placeholder="waterMarkText" :minTime="minTime" :maxTime="maxTime" :value="date"></ejs-datetimepicker>
    </div>
</div>
</div>
<div id="action-description">
  <p>This example demonstrates date and time selection within specific ranges defined by the <code>Min</code>, <code>Max</code>, <code>MinTime</code>, and <code>MaxTime</code> properties. Dates and times outside these ranges are <code>restricted</code> and cannot be set or selected.</p>
</div>
<div id="description">
  <p>Date Range example explains the date and time selection within the specific range in a calendar and time popup list by using <code>Min</code>, <code>Max</code>, <code>MinTime</code> and <code>MaxTime</code> properties. Here, the 1st datetimepicker date selection range was restricted within a range from 7th 10:00 AM to 27th 10:30 PM days in a month.</p>
  <p>The 2nd datetimepicker time selection range is restricted from 10:00 AM to 8:30 PM of each day.</p>
  <p>More information on the date range configuration can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/datetimepicker/date-time-range.html" target="_blank"> documentation section</a>.</p>
</div>
</template>

<script>
import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  data: function() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    return {
      waterMarkText: "Select a date and time",
      date: new Date(year, month, 14, 10, 30),
      minDate: new Date(year, month, 7, 10),
      maxDate: new Date(year, month, 27, 22, 30),
      minTime: new Date(year, month, 7, 10),
      maxTime: new Date(year, month, 27, 20, 30)
    };
  },
  components: { 'ejs-datetimepicker': DateTimePickerComponent },
};
</script>



<style scoped>
#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}
</style>