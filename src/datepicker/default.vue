<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datepicker id="datepicker" :placeholder="waterMarkText"></ejs-datepicker>
    </div>
   <div id="action-description">
    <p>
         The following sample demonstrates the default functionalities of the DatePicker. Today's date is always <code>highlighted</code> in the popup calendar and it get focused if there's no selected date. Click/Touch the desired date from the popup calendar and the selected date will be displayed in the element. 
   </p>
 </div>
 <div id="description">
    <p>
        The <code>DatePicker</code> is a graphical user interface component that allows the user to select, or to enter a date value.
    </p>
    <p>More information on the DatePicker instantiation can be found in the
         <a href="https://ej2.syncfusion.com/vue/documentation/datepicker/getting-started.html" target="_blank"> documentation section</a>.</p>
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