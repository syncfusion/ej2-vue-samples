<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer"  
            :dataSource= "data"
            :taskFields= "taskFields"
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
        >
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the Gantt component with the row drag and drop feature. You can rearrange the gantt rows by using drag icon in left side of gantt column. Here you can perform drag and drop the gantt rows in to required position.</p>
</div>

<div id="description">
    <p>Row drag and drop feature can be enabled by settting <code>allowRowDragAndDrop</code> property as true. 
    </p>
    <p>
	 Gantt component features are segregated into individual feature-wise modules. To use row, drag and drop feature we need to inject <code>RowDD</code> and <code>Edit</code> modules.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Edit, RowDD, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
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
            projectStartDate: new Date('03/25/2019'),
            projectEndDate: new Date('07/06/2019'),
            splitterSettings: {
                columnIndex: 3
            }
      };
  },
  provide: {
      gantt: [Edit, RowDD, Selection]
  }
});
</script>