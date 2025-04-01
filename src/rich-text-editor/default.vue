<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
            <ejs-richtexteditor>
                <h2>Welcome to the Rich Text Editor Demo!</h2><p>The Rich Text Editor control is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p><h4>Flexible Editing!</h4><p>For a better editing experience, the Angular Rich Text Editor component offers a variety of tools and choices. So, you can quickly insert <strong>images</strong>, <strong>videos</strong>, <strong>hyperlinks</strong>, and <strong>tables</strong>; <strong>merge table cells</strong>; and configure.</p><p>You can easily format the text and paragraphs by setting the editor’s foreground and <strong>background colors</strong>, <strong>font type</strong>, <strong>italicization</strong>, <strong>adding ordered </strong>and <strong>unordered custom lists</strong>, <strong>underlining</strong>, <strong>strikethrough</strong>, and <strong>bolding</strong>.<br><br></p><p><img alt="Editor Features Overview" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="400" height="200" class="e-img-left"></p>         
            </ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the default rendering of the Rich Text Editor with minimum configuration.</p>
</div>

<div id="description">
   <p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor that is used to create and 
       edit content, and return valid HTML markup. The editor provides a standard toolbar to format content using its commands. 
       The toolbar contains commands to align the text, 
       insert link, insert image, insert list, undo/redo the operation, HTML view, and more.</P>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, Video, Audio, PasteCleanup } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, Video, Audio, PasteCleanup]
    }
}
</script>