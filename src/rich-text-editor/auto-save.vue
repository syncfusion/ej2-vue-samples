<template>
<div class="control-section" style="overflow:hidden;">
<div class="col-lg-8 control-section">
    <div class="control-wrapper">
        <div class="sample-container">
            <div class="default-section">
        <ejs-richtexteditor ref="saveObj"  :toolbarSettings="toolbarSettings" enablePersistence=true saveInterval=5000 placeholder="Start to type a content to save":change="updateStatus">
         <p>Type or edit the content to be saved automatically in the editor</p>
          </ejs-richtexteditor>  
         <div id='statusEle' class='current-status'>
                    <div id='saving' v-if="Saving">
                        <div class="e-icons e-icon-refresh"> </div>
                        <p class='status-text'> Saving changes</p>
                    </div>
                    <div id='saved' v-if="Saved">
                        <span class="e-icons e-icon-tick"> </span>
                        <p class='status-text'>Changes saved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-lg-4 property-section">
    <div title="Properties" id="property">
        <div class='toggle-btn'>
            <label for="checked" style="padding: 10px 70px 10px 0"> Auto Save </label>
            <ejs-switch id="checked" :change="onChange":checked="true"></ejs-switch>
        </div>
    </div>
</div>
<div id="action-description">
    <p>Demonstrates how to save the Rich Text Editor’s content automatically with periodic interval. When you type or edit the content, it will be saved automatically by every 5 seconds. </p>
</div>

<div id="description">
    <p>The Rich Text Editor provides options to save its content automatically using the `saveInterval` property. By default, the save interval time has 10 seconds from built-in support, but it can be customizable as per the application needs. The interval
        is calculated based on editing the content and does not considered on idle state.
    </p>
    <p>We have configured save interval as 5 seconds in this example. You can save the content in server also using this `auto save` option.</p>
    <p>When you disable this `Auto Save` option in a sample, the value will be saved on focus-out from the editor.</p>
    <p>Rich Text Editor content will be automatically saved when you focus out the editor.</p>
</div>

</div>
</template>
<style>
.control_wrapper {
    max-width: 500px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}

.control-section {
    overflow: auto;
    padding-bottom: 10px;
    position: relative;
}

    .current-status {
        float: right;
        padding: 11px;
        margin-right: 22px;
        font-size: 12px;
        display: inline-block;
    }
    
    .e-icons.e-icon-refresh::before {
        content: "\e606";
    }
    
    .btn-text {
        display: inline;
        padding: 2px 35px 2px 64px;
    }
    
    .e-icons.e-icon-tick::before {
        content: "\e614";
    }
    
    .status-text {
        padding: 4px;
    }
    
    .e-icon-refresh {
        width: 10px;
        display: inline-block;
        animation: spin 2s linear infinite;
    }
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
   .bootstrap4 .e-icons.e-icon-refresh::before {
        content: "\e710";
    }

    .bootstrap4 .e-icons.e-icon-tick::before {
        content: "\e718";
    }
    
    .status-text {
        font-size: 14px;
        display: inline-block;
    }
</style>
<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
import { CheckBoxPlugin, ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(RichTextEditorPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(SwitchPlugin);
let Saving = undefined;
let Saved = undefined;
export default Vue.extend({
  data: function () {
    return {
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
          'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
      },
      Saving: false,
      Saved: false
    };
  },
  methods: {
    updateStatus: function (e) {
      this.Saving = true;
      this.Saved = false;
      setTimeout(() => {
        this.Saving = false;
        this.Saved = true;
      }, 500);
    },
    onChange: function (e) {
      var proxy = this;
      if (e.checked) {
        proxy.$refs.saveObj.saveInterval = 5000;
      } else {
        proxy.$refs.saveObj.saveInterval = 0;
        setTimeout(() => {
          this.Saving = false;
          this.Saved = false;
        }, 500);
      }
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
  }
});
</script>