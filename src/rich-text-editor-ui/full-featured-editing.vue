<template>
    <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
                <ejs-richtexteditor-ui
                    ref="editor"
                    :value="value"
                    :toolbarSettings="toolbarSettings"
                    :slashCommandSettings="slashCommandSettings"
                    placeholder="Type something...">
                </ejs-richtexteditor-ui>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates the features of Rich Text Editor UI that includes all the tools and functionalities.
        </p>
    </div>

    <div id="description">
        <p>
            This sample demonstrates the Rich Text Editor UI with Slash Command support enabled.
            The Slash Command feature allows users to quickly access editing actions and content
            insertion options by typing / within the editor. The editor provides a rich set of
            formatting tools through its toolbar, enabling users to create and edit content while
            generating valid HTML markup.
        </p>
        <ul>
            <li><code>Lists</code> - NumberFormatList and BulletFormatList types.</li>
            <li><code>Links</code> - A hyperlink can be inserted into the editor for quick access to related information.</li>
            <li><code>Image</code> - Inserts and manages images.</li>
            <li><code>Table</code> - Inserts and manages tables.</li>
            <li><code>Alignment</code> - Aligns the content with left, center, and right margins.</li>
            <li><code>Undo/Redo</code> - Allows undo and redo operations.</li>
            <li><code>Font</code> - Provides text styling options such as font family, font size, font color, and background color.</li>
            <li><code>Formats</code> - Applies predefined text formats such as paragraphs and headings.</li>
            <li><code>Bold / Italic / Underline / Strikethrough</code> - Applies inline text formatting to the selected content.</li>
            <li><code>Subscript / Superscript</code> - Formats the selected text as subscript (lower) or superscript (upper).</li>
            <li><code>Slash Command</code> - Allows users to quickly access editor commands and content insertion options by typing <code>/</code> within the editor.</li>
        </ul>
    </div>
</template>

<script>
import {
    RichTextEditorUIComponent,
    SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

import { FULL_FEATURED_CONTENT } from './full-featured-content';

export default {
    name: 'Overview',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            value: FULL_FEATURED_CONTENT,

            toolbarSettings: {
                items: [
                    'Undo', 'Redo', '|', 'Formats', '|', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'InlineCode', '|', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'Superscript', 'Subscript' , '|', 'FontColor', 'BackgroundColor', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Link', 'Image', 'Table', '|', 'Indent', 'Outdent', '|', 'Alignment', '|', 'HorizontalLine', 'Quote', 'CodeBlock', '|', 'ClearFormat'
                ]
            },

            slashCommandSettings: {
                enable: true
            }
        };
    },

    provide: {
        'richtexteditor-ui': [SlashCommand]
    }
};
</script>