<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datetimepicker id="datetimepicker" :enableMask="mask" :format="dateTimeFormat"></ejs-datetimepicker>
    </div>
    <div id="action-description">
    <p>
        The following sample demonstrates the date time masking functionality in the DateTimePicker. It allows you to enter a valid value for each mask pattern of the date time masking.
    </p>
</div>
<div id="description">
    <p>
        DateTimePicker has an <code>enableMask</code> property that allows you to enable the built-in date time masking support. The mask pattern is defined based on the provided date time format to the component. If the format is not specified, the mask pattern is formed based on the default format of the current culture.
    </p>
</div>
</div>
</template>


<script>

import { DateTimePickerComponent, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

export default {
  data: function() {
    return {
      mask: true,
      dateTimeFormat: 'M/d/yyyy hh:mm a'
    };
  },
  components: { 'ejs-datetimepicker': DateTimePickerComponent },
  provide: {
      datetimepicker: [MaskedDateTime]
  }
};
</script>


<style scoped>
#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}
</style>