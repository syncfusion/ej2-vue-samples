<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor><p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. 
                Users can format their content using standard toolbar commands.</p>
                <p><b>Key features:</b></p>
                <ul><li><p>Provides IFRAME and DIV modes</p></li>
                <li><p>Capable of handling markdown editing.</p></li>
                <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
                <li><p>Provides a fully customizable toolbar.</p></li>
                <li><p>Provides HTML view to edit the source directly for developers.</p></li>
                <li><p>Supports third-party library integration.</p></li>
                <li><p>Allows preview of modified content before saving it.</p></li>
                <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
                <li><p>Contains undo/redo manager.</p></li>
                <li><p>Creates bulleted and numbered lists.</p></li>
                </ul></ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the default rendering of the rich text editor with minimum configuration.</p>
</div>

<div id="description">
   <p>The rich text editor is WYSIWYG ("what you see is what you get") editor that is used to create and 
       edit content, and return valid HTML markup. The editor provides a standard toolbar to format content using its commands. 
       The toolbar contains commands to align the text, 
       insert link, insert image, insert list, undo/redo the operation, HTML view, and more.</P>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

export default Vue.extend({
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    }
});
</script>