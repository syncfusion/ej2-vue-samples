<template>
    <div class="schedule-vue-sample">
        <div class="control-section">
            <div class="schedule-container">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :currentView="currentView" :actionBegin="onActionBegin">
                    <e-views>
                        <e-view option="Week"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>This example demonstrates how to export the Scheduler events to an Excel file format at client-side.</p>
        </div>

        <div id="description">
            <p>In this example, the Scheduler events data are exported to an Excel file by making use of the public method
        <code>exportToExcel</code>. By default, the whole event collection bound to the Scheduler gets exported as an excel file. To
        export only specific events of Scheduler, you need to pass the custom data collection as a parameter to the
        <code>exportToExcel</code> method. This method accepts the export options as its arguments such as fileName, exportType,
        fields, customData, and includeOccurrences. The fileName denotes the name to be given for the exported file and
        the <code>exportType</code> allows you to set the format of the excel file to be exported either as .xlsx or .csv. The custom
        or specific field collection of event dataSource to be exported can be provided through <code>fieldsInfo</code> option and the
        custom data collection can be exported by passing them through the <code>customData</code> option. There also exists option
        to export individual instances of the recurring events to an excel file, by setting true or false to the
        <code>includeOccurrences</code> option, denoting either to include or exclude the occurrences as separate instances on an
        exported excel file.</p>
        <p>
            <strong>Module Injection</strong>
        </p>
        <p>
        To start using Excel exporting functionality in Scheduler, you need to import the <code>ExcelExport</code> module from
        <code>@syncfusion/ej2-vue-schedule</code> package and then inject it into the <code>provide</code> section.
        </p>
        </div> 
    </div>
</template>
<style>
    .schedule-vue-sample .excel-export.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today {
        display: none;
    }

    .e-bigger .schedule-vue-sample .e-schedule .e-schedule-toolbar .e-toolbar-items .e-toolbar-item.e-excel-export .e-tbar-btn.e-btn.e-control .e-icons.e-btn-icon.e-icons.e-export-excel.e-icon-left {
        padding: 5px 6px 6px;
    }
</style>
<script>
    import { extend } from '@syncfusion/ej2-base';
    import { ScheduleComponent, ViewDirective, ViewsDirective, Week, Resize, DragAndDrop, ExcelExport } from "@syncfusion/ej2-vue-schedule";
    import { scheduleData } from './datasource';
    
    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective
        },
        data: function () {
            return {
                cssClass: 'excel-export',
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2021, 0, 10),
                currentView: 'Week'
            }
        },
        provide: {
            schedule: [Week, Resize, DragAndDrop, ExcelExport]
        },
        methods: {
            onActionBegin: function (args) {
                if (args.requestType === 'toolbarItemRendering') {
                    let exportItem = {
                        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icons e-export-excel',
                        text: 'Excel Export', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
                    };
                    args.items.push(exportItem);
                }
            },

            onExportClick: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                let exportFields = [
                    { name: 'Id', text: 'Id' },
                    { name: 'Subject', text: 'Summary' },
                    { name: 'StartTime', text: 'Start Date' },
                    { name: 'EndTime', text: 'End Date' },
                    { name: 'Location', text: 'Place' }
                ];
                let exportValues = { fieldsInfo: exportFields };
                scheduleObj.exportToExcel(exportValues);
            }
        }
    }
</script>