<template>
<div class="col-lg-12 control-section">
    <div class="control_wrapper month-picker">
        <div id="container" style="overflow:auto">
              <ejs-calendar id="calendar" :change="onValueChange" :start="start" :depth="depth"></ejs-calendar>
            <span id="date_label"> Selected Value: </span>

        </div>
    </div>
    <div id="action-description">
    <p>
        The following sample demonstrates the Calendar component acting as a month picker. It allows you to select values in terms of months.
    </p>
</div>
<div id="description">
        <p>
            The Calendar has the <code>Start</code> and the <code>Depth</code> properties that provide options to restrict users from navigating to any Calendar view (year, month, or decade). </p>
        <p>More information on the Calendar Start/Depth can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/api/calendar/#start" target="_blank">Start</a>|<a href="https://ej2.syncfusion.com/vue/documentation/api/calendar/#depth" target="_blank">Depth</a> documentation section.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";
import { Internationalization } from '@syncfusion/ej2-base';

Vue.use(CalendarPlugin);
export default Vue.extend({
    data: function() {
    return {
      start: 'Year',
      depth: 'Year'
    };
  },
  methods: {
    onValueChange: function(args) {
        var  intl = new Internationalization();
        var value = intl.formatDate(args.value, { type: 'dateTime', format: 'MMMM y' });
      document.getElementById("date_label").textContent =
        "Selected Value: " + value;
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

.control_wrapper.month-picker {
  max-width: 300px;
  margin: 0 auto;
}
body.highcontrast #date_label {
  color: white;
}
</style>
