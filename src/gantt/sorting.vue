<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the sorting feature in the Gantt Chart. To sort multiple columns, hold the CTRL key and click the desired column headers.</p>
        </div>
        <div>
            <ejs-gantt ref='gantt' id="Sorting" :dataSource="data" :height="height" :rowHeight="46" :taskbarHeight="25"
                :highlightWeekends='true' :allowSelection='true' :selectedRowIndex='0' :allowSorting='true'
                :sortSettings="sortSettings" :taskFields="taskFields" :labelSettings="labelSettings"
                :treeColumnIndex="1" :columns="columns" :splitterSettings="splitterSettings"
                :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>
        <div id="description">
            <p>The Gantt Chart supports both single-column and multi-column sorting, allowing task data to be arranged in ascending or descending order. Sorting can be enabled by setting the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowsorting">allowSorting</a> to <code>true</code>.</p>
            <p>To sort a column, click its header. Repeated clicks toggle the sort direction between ascending and descending order. Sort indicators in the column header visually represent the current sort direction.</p>
            <p>Multi-sorting is enabled by default. To sort by multiple columns, hold the <strong>CTRL</strong> key and click additional column headers. To remove sorting from a column, hold the <strong>SHIFT</strong> key and click its header. In this example, initial multi-column sorting is applied using the <code>sortSettings</code> property to sort tasks by <strong>Task Name</strong> and <strong>Task ID</strong> in ascending order.</p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use a selection, markers and sort features,
                inject the <code>Selection</code>, <code>DayMarkers</code> and <code>Sort</code> modules using the
                <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/sorting">sorting</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers, Sort } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: editingData,
            height: '650px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentId'
            },
            columns: [
                { field: 'TaskID', visible: false },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' }
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            sortSettings: { columns: [{ field: 'TaskName', direction: 'Ascending' }, { field: 'TaskID', direction: 'Ascending' }] },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('09/01/2025')
        };
    },
    provide: {
        gantt: [DayMarkers, Selection, Sort]
    }
}
</script>