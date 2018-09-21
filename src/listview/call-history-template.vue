<template>
 <div class="e-list-wrapper e-list-avatar e-list-multi-line">
    <span class="e-avatar e-icon"></span>
    <span class="e-list-item-header">{{data.text}}</span>
    <span :class="['e-list-content ' + data.type]">{{data.group}}, {{data.time}}</span>
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
