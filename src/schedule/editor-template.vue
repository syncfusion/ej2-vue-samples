<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" width='100%' height='650px' :selectedDate="selectedDate" :eventSettings="eventSettings" :actionBegin="onActionBegin"
                    :popupOpen="onPopupOpen" :eventRendered="onEventRendered" :showQuickInfo="showQuickInfo" :editorTemplate="'editorTemplate'" :editorHeaderTemplate="'editorHeaderTemplate'">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                    </e-views>
                    <template v-slot:editorHeaderTemplate="{ data }">
                        <div v-if="data.Subject === undefined">
                            <div>Create New Event</div>
                        </div>
                        <div v-else>
                            <div>{{data.Subject}}</div>
                        </div>
                    </template>
                    <template v-slot:editorTemplate>
                        <table class="schedule-custom-event-editor" width="100%" cellpadding="5">
                            <tbody>
                                <tr>
                                    <td class="e-textlabel">Summary</td>
                                    <td colspan="4">
                                        <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="e-textlabel">Status</td>
                                    <td colspan="4">
                                        <ejs-dropdownlist id='EventType' name="EventType" class="e-field" placeholder= 'Choose status' :dataSource='eventData' >
                                        </ejs-dropdownlist>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="e-textlabel">From</td>
                                    <td colspan="4">
                                        <ejs-datetimepicker id="StartTime" class="e-field" name="StartTime"></ejs-datetimepicker>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="e-textlabel">To</td>
                                    <td colspan="4">
                                        <ejs-datetimepicker id="EndTime" class="e-field" name="EndTime" ></ejs-datetimepicker>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="e-textlabel">Reason</td>
                                    <td colspan="4">
                                        <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>This demo illustrates the way of customizing the default editor window with a custom template option and the
                customized design is automatically replaced onto the usual event editor. Here, a doctor's daily appointment with his
                patients is listed out and shaded with specific color based on its status.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the event window is customized based on the specific appointment-related fields required for doctors which can 
                be achieved by making use of the <code>editorTemplate</code> API and its type should be <code>v-slot</code>.
            </p>
            <p> 
               In this demo, the editor window header is customized based on the appointment subject field which can be achieved by the <code>editorHeaderTemplate</code>. 
            </p>
            <p>
                Each field defined through it should contain the <code>e-field</code> class, and <code>data-name</code> attribute, 
                so as to allow the processing of those fields in the default event object from internal source
            </p>
            <p>
                Within the <code>eventRendered</code> event that triggers before every appointment getting rendered on the Scheduler
                user interface, the colors for the appointments are set based on its status which is retrieved from the appointment
                data.
            </p>
            <p>
                The additional restriction has been added to the Scheduler cells such that if a cell already contains an
                appointment – then it should be prevented to book with multiple appointments on the same time for which the
                <code>isSlotAvailable</code> method is used. This method returns true, if the underlying cell is available for
                adding new events by checking whether it already has any events in it.
            </p>
        </div>

    </div>
</template>
<style>
    .schedule-custom-event-editor .e-textlabel {
        padding-right: 15px;
        text-align: right;
    }

    .schedule-custom-event-editor td {
        padding: 7px;
        padding-right: 16px;
    }
</style>
<script>
    import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { DateTimePickerComponent } from '@syncfusion/ej2-vue-calendars';
    import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

    import { extend } from '@syncfusion/ej2-base';
    import { doctorsEventData } from './datasource';

    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective,
          'ejs-datetimepicker': DateTimePickerComponent,
          'ejs-dropdownlist': DropDownListComponent
        },
        data: function () {
            return {
                selectedDate: new Date(2021, 1, 15),
                currentView: 'Week',
                eventSettings: { 
                    dataSource: extend([], doctorsEventData, null, true),
                    fields: {
                        startTime: { name: 'StartTime', validation: { required: true } },
                        endTime: { name: 'EndTime', validation: { required: true } },
                    }
                },
                showQuickInfo: false,
                eventData:  ['New', 'Requested', 'Confirmed'],
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Resize, DragAndDrop]
        },
        methods: {
            onPopupOpen: function (args) {
                if (args.type === 'Editor') {
                    let statusElement = args.element.querySelector('#EventType');
                    statusElement.setAttribute('name', 'EventType');
                }
            },
            onEventRendered: function (args) {
                switch (args.data.EventType) {
                    case 'Requested':
                        (args.element).style.backgroundColor = '#F57F17';
                        break;
                    case 'Confirmed':
                        (args.element).style.backgroundColor = '#7fa900';
                        break;
                    case 'New':
                        (args.element).style.backgroundColor = '#8e24aa';
                        break;
                }
            },
            onActionBegin: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
                    let data;
                    if (args.requestType === 'eventCreate') {
                        data = args.data[0];
                    } else if (args.requestType === 'eventChange') {
                        data = args.data;
                    }
                    if (!scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
                        args.cancel = true;
                    }
                }

            }
        }
    }

</script>
