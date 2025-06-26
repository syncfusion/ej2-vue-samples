<template>
<div>
<div class="col-lg-12 control-section">
    <div style="display: flex">
                <div style="display: flex">
                    <label for="checked" id="ResourceMultiTaskbarallow" style="margin:0px 5px 0px 0px;font-size: 15px;"> Allow Taskbar Drag And Drop </label>
                    <div>
                    <ejs-switch id="checked" v-on:change= "dragdropChange"></ejs-switch>
                </div>
                </div>
       <div style="display: flex">
                    <label for="unchecked" id="ResourceMultiTaskbarallow" style="margin:0px 5px 0px 5px;font-size: 15px;"> Allow Taskbar Overlap </label>
                    <div>
                    <ejs-switch id="unchecked" :checked= "true" v-on:change= "overlapChange"></ejs-switch>
                </div>
        </div>
        </div>
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="ResourceView"  
            :dataSource= "data"
            :viewType="viewType"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :allowResizing= "true"
            :resourceFields= "resourceFields"
            :taskType= "taskType"
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
            :showOverAllocation= "true">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates how to visualize a list of tasks assigned to a resource within a collapsed parent row. It also allows modifying task scheduling actions such as dragging, left resizing, and progress editing while keeping the parent row collapsed.
        This functionality can be enabled by setting the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enablemultitaskbar">enableMultiTaskbar</a> property to <code>true</code>.
    </p>
</div>

<div id="description">
    <p>
        This example demonstrates how to enable taskbar drag-and-drop functionality for reassigning tasks between resources vertically by setting the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowtaskbardraganddrop">allowTaskbarDragAndDrop</a> property to true.  Additionally, you can prevent taskbar overlap within a resource's tasks by disabling the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowtaskbaroverlap">allowTaskbarOverlap</a> property.
    </p>
    <p>
        In this example, resources are assigned to tasks using predefined resource IDs, allowing efficient task distribution. The resource details are displayed using the LabelSetting <code>labelSetting</code> property. 
        You can also perform CRUD operations on resource allocation using toolbar actions, considering availability and task complexity.
    </p>
        <p>The resources and their assigned tasks are grouped into categories. Resources can be mapped using the following <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#resourcefields">resourceFields:</a>.</p>
        <p><code>ID</code>: Maps the resource ID.</p>
        <p><code>Name</code>: Maps the resource name.</p>
        <p><code>Unit</code>: Maps the resource unit.</p>
        <p><code>Group</code>: Maps the resource group.</p>
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
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar, Resize, RowDD  } from "@syncfusion/ej2-vue-gantt";
import { multiTaskbarData, resources } from './data-source';
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-switch': SwitchComponent
  },
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
            taskType: "FixedWork",
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
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('05/18/2024'),
            splitterSettings: {
                columnIndex: 2
            }
      };
  },
  provide: {
      gantt: [ Selection, DayMarkers, Toolbar, Edit, Resize, RowDD]
  },
  methods:{
    dragdropChange: function(args) {
        if (args.checked) {
            this.$refs.gantt.ej2Instances.allowTaskbarDragAndDrop = true;
        } else {
            this.$refs.gantt.ej2Instances.allowTaskbarDragAndDrop = false;
        }
    },
    overlapChange: function(args) {
        if (args.checked) {
            this.$refs.gantt.ej2Instances.allowTaskbarOverlap = true;
        } else {
            this.$refs.gantt.ej2Instances.allowTaskbarOverlap = false;
        }
    }
  }
}
</script>
<style>
.e-bigger  {
            #ResourceMultiTaskbarallow {
            margin: 5px 5px 0px 5px !important;
        }
    }
</style>
