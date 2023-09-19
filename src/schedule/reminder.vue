<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule ref="scheduleObj" height="550px" :eventSettings='eventSettings' timezone='UTC' :created="onCreated">
                </ejs-schedule>
                <ejs-toast ref="toast" cssClass='e-schedule-reminder e-toast-info' timeOut=0 :position='customPosition'
                    target='.e-schedule' newestOnTop=true showCloseButton=true :animation='customAnimation'>
                </ejs-toast>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo showcases an event reminder notification that will be displayed after 5 seconds of sample
                getting loaded.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, the toast component is used to show the reminder notification. The reminder
                notification will be displayed after 5 seconds. We can also customize the notification interval as per
                our needs.
            </p>
        </div>
    </div>
</template>
<script>
    import { getReminderEvents } from './datasource';
    import { ToastComponent } from "@syncfusion/ej2-vue-notifications";
    import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    

    var reminderInterval;

    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'ejs-toast': ToastComponent
        },
        data: function () {
            return {
                eventSettings: {
                    dataSource: getReminderEvents(),
                },
                customAnimation: {
                    hide: { effect: 'SlideRightOut' },
                    show: { effect: 'SlideRightIn' }
                },
                customPosition: { X: 'Right', Y: 'Top' }
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        beforeUnmount: function () {
            if (reminderInterval) {
                clearInterval(reminderInterval);
            }
        },
        methods: {
            refreshEventReminder: function () {
                const scheduleObj = this.$refs.scheduleObj.ej2Instances;
                const toastObj = this.$refs.toast.ej2Instances;
                const eventCollection = scheduleObj.getCurrentViewEvents();
                eventCollection.forEach((event) => {
                    function dateFormat(date) {
                        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
                    }
                    const startTime = dateFormat(event[scheduleObj.eventFields.startTime]);
                    const currentTime = dateFormat(new Date(new Date().toUTCString().slice(0, -3)));
                    const difference = startTime.getTime() - currentTime.getTime();
                    if (startTime.getTime() >= currentTime.getTime() && difference > -1 && difference <= 5000) {
                        const template =`<div class="e-toast-template">
                                            <div class="e-toast-message">
                                                <div class="e-toast-title">${event.Subject}</div>
                                                <div class="e-toast-content">${event.StartTime.toLocaleTimeString()} - ${event.EndTime.toLocaleTimeString()}</div>
                                            </div>
                                        </div>`;
                        toastObj.show({ template: template });
                    }
                });
            },
            onCreated: function () {
                reminderInterval = setInterval(function () { this.refreshEventReminder(); }.bind(this), 5000);
            },
        }
    }
</script>