<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample visualizes how to define the holidays in between the project timeline. </p>
        </div>
        <div>
            <ejs-gantt ref='gantt' id="Holidays" :dataSource="data" :height="height" :rowHeight="46" :taskbarHeight="25"
                :highlightWeekends='true' :taskFields="taskFields" :labelSettings="labelSettings" :columns="columns"
                :treeColumnIndex="1" :holidays="holidays" :splitterSettings="splitterSettings"
                :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>

        <div id="description">
            <p>
                In this example,<a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#holidays">holidays</a> are displayed
                with vertical bar with the desired text using the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/holidayModel/#label">label</a>
                property. You can also mention the continuous holidays by specifying the <code>from</code> and
                <code>to</code> range. For single holiday, you can define from value alone. Holidays are defined as an
                array of object collection, so that we can display more than one holiday in the project.
            </p>
            <p>
                You can even assign the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/holidayModel/#cssclass">cssClass</a> to
                each holiday to change the default color of label and background.
            </p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/holidays">documentation section</a>.
            </p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
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
                { field: 'TaskID', visible: false, width: 80 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' },
            ],
            labelSettings: {
                rightLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            holidays: [
                {
                    from: new Date('03/28/2025'),
                    to: new Date('03/28/2025'),
                    label: 'Good Friday'
                }, {
                    from: new Date('03/30/2025'),
                    to: new Date('03/30/2025'),
                    label: 'Easter Sunday'
                }, {
                    from: new Date('05/26/2025'),
                    to: new Date('05/26/2025'),
                    label: 'Memorial Day'
                }, {
                    from: new Date('07/04/2025'),
                    to: new Date('07/04/2025'),
                    label: 'Independence Day'
                },
            ],
            projectStartDate: new Date('03/25/2025'),
            projectEndDate: new Date('07/20/2025')
        };
    },
    provide: {
        gantt: [DayMarkers, Selection]
    }
}
</script>