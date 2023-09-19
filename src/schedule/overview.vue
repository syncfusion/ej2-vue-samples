<template>
<div>
<div class="col-lg-12 control-section">
    <div class="content-wrapper">
        <div class="schedule-overview">
            <ejs-appbar colorMode="Primary">
                <span class="time e-icons e-time-zone"></span>
                <span id="timezoneBtn" class="time ">UTC</span>
                <span class="time e-icons e-clock"></span>
                <span id="timeBtn" class="time current-time">{{liveTimeUpdate}}</span>
                <div class="e-appbar-spacer"></div>
                <ejs-button id="printBtn" cssClass="title-bar-btn e-inherit"
                    iconCss="e-icons e-print" v-on:click="onPrint">Print</ejs-button>
                 <div class="control-panel import-button">
                    <ejs-uploader id='icalendar' cssClass='calendar-import' :multiple='multiple'
                        :buttons='buttons' :showFileList='showFileList' allowedExtensions='.ics'
                            :selected='onSelected'></ejs-uploader>
                </div>
                <div class="control-panel calendar-export">
                    <ejs-dropdownbutton id="exportBtn" cssClass = 'e-inherit' :items='exportItems' :select="onExportItemSelect">Export</ejs-dropdownbutton>
                </div>
                    <ejs-button id="settingsBtn" iconCss="e-icons e-settings"
                        cssClass="overview-toolbar-settings e-inherit" iconPosition="Top"
                        v-on:click.native="onSettingsClick"></ejs-button>
            </ejs-appbar>
                    <ejs-toolbar id="toolbarOptions" height="70px" overflowMode="Scrollable" scrollStep="100"  cssClass= 'overview-toolbar'
                        :created="onToolbarCreated" :clicked="onToolbarItemClicked">
                        <e-items>
                            <e-item prefixIcon='e-icons e-plus' tooltipText='New Event' text='New Event' tabindex="0">
                            </e-item>
                            <e-item prefixIcon='e-icons e-repeat'
                                tooltipText='New Recurring Event' text='New Recurring Event' tabindex="0"></e-item>
                            <e-item type='Separator'></e-item>
                            <e-item prefixIcon='e-icons e-day' tooltipText='Day' text='Day' tabindex="0"></e-item>
                            <e-item prefixIcon='e-icons e-week' tooltipText='Week' text='Week' tabindex="0"></e-item>
                            <e-item prefixIcon='e-icons e-week' tooltipText='WorkWeek'
                                text='WorkWeek' tabindex="0"></e-item>
                            <e-item prefixIcon='e-icons e-month' tooltipText='Month' text='Month' tabindex="0">
                            </e-item>
                            <e-item prefixIcon='e-icons e-month' tooltipText='Year' text='Year' tabindex="0"></e-item>
                            <e-item prefixIcon='e-icons e-agenda-date-range' tooltipText='Agenda' text='Agenda' tabindex="0">
                            </e-item>
                            <e-item tooltipText="Timeline Views" :template="'timelineTemplate'"></e-item>
                            <template v-slot:timelineTemplate>
                                <div class="template">
                                    <div class="icon-child">
                                        <ejs-checkbox id="timeline_views" :checked="false" :created="onTimelineCreated" :change="onTimelineViewChange"></ejs-checkbox>
                                    </div>
                                    <div class="text-child">Timeline Views</div>
                                </div>                                             
                            </template>
                            <e-item type='Separator'></e-item>
                            <e-item tooltipText="Resource Grouping" :template="'groupTemplate'"></e-item>
                            <template v-slot:groupTemplate>
                                <div class="template">
                                    <div class="icon-child">
                                        <ejs-checkbox id="grouping" :checked="true" :created="onCreated" :change="onGroupingChange"></ejs-checkbox>
                                    </div><div class="text-child">Grouping</div>
                                </div>                            
                            </template>
                            <e-item tooltipText="Time Slots" :template="'gridlineTemplate'"></e-item>
                            <template v-slot:gridlineTemplate>
                                <div class="template">
                                    <div class="icon-child">
                                        <ejs-checkbox id="timeSlot" :checked="true" :created="onTimeSlotCreated" :change="onTimeSlotChange"></ejs-checkbox>
                                    </div>
                                    <div class="text-child">Time Slots</div>
                                </div>                        
                            </template>
                            <e-item tooltipText="Auto Fit Rows" :template="'autoHeightTemplate'"></e-item>
                            <template v-slot:autoHeightTemplate>
                                <div class="template">
                                    <div class="icon-child">
                                        <ejs-checkbox id="row_auto_height" :checked="false" :created="onRowAutoHeightCreated" :change="onRowAutoHeightChange"></ejs-checkbox>
                                    </div>
                                    <div class="text-child">Auto Fit Rows</div>
                                </div>                        
                            </template>
                        </e-items>
                    </ejs-toolbar>
            <div class="overview-content">
                <div class="left-panel">
                    <div class="overview-scheduler">
                        <ejs-schedule id='scheduler' ref="scheduleObj"  height="100%" cssClass='schedule-overview' :currentView='currentView' timezone='UTC' :dateHeaderTemplate="dateHeaderTemplate" :group='group' :eventSettings='eventSettings'>
                            <e-views>
                                <e-view option="Day"></e-view>
                                <e-view option="Week"></e-view>
                                <e-view option="WorkWeek"></e-view>
                                <e-view option="Month"></e-view>
                                <e-view option="Year"></e-view>
                                <e-view option="Agenda"></e-view>
                                <e-view option="TimelineDay"></e-view>
                                <e-view option="TimelineWeek"></e-view>
                                <e-view option="TimelineWorkWeek"></e-view>
                                <e-view option="TimelineMonth"></e-view>
                                <e-view option="TimelineYear"></e-view>
                            </e-views>
                            <e-resources>
                              <e-resource field="CalendarId" title="Calendars" :dataSource="resourceDataSource" :query='resourceQuery' :allowMultiple="allowMultiple" name="Calendars"
                              textField="CalendarText" idField="CalendarId" colorField='CalendarColor'>
                              </e-resource>
                            </e-resources>
                         </ejs-schedule>
                         <ejs-contextmenu id="overviewContextMenu" ref="menuObj" cssClass="schedule-context-menu" target=".e-schedule" :items="menuItems" :beforeOpen="onContextMenuBeforeOpen" :select="onMenuItemSelect" ></ejs-contextmenu>
                    </div>
                </div>
                <div class="right-panel hide">
                    <div class="control-panel e-css">
                       <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Calendar</label>
                            </div>
                            <div class="col-right">
                                <ejs-multiselect id='resources' ref="resourcesObj" cssClass="schedule-workweek" index="0" :dataSource='resourceDataSource' 
                                    :mode='checkboxMode' :fields='calendarFields' enableSelectionOrder="false" showClearButton="false" showDropDownIcon="true" 
                                    :value='calendarsValue' :change='onResourceChange'></ejs-multiselect>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">First Day of Week</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='weekFirstDay' :dataSource='weekDays'
                                    :change='onWeekDayChange' :value='firstDayOfWeek' :fields='fields'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work week</label>
                            </div>
                            <div class="col-right">
                                <ejs-multiselect id='workWeekDays' ref="workWeekDaysObj" cssClass="schedule-workweek" :dataSource='weekDays' enableSelectionOrder="false" :showClearButton="false"
                                    showDropDownIcon="true" :mode='checkboxMode' :fields='fields' :value='workDays'
                                    :change='onWorkWeekDayChange'></ejs-multiselect>
                            </div>
                        </div>
                         <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Timezone</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='timezone' :dataSource='timezoneData'
                                    :change='onTimezoneChange' value='Etc/GMT' :fields='fields'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Day Start Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='dayStartHour' :showClearButton='false'
                                    :value='dayStartHourValue' :change='onDayStartHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Day End Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='dayEndHour' :showClearButton='false'
                                    :value='dayEndHourValue' :change='onDayEndHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work Start Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='workHourStart' :showClearButton='false'
                                    :value='workStartHourValue' :change='onWorkStartHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work End Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='workHourEnd' :showClearButton='false'
                                    :value='workEndHourValue' :change='onWorkEndHourChange'></ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Slot Duration</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='slotDuration' :dataSource='timeSlotDuration'
                                    :change='onTimescaleDurationChange' :value='timeSlotDurationValue'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Slot Interval</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='slotInterval' :dataSource='timeSlotCount'
                                    :change='onTimescaleIntervalChange' :value='timeSlotCountValue'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Time Format</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='timeFormat' :dataSource='timeFormatdata'
                                    :change='onchangeTimeFormat' :value='timeFormatValue' :fields='fields'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Week Numbers</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='weekNumber' :dataSource='weekNumberData'
                                    :change='onchangeWeekNumber' :fields='fields' :value='weekNumberValue'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Tooltip</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='tooltip' :dataSource='tooltipData'
                                    :change='onTooltipChange' :fields='fields' :value='tooltipValue'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="action-description">
    <p>This <a href="https://www.syncfusion.com/vue-ui-components/vue-scheduler" target="_blank">Vue Scheduler example</a> demonstrates the overview of Vue Scheduler with its overall features. Use the toolbar buttons
        to play with Scheduler functionalities.</p>
</div>
<div id="description">
    <p>The Vue Scheduler is a fully-features calendar component that is used to manage appointments with multiple
        resources. The data can be pulled from the <code>dataManager</code> component or valid local JSON data or
        Restful web services and bind the data fields using <code>eventSettings.fields</code>.
    </p>
    <p>In this demo, Vue Scheduler features such as Multiple views, Templates (Date Header, Quick Info),
        Resources, Grouping, Timezone, Timescale, etc... are used along with multiple resources.</p>
</div>
</div>
</template>

<style>

    .tailwind .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f3f4f6;
    }

    .tailwind-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #374151;
        color: #fff;
    }

    .material .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #fafafa;
    }

    .material-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #2a2a2a;
        color: #ffff;
    }

    .fabric .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #ffffff;
    }

    .fabric-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #333232;
        color: #fff;
    }

    .fluent .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f3f2f1;
    }

    .fluent-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #252423;
        border-color: #c1c1c1;
        color: #fff;
    }

    .bootstrap .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f8f8f8;
    }

    .bootstrap-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #2a2a2a;
        color: #fff;
    }

    .bootstrap5 .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f8f9fa;
        color: #212529;
    }

    .bootstrap5-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #343a40;
        color: #fff;
    }

    .highcontrast .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #000000;
        color: #ffffff;
    }

    .material3 .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f3f1f8;
    }

    .material3-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #2a2731;
    }

    .schedule-overview .overview-toolbar.e-rtl + *{
        flex-direction: row-reverse;
    }

    .schedule-overview .overview-toolbar.e-toolbar {
        border-radius: 0;
    }

    .schedule-overview .overview-toolbar.e-toolbar .e-toolbar-item .e-tbar-btn.e-tbtn-txt {
        display: inline-grid;
    }

    .material .schedule-overview .overview-toolbar.e-toolbar {
        border-style: solid;
    }

    .schedule-overview .overview-toolbar.e-toolbar .e-toolbar-item:not(.e-separator) {
        padding: 3.5px;
    }

    .schedule-overview .overview-toolbar.e-toolbar .e-toolbar-item .e-btn.e-tbar-btn .e-icons.e-btn-icon,
    .schedule-overview .overview-toolbar.e-toolbar .e-toolbar-item .e-btn.e-tbar-btn .e-tbar-btn-text {
        line-height: 23px !important;
        min-height: 23px !important;
        padding: 0px !important;
    }

    .schedule-overview .overview-toolbar.e-toolbar .e-toolbar-item.e-template {
        margin: 0 5px;
    }

    .schedule-overview .overview-content {
        display: flex;
    }

    .schedule-overview .overview-content .left-panel {
        height: 700px;
        width: 100%;
    }

    .schedule-overview .overview-content .right-panel {
        display: block;
        height: 700px;
        transform: translateX(0%);
        transition: transform .5s ease, width 500ms;
        width: 500px;
    }

    .schedule-overview .overview-content .right-panel.hide {
        display: none;
        transform: translateX(100%);
        transition: transform .5s ease, width 500ms;
        width: 0;
    }

    .schedule-overview .overview-content .right-panel .control-panel {
        background: #f8f9fa;
        font-size: 14px;
        height: 100%;
        overflow: auto;
        padding: 15px;
        width: 100%;
    }

    .schedule-overview .overview-content .right-panel .control-panel .col-row {
        display: flex;
        flex-wrap: wrap;
    }

    .schedule-overview .overview-content .right-panel .control-panel label {
        font-weight: 500;
    }

    .schedule-overview .overview-content .right-panel .control-panel .col-left {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
        margin-bottom: 1rem;
    }

    .schedule-overview .overview-content .right-panel .control-panel .col-right {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
        margin-bottom: 1rem;
    }

    .schedule-overview .overview-scheduler {
        height: 100%;
        width: 100%;
    }

    .schedule-overview .e-schedule-toolbar .e-views,
    .schedule-overview .e-schedule-toolbar .e-schedule-seperator,
    .schedule-workweek.e-multi-select-list-wrapper.e-checkbox .e-filter-parent,
    .schedule-resource.e-multi-select-list-wrapper.e-checkbox .e-filter-parent {
        display: none;
    }

    .schedule-overview .e-timeline-view .e-resource-left-td,
    .schedule-overview .e-timeline-month-view .e-resource-left-td {
        width: 120px;
    }

    .schedule-resource.e-multi-select-list-wrapper.e-checkbox .e-list-parent:first-child li:first-child {
        background-image: none;
        opacity: .5;
        pointer-events: none;
        user-select: none;
    }

    .schedule-overview .calendar-import.e-upload {
        border: 0;
        padding-left: 0 !important;
    }

    .schedule-overview .calendar-import.e-upload .e-btn-icon {
        margin-left: initial;
    }

    .schedule-overview .calendar-import.e-upload .e-file-select-wrap {
        padding: 0
    }

    .schedule-overview .calendar-import.e-upload .e-file-select-wrap .e-file-drop,
    .calendar-import .e-upload-files {
        display: none;
    }

    .e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {
        font-size: 14px;
    }

    .schedule-context-menu ul .e-menu-item .e-menu-icon {
        font-size: 12px;
    }

    .schedule-overview.e-schedule .e-vertical-view .e-header-cells,
    .schedule-overview.e-schedule .e-timeline-month-view .e-header-cells {
        padding: 0;
        text-align: center !important;
    }

    .schedule-overview.e-schedule .date-text {
        font-size: 14px;
    }

    .schedule-overview.e-schedule.e-device .date-text {
        font-size: 12px;
    }

    .schedule-overview.e-schedule .weather-image {
        width: 20px;
        height: 20px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .schedule-overview.e-schedule .e-month-view .weather-image {
        float: right;
        margin: -20px 2px 0 0;
        width: 20px;
        height: 20px;
    }

    .fluent .e-appbar .e-btn-icon.e-icons,
    .fluent-dark .e-appbar .e-btn-icon.e-icons {
        margin-top: -2px;
    }

    .fluent .e-toolbar-item .e-checkbox-wrapper .e-icons.e-frame,
    .fluent-dark .e-toolbar-item .e-checkbox-wrapper .e-icons.e-frame {
        height: 17px;
        line-height: 17px;
        width: 17px;
    }

    .fluent .e-toolbar-item .e-checkbox-wrapper .e-icons.e-frame.e-check,
    .fluent-dark .e-toolbar-item .e-checkbox-wrapper .e-icons.e-frame.e-check {
        font-size: 15px;
        line-height: 16px;
    }

    .schedule-overview .overview-toolbar.e-toolbar .e-toolbar-item .e-tbar-btn {
        padding-top: 2px;
        padding-bottom: 2px;
    }

    #exportBtn {
        white-space: nowrap;
    }

    .time {
        display: flex;
        gap: 5px;
        align-items: center;
        padding: 0 5px;
    }

    .template {
        height: 46px;
        line-height: 23px;
    }

    .template .icon-child {
        text-align: center;
        height: 23px !important;
    }

    .template .text-child {
        font-size: 14px;
        line-height: 23px !important;
    }

    @media (max-width: 481px) {
        .schedule-overview .overview-content .right-panel {
            position: absolute;
            width: 90%;
        }

        .import-button,
        #printBtn,
        #exportBtn {
            display: none;
        }

    }

    @media (max-width: 1024px) {
        .schedule-overview .overview-content .right-panel .control-panel .col-row {
            display: initial;
        }

        .schedule-overview .overview-content .right-panel .control-panel .col-left {
            flex: initial;
            max-width: initial;
            margin-bottom: initial;
        }

        .schedule-overview .overview-content .right-panel .control-panel .col-right {
            flex: initial;
            max-width: initial;
        }
    }
</style>

<script>
    import { createApp } from 'vue';
    import { ScheduleComponent, ViewDirective, ViewsDirective, ResourceDirective, ResourcesDirective, Day, Week, WorkWeek, Month, Agenda, TimelineMonth, Year, TimelineViews,TimelineYear, Resize, DragAndDrop, Timezone, Print, ExcelExport,ICalendarImport, ICalendarExport } from "@syncfusion/ej2-vue-schedule";
    import { addClass, extend, removeClass, closest, remove, isNullOrUndefined, Internationalization, createElement } from '@syncfusion/ej2-base';
    import { DataManager, Predicate, Query } from '@syncfusion/ej2-data';
    import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
    import { UploaderComponent, TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
    import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
    import { ToolbarComponent, ItemsDirective, ItemDirective } from "@syncfusion/ej2-vue-navigations";
    import { TimePickerComponent } from "@syncfusion/ej2-vue-calendars";
    import { MultiSelectComponent, DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
    import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
    import { ContextMenuComponent } from '@syncfusion/ej2-vue-navigations';
    import { AppBarComponent } from "@syncfusion/ej2-vue-navigations";
    MultiSelect.Inject(CheckBoxSelection);

    var app = createApp();
    var dateHeaderTemplate = app.component("date-header-template", {
        template: '<div><div class="date-text">{{getDateHeaderDay(data.date)}}</div><div class="date-text">' +
            '{{getDateHeaderDate(data.date)}}</div><div v-html=getWeather(data.date)></div></div>',
        data() {
            return {
                intl: new Internationalization(),
                data: {},
                dateHeader: ''
            };
        },
        methods: {
            getDateHeaderDay: function (value) {
                return value ? this.intl.formatDate(value, { skeleton: 'E' }): '';
            },
             getDateHeaderDate: function (value) {
                return value ? this.intl.formatDate(value, { skeleton: 'd' }): '';
            },
            getWeather: function (value) {
                if (value) {
                    switch (value.getDay()) {
            case 0:
                return '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/>';
            case 1:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/>';
            case 2:
                return '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/>';
            case 3:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/>';
            case 4:
                return '<img class="weather-image" src="src/schedule/images/weather-rain.svg"/>';
            case 5:
                return '<img class="weather-image" src="src/schedule/images/weather-clear.svg"/>';
            case 6:
                return '<img class="weather-image" src="src/schedule/images/weather-clouds.svg"/>';
            default:
                return null;
                }
                }

            }
        }
    });

    var liveTimeInterval;

    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective,
          'e-resource': ResourceDirective,
          'e-resources': ResourcesDirective,
          'ejs-dropdownlist': DropDownListComponent,
          'ejs-appbar': AppBarComponent,
          'ejs-button': ButtonComponent,
          'ejs-uploader': UploaderComponent,
          'ejs-dropdownbutton': DropDownButtonComponent,
          'ejs-toolbar': ToolbarComponent,
          'e-items': ItemsDirective,
          'e-item': ItemDirective,
          'ejs-contextmenu': ContextMenuComponent,
          'ejs-timepicker': TimePickerComponent,
          'ejs-multiselect': MultiSelectComponent,
          'ejs-checkbox': CheckBoxComponent,
        },
        data: function () {
            return {
                intl: new Internationalization(),
                eventSettings: { dataSource: this.generateEvents() },
                currentView: 'Week',
                group: { resources: ['Calendars'] },
                resourceDataSource:  [
                  { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
                  { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
                  { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
                  { CalendarText: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
                ],
                resourceQuery: new Query().where('CalendarId', 'equal', 1),
                allowMultiple: true,
                liveTimeUpdate: new Date().toLocaleTimeString('en-US', { timeZone: 'UTC' }),
                showFileList: false,
                multiple:  false,
                calendarFields: { text: 'CalendarText', value: 'CalendarId' },
                firstDayOfWeek: 0,
                dayStartHourValue: new Date(new Date().setHours(0, 0, 0)),
                dayEndHourValue: new Date(new Date().setHours(23, 59, 59)),
                workStartHourValue: new Date(new Date().setHours(9, 0, 0)),
                workEndHourValue:  new Date(new Date().setHours(18, 0, 0)),
                timeSlotDuration: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
                timeSlotCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                timeSlotDurationValue: 60,
                timeSlotCountValue: 2,
                timeFormatdata: [
                  { text: '12 hours', value: "hh:mm a" },
                  { text: '24 hours', value: "HH:mm" }
                ],
                timeFormatValue: "hh:mm a", 
                weekNumberData: [
                    { text: 'Off', value: 'Off' },
                    { text: 'First Day of Year', value: 'FirstDay' },
                    { text: 'First Full Week', value: 'FirstFullWeek' },
                    { text: 'First Four-Day Week', value: 'FirstFourDayWeek' }
                ],
                weekNumberValue: "Off",
                tooltipData: [
                    { text: 'Off', value: "Off"},
                    { text: 'On', value: "On"},
                ],
                tooltipValue: 'Off',
                checkboxMode: 'CheckBox',
                workDays: [1, 2, 3, 4, 5],
                weekDays: [
                  { text: 'Sunday', value: 0 },
                  { text: 'Monday', value: 1 },
                  { text: 'Tuesday', value: 2 },
                  { text: 'Wednesday', value: 3 },
                  { text: 'Thursday', value: 4 },
                  { text: 'Friday', value: 5 },
                  { text: 'Saturday', value: 6 }
                ],
                calendarsValue: [1],
                buttons: { browse: this.importTemplateFn() },
                exportItems: [
                  { text: 'iCalendar', iconCss: 'e-icons e-export' },
                  { text: 'Excel', iconCss: 'e-icons e-export-excel' }
                ],
                weekDays: [
                  { text: 'Sunday', value: 0 },
                  { text: 'Monday', value: 1 },
                  { text: 'Tuesday', value: 2 },
                  { text: 'Wednesday', value: 3 },
                  { text: 'Thursday', value: 4 },
                  { text: 'Friday', value: 5 },
                  { text: 'Saturday', value: 6 }
                ],
                fields: { text: 'text', value: 'value' },
                timezoneData: [
                  { text: 'UTC -12:00', value: 'Etc/GMT+12' },
                  { text: 'UTC -11:00', value: 'Etc/GMT+11' },
                  { text: 'UTC -10:00', value: 'Etc/GMT+10' },
                  { text: 'UTC -09:00', value: 'Etc/GMT+9' },
                  { text: 'UTC -08:00', value: 'Etc/GMT+8' },
                  { text: 'UTC -07:00', value: 'Etc/GMT+7' },
                  { text: 'UTC -06:00', value: 'Etc/GMT+6' },
                  { text: 'UTC -05:00', value: 'Etc/GMT+5' },
                  { text: 'UTC -04:00', value: 'Etc/GMT+4' },
                  { text: 'UTC -03:00', value: 'Etc/GMT+3' },
                  { text: 'UTC -02:00', value: 'Etc/GMT+2' },
                  { text: 'UTC -01:00', value: 'Etc/GMT+1' },
                  { text: 'UTC +00:00', value: 'Etc/GMT' },
                  { text: 'UTC +01:00', value: 'Etc/GMT-1' },
                  { text: 'UTC +02:00', value: 'Etc/GMT-2' },
                  { text: 'UTC +03:00', value: 'Etc/GMT-3' },
                  { text: 'UTC +04:00', value: 'Etc/GMT-4' },
                  { text: 'UTC +05:00', value: 'Etc/GMT-5' },
                  { text: 'UTC +05:30', value: 'Asia/Calcutta' },
                  { text: 'UTC +06:00', value: 'Etc/GMT-6' },
                  { text: 'UTC +07:00', value: 'Etc/GMT-7' },
                  { text: 'UTC +08:00', value: 'Etc/GMT-8' },
                  { text: 'UTC +09:00', value: 'Etc/GMT-9' },
                  { text: 'UTC +10:00', value: 'Etc/GMT-10' },
                  { text: 'UTC +11:00', value: 'Etc/GMT-11' },
                  { text: 'UTC +12:00', value: 'Etc/GMT-12' },
                  { text: 'UTC +13:00', value: 'Etc/GMT-13' },
                  { text: 'UTC +14:00', value: 'Etc/GMT-14' }
                ],
                 menuItems: [
                    {
                        text: 'New Event',
                        iconCss: 'e-icons e-plus',
                        id: 'Add'
                    }, {
                        text: 'New Recurring Event',
                        iconCss: 'e-icons e-repeat',
                        id: 'AddRecurrence'
                    }, {
                        text: 'Today',
                        iconCss: 'e-icons e-timeline-today',
                        id: 'Today'
                    }, {
                        text: 'Edit Event',
                        iconCss: 'e-icons e-edit',
                        id: 'Save'
                    }, {
                        text: 'Edit Event',
                        id: 'EditRecurrenceEvent',
                        iconCss: 'e-icons e-edit',
                        items: [{
                            text: 'Edit Occurrence',
                            id: 'EditOccurrence'
                        }, {
                            text: 'Edit Series',
                            id: 'EditSeries'
                        }]
                    }, {
                        text: 'Delete Event',
                        iconCss: 'e-icons e-trash',
                        id: 'Delete'
                    }, {
                        text: 'Delete Event',
                        id: 'DeleteRecurrenceEvent',
                        iconCss: 'e-icons e-trash',
                        items: [{
                            text: 'Delete Occurrence',
                            id: 'DeleteOccurrence'
                        }, {
                            text: 'Delete Series',
                            id: 'DeleteSeries'
                        }]
                    }
                ],
                selectedTarget: null,              
                dateHeaderTemplate: function () {
                    return { template: dateHeaderTemplate }
                },
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop,TimelineMonth, TimelineViews, Year, TimelineYear, Print, ExcelExport,ICalendarImport, ICalendarExport]
        },
        beforeUnmount: function () {
            if (liveTimeInterval) {
                clearInterval(liveTimeInterval);
            }
        },
         mounted: function () { 
            const element = document.querySelector('.calendar-import .e-css.e-btn');
            element.classList.add('e-inherit');
         },
        methods: {
        onTimelineCreated: function() {
            document.getElementById('timeline_views').setAttribute('tabindex', '0');
        },
        onTimelineViewChange: function(args) {
            let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
            let isTimelineView = args.checked;
            switch (scheduleObj.currentView) {
                case 'Day':
                case 'TimelineDay':
                    scheduleObj.currentView = isTimelineView ? 'TimelineDay' : 'Day';
                    break;
                case 'Week':
                case 'TimelineWeek':
                    scheduleObj.currentView = isTimelineView ? 'TimelineWeek' : 'Week';
                    break;
                case 'WorkWeek':
                case 'TimelineWorkWeek':
                    scheduleObj.currentView = isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                    break;
                case 'Month':
                case 'TimelineMonth':
                    scheduleObj.currentView = isTimelineView ? 'TimelineMonth' : 'Month';
                    break;
                case 'Year':
                case 'TimelineYear':
                    scheduleObj.currentView = isTimelineView ? 'TimelineYear' : 'Year';
                    break;
                case 'Agenda':
                    scheduleObj.currentView = 'Agenda';
                    break;
            }
        },
        onTimeSlotCreated: function() {
            document.getElementById('timeSlot').setAttribute('tabindex', '0');
        },
        onTimeSlotChange: function(args) {
            let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
            scheduleObj.timeScale.enable = args.checked;
        },
        onCreated: function() {
            document.getElementById('grouping').setAttribute('tabindex', '0');
        },
        onGroupingChange: function(args) {
            let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
            scheduleObj.group.resources = args.checked ? ['Calendars'] : [];
        },
        onRowAutoHeightCreated: function() {
            document.getElementById('row_auto_height').setAttribute('tabindex', '0');
        },
        onRowAutoHeightChange: function(args) {
            let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
            scheduleObj.rowAutoHeight = args.checked;
        },
        importTemplateFn: function() {
            return createElement('div', { className: 'e-template-btn', innerHTML: '<span class="e-btn-icon e-icons e-upload-1 e-icon-left"></span>Import' });
        },
        onSelected: function(args) {
            let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
            scheduleObj.importICalendar((args.event.target).files[0]);
        },
        onPrint: function () {
            let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
            scheduleObj.print();
        },
        onExportItemSelect: function(args) {
            var scheduleObj = document.getElementById('scheduler').ej2_instances[0];
            if (args.item.text === 'Excel') {
                var exportDatas = [];
                var eventCollection = scheduleObj.getEvents();
                var resourceCollection = scheduleObj.getResourceCollections();
                var resourceData = resourceCollection[0].dataSource;
                for (var i = 0; i < resourceData.length; i++) {
                    var resource = resourceData[i];
                    var data = eventCollection.filter(function (e) { return e.CalendarId === resource.CalendarId; });
                    exportDatas = exportDatas.concat(data);
                }
                scheduleObj.exportToExcel({
                    exportType: 'xlsx',
                    customData: exportDatas,
                    fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'CalendarId']
                });
            }
            else {
                scheduleObj.exportToICalendar();
            }
        },
        onSettingsClick: function(args) {
          let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
        const settingsPanel = document.querySelector('.overview-content .right-panel');
        if (settingsPanel.classList.contains('hide')) {
            removeClass([settingsPanel], 'hide');
            this.$refs.workWeekDaysObj.ej2Instances.refresh();
            this.$refs.resourcesObj.ej2Instances.refresh();
        } else {
            addClass([settingsPanel], 'hide');
        }
        scheduleObj.refreshEvents();
        },
        generateEvents: function() {
            const eventData = [];
            const eventSubjects = [
            'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
            'Farewell Celebration', 'Wedding Anniversary', 'Alaska: The Last Frontier', 'Deadliest Catch', 'Sports Day', 'MoonShiners',
            'Close Encounters', 'HighWay Thru Hell', 'Daily Planet', 'Cash Cab', 'Basketball Practice', 'Rugby Match', 'Guitar Class',
            'Music Lessons', 'Doctor checkup', 'Brazil - Mexico', 'Opening ceremony', 'Final presentation'
        ];
        const weekDate = new Date(new Date().setDate(new Date().getDate() - new Date().getDay()));
        let startDate = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 10, 0);
        let endDate = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate(), 11, 30);
        eventData.push({
            Id: 1,
            Subject: eventSubjects[Math.floor(Math.random() * (24 - 0 + 1) + 0)],
            StartTime: startDate,
            EndTime: endDate,
            Location: '',
            Description: 'Event Scheduled',
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1;COUNT=10;',
            IsAllDay: false,
            IsReadonly: false,
            CalendarId: 1
        });
        for (let a = 0, id = 2; a < 500; a++) {
            const month = Math.floor(Math.random() * (11 - 0 + 1) + 0);
            const date = Math.floor(Math.random() * (28 - 1 + 1) + 1);
            const hour = Math.floor(Math.random() * (23 - 0 + 1) + 0);
            const minutes = Math.floor(Math.random() * (59 - 0 + 1) + 0);
            const start = new Date(new Date().getFullYear(), month, date, hour, minutes, 0);
            const end = new Date(start.getTime());
            end.setHours(end.getHours() + 2);
            startDate = new Date(start.getTime());
            endDate = new Date(end.getTime());
            eventData.push({
                Id: id,
                Subject: eventSubjects[Math.floor(Math.random() * (24 - 0 + 1) + 0)],
                StartTime: startDate,
                EndTime: endDate,
                Location: '',
                Description: 'Event Scheduled',
                IsAllDay: id % 10 === 0,
                IsReadonly: endDate < new Date(),
                CalendarId: (a % 4) + 1
            });
            id++;
        }
        if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
            Timezone.prototype.offset = (date, zone) => moment.tz.zone(zone).utcOffset(date.getTime());
        }
        const overviewEvents = extend([], eventData, null, true);
        const timezone = new Timezone();
        const utcTimezone = 'UTC';
        const currentTimezone = timezone.getLocalTimezoneName();
        for (const event of overviewEvents) {
            event.StartTime = timezone.convert(event.StartTime, utcTimezone, currentTimezone);
            event.EndTime = timezone.convert(event.EndTime, utcTimezone, currentTimezone);
        }
        return overviewEvents;
      },
    onWeekDayChange: function(args) {
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        scheduleObj.firstDayOfWeek = args.value;
      },
    updateLiveTime: function(timezone = 'UTC') {
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        if (scheduleObj.isAdaptive) {
            this.liveTimeUpdate = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: timezone });
        }
        else {
            this.liveTimeUpdate = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
        }
    },
    onToolbarCreated: function() {
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        liveTimeInterval = setInterval(() => { this.updateLiveTime(scheduleObj ? scheduleObj.timezone : 'UTC'); }, 1000);
    },
    onToolbarItemClicked: function(args) {
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        let timelineSwitch = document.getElementById('timeline_views').ej2_instances[0];
        let isTimelineView = timelineSwitch.checked;
        switch (args.item.text) {
            case 'Day':
                scheduleObj.currentView = isTimelineView ? 'TimelineDay' : 'Day';
                break;
            case 'Week':
                scheduleObj.currentView = isTimelineView ? 'TimelineWeek' : 'Week';
                break;
            case 'WorkWeek':
                scheduleObj.currentView = isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                break;
            case 'Month':
                scheduleObj.currentView = isTimelineView ? 'TimelineMonth' : 'Month';
                break;
            case 'Year':
                scheduleObj.currentView = isTimelineView ? 'TimelineYear' : 'Year';
                break;
            case 'Agenda':
                scheduleObj.currentView = 'Agenda';
                break;
            case 'New Event':
                const eventData = this.getEventData();
                scheduleObj.openEditor(eventData, 'Add', true);
                break;
            case 'New Recurring Event':
                const recEventData = this.getEventData();
                scheduleObj.openEditor(recEventData, 'Add', true, 1);
                break;
        }
    },
    getEventData: function() {
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        const date = scheduleObj.selectedDate;
        return {
            Id: scheduleObj.getEventMaxID(),
            Subject: '',
            StartTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours(), 0, 0),
            EndTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours() + 1, 0, 0),
            Location: '',
            Description: '',
            IsAllDay: false,
            CalendarId: 1
        };

    },
    onTimezoneChange(args) {
        let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
        scheduleObj.timezone = args.value;
        this.updateLiveTime(scheduleObj.timezone);
        document.querySelector('.schedule-overview #timezoneBtn').innerHTML =
            '<span class="e-btn-icon e-icons e-time-zone e-icon-left"></span>' + args.itemData.text;
    },
    onDayStartHourChange: function(args) {
        let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
        scheduleObj.startHour = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    },
    onDayEndHourChange: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      scheduleObj.endHour = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    },
    onWorkStartHourChange: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      scheduleObj.workHours.start = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    },
    onWorkEndHourChange: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      scheduleObj.workHours.end = this.intl.formatDate(args.value, { skeleton: 'Hm' });
    },
    onTimescaleDurationChange: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      scheduleObj.timeScale.interval = args.value;
    },
    onTimescaleIntervalChange: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      scheduleObj.timeScale.slotCount = args.value;
    },
    onchangeTimeFormat: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      scheduleObj.timeFormat = args.value;
    },
    onchangeWeekNumber: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      if(args.value == "Off"){
          scheduleObj.showWeekNumber = false;
      } else {
          scheduleObj.showWeekNumber = true;
          scheduleObj.weekRule = args.value;
      }
    },
    onWorkWeekDayChange: function(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      scheduleObj.workDays = args.value;
    },
    onResourceChange(args) {
      let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
      let resourcePredicate;
        for (const value of args.value) {
            if (resourcePredicate) {
                resourcePredicate = resourcePredicate.or(new Predicate('CalendarId', 'equal', value));
            } else {
                resourcePredicate = new Predicate('CalendarId', 'equal', value);
            }
        }
        scheduleObj.resources[0].query = resourcePredicate ? new Query().where(resourcePredicate) :
        new Query().where('CalendarId', 'equal', 1);
    },
    onTooltipChange(args) {
        let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
        scheduleObj.eventSettings.enableTooltip = args.value;
    },
    onContextMenuBeforeOpen: function(args) {
        let newEventElement = document.querySelector('.e-new-event');
        if (newEventElement) {
            remove(newEventElement);
            removeClass([document.querySelector('.e-selected-cell')], 'e-selected-cell');
        }
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        scheduleObj.closeQuickInfoPopup();
        let targetElement = args.event.target;
        if (closest(targetElement, '.e-contextmenu')) {
            return;
        }
        let menuObj = this.$refs.menuObj;
        this.selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,' +
        '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
        if (isNullOrUndefined(this.selectedTarget)) {
            args.cancel = true;
            return;
        }
        if (this.selectedTarget.classList.contains('e-appointment')) {
            let eventObj= scheduleObj.getEventDetails(this.selectedTarget);
            if (eventObj.RecurrenceRule) {
                menuObj.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
            } else {
                menuObj.showItems(['Save', 'Delete'], true);
                menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
            }
            return;
        } else if ((this.selectedTarget.classList.contains('e-work-cells') || this.selectedTarget.classList.contains('e-all-day-cells')) &&
            !this.selectedTarget.classList.contains('e-selected-cell')) {
            this.selectedTarget.setAttribute('aria-selected', 'true');
            this.selectedTarget.classList.add('e-selected-cell');
            removeClass([].slice.call(scheduleObj.element.querySelectorAll('.e-selected-cell')), 'e-selected-cell');
        }
        menuObj.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
        menuObj.showItems(['Add', 'AddRecurrence', 'Today'], true);
    },
    onMenuItemSelect: function(args) {
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                let selectedMenuItem = args.item.id;
                let eventObj;
                if (this.selectedTarget.classList.contains('e-appointment')) {
                    eventObj = scheduleObj.getEventDetails(this.selectedTarget);
                }
                switch (selectedMenuItem) {
                    case 'Today':
                        scheduleObj.selectedDate = new Date();
                        break;
                    case 'Add':
                    case 'AddRecurrence':
                        let selectedCells = scheduleObj.getSelectedElements();
                        let activeCellsData = scheduleObj.getCellDetails(selectedCells.length > 0 ? selectedCells : this.selectedTarget);
                        if (selectedMenuItem === 'Add') {
                            scheduleObj.openEditor(activeCellsData, 'Add');
                        } else {
                            scheduleObj.openEditor(activeCellsData, 'Add', null, 1);
                        } 
                        break;
                    case 'Save':
                    case 'EditOccurrence':
                    case 'EditSeries':
                        if (selectedMenuItem === 'EditSeries') {
                            eventObj = new DataManager(scheduleObj.eventsData).
                                executeLocal(new Query().where(scheduleObj.eventFields.id, 'equal', eventObj[scheduleObj.eventFields.recurrenceID]))[0];
                        }
                        scheduleObj.openEditor(eventObj, selectedMenuItem);
                        break;
                    case 'Delete':
                        scheduleObj.deleteEvent(eventObj);
                        break;
                    case 'DeleteOccurrence':
                    case 'DeleteSeries':
                        scheduleObj.deleteEvent(eventObj, selectedMenuItem);
                        break;
                }
            },
        }
    };
</script>