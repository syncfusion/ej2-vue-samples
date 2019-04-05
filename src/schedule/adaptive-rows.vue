<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" width="100%" height="650px" :rowAutoHeight="true" :selectedDate='selectedDate' :currentView='currentView' :eventSettings='eventSettings'
                    :group='group'>
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
        <div class="col-lg-3 property-section">
            <div id="property" class="property-panel-table" title="Properties">
                <table id="property" title="Properties" style="width: 100%">
                    <tbody>                        
                        <tr style="height: 50px">
                            <td style="width: 100%">
                                <ejs-checkbox label="Row Auto Height" :checked="true" :change="onChange"></ejs-checkbox>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="action-description">
            <p>
                This example showcases how the work-cells of Scheduler auto-adjust its height based on the number of
        appointments present in those time ranges.
            </p>
        </div>

        <div id="description">
            <p>
                In this example, <code>rowAutoHeight</code> property is set as <code>true</code> to auto-adjust the height
        of work cells based
        on the number of appointments present in the same time ranges. Also, this functionality is applicable only on
        all the timeline views as well as on the calendar month view. When this option is disabled, the height of the
        work
        cells remains static and at the time of exceeding appointments count, the <code>+n more</code> text indicator
        will be
        shown at the bottom of the cells.
            </p>
        </div>
    </div>
</template>

<style>
    .adaptive-rows.e-schedule .e-timeline-view .e-resource-left-td {
        width: 120px;
    }
    .adaptive-rows.e-schedule .e-timeline-view .e-resource-text {
        padding-left: 20px;
    }
</style>
<script>
    import Vue from "vue";
    import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
    import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
    import { roomData } from './datasource';
    import { SchedulePlugin, TimelineViews, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    Vue.use(CheckBoxPlugin);

     export default Vue.extend({
        data: function () {
            return {
                cssClass: 'adaptive-rows',
                eventSettings: {
                    dataSource: extend([], roomData, null, true),
                    fields: {
                        id: 'Id',
                        subject: { name: 'Subject', title: 'Summary' },
                        location: { name: 'Location', title: 'Location' },
                        description: { name: 'Description', title: 'Comments' },
                        startTime: { name: 'StartTime', title: 'From' },
                        endTime: { name: 'EndTime', title: 'To' }
                    }
                },
                selectedDate: new Date(2018, 7, 1),
                currentView: 'TimelineWeek',
                group: {
                    enableCompactView: false,
                    resources: ['MeetingRoom']
                },
                meetingRoomDataSource: [
                    { text: 'Room A', id: 1, color: '#98AFC7' },
                    { text: 'Room B', id: 2, color: '#99c68e' },
                    { text: 'Room C', id: 3, color: '#C2B280' },
                    { text: 'Room D', id: 4, color: '#3090C7' },
                    { text: 'Room E', id: 5, color: '#95b9' },
                    { text: 'Room F', id: 6, color: '#95b9c7' },
                    { text: 'Room G', id: 7, color: '#deb887' },
                    { text: 'Room H', id: 8, color: '#3090C7' },
                    { text: 'Room I', id: 9, color: '#98AFC7' },
                    { text: 'Room J', id: 10, color: '#778899' }
                ],
            }
        },
        provide: {
            schedule: [TimelineViews, Resize, DragAndDrop]
        },
        methods: {           
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.rowAutoHeight = args.checked;               
            }
        }
    });

</script>