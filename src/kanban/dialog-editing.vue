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
            <ejs-button id="addNew" class="e-btn e-dialog-add" v-on:click.native="addClick">Add New Card</ejs-button>
          </td>
        </tr>
      </table>
    </div>
    <div id="action-description">
      <p>
        This sample showcases the CRUD (Create, Read, Update, and Delete) operations of the Kanban component. You can add
        a new
        card using the button from the property panel and read, update, or delete a card by opening the card details in
        dialog
        by double-clicking it.
      </p>
    </div>
    <div id="description">
      <p>
        The sample is designed to showcase the CRUD operations of the Kanban board. The Kanban provides the essential
        methods to
        handle the CRUD operation from the application-end.
      </p>
      <ol>
        <li>updateCard</li>
        <li>addCard</li>
        <li>deleteCard</li>
      </ol>
      <p>
        The double click event of the card is used to open the card details in a dialog and read, edit, or delete a
        card.
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { extend, isNullOrUndefined, closest } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "./datasource";
import ContentTemplate from "./dialog-addedit-content.vue";

Vue.use(KanbanPlugin);

export default Vue.extend({
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
      dialogSettings: {
        template: function() {
          return { template: ContentTemplate };
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
});
</script>