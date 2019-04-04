<template>
<div id="calendarWrapper" class="control-section">
<div class="control-label">Two-Way Binding</div>
   <div class="col-lg-6">
        <div class="control_wrapper two-way">
            <div id="container" style="overflow:auto">
              <ejs-calendar id="calendar" v-model="date"></ejs-calendar>
            </div>
        </div>
    </div>
    <div class="col-lg-6 ">
        <div class="control_wrapper">
            <div id="container" style="overflow:auto">
              <ejs-calendar id="calendar" v-model="date"></ejs-calendar>
            </div>
        </div>
    </div>
    <div id="action-description">
    <p>
        In the following sample, Calendar component supports Two-way binding. It keeps the data in sync with your DOM without doing anything.
    </p>
</div>
<div id="description">
    <p>
        Model binding sample illustrates the two-way binding.  when you change the value in one Calendar component, it will update in the other Calendar by using value property.
    </p>
    <p>More information on the model binding can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/calendar/getting-started.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default Vue.extend({
  data: function() {
    return {
      date: new Date()
    };
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

.control_wrapper.two-way {
  max-width: 300px;
  margin: 0 auto;
}
body.highcontrast #date_label {
  color: white;
}
#calendarWrapper .control-label {
  width: 165px;
  margin: 0 auto;
  font-size: 14px;
  user-select: none;
  font-weight: 500;
}
</style>