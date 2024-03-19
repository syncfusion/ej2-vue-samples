<template>
    <div class="schedule-vue-sample">
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" :cssClass="cssClass" width='100%' height='650px' :calendarCollections='calendarCollection' :group="group" :selectedDate="selectedDate"
                    :eventSettings="eventSettings">
                    <e-resources>
                        <e-resource field='CalendarId' title='Calendars' :dataSource='resourceDataSource' :allowMultiple='allowMultiple' name='Calendars'
                            textField='CalendarText' idField='CalendarId' colorField='CalendarColor'>
                        </e-resource>
                    </e-resources>
                    <e-views>
                        <e-view option="Month"></e-view>
                        <e-view option="TimelineWeek"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <div id="property" class="property-panel-table schedule-add-remove-resources" title="Show / Hide Resource">
                <table id="property" title="Show / Hide Resource" style="width: 100%">
                    <tbody>
                        <tr style="height: 50px">
                            <td style="width: 100%">
                                <ejs-checkbox cssClass="personal" label="My Calender" value="1" :checked="true" :disabled="true" :change="onChange"></ejs-checkbox>
                            </td>
                        </tr>
                        <tr style="height: 50px">
                            <td style="width: 100%">
                                <ejs-checkbox cssClass="company" label="Company" value="2" :checked="false" :change="onChange"></ejs-checkbox>
                            </td>
                        </tr>
                        <tr style="height: 50px">
                            <td style="width: 100%">
                                <ejs-checkbox cssClass="birthday" label="Birthday" value="3" :checked="false" :change="onChange"></ejs-checkbox>
                            </td>
                        </tr>
                        <tr style="height: 50px">
                            <td style="width: 100%">
                                <ejs-checkbox cssClass="holiday" label="Holiday" value="4" :checked="false" :change="onChange"></ejs-checkbox>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates how to dynamically add or remove resources to and from the Scheduler layout.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, Scheduler is initially displayed with single resource with its related set of appointments. When the additional
                checkboxes given are checked and unchecked, the respective resources gets added up or removed from the schedule
                layout. To add new resources dynamically,
                <code>addResource</code> method is used which accepts the arguments such as resource object, resource name
                (within which level, the resource object to be added) and index (position where the resource needs to be
                added). To remove the resources dynamically,
                <code>removeResource</code> method is used which accepts the index (position from where the resource to be
                removed) and resource name (within which level, the resource object presents) as parameters.
            </p>
        </div>
    </div>
</template>

<style>
    .property-panel-content .e-checkbox-wrapper.personal .e-label {
        color: #808080 !important;
    }

    .property-panel-content .e-checkbox-wrapper.personal .e-frame {
        background-color: #c43081 !important;
        border-color: transparent !important;
    }

    .property-panel-content .e-checkbox-wrapper.company .e-frame {
        background-color: #ff7f50 !important;
        border-color: transparent !important;
    }

    .property-panel-content .e-checkbox-wrapper.birthday .e-frame {
        background-color: #AF27CD !important;
        border-color: transparent !important;
    }

    .property-panel-content .e-checkbox-wrapper.holiday .e-frame {
        background-color: #808000 !important;
        border-color: transparent !important;
    }

    .highcontrast .schedule-vue-sample .property-panel-content .property-panel-table.schedule-add-remove-resources .e-checkbox-wrapper .e-frame.e-check,
    .bootstrap .schedule-vue-sample .property-panel-content .property-panel-table.schedule-add-remove-resources .e-checkbox-wrapper .e-frame.e-check,
    .material3-dark .schedule-vue-sample .property-panel-content .property-panel-table.schedule-add-remove-resources .e-checkbox-wrapper .e-frame.e-check {
        color: #fff;
    }

    .schedule-vue-sample .schedule-add-remove-resources.e-schedule .e-timeline-view .e-resource-left-td,
    .schedule-vue-sample .schedule-add-remove-resources.e-schedule .e-timeline-month-view .e-resource-left-td {
        width: 110px;
    }

    .schedule-vue-sample .schedule-add-remove-resources.e-schedule .e-timeline-view .e-resource-text,
    .schedule-vue-sample .schedule-add-remove-resources.e-schedule .e-timeline-month-view .e-resource-text {
        padding: 0;
    }
</style>
<script>
    import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
    import { holidayData, birthdayData, companyData, personalData } from './datasource';
    import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Month, TimelineViews, TimelineMonth, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
    
    var calendarCollections = [
        { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
        { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
        { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
        { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
    ];
    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective,
          'e-resource': ResourceDirective,
          'e-resources': ResourcesDirective,
          'ejs-checkbox': CheckBoxComponent
        },
        data: function () {
            return {
                cssClass: 'schedule-add-remove-resources',
                selectedDate: new Date(2021, 3, 1),
                group: { resources: ['Calendars'] },
                resourceDataSource: [calendarCollections[0]],
                calendarCollection: calendarCollections,
                allowMultiple: true,
                eventSettings: { dataSource: this.generateCalendarData() }
            }
        },
        provide: {
            schedule: [Month, TimelineViews, TimelineMonth, Resize, DragAndDrop]
        },
        methods: {
            generateCalendarData: function () {
                var collections = [];
                var dataCollections = [personalData, companyData, birthdayData, holidayData];
                for (var i = 0; i < dataCollections.length; i++) {
                    collections = collections.concat(dataCollections[i]);
                }
                return collections;
            },
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let value = parseInt(args.event.currentTarget.querySelector('input').getAttribute('value'), 10);
                let resourceData = calendarCollections.filter(function (calendar) { return calendar.CalendarId === value; });
                if (args.checked) {
                    scheduleObj.addResource(resourceData[0], 'Calendars', value - 1);
                    scheduleObj.dataBind();
                } else {
                    scheduleObj.removeResource(value, 'Calendars');
                    scheduleObj.dataBind();
                }
            }

        }
    }

</script>