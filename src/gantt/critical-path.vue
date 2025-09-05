<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt ref="criticalPath" id="criticalPath" enableCriticalPath="true" :editSettings="editSettings"
          :dataSource="dataSource" :taskFields="taskFields" :toolbar="toolbar" :height="height" :rowHeight="46"
          :taskbarHeight="25" :labelSettings="labelSettings" :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate" :columns="columns" :splitterSettings="splitterSettings"></ejs-gantt>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the rendering of critical path to the Gantt control.</p>
    </div>

    <div id="description">
      <p>
        In this example, you can see how to render a Gantt Chart with critical path.The default timeline view week-day
        mode is applied to Gantt Chart.
        The dependency lines are enabled in this example to represent the execution order or the hierarchy between the
        phases.
      </p>
      <p>
        The critical path is a series of tasks (or sometimes only a single task) that controls the calculated finish
        date of the project. If a task in a critical path is delayed, then the entire project will be delayed.
      </p>
      <p>
        Injecting Module:
      </p>
      <p>
        Gantt control features are segregated into individual feature-wise modules. To use a Critical Path, inject the
        <code>CriticalPath</code> module.
      </p>
      <p>
        More information on the Critical Path feature can be found in this <a
          href="https://ej2.syncfusion.com/vue/documentation/gantt/critical-path">documentation section</a>.
      </p>
      <br>
    <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/context-menu">documentation section</a>.</p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Toolbar, Edit, Selection, CriticalPath } from "@syncfusion/ej2-vue-gantt";
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
        leftLabel: 'TaskName'
      },
      columns: [
        { field: 'TaskID', width: 80 },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Predecessor' },
        { field: 'Progress' },
      ],
      splitterSettings: {
        columnIndex: 3
      },
      projectStartDate: new Date('03/26/2025'),
      projectEndDate: new Date('06/01/2025')
    };
  },
  provide: {
    gantt: [Edit, Toolbar, Selection, CriticalPath]
  },

}
</script>
