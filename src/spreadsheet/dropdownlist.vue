<template>
  <div>
    <ejs-dropdownlist placeholder="Experience" :dataSource="experience"></ejs-dropdownlist>
  </div>
</template>

<script>
import Vue from "vue";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(DropDownListPlugin);

export default {
data: () => {
  return {
    experience: ['0 - 1 year', '1 - 3 years', '3 - 5 years', '5 - 10 years']
  }
 }
}
</script>
