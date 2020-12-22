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
        This sample demonstrates the toggle column feature of Kanban. Each column of Kanban can be collapsible, and the
        testing
        column is collapsed on page load itself.
    </p>
</div>
<div id="description">
    <p>
        The Kanban component allows you to expand or collapse its columns to save space. The remaining columns extend its
        width to occupy the hided column space.
        This feature can be achieved by the following properties:
    </p>
    <ul>
        <li><code>allowToggle:</code> Enables the expand/collapse behavior in Kanban.</li>
        <li><code>isExpanded:</code> The property determines whether the column can be collapsed on the page load
            itself.</li>
    </ul>
</div>

</div>
</template>

<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { kanbanData } from "./datasource";

Vue.use(KanbanPlugin);

export default Vue.extend({
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
});
</script>