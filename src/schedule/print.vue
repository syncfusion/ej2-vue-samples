<template>
    <div>
        <div class="control-section">
            <div class="schedule-container">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :currentView="currentView" :actionBegin="onActionBegin">
                    <e-views>
                        <e-view option="Month"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>This example demonstrates how to print the Scheduler element at client-side.</p>
        </div>

        <div id="description">
            <p>In this example, the Scheduler element is Printed by making use of the public method
            <code>print</code>.</p>
            <p>
                <strong>Module Injection</strong>
            </p>
            <p>To start using Print functionality in Scheduler, you need to import the
                <code>Print</code> module from <code>@syncfusion/ej2-vue-schedule</code>
                package and then inject them into the <code>provide</code> section.
            </p>
        </div> 
    </div>
</template>
<style>
    /* custom code start*/
    @font-face {
        font-family: 'Schedule_print';
        src:
            url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    /* custom code end*/
    .print.e-schedule .e-schedule-toolbar .e-icons {
        font-family: 'Schedule_print', 'e-icons';
    }

    .print.e-schedule .e-schedule-toolbar .e-icon-schedule-print::before {
        content: '\e204';
    }

    .print.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today {
        display: none;
    }
</style>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Month, View, Resize, DragAndDrop, Print
    } from "@syncfusion/ej2-vue-schedule";
    import { scheduleData } from './datasource';
    Vue.use(SchedulePlugin);

    export default Vue.extend({
        data: function () {
            return {
                cssClass: 'print',
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2019, 0, 10),
                currentView: 'Month'
            }
        },
        provide: {
            schedule: [Month, Resize, DragAndDrop, Print]
        },
        methods: {
            onActionBegin: function (args) {
                if (args.requestType === 'toolbarItemRendering') {
                    let exportItem = {
                        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
                        text: 'Print', cssClass: 'e-print', click: this.onPrintIconClick.bind(this)
                    };
                    args.items.push(exportItem);
                }
            },

            onPrintIconClick: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.print();
            }
        }
    });
</script>