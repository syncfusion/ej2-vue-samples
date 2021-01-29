<template>
  <div>
    <ejs-radiobutton name="gender" value="male" label="Male"></ejs-radiobutton>
    <ejs-radiobutton name="gender" value="female" label="Female" cssClass="margin"></ejs-radiobutton>
  </div>
</template>

<style>
.margin {
  margin-left: 10px !important;
}
</style>

<script>
import Vue from "vue";
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(RadioButtonPlugin);

export default { }
</script>
