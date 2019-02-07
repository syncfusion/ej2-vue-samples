<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datepicker id="datepicker" :placeholder="waterMarkText" :renderDayCell="disableDate"></ejs-datepicker>
    </div>
    <div id="action-description">
    <p>
        In the following sample, all the weekends (Saturday and Sunday) of a month are <code>disabled</code>, and these dates are restricted to set or select in the DatePicker.
    </p>
</div>
<div id="description">
    <p>
         In the following sample, all the weekends (Saturday and Sunday) of a month are disabled, and these dates are <code>restricted</code> to set or select in the DatePicker. Here the weekend dates are disabled by using renderDayCell.
    </p>
    <p>More information on the disabled dates can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/datepicker/customization.html" target="_blank"> documentation section</a>.</p>
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
      waterMarkText: "Choose a date"
    };
  },
  methods: {
    disableDate: function(args) {
      if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
      }
    }
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