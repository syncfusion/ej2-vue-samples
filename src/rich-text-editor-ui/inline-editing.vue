<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor-ui
                        ref="editor"
                        placeholder="Type something ..."
                        :toolbarSettings="toolbarSettings"
                        :quickToolbarSettings="quickToolbarSettings">
                    </ejs-richtexteditor-ui>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates inline editing with a compact configuration for in-place content updates.
            </p>
        </div>

        <div id="description">
            <p>
                This configuration enables editing directly within the page so content can be updated where it appears.
                It keeps the editor focused and easy to scan while still providing the common formatting controls
                needed for everyday editing.
            </p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
    name: 'Overview',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            toolbarSettings: {
                enable: false
            },

            quickToolbarSettings: {
                text: ['Undo','Redo','|','Bold','Italic','Underline','Strikethrough','|','FontColor','BackgroundColor','|','Formats','Alignment','|','Table','Image','Link','|','FontName','FontSize','|','NumberFormatList','BulletFormatList','|','Subscript','Superscript'
                ]
            }
        };
    }
};
</script>