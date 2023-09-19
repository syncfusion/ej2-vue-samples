<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="schedule-container">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :cssClass='cssClass' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :group='group' :currentView='currentView' :resourceHeaderTemplate='resourceHeaderTemplate'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="TimelineDay"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='EmployeeId' title='Employees' name='Employee' :dataSource='employeeDataSource'
                            textField='Text' idField='Id' groupIDField='GroupId' colorField='Color'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
            
            <div id="action-description">
                <p>
                    This example shows how to block specific time intervals or days on the Scheduler.
                </p>
            </div>
            <div id="description">
                <p>
                    In this example, few blocked events are defined to block the specific time range with the text “Unavailable”.
                    No events can be created on those blocked time range as well as edited through it. These blocked events can be
                    defined by setting <code>isBlock</code> field to true within the <code>eventSettings</code> and assigned
                    altogether with the events <code>dataSource</code>.
                </p>
            </div>
        </div>
    </div>
</template>
<style>
    .schedule-vue-sample .block-events.e-schedule .template-wrap {
        width: 100%;
    }

    .schedule-vue-sample .block-events.e-schedule .e-vertical-view .e-resource-cells {
        height: 58px;
    }

    .schedule-vue-sample .block-events.e-schedule .e-timeline-view .e-resource-left-td,
    .schedule-vue-sample .block-events.e-schedule .e-timeline-month-view .e-resource-left-td {
        width: 170px;
    }

    .schedule-vue-sample .block-events.e-schedule .e-resource-cells.e-child-node .employee-category,
    .schedule-vue-sample .block-events.e-schedule .e-resource-cells.e-child-node .employee-name {
        padding: 5px
    }

    .schedule-vue-sample .block-events.e-schedule .employee-image {
        width: 45px;
        height: 40px;
        float: left;
        border-radius: 50%;
        margin-right: 10px;
    }

    .schedule-vue-sample .block-events.e-schedule .employee-name {
        font-size: 13px;
    }

    .schedule-vue-sample .block-events.e-schedule .employee-designation {
        font-size: 10px;
    }
</style>

<script>
    import { createApp } from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { blockData } from './datasource';
    import { ScheduleComponent, ViewDirective, ViewsDirective, ResourceDirective, ResourcesDirective, Day, TimelineViews, TimelineMonth, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    
    const app = createApp({})

    var resourceHeaderVue = app.component("resource-headerTemplate", {
        template: '<div className="template-wrap"><div class="employee-category"><div><img class="employee-image" :src="getImage" :alt="getImage"/></div><div class="employee-name">' +
                  '{{getEmployeeName(data)}}</div><div class="employee-designation">{{getEmployeeDesignation(data)}}</div></div></div>',
        data() {
            return {
                data: {}
            };
        },
        computed: {
            getImage: function() {
                return 'source/schedule/images/' + this.getEmployeeName(this.data).toLowerCase() + '.png';
            }
        },
        methods: {
            getEmployeeName: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
            },
            getEmployeeDesignation: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                return value.resourceData.Designation;
            }
        }
    });

    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective,
          'e-resource': ResourceDirective,
          'e-resources': ResourcesDirective
        },
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], blockData, null, true)
                },
                selectedDate: new Date(2021, 7, 2),
                currentView: 'TimelineDay',
                cssClass: 'block-events',
                group: {
                    enableCompactView: false,
                    resources: ['Employee']
                },
                employeeDataSource: [
                    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Content writer' },
                    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Designer' },
                    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Software Engineer' },
                    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Support Engineer' },
                    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Human Resource' },
                    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Content Analyst' }
                ],
                resourceHeaderTemplate: function () {
                    return { template: resourceHeaderVue }
                }
            }
        },
        provide: {
            schedule: [Day, TimelineViews, TimelineMonth, Resize, DragAndDrop]
        }
    }

</script>