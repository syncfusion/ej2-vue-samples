<template>
<div class="col-lg-12 control-section">
    <div id="wrapper">
         <ejs-datepicker id="datepicker" :enableMask="mask" :format="dateFormat"></ejs-datepicker>
    </div>
   <div id="action-description">
    <p>
        The following sample demonstrates the date masking functionality in the DatePicker. It allows you to enter a valid value for each mask pattern of the date masking.
   </p>
 </div>
 <div id="description">
    <p>
        DatePicker has an <code>enableMask</code> property that allows you to enable the built-in date masking support. The mask pattern is defined based on the provided date format to the component. If the format is not specified, the mask pattern is formed based on the default format of the current culture.
    </p>
   </div>
</div>

</template>

<script>

import Vue from "vue";
import { DatePickerPlugin, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      mask: true,
      dateFormat: 'M/d/yyyy'
    };
  },
  provide: {
      datepicker: [MaskedDateTime]
  }  
});
</script>

<style scoped>
#wrapper {
  max-width: 246px;
  margin: 30px auto;
  padding-top: 15px;
}
</style>