<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor :enableResize="true" :height="height"><p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. 
                Users can format their content using standard toolbar commands.</p>
        </ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the resize operation of the rich text editor control. To resize the rich text editor, select and resize the editor using its handle (grip) at the bottom right corner of the content panel.</p>
</div>

<div id="description">
   <p>Users can create resizable rich text editor by setting the enableResize property to true, which is used to change the size of the rich text editor dynamically.</p>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, inject the specific module using <code>RichTextEditor.Inject (Toolbar, Link, Image, Resize, HtmlEditor)</code>.</p>
</div>
</div>
</template>
<style>
    .e-richtexteditor {
        max-width: 880px;
        min-width: 200px;
        min-height: 170px;
        max-height: 400px;
    }
</style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Resize, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

export default Vue.extend({
     data: function() {
        return {
            height: 500
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Resize, HtmlEditor]
    }
});
</script>