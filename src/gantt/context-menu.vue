<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt ref="gantt" id="GanttContainer" :dataSource="data" :dateFormat="dateFormat" :taskFields="taskFields"
          :editSettings="editSettings" :toolbar="toolbar" :allowSelection="true" :gridLines="gridLines" :height="height"
          :rowHeight="46" :taskbarHeight="25" :treeColumnIndex="1" :resourceFields="resourceFields"
          :resources="resources" :highlightWeekends="true" :enableContextMenu="true" :allowSorting="true"
          :allowResizing="true" :contextMenuItems="contextMenuItems" :contextMenuOpen="contextMenuOpen"
          :contextMenuClick="contextMenuClick" :timelineSettings="timelineSettings" :columns="columns"
          :eventMarkers="eventMarkers" :labelSettings="labelSettings" :editDialogFields="editDialogFields"
          :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"
          :splitterSettings="splitterSettings" :allowUnscheduledTasks="true"></ejs-gantt>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the various phases involved in constructing a residential house, from testing
        the soil to handing over the fully constructed property to the owner. This also demonstrates the usage of
        default and custom context menu in Gantt component.
      </p>
    </div>

    <div id="description">
      <p>
        The Gantt Chart provides a context menu that offers quick access to commonly used operations. Context menu support can be enabled by setting the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#contextmenuitems">contextMenuItems</a> property to <code>true</code>.
      </p>
      <p>Built-in context menu items are available for operations such as task editing, row addition and deletion, sorting, indentation, dependency management, and column auto-fitting. The displayed menu items are automatically adjusted based on the selected target element.</p>
      <p>Default items:</p>
      <ul>
        <li><code>AutoFitAll</code> - Auto fit all columns.</li>
        <li><code>AutoFit</code> - Auto fit the current column.</li>
        <li><code>TaskInformation</code> - Edit the current record.</li>
        <li><code>Indent</code> - Indent the selected record to one level</li>
        <li><code>Outdent</code> - Outdent the selected record to one level</li>
        <li><code>DeleteTask</code> - Delete the current record.</li>
        <li><code>Save</code> - Save the edited record.</li>
        <li><code>Cancel</code> - Cancel the edited state.</li>
        <li><code>SortAscending </code> - Sort the current column in ascending order.</li>
        <li><code>SortDescending </code> - Sort the current column in descending order.</li>
        <li><code>DeleteDependency </code> - Delete the dependency of the current record.</li>
        <li><code>Convert </code> - Convert the normal task in to milestone task and vice versa.</li>
        <li><code>Add</code>
          <ul>
            <li><code>Above</code> - Add a new row above the selected row </li>
            <li><code>Below</code> - Add a new row below the selected row</li>
            <li><code>Child</code> - Add a new row as child to the selected row</li>
            <li><code>Milestone</code> - Add a milestone task below to selected row</li>
          </ul>
        </li>
      </ul>
      <p>This sample also demonstrates how to add custom context menu items using the <code>contextMenuItems</code> property.</p>
      <ul>
        <li><code>Expand the Row</code> - Used to expand the parent row when it is in a collapsed state.</li>
        <li><code>Collapse the Row</code> - Used to collapse the parent row when it is in an expanded state.</li>
      </ul>
      <p>When <code>allowUnscheduledTasks</code> is enabled, tasks without StartDate, EndDate, or Duration are rendered without a taskbar. Enabling the <code>allowTaskbarDraw</code> property allows these tasks to be scheduled by drawing a taskbar directly in the chart area, which automatically updates the task's scheduling values</p>
      <p style="font-weight: 500">Injecting Module:</p>
      <p>
          Gantt component features are segregated into individual feature-wise modules. To use selection, sort, context menu,
          edit, toolbar, markers and filter features, inject the <code>Selection</code>, <code>Sort</code>, <code>ColumnMenu</code>,
          <code>Edit</code>, <code>Toolbar</code>, <code>DayMarkers</code> and <code>Filter</code> modules using the
          <code>provide</code> section.
      </p>
      <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/context-menu">context menu</a>  documentation section.</p>
      <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Edit, Selection, Toolbar, DayMarkers, ContextMenu, Sort, Resize } from "@syncfusion/ej2-vue-gantt";
import { contextMenuData, editingResources } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function () {
    return {
      data: contextMenuData,
      contextMenuItems: [
        "AutoFitAll",
        "AutoFit",
        "TaskInformation",
        "DeleteTask",
        "Save",
        "Cancel",
        "SortAscending",
        "SortDescending",
        "Add",
        "DeleteDependency",
        "Convert",
        "Indent",
        "Outdent",
        { text: "Collapse the Row", target: ".e-content", id: "collapserow" },
        { text: "Expand the Row", target: ".e-content", id: "expandrow" }
      ],
      dateFormat: "MMM dd, y",
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        parentID: 'ParentId',
        notes: "info",
        resourceInfo: "resources"
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true,
        allowTaskbarDraw: true
      },
      toolbar: [
        "Add",
        "Edit",
        "Update",
        "Delete",
        "Cancel",
        "ExpandAll",
        "CollapseAll"
      ],
      gridLines: "Both",
      height: "650px",
      resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
      },
      resources: editingResources,
      timelineSettings: {
        topTier: {
          unit: "Week",
          format: "MMM dd, y"
        },
        bottomTier: {
          unit: "Day"
        }
      },
      columns: [
        { field: "TaskID", width: 80, visible: false },
        {
          field: "TaskName",
          headerText: "Job Name",
          width: "250",
          clipMode: "EllipsisWithTooltip"
        },
        { field: "StartDate" },
        { field: "EndDate" },
        { field: "Duration" },
        { field: "Progress" },
        { field: "Predecessor" }
      ],
      labelSettings: {
        leftLabel: "TaskName",
        rightLabel: "resources"
      },
      editDialogFields: [
        { type: "General", headerText: "General" },
        { type: "Dependency" },
        { type: "Resources" },
        { type: "Notes" }
      ],
      projectStartDate: new Date('03/25/2025'),
      projectEndDate: new Date('09/08/2025'),
      splitterSettings: {
        columnIndex: 3
      }
    };
  },
  provide: {
    gantt: [Edit, Selection, Toolbar, DayMarkers, ContextMenu, Sort, Resize]
  },
  methods: {
    contextMenuOpen: function (args) {
      let record = args.rowData;
      if (args.type !== 'Header' && record) {
        if (!record.hasChildRecords) {
          args.hideItems.push('Collapse the Row');
          args.hideItems.push('Expand the Row');
        } else {
          if (record.expanded) {
            args.hideItems.push('Expand the Row');
          } else {
            args.hideItems.push('Collapse the Row');
          }
        }
      }
    },
    contextMenuClick: function (args) {
      let record = args.rowData;
      if (args.item.id === 'collapserow') {
        this.$refs.gantt.ej2Instances.collapseByID(Number(record.ganttProperties.taskId));
      }
      if (args.item.id === 'expandrow') {
        this.$refs.gantt.ej2Instances.expandByID(Number(record.ganttProperties.taskId));
      }
    }
  }
}
</script>
