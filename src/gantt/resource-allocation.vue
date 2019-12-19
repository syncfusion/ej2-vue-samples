<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="resource"  
            :dataSource= "data"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :height= "height"
            :treeColumnIndex= "1"
            :resourceNameMapping= "resourceNameMapping"
            :resourceIDMapping= "resourceIdMapping"
            :resources= "resources"
            :highlightWeekends= "true"
            :columns= "columns"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :splitterSettings= "splitterSettings">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the options to allocate one or more resources to tasks based on the task requirement.</p>
</div>

<div id="description">
    <p>In this example, you can see how to allocate single or multiple resources for the task. Based on the task complexity and the resource availability, you can plan and allocate the resources to task in the project. In this demo, there is a set of predefined resources and those IDs are assigned to the task. Resource information can be shown in Gantt chart by using the <code>labelSettings</code> property.</p> 
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers  } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: editingData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                resourceInfo: 'resources'
            },
            height: '450px',
            resourceNameMapping: 'resourceName',
            resourceIdMapping: 'resourceId',
            resources: editingResources,
            columns: [
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 250, headerText: 'Job Name', clipMode: 'EllipsisWithTooltip' },
                { field: 'resources', width: 200 },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' },
            ],
            labelSettings: {
                leftLabel: 'TaskName',
                rightLabel: 'resources'
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/28/2019'),
            splitterSettings: {
                columnIndex: 3
            }
      };
  },
  provide: {
      gantt: [ Selection, DayMarkers]
  }
});
</script>