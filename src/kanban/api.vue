<template>
  <div class="kanban-vue-sample">
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <ejs-kanban ref="KanbanObj" id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
        <ejs-dialog ref="dialogObj" :buttons="dlgButtons" header="Validation" showCloseIcon="true"
         width="350px" isModal="true" :visible="visible"></ejs-dialog>
      </div>
    </div>
    <div class="col-lg-3 property-section property-customization">
      <p class="property-panel-header header-customization">Add Colum</p>
      <div class="property-panel-content">
        <form id="addForm">
          <table>
            <tr>
              <td>
                <ejs-textbox ref="header" id="text" class="e-input" type="text" placeholder="Text Field"></ejs-textbox>
              </td>
            </tr>
            <tr>
              <td>
                <ejs-dropdownlist id="key" formControlName="key" ref="Dropdown" :dataSource="statusData" placeholder="Key Field"></ejs-dropdownlist>
              </td>
            </tr>
            <tr>
              <td>
                <ejs-numerictextbox ref="colIndex" id="index" formControlName="index" format="###.##"
                  :min="defaultValue":value="defaultValue" placeholder="Index"></ejs-numerictextbox>
              </td>
            </tr>
            <tr>
              <td class="e-check">
                <ejs-button id="add" class="e-btn" v-on:click.native="onAdd">Add</ejs-button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <p class="property-panel-header">Delete Column</p>
      <div class="property-panel-content">
        <form id="deleteForm">
          <table>
            <tbody>
              <tr>
                <td>
                  <ejs-numerictextbox ref="columnIndex" id="deteteIndex" formControlName="deteteIndex" format="###.##" 
                    :min="defaultValue" :value="defaultValue" placeholder="Index"></ejs-numerictextbox>
                </td>
              </tr>
              <tr>
                <td class="e-check">
                  <ejs-button id="delete" class="e-btn" v-on:click.native="onDelete">Delete</ejs-button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the important APIs required to manipulate the
        Kanban component. Provides necessary details in the property panel to
        add and remove the columns dynamically.
      </p>
    </div>
    <div id="description">
      <p>The demo explains how to add or remove columns programmatically.</p>
      <ul>
        <li>
          <code>addColumn:</code> The public method used to add a column to the
          Kanban board dynamically.
        </li>
        <li>
          <code>deleteColumn:</code> The public method used to remove the
          existing column from the Kanban board based on an index.
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.kanban-vue-sample .property-panel-content td {
  padding-top: 10px;
}

.kanban-vue-sample .property-panel-header {
  padding-bottom: 0px;
}
</style>
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import {
  FormValidator,
  TextBoxPlugin,
  NumericTextBoxPlugin,
} from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { kanbanData } from "./datasource";

Vue.use(KanbanPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);
Vue.use(DialogPlugin);

export default Vue.extend({
  data: function () {
    return {
      kanbanData: extend([], kanbanData, null, true),
      defaultValue: 0,
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      statusData: [
        { text: "Testing" },
        { text: "Review" },
        { text: "Validate" },
      ],
      fields: { text: "Status", value: "Status" },
      visible: false,
      dlgButtons: [
        {
          click: this.dlgBtnClick,
          buttonModel: { isPrimary: "true", content: "OK" },
        },
      ],
    };
  },
  provide: {
    kanban: [],
  },
  mounted: function () {
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.header = this.$refs.header.ej2Instances;
    this.dropObj = this.$refs.Dropdown.ej2Instances;
    this.addIndex = this.$refs.colIndex.ej2Instances;
    this.deleteIndex = this.$refs.columnIndex.ej2Instances;
    this.dialogObj = this.$refs.dialogObj.ej2Instances;
    this.formObject = new FormValidator("#addForm");
    this.formObject1 = new FormValidator("#deleteForm");
    document.getElementById("addForm").addEventListener("submit", (e) => e.preventDefault());
    document.getElementById("deleteForm").addEventListener("submit", (e) => e.preventDefault());
    this.addIndex.max = this.kanbanObj.columns.length;
    this.deleteIndex.max = this.kanbanObj.columns.length - 1;
  },
  methods: {
    onAdd: function () {
      let text = this.header.value;
      let key = this.dropObj.text;
      let index = this.addIndex.value;
      if (this.kanbanObj.columns.length >= index && key && key.length > 0 && text && text.length > 0 && index !== null) {
        this.kanbanObj.addColumn({ keyField: key, headerText: text, showItemCount: true }, index);
        this.addIndex.max = this.kanbanObj.columns.length;
        this.deleteIndex.max = this.kanbanObj.columns.length - 1;
        this.formObject.element.reset();
        this.addIndex.value = null;
      } else if (!(text && text.length > 0)) {
        this.dialogObj.content = "Enter Column Header Text";
        this.dialogObj.show();
      } else if (!(key && key.length > 0)) {
        this.dialogObj.content = "Enter Column Key Field";
        this.dialogObj.show();
      } else if (!index) {
        this.dialogObj.content = "Enter Column Index";
        this.dialogObj.show();
      }
    },
    onDelete: function () {
      let index = this.deleteIndex.value;
      if (this.kanbanObj.columns.length > 1) {
        if (this.kanbanObj.columns.length >= index + 1 && index !== null) {
          this.kanbanObj.deleteColumn(index);
          this.addIndex.max = this.kanbanObj.columns.length;
          this.deleteIndex.max = this.kanbanObj.columns.length - 1;
          this.formObject1.element.reset();
          this.deleteIndex.value = null;
        } else {
          this.dialogObj.content = "Enter Column Index";
          this.dialogObj.show();
        }
      } else {
        this.dialogObj.content =
          "Atleast one column must be displayed in kanban";
        this.dialogObj.show();
      }
    },
    dlgBtnClick: function () {
      this.dialogObj.hide();
    },
  },
});
</script>