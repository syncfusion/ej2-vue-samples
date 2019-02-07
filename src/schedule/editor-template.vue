<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" width='100%' height='650px' :selectedDate="selectedDate" :eventSettings="eventSettings" :actionBegin="onActionBegin"
                    :popupOpen="onPopupOpen" :eventRendered="onEventRendered" :showQuickInfo="showQuickInfo" :editorTemplate='editorTemplate'>
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
            <p>This demo showcases the way of customizing the look of events that are displayed on Schedule. Any kind of text,
                images and links can be added to customize the look of the events. Here, the webinar sessions on specific
                topic that are scheduled on respective week days have been displayed on Scheduler across its respective time
                duration.
            </p>
        </div>

        <div id="description">
            <p>
                With the usage of template, the user can format and change the default appearance of the events by making use of the
                <code>template</code> option which is available within the
                <code>eventSettings</code> property. Here, the HTML template design is compiled and then the resultant output
                will be displayed directly on the events.
            </p>
        </div>

    </div>
</template>
<style>
    .custom-event-editor .e-textlabel {
        padding-right: 15px;
        text-align: right;
    }

    .custom-event-editor td {
        padding: 7px;
        padding-right: 16px;
    }
</style>
<script>
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { extend } from '@syncfusion/ej2-base';
    import { DropDownList } from '@syncfusion/ej2-dropdowns';
    import { DateTimePicker } from '@syncfusion/ej2-calendars';
    import { PopupOpenEventArgs, EventRenderedArgs } from '@syncfusion/ej2-vue-schedule';
    import { doctorsEventData } from './datasource';
    import editortemplate from "./custom-editor.vue";
    Vue.use(SchedulePlugin);

    export default Vue.extend({
        data: function () {
            return {
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Week',
                eventSettings: { dataSource: extend([], doctorsEventData, null, true) },
                showQuickInfo: false,
                editorTemplate: function () {
                    return { template: editortemplate }
                },
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Resize, DragAndDrop]
        },
        methods: {
            onPopupOpen: function (args) {
                if (args.type === 'Editor') {
                     let statusElement = args.element.querySelector('#EventType');
                     statusElement.setAttribute('name', 'EventType');
                }
            },
            onEventRendered: function (args) {
                switch (args.data.EventType) {
                    case 'Requested':
                        (args.element).style.backgroundColor = '#F57F17';
                        break;
                    case 'Confirmed':
                        (args.element).style.backgroundColor = '#7fa900';
                        break;
                    case 'New':
                        (args.element).style.backgroundColor = '#8e24aa';
                        break;
                }
            },
            onActionBegin: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
                    let data;
                    if (args.requestType === 'eventCreate') {
                        data = args.data[0];
                    } else if (args.requestType === 'eventChange') {
                        data = args.data;
                    }
                    if (!scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
                        args.cancel = true;
                    }
                }

            }
        }
    });

</script>