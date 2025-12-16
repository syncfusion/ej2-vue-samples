<template>
<div class="control-section">
  <div class="blockeditor-template">
    <div class="template-gallery-container">
      <div class="cards-wrapper">
      <div class="fade left"></div>
        <div
          ref="cardsContainer"
          class="cards-container"
        >
          <div
            v-for="data in cards"
            :key="data.name"
            class="template-card"
            :class="{ active: selectedCardName === data.name }"
            tabindex="0"
            @click="onCardClick(data)"
            :title="data.name"
          >
            <div class="card-icon-left">
              <span class="icon">{{ data.icon }}</span>
            </div>
            <div class="card-content">
              <div class="card-title">{{ data.name }}</div>
              <div class="card-subtitle">{{ data.subtitle }}</div>
            </div>
          </div>
        </div>
        <div class="fade right"></div>
      </div>
      <div class="header-label" contenteditable="true">
        <span class="selectedTitle" aria-placeholder="Untitle">{{ selectedCardIcon }}{{ selectedCardName }}</span>
      </div>
      <ejs-blockeditor
        ref="blockEditor"
        id="block-editor"
        height="500px"
        :blocks="editorBlocks"
        :created="onCreated"
      />
    </div>
  </div>

  <!-- Description Sections -->
	<div id="action-description">
  <p>
    This sample demonstrates a Template Gallery for the Block Editor; use the horizontal card rail to choose a
    template, load its blocks into the editor, and customize the content with slash (/ ) commands, lists, and inline
    formatting.
  </p>
</div>
<div id="description">
  <p>
    This sample implements a Template Gallery for the Block Editor. A horizontal set of cards acts as a template
    picker; selecting a card loads its predefined block structure into the editor without reloading the page.
  </p>
  <ul>
    <li><b>Interactive cards:</b> Each card is focusable and clickable, with active styling for the selected template.</li>
    <li>
      <b>Dynamic loading:</b> Clicking a card calls
      <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/block-editor/how-to/renderblocksfromjson">renderBlocksFromJson</a>
      to populate the editor with that template’s blocks.
    </li>
    <li><b>Responsive behavior:</b> A ResizeObserver re-evaluates when to enable horizontal scrolling as the viewport changes.</li>
    <li><b>Templates included:</b> Blank Page, Project Brief, Team Decisions, Project Planning, and Meeting Notes.</li>
  </ul>
  <p>
    Use this gallery to kickstart common document plan projects, record decisions, run meetings, and more then tailor
    the content with headings, lists, checklists, and rich inline styles.
  </p>
</div>
</div>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';
import * as data from './blockData.json';

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent
  },
  data() {
    const cards = data.blockTemplate[0].page || [];
    return {
      selectedCardName: null,
      selectedCardIcon: null,
      cards,
      editorBlocks: [],
    };
  },
  mounted() {
    // Initial load
    if (this.cards.length) {
      this.loadPage(this.cards[1]);
    }
  },
  methods: {
    onCreated() {
      this.$refs.blockEditor.ej2Instances.focusIn();
    },
    loadPage(pageData) {
      this.selectedCardName = pageData.name || null;
      this.selectedCardIcon = pageData.icon || null;
      // Call the Syncfusion API to render blocks
      const be = this.$refs.blockEditor;
      // ej2Instances is how Syncfusion Vue wrappers expose the underlying instance
      const instance = be && (be.ej2Instances || be.ej2Instance || be.$refs?.ej2Instances);
      if (instance && typeof instance.renderBlocksFromJson === 'function') {
        instance.renderBlocksFromJson(pageData.blocks, true);
      }
    },
    onCardClick(selectedPage) {
      this.$refs.blockEditor.ej2Instances.focusIn();
      this.loadPage(selectedPage);
    }
  }
};
</script>

<style>
.template-gallery-container .cards-container {
  display: flex;
  gap: 8px;
  padding: 10px 20px;
  transition: all 0.3s ease;
}
.template-gallery-container .cards-wrapper{
  overflow-x: hidden;
}
.template-gallery-container .header-label {
  padding: 15px 20px;
}
.template-gallery-container {
  margin: 10px;
  border: 1px solid #dee2e6;
}
.template-gallery-container .fade {
  position: absolute;
  top: 0;
  width: 60px;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}
.template-gallery-container .fade.left {
  left: 0;
  background: linear-gradient(to right, #f8f9fa 30%, transparent 100%);
}
.template-gallery-container .fade.right {
  right: 0;
  background: linear-gradient(to left, #f8f9fa 30%, transparent 100%);
}
.template-gallery-container .selectedTitle {
  font-family: var(--fontFamilyBase, var(--fontFamilyBase, var(--ms-themeFontFamilyBody)));
  font-size: 2.25em;
  font-weight: 600;
  color: var(--ms-themeColorBodyText, var(--colorNeutralForeground1, var(--ms-themeColorPaletteNeutralPrimary, #323130)));
  line-height: 48px;
  width: 100%;
  widows: 1;
  orphans: 1;
}
.template-card {
  max-width: 180px;
  min-width: 60px;
  height: 60px;
  background: white;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.template-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}
.template-card.active {
  border: 1px solid #007bff;
  box-shadow: 0 0 0 1px rgba(0, 123, 255, 0.2);
}
.template-gallery-container .card-icon-left {
  margin-right: 10px;
}
.template-gallery-container .icon {
  font-size: 28px;
}
.template-gallery-container .card-title {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 4px;
}
.template-gallery-container .card-subtitle {
  font-size: 10px;
  color: #666;
}
body[class*="dark"] .template-card,
body[class*="high"] .template-card {
  background-color: var(--color-sf-content-bg-color);
}
body[class*="dark"] .template-gallery-container .card-subtitle, body[class*="dark"] .template-gallery-container .card-title, body[class*="dark"] .template-gallery-container .selectedTitle,
body[class*="high"] .template-gallery-container .card-subtitle, body[class*="high"] .template-gallery-container .card-title, body[class*="high"] .template-gallery-container .selectedTitle {
  color: #fff;
}
body[class*="high"] .template-gallery-container {
  background: var(--color-sf-content-bg-color);
}
@media (max-width: 650px) {
  .template-gallery-container .cards-container {
    align-items: center;
    justify-content: center;
  }
  .template-card {
    justify-content: center;
  }
  .template-card .card-content {
    display: none;
  }
  .template-gallery-container .card-icon-left {
    margin-right: 0;
  }
}
/* Default styles (for >900px): show full text, no truncation needed */
.template-card .card-content {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.template-card .card-title,
.template-card .card-subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
/* Between 650px and 900px: Show text but truncate with ellipsis when it overflows */
@media (min-width: 650px) and (max-width: 1050px) {
  .template-card {
    min-width: 100px;    
    max-width: 200px;
  }
  .template-card .card-content {
    display: block;  
  }
}
</style>