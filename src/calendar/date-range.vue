<template>
<div class="col-lg-12 control-section">
    <div class="control_wrapper date-range">
        <div id="container" style="overflow:auto">
              <ejs-calendar :min="minDate" :max="maxDate" :change="onValueChange"></ejs-calendar>
            <span id="date_label"> Selected Value: </span>

        </div>
    </div>
    <div id="action-description">
    <p>
        In the following sample, a specific date ranges from 5th to 27th of a month has been set to select from the Calendar. All the other dates are out of range and <code>restricted</code> to set or select.
    </p>
</div>
<div id="description">
    <p>
        Date Range sample illustrates the date selection within a specific range in a calendar by using <code>min</code> and <code>max</code> properties.
    </p>
    <p>
        Here, the date selection range was resricted within 5/5/2017 - 5/27/2017.
    </p>
    <p>More information on the date range restriction can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/calendar/date-range.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  data: function() {
    return {
      minDate: new Date("05/05/2017"),
      maxDate: new Date("05/27/2017")
    };
  },
  components: { 'ejs-calendar': CalendarComponent },
  methods: {
    onValueChange: function(args) {
      document.getElementById("date_label").textContent =
        "Selected Value: " + args.value.toLocaleDateString();
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

.control_wrapper.date-range {
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