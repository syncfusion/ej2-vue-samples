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
    <p>This sample demonstrates table of contents support in document editor. Many options are available for including table of contents such as hyperlink, page number, right-aligned tabs, and styles. </p>
</div>
<div id="description">
    <p>In this example, you can find table of content options in document editor.</p>
    <ul>
        <li>Include hyperlink: A link with bookmark reference to the content will be included.</li>
        <li>Include page number: The page number of the content will be included.</li>
        <li>Right-aligned tabs: The page number will be right-aligned to the content.</li>
        <li>Heading levels: The range of heading levels to be included in the table can be customized.</li>
        <li>Styles: The style for each level of the table can be customized.</li>
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
            "samples/document-editor/table-of-contents/index.html#fabric"
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