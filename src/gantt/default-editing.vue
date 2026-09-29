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
            <p>This sample demonstrates task editing and CRUD operations in the Gantt Chart using a residential construction project workflow. You can add, edit, delete, indent, outdent, and update tasks using the toolbar or direct user interactions.</p>
        </div>

        <div id="description">
            <p>The Gantt Chart supports built-in CRUD operations through the <code><a target="_blank" rel="noopener noreferrer" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#editsettings">editSettings</a></code> property. In this example, adding, editing, deleting, and taskbar editing are enabled, allowing tasks to be modified directly from both the TreeGrid and chart areas.</p>
            <ul>
                <li><code>Add</code> - Creates a new task</li>
                <li><code>Edit </code> - Modifies the selected task.</li>
                <li><code>Indent</code> - Makes the selected task a child task.</li>
                <li><code>Outdent</code> - Promotes the selected task to a higher level.</li>
                <li><code>Delete</code> - Removes the selected task.</li>
                <li><code>Update</code> / <code>Cancel</code> - Saves or discards the current changes.</li>
            </ul>
            <p>Tasks can be edited by double-clicking a row, using the toolbar commands, or opening the edit dialog. Taskbars can also be modified through drag-and-drop interactions, including updating task dates, durations, progress, and dependency relationships. This sample demonstrates resource assignment, dependency editing, notes editing, and support for custom duration units through the <code>taskFields.durationUnit</code> mapping such as <code>week</code>, <code>month</code>, <code>days</code>, <code>hours</code> and <code>minutes</code>.</p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use a edit, selection, toolbar,
                markers features, inject the <code>Edit</code>, <code>Selection</code>, <code>Toolbar</code>, <code>DayMarkers</code>
                modules into the <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/managing-tasks/editing-tasks">editing tasks</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Edit, Selection, Toolbar, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { defaultEditingData, editingResources } from './data-source';
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
            data: defaultEditingData,
            dateFormat: 'MMM dd, y',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                durationUnit: 'DurationUnit',
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
                    format: 'MMM dd, y'
                },
                bottomTier: {
                    unit: 'Day'
                }
            },
            columns: [
                { field: 'TaskID', width: 80 },
                { field: 'TaskName', headerText: 'Job Name', width: '260', clipMode: 'EllipsisWithTooltip', validationRules: { required: true, minLength: [5, 'Task name should have a minimum length of 5 characters'] } },
                { field: 'Duration', validationRules: { required: true } },
                { field: 'StartDate' },
                { field: 'EndDate', validationRules: endDateValidation },
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
        }
    }
}
</script>
