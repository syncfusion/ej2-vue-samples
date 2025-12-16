<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section" id="rteSection">
        <ejs-richtexteditor ref="customObj" :toolbarSettings="toolbarSettings" >
        <p style="margin-right:10px">An emoji picker in a Rich Text Editor is a tool that allows users to easily add emojis or emoticons to their text. Typically, it is a small window or panel that displays a variety of emojis, arranged in different categories, such as smileys, animals, food, and so on. Users can select the desired emoji by clicking on it or by typing its name in a search bar.</p></ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p> This sample demonstrates how to insert an emoji into the content of a Rich Text Editor. First, click the emoji button in the toolbar. This will open the emoji picker popup. Next, click on the desired emoji in the picker to insert it into the editor.
    </p>
</div>
<div id="description">
    <p>The <b>Emoji Picker</b> feature allows you to insert an emoji into an editor. The emoji picker has a grid of emojis grouped by categories, such as smileys, animals, food, and travel. You are able to scroll through the emojis and click on one to insert it into the editor.</p>
    <p>In this demo, to enable this feature, configure the <b>EmojiPicker</b> command in the <a target='_blank' href='https://helpej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettingsModel/#items'>toolbarSettings.items</a> property.</p>
    <p>You can also insert an emoji by pressing the colon (:) which will open the emoji picker. Choose an emoji from the picker and insert it into the editor. The feature also provides the option to filter emojis based on the typing character.</p>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>HtmlEditor, Toolbar, Link, Image, QuickToolbar, EmojiPicker, PasteCleanup</code>.</p>
</div>
</div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, NodeSelection, HtmlEditor, QuickToolbar, EmojiPicker, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat } from "@syncfusion/ej2-vue-richtexteditor";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { TabComponent } from "@syncfusion/ej2-vue-navigations";

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent,
      'ejs-dialog': DialogComponent,
      'ejs-tab': TabComponent
    },
    data: function() {
        return {
            toolbarSettings: {
                items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'EmojiPicker', '|', 'Undo', 'Redo']
            },
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar, EmojiPicker, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat]
    }
}
</script>