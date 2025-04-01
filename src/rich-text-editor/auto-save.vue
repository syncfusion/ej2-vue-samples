<template>
<div>
<div class="col-lg-8 control-section">
    <div class="control-wrapper">
        <div class="sample-container">
            <div class="default-section">
        <ejs-richtexteditor ref="saveObj" :toolbarSettings="toolbarSettings" enablePersistence=true saveInterval=5000 placeholder="Start to type a content to save" :change="updateStatus">
          <h2>Welcome to the Rich Text Editor Demo!📝</h2><p style="text-align: start;">Experience the power of modern content editing with advanced formatting, media embedding, and many other features. You can explore this demo for yourself.</p><h5>Explore the Possibilities! 🚀</h5><ul><li><b>Highly customizable</b> -&nbsp;You can configure the toolbar, enable/disable features, and fine-tune the editing experience to match your needs.</li><li><b>Seamless content pasting</b> -&nbsp;Copy and paste from Microsoft Word, Outlook, or other editors or sources while preserving formatting, styles, and structure.</li><li><b>Import Word documents</b> -&nbsp;Convert <b>DOCX</b><b> files</b> into editable HTML content inside the editor using the Import from Word feature.</li><li><b>One-click Export</b> -&nbsp;Save your document as <b>PDF</b> 📄 or <b>Word (DOCX)</b> 📝 with just a single click.</li><li><b>@Mentions</b> -&nbsp;Type&nbsp;<span class="e-mention-chip"><a href="mailto:albert@gmail.com" title="albert@gmail.com">@Albert</a></span> to see available suggestions and tag users in your content.</li><li><b>Image Management</b> -&nbsp;Use the File Manager to browse, upload, and manage images within the editor.</li></ul><p><br/></p><h5>Powerful Features!</h5><p>A quick overview of the essential features of the Rich Text Editor.<br/></p><table class="e-rte-table" style="width: 61.0405%; min-width: 0px; height: 82px;"><thead style="height: 31.7073%;"><tr style="height: 31.7073%;"><th class="" style="width: 29.9807%;">Feature<br/></th><th class="" style="width: 70.0193%;">Description<br/></th></tr></thead><tbody><tr style="height: 34.1463%;"><td class="" style="width: 29.981%;">Text Formatting<br/></td><td style="width: 70.0193%;" class="">Bold, Italic, Underline, Strikethrough, and more.<br/></td></tr><tr style="height: 34.1463%;"><td style="width: 29.9807%;" class="">Lists &amp; Indentation<br/></td><td style="width: 70.019%;" class="">Ordered, unordered, nested lists.<br/></td></tr><tr><td style="width: 29.9807%;">Tables<br/></td><td style="width: 70.019%;" class="">Insert and edit tables with styling.<br/></td></tr><tr><td style="width: 29.9807%;">Media Embedding<br/></td><td style="width: 70.019%;" class="">Images, videos, and iframes.<br/></td></tr><tr><td style="width: 29.9807%;">Mentions<br/></td><td style="width: 70.019%;" class="">Tag users and add comments<br/></td></tr></tbody></table><p><br/></p><h5>Effortless Image Handling!</h5><p>Insert, resize, align, and manage images seamlessly within the editor.<br/></p><p style="text-align: center;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="400" height="200" style="" class="e-rte-image e-imgcenter" /></p><p><br/></p><p style="text-align: center;"><b>"Great writing begins with a great editor."</b><b> ✍️</b> <br/></p>
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
            <ejs-switch id="checked" :change="onChange" :checked="true"></ejs-switch>
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
<style scoped>
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

    .tailwind .e-icons.e-icon-refresh::before,
    .tailwind-dark .e-icons.e-icon-refresh::before,
    .tailwind3 .e-icons.e-icon-refresh::before,
    .tailwind3-dark .e-icons.e-icon-refresh::before {
        content: "\e711";
    }

    .tailwind .e-icons.e-icon-tick::before,
    .tailwind-dark .e-icons.e-icon-tick::before,
    .tailwind3 .e-icons.e-icon-tick::before,
    .tailwind3-dark .e-icons.e-icon-tick::before {
        content: "\e75d";
    }

    .bootstrap5 .e-icons.e-icon-refresh::before,
    .bootstrap5-dark .e-icons.e-icon-refresh::before,
    .bootstrap5\.3 .e-icons.e-icon-refresh::before,
    .bootstrap5\.3-dark .e-icons.e-icon-refresh::before,
    .fluent .e-icons.e-icon-refresh::before,
    .fluent-dark .e-icons.e-icon-refresh::before,
    .fluent2 .e-icons.e-icon-refresh::before,
    .fluent2-dark .e-icons.e-icon-refresh::before,
    .material3 .e-icons.e-icon-refresh::before,
    .material3-dark .e-icons.e-icon-refresh::before  {        
        content: "\e706";
    }

    .bootstrap5 .e-icons.e-icon-tick::before,
    .bootstrap5-dark .e-icons.e-icon-tick::before,
    .bootstrap5\.3 .e-icons.e-icon-tick::before,
    .bootstrap5\.3-dark .e-icons.e-icon-tick::before,
    .fluent .e-icons.e-icon-tick::before,
    .fluent-dark .e-icons.e-icon-tick::before,
    .fluent2 .e-icons.e-icon-tick::before,
    .fluent2-dark .e-icons.e-icon-tick::before,
    .material3 .e-icons.e-icon-tick::before,
    .material3-dark .e-icons.e-icon-tick::before {        content: "\e774";
    }

    .status-text {
        font-size: 14px;
        display: inline-block;
    }
</style>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio } from "@syncfusion/ej2-vue-richtexteditor";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
export default {
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
    'ejs-switch': SwitchComponent
  },
  data: function () {
    return {
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'Blockquote',
          'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
      },
      Saving: false,
      Saved: false
    };
  },
  methods: {
    updateStatus: function () {
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
        proxy.$refs.saveObj.ej2Instances.saveInterval = 5000;
      } else {
        proxy.$refs.saveObj.ej2Instances.saveInterval = 0;
        setTimeout(() => {
          this.Saving = false;
          this.Saved = false;
        }, 500);
      }
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio]
  }
}
</script>