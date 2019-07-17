<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <div id="defaultRTE"> 
            <ejs-richtexteditor id="preview" ref="rteInstance" :toolbarSettings="toolbarSettings" :created="created" :actionBegin='handleFullScreen' :actionComplete='actionComplete' :editorMode="editorMode" :height="height">
In RichTextEditor , you click the toolbar buttons to format the words and the changes are visible immediately. 
Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words 
and phrases should look different from each other

RichTextEditor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.

We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content </ejs-richtexteditor>
          </div>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates how to preview markdown changes in rich text editor. 
        Type or edit the display text, and apply format to view the preview of markdown. 
        You can preview the markdown changes immediately in the preview area.
      </p>
    </div>

    <div id="description">
      <p>
        The rich text editor allows you to preview markdown changes immediately using <code>preview</code>. 
        The third-party library <code>Marked</code> is used in this sample to convert markdown into HTML content.
      </p>
      <p><b>Injecting Module</b></p>
      <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
      <p>The third-party library <code>Marked</code> is used in this sample to convert markdown into HTML content.</p>
    </div>
  </div>
</template>
<style>
  .e-richtexteditor .e-rte-content .e-content{
    min-height: 150px;
  }
  .e-richtexteditor .e-rte-content textarea.e-content {
    float: left;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
  .e-richtexteditor .e-rte-content {
    overflow: hidden;
  }
  .e-md-preview::before {
    content: '\e345';
  }
  .e-rte-content .e-content.e-pre-source {
    width: 100%;
  }
  /* custom code start */
  .sb-header {
    z-index: 100;
  }
  /* custom code end */
  .e-icon-btn.e-active .e-md-preview.e-icons::before {
    content: '\e350';
  }
  .bootstrap4 .e-icon-btn.e-active .e-md-preview::before {
    content: '\e790';
  }
  .bootstrap4 .e-icon-btn .e-md-preview::before {
    content: '\e787';
  }
  .sb-content.e-view.hide-header {
    top: 0 !important;
  }
  .sb-header.e-view.hide-header {
      display: none;
  }
</style>

<script>
  import Vue from "vue";
  import { Browser, addClass, removeClass, isNullOrUndefined } from "@syncfusion/ej2-base";
  import { RichTextEditorPlugin, Toolbar, Link, Image, MarkdownEditor, Table } from "@syncfusion/ej2-vue-richtexteditor";
  import { createElement, KeyboardEventArgs } from '@syncfusion/ej2-vue-base';

  Vue.use(RichTextEditorPlugin);

  export default Vue.extend({
    data: function() {
      return {
        id: "",
        mdsource: null,
        mdSplit: null,
        htmlPreview: null,
        textArea: null,
        previewTextArea: null,
        height: '300px',
        editorMode: 'Markdown',
        toolbarSettings: {
          items: ['Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'CreateTable', '|',
            {
              tooltipText: 'Preview',
              template: '<button id="preview-code" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                '<span class="e-btn-icon e-md-preview e-icons"></span></button>'
            },
            {
                tooltipText: 'Split Editor',
                template: '<button id="MD_Preview" class="e-tbar-btn e-control e-btn e-icon-btn">' +
                  '<span class="e-btn-icon e-view-side e-icons"></span></button>'
            }, 'FullScreen', '|', 'Undo', 'Redo'
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
        this.mdSplit = document.getElementById('MD_Preview');
        this.textArea.onkeyup = Event => {
          this.markDownConversion();
        };
        this.mdsource.onclick = e => {
          this.fullPreview({ mode: true, type: 'preview'});
          if (e.currentTarget.classList.contains("e-active")) {
            this.$refs.rteInstance.disableToolbarItem(["Bold", "Italic", "StrikeThrough", "Formats", "OrderedList", "UnorderedList", "CreateLink", "Image", "CreateTable"]);
          } else {
            this.$refs.rteInstance.enableToolbarItem(["Bold", "Italic", "StrikeThrough", "Formats", "OrderedList", "UnorderedList", "CreateLink", "Image", "CreateTable"]);
          }
        };
        document.getElementById('MD_Preview').onclick = () => {
          if (!this.$refs.rteInstance.$el.classList.contains('e-rte-full-screen')) {
            this.fullPreview({ mode: true, type: '' });
          }
          this.mdsource.classList.remove('e-active');
          if (!this.$refs.rteInstance.$el.classList.contains('e-rte-full-screen')) {
            this.rteObj.showFullScreen();
          }
        };
      },
      markDownConversion: function(){
        if (this.mdsource.classList.contains("e-active")) {
          this.htmlPreview.innerHTML = marked(this.textArea.value);
        }
      },
      actionComplete: function(e) {
        if (e.targetItem === 'Maximize' && isNullOrUndefined(e.args)) {
          this.fullPreview({ mode: true, type: '' });
        } else if (!this.mdSplit.parentElement.classList.contains('e-overlay')) {
          if (e.targetItem === 'Minimize') {
            this.textArea.style.display = 'block';
            this.textArea.style.width = '100%';
            if (this.htmlPreview) { this.htmlPreview.style.display = 'none'; }
            this.mdSplit.classList.remove('e-active');
            this.mdsource.classList.remove('e-active');
          }
          this.markDownConversion();
        }
      },
      fullPreview: function(event){
        if ((this.mdsource.classList.contains('e-active') || this.mdSplit.classList.contains('e-active')) && event.mode) {
          this.mdsource.classList.remove('e-active');
          this.mdSplit.classList.remove('e-active');
          this.textArea.style.display = 'block';
          this.textArea.style.width = '100%';
          this.htmlPreview.style.display = 'none';
          this.previewTextArea.style.overflow = 'hidden';
        } else {
          this.mdsource.classList.add('e-active');
          this.mdSplit.classList.add('e-active');
          if (!this.htmlPreview) {
            this.htmlPreview = document.createElement('div');
            this.htmlPreview.setAttribute('id', this.id);
            this.htmlPreview.setAttribute('class', 'e-content');
            this.textArea.parentNode.appendChild(this.htmlPreview);
            this.previewTextArea.style.overflow = 'auto';
          }
          if(this.previewTextArea.style.overflow === 'hidden') {
            this.previewTextArea.style.overflow = 'auto';
          }
          if (event.type === 'preview') {
            this.textArea.style.display = 'none';
            this.htmlPreview.classList.add('e-pre-source');
          } else {
            this.htmlPreview.classList.remove('e-pre-source');
            this.textArea.style.width = '50%';
          }
          this.htmlPreview.style.display = 'block';
          this.htmlPreview.innerHTML = marked(this.$refs.rteInstance.ej2Instances.contentModule.getEditPanel().value);
          this.mdsource.parentElement.title = 'Code View';
        }
      },
      handleFullScreen: function(e){
        var sbCntEle = document.querySelector('.sb-content.e-view');
        var sbHdrEle = document.querySelector('.sb-header.e-view');
        var leftBar;
        var transformElement;
        if (Browser.isDevice) {
          leftBar = document.querySelector('#right-sidebar');
          transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        } else {
          leftBar = document.querySelector('#left-sidebar');
          transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
          if (Browser.isDevice && Browser.isIos) {
            addClass([sbCntEle, sbHdrEle], ['hide-header']);
          }
          addClass([leftBar], ['e-close']); removeClass([leftBar], ['e-open']);
          if (!Browser.isDevice) { transformElement.style.marginLeft = '0px'; }
          transformElement.style.transform = 'inherit';
        } else if (e.targetItem === 'Minimize') {
          if (Browser.isDevice && Browser.isIos) {
            removeClass([sbCntEle, sbHdrEle], ['hide-header']);
          }
          removeClass([leftBar], ['e-close']);
          if (!Browser.isDevice) { 
            addClass([leftBar], ['e-open']);
            transformElement.style.marginLeft = leftBar.offsetWidth + 'px'; }
            transformElement.style.transform = 'translateX(0px)';
          }
        }
      },
      provide:{
          richtexteditor:[Toolbar, Link, Image, Table, MarkdownEditor]
      }
  });
</script>