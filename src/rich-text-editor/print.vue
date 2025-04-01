<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
            <ejs-richtexteditor :toolbarSettings="toolbarSettings">
                <h2>The Greatest Lessons from Nature</h2><p>Nature is a powerful teacher, offering timeless wisdom through its beauty, resilience, and harmony. Here are three of the most important lessons we can learn from nature:</p><p><strong>Adaptability &amp; Resilience</strong> 🌿<br></p><p>Nature is constantly changing and evolving. Trees withstand storms, rivers carve through rocks, and animals adapt to new environments. Similarly, life challenges us, and, like nature, we must be flexible and resilient in order to overcome obstacles.</p><p><strong>Patience &amp; Growth</strong> 🌱</p><p>A seed does not become a tree overnight. Growth takes time, whether in nature or in our personal and professional lives. Success, wisdom, and strength develop through persistence, effort, and patience.</p><p><strong>Balance &amp; Harmony</strong> 🌎</p><p>Nature maintains a delicate balance throughout the day and night, across the seasons, and within ecosystems. It teaches us the importance of balance in our own lives between work and rest, giving and receiving, and action and reflection.</p><p><br></p><p style="text-align: center;"><em>“Look deep into nature, and then you will understand everything better.” <strong>– Albert Einstein</strong></em></p>
            </ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates how to print the content of the Rich Text Editor. Click the print command placed as the last item of the toolbar to print the editor’s content.</p>
</div>

<div id="description">
    <p>The Rich Text Editor prints its content using the <code>Print</code> library</p>
</div>
</div>
</template>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, QuickToolbar, HtmlEditor, PasteCleanup, Table, Video, Audio } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent
    },
    data: function() {
        return {
        toolbarSettings: {
            items: ['Bold',  'Italic',  'Underline',  '|',  'Formats',  'Alignments', 'Blockquote',
                'OrderedList',  'UnorderedList',  '|',  'CreateLink',  'Image',  '|',  'SourceCode',  'Undo',  'Redo', 'Print']
        }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor, PasteCleanup, Table, Video, Audio]
    }
}
</script>
