<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-daterangepicker id="daterangepicker" :placeholder="waterMarkText"></ejs-daterangepicker>
    </div>
   <div id="action-description">
    <p>
        The following sample demonstrates the default functionalities of the DateRangePicker. Today's date is always highlighted in the popup calendar and it get focused if there's no selected date. Select a date range from the popup calendar and the selected <code>date range</code> will be displayed in the DateRangePicker element. 
    </p>
</div>
<div id="description">
    <p>
        <code>DateRangePicker</code> is an interactive component that allows the user to select a range from the calendar, or to set a range value.
    </p>
    <p>More information on the DateRangePicker instantiation can be found in the
       <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/getting-started.html" target="_blank"> documentation section</a>.</p>

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
      waterMarkText: "Select a Range"
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