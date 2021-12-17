<template>
    <div class="control-section online-editor">
        <div class="sample-container">
            <div class="default-section">
                <div class='button-content'>
                    <div class="col-lg-12 col-sm-12 col-md-12 center">
                        Click/Touch the button to view the sample
                    </div>
                    <div class="col-lg-12 col-sm-12 col-md-12 center">
                        <a class="e-btn" id="newTab" v-on:click="newTabClick" target="_blank">Open in new tab</a>
                    </div>
                </div>

                <div class="rte-online-sample-view">
                    <h3 class="title-head">Rich Text Editor Online Html Editor</h3>
                    <div class="heading">
                        <h6 class="title"><b>PREVIEW</b> </h6>
                    </div>
                    <div class="heading right">
                        <h6 class="title"><b>HTML SOURCE CODE </b></h6>
                    </div>
                    <ejs-splitter id='splitter' width='100%' height='450px'>
                        <e-panes>
                            <e-pane size='50%' :resizable=false :content='pane1Content'></e-pane>
                            <e-pane :content='pane2Content'></e-pane>
                        </e-panes>
                    </ejs-splitter>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates an HTML content LIVE editing scenario using Vue Rich Text Editor. Click the <code>Open in new tab</code> button and you can edit the content in Rich Text Editor and also in the source code view.</p>
        </div>

        <div id="description">
            <p>This sample Rich Text Editor enabled most of the features to edit the content quickly such as insert image, table, etc... The source code view is formatted using the <code>Code-mirror</code> plugin.</p>
        </div>
    </div>
</template>

<style>
    .online-editor #defaultRTE {
        overflow: hidden;
        border: none;
    }

    .online-editor .e-splitter .CodeMirror {
        height: auto;
    }

    .online-editor .center {
        text-align: center;
        font-size: 13px;
        font-weight: 400;
        margin-top: 20px;
    }

    .online-editor .pane1 {
        padding-right: 8px;
    }

    .online-editor .pane2 {
        padding-left: 8px;
    }

    .online-editor .heading {
        margin-top: 10px;
        float: left;
        width: 50%;
        border: 1px solid #e8e8e8;
        border-bottom: none;
        position: relative;
        box-sizing: border-box;
        padding: 5px;
    }

    .online-editor .title {
        color: #a0aabf;
        letter-spacing: 1px;
        padding-left: 10px;
    }

    .online-editor .title-head {
        text-align: center
    }

    .online-editor .e-control.e-splitter .e-split-bar.e-split-bar-horizontal.e-last-bar {
        margin: 0;
    }

    .online-editor .button-content {
        display: none;
    }

    .sb-content-tab .online-editor .button-content {
        display: block;
    }

    .sb-content-tab .online-editor .rte-online-sample-view {
        display: none;
    }

    .rte-online-sample-view {
        display: block;
        padding: 15px;
    }

    body {
        margin: 0;
    }

    .online-editor table {
        width: 100%
    }

    .online-editor table,
    .online-editor th,
    .online-editor td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    .ej2-new .sb-bread-crumb,
    .ej2-new #action-description,
    .ej2-new #description-section,
    .ej2-new .sb-header,
    .ej2-new #description {
        display: none !important;
    }

    .ej2-new .container-fluid {
        padding: 0 !important;
    }

    .ej2-new .content {
        top : 0px;
    }

    .ej2-new .control-section {
        padding-left: 0px;
    }

    .online-editor .source-code.pane2 .CodeMirror {
        height: 448px;
    }
</style>

<script>
import Vue from "vue";
import { SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(SplitterPlugin);
Vue.use(RichTextEditorPlugin);

var RteContent = Vue.component("pane1", {
  template: `
    <div class="content">
        <ejs-richtexteditor id="defaultRTE" ref='rteObj' :toolbarSettings='toolbarSettings' :value="value" height='100%' saveInterval='1'
            :showCharCount='true' maxLength='5000' :created='onCreate' :change='onChange' :actionComplete='updateValue'>
        </ejs-richtexteditor>
    </div>`,
    data() {
        return {
            textArea: null,
            srcArea: null,
            height: '100%',
            showCharCount: true,
            myCodeMirror: '',
            maxLength: 5000,
            saveInterval: 1,
            toolbarSettings: {
                type: 'MultiRow',
                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', 'SuperScript', 'SubScript' , '|',
                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',
                'Outdent', 'Indent', '|',
                'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
            },
            value: `<p>The Rich Text Editor is a WYSIWYG (what you see is what you get) editor used to create and edit
                the content and return the valid HTML markup or markdown of the content.
                This provides a lot of commands to edit and format the content. </p>
                <p><b>Toolbar</b></p>
                <p>The editor’s toolbar provides various commands to align the text, format, insert a link, image,
                    list, undo/redo operations, HTML view, and more. The toolbar comes with different modes such as
                    floating, multi-row, and expanded. </p>
                <p><b>Links</b></p>
                <p>Create a hyperlink using the 'insert link' dialog and you can edit the hyperlink text, display text,
                    and tooltip using the 'edit link' dialog and quick toolbar. If the text has valid hyperlink text,
                    the editor converts it to hyperlink automatically. For example, link to Rich Text Editor.</p>
                <p><b>Table</b></p>
                <p>This editor allows you to insert a table with options to add, edit, and remove and perform other
                    table-related actions. </p>
                <p>For example</p>
                <table>
                    <tr>
                        <th>Employee name</th>
                        <th>Role</th>
                        <th>Mail</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Janet Fleet</td>
                        <td>Manager</td>
                        <td>janet95@arpy.com</td>
                        <td>France</td>
                    </tr>
                    <tr>
                        <td>Nancy Buchanan</td>
                        <td>Project Lead</td>
                        <td>nancy55@rpy.com</td>
                        <td>Sweden</td>
                    </tr>
                    <tr>
                        <td>Rose Rose</td>
                        <td>Project Lead</td>
                        <td>rose44@sample.com</td>
                        <td>France</td>
                    </tr>
                </table>
                <p><b>Image</b></p>
                <p>Allows you to insert images with caption, alt text, link, resize, and drag-and-drop from an
                    online source and local computer. You can upload an image to the server and insert it into the editor.
                    It provides an option to customize a quick toolbar for an image.</p>
                <p>For example</p>
                <img id='rteImageID' style="height:300px;transform: rotate(0deg);" alt="Logo"
                    src="./src/rich-text-editor/images/RTEImage-Feather.png" />
                <p><b>Lists</b></p>
                <p>You can include content with ordered and unordered lists.</p>
                <p>Examples for an ordered list:</p>
                <ul>
                    <li>TypeScript</li>
                    <li>Javascript</li>
                    <li>Angular</li>
                    <li>React</li>
                    <li>Vue</li>
                </ul>
                <p>Examples for an unordered list:</p>
                <ol>
                    <li>Rich Text Editor</li>
                    <li>Toolbar</li>
                    <li>Button</li>
                    <li>Dialog</li>
                    <li>Data Grid</li>
                </ol>
                <p>The editor has a lot of features to edit HTML content and Markdown content in web applications.</p>`
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
            this.renderCodeMirror(srcViewEle, this.$refs.rteObj.ej2Instances.value);
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
    <div class="content">
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
        newTabClick : function(){
             var URL = location.href.replace(location.search, '');
             document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'samples/rich-text-editor/online-html-editor/index.html');
        },
    }
});
</script>