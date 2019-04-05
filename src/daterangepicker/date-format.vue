<template>
<div>
<div class=" col-lg-8 control-section daterangeformat">
    <div class="content-wrapper">
        <div class="content">
            <div id="control_wrapper" class="control_wrapper datarangepicker_format">
                <ejs-daterangepicker :startDate="startValue" :placeholder="waterMarkText" :endDate="endValue" :format="dateFormat" :separator="separate"></ejs-daterangepicker>
            </div>
        </div>
    </div>
    </div>
    <div id="propertyWrapper" class="col-lg-4 property-section">
                <table id="property " class="property-panel-table" title="Properties">
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
                                <ejs-radiobutton label="dd-MMMM-yyyy" name="format" :change="changeFormat" value="dd-MMMM-yyyy"></ejs-radiobutton>
                            </div>
                            </div>
                        </td>
                    </tr>
                </table>        
    </div>
    <div id="action-description">
    <p>
        In this sample, the DateRangePicker has been configured with the <code> dd/MMM/yy hh:mm a</code> date time format. To change this current date time format, go to the properties panel at the right side and select a date format from the dropdown options. For mobile mode touch the icon at the right side and select a date time format from the dropdown options.
    </p>
  </div>
 <div id="description">
    <p>
        Format sample illustrates the support of custom date time format in the DateRangePicker component by using the
        <code>format</code> property. You can also change the date time format by selecting it from the format options in the properties panel.
    </p>
    <p> More information on the date format configuration can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/daterangepicker/globalization.html#customize-the-date-format" target="_blank">
            documentation section</a>.</p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(DateRangePickerPlugin, RadioButtonPlugin);
export default Vue.extend({
  data: function() {
    return {
      waterMarkText: "Select a Range",
      dateFormat: "dd/MMM/yy hh:mm a",
      startValue: new Date(new Date().setDate(3)),
      endValue: new Date(new Date().setDate(28)),
      separate: "-"
    };
  },
  methods: {
    changeFormat: function(args) {
      this.dateFormat = args.value;
      this.separate = args.value === "yyyy/MM/dd HH:mm" ? "to" : "-";
    }
  }
});
</script>

<style>
.control_wrapper.datarangepicker_format {
  max-width: 275px;
  margin: 30px auto;
  padding-top: 15px;
}

#property.property-section,
#property.property-section {
  margin: 30px auto;
  padding-top: 50px;
}
.control-section.daterangeformat {
  padding: 5%;
}

#control_wrapper #container {
  min-height: 300px;
}

.content {
  width: 60%;
  margin: 0 auto;
  min-width: 185px;
  padding: 20px 0px;
}
#propertyWrapper {
  padding: 5%;
}
</style>