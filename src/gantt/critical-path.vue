<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt ref="criticalPath" id="criticalPath" enableCriticalPath="true" :editSettings="editSettings"
          :dataSource="dataSource" :taskFields="taskFields" :toolbar="toolbar" :height="height" :rowHeight="46"
          :taskbarHeight="25" :labelSettings="labelSettings" :projectStartDate="projectStartDate"
          :eventMarkers="eventMarkers" :columns="columns" :splitterSettings="splitterSettings" :timelineSettings="timelineSettings">
        </ejs-gantt>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the rendering of critical path to the Gantt control.</p>
    </div>

    <div id="description">
      <p>
        In this example, you can see how to render a Gantt Chart with critical path. The default timeline view week-day
        mode is applied to Gantt Chart.
        The dependency lines are enabled in this example to represent the execution order or the hierarchy between the
        phases.
      </p>
      <p>
        The critical path is a series of tasks (or sometimes only a single task) that controls the calculated finish
        date of the project. If a task in a critical path is delayed, then the entire project will be delayed.
      </p>
      <p style="font-weight: 500">Injecting Module:</p>
      <p>
        Gantt component features are segregated into individual feature-wise modules. To use critical path, selection, edit and toolbar,
        inject the <code>CriticalPath</code>, <code>Selection</code>, <code>Edit</code> and <code>Toolbar</code> modules using the
        <code>provide</code> section.
      </p>
      <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/critical-path">documentation section</a>.</p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Toolbar, Edit, Selection, CriticalPath, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { criticalPathData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function () {
    return {
      dataSource: criticalPathData,
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
      },
      toolbar: ['Add', 'Edit', 'Delete', 'CriticalPath'],
      height: '650px',
      labelSettings: {
        rightLabel: 'TaskName'
      },
      columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Predecessor' },
        { field: 'Progress' }
      ],
      eventMarkers: [
        {
          day: new Date('2025-04-02'),
          cssClass: 'e-custom-event-marker',
          label: 'Project planning and kickoff',
          top: '138px',
        }
      ],
      splitterSettings: {
        columnIndex: 2,
      },
      timelineSettings: {
        viewEndDate: new Date('06/07/2025'),
      },
      projectStartDate: new Date('03/30/2025')
    };
  },
  provide: {
    gantt: [Edit, Toolbar, Selection, CriticalPath, DayMarkers]
  }
}
</script>
