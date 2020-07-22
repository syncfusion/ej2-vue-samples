<template let-data>
  <div class="header-template-wrap">
    <div :class="getClassName(data)"></div>
    <div class="header-text">{{data.headerText}}</div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getClassName: function(data) {
      return "header-icon e-icons " + data.keyField;
    }
  }
};
</script>
