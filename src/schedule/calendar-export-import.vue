<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate'
                    :eventSettings='eventSettings' :currentView='currentView'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="Agenda"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>
                                Export as iCalendar
                            </div>
                        </td>
                        <td style="width: 50%;">
                            <ejs-button id='ics-export' v-on:click.native="onClick">Export</ejs-button>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>
                                Import iCalendar file
                            </div>
                        </td>
                        <td style="width: 50%;">
                            <ejs-uploader id='ics-import' :cssClass='cssClass' name="ics-import" :buttons="buttons"
                                :showFileList="showFileList" :multiple="multiple" :allowedExtensions="extensions"
                                :selected="onSelect">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This example showcases how to export the Scheduler events to a calendar (.ics) file, as well as how to import
                events from an .ics file (downloaded from any of the calendars like Google or Outlook) into our Scheduler.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, the Scheduler events can be exported to a calendar (.ics) file by making use of the
                <code>exportToICalendar</code> public method. By default,
                the calendar is exported with a file name <code>Calendar.ics</code>.
                To change this file name on export, pass the custom string value as <code>fileName</code> to get the file
                downloaded with this provided name.
                The events from external calendars can also be imported into Scheduler by making use of the
                <code>importICalendar</code> method. This method accepts the blob object of an .ics file to be imported as a
                mandatory argument.
            </p>
            <p>
                <strong>Module Injection</strong>
            </p>
            <p>
                To start using the export and import ICS functionality in Scheduler, you need to import the
                <code>ICalendarExport</code> and <code>ICalendarImport</code> modules from <code>@syncfusion/ej2-vue-schedule</code>
                package and then inject them into the <code>provide</code> section.
            </p>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    .calendar-import.e-upload {
        border: 0;
        padding-left: 0 !important;
    }

    .calendar-import.e-upload .e-file-select-wrap {
        padding: 0
    }

    .calendar-import.e-upload .e-file-select-wrap .e-file-drop {
        display: none;
    }
</style>
<!-- custom code end -->
<script>
    import Vue from "vue";
    import { scheduleData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, ICalendarExport, ICalendarImport, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';
    import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

    Vue.use(ButtonPlugin);
    Vue.use(SchedulePlugin);
    Vue.use(UploaderPlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2019, 0, 10),
                currentView: 'Week',
                cssClass:'calendar-import',
                multiple: false,
                allowedExtensions: '.ics',
                buttons: {
                    browse: 'Choose file',
                },
                showFileList: false,
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, ICalendarExport, ICalendarImport, Resize, DragAndDrop]
        },
        methods: {
            onClick: function () {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                scheduleObj.exportToICalendar();
            },
            onSelect: function (args) {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                scheduleObj.importICalendar(args.event.target.files[0]);
            }
        }
    });

</script>