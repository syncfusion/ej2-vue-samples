<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="ResourceView"  
            :dataSource= "data"
            :viewType="viewType"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :allowResizing= "true"
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
            :enableMultiTaskbar= "true"
            :collapseAllParentTasks= "true"
			:showOverAllocation= "true">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample explains you about, how to visualize the list of tasks assigned for a resource in a parent row of collapsed state.  It is also possible to change the tasks scheduling in the collapsed state.
        This feature can be enabled by setting the <code>enableMultiTaskbar</code> property as "true".
    </p>
</div>

<div id="description">
    <p>
        In this example, you can see that, the resource breaks down from a bulk of tasks can be done by mapping the pre-defined resource ID-s to each task and the resource information can be shown by using the labelSetting property.
        Using the toolbar action, you can perform the CRUD operation for the resource allocation based on their availability and task complexity.
    </p>
        <p>The resources and tasks assigned to those resources can be grouped into categories. Resources can be mapped using the <code>resourceFields:-</code>.</p>
        <p><code>ID</code>: To map resource ID.</p>
        <p><code>Name</code>: To map resource name.</p>
        <p><code>Unit</code>: To map resource unit.</p>
        <p><code>Group</code>: To map resource group.</p>
    <p style="font-weight: 500">Injecting module:</p>
    <p>
        The Gantt control features are segregated into individual feature-wise modules. To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method. To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
        To edit,  inject the <code>Toolbar</code> module using the <code>Gantt.Inject(Toolbar)</code> method and <code>Edit</code> module
        using the <code>Gantt.Inject(Edit)</code> method.
    </p> 
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, Edit, DayMarkers, Toolbar, Resize  } from "@syncfusion/ej2-vue-gantt";
import { multiTaskbarData, resources } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: multiTaskbarData,
            resources: resources,
            viewType: 'ResourceView',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                resourceInfo: 'resources',
                work: 'work',
                expandState: 'isExpand',
                child: 'subtasks'
            },
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'resourceUnit',
                group: 'resourceGroup'
            },
           toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            height: '420px',
            columns: [
                { field: 'TaskID', visible: false },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'work', headerText: 'Work' },
                { field: 'Progress' },
                { field: 'resourceGroup', headerText: 'Group' },
                { field: 'StartDate' },
                { field: 'Duration' },
            ],
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            labelSettings: {
                taskLabel: 'TaskName'
            },
            projectStartDate: new Date('03/28/2019'),
            projectEndDate: new Date('05/18/2019'),
            splitterSettings: {
                columnIndex: 2
            }
      };
  },
  provide: {
      gantt: [ Selection, DayMarkers, Toolbar, Edit, Resize]
  }
});
</script>