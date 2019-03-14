<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-daterangepicker id="daterangepicker" :start="start" :depth="depth" :format="format" :placeholder="waterMarkText"></ejs-daterangepicker>
    </div>
   <div id="action-description">
    <p>
        The following sample demonstrates the DateRangePicker component acting as a month range picker. It allows you to select values within the range of months.
    </p>
</div>
<div id="description">
    <p>
        DateRangePicker has the <code>Start</code> and the <code>Depth</code> properties that provide options to restrict users from navigating to any Calendar view (year, month, or decade). 
    </p>
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
      start: 'Year',
      depth: 'Year',
      format: 'MMM yyyy'
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