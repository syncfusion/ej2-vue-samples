<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" width='100%' height='650px' :selectedDate="selectedDate" :eventSettings="eventSettings" :currentView="currentView"
                    :eventRendered="oneventRendered" :created="onCreate" :actionBegin="onActionBegin" :actionComplete="onActionComplete"
                    :actionFailure="onActionFailure" :cellClick="onCellClick" :cellDoubleClick="onCellDoubleClick" :navigating="onNavigating"
                    :eventClick="onEventClick" :popupOpen="onPopupOpen">
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr>
                        <td>
                            <div class="eventarea" style="height: 245px;overflow: auto">
                                <span class="EventLog" id="EventLog" style="word-break: normal;"></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="evtbtn" style="padding-bottom: 10px">
                                <ejs-button id='clear' v-on:click.native="onClear">Clear</ejs-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates the client-side events that triggers on respective Scheduler actions and the same is being displayed
                on the event trace panel.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the client-side events that triggers based on the action taking place in Scheduler has been demonstrated. The
                user can make use of these events, if at some point they need to perform some custom actions or any needed
                additional customizations on the available Scheduler features.
            </p>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    #EventLog b {
        color: #388e3c;
    }

    hr {
        margin: 1px 10px 1px 0px;
        border-top: 1px solid #eee;
    }
</style>
<!-- custom code end -->
<script>
    import Vue from "vue";
    import { scheduleData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2019, 0, 10),
                currentView: 'Week'
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {

            appendElement: function (html) {
                let span = document.createElement('span');
                span.innerHTML = html;
                let log = document.getElementById('EventLog');
                log.insertBefore(span, log.firstChild);
            },
            onClear: function () {
                document.getElementById('EventLog').innerHTML = '';
            },
            onCreate: function () {
                this.appendElement('Schedule <b>Load</b> event called<hr>');
            },
            onActionBegin: function () {
                this.appendElement('Schedule <b>Action Begin</b> event called<hr>');
            },
            onActionComplete: function () {
                this.appendElement('Schedule <b>Action Complete</b> event called<hr>');
            },
            onActionFailure: function () {
                this.appendElement('Schedule <b>Action Failure</b> event called<hr>');
            },
            onCellDoubleClick: function () {
                this.appendElement('SChedule <b>Cell Double Click</b> event called<hr>');
            },
            onCellClick: function () {
                this.appendElement('Schedule <b>Cell Click</b> event called<hr>');
            },
            onNavigating: function () {
                this.appendElement('Schedule <b>Navigating</b> event called<hr>');
            },
            onEventClick: function () {
                this.appendElement('Schedule <b>Event Click</b> event called<hr>');
            },
            onPopupOpen: function () {
                this.appendElement('Schedule <b>Popup Open</b> event called<hr>');
            },

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

        }
    });

</script>