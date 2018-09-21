<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" width='100%' height='650px' :eventSettings="eventSettings" :currentView="currentView" :eventRendered="onEventRendered"
                    :eventClick="onEventClick" :popupOpen="onPopupOpen" :resizeStart="onResizeStart" :dragStart="onDragStart">
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
                This demo showcases how to make specific events on the Schedule to be displayed in a read-only mode. The read-only events
                can be simply viewed and prevented from undergoing any edit actions.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the events that has occurred on the past hours from the current time are made as read-only and the CRUD actions
                has been prevented on it. Also, the way to make specific events as read-only regardless of time has been
                done by adding an additional field
                <code>ReadOnly</code> to the event object to hold the value for it either as true or false.
            </p>
            <p>
                By checking these two conditions, the events are marked as read-only in this sample and also, visually differentiated the
                shade of the readonly events by setting CSS style and
                <code>aria-readonly</code> attribute to it within the
                <code>eventRendered</code> event which gets triggered before every event rendering on the Schedule user interface.
            </p>
            <p>
                The event editor is prevented to open on these read-only events by setting
                <code>args.cancel = true</code> within the
                <code>popupOpen</code> event which checks for the condition whether the popup type is
                <code>editor</code> and the event is readonly.
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
            isReadOnly: function (dataObj) {
                let data = dataObj;
                return data.ReadOnly || (data.EndTime < new Date());
            },

            onEventClick: function (args) {
                if ((args.element).classList.contains('e-read-only')) {
                    args.cancel = true;
                }
            },
            onPopupOpen: function (args) {
                if (args.type === 'Editor' && this.isReadOnly(args.data)) {
                    args.cancel = true;
                }
            },
            onEventRendered: function (args) {
                if (this.isReadOnly(args.data)) {
                    args.element.setAttribute('aria-readonly', 'true');
                    args.element.classList.add('e-read-only');
                }
            },
            onResizeStart: function (args) {
                if (args.element.classList.contains('e-read-only')) {
                    args.cancel = true;
                }
            },
            onDragStart: function (args) {
                if (args.element.classList.contains('e-read-only')) {
                    args.cancel = true;
                }
            }
        }
    });

</script>