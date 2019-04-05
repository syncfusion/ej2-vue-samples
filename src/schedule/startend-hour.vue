<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView'
                    :eventRendered="oneventRendered" :workHours="workHours" :startHour="startHour" :endHour="endHour">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="TimelineDay"></e-view>
                        <e-view option="TimelineWeek"></e-view>
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
                                Start Hour
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-timepicker id="startTime" :value="startdate" format='HH:mm'>
                                </ejs-timepicker>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>
                                End Hour
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-timepicker id="endTime" :value="enddate" format='HH:mm'></ejs-timepicker>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td>
                            <div>
                                <ejs-button id='submit' v-on:click.native="onSubmit">Submit</ejs-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This demo depicts how to restrict the start and end hours of Schedule, thus limiting it to display only the given hour range.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the Scheduler is made to display from 8 AM to 8 PM and the rest of the hours are hidden, as it is restricted
                to start from
                <code>08:00</code> hours and end on
                <code>20:00</code> hours by setting to
                <code>startHour</code> and
                <code>endHour</code> properties respectively.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { employeeEventData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, TimelineViews, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { TimePickerPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-calendars';
    import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);
    Vue.use(TimePickerPlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], employeeEventData, null, true) },
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Week',
                workHours: { highlight: false },
                startdate: new Date(2000, 0, 1, 8),
                enddate: new Date(2000, 0, 1, 20),
                startHour: '08:00',
                endHour: '20:00'
            }
        },
        provide: {
            schedule: [Day, Week, TimelineViews, Resize, DragAndDrop]
        },
        methods: {
            onSubmit: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                let start = document.getElementById('startTime');
                let end = document.getElementById('endTime');
                scheduleObj.startHour = start.value;
                scheduleObj.endHour = end.value;
                scheduleObj.dataBind();
            },
            oneventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                    args.element.style.backgroundColor = categoryColor;
                }
        }
    });

</script>