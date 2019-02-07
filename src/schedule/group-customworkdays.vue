<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :currentView='currentView' :cssClass='cssClass' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :group='group' :popupOpen="onPopupOpen" :resourceHeaderTemplate='resourceTemplate'
                    :actionBegin="onActionBegin" :renderCell="onRenderCell">
                    <e-views>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='DoctorId' title='Doctor Name' name='Doctors' :dataSource='resourceDataSource' textField='text' idField='id'
                            colorField='color' workDaysField='workDays' startHourField='startHour' endHourField='endHour'>
                        </e-resource>
                    </e-resources>
                 </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo showcases the different available dates of doctors and their appointments on those days.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, different working days are assigned by passing the
                <code>workDays</code> collection for each doctor to show their available dates. On each of their available
                dates, their daily available time range is also depicted by mentioning the
                <code>startHour</code> and
                <code>endHour</code> for each doctor. These values needs to be provided along with the resource
                <code>dataSource</code> by mapping the appropriate fields namely
                <code>workDaysField</code>,
                <code>startHourField</code> and
                <code>endHourField</code>.
            </p>
            <p>
                Here, we have customized the background cell color of the available times of each doctor using
                <code>renderCell</code> event to denote that, only those timeslots are available for booking appointments.
                All other cells are simply read-only and no appointments can be booked on it. Also, if the applicable timeslot
                already contains an appointment, then no more appointments can be added to that cell which has been prevented
                by making use of the
                <code>isSlotAvailable</code> function within the
                <code>actionBegin</code> event checking for
                <code>eventCreate</code> request type. The resource header is customized by making use of the
                <code>resourceHeaderTemplate</code> option.
            </p>
        </div>

    </div>
</template>
<style>
    .customschedule.e-schedule .e-month-view .e-work-days.willsmith,
    .customschedule.e-schedule .e-vertical-view .e-work-hours.willsmith {
        background-color: #faebd7;
    }

    .customschedule.e-schedule .e-month-view .e-work-days.alice,
    .customschedule.e-schedule .e-vertical-view .e-work-hours.alice {
        background-color: #deecfc;
    }

    .customschedule.e-schedule .e-month-view .e-work-days.robson,
    .customschedule.e-schedule .e-vertical-view .e-work-hours.robson {
        background-color: #deeeac;
    }

    .customschedule.e-schedule .e-vertical-view .e-resource-cells {
        height: 62px;
    }

    .customschedule.e-schedule .template-wrap {
        display: flex;
        text-align: left;
    }

    .customschedule.e-schedule .template-wrap .resource-image {
        background-repeat: no-repeat;
        background-size: 45px;
        height: 45px;
        width: 45px;
    }

    .customschedule.e-schedule .template-wrap .resource-details {
        padding-left: 10px;
    }

    .customschedule.e-schedule.e-device .template-wrap .resource-details .resource-designation {
        display: none;
    }


    .customschedule.e-schedule .template-wrap .resource-details .resource-name {
        font-size: 16px;
        font-weight: 500;
        margin-top: 5px;
    }

    .customschedule.e-schedule.e-device .template-wrap .resource-details .resource-name {
        font-size: inherit;
        font-weight: inherit;
    }

    .customschedule.e-schedule.e-device .e-resource-tree-popup .e-fullrow {
        height: 50px;
    }
</style>
<script>
    import Vue from "vue";
    import { extend, addClass, Internationalization } from '@syncfusion/ej2-base';
    import { doctorData } from './datasource';
    import { SchedulePlugin, View, WorkWeek, Month } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    var instance = new Internationalization();
    var resourceTemplate = Vue.component("resource-template", {
        template: '<div class="template-wrap"><div class="resource-image"><img :src="getImage" :alt="getImage" width="45px" height="45px"/></div>' +
        '<div class="resource-details"><div class="resource-name">{{getDoctorName(data)}}</div><div class="resource-designation">{{getDoctorLevel(data)}}</div></div></div>',
        data() {
            return {
                data: {}
            };
        },
        computed: {
            getImage: function() {
                return './src/schedule/images/' + this.getDoctorImage(this.data) + '.png';
            }
        },
        methods: {
            getDoctorName: function (data) {
                let value = JSON.parse(JSON.stringify(data));
                return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;
            },
            getDoctorImage: function (data) {
                let resourceName = this.getDoctorName(data);
                return (resourceName === 'Will Smith') ? 'will-smith' : resourceName.toLowerCase();
            },
            getDoctorLevel: function (data) {
                let resourceName = this.getDoctorName(data);
                return (resourceName === 'Will Smith') ? 'Cardiologist' : (resourceName === 'Alice') ? 'Neurologist' : 'Orthopedic Surgeon';
            }
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], doctorData, null, true),
                    fields: {
                        subject: { title: 'Service Type', name: 'Subject' },
                        location: { title: 'Patient Name', name: 'Location' },
                        description: { title: 'Summary', name: 'Description' },
                        startTime: { title: 'From', name: 'StartTime' },
                        endTime: { title: 'To', name: 'EndTime' }
                    }
                },
                selectedDate: new Date(2018, 3, 1),
                currentView: 'WorkWeek',
                cssClass: 'customschedule',
                group: {
                    resources: ['Doctors']
                },
                resourceDataSource : [
                    { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5], startHour: '08:00', endHour: '15:00' },
                    { text: 'Alice', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5], startHour: '08:00', endHour: '17:00' },
                    { text: 'Robson', id: 3, color: '#7fa900', startHour: '08:00', endHour: '16:00' }
                ],
                resourceTemplate: function () {
                    return { template: resourceTemplate }
                },
            }
        },
        provide: {
            schedule: [WorkWeek, Month]
        },
        methods: {
            onActionBegin: function (args) {
                let isEventChange = (args.requestType === 'eventChange');
                if ((args.requestType === 'eventCreate' && (args.data).length > 0)|| isEventChange) {
                    let scheduleObj = this.$refs.ScheduleObj.ej2Instances;
                    let eventData = (isEventChange)? args.data: args.data[0];
                    let eventField = scheduleObj.eventFields;
                    let startDate = eventData[eventField.startTime];
                    let endDate = eventData[eventField.endTime];
                    let resourceIndex = [1, 2, 3].indexOf(eventData.DoctorId);
                    args.cancel = !this.isValidateTime(startDate, endDate, resourceIndex, scheduleObj);
                    if (!args.cancel) {
                        args.cancel = !scheduleObj.isSlotAvailable(startDate, endDate, resourceIndex);
                    }
                }
            },
            onPopupOpen: function (args) {
                if (args.target && args.target.classList.contains('e-work-cells')) {
                    args.cancel = !args.target.classList.contains('e-work-hours');
                }

            },
            onRenderCell: function (args) {
                if (args.element.classList.contains('e-work-hours') || args.element.classList.contains('e-work-cells')) {
                    addClass([args.element], ['willsmith', 'alice', 'robson'][parseInt(args.element.getAttribute('data-group-index'), 10)]);
                }
            },
            isValidateTime: function(startDate, endDate, resIndex, scheduleObj) {
                var resource = scheduleObj.getResourcesByIndex(resIndex);
                var startHour = parseInt(resource.resourceData.startHour.toString().slice(0, 2), 10);
                var endHour = parseInt(resource.resourceData.endHour.toString().slice(0, 2), 10);
                return (startHour <= startDate.getHours() && endHour >= endDate.getHours());
            }
        }
    });

</script>