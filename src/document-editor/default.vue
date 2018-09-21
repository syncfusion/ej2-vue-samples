<template>
<div class="control-section">
  
    <!-- sample level element  -->
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        Click the button to view the sample
    </div>    
    <div class="col-lg-12 col-sm-12 col-md-12 center">
        <a class="e-btn" id="newTab" target="_blank" v-on:click="newTabClick">Open in new tab</a>
    </div> 
    <div id="action-description">
    <p>This sample demonstrates how to create, edit, and print Word documents (DOCX) online using document editor without any server-side dependencies.</p>
</div>
<div id="description">
    <p>In this example, you can create and edit Word documents online much faster and easier using intuitive UI options of the document editor. All independent features of the document editor component are defined as separate modules to help build a lightweight Word editor with the features you require.
    </p>
    <p style="display: block">Features of document editor:</p>
    <ul>
        <li>Create and edit: Opens and saves documents in native "Syncfusion Document Text (*.sfdt)" file format without any server-side dependencies. This helps build a purely client-side Word editor application.</li>
        <li>Supported elements: Document elements like text, images, hyperlinks, tables, bookmarks, page numbers, tables of contents, headers, and footers.
        </li>
        <li>Formatting: Text levels, paragraph levels, bullets and numbering, table levels, page settings, and styles.</li>
        <li>Editing operations: Undo, redo, cut, copy, and paste.</li>
        <li>Find and replace text within the document.</li>
        <li>Interactions through touch, mouse, and keyboard.</li>
    </ul>
    <p style="display: block"> More information about the document editor features can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/document-editor">documentation section.</a>
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);

export default Vue.extend({
  methods: {
    newTabClick: function() {
      document
        .getElementById("newTab")
        .setAttribute(
          "href",
          location.href.split("#")[0] +
            "samples/document-editor/default/index.html#fabric"
        );
    }
  }
});
</script>
<style>
  /* sample-level styles */

 .center-align {
    text-align: center;
    padding: 20px;
}

.title {
    text-align: center;
    font-size: 20px;
    padding: 15px;
}
.title.default{
	padding: 25px 15px 15px;
}

#hamburger.default{
	padding: 9px 15px 0px;
}

#wrapper .column {
    display: inline-block;
    padding: 10px;
}

.sub-title {
    text-align: center;
    font-size: 16px;
    padding: 10px;
}

.center {
    text-align: center;
    display: none;
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
}

.sb-content-tab .center {
    display: block;
}

.sb-content-tab #wrapper {
    display: none;
}



#wrapper #close:before {
    content: "\e945";
}


.title-header {
    text-align: center;
    font-size: 18px;
    padding: 15px;
}
/* end of styles */
</style>