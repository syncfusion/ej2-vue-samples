<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the Gantt column resizing feature. Click and drag at the right corner of each
                column header to resize the column.
            </p>
        </div>
        <div>
            <ejs-gantt ref='gantt' id="ColumnResize" :dataSource="data" :height="height" :rowHeight="46"
                :taskbarHeight="25" :allowResizing='true' :highlightWeekends='true' :taskFields="taskFields"
                :columns="columns" :labelSettings="labelSettings" :splitterSettings="splitterSettings"
                :treeColumnIndex="1" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>

        <div id="description">
            <p>The Gantt columns can be resized by clicking and dragging at the right corner of columns header. Set the
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowresizing">allowResizing</a>
                property to true to enable column resizing behavior in Gantt.
                You can also prevent the resize of a particular column
                by setting <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#allowresizing">columns ->
                    allowResizing</a> to false in columns definition
            </p>
            <br />
            <p> In this demo, the allowResizing feature has been enabled by setting the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowresizing">allowResizing</a>
                property to true.
                Task Name column can be resized between a range of <code>minWidth (120 pixels)</code> and
                <code>maxWidth (300 pixels)</code>.
                The column resizing has been disabled in the <b>Duration</b> column
            </p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/column-resizing">documentation
                    section</a>.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, Resize } from "@syncfusion/ej2-vue-gantt";
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
                { field: 'TaskName', headerText: 'Job Name', width: 250, minWidth: 120, maxWidth: 300 },
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
        gantt: [Selection, Resize]
    }
}
</script>