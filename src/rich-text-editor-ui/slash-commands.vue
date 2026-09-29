<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor-ui
                        ref="editor"
                        :slashCommandSettings="slashCommandSettings"
                        placeholder='Type "/" and choose format.'>
                    </ejs-richtexteditor-ui>
                </div>
            </div>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates the <code>SlashCommand</code> feature of the
                Rich Text Editor UI, which allows users to apply formatting such as
                headings, lists, blockquotes, and tables, as well as execute custom
                commands within the editor.
            </p>
        </div>

        <div id="description">
            <p>
                This example includes two custom slash command items that allow
                users to insert
            </p>
        </div>
    </div>
</template>

<script>
import {
    RichTextEditorUIComponent,
    SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
    name: 'Overview',

    components: {
        'ejs-richtexteditor-ui': RichTextEditorUIComponent
    },

    data() {
        return {
            slashCommandSettings: {
                enable: true,
                items: [
                    'Paragraph',
                    'Heading 1',
                    'Heading 2',
                    'Heading 3',
                    'Heading 4',
                    'NumberedList',
                    'BulletList',
                    'Blockquote',
                    'Table',
                    'Link',
                    'Image'
                ]
            }
        };
    },
    provide: {
        'richtexteditor-ui': [SlashCommand]
    }
};
</script>