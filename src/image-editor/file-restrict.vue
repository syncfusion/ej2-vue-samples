<template>
    <div class="control-section">
      <div style="text-align: center;">
        <div class="e-img-editor-dropdown-container">
        <label>Size AS</label><br />
          <ejs-dropdownbutton id="dropdownbtn" :content="defaultUnit" :items="units" :select="onSelect" :beforeItemRender="beforeItemRender"></ejs-dropdownbutton>
        </div>
        <div class="e-img-editor-numeric-textbox-container">
          <label>Minimum Size</label>
          <br/>
          <ejs-numerictextbox id="minFileSize" :value="minFileSize" :min="minFileSize" :style="{ width: '150px' }" :change="updateMinFileSize"></ejs-numerictextbox>
        </div>
        <div class="e-img-editor-numeric-textbox-container">
          <label>Maximum Size</label>
          <br/>
          <ejs-numerictextbox id="maxFileSize" :value="maxFileSize" :min="minFileSize" :style="{ width: '150px' }" :change="updateMaxFileSize"></ejs-numerictextbox>
        </div>
        <div class="e-img-editor-dropdown-container">
          <label>Allowed Extensions</label><br/>
          <ejs-multiselect id="allowedExtensions" :style="{ width: '225px' }" :dataSource="fileExtensionsList" :fields="fields" mode="CheckBox" showSelectAll="true" :value="allowedExtensions" :change="updateAllowedExtensions"></ejs-multiselect>
        </div>
      </div>
      <div class="e-img-editor-sample">
        <ejs-imageeditor
          :theme="themeValue"
          id="image-editor"
          ref="imgObj"
          :uploadSettings="uploadSettings"
          :created="onCreated"
        ></ejs-imageeditor>
      </div>
      <div id="action-description">
            <p>This sample demonstrates the file restriction feature in the Image Editor component, allowing customization of
        file extensions, minimum and maximum file sizes, and drag-and-drop functionality.</p>
      </div>
      <div id="description">
          <p>
            This sample highlights the enhanced configuration capabilities of the Image Editor component through the
            <b>uploadSettings</b> property. The following features are included:
          </p>
          <ul>
            <li><b>File Extensions</b>: Use a multi-select dropdown with checkboxes to dynamically choose the allowed file
            extensions. Supported values include <code>jpeg</code>, <code>jpg</code>, <code>png</code>,
            <code>svg</code>, and <code>webp</code>.</li>
            <li><b>File Size</b>: Numeric textboxes to set minimum and maximum file sizes dynamically.</li>
            <li><b>Dynamic Updates</b>: Changes made to the numeric textboxes or the dropdown options immediately reflect in the component's <code>uploadSettings</code>.</li>
            <li><b>Upload Settings</b>: Predefined settings include:
                <ul>
                    <li><b>Allowed Extensions</b>: <code>.jpeg</code>, <code>.png</code>, <code>.svg</code>, <code>.webp</code></li>
                    <li><b>Minimum File Size</b>: 1 KB</li>
                    <li><b>Maximum File Size</b>: 100 KB</li>
                </ul>
            </li>
          </ul>
          <p>
            More information about Image Editor can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/image-editor/getting-started/">documentation</a> section.
          </p>
      </div>
    </div>
</template>

<script>
import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from "@syncfusion/ej2-base";

export default {
  name: "FileRestrict",
  components: {
    "ejs-dropdownbutton": DropDownButtonComponent,
    "ejs-imageeditor": ImageEditorComponent,
    "ejs-multiselect": MultiSelectComponent,
    "ejs-numerictextbox": NumericTextBoxComponent,
  },
  data() {
    return {
      theme: 'Bootstrap5',
      defaultUnit: "KB",
      minFileSize: 1,
      maxFileSize: 100,
      allowedExtensions: [".jpeg", ".jpg", ".png", ".svg", ".webp"], // Default extensions
      fileExtensionsList: [
        { Name: "JPEG", Value: ".jpeg" },
        { Name: "JPG", Value: ".jpg" },
        { Name: "PNG", Value: ".png" },
        { Name: "SVG", Value: ".svg" },
	{ Name: "WebP", Value: ".webp" }
      ],
      fields: { text: "Name", value: "Value" },
      uploadSettings: {
        minFileSize: 1,
        maxFileSize: 1.5,
        allowedExtensions: ".jpeg, .jpg, .png, .svg, .webp",
      },
      units: [
        { text: "MB" },
        { text: "KB" },
      ]
    };
  },
  methods: {
    onCreated() {
      this.updateUploadSettings();
    },
    updateMinFileSize(args) {
      if (args && args.value >= 0) {
        this.minFileSize = args.value;
        this.updateUploadSettings();
      }
    },
    updateMaxFileSize(args) {
      if (args && args.value >= this.minFileSize) {
        this.maxFileSize = args.value;
        this.updateUploadSettings();
      }
    },
    updateAllowedExtensions(args) {
        if (args.value.length === 0) {
          this.allowedExtensions = ".jpeg, .jpg, .png, .svg, .webp";
        } else {
          this.allowedExtensions = args.value;
        }
        this.updateUploadSettings();
    },
    updateUploadSettings() {
      this.uploadSettings.minFileSize = this.convertToBytes(this.minFileSize);
      this.uploadSettings.maxFileSize = this.convertToBytes(this.maxFileSize);
      this.uploadSettings.allowedExtensions = this.allowedExtensions.join(", ");
      if (this.$refs.imgObj) {
        let imgEditor = getComponent(document.getElementById('image-editor'), 'image-editor');
        imgEditor.uploadSettings = this.uploadSettings;
        imgEditor.dataBind();
      }
    },
    onSelect(args) {
      this.defaultUnit = args.item.text;
      this.updateUploadSettings();
    },
    beforeItemRender(args) {
      if (args.item.text === this.defaultUnit) {
        args.element.classList.add('e-selected');
      }
    },
    convertToBytes(value) {
      return value * (this.defaultUnit === "MB" ? 1024 * 1024 : 1024);
    }
  },
  provide: {
    multiselect: [CheckBoxSelection],
  },
  computed: {
    themeValue: {
        get: function () {
            return this.theme;
        },
        set: function (theme) {
            this.theme = theme
        }
    }
  }
};
</script>

<style>
.e-img-editor-numeric-textbox-container, 
.e-img-editor-dropdown-container {
    display: inline-block;
    margin-right: 30px;
    text-align: left;
}

.e-img-editor-sample {
    height: 80vh;
    width: 100%;
    margin-top: 18px;
}

.control-wrapper {
	height: 100%;
}

.e-image-editor {
  margin: 0 auto;
}

.e-img-editor-dropdown-container #dropdownbtn {
  font-weight: 400;
}

@media only screen and (max-width: 700px) {
  .e-img-editor-sample {
    height: 75vh;
    width: 100%;
  }
  .e-img-editor-dropdown-container,
  .e-img-editor-numeric-textbox-container {
      display: block;
      margin-right: 0;
      margin-bottom: 20px;
      text-align: center;
  }
}
</style>
