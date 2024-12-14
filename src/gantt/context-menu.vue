<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt
          ref="gantt"
          id="GanttContainer"
          :dataSource="data"
          :dateFormat="dateFormat"
          :taskFields="taskFields"
          :editSettings="editSettings"
          :toolbar="toolbar"
          :allowSelection="true"
          :gridLines="gridLines"
          :height="height"
          :treeColumnIndex="1"
          :resourceFields= "resourceFields"
          :resources="resources"
          :highlightWeekends="true"
          :enableContextMenu="true"
          :allowSorting="true"
          :allowResizing="true"
          :contextMenuItems="contextMenuItems"
          :contextMenuOpen="contextMenuOpen"
          :contextMenuClick="contextMenuClick"
          :timelineSettings="timelineSettings"
          :columns="columns"
          :eventMarkers="eventMarkers"
          :labelSettings="labelSettings"
          :editDialogFields="editDialogFields"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :splitterSettings="splitterSettings"
        ></ejs-gantt>
        <div style="float: right; margin: 10px;">
          Source:
          <a
            href="https://en.wikipedia.org/wiki/Construction"
            target="_blank"
          >https://en.wikipedia.org/</a>
        </div>
      </div>
    </div>

    <div id="action-description">
       <p>This sample demonstrates the various phases involved in constructing a residential house, from testing
        the soil to handing over the fully constructed property to the owner. This also demonstrates the usage of default and custom context menu in Gantt component.
       </p>
    </div>

    <div id="description">
       <p>
        Gantt has an option to show the context menu while performing right click on it. You can configure the default and custom menu items in the context menu using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#columnmenuitems">contextMenuItems</a> property.
             Each menu item will be displayed contextually based on its target. In this demo we have rendered following default and custom menu items
    </p>
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
            <li><code>Convert </code> - Convert the normal task into milestone task and vice versa.</li>
            <li><code>Add</code>
                <ul>
                    <li><code>Above</code> - Add a new row above the selected row </li>
                    <li><code>Below</code> - Add a new row below the selected row</li>
                    <li><code>Child</code> - Add a new row as child to the selected row</li>
                    <li><code>Milestone</code> - Add a milestone task below to selected row</li>
                </ul>
            </li>
    </ul>

    <p>Custom items:</p>
    <p>
        In this demo, custom menu items have been enabled in the context menu to perform expanding and collapsing the parent rows,
        <ul>
        <li><code>Expand the Row</code> - Used to expand the parent row and it will render where the row is in a collapsed state.</li>
        <li><code>Collapse the Row</code> - Used to collapse the parent row and it will render  where the row is in a expanded state.</li>
        </ul>     
        To use context menu feature, we need to inject <code>ContextMenu</code> module into the <code>provide</code> section.
    </p>
    </div>
  </div>
</template>
<script>
import {
  GanttComponent,
  Edit,
  Selection,
  Toolbar,
  DayMarkers,
  ContextMenu,
  Sort,
  Resize
} from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  }, 
  data: function() {
    return {
      data: editingData,
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
        child: "subtasks",
        notes: "info",
        resourceInfo: "resources"
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
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
      height: "450px",
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
        { field: "TaskID", width: 80 },
        {
          field: "TaskName",
          headerText: "Job Name",
          width: "250",
          clipMode: "EllipsisWithTooltip"
        },
        { field: "StartDate" },
        { field: "Duration" },
        { field: "Progress" },
        { field: "Predecessor" }
      ],
      eventMarkers: [
        { day: "4/17/2024", label: "Project approval and kick-off" },
        { day: "5/3/2024", label: "Foundation inspection" },
        { day: "6/7/2024", label: "Site manager inspection" },
        { day: "7/16/2024", label: "Property handover and sign-off" }
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
      projectStartDate: new Date("03/25/2024"),
      projectEndDate: new Date("07/28/2024"),
      splitterSettings: {
        position: "35%"
      }
    };
  },
    provide: {
    gantt: [Edit, Selection, Toolbar, DayMarkers, ContextMenu, Sort, Resize]
  },
    methods:{
      contextMenuOpen:function (args) {
        let record = args.rowData;
      if (args.type !== 'Header' && record) {
        if (!record.hasChildRecords) {
          args.hideItems.push('Collapse the Row');
          args.hideItems.push('Expand the Row');
        } else {
            if(record.expanded) {
              args.hideItems.push('Expand the Row');
            } else {
                args.hideItems.push('Collapse the Row');
            }
        }
    }
  },
      contextMenuClick:function (args) {
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
