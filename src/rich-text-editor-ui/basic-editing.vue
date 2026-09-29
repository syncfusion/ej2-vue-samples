<template>
<div>
    <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
                <ejs-richtexteditor-ui
                    :toolbarSettings="toolbarSettings"
                    :value="value"
                    placeholder="Type something.">
                </ejs-richtexteditor-ui>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates the Rich Text Editor UI component with a basic toolbar configured for essential editing tasks.
            The toolbar includes essential formatting options such as text styling (bold, italic, underline), text formatting
            (strikethrough), text formats (headings, paragraphs), text alignment, and rich content insertion (links and images).
            Additionally, color customization tools for text and background colors are included to provide users with common
            styling capabilities needed for basic content creation.
        </p>
    </div>

    <div id="description">
        <p>
            This configuration is designed for a lightweight editing experience. It uses the default editor setup so you can
            create and edit content with standard formatting tools while keeping the integration simple.
        </p>
    </div>
</div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';
import { EDITOR_CONTENT } from './basic-editing-content';

export default {
    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            value: EDITOR_CONTENT,

            toolbarSettings: {
                items: [
                    'Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', '|', 'FontColor', 'BackgroundColor', '|' , 'NumberedList', 'BulletList', '|', 'ClearFormat'
                ]
            }
        };
    }
};
</script>