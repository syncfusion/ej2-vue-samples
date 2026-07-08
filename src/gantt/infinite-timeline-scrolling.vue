<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="InfiniteTimeline" :dataSource="data"
                    :enableInfiniteTimelineScroll="true" :rowHeight="46"
                    :taskFields="taskFields" :editSettings="editSettings" :allowSelection="true"
                    :gridLines="gridLines" :height="height" :treeColumnIndex="1" :highlightWeekends="true"
                    :timelineSettings="timelineSettings" :columns="columns"
                    :labelSettings="labelSettings" :splitterSettings="splitterSettings">
                </ejs-gantt>
            </div>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates the infinite timeline scrolling feature in the Gantt Chart,
                allowing users to navigate across project timelines without fixed date boundaries.
            </p>
        </div>

        <div id="description">
            <p>
                By enabling the
                <a target="_blank" rel="noopener noreferrer"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#enableinfinitetimelinescroll">
                    enableInfiniteTimelineScroll
                </a> property, the timeline dynamically generates additional date ranges as you scroll horizontally.
                When the scroll position reaches the edges of the visible timeline, new segments are rendered automatically,
                ensuring uninterrupted navigation in either direction.
            </p>

            <p>
                More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in the
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/time-line/time-line">
                    timeline
                </a> documentation section.
            </p>

        </div>
    </div>
</template>
<script>
import { GanttComponent, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { infiniteTimelineScrollData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: infiniteTimelineScrollData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks' 
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            gridLines: 'Both',
            height: '650px',
            timelineSettings: {
                topTier: {
                    unit: 'Week',
                    format: 'MMM dd, y'
                },
                bottomTier: {
                    unit: 'Day'
                },
                viewStartDate: new Date('12/29/2025'),
                viewEndDate: new Date('04/05/2026')
            },
            columns: [
                { field: 'TaskID', width: 80 },
                { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' }
            ],
            labelSettings: {
                leftLabel: 'TaskID',
                rightLabel: 'TaskName',
                taskLabel: '${Progress}%'
            },
            splitterSettings: {
                columnIndex: 3
            }
        };
    },
    provide: {
        gantt: [Edit, Selection]
    },
}
</script>
