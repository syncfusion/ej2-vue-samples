<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView'
                    :eventRendered="oneventRendered" :showWeekend='showWeekend' :workDays='[1, 3, 4, 5]'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
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
                                Working Days
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div class="multi-prop">
                                <div>
                                    <ejs-multiselect id='multiselect-checkbox' :dataSource='workDaysData' :fields='workDaysFields' :value='workDaysValue' :mode='mode'
                                        popupWidth="180px" showDropDownIcon='true' :change="onMultiSelectChange"></ejs-multiselect>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>
                                Non-Working Days
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-button class="e-active" isToggle="true" v-on:click.native="btnClick">Show</ejs-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This demo depicts the way to show or hide the weekend days of a week on Schedule. The days whichever not specified in working
                days collections will be taken into consideration as weekend days.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the
                <code>showWeekend</code> property is used either to show or hide the weekend days of a week and it is not
                applicable on
                <code>workweek</code> view. By default, it is set to
                <code>true</code>. The days which are not a part of the working days collection of a Scheduler are usually
                considered as weekend days here.
            </p>
            <p>
                Here, the working days are defined as
                <code>[1, 3, 4, 5]</code> on Schedule. Therefore, the remaining days (0, 2, 6 – Sunday, Tuesday and Saturday)
                are considered as weekend days and will be hidden from the views as the
                <code>showWeekend</code> property is set to false.
            </p>
        </div>
    </div>
</template>
<style>
    .multi-prop div {
        padding-left: 0;
        padding-top: 0;
    }
</style>
<script>
    import Vue from "vue";
    import { employeeEventData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, Month, TimelineViews, TimelineMonth, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
    import { MultiSelectPlugin, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";

    Vue.use(MultiSelectPlugin);
    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], employeeEventData, null, true) },
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Week',
                mode: 'CheckBox',
                workDaysData: [
                    { Name: 'Sunday', Value: '0' },
                    { Name: 'Monday', Value: '1' },
                    { Name: 'Tuesday', Value: '2' },
                    { Name: 'Wednesday', Value: '3' },
                    { Name: 'Thursday', Value: '4' },
                    { Name: 'Friday', Value: '5' },
                    { Name: 'Saturday', Value: '6' }
                ],
                workDaysFields: { text: 'Name', value: 'Value' },
                workDaysValue: ['1', '3', '4', '5'],
                showWeekend: false
            }
        },
        provide: {
            schedule: [Day, Week, Month, TimelineViews, TimelineMonth, Resize, DragAndDrop],
            multiselect: [CheckBoxSelection]
        },
        methods: {
            onMultiSelectChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let value = (args.value).slice(0).map(Number).sort();
                scheduleObj.workDays = value.length === 0 ? [0] : value;
                scheduleObj.dataBind();
            },

            btnClick: function (event) {
                let scheduleObj = this.$refs.ScheduleObj;
                var toggleBtn = event.target.ej2_instances[0];
                if (toggleBtn.element.classList.contains("e-active")) {
                    toggleBtn.content = "Hide";
                    scheduleObj.showWeekend = true;
                } else {
                    toggleBtn.content = "Show";
                    scheduleObj.showWeekend = false;
                }
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