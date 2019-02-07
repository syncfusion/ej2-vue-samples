<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :group='group'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="Agenda"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='TaskId' title='Assignee' name='Owners' :allowMultiple='allowMultiple' :dataSource='resourceDataSource'
                            textField='text' idField='id' colorField='color'>
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
        </div>

    </div>
</template>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { resourceData } from './datasource';
    import { SchedulePlugin, Day, Week, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
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
                selectedDate: new Date(2018, 3, 1),
                group: { byDate: true, resources: ['Owners'] },
                allowMultiple : true,
                resourceDataSource : [
                    { text: 'Alice', id: 1, color: '#df5286' },
                    { text: 'Smith', id: 2, color: '#7fa900' }
                ],
            }
        },
        provide: {
            schedule: [Day, Week, Month, Agenda, Resize, DragAndDrop]
        }
    });

</script>