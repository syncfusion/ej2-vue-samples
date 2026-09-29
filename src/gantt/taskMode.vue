<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="scheduleMode" :dataSource="data" :taskFields="taskFields"
                    :allowSelection="true" :editSettings="editSettings" :toolbar="toolbar" :height="height"
                    :rowHeight="46" :taskbarHeight="25" :treeColumnIndex="1" :highlightWeekends="true"
                    :columns="columns" :taskMode="taskMode" :labelSettings="labelSettings"
                    :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"
                    :splitterSettings="splitterSettings">
                </ejs-gantt>
            </div>
        </div>

        <div id="action-description">
            <p>The Gantt provides support for automatic and manual task scheduling modes. Scheduling mode of a task is used to indicate whether the start and end dates of a task will be automatically validated or not. Using the property <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskmode">taskMode</a> property controls whether tasks are scheduled automatically, manually, or through a custom mode that maps the scheduling behavior from the data source.</p>
        </div>

        <div id="description">
            <p>The Gantt Chart supports three scheduling modes through the <code>taskMode</code> property: <code>Auto</code>, <code>Manual</code> and <code>Custom</code></p>
            <ul>
                <li><code>Auto</code> - All tasks are automatically scheduled, and task dates are validated based on scheduling rules and dependencies.</li>
                <li><code>Manual</code> - All tasks are manually scheduled, and task dates are maintained without automatic validation.</li>
                <li><code>Custom</code> - The scheduling mode is determined for each task individually using a mapped data source field.</li>
            </ul>
            <p>In this sample, <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskmode">taskMode</a></code> property is set <code>Custom</code>, and the scheduling behavior of each task is mapped using the <code>Manual</code> task field. This allows both automatically scheduled and manually scheduled tasks to coexist within the same project.</p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use selection, edit, toolbar and
                markers features, inject the <code>Selection</code>, <code>Edit</code>, <code>Toolbar</code> and
                <code>DayMarkers</code> modules using the <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/task-scheduling">scheduling tasks</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { taskModeData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: taskModeData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                endDate: 'EndDate',
                dependency: 'Predecessor',
                child: 'Children',
                manual: 'isManual'
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            height: '650px',
            columns: [
                { field: 'TaskID', visible: false },
                { field: 'TaskName', headerText: 'Task Name', width: 130 },
                { field: 'isManual', headerText: 'Task Mode', width: 120 }
            ],
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            taskMode: 'Custom',
            labelSettings: {
                leftLabel: 'TaskName'
            },
            projectStartDate: new Date("02/18/2025"),
            projectEndDate: new Date('03/30/2025'),
            splitterSettings: {
                columnIndex: 2
            }
        };
    },
    provide: {
        gantt: [Selection, DayMarkers, Toolbar, Edit]
    }
}
</script>