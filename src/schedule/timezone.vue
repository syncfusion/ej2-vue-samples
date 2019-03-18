<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule height="650px" id="Schedule" ref="ScheduleObj" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered"
                    :workHours="workHours" :timezone="dropDownValue"></ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>
                                Timezone
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-dropdownlist id='scheduletimezone' :value='dropDownValue' :dataSource='timezoneData' popupWidth='250' :change='onTimezoneDropDownChange'
                                    :fields='fields'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This demo visualizes the 2018 FIFA football match Scheduler which is depicted as events here. The timings of each event are
                associated with the timezone of the match location where it will be held. When the Scheduler time zone changes,
                the events in it displays according to the selected timezone's offset time difference.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the
                <code>timezone</code> of Scheduler is set to UTC and each events on it holds different
                <code>startTimezone</code> and
                <code>endTimezone</code> values, therefore the event timings will be converted based on timezone assigned
                to Scheduler and will be displayed appropriately in UTC timings.
            </p>
            <p>
                When the user selects different timezone value listed out in a dropdown on properties panel, Scheduler will display the events
                accordingly to the selected timezone value as the selected timezone will be assigned to Schedule
                <code>timezone</code> property.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { fifaEventsData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { Timezone } from '@syncfusion/ej2-schedule';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
    Vue.use(SchedulePlugin);
    Vue.use(DropDownListPlugin);


    let timezone = new Timezone();
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        Timezone.prototype.offset = function (date, timezone) {
            return moment.tz.zone(timezone).utcOffset(date.getTime());
        };
    }
    var data = extend([], fifaEventsData, null, true);
    // Here remove the local offset from events
    for (var i = 0; i < data.length; i++) {
        data[i].StartTime = timezone.removeLocalOffset(data[i].StartTime);
        data[i].EndTime = timezone.removeLocalOffset(data[i].EndTime);
    }

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: data },
                selectedDate: new Date(2018, 5, 20),
                workHours: { start: '11:00' },
                timezoneData: [
                    { timezone: 'America/New_York', text: '(UTC-05:00) Eastern Time' },
                    { timezone: 'UTC', text: 'UTC' },
                    { timezone: 'Europe/Moscow', text: '(UTC+03:00) Moscow+00 - Moscow' },
                    { timezone: 'Asia/Kolkata', text: '(UTC+05:30) India Standard Time' },
                    { timezone: 'Australia/Perth', text: '(UTC+08:00) Western Time - Pert' }
                ],
                fields: { text: 'text', value: 'timezone' },
                dropDownValue: 'UTC',
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
            },
            onTimezoneDropDownChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.timezone = args.value;
            }
        },
    });

</script>