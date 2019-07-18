<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule height="650px" id='Schedule' :selectedDate='selectedDate' :currentView='currentView' :eventSettings='eventSettings'
                    :eventRendered="oneventRendered">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="Month"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <div id="property" class="property-panel-table" title="Properties">
                <table id="property" title="Properties" style="width: 100%">
                    <tbody>
                        <tr style="height: 50px">
                            <td style="width: 100%">
                                <ejs-checkbox label="Enable Following Events" :checked="false" :change="onChange"></ejs-checkbox>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo showcases the Scheduler with recurring meetings handled by a top-level manager on a regular pattern.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the recurrence events are defined with different repeat patterns. It can be defined through
                <code>recurrenceRule</code> field which should accept the valid rule string following the
                <a target="_blank" href="https://tools.ietf.org/html/rfc5545#section-3.3.10">
                    iCalendar
                </a> specifications. The recurring events are differentiated from other events by a repeat
                marker added to the right-bottom of it. These events can repeat on daily, weekly, monthly or yearly basis.
            </p>
            <p>
                Here, the daily patterned events are depicted in blue color, weekly events are differentiated with green color, monthly events
                are depicted in orange color and the yearly event is depicted in the all-day section with another green shade
                for reference.
            </p>
             <p>
                This sample illustrates the usage of different types of events such as normal, spanned and all-day. Here, the Scheduler acts
                as a leave planner for an employee to plan his upcoming leaves as well as to keep track of his previously
                taken time-offs and leaves.
            </p>
            <p>
                Scheduler requires only the <code>startTime</code> and <code>endTime</code> fields as mandatory to be mapped from the dataSource. 
                The Scheduler events can be categorized into 3 types based on its time range and all-day type.
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
                        The events that has its start and end time duration on the same date. 
                    </td>
                </tr>
                <tr>
                    <td style="padding:4px 0;">Spanned events</td>
                    <td>
                        The events on which its start and end time spans over multiple days and usually displays together with all-day events.
                    </td>
                </tr>
                <tr>
                    <td style="padding:4px 0;">All-day events</td>
                    <td>
                        The events that are defined as all-day in its event object by setting
                        <code>isAllDay</code> to true. It usually renders at the date header section of the Scheduler where
                        no time-cells are present.
                    </td>
                </tr>
            </table>
        </div>       
    </div>
</template>
<script>
    import Vue from "vue";
    import { recurrenceData } from './datasource';
    import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, Month, EventRenderedArgs, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    Vue.use(CheckBoxPlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], recurrenceData, null, true) },
                selectedDate: new Date(2018, 1, 20),
                currentView: 'Week'
            }
        },
        provide: {
            schedule: [Day, Week, Month, Resize, DragAndDrop]
        },
        methods: {
            oneventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            },            
            onChange: function (args) {
                this.eventSettings = {
                    editFollowingEvents: args.checked
                };
            }
        }
    });

</script>