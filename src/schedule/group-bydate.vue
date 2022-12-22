<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-checkbox label="hideNonWorkingDays" :checked='true' :change='onChange'></ejs-checkbox>
                <br> <br>
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :group='group'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="Agenda"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='TaskId' title='Assignee' name='Owners' :allowMultiple='allowMultiple' :dataSource='resourceDataSource'
                            textField='text' idField='id' colorField='color' workDaysField= 'workDays'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates the daily tasks of two employees grouped by date-wise.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, there are 2 resources defined namely
                <strong>Alice</strong> and
                <strong>Smith</strong> under the resource
                <code>dataSource</code>. The Scheduler can be switched to group by date, by setting
                <code>true</code> to the option
                <code>byDate</code> within the
                <code>group</code> property.
            </p>
            <p>
                The different work days for the each resources are provided by using the 
                <code>workDaysField</code> property and the Scheduler
                will be displayed the provided dates alone when 
                <code>hideNonWorkingDays</code> property set as <code>true</code>.
            </p>
        </div>

    </div>
</template>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { resourceData } from './datasource';
    import { SchedulePlugin, Day, Week, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], resourceData, null, true),
                    fields: {
                        subject: { title: 'Task', name: 'Subject' },
                        location: { title: 'Project Name', name: 'Location' },
                        description: { title: 'Comments', name: 'Description' }
                    }
                },
                selectedDate: new Date(2023, 0, 6),
                group: { byDate: true, hideNonWorkingDays: true, resources: ['Owners'] },
                allowMultiple : true,
                resourceDataSource : [
                { text: 'Alice', id: 1, color: '#1aaa55', workDays: [1, 2, 3, 4] },
                { text: 'Smith', id: 2, color: '#7fa900', workDays: [2, 3, 5] }
                ],
            }
        },
        provide: {
            schedule: [Day, Week, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                if (args.checked) {
                    scheduleObj.ej2Instances.group.hideNonWorkingDays = true;
                }
                else {
                    scheduleObj.ej2Instances.group.hideNonWorkingDays = false;
                }
                scheduleObj.dataBind();
            }
        }
    });
</script>