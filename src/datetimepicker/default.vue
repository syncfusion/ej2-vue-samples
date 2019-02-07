<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datetimepicker id="datetimepicker" :placeholder="waterMarkText"></ejs-datetimepicker>
    </div>
    <div id="action-description">
    <p>
        The following sample demonstrates the default functionalities of the DateTimePicker. Enter the value in input text box or Click/Touch the date and time popup icon to select the desired value.
    </p>
</div>
<div id="description">
    <p>
        The <code>DateTimePicker</code> is a graphical user interface component that allows the user to select, or to enter a datetime value
    </p>
    <p>More information on the DateTimePicker instantiation can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/datetimepicker/getting-started.html" target="_blank"> documentation section</a>.</p>
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