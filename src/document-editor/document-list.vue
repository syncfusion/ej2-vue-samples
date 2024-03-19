<template>
  <div>
    <div class="col-lg-12 control-section documenteditor dialog-components-sample">
      <div>
        <ejs-grid :dataSource="data" v-if="showGrid" ref="gridObj" :commandClick='commandClick'>
          <e-columns>
            <e-column headerText="File Name" :template="'FileNameTemplate'" field="FileName"></e-column>
            <e-column headerText="Author" field="Author"></e-column>
            <e-column headerText='Actions' textAlign='Center' :commands='commands'></e-column>
          </e-columns>
          <template v-slot:FileNameTemplate="{ data }">
            <div class="file-name-container">
              <div class="file-name-content">
                <div class="icon-and-text">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 3C3 1.34315 4.34315 0 6 0H16.7574C17.553 0 18.3161 0.316071 18.8787 0.87868L26.1213 8.12132C26.6839 8.68393 27 9.44699 27 10.2426V27C27 28.6569 25.6569 30 24 30H6C4.34315 30 3 28.6569 3 27V3Z"
                      fill="#4889EF" />
                    <path
                      d="M17.5 11H25V10.5042C25 9.76949 24.7304 9.0603 24.2422 8.51114L19.9463 3.67818C18.9974 2.61074 17.6374 2 16.2092 2H16V9.5C16 10.3284 16.6716 11 17.5 11Z"
                      fill="#D6E5FE" />
                    <path
                      d="M10.3044 12H10.8868H11.104H11.6817L12.6231 16.3922L13.3963 12H15L13.5719 19H12.777H12.5552H11.8943L10.993 15.0093L10.1103 19H9.44945H9.22761H8.42808L7 12H8.60832L9.38188 16.3816L10.3044 12Z"
                      fill="white" />
                    <rect x="7" y="21" width="16" height="2" rx="1" fill="white" />
                    <rect x="7" y="25" width="11" height="2" rx="1" fill="white" />
                  </svg>
                  <div class="file-name-text">{{ data.FileName }}</div>
                </div>
              </div>
            </div>
          </template>
        </ejs-grid>
      </div>

      <ejs-dialog id="componentsDialog documenteditor" v-if="showDialog" ref="dialogObj" :content='contenttemplateVue'
         :open="dialogOpen" :close="dialogClose" :zIndex="1500" width="90%" height="90%">
      </ejs-dialog>
    </div>
    <div id="action-description">
      <p>This demo showcases how to present a list of documents in a grid layout and utilize the Document Editor in Dialog to open and view/edit these documents.</p>
    </div>
  </div>
  <div id="description">
    <p>In this example, you can view the document in either view or edit mode using the Document Editor.</p>
    <p>For more information about the features of the Document Editor, please refer to the
      <a target="_blank" href="https://ej2.syncfusion.com/documentation/document-editor/overview">
        documentation section</a>.
    </p>
  </div>
</template>

<style scoped>
.control-section.documenteditor {
  left: 0px ! important;
  top: 0% ! important;
}

.dlgbtn {
  margin-right: 10px;
}

.control-section.documenteditor {
  height: 100%;
}

.dialog-components-sample {
  overflow-y: auto;
}

#componentsDialog.documenteditor {
   width: 452px !important;
}

.file-name-container {
  display: flex;
  justify-content: left;
}

.file-name-content {
  display: flex;
  align-items: center;
}

.icon-and-text {
  display: flex;
  align-items: left;
}

.file-name-text {
  text-align: center;
  margin-left: 8px;
  margin-top: 5px;
}
</style>

<script>
import { createApp } from 'vue';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import DocumentEditorTemplateVue from "./read-only-and-edit-editor.vue";
import { GridComponent, ColumnDirective, ColumnsDirective, CommandColumn } from "@syncfusion/ej2-vue-grids";
import { gridData } from "./worddata";

var editorExternalTemplate = createApp().component('tab-viewemplate-vue', DocumentEditorTemplateVue);

export default {
  components: {
    'ejs-dialog': DialogComponent,
    'ejs-button': ButtonComponent,
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },

  data: function () {
    return {
      target: '.control-section',
      data: gridData,
      showGrid: true,
      showDialog: false,
      FileName: '',
      isReadOnlyMode: true,
      isModal: true,
      commands: [
        { type: 'View', buttonOption: { cssClass: "e-icons e-eye e-flat" } },
        { type: 'Edit', buttonOption: { cssClass: "e-icons e-edit e-flat" } },
      ],
    }
  },

  provide: {
    grid: [CommandColumn]
  },

  methods: {
    contenttemplateVue: function () {
      return { template: editorExternalTemplate, data: { FileName: this.FileName, isReadOnlyMode: this.isReadOnlyMode, dialogClose: this.dialogClose } }
    },

    commandClick: function (args) {
      const cssClass = args.target.className;

      if (cssClass.includes('e-icons e-eye e-flat')) {
        this.FileName = args.rowData.FileName;
        this.showDialog = true;
        this.isReadOnlyMode = true;
        this.isShowDialogView = this.$refs.dialogObj;
      }
      else if(cssClass.includes('e-icons e-edit e-flat')) {
        this.FileName = args.rowData.FileName;
        this.showDialog = true;
        this.isReadOnlyMode = false;
        this.isShowGridView = this.$refs.gridObj;
      }
    },

    dialogClose: function () {
      this.showDialog = false;
      this.showGrid = true;
    },

    dialogOpen: function () {
      this.showDialog = true;
      this.showGrid = false;
    },
  }
}
</script>