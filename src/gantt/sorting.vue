<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the Gantt multi-sorting feature. To sort two or more columns, hold the CTRL key,
                and click the column header.</p>
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
            <p>
                The sorting feature enables you to order data in a particular direction. It can be enabled by setting <a
                    target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowselection">allowSelection</a> to
                true.
            </p>
            <p>To sort a Gantt column, click the column header. The icons (ascending) and (descending) specifies the
                sort direction of a column.
            </p>

            <p>By default, the multi-sorting feature is enabled in Gantt. To sort multiple columns, hold the
                <strong>CTRL</strong> key, and then click the column header. To clear sort for a column, hold the
                <strong>SHIFT</strong> key, and then click the column header.</p>
            <p>In this demo, multiple sorting enabled on load time by assigning multiple columns into
                <code>sortSettings</code> property.</p>

            <p>
                Gantt control features are segregated into individual feature-wise modules.To use a selection, inject
                the
                <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method. To use sort, inject
                the
                <code>Sort</code> module using the <code>Gantt.Inject(Sort)</code> method.To use markers, inject the
                <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
            </p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/sorting">documentation section</a>.</p>
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
                { field: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            sortSettings: { columns: [{ field: 'TaskName', direction: 'Ascending' }, { field: 'TaskID', direction: 'Ascending' }] },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('09/01/2025'),
        };
    },
    provide: {
        gantt: [DayMarkers, Selection, Sort]
    }
}
</script>