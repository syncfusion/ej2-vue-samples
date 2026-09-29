<template>
  <div class="generated-code-container" v-if="views.length">
    <div class="generated-code-header">
      <div class="generated-code-heading">
        <strong class="generated-code-title">Vue standalone samples</strong>
        <div class="generated-code-description">Review and copy each complete runnable Vue single-file component.</div>
      </div>
    </div>
    <div class="generated-code-grid" :class="{ 'single-code-view': views.length === 1 }">
      <section v-for="view in views" :key="view.id" class="generated-code-panel" :aria-label="view.title">
        <div class="generated-code-panel-header">
          <div class="generated-code-heading">
            <strong class="generated-code-title">{{ view.title }}</strong>
            <div class="generated-code-description">{{ view.description }}</div>
          </div>
          <button class="copy-code-button" type="button" @click="copyCode(view)">Copy code</button>
        </div>
        <pre class="generated-code-wrapper" tabindex="0"><code class="generated-code">{{ view.code }}</code></pre>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "AICodeTool",
  props: { config: { type: Object, default: () => ({}) } },
  computed: { views() { return Array.isArray(this.config?.views) ? this.config.views.filter((view) => view?.code) : []; } },
  methods: {
    copyCode(view) {
      if (view?.code && navigator.clipboard) navigator.clipboard.writeText(view.code);
    }
  }
};
</script>
<style scoped>
.generated-code-container {
  width: 100%;
  min-width: 0;
  margin: 12px 0;
  overflow: hidden;
  color: var(--gc-text-primary, #242424);
  background: var(--gc-bg-primary, #ffffff);
  border: 1px solid var(--gc-border-secondary, #dfe3e8);
  border-radius: 10px;
}
.generated-code-header,
.generated-code-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  color: var(--gc-text-primary, #242424);
  background: var(--gc-bg-secondary, #f5f6f8);
  border-bottom: 1px solid var(--gc-border-secondary, #dfe3e8);
}
.generated-code-heading { min-width: 0; }
.generated-code-title { color: var(--gc-text-primary, #242424); font-weight: 600; }
.generated-code-description { margin-top: 3px; color: var(--gc-text-secondary, #616161); font-size: 12px; line-height: 1.4; }
.generated-code-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 12px; padding: 12px; background: var(--gc-bg-primary, #ffffff); }
.generated-code-grid.single-code-view { grid-template-columns: minmax(0, 1fr); }
.generated-code-panel { display: flex; min-width: 0; flex-direction: column; overflow: hidden; background: var(--gc-bg-primary, #ffffff); border: 1px solid var(--gc-border-secondary, #dfe3e8); border-radius: 8px; }
.copy-code-button { flex: 0 0 auto; padding: 6px 12px; color: #ffffff; background: var(--gc-accent, #0f6cbd); border: 0; border-radius: 6px; cursor: pointer; }
.copy-code-button:hover { background: var(--gc-accent-hover, #115ea3); }
.generated-code-wrapper { flex: 1 1 auto; width: 100%; min-height: 320px; max-height: 480px; padding: 16px; margin: 0; overflow: auto; color: var(--gc-code-text, #d4d4d4); background: var(--gc-code-bg, #1e1e1e); font: 13px/1.6 Consolas, Monaco, "Courier New", monospace; white-space: pre; }
.generated-code { color: inherit; font: inherit; }
@media (max-width: 980px) { .generated-code-grid { grid-template-columns: minmax(0, 1fr); } }
</style>