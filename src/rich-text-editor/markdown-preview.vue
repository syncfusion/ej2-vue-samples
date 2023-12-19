<template>
  <div>
         <div class="control-section markdown-preview">
        <div class="sample-container">
          <div class="default-section">
            <ejs-splitter ref="splitterObj" id="splitter" width="100%" height="450px" :resizing="onRefreshUI" :created="updateOrientation">
            <e-panes>
              <e-pane size="50%" :resizable="true" :content="'pane1Content'" min="40%">
                <template v-slot:pane1Content>
                  <ejs-richtexteditor id="defaultRTE" ref="rteObj" :toolbarSettings="toolbarSettings" :value="value"
                    height="100%" saveInterval="1" :showCharCount="true" maxLength="5000" :created="onCreate"
                    :change="onChange" :actionComplete="updateValue"  :editorMode="editorMode">
                  </ejs-richtexteditor>
                </template>
              </e-pane>
              <e-pane :content="'pane2Content'" min="40%">
                <template v-slot:pane2Content>
                  <div class="heading right">
                    <h4 class="title"><b>Markdown Preview</b></h4>
                    <div class="splitter-default-content source-code pane2" style="padding: 20px;"></div>
                  </div>
                </template>
              </e-pane>
            </e-panes>
          </ejs-splitter>
          </div>
        </div>
      </div>
    <div id="action-description">
      <p>
        This example illustrates how to preview Markdown changes within the Rich Text Editor. You can input or modify the display text, apply formatting, and observe the Markdown preview alongside. This capability is enabled by utilizing the splitter component, which effectively separates the Rich Text Editor from the preview section.
      </p>
    </div>

    <div id="description">
      <p>
        <p>The Rich Text Editor provides the ability to instantly <code>preview</code> Markdown changes through the preview functionality. To achieve this, the sample utilizes the third-party library Marked.js to convert Markdown into HTML content.</p>
      </p>
      <p><b>Injecting Module</b></p>
      <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
      <p>The third-party library <code>Marked</code> is used in this sample to convert markdown into HTML content.</p>
    </div>
  </div>
</template>
<style>
  .markdown-preview .heading {
    float: left;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 0px;
    border-left: none;
    border-top: none;
  }
  .markdown-preview .title {
    color: #333333;
    letter-spacing: 1px;
    padding-left: 10px;
    text-align: center;
    margin: 10px 0;
  }
  .fabric-dark .markdown-preview .title,
  .bootstrap5-dark .markdown-preview .title,
  .bootstrap-dark .markdown-preview .title,
  .fluent-dark .markdown-preview .title,
  .material-dark .markdown-preview .title,
  .tailwind-dark .markdown-preview .title,
  .highcontrast .markdown-preview .title {
    color: #fff;
  }
</style>

<script>
  import { Browser, addClass, removeClass, isNullOrUndefined } from "@syncfusion/ej2-base";
  import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor, Table, QuickToolbar, Count } from "@syncfusion/ej2-vue-richtexteditor";
  import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-vue-base';
  import { SplitterComponent, PanesDirective, PaneDirective ,SplitterPlugin} from "@syncfusion/ej2-vue-layouts";

  export default {
    components: {
      "ejs-richtexteditor": RichTextEditorComponent,
      "ejs-splitter": SplitterComponent,
      "e-panes": PanesDirective,
      "e-pane": PaneDirective,
    },
    data: function() {
      return {
        textArea: null,
        srcArea: null,
        editorMode: 'Markdown',
        toolbarSettings: {
          enableFloating: false,
          type: "Expand",
          items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'Undo', 'Redo']
        },
        value: `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. 
Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words 
and phrases should look different from each other

Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.

We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`,
      };
    },
    methods: {
      onCreate: function () {
        setTimeout(() => {
          this.$refs.rteObj.refreshUI();
          this.textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
          this.srcArea = document.querySelector(".source-code");
          this.updateValue();
        }, 10);
      },
      onChange: function () {
        this.updateValue();
      },
      updateValue: function (e) {
        this.srcArea.innerHTML = marked(this.$refs.rteObj.ej2Instances.contentModule.getEditPanel().value);
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
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, Count, QuickToolbar, Table, MarkdownEditor],
    }
  }
</script>
