<template>
  <div>
    <template v-if="data.Winner && data.Movie">{{data.Winner}} wins oscar award for {{data.Movie}}</template>
    <template v-else-if="data.Movie">Oscar award for {{data.Movie}}</template>
    <template v-else>{{data.Performance}}</template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>