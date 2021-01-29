<template>
  <div>
    <ejs-multiselect :showClearButton="false" placeholder="Areas of Interest" :dataSource="languages"></ejs-multiselect>
  </div>
</template>

<script>
import Vue from "vue";
import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(MultiSelectPlugin);

export default {
data: () => {
  return {
    languages: ['JAVA', 'C#', 'SQL']
  }
 }
}
</script>
