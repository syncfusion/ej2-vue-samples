<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered"></ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates the usage of different types of events such as normal, spanned and all-day. Here, the Schedule acts
                as a leave planner for an employee to plan his upcoming leaves as well as to keep track of his previously
                taken time-offs and leaves.
            </p>
        </div>

        <div id="description">
            <p>
                Schedule requires only the
                <code>startTime</code> and
                <code>endTime</code> fields as mandatory to be mapped from datasource and provided with proper datetime values
                to display the normal events in it. The normal events can be categorized into 3 types based on its time range
                and all-day type.
            </p>
            <table style="width:100%">
                <tr>
                    <th style="width:100px">
                        <strong>Event</strong>
                    </th>
                    <th>
                        <strong>Description</strong>
                    </th>
                </tr>
                <tr>
                    <td style="padding:4px 0;">Normal events</td>
                    <td>
                        The events that has its start and end time duration on the same date. These events are depicted in green color in the above
                        sample.
                    </td>
                </tr>
                <tr>
                    <td style="padding:4px 0;">Spanned events</td>
                    <td>
                        The events on which its start and end time spans over multiple days and usually displays together with all-day events. These
                        events are depicted in orange color which can be seen by navigating to the next date period and are
                        depicted in orange color.
                    </td>
                </tr>
                <tr>
                    <td style="padding:4px 0;">All-day events</td>
                    <td>
                        The events that are defined as all-day in its event object by setting
                        <code>isAllDay</code> to true. It usually renders at the date header section of the Schedule where
                        no time-cells are present. These events are depicted in purple color.
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { leaveData } from './datasource';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], leaveData, null, true) },
                selectedDate: new Date(2018, 1, 15),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            oneventRendered: function (args) {
                let scheduleObj = document.getElementById('Schedule');
                let categoryColor;
                let start = new Date(args.data.StartTime).setHours(0, 0, 0, 0);
                let end = new Date(args.data.EndTime).setHours(0, 0, 0, 0);
                if (args.data.IsAllDay) {
                    categoryColor = '#8e24aa';
                } else if (start !== end) {
                    categoryColor = '#f57f17';
                } else {
                    categoryColor = '#7fa900';
                }
                if (scheduleObj.ej2_instances[0].currentView === 'Agenda') {
                    (args.element.firstChild).style.borderLeftColor = categoryColor;
                } else {
                    args.element.style.backgroundColor = categoryColor;
                }
            }
        }
    });

</script>