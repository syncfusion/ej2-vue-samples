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
             :actionBegin= "actionBegin"
            :resourceFields= "resourceFields"
            :resources= "resources"
            :highlightWeekends= "true"
            :timelineSettings= "timelineSettings"
            :columns= "columns"
            :eventMarkers= "eventMarkers"
            :labelSettings= "labelSettings"
            :editDialogFields= "editDialogFields"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :splitterSettings= "splitterSettings"
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
        <ul>
        <li><code>Add</code> - To add new task, click Add toolbar button</li>
        <li><code>Edit </code>- To edit a task, double click a row or double click a taskbar or click toolbar Edit
            button after selected a row</li>
        <li><code>Indent</code> - To indent a task, click toolbar indent button after selecting a row</li>
        <li><code>Outdent</code> - To outdent a task, click toolbar outdent button after selecting a row</li>
        <li><code>Delete</code> - To delete a task, click toolbar Delete button after selected a row</li>
        <li><code>Update,Cancel</code> - You can save or discard changes by click toolbar Update and Cancel button
            respectively</li>
        </ul>
    </p>
</div>

<div id="description">
    <p>
        This CRUD operations can be configured in Gantt Chart using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#editsettings">editSettings</a> and
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowtaskbardraganddrop">allowTaskbarEditing</a>. Gantt Chart
        has two modes to manipulate the datasource
        <li><code>Auto</code></li>
        <li><code>Dialog</code></li>
        
        In this demo, <code>Auto</code> mode is enabled for editing. On the TreeGrid side, you can start editing any row
        by double
        clicking on it or clicking on toolbar Edit button, then the currently selected row will be changed to edited
        state. On the chart side, you can edit the tasks using edit dialog by double clicking on the taskbars and you
        can edit the dependency connector lines using drag and drop action with connector line points available on the
        either side of taskbar. It is possible to connect parent-parent, child-child, child-parent and parent-child dependency relationships.
        <br>
        In this sample <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#validationrules">column.validationRules</a> has been enabled for the columns. It uses the Form Validator control to define validation rules, displaying error messages for invalid field values.
    </p>
    
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use editing feature, inject the
        <code>Edit</code> module. To use a selection feature, inject the <code>Selection</code> module.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Edit, Selection, Toolbar, DayMarkers  } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from './data-source';
var startDate;
function customFn(args) {
    var endDate;
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0]
    if (args.element && args.value) {
        var dateOptions = { format: gantt.dateFormat, type: 'dateTime', skeleton: 'yMd' };
        endDate =  gantt.globalize.parseDate(args.value, dateOptions);
        if(!startDate && gantt.editModule.dialogModule['beforeOpenArgs']) {
            startDate = gantt.editModule.dialogModule['beforeOpenArgs'].rowData['ganttProperties'].startDate;
        endDate = (gantt.editModule.dialogModule['beforeOpenArgs'].rowData['ganttProperties'].endDate);
        }
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
    }
    return startDate <= endDate;
}
const endDateValidation = { required: [customFn, 'Please enter a value greater than the start date.'] };
export default {
  components: {
    'ejs-gantt': GanttComponent
  },
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
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'],
            gridLines: 'Both',
            height: '450px',
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
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
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip', validationRules: { required: true, minLength: [5, 'Task name should have a minimum length of 5 characters'], } },
            { field: 'StartDate' },
            { field: 'EndDate', validationRules: endDateValidation },
            { field: 'Duration', validationRules: { required: true} },
            { field: 'Progress', validationRules: { required: true, min: 0, max: 100 } },
            { field: 'Predecessor' }
            ],
            eventMarkers: [
                { day: '4/17/2024', label: 'Project approval and kick-off' },
                { day: '5/3/2024', label: 'Foundation inspection' },
                { day: '6/7/2024', label: 'Site manager inspection' },
                { day: '7/16/2024', label: 'Property handover and sign-off' },
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
            projectStartDate: new Date('03/25/2024'),
            projectEndDate: new Date('07/28/2024'),
            splitterSettings: {
                position: "35%"
            }
      };
  },
  provide: {
      gantt: [Edit, Selection, Toolbar, DayMarkers]
  },
  methods:{
      actionBegin(args) {
        if (args.columnName === "EndDate" || args.requestType === "beforeOpenAddDialog" || args.requestType === "beforeOpenEditDialog") {
            startDate = args.rowData.ganttProperties.startDate;
          }
          if (args.requestType === "taskbarediting" && args.taskBarEditAction === "ChildDrag") {
             startDate = args.data.ganttProperties.startDate;
          }  
      },
     
  }
}
</script>
