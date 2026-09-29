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
        This sample demonstrates swimlane template customization in the Kanban component, enabling workflow items to be organized and presented with personalized swimlane headers for improved task visualization.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates swimlane header customization in the Kanban component using the
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane#template" target="_blank">swimlaneSettings.template</a>
        property. A custom template can be defined using a string template or an HTML element to personalize the appearance of swimlane headers.
    </p>
    <p>
    In this sample, each swimlane header is rendered with resource-specific information, including an avatar image and assignee details, providing a more intuitive and visually engaging way to identify workflow ownership.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane#template" target="_blank">swimlane template</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
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
