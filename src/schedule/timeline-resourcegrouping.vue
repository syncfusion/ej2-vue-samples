<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :currentView='currentView' :eventSettings='eventSettings'
                    :group='group'>
                    <e-views>
                        <e-view option="TimelineDay"></e-view>
                        <e-view option="TimelineWeek"></e-view>
                        <e-view option="TimelineWorkWeek"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                        <e-view option="Agenda"></e-view>
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
            <p>
                This demo showcases how the multiple resources are grouped as well as how the events are portrayed in timeline view layouts.
            </p>
        </div>
        <div id="description">
            <p>
                In the timeline view, each row depicts a single resource whereas in vertical views, each resource are grouped parallelly
                as columns. Here, the resource grouping follows the tree-view like hierarchical grouping structure and can contain
                any level of child resources. In this sample, we have used two level hierarchy, where the
                <code>PROJECT 1</code> and
                <code>PROJECT 2</code> are the parent level and the
                <code>development</code> and
                <code>testing</code> are child level resources which are defined using the
                <code>resources</code> property. They are grouped in layout by making use of the
                <code>group</code> property and its order of grouping depends on the order of names passed onto the
                <code>resources</code> option within
                <code>group</code>.
            </p>
            <p>
                Also, the colors defined for the child level resources will get applied to the events of those resources by default. In case,
                if the colors of parent level needs to be applied to those child events, then it is necessary to define the
                <code>resourceColorField</code> option within the
                <code>eventSettings</code> property with the parent level resource name value.
            </p>
        </div>
    </div>
</template>
<style>
    .e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
        width: 90px;
    }

    .e-schedule .e-agenda-view .e-resource-column {
        width: 100px;
    }
</style>

<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { resourceData, timelineResourceData } from './datasource';
    import { SchedulePlugin, Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: this.generateData()
                },
                selectedDate: new Date(2018, 3, 4),
                currentView: 'TimelineWeek',
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
                    { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
                    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
                ],
            }
        },
        provide: {
            schedule: [Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop]
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