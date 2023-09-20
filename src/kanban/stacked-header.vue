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
        This sample demonstrates the Kanban component with the stacked header feature. In this sample, the Kanban is
        showcased
        with two headers aligned in a stacked manner.
    </p>
</div>
<div id="description">
    <p>
        The Kanban provides an option to add an additional header along with a column header in stacked manner. This
        header
        groups the logically related columns. This can be achieved by mapping <code>text</code> and
        <code>keyFields</code> attribute of the <code>stackedHeaders</code> property.
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