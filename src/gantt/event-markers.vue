<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample visualizes how to notify the important dates in the project timeline.</p>
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
                In this example, the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#eventmarkers">eventMarkers</a> are
                used like a bookmark to show the different stages of the project life cycle. You can show the desired
                text on the date. The Event Markers model has the below properties to customize the marker:
            <ul>
                <li><code>cssClass</code>: Used to assign external CSS styles to that particular marker.</li>
                <li><code>day</code>: Used to set date of the event marker.</li>
                <li><code>label</code>: The desired text can be shown on the vertical line using this property.</li>
            </ul>
            </p>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/event-markers">documentation section</a>.
            </p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers, TimelineSettings } from "@syncfusion/ej2-vue-gantt";
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
            projectStartDate: new Date('03/23/2025'),
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
                    day: new Date('04/07/2025'),
                    label: 'Research phase'
                }, {
                    day: new Date('04/17/2025'),
                    label: 'Design phase'
                }, {
                    day: new Date('05/23/2025'),
                    label: 'Production phase'
                }, {
                    day: new Date('06/27/2025'),
                    label: 'Sales and marketing phase'
                }
            ],
        };
    },
    provide: {
        gantt: [DayMarkers, Selection]
    }
}
</script>