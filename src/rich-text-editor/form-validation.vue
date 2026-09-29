<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
            <div class="form-content">
                <div class="editor-wrapper">
                    <ejs-richtexteditor 
                        ref="rteInstance"
                        :toolbarSettings="toolbarSettings"
                        :quickToolbarSettings="quickToolbarSettings"
                        :change="onEditorChange"
                        :showCharCount="showCharCount"
                        :maxLength="maxLength"
                        placeholder="Type something">
                    </ejs-richtexteditor>
                </div>
                
                <div v-if="validationMessage" class="validation-message">
                    {{ validationMessage }}
                </div>
                
                <div class="button-container">
                    <ejs-button id="submit-btn" v-on:click="onSubmit" cssClass="e-outline">
                        Submit
                    </ejs-button>
                    <ejs-button id="reset-btn" v-on:click="onReset" cssClass="e-outline">
                        Reset
                    </ejs-button>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates form validation with the Rich Text Editor. The editor validates that the content has at least 20 characters before allowing form submission.</p>
</div>

<div id="description">
    <p>The Rich Text Editor component with form validation features:</p>
    <ul>
        <li><code>getText()</code> - Retrieves the plain text content from the editor.</li>
        <li>Character counter displays current and maximum character limit.</li>
        <li>Validation triggers on form submission, checking minimum content length.</li>
        <li>Reset button clears both the editor content and validation messages.</li>
    </ul>
    <p><b>Injecting Module</b></p>
    <p>The above features built as modules have to be included in your application. For example, to use image and link, we need to inject <code>Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio, ClipBoardCleanup, AutoFormat</code> into the <code>provide</code> section.</p>
</div>

</div>
</template>

<script>
import {
  RichTextEditorComponent,
  Toolbar,
  Count,
  Link,
  Image,
  QuickToolbar,
  HtmlEditor,
  Table,
  Video,
  Audio,
  PasteCleanup,
  ClipBoardCleanup,
  AutoFormat
} from "@syncfusion/ej2-vue-richtexteditor";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
    'ejs-button': ButtonComponent
  },
  name: "FormValidation",
  data: function() {
    return {
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', '|', 'BlockQuote', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', 'SourceCode', '|', 'Undo', 'Redo']
      },
      quickToolbarSettings: {
        image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'],
        link: ['OpenLink', 'EditLink', 'RemoveLink'],
        text: ['Cut', 'Copy', 'Paste']
      },
      showCharCount: true,
      validationMessage: '',
      currentCharCount: 0,
      maxLength: 100,
      minCharacters: 20
    };
  },
  methods: {
    onEditorChange: function() {
      const editor = this.$refs.rteInstance.ej2Instances;
      const plainText = editor.getText();
      this.currentCharCount = plainText.length;
    },
    onSubmit: function() {
      const editor = this.$refs.rteInstance.ej2Instances;
      const plainText = editor.getText();
      
      if (plainText.length < this.minCharacters) {
        this.validationMessage = 'Please enter at least 20 characters';
      } else {
        this.validationMessage = '';
        alert('Form submitted successfully');
      }
    },
    onReset: function() {
      const editor = this.$refs.rteInstance.ej2Instances;
      editor.value = '';
      this.currentCharCount = 0;
      this.validationMessage = '';
    }
  },
  provide: {
    richtexteditor: [
      Toolbar,
      Count,
      Link,
      Image,
      QuickToolbar,
      HtmlEditor,
      Table,
      Video,
      Audio,
      PasteCleanup,
      ClipBoardCleanup,
      AutoFormat
    ]
  }
}
</script>

<style scoped>
.form-content {
  padding: 25px;
  max-width: 750px;
  margin: 0 auto;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.editor-wrapper {
  position: relative;
  margin-bottom: 15px;
}

.validation-message {
  color: #d32f2f;
  font-size: 14px;
  margin-bottom: 20px;
  padding: 10px;
}

.button-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.button-container .e-btn {
  min-width: 100px;
  padding: 8px 24px;
}

@media (max-width: 550px) {
  .form-content {
    padding: 10px;
  }

  .button-container {
    flex-direction: column;
  }

  .button-container .e-btn {
    width: 100%;
  }
}

.highcontrast .form-content {
  border: 1px solid #fff;
}
</style>
