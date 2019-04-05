<template>
<div>
<div class=" col-lg-8 control-section datetimeformat">
    <div class=" content-wrapper">
        <div class="content">
            <div id="control_wrapper"  class="control_wrapper datetimepicker_format">
                <ejs-datetimepicker id="datetimepicker" :placeholder="waterMarkText" :value="date" :format="dateFormat"></ejs-datetimepicker>
            </div>
        </div>
    </div>
    </div>
    <div id="propertyWrapper" class="col-lg-4 property-section">
                <table class="property-panel-table" title="Properties">
                    <tr>
                        <td>
                            <div class="radio-control">
                            <h4 class="row">Select a Format</h4>
                            <div class="row">
                                <ejs-radiobutton label="dd-MMM-yy hh:mm a" name="format" :change="changeFormat" value="dd-MMM-yy hh:mm a" :checked="true"></ejs-radiobutton>
                            </div>
                            <div class="row">
                                <ejs-radiobutton label="yyyy-MM-dd HH:mm" name="format" :change="changeFormat" value="yyyy-MM-dd HH:mm"></ejs-radiobutton>
                            </div>
                            <div class="row">
                                <ejs-radiobutton label="dd-MMMM HH:mm" name="format" :change="changeFormat" value="dd-MMMM HH:mm"></ejs-radiobutton>
                            </div>
                            </div>
                        </td>
                    </tr>
                </table>
    </div>
   <div id="action-description">
    <p>
       In this sample, the DateTimePicker has been configured with the
            <code>dd-MMM-yy hh:mm a</code> date time format.
            To change this current date time format, go to the properties panel at the right side and select a date format from the dropdown options.
            For mobile mode touch the icon at the right side and select a date time format from the dropdown options.
    </p>
</div>
<div id="description">
    <p>
        Datetime Formats sample illustrates the support of custom dateTime format in the DateTimePicker component by using the <code>format</code> property. You can also change the datetime format by selecting it from the format options in the properties
        panel.
    </p>
</div>
</div>
</template>

<script>

import Vue from "vue";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(DateTimePickerPlugin, RadioButtonPlugin);
export default Vue.extend({
  data: function() {
    return {
      waterMarkText: "Select a date and time",
      dateFormat: "dd-MMM-yy hh:mm a",
      date: new Date("05/27/2017 10:00 AM")
    };
  },
  methods: {
    changeFormat: function(args) {
      this.dateFormat = args.value;
    }
  }
});
</script>



<style>
.control_wrapper.datetimepicker_format {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}
#property.property-section,
#property.property-section {
  margin: 30px auto;
  padding-top: 5px;
}
.control-section.datetimeformat {
  padding: 5%;
}

#control_wrapper #container {
  min-height: 300px;
}

.content {
  width: 43%;
  margin: 0 auto;
  min-width: 185px;
  padding: 20px 0px;
}
#propertyWrapper {
  padding: 5%;
}
</style>