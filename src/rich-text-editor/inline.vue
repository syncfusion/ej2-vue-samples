<template>
<div>
<div class="col-lg-8 control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteInstance" :toolbarSettings="toolbarSettings" :fontFamily="fontFamily" :format="format" :inlineMode="inlineMode"><p>The sample is configured with inline mode of editor. Initially, the editor is rendered without a <a href="https://ej2.syncfusion.com/home/" target='_blank'>toolbar</a>. The toolbar becomes visible only when the content is selected.</p></ejs-richtexteditor>
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
    <p>The rich text editor provides an option to display toolbar on demand using mode property. Set mode as inline to enable
        inline editor. The toolbar becomes visible only when the content is selected</p>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style>
.e-richtexteditor.e-rte-inline  .e-rte-content, .e-richtexteditor.e-rte-inline .e-source-content {
    background: #fff;
    color: #333;
}
</style>

<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, ToolbarType } from "@syncfusion/ej2-vue-richtexteditor";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(RichTextEditorPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline',
                'Formats', '-', 'Alignments', 'OrderedList', 'UnorderedList',
                'CreateLink']
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
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
});
</script>