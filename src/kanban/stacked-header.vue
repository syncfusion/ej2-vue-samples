<template>
<div>
<div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-kanban id="kanban" cssClass="kanban-overview" keyField="Status" :dataSource="kanbanData"
          :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="Open" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="In Review" keyField="Review"></e-column>
            <e-column headerText="Completed" keyField="Close"></e-column>
          </e-columns>
          <e-stackedHeaders>
                <e-stackedHeader text= 'To Do' keyFields= 'Open'></e-stackedHeader>
                <e-stackedHeader text= 'Development Phase' keyFields= 'InProgress, Review'></e-stackedHeader>
                <e-stackedHeader text= 'Done' keyFields= 'Close'></e-stackedHeader>
            </e-stackedHeaders>
        </ejs-kanban>
      </div>
      </div>
    <div id="action-description">
    <p>
        This sample demonstrates the stacked header functionality of the Kanban component, enabling related workflow columns to be grouped under shared headers for improved organization and readability.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the stacked header functionality of the Kanban component using the
        <code>stackedHeaders</code> property. Stacked headers provide an additional header row that groups related columns under a common category, making workflow stages easier to organize and understand.
    </p>
    <p>
        In this sample, individual status columns are grouped into broader workflow phases by configuring the
        <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/stackedheadersmodel#text" target="_blank">text</a>
        and
        <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/stackedheadersmodel#keyfields" target="_blank">keyFields</a>
        properties of the <code>stackedHeaders</code> collection.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/columns#stacked-headers" target="_blank">stacked header</a> documentation section.
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
import { KanbanComponent, ColumnDirective, ColumnsDirective, StackedHeadersDirective, StackedHeaderDirective } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'e-stackedHeaders': StackedHeadersDirective,
    'e-stackedHeader': StackedHeaderDirective
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