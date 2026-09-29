<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates column resizing in the Gantt Chart. Resize a column by dragging the right edge of its header to adjust the column width.</p>
        </div>
        <div>
            <ejs-gantt ref="gantt" id="ColumnResize" :dataSource="data" :height="height" :rowHeight="46"
                :taskbarHeight="25" :allowResizing='true' :highlightWeekends='true' :taskFields="taskFields"
                :columns="columns" :labelSettings="labelSettings" :splitterSettings="splitterSettings"
                :treeColumnIndex="1" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>

        <div id="description">
            <p>Columns can be resized interactively by dragging the right edge of a column header. Individual columns can also define <code>minWidth</code> and <code>maxWidth</code> values to restrict resizing within a specified range. To enable resizing, set the <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#allowresizing">allowResizing</a></code> property to <code>true</code>.</p>
            <p>In this sample, the <code>Task Name</code> column can be resized between 120 and 300 pixels, while resizing is disabled for the <code>Duration</code> column using the column-level <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#allowresizing">allowResizing</a></code> property.</p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use column resize features,
                inject the <code>Resize</code> module using the <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/column-resizing">columns resizing</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Resize } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: projectNewData,
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
                { field: 'TaskID', headerText: 'ID', width: 80, minWidth: 8 },
                { field: 'TaskName', headerText: 'Job Name', width: 280, minWidth: 120, maxWidth: 300 },
                { field: 'StartDate', width: 135, minWidth: 8 },
                { field: 'EndDate', width: 135, minWidth: 8 },
                { field: 'Duration', allowResizing: false, width: 120 },
                { field: 'Progress', headerText: 'Progress', textAlign: 'Right', width: 120, minWidth: 8 },
                { field: 'Predecessor', headerText: 'Dependency', textAlign: 'Left', width: 135, minWidth: 8 }
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 3
            },
            projectStartDate: new Date('03/30/2025'),
            projectEndDate: new Date('07/20/2025')
        };
    },
    provide: {
        gantt: [Resize]
    }
}
</script>