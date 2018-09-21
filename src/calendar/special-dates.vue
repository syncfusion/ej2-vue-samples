<template>
<div class="col-lg-12 control-section">
    <div class="control_wrapper">
        <div id="container" style="overflow:auto">
              <ejs-calendar :renderDayCell="load" :class="cssClass" :change="onValueChange"></ejs-calendar>
            <span id="date_label"> Selected Value: </span>

        </div>
    </div>
    <div id="action-description">
    <p>
        In the following sample, specific dates are <code>highlighted</code> to notify the additional information of that date. Click the <code>special date</code>, and the tooltip information about the date will be displayed in the label below the Calendar.
    </p>
</div>
<div id="description">
    <p>
        Special Dates sample demonstrates, how to customize a specific dates in a calendar by using <code>renderDayCell</code> event. This event gets triggered on each day cell element creation that allows you to customize or disable the specific dates
        in calendar. Here 10, 15 and 20 date's are customized with custom styles and custom classes. </p>
    <p>More information on the calendar customization can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/calendar/customization.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";
import { addClass } from "@syncfusion/ej2-base";

Vue.use(CalendarPlugin);
export default Vue.extend({
  data: function() {
    return {
      cssClass: "e-customStyle"
    };
  },
  methods: {
    specialDate: function(args, name) {
      let span = document.createElement("span");
      span.setAttribute("class", "e-icons highlight");
      args.element.firstElementChild.setAttribute("title", name + "!");
      addClass([args.element], ["e-day", "special", name.toLowerCase()]);
      args.element.setAttribute("data-val", name + "!");
      args.element.setAttribute("title", name + "!");
      args.element.appendChild(span);
    },
    load: function(args) {
      /*Date need to be customized*/
      if (args.date.getDate() === 10) {
        this.specialDate(args, "Birthday");
      }
      if (args.date.getDate() === 15) {
        this.specialDate(args, "Farewell");
      }
      if (args.date.getDate() === 20) {
        this.specialDate(args, "Vacation");
      }
    },
    onValueChange: function(args) {
      let title = "";
      if (args.event) {
        /*Displays selected date in the label*/
        title = args.event.currentTarget.getAttribute("data-val");
        title = title == null ? "" : " ( " + title + " )";
      }
      document.getElementById("date_label").textContent =
        "Selected Value: " + args.value.toLocaleDateString() + title;
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

.control_wrapper {
  max-width: 300px;
  margin: 0 auto;
}

.e-customStyle span.e-icons.highlight {
  margin-top: -13px;
  display: block;
  margin-left: 4px;
  font-weight: bold;
  font-size: 14px;
}

.e-customStyle td span.e-icons.highlight {
  color: #0501fc;
}

.e-customStyle .e-other-month span.e-icons.highlight:before {
  content: "";
}

.e-customStyle span.e-icons.highlight:before {
  content:"\e790";
  vertical-align: middle;
  margin-right: 3px;
  font-size: 4px;
  position: relative;
  top: -1px;
  font-weight: normal;
}

.e-bigger .e-customStyle.e-calendar span.e-icons.highlight:before {
  top: -3px;
}

body.highcontrast .e-bigger .e-customStyle.e-calendar span.e-icons.highlight:before {
  top: -2px;
}

.e-customStyle .e-selected span.e-icons.highlight:before {
  color: #fff;
}

body.highcontrast .e-customStyle td.birthday span.e-icons.highlight:before {
  color: #ff6161;
}

body.highcontrast .e-customStyle td.farewell span.e-icons.highlight:before {
  color: #2bc700;
}

body.highcontrast .e-customStyle td.vacation span.e-icons.highlight:before {
  color: #ff7d1a;
}
</style>