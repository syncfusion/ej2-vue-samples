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
            <p>The Gantt provides support for automatic and manual task scheduling modes. Scheduling mode of a task is
                used to indicate whether the start and end dates of a task will be automatically validated or not. Using
                the property <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskmode">taskMode</a> we can able to
                change the scheduling mode of a task. The following are the enumeration values that can be set to the
                property <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskmode">taskMode</a>.</p>
            <ul>
                <li>Auto</li>
                <li>Manual</li>
                <li>Custom</li>
            </ul>
        </div>

        <div id="description">
            <p>When the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskmode">taskMode</a> property is set
                as <code>Auto</code> scheduling mode, all the tasks in the project will be rendered as automatically
                scheduled tasks. Thus the start and end dates of the tasks in the project will be automatically
                validated.</p>
            <p>When the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskmode">taskMode</a> property is set
                as <code>Manual</code> scheduling mode, all the tasks in the project will be rendered as manually
                scheduled tasks. Thus the dates of the tasks will not get validated automatically by the system.</p>
            <p>When the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskmode">taskMode</a> property is set
                as <code>Custom</code>, the scheduling mode for each tasks will be mapped form the data source field.
                The property <code>manual</code> is used to map the scheduling mode field from the data source.</p>
            <p>Gantt component features are segregated into individual feature-wise modules. To use editing feature,
                inject the <code>Edit</code> module using the <code>Gantt.Inject(Edit)</code> method. To use a
                selection, inject the <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code>
                method, and to use toolbar by injecting the <code>Toolbar</code> module using the
                <code>Gantt.Inject(Toolbar)</code> method. </p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/task-scheduling">documentation section</a>.
            </p>
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
                { field: 'TaskName', headerText: 'Task Name' },
                { field: 'isManual', headerText: 'Task Mode' }
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