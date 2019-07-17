<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" width='100%' height='650px' :eventSettings="eventSettings" :currentView="currentView"
                :popupOpen="onPopupOpen" :actionBegin="onActionBegin" :dragStop="onDragStop" :resizeStop="onResizeStop">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo showcases how to make specific events on the Scheduler to be displayed in a read-only mode. The read-only events
                can be simply viewed and prevented from undergoing any edit actions.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the events that has occurred on the past hours from the current time are made as read-only and
                the CRUD actions has been prevented on it. This has been done by setting <code>true</code> to the <code>IsReadonly</code> field of
                past events. By doing so, the <code>aria-readonly</code> attribute gets added into the event element and differentiate it
                from the other normal events.
            </p>
        </div>
    </div>
</template>
<style>
    .e-schedule .e-read-only {
        opacity: .8;
    }
</style>
<script>
    import Vue from "vue";
    import { readonlyEventsData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], readonlyEventsData, null, true) },
                currentView: 'Week'
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Resize, DragAndDrop]
        },
        methods: {
            onPopupOpen: function (args) {
                if ((!args.target.classList.contains('e-appointment') && (args.type === 'QuickInfo')) || (args.type === 'Editor')) {
                    args.cancel = this.onEventCheck(args);
                }
            },
            onActionBegin(args) {
                if ((args.requestType === 'eventCreate') || args.requestType === 'eventChange') {
                    args.cancel = this.onEventCheck(args);
                }
            },
            onDragStop(args) {
                args.cancel = this.onEventCheck(args);
            },
            onResizeStop(args) {
                args.cancel = this.onEventCheck(args);
            },
            onEventCheck(args) {
                var eventObj = args.data instanceof Array ? args.data[0] : args.data;
                return (eventObj.StartTime < new Date());
            }
        }
    });

</script>