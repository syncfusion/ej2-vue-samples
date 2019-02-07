<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datepicker id="datepicker" :placeholder="waterMarkText" :min="minDate" :max="maxDate" :value="date"></ejs-datepicker>
    </div>
    <div id="action-description">
    <p>
         Date Range sample illustrates the date selection within the specific range in a calendar by using min and max properties.
        Here, the date selection range was <code>restricted</code> within a range from 7th to 27th days in a month.
    </p>
</div>
<div id="description">
    <p>
        Date Range sample illustrates the date selection within the specific range in a calendar by using min and max properties. Here, the date selection range was restricted within a range from 7th to 27th days in a month.
    </p>
    <p>More information on the date range configuration can be found in the <a href="https://ej2.syncfusion.com/vue/documentation/datepicker/date-range.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);
export default Vue.extend({
  data: function() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    return {
      waterMarkText: "Choose a date",
      date: new Date(year, month, 14),
      minDate: new Date(year, month, 7),
      maxDate: new Date(year, month, 27)
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