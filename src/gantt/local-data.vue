<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates how to bind local hierarchical data to the Gantt Chart and visualize project tasks with their scheduling, progress, and dependency information.</p>
        </div>
        <div>
            <ejs-gantt ref="gantt" id="LocalData" :dataSource="data" :height="height" :rowHeight="46"
                :taskbarHeight="25" :highlightWeekends='true' :allowSelection='true' :taskFields="taskFields"
                :labelSettings="labelSettings" :treeColumnIndex="1" :columns="columns"
                :splitterSettings="splitterSettings" :projectStartDate="projectStartDate"
                :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>
        <div id="description">
            <p>The Gantt Chart supports binding data from local collections as well as remote data services. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#datasource">dataSource</a> property can be assigned either an array of JavaScript objects or a <code>DataManager</code> instance.</p>
            <p>In this sample, a local JSON data source with a hierarchical task structure is used to populate the Gantt Chart.</p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use selection and markers, inject
                the <code>Selection</code> and <code>DayMarkers</code> modules using the <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/data-binding#local-data">data binding</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { localData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: localData,
            height: '650px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 280 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' }
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
        gantt: [DayMarkers, Selection]
    }
}
</script>
