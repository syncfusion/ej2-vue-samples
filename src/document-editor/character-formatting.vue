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
    <p>This sample demonstrates the character formatting options in DocumentEditor such as bold, italic, underline, strikethrough, subscript, superscript, font, font size, font color, and highlight color.
    </p>
</div>
<div id="description">
    <p>In this example, you can find character formatting features in the document editor.
    </p>    
    <ul>
        <li>Bold and Italic.</li>
        <li>Underline.</li>
        <li>Single strike and double strikes.</li>
        <li>Superscript and subscript.</li>
        <li>Font and highlight colors.</li>
        <li>Different fonts and sizes.</li>
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
      newTabClick: function () {
        document
          .getElementById("newTab")
          .setAttribute(
            "href",
            location.href.split("#")[0] +
            "samples/document-editor/character-formatting/index.html#fabric"
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

  .title.default {
    padding: 25px 15px 15px;
  }

  #hamburger.default {
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