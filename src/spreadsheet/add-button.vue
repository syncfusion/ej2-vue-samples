<template>
  <div>
    <ejs-button cssClass="e-flat" v-bind:style="{float: 'right'}" content="Add"></ejs-button>
  </div>
</template>

<script>
import Vue from "vue";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);

export default { }
</script>
