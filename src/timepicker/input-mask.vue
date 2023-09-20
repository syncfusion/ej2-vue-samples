<template>
<div class="control-section timepicker-default">
    <div class="control_wrapper timepicker_default">
        <div class="tabs-wrap">
            <div class="wrap">
         <ejs-timepicker id="timepicker" :enableMask="mask" :format="timeFormat"></ejs-timepicker>
     </div>
        </div>
    </div>
    <div id="action-description">
    <p>
        The following sample demonstrates the time masking functionality in the TimePicker. It allows you to enter a valid value for each mask pattern of the time masking.
    </p>
</div>
<div id="description">
    <p>
        TimePicker has an <code>enableMask</code> property that allows you to enable the built-in time masking support. The mask pattern is defined based on the provided time format to the component. If the format is not specified, the mask pattern is formed based on the default format of the current culture.
    </p>
</div>
</div>
</template>

<script>

import { TimePickerComponent, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

export default {
  data: function() {
    return {
      mask: true,
      timeFormat: 'h:mm a'
    };
  },
  components: { 'ejs-timepicker': TimePickerComponent },
  provide: {
    timepicker: [MaskedDateTime]
  }
};
</script>

<style scoped>
.control_wrapper.timepicker_default {
  display: block;
  margin: 0 auto;
  max-width: 300px;
  padding: 5% 0;
}

.tabs-wrap {
  padding: 0 0px 10px;
}

.e-bigger .control-section.timepicker-default {
  margin-top: 60px;
}
</style>