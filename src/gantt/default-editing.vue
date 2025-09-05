<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :dateFormat="dateFormat"
                    :taskFields="taskFields" :editSettings="editSettings" :toolbar="toolbar" :allowSelection="true"
                    :gridLines="gridLines" :height="height" :treeColumnIndex="1" :actionBegin="actionBegin" :enableHover="true"
                    :resourceFields="resourceFields" :resources="resources" :highlightWeekends="true" :rowHeight="46" :taskbarHeight="25"
                    :timelineSettings="timelineSettings" :columns="columns" :eventMarkers="eventMarkers"
                    :labelSettings="labelSettings" :editDialogFields="editDialogFields"
                    :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"
                    :splitterSettings="splitterSettings">
                </ejs-gantt>
            </div>
        </div>

        <div id="action-description">
            <p>This sample visualizes the various phases involved in constructing a residential house, from testing the
                soil to
                handing over the fully constructed property to the owner. This sample also demonstrates CRUD operations
                in Gantt
                chart. You can perform CRUD operations as follows,
            <ul>
                <li><code>Add</code> - To add new task, click Add toolbar button</li>
                <li><code>Edit </code>- To edit a task, double click a row or double click a taskbar or click toolbar
                    Edit
                    button after selected a row</li>
                <li><code>Indent</code> - To indent a task, click toolbar indent button after selecting a row</li>
                <li><code>Outdent</code> - To outdent a task, click toolbar outdent button after selecting a row</li>
                <li><code>Delete</code> - To delete a task, click toolbar Delete button after selected a row</li>
                <li><code>Update,Cancel</code> - You can save or discard changes by click toolbar Update and Cancel
                    button
                    respectively</li>
            </ul>
            </p>
        </div>

        <div id="description">
            <p>
                This CRUD operations can be configured in Gantt Chart using <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#allowtaskbardraganddrop">allowTaskbarEditing</a>
                in <a target="_blank"
                    href="https://ej2.syncfusion.com/documentation/api/gantt/#editsettings">editSettings</a>. Gantt
                Chart has two modes to manipulate the datasource:
                <li><code>Auto</code></li>
                <li><code>Dialog</code></li>
            </p>
            <br>
            <p>In this demo, <code>Auto</code> mode is enabled for editing. On the TreeGrid side, you can start editing
                any row by double clicking on it or clicking on toolbar’s Edit button, then the currently selected row
                will be changed to edited state.
                On the chart side, you can edit the tasks using edit dialog by double clicking on the taskbars and you
                can edit the dependency connector lines using drag and drop action with connector line points available
                on the either side of taskbar.
                <br>
                In this sample <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#validationrules">column.validation</a>
                has been enabled for the columns.It uses the Form Validator control and the column validation property
                to define validation rules, displaying error messages for invalid fields.
            </p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/managing-tasks/editing-tasks">documentation
                    section</a>.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Edit, Selection, Toolbar, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { editingData, editingResources } from './data-source';
var startDate;
function customFn(args) {
    var endDate;
    var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0]
    if (args.element && args.value) {
        var dateOptions = { format: gantt.dateFormat, type: 'dateTime', skeleton: 'yMd' };
        endDate = gantt.globalize.parseDate(args.value, dateOptions);
        if (!startDate && gantt.editModule.dialogModule['beforeOpenArgs']) {
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
    data: function () {

        return {
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
                parentID: 'ParentId',
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
            height: '650px',
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
                { field: 'Duration', validationRules: { required: true } },
                { field: 'Progress', validationRules: { required: true, min: 0, max: 100 } },
                { field: 'Predecessor' }
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
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('09/01/2025'),
            splitterSettings: {
                columnIndex: 3
            }
        };
    },
    provide: {
        gantt: [Edit, Selection, Toolbar, DayMarkers]
    },
    methods: {
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
