<template>
<div class="col-lg-12 control-section">
    <div class="control_wrapper month-picker">
        <div id="container">
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

import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import { Internationalization } from '@syncfusion/ej2-base';

export default {
    data: function() {
    return {
      start: 'Year',
      depth: 'Year'
    };
  },
  components: { 'ejs-calendar': CalendarComponent },
  methods: {
    onValueChange: function(args) {
        var  intl = new Internationalization();
        var value = intl.formatDate(args.value, { type: 'dateTime', format: 'MMMM y' });
      document.getElementById("date_label").textContent =
        "Selected Value: " + value;
    }
  }
};
</script>


<style scoped>
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

body.fluent-dark #date_label,
body.fluent2-dark #date_label,
body.fluent2-highcontrast #date_label,
body.bootstrap5-dark #date_label,
body.bootstrap5\.3-dark #date_label,
body.tailwind-dark #date_label,
body.tailwind3-dark #date_label,
body.material-dark #date_label,
body.material3-dark #date_label,
body.fabric-dark #date_label,
body.bootstrap-dark #date_label,
body.highcontrast #date_label {
    color: white;
} 
</style>
