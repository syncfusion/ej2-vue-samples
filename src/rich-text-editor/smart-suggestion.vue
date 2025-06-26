<template>
    <div>
        <div class="control-section">
            <div class="sample-container mention-inline-format-section">
                <ejs-richtexteditor  ref="smartEditor":toolbarSettings="toolbarSettings" :slashMenuSettings="slashMenuSettings" :slashMenuItemSelect="onSlashMenuItemSelect" id="smartSuggestion" placeholder="Type '/' and choose format">
                </ejs-richtexteditor>
            </div>
        </div>
       
        <div id="action-description">
              <p>This example demonstrates how to use the slash menu feature of the Rich Text Editor to apply formats, open
        dialogs easily.</p>
        </div>
        <div id="description">
            <p>This sample demonstrates the <code>SlashMenu</code> feature of the Rich Text Editor, which allows users to apply
                formatting such as headings, lists, quotes, open insert dialogs, and execute custom commands within the editor.
                The slash menu can be triggered by typing the "/" character in the editor.</p>
            <p>In this example, the slash menu is enabled by setting the <code>enable</code> property within the
                <code>slashMenuSettings</code> to <code>true</code>.
            </p>
            <p>This example includes two <b>Custom Slash menu items</b> that allow you to easily insert meeting notes and a
                signature into the content.</p>
            <p>The slash menu is configured with the following properties:</p>
            <ul>
                <li>
                    <p><code>enable</code>: Enables or disables the slash menu in the editor. The default value is
                        <code>false</code>.
                    </p>
                </li>
                <li>
                    <p><code>items</code>: Defines the items displayed in the slash menu popup. Custom items can also be added,
                        and their actions can be handled using the <code>slashMenuItemSelect</code> event.</p>
                </li>
            </ul>
            <p><b>Adding Custom Slash Menu Items</b></p>
            <p>The custom items can be added to the slash menu by defining the <code>items</code> child property within
                <code>slashMenuSettings</code>. The <code>items</code> property accepts a string of items and also an array of
                objects, where each object represents a custom slash menu item. These objects can include the following
                properties:
            </p>
            <ul>
                <li><code>text</code> - Sets the text displayed for the slash menu item.</li>
                <li><code>command</code> - Specifies the action to be executed when the slash menu item is clicked.</li>
                <li><code>type</code> - Groups related items within the slash menu.</li>
                <li><code>iconCss</code> - Sets the CSS class for the icon associated with the item.</li>
                <li><code>description</code> - Provides a description for the slash menu item.</li>
            </ul>
             <p><b>Injecting Module</b></p>
            <p>The above features built as modules have to be included in your application. For example, to use image
            and link, we need to inject <code>SlashMenu, Toolbar, Link, Image, Audio, Table, Video, QuickToolbar, HtmlEditor, EmojiPicker, PasteCleanup, FormatPainter</code> into the <code>provide</code> section.</p>
        </div>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Table, Audio, Video, QuickToolbar, HtmlEditor, EmojiPicker, PasteCleanup, FormatPainter, SlashMenu, CodeBlock } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    components: {
        'ejs-richtexteditor': RichTextEditorComponent
    },    
    data: function() {
        return {
        meetingNotes:'<p><strong>Meeting Notes</strong></p><table class="e-rte-table" style="width: 100%; min-width: 0px; height: 150px;"> <tbody> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Attendees</strong></td> <td style="width: 50%;" class=""><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Date &amp; Time</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Agenda</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Discussed Items</strong></td> <td style="width: 50%;"><br></td> </tr> <tr style="height: 20%;"> <td style="width: 50%;"><strong>Action Items</strong></td> <td style="width: 50%;"><br></td> </tr> </tbody> </table>',
        signature: '<p><br></p><p>Warm regards,</p><p>John Doe<br>Event Coordinator<br>ABC Company</p>',
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
                'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'Video', 'Audio', 'CreateTable', 'CodeBlock', '|', 'FormatPainter', 'ClearFormat',
                '|', 'EmojiPicker', '|',
                'SourceCode', '|', 'Undo', 'Redo']
            },
            slashMenuSettings: {
                enable: true,
                items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'OrderedList', 'UnorderedList',
                    'CodeBlock', 'Blockquote', 'Link', 'Image', 'Video', 'Audio', 'Table', 'Emojipicker',
                    {
                        text: 'Meeting notes',
                        description: 'Insert a meeting note template.',
                        iconCss: 'e-icons e-description',
                        type: 'Custom',
                        command: 'MeetingNotes'
                    },
                    {
                        text: 'Signature',
                        description: 'Insert a signature template.',
                        iconCss: 'e-icons e-signature',
                        type: 'Custom',
                        command: 'Signature'
                    }
                ]
            }
        };
    },
    provide:{
        richtexteditor:[SlashMenu, Toolbar, Link, Image, Audio, Table, Video, QuickToolbar, HtmlEditor, EmojiPicker, PasteCleanup, FormatPainter, CodeBlock]
    },

    methods: {
        onSlashMenuItemSelect: function (args) {
            if (args.itemData.command === 'MeetingNotes') {
                this.$refs.smartEditor.ej2Instances.executeCommand('insertHTML', this.meetingNotes, { undo: true });
            }
            if (args.itemData.command === 'Signature') {
                this.$refs.smartEditor.ej2Instances.executeCommand('insertHTML', this.signature, { undo: true });
            }
        }
    }
}
</script>
