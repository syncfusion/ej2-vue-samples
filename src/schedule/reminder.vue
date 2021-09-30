<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule ref="scheduleObj" height="550px" :eventSettings='eventSettings' timezone='UTC' :created="onCreated">
                </ejs-schedule>
                <ejs-toast ref="toast" cssClass='e-schedule-reminder e-toast-info' timeOut=0 :position='customPosition'
                    target='.e-schedule' newestOnTop=true showCloseButton=true :animation='customAnimation'>
                </ejs-toast>
                <script id="reminder-template" type="text/x-template">
		            <div class="e-toast-template">
                        <div class="e-toast-message">
                            <div class="e-toast-title">${Subject}</div>
                            <div class="e-toast-content">${StartTime.toLocaleTimeString()} - ${EndTime.toLocaleTimeString()}</div>
                        </div>
                    </div>
                </script>
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
    import Vue from "vue";
    import { getReminderEvents } from './datasource';
    import { compile } from '@syncfusion/ej2-base';
    import { ToastPlugin } from "@syncfusion/ej2-vue-notifications";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    Vue.use(ToastPlugin);

    var reminderInterval;

    export default Vue.extend({
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
        beforeDestroy: function () {
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
                    };
                    const startTime = dateFormat(event[scheduleObj.eventFields.startTime]);
                    const currentTime = dateFormat(new Date(new Date().toUTCString().slice(0, -3)));
                    const difference = startTime.getTime() - currentTime.getTime();
                    if (startTime.getTime() >= currentTime.getTime() && difference > -1 && difference <= 5000) {
                        const template = document.getElementById('reminder-template');
                        const tempData = compile(template.innerHTML.trim())(event);
                        toastObj.show({ template: tempData[0].outerHTML });
                    }
                });
            },
            onCreated: function () {
                reminderInterval = setInterval(function () { this.refreshEventReminder(); }.bind(this), 5000);
            },
        }
    });
</script>