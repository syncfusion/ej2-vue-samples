<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor-ui
                        ref="editor"
                        placeholder="Type something ..."
                        :value="value"
                        :toolbarSettings="toolbarSettings"
                        :quickToolbarSettings="quickToolbarSettings">
                    </ejs-richtexteditor-ui>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates inline editing with a quick toolbar for formatting
                and content insertion.
            </p>
        </div>

        <div id="description">
            <p>
                Inline mode can be achieved using the following configuration:
            </p>

            <ol>
                <li>
                    <code>toolbarSettings.enable</code> - Disables the main toolbar to
                    provide an inline editing experience.
                </li>
                <li>
                    <code>quickToolbarSettings.text</code> - Configures the text quick
                    toolbar that appears when text is selected.
                </li>
            </ol>

            <p>
                Additionally, the <code>placeholder</code> property is configured to
                display placeholder text when the editor is empty.
            </p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

import { INLINE_EDITING_CONTENT } from './inline-editing-content';

export default {
    name: 'Overview',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            value: INLINE_EDITING_CONTENT,

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