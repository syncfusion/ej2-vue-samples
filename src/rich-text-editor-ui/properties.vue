<template>
    <div>
        <div class="col-lg-8 control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor-ui
                        ref="editor"
                        :value="value"
                        :valueFormat="valueFormat"
                        :enable="enable"
                        :readonly="readonly"
                        :enableRtl="enableRtl"
                        :enablePersistence="enablePersistence"
                        :saveInterval="100"
                        :change="onEditorChange">
                    </ejs-richtexteditor-ui>

                    <div id="value-format-output-panel" class="e-rte-api-methods">
                        <h4>Value Format Result</h4>
                        <pre id="value-format-output" aria-live="polite">{{ valueFormatOutput }}</pre>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4 property-section">
            <div id="property" title="Properties" class="editor-properties">

                <div class="form-group">
                    <label class="form-label">Value Format</label>

                    <ejs-dropdownlist
                        :dataSource="valueFormatData"
                        :fields="fields"
                        :value="valueFormat"
                        popupHeight="150px"
                        :change="onValueFormatChange">
                    </ejs-dropdownlist>
                </div>

                <div class="form-group">
                    <ejs-checkbox
                        label="Enable"
                        :checked="enable"
                        :change="onEnableChange">
                    </ejs-checkbox>
                </div>

                <div class="form-group">
                    <ejs-checkbox
                        label="Readonly"
                        :checked="readonly"
                        :change="onReadonlyChange">
                    </ejs-checkbox>
                </div>

                <div class="form-group">
                    <ejs-checkbox
                        label="Enable RTL"
                        :checked="enableRtl"
                        :change="onEnableRtlChange">
                    </ejs-checkbox>
                </div>

                <div class="form-group">
                    <ejs-checkbox
                        label="Enable Persistence"
                        :checked="enablePersistence"
                        :change="onEnablePersistenceChange">
                    </ejs-checkbox>
                </div>

            </div>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates the properties of the Rich Text Editor UI component.
            </p>
        </div>

        <div id="description">
            <p>
                The Rich Text Editor UI component demonstrates the following properties and APIs.
            </p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    name: 'Properties',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-checkbox': CheckBoxComponent
    },

    data() {
        return {
            value: '<p>Welcome to Rich Text Editor</p>',

            valueFormatOutput: '',

            valueFormat: 'html',

            enable: true,

            readonly: false,

            enableRtl: false,

            enablePersistence: true,

            fields: {
                text: 'text',
                value: 'value'
            },

            valueFormatData: [
                { text: 'HTML', value: 'html' },
                { text: 'JSON', value: 'json' }
            ]
        };
    },

    mounted() {
        this.log(this.getEditor().value);
    },

    methods: {
        getEditor() {
            return this.$refs.editor.ej2Instances;
        },

        log(value) {
            this.valueFormatOutput =
                value === undefined || value === null
                    ? String(value)
                    : typeof value === 'string'
                        ? value
                        : JSON.stringify(value, null, 2);
        },

        onEditorChange() {
            this.log(this.getEditor().value);
        },

        onValueFormatChange(args) {
            const editor = this.getEditor();

            const currentValue = editor.value;

            editor.valueFormat = args.value;
            editor.value = currentValue;

            editor.dataBind();

            this.valueFormat = args.value;

            this.log(editor.value);
        },

        onEnableChange(args) {
            const editor = this.getEditor();

            editor.enable = args.checked;
            editor.dataBind();

            this.enable = args.checked;
        },

        onReadonlyChange(args) {
            const editor = this.getEditor();

            editor.readonly = args.checked;
            editor.dataBind();

            this.readonly = args.checked;
        },

        onEnableRtlChange(args) {
            const editor = this.getEditor();

            editor.enableRtl = args.checked;
            editor.dataBind();

            this.enableRtl = args.checked;
        },

        onEnablePersistenceChange(args) {
            const editor = this.getEditor();

            editor.enablePersistence = args.checked;
            editor.dataBind();

            this.enablePersistence = args.checked;
        }
    }
};
</script>

<style>
.editor-properties div {
    padding-left: 0;
}

#value-format-output-panel {
    margin-top: 16px;
}

#value-format-output-panel h4 {
    margin: 0 0 8px 0;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4px;
}

#value-format-output {
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
</style>