<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor :created="onCreate" ref="rteInstance" :value="value"></ejs-richtexteditor>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates how to load content to the editor from an external source using <code>Ajax library</code>. </p>
</div>

<div id="description">
  <p>
    The rich text editor allows you to load content from an external source. The sample content is loaded from “Ajax_content.html” file using AJAX library, and when the event is <code>successful</code> the content is loaded into the editor using <code>value</code> property
  </p>
  <p><b>Injecting Module</b></p>
  <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, QuickToolbar, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import { Ajax } from '@syncfusion/ej2-base';

Vue.use(RichTextEditorPlugin);

export default Vue.extend({
    data: function() {
        return {
           value: '' 
        };
    },
    methods: {
        onCreate: function() {
            var localObj = this
            let ajax = new Ajax('./src/rich-text-editor/ajax-content.html', 'GET', false);
    ajax.send().then((data)  => {
        localObj.value = data;
    });
        }
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, QuickToolbar, HtmlEditor]
    }
});
</script>