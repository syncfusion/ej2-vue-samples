<template>
<div class="control-section time-format">
    <div class="control_wrapper time_range">
        <div class="tabs-wrap">
            <div class="wrap">
         <ejs-timepicker id="timepicker" :placeholder="waterMarkText" :value='value' :step='interval' :format='customFormat'></ejs-timepicker>
     </div>
        </div>
    </div>
    <div id="action-description">
    <p>
    The TimePicker has been customized with 24-hour format with 60 minutes <code>interval</code>. Click/Touch the TimePicker popup icon to a select a time from 00:00 to 23:00 from the TimePicker popup. 
    </p>
</div>
<div id="description">
    <p>
        TimePicker provides an option to customize the display format of the time value using the
        <a href="https://ej2.syncfusion.com/vue/documentation/timepicker/getting-started.html#setting-the-time-format" target="_blank">format</a>        property. It accepts <a href="https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings"
            target="_blank"> standard </a> &
        <a href="https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings" target="_blank"> custom date and time format strings</a>        as specified in MSDN.
    </p>
    <p> Here, the time value displayed in 24-hour format with <code> 60 </code> minute step interval. To know more about custom time formatting, refer the
        <a href="https://ej2.syncfusion.com/documentation/base/intl.html?lang=typescript#custom-formats" target="_blank"> Parsing and formatting</a>        section. By default, TimePicker component is formatted with `en` (English) culture.
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
      waterMarkText: "Select a time",
      value: new Date(),
      interval: 60,
      customFormat: "HH:mm"
    };
  }
});
</script>



<style>
#wrapper {
  margin: 0 auto;
}

.control_wrapper.time_range {
  margin: 0 auto;
  display: block;
  max-width: 300px;
  padding: 5% 0;
}

.tabs-wrap {
  padding: 0px 0px 10px;
}

.e-bigger .control-section.time-format {
  margin-top: 60px;
}

.btn-wrap {
  padding: 20px 0px 10px;
}
</style>