<template>
    <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
                <ejs-richtexteditor-ui
                    ref="editor"
                    :value="value"
                    :toolbarSettings="toolbarSettings"
                    :quickToolbarSettings="quickToolbarSettings"
                    :slashCommandSettings="slashCommandSettings"
                    placeholder="Type something...">
                </ejs-richtexteditor-ui>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates the rich text editing and formatting features of the Rich Text Editor UI component with a comprehensive toolbar and Slash Command support.
        </p>
    </div>

    <div id="description">
        <p>
            This sample demonstrates the Rich Text Editor UI component with a comprehensive
            set of editing, formatting, and content insertion features. The following
            configurations are used:
        </p>

        <ul>
            <li>
                <code>toolbarSettings.items</code> - Configures the toolbar with text
                formatting, font styling, lists, alignment, indentation, content insertion,
                and editing tools.
            </li>
            <li>
                <code>quickToolbarSettings.text</code> - Configures the quick toolbar that
                appears when text is selected.
            </li>
            <li>
                <code>slashCommandSettings.enable</code> - Enables Slash Command support,
                allowing users to access editor commands by typing <code>/</code> within
                the editor.
            </li>
            <li>
                <code>imageSettings.uploadUrl</code> - Specifies the server URL used to
                upload images.
            </li>
            <li>
                <code>imageSettings.removeUrl</code> - Specifies the server URL used to
                remove uploaded images.
            </li>
            <li>
                <code>imageSettings.imageUrl</code> - Specifies the URL used to access
                uploaded images.
            </li>
            <li>
                <code>value</code> - Sets the initial content of the Rich Text Editor.
            </li>
            <li>
                <code>placeholder</code> - Displays placeholder text when the editor
                does not contain any content.
            </li>
        </ul>

        <p>
            The configured toolbar provides the following editing capabilities:
        </p>

        <ul>
            <li>
                <code>Text Formatting</code> - Applies Bold, Italic, Underline,
                Strikethrough, Inline Code, Subscript, and Superscript formatting.
            </li>
            <li>
                <code>Font</code> - Provides font family, font size, font color,
                and background color options.
            </li>
            <li>
                <code>Lists</code> - Provides bulleted, numbered, and checklist options.
            </li>
            <li>
                <code>Content Insertion</code> - Allows users to insert links, images,
                and tables.
            </li>
            <li>
                <code>Alignment and Indentation</code> - Provides alignment and
                indentation options for content.
            </li>
            <li>
                <code>Formats</code> - Applies predefined formats such as paragraphs
                and headings.
            </li>
            <li>
                <code>Editing</code> - Provides Undo, Redo, and Clear Format operations.
            </li>
            <li>
                <code>Additional Content</code> - Provides options for inserting
                horizontal lines, quotes, callouts, and code blocks.
            </li>
            <li>
                <code>Case Conversion</code> - Converts selected text to lowercase
                or uppercase.
            </li>
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
                    'Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'InlineCode', '|', 'Link', 'Image', 'Table', 'CodeBlock', 'HorizontalLine', 'Quote', '|', 'Formats', 'Alignment', 'Callout', '|', 'BulletFormatList', 'NumberFormatList', 'Checklist', '|', 'Outdent', 'Indent', '|', 'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'Superscript', 'Subscript', '|', 'ClearFormat'
                ]
            },

            quickToolbarSettings: {
                text: ['Bold', 'Italic', 'Underline', 'Strikethrough', 'BackgroundColor', 'FontColor', '|', 'Formats', '|', 'Link', 'Table', 'Image', 'ClearFormat']
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