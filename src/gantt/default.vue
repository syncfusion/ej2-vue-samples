<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample visualizes the various phases involved in a manufacturing process of a product which
                transforms from a conceptual model to a sellable product.</p>
        </div>
        <div>
            <ejs-gantt ref="gantt" id="GanttContainer" :dataSource="data" :splitterSettings="splitterSettings"
                :height="height" :rowHeight="46" :taskbarHeight="25" :created="created" :highlightWeekends='true'
                :taskFields="taskFields" :labelSettings="labelSettings" :treeColumnIndex="1" :columns="columns"
                :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render a Gantt Chart with the provided data source. The default
                timeline view week-day mode is applied to Gantt Chart. The dependency lines are enabled in this example to
                represent the execution order or the hierarchy between the phases.
            </p>
            <p>
                Tooltip is enabled for all the UI in this example. To see the tooltip in action, hover the mouse over or
                tap taskbars, timeline units and dependency lines in touch enabled devices.
            </p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use a selection feature,
                inject the <code>Selection</code> module into the <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/getting-started#adding-gantt-component">documentation section</a>.</p>
            <br>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { created } from "@syncfusion/ej2-vue-grids";

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
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', headerText: 'Name', width: 280 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' }
        ],
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025')
        };
    },
    provide: {
        gantt: [Selection, DayMarkers]
    },
    methods: {
        created() {
            const ganttObj = this.$refs.gantt?.ej2Instances;
            if (document.querySelector('.e-bigger')) {
                ganttObj.rowHeight = 48;
                ganttObj.taskbarHeight = 28;
            }
        }
    }
}
</script>