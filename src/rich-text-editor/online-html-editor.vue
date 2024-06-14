<template>
  <div class="control-section online-editor">
    <div class="sample-container">
      <div class="rte-online-sample-view">
        <ejs-splitter ref="splitterObj" id="splitter-rte-online-html-editor" width="100%" height="450px" :resizing="onRefreshUI" :created="updateOrientation">
          <e-panes>
            <e-pane size="50%" :resizable="true" :content="'pane1Content'" min="40%">
              <template v-slot:pane1Content>
                <ejs-richtexteditor id="defaultRTE"
                    ref="rteObj" :toolbarSettings="toolbarSettings" :value="value"
                    height="100%" saveInterval="1" :showCharCount="true" maxLength="5000"
                    :created="onCreate" :change="onChange" :actionComplete="updateValue">
                </ejs-richtexteditor>
              </template>
            </e-pane>
            <e-pane :content="'pane2Content'" min="40%">
              <template v-slot:pane2Content>
                <div class="heading right">
                  <h6 class="title"><b>HTML SOURCE</b></h6>
                  <div
                    class="splitter-default-content source-code pane2"
                    contenteditable="true"
                  ></div>
                </div>
              </template>
            </e-pane>
          </e-panes>
        </ejs-splitter>
      </div>
    </div>

    <div id="action-description">
      <p>
        The online HTML editor sample demonstrates how to create LIVE editing scenario
        with real-world applications using JavaScript Rich Text Editor. Most of the
        control features are enabled in this sample to edit the content quickly.
      </p>
      <p>
        You can edit the source code and content also parallelly. The source code is
        formatted using the code mirror library.
      </p>
    </div>

    <div id="description">
      <p>
        The online HTML editor is a demo that provides LIVE experience for both content
        and HTML editing with Rich Text Editor features in a real-world scenario.
      </p>
    </div>
  </div>
</template>

<style>
.online-editor #defaultRTE {
  overflow: hidden;
  border: none;
}

.online-editor .e-splitter .CodeMirror {
  height: 405px;
}
.online-editor .heading {
  float: left;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 0px;
  border-left: none;
  border-top: none;
}

.online-editor .title {
  color: #333333;
  letter-spacing: 1px;
  padding-left: 10px;
  text-align: center;
  margin: 10px 0;
}

.online-editor .heading {
  margin: 0;
}
.online-editor .sb-content-section {
  border-bottom: none;
  border-right: none;
}

.online-editor .sample-head {
  height: 48px;
  background: #ffffff;
  box-shadow: 0 8px 11px -6px rgba(0, 0, 0, 0.12);
  z-index: 1001;
  opacity: 100;
  display: none;
}

.online-editor .head-content {
  padding: 15px 0 0 35px;
  font-weight: 499;
  line-height: 18px;
  font-size: 15px;
  color: #000000;
  font-family: sans-serif;
}

.online-editor table {
  width: 100%;
}

.online-editor table,
.online-editor th,
.online-editor td {
  border: 1px solid black;
  border-collapse: collapse;
}
.online-editor .e-splitter.e-splitter-horizontal,
.online-editor .e-splitter.e-splitter-vertical {
  border-left: none;
}
.online-editor .e-richtexteditor .e-rte-toolbar.e-control[class*="e-toolbar"],
.online-editor .e-richtexteditor
  .e-rte-toolbar.e-toolbar.e-extended-toolbar.e-control[class*="e-toolbar"],
.online-editor .e-richtexteditor .e-rte-content,
.online-editor .e-richtexteditor .e-source-content {
  border: none;
}
.online-editor .control-section {
  padding-top: 0px;
  padding-bottom: 0px;
}
.online-editor .e-tab .e-tab-header:not(.e-vertical)::before {
  border-bottom: none;
  border-right: 1px solid #dee2e6;
}
.online-editor .e-richtexteditor.e-rte-tb-expand .e-rte-content,
.e-richtexteditor.e-rte-tb-expand
  .e-source-content
  .sb-content-section
  .e-lib
  .e-tab
  .e-control
  .e-template
  .e-keyboard
  .e-nested
  .sb-content-header {
  border-bottom: none;
}
.online-editor .CodeMirror-scroll {
  border-top: 1px solid #e8e8e8;
}
.online-editor .heading .right .e-pane .e-pane-horizontal .e-scrollable {
  padding: 0px;
}
.material3-dark .CodeMirror-gutters, .material3-dark .CodeMirror {
  background-color: #1C1B1F;
  color: #fff;
}

.online-editor .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal,
.online-editor .e-splitter.e-splitter-vertical .e-pane.e-pane-horizontal {
  overflow: hidden;
}
.online-editor .CodeMirror-sizer {
  margin-right: 10px;
  border: none;
}
.fabric-dark .CodeMirror-gutters,
.fabric-dark .CodeMirror {
  background-color: #201f1f;
  color: #fff;
}
.fluent-dark .CodeMirror-gutters,
.fluent-dark .CodeMirror,
.fluent2-dark .CodeMirror-gutters,
.fluent2-dark .CodeMirror {
  background-color: #1b1a19;
  color: #fff;
}
.bootstrap-dark .CodeMirror-gutters,
.bootstrap-dark .CodeMirror {
  background-color: #1a1a1a;
  color: #fff;
}
.bootstrap5-dark .CodeMirror-gutters,
.bootstrap5-dark .CodeMirror {
  background-color: #212529;
  color: #fff;
}
.material-dark .CodeMirror-gutters,
.material-dark .CodeMirror {
  background-color: #303030;
  color: #fff;
}
.tailwind-dark .CodeMirror-gutters,
.tailwind-dark .CodeMirror {
  background-color: #1f2937;
  color: #fff;
}
.highcontrast .CodeMirror-gutters,
.highcontrast .CodeMirror {
  background-color: #000000;
  color: #fff;
}
.fabric-dark .title,
.bootstrap5-dark .title,
.bootstrap-dark .title,
.fluent-dark .title,
.fluent2-dark .title,
.material-dark .title,
.tailwind-dark .title,
.highcontrast .title {
  color: #fff;
}
</style>

<script>
import { SplitterComponent, PanesDirective, PaneDirective } from "@syncfusion/ej2-vue-layouts";
import { RichTextEditorComponent, Toolbar, Link, Image, Table, Count, HtmlEditor, QuickToolbar, PasteCleanup, EmojiPicker, Audio, Video, FormatPainter } from "@syncfusion/ej2-vue-richtexteditor";
import { Browser } from "@syncfusion/ej2-base";
import CodeMirror from 'codemirror';

export default {
  components: {
    "ejs-richtexteditor": RichTextEditorComponent,
    "ejs-splitter": SplitterComponent,
    "e-panes": PanesDirective,
    "e-pane": PaneDirective,
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table, PasteCleanup, EmojiPicker, Audio, Video, FormatPainter],
  },
  data: function () {
    return {
      textArea: null,
      srcArea: null,
      height: "100%",
      showCharCount: true,
      myCodeMirror: "",
      maxLength: 5000,
      saveInterval: 1,
      enableFloating: false,
      toolbarSettings: {
        type: "Expand",
         items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          'Formats', 'Alignments', 'Blockquote', 'OrderedList', 'UnorderedList',
          'Outdent', 'Indent',
          'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
          '|', 'EmojiPicker', 'SourceCode', '|', 'Undo', 'Redo'
        ]
      },
      value: `<h3>Welcome to the HTML real-time live editor!</h3>
                <p>Create and edit the valid HTML code simply! You don't worry about the HTML syntax to format your text content. The WYSIWYG editor (left side view) provided the toolbar to make format text and insert images, tables, and more options.</p>
                <h4>Don't worry about syntax</h4>
                <p>The content editing works bi-directional, you can write the HTML code on the right-side view (code view), and changes will reflect in the WYSIWYG editor.</p>`,
    };
  },
  methods: {
    onCreate: function () {
      setTimeout(() => {
        this.updateValue();
        this.textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
        this.srcArea = document.querySelector(".source-code");
        if (this.srcArea) {
          this.srcArea.addEventListener("keyup", this.updateHtmlValue);
        }
      }, 400);
    },
    onChange: function () {
      this.updateValue();
    },
    updateHtmlValue: function () {
      this.$refs.rteObj.ej2Instances.value = this.myCodeMirror.getValue();
      this.$refs.rteObj.ej2Instances.dataBind();
    },
    updateValue: function (e) {
      var mirrorView = document.querySelector("#src-view");
      if (!mirrorView) {
        mirrorView = document.createElement("div", { className: "e-content" });
        mirrorView.id = "src-view";
        var srcCodeElement = document.querySelector(".source-code");
        if (srcCodeElement) {
          srcCodeElement.appendChild(mirrorView);
        }
        mirrorView.innerHTML = "";
        mirrorView.style.display = "block";
      }
      var srcViewEle = document.querySelector("#src-view");
      var codeMirrorEle = document.querySelector(".CodeMirror-wrap");
      if (codeMirrorEle) {
        codeMirrorEle.remove();
      }
      this.renderCodeMirror(srcViewEle, this.$refs.rteObj.ej2Instances.value);
    },
    renderCodeMirror: function (mirrorView, content) {
      this.myCodeMirror = CodeMirror(mirrorView, {
        value: content,
        lineNumbers: true,
        mode: "text/html",
        lineWrapping: true,
      });
    },
    onRefreshUI: function () {
      this.$refs.rteObj.refreshUI();
    },
    updateOrientation() { 
        if (Browser.isDevice) {
            this.$refs.splitterObj.$el.ej2_instances[0].orientation  = 'Vertical';
            document.body.querySelector('.heading').style.width = 'auto';
        }
    }
  }
};
</script>
