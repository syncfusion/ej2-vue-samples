<template>
<div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open" :allowToggle="allowToggle"></e-column>
            <e-column headerText="In Progress" keyField="InProgress" :allowToggle="allowToggle"></e-column>
            <e-column headerText="Testing" keyField="Testing" :allowToggle="allowToggle" :isExpanded="isExpanded"></e-column>
            <e-column headerText="Done" keyField="Close" :allowToggle="allowToggle"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      </div>
<div id="action-description">
    <p>
        This sample demonstrates the column toggling functionality of the Kanban component, enabling users to expand or collapse columns to optimize board layout and improve workflow visibility.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the column toggling functionality of the Kanban component, which allows columns to be expanded or collapsed to optimize available space and improve board readability. When a column is collapsed, the remaining columns automatically adjust to utilize the available layout space.
    </p>
    <p>
        The following column properties are used to configure this behavior:
    </p>
    <ul>
        <li>
            <code>allowToggle</code>: Enables expand and collapse functionality for a column.
        </li>
        <li>
            <code>isExpanded</code>: Specifies the initial expanded or collapsed state of a column when the board is rendered.
        </li>
    </ul>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/columns#toggle-columns" target="_blank">toggle column</a> documentation section.
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
      allowToggle: true,
      isExpanded: false,
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