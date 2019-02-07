<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView'
                    :eventRendered="oneventRendered" :workHours="workHours">
                    <e-views>
                        <e-view option="Day"></e-view>
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
                                Work Start
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
                                Work End
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
                This demo showcases how to set the required working hours on Scheduler, thus visually highlighting the cells underlying the
                given work hour range.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the work hours are set by using the
                <code>workHours</code> property and it usually applies only on the working days defined for the Scheduler.
                It can either be highlighted or not by defining the
                <code>highlight</code> option within the
                <code>workHours</code> property. The working hour range can be defined by making use of the
                <code>start</code> and
                <code>end</code> option available within the
                <code>workHours</code> property.
            </p>
            <p>
                To set discontinuous working hours on a day, then the default
                <code>workHours</code> on Scheduler needs to be disabled by setting false to
                <code>highlight</code> option within it. Then, make use of the
                <code>setWorkHours</code> method which accepts the days collection and the start & end hour values as parameters.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { employeeEventData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, TimelineViews, TimelineMonth, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
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
                workHours: { highlight: true, start: '08:00', end: '20:00' },
                startdate: new Date(2000, 0, 1, 8),
                enddate: new Date(2000, 0, 1, 20),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, TimelineViews, TimelineMonth, Resize, DragAndDrop]
        },
        methods: {
            onSubmit: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                let start = document.getElementById('startTime');
                let end = document.getElementById('endTime');
                scheduleObj.ej2Instances.workHours.start = start.value;
                scheduleObj.ej2Instances.workHours.end = end.value;
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