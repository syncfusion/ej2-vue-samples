<template>
  <div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban id="kanban" cssClass="kanban-swimlane" keyField="Status" :dataSource="kanbanData"
           :cardSettings="cardSettings" :swimlaneSettings="swimlaneSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
          <template v-slot:swimLaneTemplate="{data}">
          <div class='swimlane-template e-swimlane-template-table' >
              <div class="e-swimlane-row-text"><img :src="image(data)" :alt="data.keyField" />
              <span>{{data.textField}}</span></div>
          </div>
          </template>
        </ejs-kanban>
      </div>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates how to customize the swimlane header of Kanban. In this sample, the swimlane header is
        customized with icons and corresponding to the mapped key field’s text.
    </p>
</div>
<div id="description">
    <p>
        The Kanban provides an option to customize its swimlane header using the <code>swimlaneSettings</code> ->
        <code>template</code> property, which
        accepts the string or HTML element`s ID value, which is used as the template for the swimlane header.
    </p>
    <p>
        In this demo, all the swimlane headers are customized with templating as text and icons.
    </p>
</div>
</div>
</template>
<style>
    .kanban-swimlane .swimlane-template {
        font-size: 15px;
        font-weight: 500;
        padding-left: 4px;
    }

    .kanban-swimlane .swimlane-template img {
        height: 24px;
        width: 24px;
        border-radius: 50%;
    }

    .kanban-swimlane .swimlane-template span {
        padding-left: 10px;
    }
</style>
<script>
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      allowToggle: true,
      swimlaneSettings: {
        keyField: "Assignee",
        template: "swimLaneTemplate"
      },
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      }      
    };
  },
  methods: {
    image: function(data) {
      return 'source/kanban/images/' + data.keyField + '.png';
    }
  },
  provide: {
    kanban: []
  }
};
</script>
