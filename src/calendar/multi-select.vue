<template>
<div class="col-lg-12 control-section">
    <div id="control_wrapper" class="col-lg-6 col-sm-8 col-md-8 multiselectWrapper">
        <div id="container" style="overflow:auto">
              <ejs-calendar :values="date" :isMultiSelection="multiSelection" :created="onCreated" :change="onValueChange"></ejs-calendar>
        </div>         
    </div>
    <div class="valuesWrapper col-lg-6 col-sm-8 col-md-8">
      <h5>Selected values</h5>
      <div class="contentValue">
        <div id="multiSelect">
        </div>
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
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);
export default Vue.extend({
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
  methods: {
    onCreated: function () {
      let element = document.getElementById("multiSelect");
      element.innerHTML = "";
      for (let index = 0; index < this.date.length; index++) {
        element.prepend(document.createTextNode(this.date[index]));
        element.prepend(document.createElement("br"));
      }
    },
    onValueChange: function (args) {
      if (args.isInteracted) {
        let element = document.getElementById("multiSelect");
        element.prepend(args.value);
        element.prepend(document.createElement("br"));
      }
    }
  }
});
</script>

<style>
#control_wrapper.multiselectWrapper {
  max-width: 330px;
  margin: 0 auto;
  float: none;
}

.contentValue {
   padding: 10px;
    overflow: auto;
    max-height: 100px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.e-bigger #wrapper,
.e-bigger#wrapper {
        max-width: 300px;
}

.valuesWrapper {
    margin: 0 auto;
    float: none;
    padding: 0;
    max-width: 370px;

}

body.highcontrast .contentValue {
  border: 1px solid #969696;
}
</style>