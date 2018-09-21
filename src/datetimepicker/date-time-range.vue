<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datetimepicker id="datetimepicker" :placeholder="waterMarkText" :min="minDate" :max="maxDate" :value="date"></ejs-datetimepicker>
    </div>
    <div id="action-description">
    <p>
        In the following sample, a specific datetime ranges from 7th 10:00 AM to 27th 10:30 PM of the current month has been set to select from the Calendar. All the other dates are out of range and <code>restricted</code> to set or select.
    </p>
</div>
<div id="description">
    <p>
        DateTime Range sample illustrates the datetime selection within the specific range in a calendar and time popup list by using min and max properties. Here, the datetime selection range was restricted within a range from 7th 10:00 AM to 27th 10:30 PM in
        a month.
    </p>
   <p>More information on the date range configuration can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/datetimepicker/date-time-range.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>
import Vue from "vue";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DateTimePickerPlugin);
export default Vue.extend({
  data: function() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    return {
      waterMarkText: "Select a date and time",
      date: new Date(year, month, 14, 10, 30),
      minDate: new Date(year, month, 7, 10),
      maxDate: new Date(year, month, 27, 22, 30)
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
</style>