<template>
    <div class="control-pane">
        <div class="control-section">
            <div class="e-sample-resize-container" style="width: 100%; max-width: 100%;">
                <ejs-toolbar overflowMode="Popup" cssClass="template">
                    <e-items>
                        <e-item align="Left" :template="'timezoneLabelTemplate'"></e-item>
                        <template v-slot:timezoneLabelTemplate>
                            <div class="timezone-label">
                                <label class="showhide" style="margin-right: 10px; margin-top:3px;">Time Zone:</label>
                            </div>
                        </template>
                        <e-item align="Left" :template="'timezoneComboTemplate'" cssClass="timezone-dropdown"></e-item>
                        <template v-slot:timezoneComboTemplate>
                            <ejs-combobox id="timezonelist" :dataSource="timeZoneData" :value="timezone"
                                :fields="timeZoneFields" :change="onTimezoneChange" width="300px" popupHeight="350px"
                                popupWidth="350px" filterType="Contains" :allowFiltering="true" :showClearButton="false"
                                placeholder="Select Time Zone"></ejs-combobox>
                        </template>
                        <e-item type="Separator" align="Right"></e-item>
                        <e-item align="Right" :template="'previousButtonTemplate'" cssClass="timeline-section"></e-item>
                        <template v-slot:previousButtonTemplate>
                            <ejs-button id="previous-timespan" cssClass="previous-timespan"
                                v-on:click.native="previousTimespan" iconCss="e-icons e-chevron-left-fill"></ejs-button>
                        </template>
                        <e-item type="Separator" align="Right"></e-item>
                        <e-item align="Right" :template="'timelineComboTemplate'" cssClass="timeline-dropdown"></e-item>
                        <template v-slot:timelineComboTemplate>
                            <ejs-combobox id="timeline" :dataSource="timelineData"
                                :value="timelineSettings.topTier.unit" :change="onTimelineChange" width="100px"
                                :showClearButton="false" placeholder="Select timeline mode"></ejs-combobox>
                        </template>
                        <e-item type="Separator" align="Right"></e-item>
                        <e-item align="Right" :template="'nextButtonTemplate'" cssClass="timeline-section"></e-item>
                        <template v-slot:nextButtonTemplate>
                            <ejs-button id="next-timespan" cssClass="next-timespan" v-on:click.native="nextTimespan"
                                iconCss="e-icons e-chevron-right-fill"></ejs-button>
                        </template>
                    </e-items>
                </ejs-toolbar>
                <ejs-gantt ref="gantt" id="Timezone" :dataSource="data" :taskFields="taskFields" :columns="columns"
                    :treeColumnIndex="treeColumnIndex" :height="height" :rowHeight="rowHeight"
                    :taskbarHeight="taskbarHeight" :timelineSettings="timelineSettings" :timezone="timezone"
                    :durationUnit="durationUnit" :includeWeekend="includeWeekend" :dateFormat="dateFormat"
                    :dayWorkingTime="dayWorkingTime"></ejs-gantt>
            </div>
        </div>
        <div id="action-description">
            <p>This sample demonstrates how the Vue Gantt Chart schedules project tasks using the UTC timezone,
                ensuring
                consistent date and time handling across global teams.</p>
        </div>
        <div id="description">
            <p>
                For example, in this demo, the timezone of Gantt is set to UTC, and the task named
                <code>Plan timeline</code>
                has start time as <code>08:00 am</code> but converted based on UTC and rendered at <code>2.30 am</code>.
            </p>
            <p>
                When a user sets any timezone, dates are converted based on the value set to <code><a target="_blank"
                class="code" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#timezone">timezone</a></code>
                property of Gantt control.
            </p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/timezone">documentation section</a>.
            </p>
        </div>
    </div>
</template>

<script>
import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-gantt': GanttComponent,
        'ejs-toolbar': ToolbarComponent,
        'ejs-combobox': ComboBoxComponent,
        'ejs-button': ButtonComponent,
        'e-item': ItemDirective,
        'e-items': ItemsDirective
    },
    data() {
        return {
            data: [
                { taskID: 1, taskName: 'Project Schedule', startDate: new Date('02/04/2025 08:00'), endDate: new Date('03/10/2025') },
                { taskID: 2, taskName: 'Planning', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), parentID: 1 },
                { taskID: 3, taskName: 'Plan timeline', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '60', parentID: 2 },
                { taskID: 4, taskName: 'Plan budget', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '90', parentID: 2 },
                { taskID: 5, taskName: 'Allocate resources', startDate: new Date('02/04/2025 08:00'), endDate: new Date('02/10/2025'), duration: 6, progress: '75', parentID: 2 },
                { taskID: 6, taskName: 'Planning complete', startDate: new Date('02/06/2025 08:00'), endDate: new Date('02/10/2025'), duration: 0, predecessor: '3FS,4FS,5FS', parentID: 2 },
                { taskID: 7, taskName: 'Design', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/17/2025 08:00'), parentID: 1 },
                { taskID: 8, taskName: 'Software Specification', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/15/2025'), duration: 3, progress: '60', predecessor: '6FS', parentID: 7 },
                { taskID: 9, taskName: 'Develop prototype', startDate: new Date('02/13/2025 08:00'), endDate: new Date('02/15/2025'), duration: 3, progress: '100', predecessor: '6FS', parentID: 7 },
                { taskID: 10, taskName: 'Get approval from customer', startDate: new Date('02/16/2025 08:00'), endDate: new Date('02/17/2025 08:00'), duration: 2, progress: '100', predecessor: '9FS', parentID: 7 },
                { taskID: 11, taskName: 'Design complete', startDate: new Date('02/17/2025 08:00'), endDate: new Date('02/17/2025 08:00'), duration: 0, predecessor: '10FS', parentID: 7 },
                { taskID: 12, taskName: 'Implementation', startDate: new Date('02/18/2025 08:00'), endDate: new Date('02/25/2025 08:00'), parentID: 1 },
                { taskID: 13, taskName: 'Develop core modules', startDate: new Date('02/18/2025 08:00'), endDate: new Date('02/22/2025'), duration: 5, progress: '80', predecessor: '11FS', parentID: 12 },
                { taskID: 14, taskName: 'Integrate modules', startDate: new Date('02/19/2025 08:00'), endDate: new Date('02/23/2025'), duration: 5, progress: '70', predecessor: '13FS', parentID: 12 },
                { taskID: 15, taskName: 'Implementation complete', startDate: new Date('02/25/2025 08:00'), endDate: new Date('02/25/2025 08:00'), duration: 0, predecessor: '14FS', parentID: 12 },
                { taskID: 16, taskName: 'Testing', startDate: new Date('02/26/2025 08:00'), endDate: new Date('03/02/2025 08:00'), parentID: 1 },
                { taskID: 17, taskName: 'Unit testing', startDate: new Date('02/26/2025 08:00'), endDate: new Date('02/28/2025'), duration: 3, progress: '50', predecessor: '15FS', parentID: 16 },
                { taskID: 18, taskName: 'Integration testing', startDate: new Date('02/27/2025 08:00'), endDate: new Date('03/01/2025'), duration: 4, progress: '40', predecessor: '17FS', parentID: 16 },
                { taskID: 19, taskName: 'Test report', startDate: new Date('03/02/2025 08:00'), endDate: new Date('03/02/2025 08:00'), duration: 0, predecessor: '18FS', parentID: 16 },
                { taskID: 20, taskName: 'Deployment', startDate: new Date('03/03/2025 08:00'), endDate: new Date('03/06/2025 08:00'), parentID: 1 },
                { taskID: 21, taskName: 'Configure environment', startDate: new Date('03/03/2025 08:00'), endDate: new Date('03/04/2025'), duration: 2, progress: '30', predecessor: '19FS', parentID: 20 },
                { taskID: 22, taskName: 'Deploy application', startDate: new Date('03/04/2025 08:00'), endDate: new Date('03/05/2025'), duration: 2, progress: '20', predecessor: '21FS', parentID: 20 },
                { taskID: 23, taskName: 'Deployment verification', startDate: new Date('03/06/2025 08:00'), endDate: new Date('03/06/2025 08:00'), duration: 0, predecessor: '22FS', parentID: 20 },
                { taskID: 24, taskName: 'Training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/08/2025 08:00'), parentID: 1 },
                { taskID: 25, taskName: 'User training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/07/2025'), duration: 1, progress: '10', predecessor: '23FS', parentID: 24 },
                { taskID: 26, taskName: 'Admin training', startDate: new Date('03/07/2025 08:00'), endDate: new Date('03/08/2025'), duration: 2, progress: '10', predecessor: '23FS', parentID: 24 },
                { taskID: 27, taskName: 'Training complete', startDate: new Date('03/08/2025 08:00'), endDate: new Date('03/08/2025 08:00'), duration: 0, predecessor: '25FS,26FS', parentID: 24 },
                { taskID: 28, taskName: 'Client Review', startDate: new Date('03/09/2025 08:00'), endDate: new Date('03/09/2025'), duration: 1, progress: '0', predecessor: '27FS', parentID: 1 },
                { taskID: 29, taskName: 'Project Handover', startDate: new Date('03/10/2025 08:00'), endDate: new Date('03/10/2025'), duration: 0, predecessor: '28FS', parentID: 1 },
                { taskID: 30, taskName: 'Post-Project Review', startDate: new Date('03/10/2025 08:00'), endDate: new Date('03/10/2025 08:00'), duration: 0, progress: '0', predecessor: '29FS', parentID: 1 }
            ],
            taskFields: {
                id: 'taskID',
                name: 'taskName',
                startDate: 'startDate',
                duration: 'duration',
                progress: 'progress',
                dependency: 'predecessor',
                parentID: 'parentID'
            },
            columns: [
                { field: 'taskID', visible: false, width: 60 },
                { field: 'taskName', headerText: 'Name', width: 250 },
                { field: 'startDate' },
                { field: 'endDate' },
                { field: 'duration' },
                { field: 'predecessor' },
                { field: 'progress' }
            ],
            treeColumnIndex: 1,
            timelineSettings: {
                timelineUnitSize: 90,
                topTier: {
                    unit: 'Day',
                    format: 'EEE dd/yyyy'
                },
                bottomTier: {
                    unit: 'Hour',
                    format: 'hh:mm a'
                }
            },
            timezone: '',
            durationUnit: 'Hour',
            includeWeekend: true,
            dateFormat: 'hh:mm a',
            height: '650px',
            rowHeight: 46,
            taskbarHeight: 25,
            dayWorkingTime: [{ from: 0, to: 23 }],
            timeZoneData: [],
            timeZoneFields: { text: 'text', value: 'id' },
            timelineData: ['Day', 'Week', 'Month']
        };
    },
    provide: {
        gantt: [Selection]
    },
    created() {
        // Initialize timeZoneData and timezone
        const localTimezone = this.getLocalTimeZoneWithOffset();
        this.timezone = 'UTC (UTC+00:00)'
        this.timeZoneData = this.getTimeZonesWithOffsets();
    },

    methods: {
        getLocalTimeZoneWithOffset() {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const timeZonesWithOffsets = this.getTimeZonesWithOffsets();
            return timeZonesWithOffsets.find(zone => zone.id === timeZone) || { id: 'UTC', text: 'UTC (UTC+00:00)' };
        },
        getTimeZonesWithOffsets() {
            const now = new Date();
            const zones = Intl.supportedValuesOf ? Intl.supportedValuesOf('timeZone') : [
                'UTC', 'Asia/Calcutta', 'America/New_York', 'America/Los_Angeles', 'Europe/London',
                'Australia/Sydney', 'Asia/Tokyo', 'America/Chicago', 'America/Denver', 'America/Sao_Paulo'
            ];
            return zones.map(tz => {
                const formatter = new Intl.DateTimeFormat('en-US', {
                    timeZone: tz,
                    timeZoneName: 'longOffset'
                });
                const parts = formatter.formatToParts(now);
                const offsetPart = parts.find(part => part.type === 'timeZoneName');
                const offset = offsetPart ? offsetPart.value.replace('GMT', 'UTC') : 'UTC+00:00';
                return { id: tz, text: `${tz} (${offset})` };
            });
        },
        onTimezoneChange(args) {
            if (!this.$refs.gantt || !this.$refs.gantt.ej2Instances) {
                console.error('Gantt instance not available');
                return;
            }
            if (args.value) {
                this.$refs.gantt.ej2Instances.timezone = args.value.split(' (')[0];
            } else {
                this.$refs.gantt.ej2Instances.timezone = null;
            }
            

        },
        onTimelineChange(args) {
            if (!this.$refs.gantt || !this.$refs.gantt.ej2Instances) {
                console.error('Gantt instance not available');
                return;
            }
            const gantt = this.$refs.gantt.ej2Instances;
            if (args.value === 'Day') {
                gantt.timelineSettings.topTier.unit = 'Day';
                gantt.timelineSettings.bottomTier.unit = 'Hour';
                gantt.timelineSettings.bottomTier.format = 'hh:mm a';
            } else if (args.value === 'Week') {
                gantt.timelineSettings.topTier.unit = 'Week';
                gantt.timelineSettings.bottomTier.unit = 'Day';
                gantt.timelineSettings.bottomTier.format = 'dd MMM';
            } else {
                gantt.timelineSettings.topTier.unit = 'Month';
                gantt.timelineSettings.bottomTier.unit = 'Day';
                gantt.timelineSettings.bottomTier.format = 'dd';
            }
           

        },
        previousTimespan() {
            if (!this.$refs.gantt || !this.$refs.gantt.ej2Instances) {
                console.error('Gantt instance not available');
                return;
            }
            this.$refs.gantt.ej2Instances.previousTimeSpan();

        },
        nextTimespan() {
            if (!this.$refs.gantt || !this.$refs.gantt.ej2Instances) {
                console.error('Gantt instance not available');
                return;
            }
            this.$refs.gantt.ej2Instances.nextTimeSpan();

        },
    }
}
</script>

<style>
.template.e-toolbar .total-page {
    padding-left: 4px;
    cursor: default;
    font-size: 14px;
    vertical-align: middle;
}

.template.e-toolbar .e-toolbar-pop .page-count,
.template.e-toolbar .e-toolbar-pop .timezone-dropdown,
.template.e-toolbar .e-toolbar-pop .timeline-section,
.template.e-toolbar .e-toolbar-pop .timeline-dropdown {
    display: none;
}

.template.e-toolbar .e-toolbar-items .e-toolbar-item:not(.e-separator) {
    padding-left: 2px;
    line-height: 1;
}

.e-bigger .previous-timespan,
.e-bigger .next-timespan {
    height: 38px !important;
    width: 38px !important;
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.previous-timespan,
.next-timespan {
    height: 32px !important;
    width: 32px !important;
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.timezone-label {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
}

.timezone-dropdown {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    min-width: 300px;
}

.timeline-section {
    display: flex;
    align-items: center;
    padding: 0 5px;
}

.timeline-dropdown {
    display: flex;
    align-items: center;
    padding: 0 5px;
    min-width: 100px;
}

.template.e-toolbar .e-toolbar-item.e-separator {
    margin: 0 2px;
}

.template.e-toolbar .e-separator {
    padding: 0px;
}

.template.e-toolbar .e-toolbar-item.e-template {
    padding: 0px !important;
}

.bootstrap5\.3 .template.e-toolbar .e-icons,
.bootstrap5\.3-dark .template.e-toolbar .e-icons {
    color: white;
}
</style>
