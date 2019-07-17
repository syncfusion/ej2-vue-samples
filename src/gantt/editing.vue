<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer"  
            :dataSource= "data"
            :dateFormat= "dateFormat"
            :taskFields= "taskFields"
            :editSettings= "editSettings"
            :toolbar= "toolbar"
            :allowSelection= "true"
            :gridLines= "gridLines"
            :height= "height"
            :treeColumnIndex= "1"
            :resourceNameMapping= "resourceNameMapping"
            :resourceIDMapping= "resourceIdMapping"
            :resources= "resources"
            :highlightWeekends= "true"
            :timelineSettings= "timelineSettings"
            :columns= "columns"
            :eventMarkers= "eventMarkers"
            :labelSettings= "labelSettings"
            :editDialogFields= "editDialogFields"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
        >
        </ejs-gantt>
        <div style="float: right; margin: 10px;">Source:
            <a href="https://en.wikipedia.org/wiki/Construction" target='_blank'>https://en.wikipedia.org/</a>
        </div>
    </div>
</div>

<div id="action-description">
    <p>This sample visualizes the various phases involved in constructing a residential house, from testing the soil to
        handing over the fully constructed property to the owner. This sample also demonstrates CRUD operations in Gantt
        chart. You can perform CRUD operations as follows,
        <li><code>Add</code> - To add new task, click Add toolbar button</li>
        <li><code>Edit </code>- To edit a task, double click a row or double click a taskbar or click toolbar Edit
            button after
            selected a row</li>
        <li><code>Delete</code> - To delete a task, click toolbar Delete button after selected a row</li>
        <li><code>Update,Cancel</code> - You can save or discard changes by click toolbar Update and Cancel button
            respectively</li>
    </p>
</div>

<div id="description">
    <p>
        This CRUD operations can be configured in Gantt chart using <code>editSettings</code> and
        <code>allowTaskbarEditing</code>. Gantt chart
        has two modes to manipulate the datasource
        <li><code>Auto</code></li>
        <li><code>Dialog</code></li>
        In this demo, <code>Auto</code> mode is enabled for editing. On the TreeGrid side, you can start editing any row
        by double
        clicking on it or clicking on toolbar’s Edit button, then the currently selected row will be changed to edited
        state. On the chart side, you can edit the tasks using edit dialog by double clicking on the taskbars and you
        can edit the dependency connector lines using drag and drop action with connector line points available on the
        either side of taskbar.
    </p>
    
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use editing feature, inject the
        <code>Edit</code> module. To use a selection feature, inject the <code>Selection</code> module.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Edit, Selection, Toolbar, DayMarkers  } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: editingData,
            dateFormat: 'MMM dd, y',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                notes: 'info',
                resourceInfo: 'resources'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            gridLines: 'Both',
            height: '450px',
            resourceNameMapping: 'resourceName',
            resourceIdMapping: 'resourceId',
            resources: editingResources,
            timelineSettings: {
                topTier: {
                    unit: 'Week',
                    format: 'MMM dd, y',
                },
                bottomTier: {
                    unit: 'Day',
                },
            },
            columns: [
                { field: 'TaskID', width: 50 },
                { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' }
            ],
            eventMarkers: [
                { day: '4/17/2019', label: 'Project approval and kick-off' },
                { day: '5/3/2019', label: 'Foundation inspection' },
                { day: '6/7/2019', label: 'Site manager inspection' },
                { day: '7/16/2019', label: 'Property handover and sign-off' },
            ],
            labelSettings: {
                leftLabel: 'TaskName',
                rightLabel: 'resources'
            },
            editDialogFields: [
                { type: 'General', headerText: 'General' },
                { type: 'Dependency' },
                { type: 'Resources' },
                { type: 'Notes' },
            ],
            projectStartDate: new Date('03/25/2019'),
            projectEndDate: new Date('07/28/2019')
      };
  },
  provide: {
      gantt: [Edit, Selection, Toolbar, DayMarkers]
  }
});
</script>