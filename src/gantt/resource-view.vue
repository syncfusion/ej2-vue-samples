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
	    :taskType = "taskType"
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
			:showOverAllocation= "true"
			v-on:toolbarClick= "toolbarClick">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample explains the Resource break down view in the Gantt chart that is 
        how to visualize the list of tasks assigned to each resource in hierarchy manner and switch the resources as per users need by task
        editing mode.If the no resources are mapped in a task, then it will come under “unassigned Tasks” category. 
        This feature can be enabled by setting the <code>viewType</code> property to “ResourceView”.
    </p>
    <p>When a resource is assigned with two or more tasks which is scheduleduling on a same date is termed as over allocation for a resource.
        The number of over allocation dates ranges are highlighted as with square bracket. The following sample demonstrates the over allocation for a resource.
        In this sample, over allocation can be hidden by using the CSS ‘visibility’ property on custom toolbar item action.
    </p>
</div>

<div id="description">
    <p>
        In this example, you can see the resource break down from a bulk of tasks done by mapping the predefined resource ID-s to each task and resource information can be shown by using the <code>labelSetting</code> property. 
        Using the toolbar action, you can perform CRUD operation for resource allocation based on their availability and task complexity.</p>
        <p>The resources and tasks assigned to those resources can be grouped into categories. Resources can be mapped using the <code>resourceFields:-</code>.</p>
        <p><code>ID</code>: To map resource ID.</p>
        <p><code>Name</code>: To map resource name.</p>
        <p><code>Unit</code>: To map resource unit.</p>
        <p><code>Group</code>: To map resource group.</p>
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
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar, Resize  } from "@syncfusion/ej2-vue-gantt";
import { resourcesData, resourceCollection } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: resourcesData,
            resources: resourceCollection,
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
                child: 'subtasks'
            },
	    taskType: "FixedWork",
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'resourceUnit',
                group: 'resourceGroup'
            },
           toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
           { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }],
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
                rightLabel: 'resources',
                taskLabel: 'Progress'
            },
            projectStartDate: new Date('03/28/2019'),
            projectEndDate: new Date('05/18/2019'),
            splitterSettings: {
                columnIndex: 3
            }
      };
  },
  provide: {
      gantt: [ Selection, DayMarkers, Toolbar, Edit, Resize]
  },
  methods: {
    toolbarClick: function(args) {
        if (args.item.id === 'showhidebar') {
                    this.$refs.gantt.ej2Instances.showOverAllocation =  this.$refs.gantt.ej2Instances.showOverAllocation ? false : true;
                }
    }
  }
}
</script>
