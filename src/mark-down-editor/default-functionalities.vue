<template>
  <div>
    <div class="control-section rte-markdown-overview">
      <div class="sample-container">
        <div class="default-section">
          <div id="defaultRTE">
            <ejs-richtexteditor id="MDdefault" ref="rteInstance" :toolbarSettings="toolbarSettings" :formatter="formatter" :created="created" :editorMode="editorMode" :height="height" :value ="value">
            </ejs-richtexteditor>
          </div>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates markdown editing in the Rich Text Editor with complete features.</p>
    </div>
    <div id="description">
      <p>The Rich Text Editor supports markdown editing when the <code>editorMode</code> is set to mode property of the
        Rich Text Editor</p>
      <p>The editor’s toolbar contains commands to format the markdown content. The toolbar consists of:</p>
      <ul>
        <li><code>Lists</code> - Ordered and unordered list types.</li>
        <li><code>Links</code> - A hyperlink can be inserted into the editor for quick access to related information.
        </li>
        <li><code>Image</code> - Inserts and manages images.</li>
        <li><code>Alignment</code> - Aligns the content with left, center, and right margins.</li>
        <li><code>Format</code> – Formats the sentence in different ways such as heading level, quotation, and code
          snippet</li>
        <li><code>Styles</code> – Allows you to apply inline styles to the selected content like bold, italic, and more.
        </li>
        <li><code>Tables</code> – Allows you to insert a table with header.</li>
      </ul>
      <p><b>Injecting Module</b></p>
      <p>Rich Text Editor component features are segregated into individual feature-wise modules. To use Rich Text
        Editor feature, we need to inject <code>Toolbar, Link, Image, MarkdownEditor, Table</code> into the <code>provide</code> section.</p>
      <p>Syncfusion's <code>Markdown Converter</code> is used in this sample to convert markdown into HTML content.</p>
    </div>
  </div>
</template>

<style>
  .rte-markdown-overview .e-richtexteditor textarea.e-content {
    float: left;
  }
  .rte-markdown-overview .e-richtexteditor .e-rte-content {
    overflow: hidden;
  }
  .rte-markdown-overview .e-md-preview::before {
    content: "\e345";
  }
  .rte-markdown-overview .e-icon-btn.e-active .e-md-preview.e-icons::before {
    content: "\e350";
  }  
  .bootstrap4 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before {
    content: "\e790";
  }  
  .bootstrap4 .rte-markdown-overview .e-icon-btn .e-md-preview::before {
    content: "\e787";
  }  
  .fluent .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .fluent-dark .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .fluent2 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .fluent2-dark .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .fluent2-highcontrast .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .tailwind .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .tailwind-dark .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .tailwind3 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .tailwind3-dark .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .bootstrap5 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .bootstrap5\.3 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .bootstrap5\.3-dark .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .bootstrap5-dark .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .material3 .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before,
  .material3-dark .rte-markdown-overview .e-icon-btn.e-active .e-md-preview::before{
      content: '\e80e';
  }
  .tailwind .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .tailwind-dark .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .tailwind3 .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .tailwind3-dark .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .bootstrap5 .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .bootstrap5-dark .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .bootstrap5\.3 .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .bootstrap5\.3-dark .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .fluent .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .fluent-dark .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .fluent2 .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .fluent2-dark .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .fluent2-highcontrast .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .material3 .rte-markdown-overview .e-icon-btn .e-md-preview::before,
  .material3-dark .rte-markdown-overview .e-icon-btn .e-md-preview::before {
      content: '\e7de';
  }
</style>
<script>
  import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor, Table } from "@syncfusion/ej2-vue-richtexteditor";
  import { MarkdownFormatter } from "@syncfusion/ej2-vue-richtexteditor";
  import { createElement, KeyboardEventArgs } from "@syncfusion/ej2-vue-base";  
  import { MarkdownConverter } from "@syncfusion/ej2-markdown-converter";

  export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent
    },
    data: function() {
      return {
        id: "",
        mdsource: null,
        htmlPreview: null,
        textArea: null,
        previewTextArea: null,
        height: "520px",
        editorMode: "Markdown",
        placeholder : "Enter your text here...",
        formatter: new MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.'} }),
        toolbarSettings: {
          items: ["Bold", "Italic", "StrikeThrough", "|", "Formats", 'Blockquote', "OrderedList", "UnorderedList", 'SuperScript', 'SubScript', "|",
            "CreateLink", "Image", "CreateTable", "|",
            { tooltipText: "Preview", template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn" aria-label="Preview Code">' +
              '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
              }, "|", "Undo", "Redo"
          ]
        },
        value: `# 🚀 My Project
A simple yet powerful project that does amazing things.  
**Bold text** for emphasis, *italic* for subtlety, ~~strikethrough~~ for corrections, and <u>underline</u> for highlights.

## ✨ Features
- Fast and efficient  
- Easy to use  
- Fully customizable  

## 🛠️ How to Use
1. Download the file  
2. Open it directly  
3. Start using immediately  

## 🤝 Contributing
Check out our **Contributing Guide** for details.

## 📄 License
This project is licensed under the **MIT License** – see the LICENSE file for details.`
      };
    },
    methods: {
      created: function() {
        this.rteObj = this.$refs.rteInstance.ej2Instances;
        this.textArea = this.rteObj.contentModule.getEditPanel();
        this.id = this.$refs.rteInstance.ej2Instances.getID() + "html-preview";
        this.mdsource = document.getElementById("preview-code");
        this.htmlPreview = this.rteObj.element.querySelector(this.id);
        this.previewTextArea = this.rteObj.element.querySelector(".e-rte-content");
        this.textArea.onkeyup = Event => {
          this.markDownConversion();
        };
        this.mdsource.onclick = e => {
          this.fullPreview();
          if (e.currentTarget.classList.contains("e-active")) {
            this.$refs.rteInstance.disableToolbarItem(["Bold", "Italic", 'SuperScript', 'SubScript', "StrikeThrough", "Formats", "Blockquote", "OrderedList", "UnorderedList", "CreateLink", "Image", "CreateTable"]);
          } else {
            this.$refs.rteInstance.enableToolbarItem(["Bold", "Italic", 'SuperScript', 'SubScript', "StrikeThrough", "Formats", "Blockquote", "OrderedList", "UnorderedList", "CreateLink", "Image", "CreateTable"]);
          }
        };
      },
      markDownConversion: function() {
        if (this.mdsource.classList.contains("e-active")) {
          this.htmlPreview.innerHTML = MarkdownConverter.toHtml(this.textArea.value);
        }
      },
      fullPreview: function() {
        if (this.mdsource.classList.contains("e-active")) {
          this.mdsource.classList.remove("e-active");
          this.textArea.style.display = "block";
          this.htmlPreview.style.display = "none";
          this.previewTextArea.style.overflow = "hidden";
        } else {
          this.mdsource.classList.add("e-active");
          if (!this.htmlPreview) {
            this.htmlPreview = document.createElement("div");
            this.htmlPreview.setAttribute("class", "e-content e-pre-source");
            this.htmlPreview.setAttribute("id", this.id);
            this.textArea.parentNode.appendChild(this.htmlPreview);
            this.previewTextArea.style.overflow = "auto";
          }
          if (this.previewTextArea.style.overflow === "hidden") {
            this.previewTextArea.style.overflow = "auto";
          }
          this.textArea.style.display = "none";
          this.htmlPreview.style.display = "block";
          this.htmlPreview.innerHTML = MarkdownConverter.toHtml(this.textArea.value);
          this.mdsource.parentElement.title = "Code View";
        }
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, Table, MarkdownEditor]
    }
  }
</script>
