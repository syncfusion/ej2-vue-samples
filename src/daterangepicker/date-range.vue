<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-daterangepicker id="daterangepicker" :placeholder="waterMarkText" :min="minDate" :max="maxDate"></ejs-daterangepicker>
    </div>
   <div id="action-description">
    <p>
    In this sample, the date ranges from <code>Jan 15, 2017 - Dec 20, 2017</code> have been set. All the other dates are out of range and <code>restricted</code> to set or select.  
    </p>
</div>

<div id="description">
    <p>
        DateRangePicker has <code>min</code> and <code>max</code> supports to restrict the user to select a value from the given range.
        Only the values in this range will be enabled.
        In this sample, we have specified <code>min</code> range as <code>Jan 15, 2017</code> and <code>max</code> range as <code>Dec 20, 2017</code>. User will be able to select the values between this range only.
    </p>
    <p>More information on the DateRangePicker min/max support can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/range-restriction.html#restrict-the-range-within-a-range"
            target="_blank"> documentation section</a>.</p>
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
      minDate: new Date("1/15/2017"),
      maxDate: new Date("12/20/2017")
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