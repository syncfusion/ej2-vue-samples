<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="onEventRendered"
                    :dateHeaderTemplate="dateHeaderTemplate" :cssClass='cssClass' :renderCell="onRenderCell">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample illustrates the usage of different types of events such as normal, spanned and all-day. Here, the Scheduler acts
                as a leave planner for an employee to plan his upcoming leaves as well as to keep track of his previously
                taken time-offs and leaves.
            </p>
        </div>

        <div id="description">
            <p>
                Scheduler requires only the
                <code>startTime</code> and
                <code>endTime</code> fields as mandatory to be mapped from datasource and provided with proper datetime values
                to display the normal events in it. The normal events can be categorized into 3 types based on its time range
                and all-day type.
            </p>
            <table style="width:100%">
                <tr>
                    <th style="width:100px">
                        <strong>Event</strong>
                    </th>
                    <th>
                        <strong>Description</strong>
                    </th>
                </tr>
                <tr>
                    <td style="padding:4px 0;">Normal events</td>
                    <td>
                        The events that has its start and end time duration on the same date. These events are depicted in green color in the above
                        sample.
                    </td>
                </tr>
                <tr>
                    <td style="padding:4px 0;">Spanned events</td>
                    <td>
                        The events on which its start and end time spans over multiple days and usually displays together with all-day events. These
                        events are depicted in orange color which can be seen by navigating to the next date period and are
                        depicted in orange color.
                    </td>
                </tr>
                <tr>
                    <td style="padding:4px 0;">All-day events</td>
                    <td>
                        The events that are defined as all-day in its event object by setting
                        <code>isAllDay</code> to true. It usually renders at the date header section of the Scheduler where
                        no time-cells are present. These events are depicted in purple color.
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style>
    .schedule-date-header-template.e-schedule .e-vertical-view .e-header-cells,
    .schedule-date-header-template.e-schedule .e-timeline-month-view .e-header-cells {
        padding: 0;
        text-align: center !important;
    }

    .schedule-date-header-template.e-schedule .date-text {
        font-size: 14px;
    }

    .schedule-date-header-template.e-schedule.e-device .date-text {
        font-size: 12px;
    }

    .schedule-date-header-template.e-schedule .weather-image {
        width: 20px;
        height: 20px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .schedule-date-header-template.e-schedule .weather-text {
        font-size: 11px;
    }

    .schedule-date-header-template.e-schedule .e-month-view .weather-image {
        float: right;
        margin: -20px 2px 0 0;
        width: 20px;
        height: 20px;
    }
</style>
<script>
    import Vue from "vue";
    import { extend, Internationalization } from '@syncfusion/ej2-base';
    import { scheduleData } from './datasource';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, TimelineMonth, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";

    Vue.use(SchedulePlugin);

    var instance = new Internationalization();
    var dateHeaderTemplate = Vue.component("date-header-template", {
        template: '<div><div class="date-text">{{getDateHeaderText(data.date)}}</div><div v-html=getWeather(data.date)></div></div>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
            getDateHeaderText: function (value) {
                return instance.formatDate(value, { skeleton: 'Ed' });
            },
            getWeather: function (value) {
                switch (value.getDay()) {
                    case 0:
                        return '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/><div class="weather-text">25°C</div>';
                    case 1:
                        return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">18°C</div>';
                    case 2:
                        return '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/><div class="weather-text">10°C</div>';
                    case 3:
                        return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">16°C</div>';
                    case 4:
                        return '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/><div class="weather-text">8°C</div>';
                    case 5:
                        return '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/><div class="weather-text">27°C</div>';
                    case 6:
                        return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">17°C</div>';
                    default:
                        return null;
                }
            }
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                cssClass: 'schedule-date-header-template',
                selectedDate: new Date(2019, 0, 10),
                dateHeaderTemplate: function () {
                    return { template: dateHeaderTemplate }
                },
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, TimelineMonth, Resize, DragAndDrop]
        },
        methods: {
            getWeather: function (value) {
                switch (value.getDay()) {
                    case 0:
                        return '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/><div class="weather-text">25°C</div>';
                    case 1:
                        return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">18°C</div>';
                    case 2:
                        return '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/><div class="weather-text">10°C</div>';
                    case 3:
                        return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">16°C</div>';
                    case 4:
                        return '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/><div class="weather-text">8°C</div>';
                    case 5:
                        return '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/><div class="weather-text">27°C</div>';
                    case 6:
                        return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/><div class="weather-text">17°C</div>';
                    default:
                        return null;
                }
            },
            onRenderCell: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                if (args.elementType === 'monthCells' && scheduleObj.ej2Instances.currentView === 'Month') {
                    let ele = document.createElement('div');
                    ele.innerHTML = this.getWeather(args.date);
                    (args.element).appendChild(ele.firstChild);
                }
            },
            onEventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            },
        }
    });

</script>