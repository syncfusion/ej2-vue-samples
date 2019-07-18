<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered"></ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo shows the way of binding an array of JavaScript objects (local JSON datasource) to Schedule.
            </p>
        </div>
        <div id="description">
            <p>
                Scheduler can be bound either to local or remote data services which will load the data by default on demand to reduce the
                data transfer and load time. In this sample, the
                <code>dataSource</code> property available within the
                <code>eventSettings</code> needs to be assigned with the valid local JSON data.
            </p>
            <p>The <code>eventRendered</code> event is used to customize the events. In this sample, background color of the event is changed based on the custom field 'CategoryColor'</p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { zooEventsData } from './datasource';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], zooEventsData, null, true) },
                selectedDate: new Date(2018, 1, 15),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            oneventRendered: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                if (scheduleObj.ej2Instances.currentView === 'Agenda') {
                    (args.element.firstChild).style.borderLeftColor = categoryColor;
                } else {
                    args.element.style.backgroundColor = categoryColor;
                }

            }
        }
    });

</script>