<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper schedule-wrapper">
                <ejs-schedule id='Schedule' height="510px" :selectedDate='selectedDate' :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option="MonthAgenda"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo showcases the layout of Month Agenda view and its working.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the active view of Scheduler is set to
                <code>MonthAgenda</code> and no other view options are provided to
                <code>views</code> property. This view is designed by considering the combination of both the calendar and
                agenda layout together, so that whenever a particular date is selected – the events belonging to that date
                will be displayed on the event section at the bottom. Also, the dates which holds one or more events are
                marked with a round indicator below that date.
            </p>
            <p>
                On double clicking the date cells, the user can open the default event editor to create events. The events displayed on this
                view at the bottom section can be edited or deleted either through popup options or edit event editor.
            </p>
            <p>
                <strong>Module Injection</strong>
            </p>
            <p>
                To work with Month Agenda view on Scheduler – it is necessary to inject the <code>MonthAgenda</code> module into the <code>provide</code> section.
            </p>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    @media (min-width: 481px) {
        .schedule-wrapper {
            margin: 0 25%;
        }
    }
</style>
<!-- custom code end -->
<script>
    import Vue from "vue";
    import { fifaEventsData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, MonthAgenda, EventRenderedArgs, View } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], fifaEventsData, null, true) },
                selectedDate: new Date(2018, 5, 20),
            }
        },
        provide: {
            schedule: [MonthAgenda]
        },
        methods: {
        }
    });

</script>