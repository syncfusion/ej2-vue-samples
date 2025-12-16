<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section" id="resize">
        <ejs-richtexteditor :enableResize="true" :height="height">
            <h2>The Greatest Lessons from Nature</h2><p>Nature is a powerful teacher, offering timeless wisdom through its beauty, resilience, and harmony. Here are three of the most important lessons we can learn from nature:</p><p><strong>Adaptability &amp; Resilience</strong> 🌿<br></p><p>Nature is constantly changing and evolving. Trees withstand storms, rivers carve through rocks, and animals adapt to new environments. Similarly, life challenges us, and, like nature, we must be flexible and resilient in order to overcome obstacles.</p><p><strong>Patience &amp; Growth</strong> 🌱</p><p>A seed does not become a tree overnight. Growth takes time, whether in nature or in our personal and professional lives. Success, wisdom, and strength develop through persistence, effort, and patience.</p><p><strong>Balance &amp; Harmony</strong> 🌎</p><p>Nature maintains a delicate balance throughout the day and night, across the seasons, and within ecosystems. It teaches us the importance of balance in our own lives between work and rest, giving and receiving, and action and reflection.</p><p><br></p><p style="text-align: center;"><em>“Look deep into nature, and then you will understand everything better.” <strong>– Albert Einstein</strong></em></p>
        </ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the resize operation of the Rich Text Editor control. To resize the Rich Text Editor, select and resize the editor using its handle (grip) at the bottom right corner of the content panel.</p>
</div>

<div id="description">
   <p>Users can create resizable Rich Text Editor by setting the enableResize property to true, which is used to change the size of the Rich Text Editor dynamically.</p>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, inject the specific module using <code>Toolbar, Link, Image, Resize, HtmlEditor, PasteCleanup</code>.</p>
</div>
</div>
</template>
<style scoped>
    #resize .e-richtexteditor {
        max-width: 880px;
        min-width: 250px;
        min-height: 250px;
        max-height: 400px;
    }
    .control-section #resize .e-popup.e-popup-open.e-dialog {
        height: 387px !important;
    }
</style>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Resize, HtmlEditor, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat } from "@syncfusion/ej2-vue-richtexteditor";

export default {
     components: {
      'ejs-richtexteditor': RichTextEditorComponent
     },
     data: function() {
        return {
            height: 500
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, Resize, HtmlEditor, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat]
    }
}
</script>
