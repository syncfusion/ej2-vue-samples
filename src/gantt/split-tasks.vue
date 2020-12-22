<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="splittasks"  
            :dataSource= "data"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :enableContextMenu= "true"
            :editSettings= "editSettings"
			:labelSettings="labelSettings"
            :toolbar= "toolbar"
            :height= "height"
            :treeColumnIndex= "1"
            :highlightWeekends= "true"
            :columns= "columns"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :splitterSettings= "splitterSettings">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the split tasks support in the Gantt Chart. This support allows an interruption in
        the task due to circumstances such as the occurrence of an unplanned event or reprioritization of already planned events.
        Sometimes a task may be interrupted due to unexpected situations. In such situtations, the pending work can be split into segments
        and the work can be resumed at a different date.</p>
</div>

<div id="description">
    <p>The split tasks can be called the segments of a task. A task can be split into any number of segments with a minimum of one time unit cell. Segments
        can be defined in the <code>taskFields.segments</code> property. Segments can be created or merged by two ways: Using Edit Dialog and Context Menu.
    </p>
    <p>A task must have a duration of minimum two time unit cells in order to be split. Similarly, milestone tasks or parent tasks cannot be split into segments.</p>   
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, Edit, Toolbar, ContextMenu } from "@syncfusion/ej2-vue-gantt";
import { splitTasksData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: splitTasksData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                segments: 'Segments'
            },
            columns: [
               { field: 'TaskID', headerText: 'ID', width: 60 },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' }
            ],
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            height: '450px',
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            labelSettings: {
               leftLabel: 'TaskName',
               taskLabel: '${Progress}%'
            },
            projectStartDate: new Date('01/30/2019'),
            projectEndDate: new Date('03/04/2019'),
            splitterSettings: {
                columnIndex: 2
            }
      };
  },
  provide: {
      gantt: [ Selection, Toolbar, Edit, ContextMenu]
  }
});
</script>