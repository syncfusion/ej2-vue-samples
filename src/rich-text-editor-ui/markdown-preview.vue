<template>
    <div class="control-section">
        <ejs-splitter
            ref="splitter"
            height="450px"
            width="100%"
            :paneSettings="paneSettings"
            :created="onSplitterCreated">

            <div class="markdown-preview-editor-pane">
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

            <div class="markdown-preview-header">
                <div class="markdown-preview-header-title">
                    <div class="markdown-preview-header-content">
                        <h6 class="markdown-preview-title">
                            <b>MARKDOWN PREVIEW</b>
                        </h6>

                        <button
                            class="e-btn e-flat"
                            @click="copyMarkdownToClipboard">

                            <span class="e-icons e-copy"></span>
                            Copy
                        </button>
                    </div>
                </div>

                <div
                    ref="sourcePane"
                    class="markdown-preview-source-pane">
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
import 'codemirror/mode/markdown/markdown';
import { ToastUtility } from '@syncfusion/ej2-notifications';

export default {
    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent,
        'ejs-splitter': SplitterComponent
    },

    data() {
        return {
            codeMirrorObj: null,
            turndownService: null,

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
                '<h3>Welcome to the Markdown Preview!</h3>' +
                '<p>Create and edit rich content in the editor on the left, and see the real-time Markdown conversion on the right.</p>' +
                '<h4>Features</h4>' +
                '<ul>' +
                '<li><strong>Bold</strong>, <em>italic</em>, and <u>underline</u> formatting</li>' +
                '<li>Headings and paragraphs</li>' +
                '<li>Lists (ordered and unordered)</li>' +
                '<li>Links and images</li>' +
                '<li>Tables and blockquotes</li>' +
                '</ul>' +
                '<blockquote><p>The right pane displays the generated Markdown in real time!</p></blockquote>',

            toolbarSettings: {
                items: ['Bold','Italic','Underline','FontName','FontSize','FontColor','BackgroundColor','Formats','Outdent','Indent','Link','Image','Table','|','Undo','Redo'
                ]
            }
        };
    },

    methods: {
        getEditor() {
            return this.$refs.editor.ej2Instances;
        },

        getTurndownService() {
            if (this.turndownService) {
                return this.turndownService;
            }

            const TurndownCtor =
                window.TurndownService ||
                window.turndown ||
                window.default;

            if (!TurndownCtor) {
                return null;
            }

            this.turndownService = new TurndownCtor({
                codeBlockStyle: 'fenced',
                emDelimiter: '_',
                bulletListMarker: '-',
                headingStyle: 'atx'
            });

            const plugin =
                window.gfm ||
                window.turndownPluginGfm;

            if (plugin) {
                if (typeof plugin === 'function') {
                    this.turndownService.use(plugin);
                } else if (plugin.gfm) {
                    this.turndownService.use(plugin.gfm);
                } else {
                    this.turndownService.use(plugin);
                }
            }

            return this.turndownService;
        },

        convertHtmlToMarkdown(html) {
            const service = this.getTurndownService();

            if (!service) {
                return html;
            }

            return service.turndown(html);
        },

        initializeCodeMirror() {
            this.syncEditorToCodeMirror();
        },

        syncEditorToCodeMirror() {
            const markdownContent =
                this.convertHtmlToMarkdown(
                    this.getEditor().getHtml()
                );

            if (!this.codeMirrorObj) {
                this.codeMirrorObj = CodeMirror(
                    this.$refs.sourcePane,
                    {
                        value: markdownContent,
                        lineNumbers: true,
                        mode: 'text/x-markdown',
                        lineWrapping: true,
                        readOnly: true
                    }
                );
            } else {
                const cursor =
                    this.codeMirrorObj.getCursor();

                this.codeMirrorObj.setValue(
                    markdownContent
                );

                this.codeMirrorObj.setCursor(cursor);
            }
        },

        onSplitterCreated() {
            if (Browser.isDevice) {
                const splitter =
                    this.$refs.splitter.ej2Instances;

                splitter.orientation = 'Vertical';
            }
        },

        async copyMarkdownToClipboard() {
            const markdown = this.codeMirrorObj
                ? this.codeMirrorObj.getValue()
                : this.convertHtmlToMarkdown(
                      this.getEditor().getHtml()
                  );

            try {
                await navigator.clipboard.writeText(markdown);

                ToastUtility.show({
                    title: 'Success',
                    icon: 'e-icons e-check',
                    content: 'Markdown copied successfully.',
                    position: {
                        X: 'Right'
                    },
                    cssClass: 'e-toast-success'
                });
            } catch {
                ToastUtility.show({
                    title: 'Error',
                    content: 'Unable to copy markdown.',
                    position: {
                        X: 'Right'
                    }
                });
            }
        }
    }
};
</script>