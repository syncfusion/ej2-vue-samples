<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datetimepicker id="datetimepicker" :placeholder="waterMarkText" :renderDayCell="disableDate"></ejs-datetimepicker>
    </div>
    <div id="action-description">
    <p>
        In the following sample, all the weekends (Saturday and Sunday) of a month are
        <code>disabled</code>, and these dates are restricted to set or select in the DateTimePicker.
    </p>
</div>
<div id="description">
    <p>
        Disabled Dates sample demonstrates how to disable specific dates in the DateTimePicker by using <code>renderDayCell</code> event. This event gets triggered on each day cell element creation, that allows you to customize, or disable specific dates
        in the DateTimePicker. Here the weekend dates are disabled by using renderDayCell.
    </p>
    <p>More information on the disabled dates can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/datetimepicker/customization.html" target="_blank"> documentation section</a>.</p>
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
      waterMarkText: "Select a date and time"
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