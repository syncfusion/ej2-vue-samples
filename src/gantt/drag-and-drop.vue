<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer"  
            :dataSource= "data"
            :taskFields= "taskFields"
            :editSettings= "editSettings"
            :allowRowDragAndDrop= "true"
            :height= "height"
            :treeColumnIndex= "1"
            :highlightWeekends= "true"
            :columns= "columns"
            :selectionSettings= "selectionSettings"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :splitterSettings= "splitterSettings"
            :allowTaskbarDragAndDrop = "true"
        >
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the Gantt component with the row drag and drop feature. You can rearrange the gantt rows by using drag icon in left side of gantt column. Here you can perform drag and drop the gantt rows in to required position.</p>
</div>

<div id="description">
    <p>Row drag and drop feature can be enabled by settting <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowrowdraganddrop">
            allowRowDragAndDrop</a> property as true property as true. In this demo, taskbar drag and drop between rows can be enabled by setting <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowtaskbardraganddrop">
            allowTaskbarDragAndDrop</a> property as true as true.</p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use row, drag and drop feature we need to inject <code>RowDD</code> and <code>Edit</code> modules.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Edit, RowDD, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: projectNewData,
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
            height: '450px',
            columns: [
                { field: 'TaskID', headerText: 'ID', width: 80 },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor', headerText: 'Dependency' }
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            selectionSettings: {
                type: 'Multiple'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            projectStartDate: new Date('03/25/2024'),
            projectEndDate: new Date('07/06/2024'),
            splitterSettings: {
                columnIndex: 3
            }
      };
  },
  provide: {
      gantt: [Edit, RowDD, Selection]
  }
}
</script>
