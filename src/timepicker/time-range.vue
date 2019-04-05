<template>
<div class="control-section range">
    <div id="component_wrapper">
        <div class="pane">
            <div class="tabs-wrap">
                <div class="wrap">
                   <ejs-timepicker  id='startPicker' :change ='onEnableEndTime' :enabled="startEnable" :readonly="startRead" :placeholder="waterMark" :value="startVal" ></ejs-timepicker>
                  </div>
            </div>
            <div class="tabs-wrap" style="clear: both">
                <div class="wrap">
                     <ejs-timepicker  id='endPicker'  :placeholder="waterMark" :enabled="endEnable" :readonly='endRead' :min="min" :step="step" :value="endVal" :change='changeValue'></ejs-timepicker>
                </div>
            </div>
            <div class="tabs-wrap">
                <div class="wrap" style="clear: both">
                    <ejs-checkbox id="dayRange" label="Business Hours" :change="changeTime"></ejs-checkbox>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
      <p>
       Select a start time from the first TimePicker and then the second TimePicker will be enabled. Select an end time from the second TimePicker to get a <code>time range</code>. Click/Touch the Business Hours checkbox to change both the TimePickers to <code>read-only</code> state.
      </p>
    </div>
    <div id="description">
     <p>Time Range sample illustrates the appointment time selection scenario with the start and end time option. Here, two TimePicker components are used to select the start and end time.</p>
     <p>Before the start time selection, the end time TimePicker is in disable state. When the start time is selected, then you will be able to select the end time or else, need to select the entire business hours 9:00 to 18:00 from the <code>Business Hours</code> option. Once the options are checked, both the TimePicker components goes to readonly state.</p>
     <p>More information on the time range restriction can be found in the
        <a href="https://ej2.syncfusion.com/vue/documentation/timepicker/time-range.html" target="_blank">
         documentation section</a>.</p>
   </div>
</div>
</template>

<script>
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(TimePickerPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
  data: function() {
    return {
      waterMark: "Select a time",
      endEnable: false,
      startEnable: true,
      startRead: false,
      endRead: false,
      min: new Date(),
      isStartTimeChange: true,
      step: 30,
      startVal: null,
      endVal: null
    };
  },
  methods: {
    changeValue: function(args) {
      this.endVal = args.value;
    },
    onEnableEndTime: function(args) {
      /*Enables end time if start time is selected*/
      let value;
      if (this.isStartTimeChange) {
        this.endEnable = true;
        this.endVal = null;
        value = new Date(args.value);
        value.setMinutes(value.getMinutes() + this.step);
        this.min = value;
      } else {
        this.isStartTimeChange = true;
      }
    },
    changeTime: function(args) {
      let value;
      /*To determine whether we have selected business hours or not*/
      this.isStartTimeChange = false;
      if (args.checked) {
        /*Business hours*/
        this.startVal = new Date("9/6/2017 9:00");
        this.endEnable = true;
        this.endVal = new Date("9/6/2017 18:00");
        this.startRead = true;
        this.endRead = true;
      } else {
        this.endVal = null;
        this.startVal = null;
        this.startRead = false;
        this.endRead = false;
        this.endEnable = false;
      }
    }
  }
});
</script>
<style>

#component_wrapper {
  display: block;
  margin: 0 auto;
  float: none;
  padding: 2% 0;
  max-width: 300px;
}

.control-section.range {
  margin: 30px;
  padding: 3%;
}

.e-bigger .control-section.range {
  margin-top: 60px;
}

.range .tabs-wrap {
  padding: 12px 0px;
}
</style>