<template>
  <div class="gc-change-summary-panel">
    <strong>Changes applied</strong>
    <ul v-if="changes.length" class="gc-change-summary-list">
      <li v-for="(change, index) in changes" :key="index">{{ change }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AIChangeSummaryTool",
  props: {
    changes: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.gc-change-summary-panel {
  width: 100%;
  min-width: 0;
  margin: 12px 0;
  padding: 12px 14px;
  color: var(--color-sf-primary-text, #242424);
  background: var(--color-sf-content-bg-color-alt1, #ffffff);
  border: 1px solid var(--color-sf-border-light, #dfe3e8);
  border-radius: 10px;
}

.gc-change-summary-panel > strong {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.gc-change-summary-list {
  margin: 0;
  padding-left: 18px;
  color: var(--color-sf-secondary-text, #616161);
  font-size: 13px;
  line-height: 1.6;
}
</style>