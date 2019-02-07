<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :readonly="readonly" :dataBinding="dataBinding"></ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>This example illustrates how to load and integrate events data from the Google Calendar into our Scheduler.
            </p>
        </div>
        <div id="description">
            <p> In this example, we have assigned our custom created Google Calendar url to the DataManager and assigned the
                same to the Scheduler <code>dataSource</code> within the <code>eventSettings</code> API. Since the events data retrieved from the
                Google Calendar will be in its own object format, therefore it needs to be resolved manually within the
                Scheduler’s <code>dataBinding</code> event. Within this <code>dataBinding</code> event, the event fields needs to be mapped properly
                and then assigned to the result.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    var calendarId = '5105trob9dasha31vuqek6qgp0@group.calendar.google.com';
    var publicKey = 'AIzaSyD76zjMDsL_jkenM5AAnNsORypS1Icuqxg';
    var dataManger = new DataManager({
        url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });

    export default Vue.extend({
        data: function () {
            return {
                selectedDate: new Date(2018, 10, 14),
                readonly: true,
                eventSettings: { dataSource: dataManger },
            }
        },
        methods: {
            dataBinding: function (e) {
               var items = e.result.items;
               var scheduleData = [];
               if (items.length > 0) {
                    for (var i = 0; i < items.length; i++) {
                        var event = items[i];
                        var when = event.start.dateTime;
                        var start = event.start.dateTime;
                        var end = event.end.dateTime;
                        if (!when) {
                            when = event.start.date;
                            start = event.start.date;
                            end = event.end.date;
                        }
                        scheduleData.push({
                            Id: event.id,
                            Subject: event.summary,
                            StartTime: new Date(start),
                            EndTime: new Date(end),
                            IsAllDay: !event.start.dateTime
                        });
                    }
                }
                e.result = scheduleData;
            },
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    });

</script>