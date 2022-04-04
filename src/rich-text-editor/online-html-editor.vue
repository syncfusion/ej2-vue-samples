<template>
    <div class="control-section online-editor">
        <div class="sample-container">
                <div class="rte-online-sample-view">
                    <ejs-splitter id='splitter' width='100%' height='450px' :created="onRefreshUI" :resizing='onRefreshUI'>
                        <e-panes>
                            <e-pane size='50%' :resizable=true :content='pane1Content' min='20%'></e-pane>
                            <e-pane :content='pane2Content' min='20%'></e-pane>
                        </e-panes>
                    </ejs-splitter>
                </div>
        </div>

        <div id="action-description">
            <p>The online HTML editor sample demonstrates how to create LIVE editing scenario with real-world applications
            using JavaScript Rich Text Editor. Most of the control features are enabled in this sample to edit the
            content quickly.</p>
            <p>You can edit the source code and content also parallelly. The source code is formatted using the code mirror
            library.</p>
        </div>

        <div id="description">
            <p>The online HTML editor is a demo that provides LIVE experience for both content and HTML editing with Rich Text Editor features in a real-world scenario.</p>
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
      padding: 5px;
      border-left:none;
      border-top:none;
    }

    .online-editor .title {
      color: #333333;
      letter-spacing: 1px;
      padding-left: 10px;
      text-align: center;
      font-size: 12px;
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
    .online-editor .e-splitter.e-splitter-horizontal, .online-editor .e-splitter.e-splitter-vertical {
    border-left: none;
    }
    .online-editor .e-richtexteditor .e-rte-toolbar.e-control[class*='e-toolbar'], .e-richtexteditor .e-rte-toolbar.e-toolbar.e-extended-toolbar.e-control[class*='e-toolbar'], .e-richtexteditor .e-rte-content, .e-richtexteditor .e-source-content{
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
    .online-editor .e-richtexteditor.e-rte-tb-expand .e-rte-content, .e-richtexteditor.e-rte-tb-expand .e-source-content
    .sb-content-section .e-lib .e-tab .e-control .e-template .e-keyboard .e-nested .sb-content-header {
      border-bottom: none;
    }
    .online-editor .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal {
      min-width: 400px !important;
    }
    .online-editor .CodeMirror-scroll
    {
      border-top: 1px solid #e8e8e8;
    }
    .online-editor .heading .right .e-pane .e-pane-horizontal .e-scrollable
    {
      padding:0px;
    }
    
    .online-editor .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal {
      overflow: unset;
    }
    .online-editor .CodeMirror-sizer{
       margin-right: 10px;
       border: none;
    }
        .fabric-dark .cm-s-default .cm-tag,
    .bootstrap5-dark .cm-s-default .cm-tag,
    .bootstrap-dark .cm-s-default .cm-tag,
    .fluent-dark .cm-s-default .cm-tag,
    .material-dark .cm-s-default .cm-tag,
    .tailwind-dark .cm-s-default .cm-tag,
    .highcontrast .cm-s-default .cm-tag {
        color: #00ff00;
    }
    .fabric-dark .title,
    .bootstrap5-dark .title,
    .bootstrap-dark .title,
    .fluent-dark .title,
    .material-dark .title,
    .tailwind-dark .title,
    .highcontrast .title{
        color: #fff;
    }
    .fabric-dark .CodeMirror,
    .bootstrap5-dark .CodeMirror,
    .fluent-dark .CodeMirror,
    .bootstrap-dark .CodeMirror,
    .material-dark .CodeMirror,
    .tailwind-dark .CodeMirror {
        background-color: #303030;
        color: #fff;
    }
    .highcontrast .CodeMirror {
        background: black;
        color:#fff;
    }
    .fabric-dark .CodeMirror-gutters,
    .bootstrap5-dark .CodeMirror-gutters,
    .fluent-dark .CodeMirror-gutters,
    .bootstrap-dark .CodeMirror-gutters,
    .material-dark .CodeMirror-gutters,
    .tailwind-dark .CodeMirror-gutters,
    .highcontrast .CodeMirror-gutters {
        background-color: #303030;
    }
  </style>

<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(SplitterPlugin);
Vue.use(RichTextEditorPlugin);

var RteContent = Vue.component("pane1", {
  template: `<ejs-richtexteditor id="defaultRTE" ref='rteObj' :toolbarSettings='toolbarSettings' :value="value" height='100%' saveInterval='1'
            :showCharCount='true' maxLength='5000' :created='onCreate' :change='onChange' :actionComplete='updateValue'>
        </ejs-richtexteditor>`,
    data() {
        return {
            textArea: null,
            srcArea: null,
            height: '100%',
            showCharCount: true,
            myCodeMirror: '',
            maxLength: 5000,
            saveInterval: 1,
            enableFloating: false,
            toolbarSettings: {
                type: 'Expand',
                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
                'Outdent', 'Indent',
                'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
            },
            value: `<h3>Welcome to the HTML real-time live editor!</h3>
                <p>Create and edit the valid HTML code simply! You don't worry about the HTML syntax to format your text content. The WYSIWYG editor (left side view) provided the toolbar to make format text and insert images, tables, and more options.</p>
                <h4>Don't worry about syntax</h4>
                <p>The content editing works bi-directional, you can write the HTML code on the right-side view (code view), and changes will reflect in the WYSIWYG editor.</p>`
        };
    },
    methods: {
        onCreate: function() {
            setTimeout(() => {
            this.updateValue();
            this.textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
            this.srcArea = document.querySelector('.source-code');
            if (this.srcArea) {
                this.srcArea.addEventListener('keyup', this.updateHtmlValue);
            }
            }, 400);
        },
        onChange: function() {
            this.updateValue();
        },
        updateHtmlValue: function() {
            this.textArea.innerHTML = this.myCodeMirror.getValue();
        },
        updateValue: function(e) {
            var mirrorView = document.querySelector('#src-view');
            if (!mirrorView) {
                mirrorView = document.createElement('div', { className: 'e-content' });
                mirrorView.id = 'src-view';
                var srcCodeElement = document.querySelector('.source-code');
                if (srcCodeElement) {
                    srcCodeElement.appendChild(mirrorView);
                }
                mirrorView.innerHTML = '';
                mirrorView.style.display = 'block';
            }
            var srcViewEle = document.querySelector('#src-view');
            var codeMirrorEle = document.querySelector('.CodeMirror-wrap');
            if (codeMirrorEle) {
                codeMirrorEle.remove();
            }
            if (this.$refs.rteObj.ej2Instances.value) {
              this.renderCodeMirror(srcViewEle, this.$refs.rteObj.ej2Instances.value);
            }
        },
        renderCodeMirror: function(mirrorView, content) {
            this.myCodeMirror = CodeMirror(mirrorView, {
                value: content,
                lineNumbers: true,
                mode: 'text/html',
                lineWrapping: true,
            });
        }
    },
    provide:{
        richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table]
    }
});

var TextAreaContent = Vue.component("pane2", {
  template: `
    <div class="heading right">
        <h6 class="title"><b>HTML SOURCE</b></h6>
        <div class="splitter-default-content source-code pane2" contenteditable="true"></div>
    </div>`,
    data() {
        return {
            data: {}
        };
    }
});

export default Vue.extend({
    data: function() {
        return {
            pane1Content: function () {
                return { template : RteContent }
            },
            pane2Content: function () {
                return { template : TextAreaContent }
            }
        }
    },
    methods: {
        onRefreshUI: function() {
            this.$children[0].$children[1].$refs.rteObj.refreshUI();
        }
    }
});
</script>
