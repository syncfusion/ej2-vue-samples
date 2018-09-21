<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :currentView='currentView' :cssClass='cssClass' :eventSettings='eventSettings'
                    :group='group' startHour='09:00' endHour='19:00'>
                    <e-resources>
                        <e-resource field='ProjectId' title='Choose Project' name='Projects' :dataSource='projectResourceDataSource' textField='text'
                            idField='id' colorField='color'>
                        </e-resource>
                        <e-resource field='CategoryId' title='Category' name='Categories' :dataSource='categoryResourceDataSource' :allowMultiple='allowMultiple'
                            textField='text' idField='id' colorField='color'>
                        </e-resource>
                    </e-resources>    
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates the work progress under two different projects which are categorized as “Development” and “Testing”,
                since both the projects comes across the two common stages.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, there are two resource levels defined under the
                <code>resources</code> property – one with the name
                <code>Projects</code> and other with the name
                <code>Categories</code> respectively. Also, both the names are defined in the
                <code>group</code> property to allow two level hierarchical grouping. The order of grouping depends on the
                order of names passed onto the
                <code>resources</code> option within
                <code>group</code>. The requirement here is to categorize the sub-options that are common to both the projects
                and therefore to enable such grouping, it is necessary to set
                <code>byGroupID</code> option within the
                <code>groupID</code> – whereby allowing all the resources available in each child level to group under its
                parent resources. With this option available, we can avoid the need to provide multiple definitions of the
                same data to be grouped under different parent.
            </p>
            <p>
                Also, the colors defined at the last level resources will get applied to the events of those resources by default. In case,
                if the colors of parent level needs to be applied to child events, then it is necessary to define the
                <code>resourceColorField</code> option within the
                <code>eventSettings</code> property with the parent level resource name value.
            </p>
        </div>
    </div>
</template>
<style>
    .groupbychild.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
        width: 90px;
    }

    .groupbychild.e-schedule .e-agenda-view .e-resource-column {
        width: 100px;
    }
</style>

<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { resourceTeamData } from './datasource';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], resourceTeamData, null, true),
                    fields: {
                        subject: { title: 'Summary', name: 'Subject' },
                        description: { title: 'Comments', name: 'Description' }
                    }
                },
                selectedDate: new Date(2018, 5, 5),
                currentView: 'WorkWeek',
                allowMultiple : true,
                cssClass: 'groupbychild',
                group: {
                    byGroupID: false,
                    resources: ['Projects', 'Categories']
                },
                projectResourceDataSource: [
                    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
                    { text: 'PROJECT 2', id: 2, color: '#56ca85' }
                ],
                categoryResourceDataSource: [
                    { text: 'Development', id: 1, color: '#df5286' },
                    { text: 'Testing', id: 2, color: '#7fa900' }
                ],
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        }
    });

</script>