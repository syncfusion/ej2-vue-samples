<template>
<div>
<div class="col-lg-8 control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor id="rte" ref="rteInstance" :actionBegin="handleFullScreen" :actionComplete="actionCompleteHandler" :toolbarSettings="toolbarSettings"><p>The rich text editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid HTML markup or markdown of the content</p>
            <p><b>Toolbar</b></p>
            <ol>
                <li> <p>Toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operations, HTML view, etc </p></li>
                <li> <p>Toolbar is fully customizable </p></li>
            </ol>                    
            <p><b>Links</b></p>
            <ol>
                <li><p>You can insert a hyperlink with its corresponding dialog </p> </li>
                <li> <p>Attach a hyperlink to the displayed text. </p></li>
                <li><p>Customize the quick toolbar based on the hyperlink </p> </li>
            </ol>
            <p><b>Validation</b></p>
            <ul><li><p>The editor’s content can be validated on form submission by applying validation rules and validation message</p></li></ul>
            <p><b>Locale.</b></p><p></p>
            <ul><li><p>The editor provides an option to localize its static strings to adapt the editor to a local language.</p></li></ul>                    
            <p><b>Image.</b></p><p></p>
            <ol>
                <li><p>Allows you to insert images from an online source as well as the local computer </p> </li>
                <li><p>You can upload an image </p></li>
                <li> <p>Provides an option to customize quick toolbar for an image </p> </li>
            </ol>
            <img alt="Logo" src="./images/RTEImage-Feather.png"></ejs-richtexteditor>
        </div>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div title="Properties" id="property">
        <table title="Properties" id="property">
            <tbody>
                <tr>
                    <td>
                        <div style='width: 150px;'>
                            <ejs-dropdownlist ref="dropdownInstance" :dataSource="data" :change="onChange" index=0 :fields="fields" placeholder="Types" floatLabelType="Auto"></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <ejs-checkbox label='Enable Floating' ref="checkInstance" :change="onFloatChange" id="float" checked="false"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates the different behavior of toolbar support in the rich text editor. Change the toolbar type as multiRow or expand from the property panel to see its appearance . Check or uncheck the floating toolbar in property panel to look on its behavior.</p>
</div>

<div id="description">
    <p><code>Floating</code>: set boolean value to toolbarSettings.enableFloating property to enable or disable the floating toolbar.</p>
    <p> The rich text editor allows you to configure different types of toolbar using <code>toolbarSettings.type</code> property. The types of
        toolbar are: </p>
    <ul>
        <li><code>Expand</code>: The toolbar hides the overflowing items in the next row. Click the expand arrow to view overflowing toolbar items</li>
        <li><code>Multi Row</code>: The toolbar hides the overflowing items in the next row.</li>
    </ul>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar</code> into the <code>provide</code> section.</p>
</div>
</div>
</template>
<style>
/* custom code start */
.sb-header {
  z-index: 100;
}
.property-panel-table div {
  padding-left: 0;
}
.sb-content.e-view.hide-header {
    top: 0 !important;
}
.sb-header.e-view.hide-header {
    display: none;
}
/* custom code end */
</style>
<script>
import Vue from "vue";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import {
  RichTextEditorPlugin,
  Toolbar,
  Link,
  Image,
  ToolbarType,
  HtmlEditor,
  QuickToolbar
} from "@syncfusion/ej2-vue-richtexteditor";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(RichTextEditorPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
  data: function() {
    return {
      data: [{ text: "Expand", value: 1 }, { text: "MultiRow", value: 2 }],
      fields: { text: "text", value: "value" },
      toolbarSettings: {
        type: "Expand",
        enableFloating: true,
        items: [
          "Bold",
          "Italic",
          "Underline",
          "StrikeThrough",
          "FontName",
          "FontSize",
          "FontColor",
          "BackgroundColor",
          "LowerCase",
          "UpperCase",
          "|",
          "Formats",
          "Alignments",
          "OrderedList",
          "UnorderedList",
          "Outdent",
          "Indent",
          "|",
          "CreateLink",
          "Image",
          "|",
          "ClearFormat",
          "Print",
          "SourceCode",
          "FullScreen",
          "|",
          "Undo",
          "Redo"
        ]
      }
    };
  },
  methods: {
    onChange: function(e) {
      switch (this.$refs.dropdownInstance.ej2Instances.value) {
        case 1:
          this.$refs.rteInstance.ej2Instances.toolbarSettings.type = "Expand";
          break;
        case 2:
          this.$refs.rteInstance.ej2Instances.toolbarSettings.type = "MultiRow";
          break;
      }
      this.$refs.rteInstance.ej2Instances.dataBind();
    },
    onFloatChange: function(args) {
      this.$refs.rteInstance.ej2Instances.toolbarSettings.enableFloating =
        args.checked;
      this.$refs.rteInstance.dataBind();
    },
    handleFullScreen: function(e) {
      var sbCntEle = document.querySelector('.sb-content.e-view');
      var sbHdrEle = document.querySelector('.sb-header.e-view');
      var leftBar;
      var transformElement;
      if (Browser.isDevice) {
        leftBar = document.querySelector("#right-sidebar");
        transformElement = document.querySelector(
          ".sample-browser.e-view.e-content-animation"
        );
      } else {
        leftBar = document.querySelector("#left-sidebar");
        transformElement = document.querySelector("#right-pane");
      }
      if (e.targetItem === "Maximize") {
        if (Browser.isDevice && Browser.isIos) {
          addClass([sbCntEle, sbHdrEle], ['hide-header']);
        }
        addClass([leftBar], ["e-close"]);
        removeClass([leftBar], ["e-open"]);
        if (!Browser.isDevice) {
          transformElement.style.marginLeft = "0px";
        }
        transformElement.style.transform = "inherit";
      } else if (e.targetItem === "Minimize") {
        if (Browser.isDevice && Browser.isIos) {
          removeClass([sbCntEle, sbHdrEle], ['hide-header']);
        }
        removeClass([leftBar], ["e-close"]);
        if (!Browser.isDevice) {
          addClass([leftBar], ["e-open"]);
          transformElement.style.marginLeft = leftBar.offsetWidth + "px";
        }
        transformElement.style.transform = "translateX(0px)";
      }
    },
    actionCompleteHandler: function(e) {
        var proxy = this;
        setTimeout(function() {
          proxy.$refs.rteInstance.ej2Instances.toolbarModule.refreshToolbarOverflow();
        }, 400);
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
});
</script>