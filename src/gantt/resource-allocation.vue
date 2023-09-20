<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="resource"  
            :dataSource= "data"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :resourceFields= "resourceFields"
            :editSettings= "editSettings"
            :toolbar= "toolbar"
            :height= "height"
            :treeColumnIndex= "1"
            :resources= "resources"
            :highlightWeekends= "true"
            :columns= "columns"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :splitterSettings= "splitterSettings"
			:showOverAllocation= "true">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the options to allocate one or more resources to tasks based on the task requirement.
        The Work is the total labor hours necessary to complete a task. 
        Work can be mapped from the data source field using the property <code>work</code> and when the work value is mapped from the data source, 
        the end date and duration of the task will be calculated automatically based on the work and resource unit values from the data source.
        Work can be measured in hours, days and minutes. It is measured in ‘hours’ scale by default and this can be changed by using the <code>workUnit</code> property.</p>
</div>

<div id="description">
    <p>In this example, you can see how to allocate single or multiple resources for the task. Based on the task complexity and the resource availability, you can plan and allocate the resources to task in the project. In this demo, there is a set of predefined resources and those IDs are assigned to the task. Resource information can be shown in Gantt chart by using the <code>labelSettings</code> property.</p> 
    <p>Resources can be mapped using <code>resourceFields:</code> </p>
        <p><code>id</code>: To map resource ID</p>
        <p><code>name</code>: To map resource name</p>
        <p><code>unit</code>: To map resource unit</p>
        
        <p>The work, duration and resource unit fields of a task depends upon each other values and will change automatically on editing any one of these fields. But we can also set these field’s values as constant using the <code>taskType</code> property. The following values can be set to the type property:</p>
        
        <p><code>FixedDuration</code>: Duration task field will remain constant while updating resource unit or work field.</p>
        <p><code>FixedWork</code>: Work field will remain constant while updating resource unit or duration fields.</p>
        <p><code>FixedUnit</code>: Resource units will remain constant while updating duration or work field.</p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection, inject the
        <code>Selection</code> module.To use markers, inject the <code>DayMarkers</code> module.
        To edit resource unit, task type and duration, inject the <code>Toolbar</code> and <code>Edit</code> module.
    </p>    
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar  } from "@syncfusion/ej2-vue-gantt";
import { resourceData, resourceResources } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },  
  data: function() {
      return{
            data: resourceData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                work: 'work',
                resourceInfo: 'resources',
                type: 'taskType'
            },
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'unit'
            },
           toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            height: '420px',
            resources: resourceResources,
            columns: [
                { field: 'TaskID', visible: false},
                { field: 'TaskName', headerText: 'Task Name', width: '180'},
                { field: 'resources', headerText: 'Resources', width: '160' },
                { field: 'work', width:'110'},
                { field: 'Duration', width: '100' },
                { field: 'taskType', headerText: 'Task Type', width: '110'}
            ],
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            labelSettings: {
                rightLabel: 'resources'
            },
            projectStartDate: new Date('03/28/2019'),
            projectEndDate: new Date('07/28/2019'),
            splitterSettings: {
                columnIndex: 5.1
            }
      };
  },
  provide: {
      gantt: [ Selection, DayMarkers, Toolbar, Edit]
  }
}
</script>