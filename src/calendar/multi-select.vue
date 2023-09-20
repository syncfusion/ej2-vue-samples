<template>
<div class="col-lg-12">
  <div class="col-lg-7 control-section sb-property-border">
    <div id="control_wrapper" class="col-lg-6 col-sm-8 col-md-8 multiselectWrapper">
        <div id="container">
              <ejs-calendar :values="date" :isMultiSelection="multiSelection" :created="onCreated" :change="onValueChange"></ejs-calendar>
        </div>   
      </div>      
    </div>
    <div class="col-lg-5">
      <label style="padding-top:22px">Selected values</label>
      <div class="content-value">
        <div id="multiselect"></div>
      </div>
    </div>
    <div id="action-description">
                    <p>
                         The following sample demonstrates the multiple date selection functionalities of the Calendar. Click /Touch the desired date from the Calendar and the selected date will be added to the values property of the calendar.
                   </p>
                </div>
                <div id="description">
                    <p>
                        Multi selection sample demonstrates, how to enable and select the multiple date in a calendar by using
            <code>isMultiSelection</code> and
            <code>values</code> properties . Here 10, 15 and 25 date's are selected.
        </p>
                    <p>More information on the calendar instantiation can be found in this
            <a href="https://ej2.syncfusion.com/vue/documentation/calendar/getting-started.html" target="_blank">
                            documentation section</a>.</p>
                </div>
</div>
</template>

<script>
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  data: function() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    return {
      multiSelection: true,
      date: [
        new Date(year, month, 10),
        new Date(year, month, 15),
        new Date(year, month, 25)
      ]
    };
  },
  components: { 'ejs-calendar': CalendarComponent },
  methods: {
    onCreated: function () {
      let element = document.getElementById("multiselect");
      element.innerHTML = "";
      for (let index = 0; index < this.date.length; index++) {
        element.prepend(document.createTextNode(this.date[index]));
        element.prepend(document.createElement("br"));
      }
    },
    onValueChange: function (args) {
      if (args.isInteracted) {
        let element = document.getElementById("multiselect");
        element.innerHTML = "";
        for (let j = 0; j < args.values.length; j++) {
            element.prepend(document.createTextNode(args.values[j]));
            element.prepend(document.createElement("br"));
        }
      }
    }
  }
};
</script>

<style scoped>
#control_wrapper.multiselectWrapper {
  max-width: 330px;
  margin: 0 auto;
  float: none;
}

.content-value {
   padding: 10px;
    overflow: auto;
    max-height: 150px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    margin-top: 15px;
    font-size: 12px;
}

body.fluent-dark #date_label,
body.bootstrap5-dark #date_label,
body.tailwind-dark #date_label,
body.material-dark #date_label,
body.material3-dark #date_label,
body.fabric-dark #date_label,
body.bootstrap-dark #date_label,
body.highcontrast #date_label {
    color: white;
} 
.e-bigger #wrapper,
.e-bigger#wrapper {
        max-width: 300px;
}

.highcontrast .content-value,
.material-dark .content-value,
.material3-dark .content-value,
.fabric-dark .content-value,
.bootstrap-dark .content-value,
.bootstrap5-dark .content-value,
.tailwind-dark .content-value,
.fluent-dark .content-value {
  border: 1px solid rgb(150, 150, 150);
}
</style>
