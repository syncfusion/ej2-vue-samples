<template>
<div class="col-lg-12 control-section">
    <div class="control_wrapper calendar-default">
        <div id="container" style="overflow:auto">
              <ejs-calendar id="calendar" :change="onValueChange"></ejs-calendar>
            <span id="date_label"> Selected Value: </span>

        </div>
    </div>
    <div id="action-description">
    <p>
        The following sample demonstrates the default functionalities of the Calendar. Today's date is always <code>highlighted</code> in the Calendar and it get <code>focused</code> if there is no selected date. Click/Touch the desired date from the Calendar and the selected date will be displayed in the below label.
    </p>
</div>
<div id="description">
    <p>
        A <code>Calendar</code> is a graphical user interface component which provides the multi-view representation to display and select a date. Also, provide options to navigate in different levels of views like month, year, decade.
    </p>
    <p>More information on the calendar instantiation can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/calendar/getting-started.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default Vue.extend({
  methods: {
    onValueChange: function(args) {
      document.getElementById("date_label").textContent =
        "Selected Value: " + args.value.toLocaleDateString();
    }
  }
});
</script>


<style>
#date_label {
  display: block;
  width: 248px;
  color: rgba(0, 0, 0, 0.58);
  margin-left: 5px;
}

.control_wrapper.calendar-default {
  max-width: 300px;
  margin: 0 auto;
}
body.highcontrast #date_label {
  color: white;
}
</style>