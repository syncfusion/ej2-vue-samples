<template>
<div>
<div class="col-lg-8 control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteInstance" :toolbarSettings="toolbarSettings" :fontFamily="fontFamily" :format="format" :inlineMode="inlineMode">
            <h2>Inline Rich Text Editor!</h2><p>Click on this text to edit dynamically. The formatting toolbar will appear only when you select the content.</p><h5>Features:</h5><ul><li><strong>Minimal UI:</strong> The editor is clean and distraction-free.</li><li><strong>Contextual Toolbar:</strong> The toolbar appears only when text is selected.</li><li><strong>Rich Formatting:</strong> Supports bold, italic, underline, lists, links, and more.</li><li><strong>Seamless Editing:</strong> Works like a native text field but with powerful styling options.</li></ul><blockquote><p>Try selecting this text to see the toolbar in action!</p></blockquote>
        </ejs-richtexteditor>
        </div>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div title="Properties" id="property">
        <table title="Properties" id="property">
            <tbody>
                <tr>
                    <td>
                        <div>
                            <ejs-checkbox checked="false" label='Show on Selection' ref="checkInstance" :change="changeCheck" id="select"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the toolbar show on inline mode. Toolbar show while click on the below editable content and it hide on focus out from edit area.</p>
</div>

<div id="description">
    <p>The Rich Text Editor provides an option to display toolbar on demand using mode property. Set mode as inline to enable
        inline editor. The toolbar becomes visible only when the content is selected</p>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style scoped>
.e-richtexteditor.e-rte-inline  .e-rte-content, .e-richtexteditor.e-rte-inline .e-source-content {
    background: #fff;
    color: #333;
}
</style>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat } from "@syncfusion/ej2-vue-richtexteditor";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
      'ejs-richtexteditor': RichTextEditorComponent,
      'ejs-checkbox': CheckBoxComponent
    },
    data: function() {
        return {
            toolbarSettings: {
            items: ['Formats', '|', 'Bold', 'Italic', 'Fontcolor', 'BackgroundColor', '|', 'CreateLink', 'Image', 'CreateTable', '|' , 'Unorderedlist', 'Orderedlist']
        },
        format: {
            width: 'auto'
        },
        fontFamily: {
            width: 'auto'
        },
            inlineMode: {enable: true, onSelection: true}
        };
    },
    methods: {
    changeCheck: function(args) {
      this.$refs.rteInstance.ej2Instances.inlineMode.onSelection = args.checked;
    }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat]
    }
}
</script>