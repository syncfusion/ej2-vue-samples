<template>
    <div>
        <div class="col-lg-8 control-section">
            <div class="control-wrapper">
                <div class="sample-container">
                    <div class="default-section">
                        <ejs-richtexteditor-ui
                            ref="editor"
                            height="350px"
                            :toolbarSettings="toolbarSettings">
                        </ejs-richtexteditor-ui>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4 property-section">
            <div id="property" title="Properties" class="editor-toolbar-properties">

                <div class="form-group">
                    <label class="form-label property-label">
                        Toolbar Type
                    </label>

                    <ejs-dropdownlist
                        :dataSource="toolbarTypeData"
                        :fields="fields"
                        value="Expanded"
                        popupHeight="200px"
                        :change="onToolbarTypeChange">
                    </ejs-dropdownlist>
                </div>

                <div class="form-group">
                    <label class="form-label property-label">
                        Toolbar Position
                    </label>

                    <ejs-dropdownlist
                        :dataSource="toolbarPositionData"
                        :fields="fields"
                        value="Top"
                        popupHeight="150px"
                        :change="onToolbarPositionChange">
                    </ejs-dropdownlist>
                </div>

                <div class="form-group">
                    <ejs-checkbox
                        label="Enable Floating"
                        :checked="true"
                        :change="onFloatingChange">
                    </ejs-checkbox>
                </div>

            </div>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates the different toolbar configurations of the Rich Text Editor UI component.
                Use the dropdown controls to change the toolbar type and position dynamically.
            </p>
        </div>

        <div id="description">
            <p>
                The Rich Text Editor UI toolbar can be configured using the
                <code>toolbarSettings</code> property.
            </p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

export default {
    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-checkbox': CheckBoxComponent
    },

    data() {
        return {
            fields: {
                text: 'text',
                value: 'value'
            },

            toolbarSettings: {
                items: ['Undo','Redo','|','Bold','Italic','Underline','Strikethrough','|','FontColor','BackgroundColor','|','Formats','Alignment','|','Table','Image','Link','|','FontName','FontSize','|','NumberFormatList','BulletFormatList','|','Subscript','Superscript'
                ],
                type: 'Expanded',
                position: 'Top',
                enableFloating: true
            },

            toolbarTypeData: [
                { text: 'Expanded', value: 'Expanded' },
                { text: 'MultiRow', value: 'MultiRow' },
                { text: 'Scrollable', value: 'Scrollable' }
            ],

            toolbarPositionData: [
                { text: 'Top', value: 'Top' },
                { text: 'Bottom', value: 'Bottom' }
            ]
        };
    },

    methods: {
        onToolbarTypeChange(args) {
            const editor = this.$refs.editor.ej2Instances;

            editor.toolbarSettings.type = args.value;
            editor.dataBind();
        },

        onToolbarPositionChange(args) {
            const editor = this.$refs.editor.ej2Instances;

            editor.toolbarSettings.position = args.value;
            editor.dataBind();
        },

        onFloatingChange(args) {
            const editor = this.$refs.editor.ej2Instances;

            editor.toolbarSettings.enableFloating = args.checked;
            editor.dataBind();
        }
    }
};
</script>

<style>
.editor-toolbar-properties div {
    padding-left: 0;
}

</style>