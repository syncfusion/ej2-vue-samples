<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <div id="defaultRTE">
            <ejs-richtexteditor id="MDdefault" ref="rteInstance" :toolbarSettings="toolbarSettings" :formatter="formatter" :created="created" :editorMode="editorMode" :height="height">
The sample is added to showcase **markdown editing**.

Type or edit the content and apply formatting to view markdown formatted content.

We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.
            </ejs-richtexteditor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .e-richtexteditor textarea.e-content {
    float: left;
  }
  .e-richtexteditor .e-rte-content {
    overflow: hidden;
  }
  .e-md-preview::before {
    content: "\e345";
  }
  .e-icon-btn.e-active .e-md-preview.e-icons::before {
    content: "\e350";
  }  
  .bootstrap4 .e-icon-btn.e-active .e-md-preview::before {
    content: "\e790";
  }  
  .bootstrap4 .e-icon-btn .e-md-preview::before {
    content: "\e787";
  }
</style>

<script>
  import Vue from "vue";
  import { RichTextEditorPlugin, Toolbar, Link, Image, MarkdownEditor, Table } from "@syncfusion/ej2-vue-richtexteditor";
  import { MarkdownFormatter } from "@syncfusion/ej2-vue-richtexteditor";
  import { createElement, KeyboardEventArgs } from "@syncfusion/ej2-vue-base";  
  Vue.use(RichTextEditorPlugin);  
  export default Vue.extend({
    data: function() {
      return {
        id: "",
        mdsource: null,
        htmlPreview: null,
        textArea: null,
        previewTextArea: null,
        height: "250px",
        editorMode: "Markdown",
        formatter: new MarkdownFormatter({ listTags: { 'OL': '1., 2., 3.'} }),
        toolbarSettings: {
          items: ["Bold", "Italic", "StrikeThrough", "|", "Formats", "OrderedList", "UnorderedList", "|",
            "CreateLink", "Image", "CreateTable", "|",
            { tooltipText: "Preview", template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
              '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
              }, "|", "Undo", "Redo"
          ]
        }
      };
    },
    methods: {
      created: function() {
        this.rteObj = this.$refs.rteInstance.ej2Instances;
        this.textArea = this.rteObj.contentModule.getEditPanel();
        this.id = this.$refs.rteInstance.getID() + "html-preview";
        this.mdsource = document.getElementById("preview-code");
        this.htmlPreview = this.rteObj.element.querySelector(this.id);
        this.previewTextArea = this.rteObj.element.querySelector(".e-rte-content");
        this.textArea.onkeyup = Event => {
          this.markDownConversion();
        };
        this.mdsource.onclick = e => {
          this.fullPreview();
          if (e.currentTarget.classList.contains("e-active")) {
            this.$refs.rteInstance.disableToolbarItem(["Bold", "Italic", "StrikeThrough", "Formats", "OrderedList", "UnorderedList", "CreateLink", "Image", "CreateTable"]);
          } else {
            this.$refs.rteInstance.enableToolbarItem(["Bold", "Italic", "StrikeThrough", "Formats", "OrderedList", "UnorderedList", "CreateLink", "Image", "CreateTable"]);
          }
        };
      },
      markDownConversion: function() {
        if (this.mdsource.classList.contains("e-active")) {
          this.htmlPreview.innerHTML = marked(this.textArea.value);
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
          this.htmlPreview.innerHTML = marked(this.textArea.value);
          this.mdsource.parentElement.title = "Code View";
        }
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, Table, MarkdownEditor]
    }
  });
</script>