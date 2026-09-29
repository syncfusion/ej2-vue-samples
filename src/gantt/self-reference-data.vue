<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates binding self-referential data to the Gantt Chart using the <code>parentID</code> field to define parent-child task relationships.</p>
        </div>
            <div>
                <ejs-gantt ref='gantt' id="SelfData" :dataSource= "data" :height="height" :rowHeight="46" :taskbarHeight="25"
                    :highlightWeekends= 'true' :allowSelection= 'true' :taskFields= "taskFields" :labelSettings= "labelSettings"
                    :treeColumnIndex= "1" :columns= "columns" :splitterSettings= "splitterSettings"
                    :projectStartDate= "projectStartDate" :projectEndDate= "projectEndDate">
                </ejs-gantt>
            </div>
        <div id="description">
            <p>In this example, a flat collection of task records is converted into a hierarchical structure by mapping the <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFieldsModel/#parentid">parentID</a></code> field. This enables the Gantt Chart to display parent and child tasks without requiring a nested data source.</p>
            <p>The Gantt Chart supports binding data from local collections or remote services through the <code>dataSource</code> property. Here, a local array of JavaScript objects is used as the data source.</p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use selection and markers, inject the
                <code>Selection</code> and <code>DayMarkers</code> modules using the <code>provide</code> method.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/data-binding#self-referential-data-binding-flat-data">data binding</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { selfData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function() {
        return{
            data: selfData,
            height: '650px',             
            taskFields: {
               id: 'taskID',
                name: 'taskName',
                startDate: 'startDate',
                endDate: 'endDate',
                duration: 'duration',
                progress: 'progress',
                dependency: 'predecessor',
                parentID: 'parentID'
            },
            columns: [
                { field: 'taskID', width: 75 },
                { field: 'taskName', width: 250 },
                { field: 'startDate' },
                { field: 'endDate' },
                { field: 'duration' },
                { field: 'predecessor' },
                { field: 'progress' },
            ],
            labelSettings: {
                leftLabel: 'taskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('01/28/2025'),
            projectEndDate: new Date('03/30/2025')
        };
    },
    provide: {
        gantt: [DayMarkers, Selection]
    }
}
</script>