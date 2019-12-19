<template>
  <div>
    <template>{{data.TaskName}} [ {{ data.Progress }} % ]</template>
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