<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" width="100%" height="650px" :selectedDate='selectedDate' :currentView='currentView' :timeScale="timeScale" :workHours='workHours' :eventSettings='eventSettings'
                    :group='group' :resourceHeaderTemplate ='resourceHeaderTemplate' :popupOpen="onPopupOpen" :eventRendered='onEventRendered'
                    :actionBegin="onActionBegin" :renderCell="onRenderCell">
                    <e-views>
                        <e-view option="TimelineDay"></e-view>
                        <e-view option="TimelineWeek"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='RoomId' title='Room Type' name='MeetingRoom' allowMultiple=true :dataSource='meetingRoomDataSource' textField='text'
                            idField='id' colorField='color'>
                        </e-resource>
                    </e-resources>    
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo showcases the scheduler that lists out the meeting rooms of an office and its availability. The slots which are
                already booked and the lunch time can’t be allowed for any new bookings. Also, the existing bookings which were made
                on past dates were not allowed to edit as well as the new bookings on those past dates will also be not allowed.
            </p>
        </div>
        <div id="description">
            <p>
                Here, the timeline view is grouped with single level of resources by making use of the
                <code>group</code> property. Also, the lunch time blocking is done by block event. The event editor and popup is prevented to open on those blocked time slots as well as on the past bookings
                by making use of the
                <code>popupOpen</code> event. The
                <code>eventRendered</code> event is utilized in order to make the bookings done on past dates as read-only. To block more than one bookings
                per slot, the
                <code>isSlotAvailable</code> method is used. Also, the resource header displayed at the left panel is customized to render as columns with the
                help of
                <code>resourceHeaderTemplate</code>. The tooltip for resource header is customized by defining the
                <code>headerTooltipTemplate</code> property within the
                <code>group</code> API.
            </p>
            <p>
                <b>Note:</b> The dates which lies beyond the current date set to scheduler through
                <code>selectedDate</code> property is considered as the past dates here in this sample.
            </p>
        </div>
    </div>
</template>
<style>
    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td {
        vertical-align: bottom;
    }

    .schedule-vue-sample .room-scheduler.e-schedule.e-device .e-timeline-view .e-resource-left-td {
        width: 75px;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td {
        width: 240px;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text {
        display: flex;
        font-weight: 500;
        padding: 0;
        height: 36px;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #0000001f;
        border-style: solid;
        border-width: 1px 1px 0 0;
        flex: 0 0 33.3%;
        font-weight: 500;
        height: 36px;
        line-height: 36px;
        padding-left: 5px;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div:last-child {
        border-right: 0;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-block-appointment {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .bootstrap4 .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text,
    .bootstrap5 .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text,
    .bootstrap5-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text {
        height: 37px;
    }

    .bootstrap4 .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        height: 37px;
        line-height: 37px;
    }

    .material3 .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text,
    .material3-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text {
        height: 40px;
    }

    .material3 .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div,
    .material3-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        height: 40px;
        line-height: 40px;
    }

    .material3 .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div,
    .material3 .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #c4c7c5;
    }

    .material3-dark .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div,
    .material3-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #444746;
    }

    .material-dark .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div,
    .material-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #616161;
    }

    .fabric-dark .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div,
    .fabric-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #414040;
    }

    .fluent-dark .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div,
    .fluent-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #292827;
    }

    .bootstrap-dark .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div,
    .bootstrap-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #505050;
    }

    .bootstrap5-dark .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div,
    .bootstrap5-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #444c54;
    }

    .tailwind-dark .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div {
        border-color: #4b5563;
    }

    .highcontrast .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div {
        border-color: #969696;
    }

    .bootstrap4.e-bigger .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text,
    .bootstrap5.e-bigger .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text {
        height: 39px;
    }

    .bootstrap4.e-bigger .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        height: 39px;
        line-height: 39px;
    }

    .tailwind .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text,
    .tailwind-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text {
        height: 39px;
    }

    .tailwind .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div,
    .tailwind-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        height: 39px;
        line-height: 39px;
    }

    .tailwind .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        background-color: #f3f4f6;
        border-color: #e5e7eb;
    }

    .tailwind-dark .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        background-color: #374151;
        border-color: #4b5563;
    }

    .tailwind.e-bigger .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text,
    .tailwind-dark.e-bigger .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text {
        height: 40px;
    }

    .tailwind.e-bigger .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div,
    .tailwind-dark.e-bigger .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        height: 40px;
        line-height: 40px;
    }

    .highcontrast .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text {
        height: 36px;
    }

    .highcontrast .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div {
        border-color: #969696;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .template-wrap {
        display: flex;
        height: 100%;
        text-align: left;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .template-wrap>div {
        border-right: 1px solid #0000001f;
        flex: 0 0 33.3%;
        font-weight: 500;
        line-height: 57px;
        overflow: hidden;
        padding-left: 5px;
        text-overflow: ellipsis;
    }

    .material3 .schedule-vue-sample .room-scheduler.e-schedule .template-wrap>div,
    .material3-dark .schedule-vue-sample .room-scheduler.e-schedule .template-wrap>div {
        line-height: 83px;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .template-wrap>div:last-child {
        border-right: 0;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-cells.e-child-node,
    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-month-view .e-resource-cells.e-child-node {
        padding: 0 !important;
    }

    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-date-header-wrap table col,
    .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-content-wrap table col {
        width: 100px;
    } 
    
    .schedule-vue-sample .room-scheduler.e-schedule .e-read-only {
        opacity: .8;
    }

    @media (max-width: 550px) {
        .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td {
            width: 100px;
        }
        .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div,
        .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div {
            flex: 0 0 100%;
        }
        .schedule-vue-sample .room-scheduler.e-schedule .e-resource-cells .template-wrap>div:first-child {
            border-right: 0;
        }
        .schedule-vue-sample .room-scheduler.e-schedule .e-timeline-view .e-resource-left-td .e-resource-text>div:first-child {
            border-right: 0;
        }
        .schedule-vue-sample .room-scheduler.e-schedule .room-type,
        .schedule-vue-sample .room-scheduler.e-schedule .room-capacity {
            display: none;
        }
    }
</style>

<script>
    import Vue from "vue";
    import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
    import { roomData } from './datasource';
    import { SchedulePlugin, TimelineViews, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    var resourceHeaderVue = Vue.component("resourceHeader", {
        template: '<div class="template-wrap"><div class="room-name">{{data.resourceData.text}}</div>'+
        '<div class="room-type">{{data.resourceData.type}}</div>'+
        '<div class="room-capacity">{{data.resourceData.capacity}}</div></div>',
        data() {
            return {
                data: {}
            };
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                cssClass: 'room-scheduler',
                eventSettings: {
                    dataSource: extend([], roomData, null, true),
                    fields: {
                        id: 'Id',
                        subject: { title: 'Summary', name: 'Subject' },
                        location: { title: 'Location', name: 'Location' },
                        description: { title: 'Comments', name: 'Description' },
                        startTime: { title: 'From', name: 'StartTime' },
                        endTime: { title: 'To', name: 'EndTime' }
                    }
                },
                selectedDate: new Date(2021, 7, 2),
                currentView: 'TimelineWeek',
                workHours: { start: '08:00', end: '18:00' },
                timeScale: { interval: 60, slotCount: 1 },
                resourceHeaderTemplate: function (e) {
                    return {
                        template: resourceHeaderVue
                    };
                },
                group: {
                    enableCompactView: false,
                    resources: ['MeetingRoom']
                },
                meetingRoomDataSource: [
                    { text: 'Jammy', id: 1, color: '#ea7a57', capacity: 20, type: 'Conference' },
                    { text: 'Tweety', id: 2, color: '#7fa900', capacity: 7, type: 'Cabin' },
                    { text: 'Nestle', id: 3, color: '#5978ee', capacity: 5, type: 'Cabin' },
                    { text: 'Phoenix', id: 4, color: '#fec200', capacity: 15, type: 'Conference' },
                    { text: 'Mission', id: 5, color: '#df5286', capacity: 25, type: 'Conference' },
                    { text: 'Hangout', id: 6, color: '#00bdae', capacity: 10, type: 'Cabin' },
                    { text: 'Rick Roll', id: 7, color: '#865fcf', capacity: 20, type: 'Conference' },
                    { text: 'Rainbow', id: 8, color: '#1aaa55', capacity: 8, type: 'Cabin' },
                    { text: 'Swarm', id: 9, color: '#df5286', capacity: 30, type: 'Conference' },
                    { text: 'Photogenic', id: 10, color: '#710193', capacity: 25, type: 'Conference' }
                ],
            }
        },
        provide: {
            schedule: [TimelineViews, Resize, DragAndDrop]
        },
        methods: {
            isReadOnly: function(endDate) {
                return (endDate < new Date(2021, 6, 31, 0, 0));
            },
            onPopupOpen: function (args) {
                let data = args.data;
                if (args.type === 'QuickInfo' || args.type === 'Editor' || args.type === 'RecurrenceAlert' || args.type === 'DeleteAlert') {
                    let target = (args.type === 'RecurrenceAlert' ||
                        args.type === 'DeleteAlert') ? args.element[0] : args.target;
                    if (!isNullOrUndefined(target) && target.classList.contains('e-work-cells')) {
                        let scheduleObj = this.$refs.ScheduleObj;
                        if ((target.classList.contains('e-read-only-cells')) || (!scheduleObj.isSlotAvailable(data))) {
                            args.cancel = true;
                        }
                    } else if (!isNullOrUndefined(target) && target.classList.contains('e-appointment') &&
                        (this.isReadOnly(data.EndTime))) {
                        args.cancel = true;
                    }
                }
            },
            onRenderCell: function (args) {
                if (args.element.classList.contains('e-work-cells')) {
                    if (args.date < new Date(2021, 6, 31, 0, 0)) {
                        args.element.setAttribute('aria-readonly', 'true');
                        args.element.classList.add('e-read-only-cells');
                    }
                }
                if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td')) {
                    let target = args.element.querySelector('.e-resource-text');
                    target.innerHTML = '<div class="name">Rooms</div><div class="type">Type</div><div class="capacity">Capacity</div>';
                }
            },
            onEventRendered: function (args) {
                if (this.isReadOnly(args.data.EndTime)) {
                    args.element.setAttribute('aria-readonly', 'true');
                    args.element.classList.add('e-read-only');
                }
            },
            onActionBegin: function (args) {
                if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
                    let data;
                    let scheduleObj = this.$refs.ScheduleObj;
                    if (args.requestType === 'eventCreate') {
                        data = args.data[0];
                    } else if (args.requestType === 'eventChange') {
                        data = args.data;
                    }
                    if (!scheduleObj.isSlotAvailable(data)) {
                        args.cancel = true;
                    }
                }
            }
        }
    });
</script>