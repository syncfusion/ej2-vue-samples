<template>
<div class="control-section timepicker-default">
    <div class="control_wrapper timepicker_default">
        <div class="tabs-wrap">
            <div class="wrap">
         <ejs-timepicker id="timepicker" :placeholder="waterMarkText"></ejs-timepicker>
     </div>
        </div>
    </div>
    <div id="action-description">
    <p>
      The following sample demonstrates the default functionalities of the TimePicker. Click/Touch the TimePicker popup icon to select a desired time and the selected time value will be displayed in the TimePicker element. 
    </p>
</div>
<div id="description">
    <p>
        A <code>TimePicker</code> is an interactive component that provides an option to select a value from popup list or
        set a desired time value.
    </p>
    <p>More information about the TimePicker and it's configuration can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/timepicker/getting-started.html#add-timepicker-to-the-application" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      waterMarkText: "Select a time"
    };
  }
});
</script>

<style>
.control_wrapper.timepicker_default {
  display: block;
  margin: 0 auto;
  max-width: 300px;
  padding: 5% 0;
}

.tabs-wrap {
  padding: 0 0px 10px;
}

.e-bigger .control-section.timepicker-default {
  margin-top: 60px;
}
</style>