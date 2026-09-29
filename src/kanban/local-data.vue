	<template>
  <div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      </div>
<div id="action-description">
    <p>
        This sample demonstrates how to bind local data to the Kanban component, enabling tasks to be visualized, organized, and managed across different workflow stages.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates local data binding in the Kanban component using the
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/data-binding#local-data" target="_blank">dataSource</a>
        property. The board is populated with a collection of task data, where each item is mapped to a workflow stage using the column <code>keyField</code>.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/data-binding#local-data" target="_blank">local data</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
</div>

</div>
</template>
<script>
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      }
    };
  },
  provide: {
    kanban: []
  }
}
</script>