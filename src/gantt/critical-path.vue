<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt
            ref="criticalPath"
            id="criticalPath"
            enableCriticalPath = "true"
            :editSettings= "editSettings"
            :dataSource= "dataSource"
            :taskFields= "taskFields"
            :toolbar= "toolbar"
            :height= "height"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :columns= "columns"
            :splitterSettings= "splitterSettings"
            ></ejs-gantt>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the rendering of critical path to the Gantt control.</p>
    </div>

    <div id="description">
     <p>
        In this example, you can see how to render a Gantt chart with critical path.The default timeline view week-day mode is applied to Gantt chart.
        The dependency lines are enabled in this example to represent the execution order or the hierarchy between the phases.
    </p>
    <p>
        The critical path is a series of tasks (or sometimes only a single task) that controls the calculated finish date of the project. If a task in a critical path is delayed, then the entire project will be delayed.
    </p>
    <p>
        Injecting Module:
    </p>
    <p>
        Gantt control features are segregated into individual feature-wise modules. To use a Critical Path, inject the <code>CriticalPath</code> module.
    </p>
    <p>
        More information on the Critical Path feature can be found in this <a href="https://ej2.syncfusion.com/vue/documentation/gantt/critical-path">documentation section</a>.
    </p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Toolbar, Edit, Selection, CriticalPath } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
    return {
        dataSource: projectNewData,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
        },
        toolbar: ['Add', 'Edit','Delete','CriticalPath'],
        height: '450px',
        labelSettings: {
            leftLabel: 'TaskName'
        },
        columns: [
          { field: 'TaskID', width: 80 },
          { field: 'TaskName',headerText: 'Name', width: 250 },
          { field: 'StartDate' },
          { field: 'EndDate' },
          { field: 'Duration' },
          { field: 'Predecessor' },
          { field: 'Progress' },
        ],
        splitterSettings: {
          columnIndex: 4
        },
        projectStartDate: new Date('03/24/2024'),
        projectEndDate: new Date('07/06/2024')
    };
  },
  provide: {
    gantt: [Edit,Toolbar, Selection, CriticalPath]
  },

}
</script>
