<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView'
                    :eventRendered="onEventRendered" :workHours="workHours" :workDays="workDays">
                    <e-views>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="TimelineWeek"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>
                                Work days
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-dropdownlist id="scheduleworkdays" :dataSource='workDaysData' :value='workDaysValue' :fields='workDaysFields' :change='changeWorkDays'
                                    popupWidth='180px'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>
                                First day of week
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-dropdownlist id="scheduledayofweek" :dataSource='dayOfWeekList' :value='dayOfWeekValue' :fields='dayOfWeekField' :change='changeDayofWeek'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This demo showcases how to set customized working days as well as first day of a week on Schedule.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the working days of a week can be set on Scheduler using the
                <code>workDays</code> property which accepts the collection of day indexes (from 0 to 6) of a week. By default,
                it is set to
                <code>[1, 2, 3, 4, 5]</code> and in this demo, it has been set to
                <code>[1, 3, 5]</code> which means that
                <code>Monday, Wednesday, Friday</code> is being set as working days of a week and is visually differentiated
                from non-working days. The working hours usually applies only on these given working days.
            </p>
            <p>
                The first day of the week can also be set on the Scheduler by making use of the
                <code>firstDayOfWeek</code> property, doing so which will make the Scheduler to start with that day.
            </p>
            <p>
                <strong>Note: </strong> Here, Sunday is always denoted as 0, Monday as 1 and so on.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { employeeEventData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Week, WorkWeek, Month, TimelineViews, TimelineMonth, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], employeeEventData, null, true) },
                selectedDate: new Date(2018, 1, 15),
                workHours: { start: '08:00' },
                currentView: 'WorkWeek',
                workDays: [1, 3, 5],
                workDaysData: [
                    { Id: '1,3,5', days: 'Mon, Wed, Fri' },
                    { Id: '1,2,3,4,5', days: 'Mon, Tue, Wed, Thu, Fri' },
                    { Id: '2,3,4,5', days: 'Tue, Wed, Thu, Fri' },
                    { Id: '4,5,6,1,2', days: 'Thu, Fri, Sat, Mon, Tue' }
                ],
                workDaysValue: '1,3,5',
                workDaysFields: { text: 'days', value: 'Id' },
                dayOfWeekList: [
                    { Id: '0', date: 'Sunday' },
                    { Id: '1', date: 'Monday' },
                    { Id: '2', date: 'Tuesday' },
                    { Id: '3', date: 'Wednesday' },
                    { Id: '4', date: 'Thursday' },
                    { Id: '5', date: 'Friday' },
                    { Id: '6', date: 'Saturday' }
                ],
                dayOfWeekValue: '0',
                dayOfWeekField: { text: 'date', value: 'Id' }
            }
        },
        provide: {
            schedule: [Week, WorkWeek, Month, TimelineViews, TimelineMonth, Resize, DragAndDrop]
        },
        methods: {
            changeDayofWeek: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.firstDayOfWeek = parseInt(args.value, 10);
                scheduleObj.dataBind();
            },

            changeWorkDays: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.workDays = args.value.toString().split(',').map(Number);
                scheduleObj.dataBind();
            },

            onEventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            }
        }
    });

</script>