<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datepicker id="datepicker" :value="value" :start="start" :depth="depth" :format="format"></ejs-datepicker>
    </div>
   <div id="action-description">
    <p>
        The following sample demonstrates the DatePicker component acting as a month picker. It allows you to select values in terms of months.
    </p>
</div>
<div id="description">
    <p>
        DatePicker has the <code>Start</code> and the <code>Depth</code> properties that provide options to restrict users from navigating to any Calendar view (year, month, or decade). </p>
    <p>More information on the DatePicker Start/Depth can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/datepicker/view/#start-and-depth-view" target="_blank"> documentation section</a>.
    </p>
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
        value:new Date(),
        start: 'Year',
        depth: 'Year',
        format: 'MMMM y'
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