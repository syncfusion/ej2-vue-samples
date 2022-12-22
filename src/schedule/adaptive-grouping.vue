<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper schedule-wrapper">
                <ejs-schedule id="schedule" ref="ScheduleObj" width='100%' height='650px'
                    :selectedDate="selectedDate" :eventSettings="eventSettings" currentView="Month" :enableAdaptiveUI="enableAdaptiveUI" :group="group">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="Month"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ProjectId' title='Choose Project' name='Projects' :dataSource='projectResourceDataSource' textField='text'
                            idField='id' colorField='color'>
                        </e-resource>
                        <e-resource field='TaskId' title='Employee' name='Employees' :dataSource='employeeDataSource' :allowMultiple='allowMultiple'
                            textField='text' idField='id' groupIDField='groupId' colorField='color'>
                        </e-resource>
                    </e-resources> 
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>This demo showcases how multiple resources are grouped in compact view and how events are portrayed in the scheduler view layouts.</p>
        </div>

        <div id="description">
            <p>
                In this demo, we have showcased the Schedule views and resource grouping in the compact view mode with the help of the <code>enableAdaptiveUI</code> property.
                In Scheduler view, only one resource has been shown to enhance the view experience of resource events details clearly.
            </p>
        </div>
    </div>
</template>
<style>
    @media (min-width: 481px) {
        .schedule-vue-sample .schedule-wrapper {
            margin: 0 25%;
        }
    }
</style>
<script>
    import Vue from "vue";
    import { resourceData, timelineResourceData } from './datasource';
    import { SchedulePlugin, Day, Week, Month, DragAndDrop, Resize } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);

     export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: this.generateData()
                },
                selectedDate: new Date(2023, 0, 4),
                enableAdaptiveUI: true,
                allowMultiple : true,
                group: {
                    resources: ['Projects', 'Employees']
                },
                projectResourceDataSource: [
                    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
                    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
                    { text: 'PROJECT 3', id: 3, color: '#df5286' }
                ],
                employeeDataSource: [
                    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
                    { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
                    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
                    { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
                    { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
                    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
                ],
            }
        },
        provide: {
            schedule: [Day, Week, Month, DragAndDrop, Resize]
        },
        methods: {
            generateData: function () {
                var collections = [];
                var dataCollections = [resourceData, timelineResourceData];
                for (var i = 0; i < dataCollections.length; i++) {
                    collections = collections.concat(dataCollections[i]);
                }
                return collections;
            }
        }
    });
</script>