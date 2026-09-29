<template>
    <div class="row">
        <div class="col-lg-8 control-section">
            <div class="control-wrapper">
                <div class="sample-container">
                    <div class="default-section">
                        <ejs-richtexteditor-ui
                            ref="editor"
                            placeholder="Type or paste content here to try the API methods..."
                            :toolbarSettings="toolbarSettings">
                        </ejs-richtexteditor-ui>
                    </div>
                </div>
            </div>

            <div id="methods-output-panel" class="e-rte-api-methods">
                <h4>Method Result</h4>
                <pre
                    id="methods-output"
                    aria-live="polite">{{ methodsOutput }}</pre>
            </div>
        </div>

        <div class="col-lg-4 rte-methods-panel property-section">
            <div
                id="property"
                title="API Methods"
                class="property-panel">

                <div class="property-content">
                    <div class="method-item">
                        <span class="method-name">getHtml</span>
                        <button
                            class="e-btn e-primary method-btn"
                            @click="getHtml">
                            Invoke
                        </button>
                    </div>

                    <div class="method-item">
                        <span class="method-name">getText</span>
                        <button
                            class="e-btn e-primary method-btn"
                            @click="getText">
                            Invoke
                        </button>
                    </div>

                    <div class="method-item">
                        <span class="method-name">getDocument</span>
                        <button
                            class="e-btn e-primary method-btn"
                            @click="getDocument">
                            Invoke
                        </button>
                    </div>

                    <div class="method-item">
                        <span class="method-name">focus</span>
                        <button
                            class="e-btn e-primary method-btn"
                            @click="focusEditor">
                            Invoke
                        </button>
                    </div>

                    <div class="method-item">
                        <span class="method-name">blur</span>
                        <button
                            class="e-btn e-primary method-btn"
                            @click="blurEditor">
                            Invoke
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates the public methods exposed by the Rich
            Text Editor UI component. Use the property panel on the right to
            invoke each method and observe the resulting behavior.
        </p>
    </div>

    <div id="description">
        <p>
            The Rich Text Editor UI exposes a rich set of public methods that
            allow you to programmatically interact with the editor instance.
            The methods shown here are grouped into a single property panel
            for quick access.
        </p>

        <ul>
            <li>
                <code>getHtml()</code> &mdash; returns the editor content as
                an HTML string.
            </li>
            <li>
                <code>getText()</code> &mdash; returns the editor content as
                plain text.
            </li>
            <li>
                <code>getDocument()</code> &mdash; returns the document markup
                of the editor content area as a string.
            </li>
            <li>
                <code>focus()</code> &mdash; focuses the editor.
            </li>
            <li>
                <code>blur()</code> &mdash; removes focus from the editor.
            </li>
        </ul>

        <p>
            Type or paste some content into the editor, then click an
            <strong>Invoke</strong> button to see each method in action.
            The result of the invoked method is displayed in the panel below
            the editor.
        </p>
    </div>
</template>

<script>
import {
    RichTextEditorUIComponent
} from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
    name: 'Methods',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            methodsOutput: '',

            toolbarSettings: {
                items: ['Bold','Italic','Underline','|','FontColor','BackgroundColor','|','Formats','|','NumberFormatList','BulletFormatList','|','Undo','Redo'
                ]
            }
        };
    },

    methods: {
        getEditor() {
            return this.$refs.editor.ej2Instances;
        },

        log(value) {
            const text =
                value === undefined || value === null
                    ? String(value)
                    : typeof value === 'string'
                        ? value
                        : JSON.stringify(value);

            this.methodsOutput = text;
        },

        getHtml() {
            const editor = this.getEditor();
            this.log(editor.getHtml());
        },

        getText() {
            const editor = this.getEditor();
            this.log(editor.getText());
        },

        getDocument() {
            const editor = this.getEditor();
            this.log(editor.getDocument());
        },

        focusEditor() {
            const editor = this.getEditor();

            editor.focusIn();
            this.log('editor focused');
        },

        blurEditor() {
            const editor = this.getEditor();

            editor.focusOut();
            this.log('editor blurred');
        }
    }
};
</script>

<style>
.rte-methods-panel .property-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.rte-methods-panel .method-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    gap: 8px;
}

.rte-methods-panel .method-name {
    font-size: 14px;
    font-weight: 500;
}

.rte-methods-panel .method-btn {
    flex: 0 0 auto;
    padding: 5px 14px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
}

#methods-output-panel {
    margin-top: 16px;
}

#methods-output-panel h4 {
    margin: 0 0 8px 0;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4px;
}

#methods-output {
    margin: 0;
    padding: 12px;
    font-family: inherit;
    font-size: 13px;
    line-height: 1.5;
    min-height: 200px;
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-word;
    box-sizing: border-box;
    background: transparent;
}

#methods-output:empty::before {
    content: "Method result will appear here.";
    font-style: italic;
    opacity: 0.6;
}

@media (max-width: 991px) {
    .col-lg-8,
    .col-lg-4 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .rte-methods-panel {
        margin-top: 16px;
    }
}
</style>