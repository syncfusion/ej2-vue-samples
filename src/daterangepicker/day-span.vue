<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-daterangepicker id="daterangepicker" :placeholder="waterMarkText" :minDays="minDay" :maxDays="maxDay"></ejs-daterangepicker>
    </div>
   <div id="action-description">
    <p>
        In this sample, your date range selection is restricted to select <code>minimum</code> five days and <code>maximum</code> ten days.
    </p>
</div>
<div id="description">
    <p>
        DateRangePicker has
        <code>minDays</code> and
        <code>maxDays</code> supports to force the user to select the minimum and maximum number of days in the range. Only the values in this
        range will be enabled.
    </p>
    <p>
        For example, in some hotel booking website, we need to book rooms that includes packages like minimum 5 days to maximum 10
        days. For this scenario this feature can be used.
    </p>
    <p>More information on the DateRangePicker minDays/maxDays support can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/range-restriction.html#range-span" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DateRangePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      waterMarkText: "Select a Range",
      minDay: 5,
      maxDay: 10
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
