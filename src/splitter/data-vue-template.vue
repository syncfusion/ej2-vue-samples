<template>
<div class="settings e-list-wrapper e-list-multi-line">
  <span class="e-list-item-header">{{data.Name}}</span>
  <div class="status">
    <span class="e-list-content">{{data.content1}}</span>
  </div>
  <div id="list-message">
    <span class="e-list-content">{{data.content2}}</span>
  </div>
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
