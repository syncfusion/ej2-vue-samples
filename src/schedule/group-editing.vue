<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :cssClass='cssClass' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :group='group' :currentView='currentView' :resourceHeaderTemplate='resourceHeaderTemplate'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month" :eventTemplate='monthEventTemplate'></e-view>
                        <e-view option="TimelineWeek"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='ConferenceId' title='Attendees' name='Conferences' :allowMultiple='allowMultiple' :dataSource='resourceDataSource'
                            textField='Text' idField='Id' colorField='Color'>
                        </e-resource>
                    </e-resources>

                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates the usage of single event that are shared by multiple resources.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo,
                <code>allowGroupEdit</code> option is set to true within the
                <code>group</code> property to enable the same event to be shared with multiple resources. With this property
                enabled, a single appointment object will be maintained within the appointment collection, even if it is
                shared by more than one resource – whereas the resource fields of such appointment object will hold the IDs
                of the multiple resources separated by commas. Any actions such as create, edit or delete held on any one
                of the event, will be reflected on all other related instances visible on the UI. The
                <code>allowMultiple</code> option when set as true within the
                <code>resource</code> property, will allow the user to select multiple resources from the resource field
                of editor window, while trying to create appointments.
            </p>
        </div>

    </div>
</template>
<style>
    .groupediting.e-schedule .e-month-view .e-appointment .e-appointment-details {
        padding: 1px;
        padding-left: 3px;
    }

    .groupediting.e-schedule .e-vertical-view .e-resource-cells {
        height: 62px;
    }

    .groupediting.e-schedule .template-wrap {
        display: flex;
        text-align: left;
    }

    .groupediting.e-schedule .template-wrap .resource-image {
        width: 45px;
        height: 45px;
        background-size: 45px;
        background-repeat: no-repeat;
    }

    .groupediting.e-schedule .template-wrap .resource-details {
        padding-left: 10px;
    }

    .groupediting.e-schedule .template-wrap .resource-details .resource-name {
        font-size: 16px;
        font-weight: 500;
        padding-right: 10px;
    }

    .groupediting.e-schedule.e-device .template-wrap .resource-details .resource-designation {
        display: none;
    }

    .groupediting.e-schedule.e-device .template-wrap .resource-details .resource-name {
        font-size: inherit;
        font-weight: inherit;
        padding-top: 5px;
    }

    .groupediting.e-schedule.e-device .e-resource-tree-popup .e-fullrow {
        height: 50px;
    }
</style>

<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { resourceConferenceData } from './datasource';
    import { SchedulePlugin, Day, WorkWeek, Month, TimelineViews, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    var groupVue = Vue.component("demo", {
        template: '<div class="subject">{{data.Subject}}</div>',
        data() {
            return {
                data: {}
            };
        }
    });

    var resourceHeaderVue = Vue.component("resource-headerTemplate", {
        template: '<div class="template-wrap"><div class="resource-image"><img :src="getImage" :alt="getImage" width="45px" height="45px"/>' +
        '</div><div class="resource-details"><div class="resource-name">{{getEmployeeName(data)}}</div><div class="resource-designation">{{getEmployeeDesignation(data)}}</div></div></div>',
        data() {
            return {
                data: {}
            };
        },
        computed: {
            getImage: function() {
                return './src/schedule/images/' + this.getEmployeeImage(this.data) + '.png';
            }
        },
        methods: {
            getEmployeeName: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
            },
            getEmployeeImage: function (data) {
                let resourceName = this.getEmployeeName(data);
                return resourceName.toLowerCase();
            },
            getEmployeeDesignation: function (data) {
                let resourceName = this.getEmployeeName(data);
                return (resourceName === 'Margaret') ? 'Sales Representative' : (resourceName === 'Robert') ?
                    'Vice President, Sales' : 'Inside Sales Coordinator';
            }
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], resourceConferenceData, null, true),
                    fields: {
                        subject: { title: 'Conference Name', name: 'Subject' },
                        description: { title: 'Summary', name: 'Description' },
                        startTime: { title: 'From', name: 'StartTime' },
                        endTime: { title: 'To', name: 'EndTime' }
                    }
                },
                selectedDate: new Date(2018, 5, 5),
                currentView: 'WorkWeek',
                cssClass: 'groupediting',
                group: {
                    allowGroupEdit: true,
                    resources: ['Conferences']
                },
                resourceDataSource: [
                    { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
                    { Text: 'Robert', Id: 2, Color: '#357cd2' },
                    { Text: 'Laura', Id: 3, Color: '#7fa900' }
                ],
                allowMultiple: true,
                resourceHeaderTemplate: function (e) {
                    return { template: resourceHeaderVue }
                },
                monthEventTemplate: function (e) {
                    return {
                        template: groupVue
                    };
                }
            }
        },
        provide: {
            schedule: [Day, WorkWeek, Month, TimelineViews, Resize, DragAndDrop]
        }
    });

</script>