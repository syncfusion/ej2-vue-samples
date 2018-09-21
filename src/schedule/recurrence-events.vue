<template>
    <div>
        <div class="col-md-12 control-section">
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

        <div id="action-description">
            <p>
                This demo showcases the schedule with recurring meetings handled by a top-level manager on a regular pattern.
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
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { recurrenceData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
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
                let scheduleObj = document.getElementById('Schedule');
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
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