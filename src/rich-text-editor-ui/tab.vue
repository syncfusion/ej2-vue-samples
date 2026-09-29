<template>
  <div class="control-section">
    <div class="sample-container">
      <div class="default-section">
        <div id="tab-default"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab } from '@syncfusion/ej2-navigations';
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

export default {
  name: 'TabRteSample',

  data() {
    return {
      tabObj: null,
      editorObj: null
    };
  },

  mounted() {
    this.initializeTab();
  },

  beforeUnmount() {
    if (this.editorObj) {
      this.editorObj.destroy();
      this.editorObj = null;
    }

    if (this.tabObj) {
      this.tabObj.destroy();
      this.tabObj = null;
    }
  },

  methods: {
    initializeTab() {
      this.tabObj = new Tab({
        items: [
          {
            header: {
              text: 'Summary',
              iconCss: 'e-icons e-description'
            },
            content: '<div id="rte-container"></div>'
          },
          {
            header: {
              text: 'Remedies',
              iconCss: 'e-icons e-description'
            },
            content: '<div style="padding:16px">Remedies Content</div>'
          },
          {
            header: {
              text: 'Notes',
              iconCss: 'e-icons e-description'
            },
            content: '<div style="padding:16px">Notes Content</div>'
          }
        ],

        created: () => {
          this.initializeRTE();
        }
      });

      this.tabObj.appendTo('#tab-default');
    },

    initializeRTE() {
      if (this.editorObj) {
        return;
      }

      this.editorObj = new RichTextEditorUI({
        placeholder: 'Type something'
      });

      this.editorObj.appendTo('#rte-container');
    }
  }
};
</script>
