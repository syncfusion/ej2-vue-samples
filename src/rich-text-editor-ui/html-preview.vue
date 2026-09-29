<template>
    <div class="control-section">
        <ejs-splitter
            ref="splitter"
            height="450px"
            width="100%"
            :paneSettings="paneSettings"
            :created="onSplitterCreated">

            <div class="html-preview-editor-pane">
                <ejs-richtexteditor-ui
                    ref="editor"
                    height="100%"
                    valueFormat="html"
                    :value="value"
                    :saveInterval="1"
                    :toolbarSettings="toolbarSettings"
                    :actionComplete="syncEditorToCodeMirror"
                    :change="syncEditorToCodeMirror"
                    :created="initializeCodeMirror">
                </ejs-richtexteditor-ui>
            </div>

            <div class="html-preview-header">
                <div class="html-preview-header-title">
                    <div class="html-preview-header-content">
                        <h6 class="html-preview-title">
                            <b>HTML SOURCE</b>
                        </h6>

                        <button
                            class="e-btn e-flat"
                            @click="copyHtmlToClipboard">

                            <span class="e-icons e-copy"></span>
                            Copy
                        </button>
                    </div>
                </div>

                <div
                    ref="sourcePane"
                    class="html-preview-source-pane">
                </div>
            </div>

        </ejs-splitter>
    </div>
</template>

<script>
import { Browser } from '@syncfusion/ej2-base';

import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

import { SplitterComponent } from '@syncfusion/ej2-vue-layouts';

import * as CodeMirror from 'codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';

import { ToastUtility } from '@syncfusion/ej2-notifications';

export default {
    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent,
        'ejs-splitter': SplitterComponent
    },

    data() {
        return {
            codeMirrorObj: null,

            paneSettings: [
                {
                    resizable: true,
                    size: '50%',
                    min: '40%'
                },
                {
                    min: '40%'
                }
            ],

            value:
                '<h3>Welcome to the HTML real-time live editor!</h3>' +
                '<p>Create and edit the valid HTML code simply!</p>' +
                '<h4>Don\'t worry about syntax</h4>' +
                '<p>The content editing works bi-directional.</p>',

            toolbarSettings: {
                enableFloating: false,
                items: ['Bold','Italic','Underline','FontName','FontSize','FontColor','BackgroundColor','Formats','Outdent','Indent','Link','Image','Table','|','Undo','Redo'
                ]
            }
        };
    },

    methods: {
        getEditor() {
            return this.$refs.editor.ej2Instances;
        },

        initializeCodeMirror() {
            this.syncEditorToCodeMirror();
        },

        syncEditorToCodeMirror() {
            const editor = this.getEditor();
            const rteHtml = editor.getHtml();

            if (!this.codeMirrorObj) {
                this.codeMirrorObj = CodeMirror(
                    this.$refs.sourcePane,
                    {
                        value: rteHtml,
                        mode: 'text/html',
                        lineNumbers: true,
                        lineWrapping: true
                    }
                );

                this.codeMirrorObj.on(
                    'change',
                    this.handleCodeMirrorChange
                );
            }
            else if (
                !this.codeMirrorObj.hasFocus() &&
                this.codeMirrorObj.getValue() !== rteHtml
            ) {
                const cursor =
                    this.codeMirrorObj.getCursor();

                this.codeMirrorObj.setValue(rteHtml);

                this.codeMirrorObj.setCursor(cursor);
            }
        },

        handleCodeMirrorChange() {
            const editor = this.getEditor();

            if (
                this.codeMirrorObj &&
                this.codeMirrorObj.getValue() !== editor.getHtml()
            ) {
                editor.value =
                    this.codeMirrorObj.getValue();

                editor.dataBind();
            }
        },

        onSplitterCreated() {
            if (Browser.isDevice) {
                const splitter =
                    this.$refs.splitter.ej2Instances;

                splitter.orientation = 'Vertical';
            }
        },

        async copyHtmlToClipboard() {
            try {
                const html = this.codeMirrorObj
                    ? this.codeMirrorObj.getValue()
                    : this.getEditor().getHtml();

                await navigator.clipboard.writeText(html);

                ToastUtility.show({
                    title: 'Success',
                    icon: 'e-icons e-check',
                    content: 'Content Copied successfully.',
                    position: {
                        X: 'Right'
                    },
                    cssClass: 'e-toast-success'
                });
            } catch {
                ToastUtility.show({
                    title: 'Error',
                    content: 'Unable to copy content.',
                    position: {
                        X: 'Right'
                    }
                });
            }
        }
    }
};
</script>