<template>
  <div>
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <div class="kanban-section">
          <ejs-kanban ref="kanbanInstance" id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings" :dialogSettings="dialogSettings">
            <e-columns>
              <e-column headerText="To Do" keyField="Open"></e-column>
              <e-column headerText="In Progress" keyField="InProgress"></e-column>
              <e-column headerText="Testing" keyField="Testing"></e-column>
              <e-column headerText="Done" keyField="Close"></e-column>
            </e-columns>
          </ejs-kanban>
        </div>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <table id="property" title="Properties">
        <tr>
          <td>
            <ejs-button id="addNew" class="e-btn e-dialog-add" v-on:click="addClick">Add New Card</ejs-button>
          </td>
        </tr>
      </table>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates dialog editing capabilities in the Kanban component, enabling users to efficiently manage cards through a customizable dialog interface and perform common data management operations within the board.
      </p>
      </div>
      <div id="description">
      <p>
          This sample demonstrates dialog-based CRUD operations in the Kanban component. The board is populated using the
          <a href="https://ej2.syncfusion.com/vue/documentation/kanban/data-binding" target="_blank">kanbanData</a>
          collection, where tasks are organized into
          <a href="https://ej2.syncfusion.com/vue/documentation/kanban/columns" target="_blank">columns</a>
          based on their <code>Status</code> field.
      </p>
      <p>
          New cards can be created using the
          <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#opendialog" target="_blank">openDialog</a>
          method. Existing cards can be viewed, edited, or deleted through a customized dialog interface. The dialog is rendered using the
          <a href="https://ej2.syncfusion.com/vue/documentation/kanban/dialog#dialog-template" target="_blank">dialogSettings.template</a>
          property, while the
          <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#dialogopen" target="_blank">dialogOpen</a>
          event is used to initialize and configure the dialog input controls.
      </p>
      <p>
          More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
          <a href="https://ej2.syncfusion.com/vue/documentation/kanban/dialog" target="_blank"> dialog </a> documentation section.
      </p>
        <p>
            Looking for the full Vue Kanban component overview, features, pricing and documentation?
            Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
        </p>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { extend, isNullOrUndefined, closest } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { kanbanData } from "./datasource";
import ContentTemplate from "./dialog-addedit-content.vue";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
      dialogSettings: {
        template: function() {
          return { template: createApp({}).component('contentTemplate', ContentTemplate) };
        }
      }
    };
  },
  provide: {
    kanban: []
  },
  methods: {
    addClick: function() {
      const cardIds = this.$refs.kanbanInstance.ej2Instances.kanbanData.map(obj => parseInt(obj.Id.replace("Task ", ""), 10));
      const cardCount = Math.max.apply(Math, cardIds) + 1;
      const cardDetails = { Id: "Task " + cardCount, Status: "Open", Priority: "Normal", Assignee: "Andrew Fuller", Estimate: 0, Tags: "", Summary: "" };
      this.$refs.kanbanInstance.ej2Instances.openDialog('Add', cardDetails);
    }
  }
};
</script>