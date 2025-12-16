<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates how to highlight and notify important dates within a project timeline using the Gantt Chart component.</p>
        </div>
        <div>
            <ejs-gantt ref='gantt' id="EventMarkers" :dataSource="data" :height="height" :rowHeight="46"
                :taskbarHeight="25" :timelineSettings="timelineSettings" :highlightWeekends='true'
                :taskFields="taskFields" :labelSettings="labelSettings" :treeColumnIndex="1" :columns="columns"
                :eventMarkers="eventMarkers" :splitterSettings="splitterSettings" :projectStartDate="projectStartDate"
                :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>

        <div id="description">
            <p>
                In this example, <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#eventmarkers">eventMarkers</a> act as visual bookmarks to indicate key milestones or stages in the project life cycle. Each marker can display descriptive text on the corresponding date, making it easier to track progress and deadlines.</p> 
            <p>The <strong>Event Markers</strong> provides several properties to customize the appearance and behavior of markers:
            <ul>
                <li><code>cssClass</code>: Apply custom CSS styles to a specific marker.</li>
                <li><code>day</code>: Define the exact date for the event marker.</li>
                <li><code>label</code>: Display text along the vertical line to describe the event.</li>
                <li><code>top</code>: Adjust the vertical position of the marker from the chart pane's content top to avoid overlap when multiple markers share the same date.</li>
            </ul>
            </p>
            <p>The Gantt Chart component is modular, with features separated into individual modules. To enable selection support and event markers, inject the <code>Selection</code> and <code>DayMarkers</code> modules.</p>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/eventmarkers">documentation section</a>.
            </p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers} from "@syncfusion/ej2-vue-gantt";
import { EventmarkerData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: EventmarkerData,
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
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025'),
            timelineSettings: {
                topTier: {
                    unit: 'Week',
                    format: 'EEE MMM dd'
                },
                bottomTier: {
                    unit: 'Day',
                    format: ''
                }
            },
            eventMarkers: [
                {
                    day: new Date("04/01/2025"),
                    label: "Product Concept Analysis"
                },
                {
                    day: new Date("04/07/2025"),
                    label: "Research Phase" 
                },
                {
                    day: new Date("04/07/2025"),
                    label: "Demand Analysis",
                    top: '150px'
                },
                {
                    day: new Date("04/17/2025"),
                    label: "Design Phase",
                    top: '200px'
                },
                {
                    day: new Date("04/17/2025"),
                    label: "Competitor Analysis",
                    top: '422px'
                },
                {
                    day: new Date("05/23/2025"),
                    label: "Prototype Testing Phase" 
                },
                {
                    day: new Date("05/29/2025"),
                    label: "Production Launch" ,
                    top: '5px'
                },
                {
                    day: new Date("06/26/2025"),
                    label: "Market Deployment"
                }
            ],
        };
    },
    provide: {
        gantt: [DayMarkers, Selection]
    }
}
</script>