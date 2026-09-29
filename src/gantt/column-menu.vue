<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the column menu feature in the Gantt Chart. Click the menu icon in a column header to access options such as sorting, filtering, auto-fit, and column visibility.</p>
        </div>
        <div>
            <ejs-gantt ref="gantt" id="ColumnMenu" :dataSource="data" :height="height" :rowHeight="46"
                :taskbarHeight="25" :showColumnMenu="true" :allowFiltering='true' :allowSorting='true'
                :allowResizing='true' :highlightWeekends="true" :taskFields="taskFields" :columns="columns"
                :labelSettings="labelSettings" :splitterSettings="splitterSettings" :treeColumnIndex="1"
                :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>

        <div id="description">
            <p>
                Gantt has an option to show column menu while clicking multiple icon of each column. The column menu has
                an integrated option to interact with the features such as sorting, filtering, column chooser, and autoFit.
                This feature can be enabled by setting <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#showcolumnmenu">showColumnMenu</a> to
                true. The default items are,
            </p>
            <ul>
                <li><code>SortAscending</code> - Sorts the current column in ascending order.</li>
                <li><code>SortDescending</code> - Sorts the current column in descending order.</li>
                <li><code>AutoFit</code> - Auto-fit current column.</li>
                <li><code>AutoFitAll</code> - Auto-fit all columns.</li>
                <li><code>ColumnChooser</code> - Chooses the column visibility.</li>
                <li><code>Filter</code> - Filters the current column.</li>
            </ul>
            <p>
                In this demo, the column menu feature is enabled by setting <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#showcolumnmenu">showColumnMenu</a> to
                true with sorting, filtering, column chooser, and autoFit options.
            </p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use selection, sort, column menu,
                resize and filter features, inject the <code>Selection</code>, <code>Sort</code>, <code>ColumnMenu</code>,
                <code>Resize</code> and <code>Filter</code> modules using the <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/column-menu">column menu</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, Sort, Resize, ColumnMenu, Filter } from "@syncfusion/ej2-vue-gantt";
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
                { field: 'TaskID', headerText: 'ID', width: 110 },
                { field: 'TaskName', headerText: 'Name', width: 280 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor', headerText: 'Dependency', width: 190 }
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025')
        };
    },
    provide: {
        gantt: [Selection, Sort, Resize, ColumnMenu, Filter]
    }
}
</script>
