<template>
  <div>
    <ejs-textbox rows="2" :multiline="true"></ejs-textbox>
  </div>
</template>

<script>
import Vue from "vue";
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
Vue.use(TextBoxPlugin);

export default { }
</script>
