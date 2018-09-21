<template>
<div class="settings e-list-wrapper e-list-multi-line e-list-avatar">
  <span :class="['icon e-avatar ' + data.class]"></span>
  <span class="e-list-item-header">{{data.Name}}</span>
  <span class="e-list-content">{{data.content}}</span>
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
