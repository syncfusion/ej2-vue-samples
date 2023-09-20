<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datetimepicker id="datetimepicker" :renderDayCell="load" :cssClass="cssClass" :value="dateValue"></ejs-datetimepicker>
    </div>
    <div id="action-description">
    <p>
        In the following sample, specific dates are <code>highlighted</code>. In desktop mode highlighted information about the date will be displayed when hovered.
    </p>
</div>
<div id="description">
  <p>
        Special Dates sample demonstrates, how to customize a specific dates in a datetimepicker by using
        <code>renderDayCell</code> event. This event gets triggered on each day cell element creation that allows you to customize or disable the specific
        dates in datetimepicker. Here 10, 15 and 25 date's are customized with custom styles by adding the
        <code>datetimepicker-special-dates</code> class.
    </p>
    <p>More information on the DateTimePicker customization can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/datetimepicker/customization.html" target="_blank"> documentation section</a>.</p>
</div>
</div>
</template>

<script>

import { DateTimePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { addClass } from "@syncfusion/ej2-base";

export default {
  data: function() {
    return {
      dateValue: new Date("1/13/2017"),
      cssClass: "datetimepicker-special-dates"
    };
  },
  components: { 'ejs-datetimepicker': DateTimePickerComponent },
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
    }
  }
};
</script>



<style scoped>
#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}

.datepicker-special-dates .e-input-group-icon.e-date-icon::before, 
*.e-control-wrapper.datepicker-special-dates .e-input-group-icon.e-date-icon::before, 
.datepicker-special-dates.e-datetime-wrapper .e-time-icon.e-icons::before {
  transform: translate(0,1px);
}

.e-bigger .datepicker-special-dates .e-input-group-icon.e-date-icon::before, 
.e-bigger *.e-control-wrapper.datepicker-special-dates .e-input-group-icon.e-date-icon::before,
.e-bigger .datepicker-special-dates.e-datetime-wrapper .e-time-icon.e-icons::before {
  transform: translate(0,2px);
}

.datepicker-special-dates.e-input-group .e-clear-icon, 
.datepicker-special-dates.e-input-group.e-control-wrapper .e-clear-icon {
  padding-top: 4px;
}

.e-bigger .datepicker-special-dates.e-input-group .e-clear-icon, 
.e-bigger .datepicker-special-dates.e-input-group.e-control-wrapper .e-clear-icon {
  padding-top: 5px;
}

@font-face {
    font-family: 'e-icons';
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}
</style>
<style>
  .datetimepicker-special-dates span.e-icons.highlight {
  margin-top: -13px;
  display: block;
  margin-left: 4px;
  font-weight: bold;
  font-size: 14px;
}

.datetimepicker-special-dates td span.e-icons.highlight {
  color: #0501fc;
}

.highcontrast .datetimepicker-special-dates td.e-icons.highlight,
.highcontrast .datetimepicker-special-dates td.e-icons.highlight:before,
.material-dark .datetimepicker-special-dates td.e-icons.highlight,
.material-dark .datetimepicker-special-dates td.e-icons.highlight:before,
.material3-dark .datetimepicker-special-dates td.e-icons.highlight,
.material3-dark .datetimepicker-special-dates td.e-icons.highlight:before,
.fabric-dark .datetimepicker-special-dates td.e-icons.highlight,
.fabric-dark .datetimepicker-special-dates td.e-icons.highlight:before,
.bootstrap-dark .datetimepicker-special-dates td.e-icons.highlight,
.bootstrap-dark .datetimepicker-special-dates td.e-icons.highlight:before,
.bootstrap5-dark .datetimepicker-special-dates td.e-icons.highlight,
.bootstrap5-dark .datetimepicker-special-dates td.e-icons.highlight:before,
.tailwind-dark .datetimepicker-special-dates td.e-icons.highlight,
.tailwind-dark .datetimepicker-special-dates td.e-icons.highlight:before {
    color: #ff7500;
}

.datetimepicker-special-dates .e-other-month span.e-icons.highlight:before {
  content: "";
}

.datetimepicker-special-dates span.e-icons.highlight:before {
  content:"\e190";
  vertical-align: middle;
  margin-right: 3px;
  font-size: 4px;
  position: relative;
  top: 0px;
  font-weight: normal;
}

.e-bigger .datetimepicker-special-dates.e-calendar span.e-icons.highlight:before {
  top: -3px;
}

body.highcontrast .e-bigger .datetimepicker-special-dates.e-calendar span.e-icons.highlight:before {
  top: -2px;
}

body.highcontrast .datetimepicker-special-dates td.birthday span.e-icons.highlight:before {
  color: #ff6161;
}

body.highcontrast .datetimepicker-special-dates td.farewell span.e-icons.highlight:before {
  color: #2bc700;
}

body.highcontrast .datetimepicker-special-dates td.vacation span.e-icons.highlight:before {
  color: #ff7d1a;
}
</style>