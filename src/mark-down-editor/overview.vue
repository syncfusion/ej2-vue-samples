<template>
  <div>
         <div class="control-section markdown-preview">
        <div class="sample-container">
          <div class="default-section">
            <ejs-splitter ref="splitterObj" id="splitter-rte-markdown-preview" width="100%" height="450px" :resizing="onRefreshUI" :created="updateOrientation">
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
        <p>The Rich Text Editor provides the ability to instantly <code>preview</code> Markdown changes through the preview functionality. To achieve this, the sample uses Syncfusion's Markdown Converter to convert Markdown into HTML content.</p>
      </p>
      <p><b>Injecting Module</b></p>
      <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
      <p>Syncfusion's <code>Markdown Converter</code> is used in this sample to convert markdown into HTML content.</p>
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
  .bootstrap5\.3-dark .markdown-preview .title,
  .bootstrap-dark .markdown-preview .title,
  .fluent-dark .markdown-preview .title,
  .fluent2-dark .markdown-preview .title,
  .material-dark .markdown-preview .title,
  .tailwind-dark .markdown-preview .title,
  .tailwind3-dark .markdown-preview .title,
  .highcontrast .markdown-preview .title {
    color: #fff;
  }
</style>

<script>
  import { Browser, addClass, removeClass, isNullOrUndefined } from "@syncfusion/ej2-base";
  import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor, Table, Count } from "@syncfusion/ej2-vue-richtexteditor";
  import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-vue-base';
  import { SplitterComponent, PanesDirective, PaneDirective ,SplitterPlugin} from "@syncfusion/ej2-vue-layouts";
  import { MarkdownConverter } from "@syncfusion/ej2-markdown-converter";

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
        placeholder : "Enter your text here...",
        editorMode: 'Markdown',
        toolbarSettings: {
          enableFloating: false,
          type: "Expand",
          items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Blockquote', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'Undo', 'Redo']
        },
        value: `## Welcome to the Syncfusion® EJ2 Markdown Editor

The **Syncfusion Rich Text Editor** in **Markdown** mode delivers a lightweight, distraction-free editing experience with full Markdown syntax support — powered natively by Syncfusion’s own **MarkdownConverter**.

Write beautiful documents faster using simple, readable Markdown syntax and see the formatted result instantly with live preview.

### Why Choose Markdown Mode?

- Clean, plain-text syntax that is easy to read and write — even in raw form
- Input or modify text, apply formatting, and view the Markdown preview side-by-side using the splitter control.
- Toolbar + keyboard shortcuts for rapid formatting
- Easy to convert content to HTML or other formats
- Ideal for documentation, notes, and developer-focused content
- Reduces clutter and keeps the writing experience distraction-free

### Supported Markdown Features in Action

# Headings
## Markdown Editor Demo
### Create Clean, Structured Content
#### Organize Sections Effortlessly
##### Add Subheadings for Clarity
###### Provide Notes or Additional Info

Headings help structure your content, making it easier to read, scan, and organize information within the Markdown editor.

#### Text Formatting
**Bold text highlights important information.**

*Markdown makes writing simple and clean.*

**_You can also combine bold and italic for emphasis._**

~~Use strikethrough to indicate removed or outdated content.~~

\`Inline code is perfect for short code snippets like commands or variables.\`

### Table
Create simple tables to organize information clearly and quickly.

| Feature | Description |
|---------|-------------|
| Markdown   | Lightweight, easy-to-read formatting syntax |
| Preview    | Shows formatted output side-by-side |

#### Lists

**Unordered**
- Explore the editor features
- Add content with simple syntax
    - Insert nested bullet points
    - Organize topics hierarchically
- Keep your notes clear and readable

**Ordered**
1. Start writing your content
2. Apply Markdown formatting
    1. Add sub-steps for detailed tasks
    2. Improve clarity with structure
3. Review and finalize your document

**Task List**
- [x] Completed task
- [ ] Write documentation
- [ ] Release new version

#### Blockquotes

> Markdown makes writing on the web beautiful and readable.
>
> — John Gruber, Creator of Markdown

#### Code Blocks
Inline code: Use \`npm install @syncfusion/ej2-richtexteditor\``,
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
        this.srcArea.innerHTML = MarkdownConverter.toHtml(this.$refs.rteObj.ej2Instances.contentModule.getEditPanel().value);
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
      richtexteditor: [Toolbar, Link, Image, Count, Table, MarkdownEditor],
    }
  }
</script>
