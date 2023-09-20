<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule height="550px" :eventSettings='eventSettings' :selectedDate='selectedDate' :actionComplete="onActionComplete" :navigating="onNavigating">
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo showcases an event reminder notification that will be displayed after 1 minute of sample getting loaded
                and data has been loaded from <code>UTC</code> timezone.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, the <code>Toast</code> component is used to show the reminder notification. The reminder
                notification will be displayed after 1 minute. We can also customize the notification interval as per our
                needs.
            </p>
        </div>
    </div>
</template>
<script>
    import { HubConnectionBuilder } from "@microsoft/signalr";
    import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { scheduleData } from './datasource';

    var connection;    
    var isHubConnected = false;

    export default {
        components: {
          'ejs-schedule': ScheduleComponent
        },
        data: function () {
            return {
                eventSettings: { dataSource: scheduleData },
                selectedDate: new Date(2021, 0, 10),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        created() {
            var url = 'https://ej2.syncfusion.com/aspnetcore/scheduleHub/';
            connection = new HubConnectionBuilder().withUrl(url, { withCredentials: false }).withAutomaticReconnect().build();
            connection.on("ReceiveData", (action, data) => {
                var scheduleObj = document.querySelector('.e-schedule').ej2_instances[0];
                if (action == "view") {
                    scheduleObj.currentView = data;
                }
                if (action === "eventCreated" || action === "eventChanged" || action === "eventRemoved") {
                    scheduleObj.eventSettings.dataSource = data;
                }
            });

            connection.start().then(() => { isHubConnected = true; }).catch(() => { isHubConnected = false; });
        },
        beforeUnmount() {
            if (connection) {
                connection.stop().then(() => { isHubConnected = false; }).catch((err) => { console.log(err); });
            }
        },
        methods: {
            onActionComplete: function (args) {
                if (isHubConnected && (args.requestType === "eventCreated" || args.requestType === "eventChanged" || args.requestType === "eventRemoved")) {
                    var scheduleObj = document.querySelector('.e-schedule').ej2_instances[0];
                    connection.invoke("SendData", args.requestType, scheduleObj.eventSettings.dataSource);
                }
            },
            onNavigating: function (args) {
                if (args.action == "view" && isHubConnected) {
                    connection.invoke("SendData", args.action, args.currentView);
                }
            }
        }
    }
</script>