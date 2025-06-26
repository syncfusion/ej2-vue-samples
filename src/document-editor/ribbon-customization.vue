<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="default-section">
        <div ref="de_titlebar" id="documenteditor_titlebar" class="e-de-ctn-title">
          <div v-on:keydown="titleBarKeydownEvent" v-on:click="titleBarClickEvent" class="single-line"
            id="documenteditor_title_contentEditor" title="Document Name. Click or tap to rename this document."
            contenteditable="false">
            <label v-on:blur="titleBarBlurEvent" id="documenteditor_title_name"
              :style="titileStyle">{{ documentName }}</label>
          </div>
        </div>
        <ejs-documenteditorcontainer ref="doceditcontainer" :toolbarMode="'Ribbon'" :ribbonLayout="'Classic'"
          :serviceUrl="hostUrl" :enableToolbar='true' height='600px'></ejs-documenteditorcontainer>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <div class="content-wrapper" style="margin-top:20px">
        <div class="heading-section">
          <h5><b>Select Toolbar Items</b></h5>
        </div>
        <div class="content-wrapper">
          <ejs-checkbox id="showHomeTab" label="Show/Hide Home Tab" :checked="true" :change="onShowHomeTabChange" />
        </div><br>
        <div class="content-wrapper">
          <ejs-checkbox id="showClipboard" label="Show/Hide Clipboard Group" :checked="true"
            :change="onShowClipboardChange" />
        </div><br>
        <div class="content-wrapper">
          <ejs-checkbox id="showItem" label="Show/Hide Bold & Italic Items" :checked="true"
            :change="onShowItemChange" />
        </div><br>
        <div class="content-wrapper">
          <ejs-checkbox id="enableItem" label="Enable/Disable Underline Item" :checked="true"
            :change="onEnableItemChange" />
        </div><br>
      </div>
    </div>
    <div id="action-description">
      <p>The Microsoft Word-style Ribbon UI in the Document Editor provides a high level of customization, allowing you
        to adapt the built-in tabs, groups, and commands to fit your application's unique requirements. This example
        demonstrates how to customize the ribbon in the Document Editor by showing or hiding tabs, groups, and items.
      </p>
    </div>
    <div id="description">
      <p>The Document Editor Ribbon UI allows you to:</p>
      <ul>
        <li>Personalize built-in tabs, groups, and items</li>
        <li>Modify predefined file menu options</li>
        <li>Add a customized backstage menu (automatically hides the default file menu)</li>
        <li>Show/hide existing ribbon tabs like Home tab or Insert tab</li>
        <li>Show/hide existing groups and items within groups</li>
        <li>Enable/disable specific items in groups</li>
        <li>Create new custom tabs, groups within existing tabs, and items within existing groups</li>
      </ul>

      <p style="display: block">
        Explore complete customization options in our
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/document-editor/ribbon">ribbon
          customization documentation</a>.
      </p>
    </div>
  </div>
</template>
<style>
.property-section {
  padding: 16px;
}

.property-panel-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.property-panel-content>div {
  margin-bottom: 8px;
}


#documenteditor_titlebar {
  height: 36px;
  line-height: 26px;
  width: 100%;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 10px;
  font-family: inherit;
}

#documenteditor_title_contentEditor {
  height: 26px;
  max-width: 85%;
  width: auto;
  overflow: hidden;
  display: inline-block;
  padding-left: 4px;
  padding-right: 4px;
  margin: 5px;
}


[contenteditable="true"].single-line {
  white-space: nowrap;
  border-color: #e4e4e4 !important;
}
</style>
<script>
// Imports
import { DocumentEditorContainerComponent, Ribbon } from "@syncfusion/ej2-vue-documenteditor";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { defaultDocument } from "./data";

export default {
  components: {
    'ejs-documenteditorcontainer': DocumentEditorContainerComponent,
    'ejs-checkbox': CheckBoxComponent
  },
  provide: {
    DocumentEditorContainer: [Ribbon]
  },
  data() {
    return {
      hostUrl: "https://services.syncfusion.com/vue/production/api/documenteditor/",
      documentName: 'Ribbon Customization',
      documentTitle: 'Untitled Document',
      titileStyle: 'text-transform:capitalize;font-weight:400;font-family:inherit;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text'
    };
  },
  mounted() {
    this.$nextTick(() => {
      const container = this.$refs.doceditcontainer.ej2Instances;
      // Load default document, set title, etc.
      container.documentEditor.open(JSON.stringify(defaultDocument));
      container.documentEditor.documentName = "Ribbon Customization";
    });
  },
  methods: {
    titleBarKeydownEvent: function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("documenteditor_title_contentEditor").contentEditable = 'false';
        if (document.getElementById("documenteditor_title_contentEditor").textContent === '') {
          document.getElementById("documenteditor_title_contentEditor").textContent = 'Document1';
        }
      }
    },
    titleBarBlurEvent: function (args) {
      if (document.getElementById("documenteditor_title_contentEditor").textContent === '') {
        document.getElementById("documenteditor_title_contentEditor").textContent = 'Document1';
      }
      document.getElementById("documenteditor_title_contentEditor").contentEditable = 'false';
      this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName = document.getElementById("documenteditor_title_name").textContent;
    },
    titleBarClickEvent: function () {
      this.updateDocumentEditorTitle();
    },

    updateDocumentEditorTitle: function () {
      document.getElementById("documenteditor_title_contentEditor").contentEditable = 'true';
      document.getElementById("documenteditor_title_contentEditor").focus();
      window.getSelection().selectAllChildren(document.getElementById("documenteditor_title_contentEditor"));
    },
    onShowHomeTabChange(args) {
      let container = this.$refs.doceditcontainer.ej2Instances;
      container.ribbon.showTab('Home', args.checked);
    },
    onShowClipboardChange(args) {
      let container = this.$refs.doceditcontainer.ej2Instances;
      container.ribbon.showGroup({ tabId: 'Home', index: 1 }, args.checked);
    },
    onShowItemChange(args) {
      let container = this.$refs.doceditcontainer.ej2Instances;
      container.ribbon.showItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [5, 6] }, args.checked);
    },
    onEnableItemChange(args) {
      let container = this.$refs.doceditcontainer.ej2Instances;
      container.ribbon.enableItems({ tabId: 'Home', groupIndex: 2, itemIndexes: [7] }, args.checked);
    }
  }
};
</script>
