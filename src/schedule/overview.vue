<template>
<div>
<div class="col-lg-12 control-section">
    <div class="content-wrapper">
        <div class="schedule-overview">
            <div class="overview-header">
                <div class="overview-titlebar">
                    <div class="left-panel">
                        <div class="schedule-overview-title" style="border: 1px solid transparent;">Scheduler
                            Overview Functionalities</div>
                    </div>
                    <div class="center-panel">
                        <ejs-button id="timezoneBtn" cssClass="title-bar-btn" disabled='true'
                            iconCss="e-icons e-time-zone">UTC</ejs-button>
                        <ejs-button id="timeBtn" cssClass="title-bar-btn" disabled='true'
                            iconCss="e-icons e-clock" :content="liveTimeUpdate"></ejs-button>
                    </div>
                    <div class="right-panel">
                        <div class="control-panel calendar-export">
                            <ejs-button id="printBtn" cssClass="title-bar-btn"
                                iconCss="e-icons e-print" v-on:click.native="onPrint">Print</ejs-button>
                        </div>
                        <div class="control-panel">
                            <ejs-uploader id='icalendar' cssClass='calendar-import' :multiple='multiple'
                                :buttons='buttons' :showFileList='showFileList' allowedExtensions='.ics'
                                :selected='onSelected'></ejs-uploader>
                        </div>
                        <div class="control-panel calendar-export">
                            <ejs-dropdownbutton id="exporting" :items='exportItems' :select="onExportItemSelect">Export</ejs-dropdownbutton>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overview-toolbar">
                <div style="height: 70px;width: calc(100% - 90px);">
                    <ejs-toolbar id="toolbar_options" height="70px" overflowMode="Scrollable" scrollStep="100"
                        :created="onToolbarCreated" :clicked="onToolbarItemClicked">
                        <e-items>
                            <e-item prefixIcon='e-icons e-plus' tooltipText='New Event' text='New Event'>
                            </e-item>
                            <e-item prefixIcon='e-icons e-repeat'
                                tooltipText='New Recurring Event' text='New Recurring Event'></e-item>
                            <e-item type='Separator'></e-item>
                            <e-item prefixIcon='e-icons e-day' tooltipText='Day' text='Day'></e-item>
                            <e-item prefixIcon='e-icons e-week' tooltipText='Week' text='Week'></e-item>
                            <e-item prefixIcon='e-icons e-week' tooltipText='WorkWeek'
                                text='WorkWeek'></e-item>
                            <e-item prefixIcon='e-icons e-month' tooltipText='Month' text='Month'>
                            </e-item>
                            <e-item prefixIcon='e-icons e-month' tooltipText='Year' text='Year'></e-item>
                            <e-item prefixIcon='e-icons e-agenda-date-range' tooltipText='Agenda' text='Agenda'>
                            </e-item>
                            <e-item tooltipText="Timeline Views" :template="timelineTemplate"></e-item>
                            <e-item type='Separator'></e-item>
                            <e-item tooltipText="Resource Grouping" :template="groupTemplate"></e-item>
                            <e-item tooltipText="Gridlines" :template="gridlineTemplate"></e-item>
                            <e-item tooltipText="Row Auto Height" :template="autoHeightTemplate"></e-item>
                            <e-item tooltipText="Tooltip" :template="tooltipTemplate"></e-item>
                            <e-item tooltipText="Allow Multi Drag" :template="multiDragTemplate"></e-item>
                        </e-items>
                    </ejs-toolbar>
                </div>
                <div style="height:70px;width:90px;">
                    <ejs-button id="settingsBtn" iconCss="e-icons e-settings"
                        cssClass="overview-toolbar-settings" iconPosition="Top"
                        v-on:click.native="onSettingsClick">Settings</ejs-button>
                </div>
            </div>
            <div class="overview-content">
                <div class="left-panel">
                    <div class="overview-scheduler">
                        <ejs-schedule id='scheduler' ref="scheduleObj"  height="100%" cssClass='schedule-overview' :popupOpen='onPopupOpen' :currentView='currentView' timezone='UTC' :quickInfoTemplates="quickInfoTemplates" :dateHeaderTemplate="dateHeaderTemplate" :group='group' :eventSettings='eventSettings'>
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
                         <ejs-contextmenu id="contextmenu" ref="menuObj" cssClass="schedule-context-menu" target=".e-schedule" :items="menuItems" :beforeOpen="onContextMenuBeforeOpen" :select="onMenuItemSelect" ></ejs-contextmenu>
                    </div>
                </div>
                <div class="right-panel hide">
                    <div class="control-panel e-css">
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">First Day of Week</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='weekFirstDay' :dataSource='weekDays'
                                    :change='onWeekDayChange' :value='firstDayOfWeek' :fields='fields'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work week</label>
                            </div>
                            <div class="col-right">
                                <ejs-multiselect id='workWeekDays' ref="workWeekDaysObj" cssClass="schedule-workweek" :dataSource='weekDays' enableSelectionOrder="false" showClearButton="false"
                                    showDropDownIcon="true" :mode='checkboxMode' :fields='fields' popupHeight='150px' :value='workDays'
                                    :change='onWorkWeekDayChange'></ejs-multiselect>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Resources</label>
                            </div>
                            <div class="col-right">
                                <ejs-multiselect id='resources' ref="resourcesObj" cssClass="schedule-workweek" index="0" :dataSource='resourceDataSource' 
                                    :mode='checkboxMode' :fields='calendarFields' popupHeight='150px' enableSelectionOrder="false" showClearButton="false" showDropDownIcon="true" 
                                    :value='calendarsValue' :change='onResourceChange'></ejs-multiselect>
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
                                <ejs-timepicker id='dayStartHour' showClearButton='false'
                                    :value='dayStartHourValue' :change='onDayStartHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Day End Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='dayEndHour' showClearButton='false'
                                    :value='dayEndHourValue' :change='onDayEndHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work Start Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='workHourStart' showClearButton='false'
                                    :value='workStartHourValue' :change='onWorkStartHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work End Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='workHourEnd' showClearButton='false'
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

    .tailwind .e-settings::before,
    .tailwind-dark .e-settings::before {
        content: "\e846";
        font-size: 14px;
    }

    .tailwind.e-bigger .e-settings,
    .tailwind-dark.e-bigger .e-settings {
        font-size: 16px !important;
    }

    .material .schedule-overview .overview-toolbar .e-toolbar {
        border-style: solid;
    }

    .material .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import .e-upload-browse-btn,
    .material-dark .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import .e-upload-browse-btn {
        text-transform: capitalize;
        box-shadow: none;
    }

    .highcontrast .schedule-overview .overview-header .overview-titlebar {
        background-color: #ffd939;
        color: black;
    }

    .highcontrast .schedule-overview .overview-header,
    .highcontrast .schedule-overview .overview-content {
        border: 1px solid #969696;
    }

    .tailwind-dark .schedule-overview .overview-header,
    .tailwind-dark .schedule-overview .overview-content {
        border: 1px solid #4b5563;
        border-top: 0;
    }

    .highcontrast .schedule-overview .overview-content {
        border-top: 0;
    }

    .fabric-dark .schedule-overview .overview-content {
        border: 1px solid #414040;
    }

    .fluent-dark .schedule-overview .overview-content {
        border: 1px solid #c1c1c1;
    }

    .fluent-dark .schedule-overview .overview-toolbar .e-toolbar {
        border: 1px solid #c1c1c1;
        border-top-color: transparent;
    }

    .fabric-dark .schedule-overview .overview-toolbar .overview-toolbar-settings {
        border-color: #414040;
    }

    .fluent-dark .schedule-overview .overview-toolbar .overview-toolbar-settings {
        border-color: #c1c1c1;
    }

    .tailwind .schedule-overview .overview-toolbar .e-toolbar {
        border: 1px solid #e5e7eb;
    }

    .tailwind-dark .schedule-overview .overview-toolbar .e-toolbar {
        border: 1px solid #4b5563;
    }

    .tailwind .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .tailwind .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f3f4f6;
        border-color: #e5e7eb;
        box-shadow: none;
    }

    .tailwind-dark .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .tailwind-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #374151;
        border-color: #4b5563;
        box-shadow: none;
        color: #fff;
    }

    .highcontrast .schedule-overview .overview-toolbar .e-toolbar,
    .highcontrast .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-items .e-toolbar-item.e-separator,
    .highcontrast .schedule-overview .overview-toolbar .e-toolbar .e-hscroll .e-scroll-nav.e-scroll-left-nav,
    .highcontrast .schedule-overview .overview-toolbar .e-toolbar .e-hscroll .e-scroll-nav.e-scroll-right-nav {
        border-color: #969696;
    }

    .material .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .material .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #fafafa;
        text-transform: capitalize;
        box-shadow: none;
    }

    .material-dark .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .material-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #2a2a2a;
        color: #ffff;
    }

    .fabric .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .fabric .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #ffffff;
    }

    .fabric-dark .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .fabric-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #333232;
        color: #fff;
    }

    .bootstrap5 .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .bootstrap5 .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f8f9fa;
        color: #212529;
        font-weight: 400;
    }

    .fluent .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .fluent .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f3f2f1;
    }

    .bootstrap .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .bootstrap .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #f8f8f8;
    }

    .bootstrap5-dark .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .bootstrap5-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #343a40;
        color: #fff;
        font-weight: 400;
    }

    .fluent-dark .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .fluent-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #252423;
        border-color: #c1c1c1;
        color: #fff;
    }

    .bootstrap-dark .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .bootstrap-dark .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #2a2a2a;
        color: #fff;
    }


    .highcontrast .schedule-overview .overview-toolbar .overview-toolbar-settings,
    .highcontrast .schedule-overview .overview-content .right-panel .control-panel {
        background-color: #000000;
        border-color: #969696;
        color: #ffffff;
    }

    .highcontrast .schedule-overview .overview-header .overview-titlebar .title-bar-btn,
    .highcontrast .schedule-overview .overview-header .overview-titlebar .calendar-import .e-file-select-wrap .e-css.e-btn,
    .highcontrast .schedule-overview .overview-header .overview-titlebar .e-dropdown-btn.e-btn {
        color: black;
    }

    .schedule-overview .overview-header {
        border: 1px solid #007bff;
    }

    .schedule-overview .overview-header .overview-titlebar {
        background-color: #007bff;
        color: #ffffff;
        height: 40px;
        line-height: 40px;
        width: 100%;
        font-size: 12px;
        padding: 0 10px;
        font-family: inherit;
        display: flex;
        justify-content: space-between;
    }

    .schedule-overview .overview-header .overview-titlebar .right-panel {
        display: flex;
        justify-content: space-between;
    }

    .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import {
        line-height: 40px;
    }

    .bootstrap5 .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import,
    .bootstrap5 .schedule-overview .overview-header .overview-titlebar .calendar-export,
    .bootstrap5-dark .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import,
    .bootstrap5-dark .schedule-overview .overview-header .overview-titlebar .calendar-export,
    .fabric .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import,
    .fabric .schedule-overview .overview-header .overview-titlebar .calendar-export,
    .fabric-dark .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import,
    .fabric-dark .schedule-overview .overview-header .overview-titlebar .calendar-export,
    .highcontrast .schedule-overview .overview-header .overview-titlebar .calendar-export,
    .highcontrast .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import {
        line-height: 1.5em;
    }

    .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button,
    .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button:focus,
    .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button:hover {
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        font-size: 12px;
        height: 40px;
        text-transform: capitalize;
    }

    .schedule-overview .overview-header .overview-titlebar .title-bar-btn,
    .schedule-overview .overview-header .overview-titlebar .title-bar-btn:hover,
    .schedule-overview .overview-header .overview-titlebar .title-bar-btn:focus,
    .schedule-overview .overview-header .overview-titlebar .e-dropdown-btn,
    .schedule-overview .overview-header .overview-titlebar .e-dropdown-btn.e-btn {
        background: transparent;
        box-shadow: none;
        font-family: inherit;
        border-color: transparent;
        border-radius: 2px;
        color: inherit;
        font-size: 12px;
        text-transform: capitalize;
        height: 40px;
        font-weight: 400;
    }

    .schedule-overview .overview-header .overview-titlebar .e-btn:not([disabled]):focus {
        background-color: rgba(255, 255, 255, 0.4) !important;
    }

    .schedule-overview .overview-toolbar {
        display: flex;
        height: 70px;
    }

    .schedule-overview .overview-toolbar .e-toolbar {
        border-radius: 0;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-tbtn-txt {
        display: inline-grid;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item.e-template {
        margin: 0 5px;
    }

    .schedule-overview .overview-toolbar .overview-toolbar-settings {
        border-radius: 0;
        background-color: #f8f9fa;
        border-color: rgba(0, 0, 0, 0.15);
        border-left-width: 0;
        border-top-width: 0;
        box-shadow: none;
        color: #495057;
        height: 72px;
        line-height: 1.6;
        outline: none;
        text-transform: capitalize;
        width: 100%;
    }

    .material .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: #0000001f;
    }

    .fabric .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: #f4f4f4;
    }

    .bootstrap .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: rgb(230, 230, 230);
    }

    .bootstrap4 .schedule-overview .overview-toolbar .overview-toolbar-settings:focus,
    .bootstrap5 .schedule-overview .overview-toolbar .overview-toolbar-settings:focus, {
        background-color: #5c636a;
        color: #fff;
    }

    .tailwind .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: #e5e7eb;
    }

    .highcontrast .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: rgb(104, 87, 8);
    }

    .material-dark .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: #ffffff1a;
    }

    .fabric-dark .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: rgb(65, 64, 64);
    }

    .bootstrap-dark .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: rgb(49, 49, 49);
    }

    .tailwind-dark .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: #4b5563;
    }

    .bootstrap5-dark .schedule-overview .overview-toolbar .overview-toolbar-settings:focus {
        background-color: #5c636a;
    }

    .bootstrap5 .schedule-overview .overview-toolbar .e-toolbar {
        border: 1px solid #dee2e6;
    }

    .bootstrap5-dark .schedule-overview .overview-toolbar .e-toolbar {
        border: 1px solid #444c54;
    }

    .schedule-overview .overview-content {
        border: 1px solid #00000026;
        border-top: 0;
        display: flex;
    }

    .schedule-overview .overview-content .left-panel {
        height: 600px;
        width: 100%;
    }

    .schedule-overview .overview-content .right-panel {
        display: block;
        height: 600px;
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
        border-left: 1px solid #00000026;
        font-size: 14px;
        height: 100%;
        overflow: auto;
        padding: 15px;
        width: 100%;
    }

    .tailwind-dark .schedule-overview .overview-content .right-panel .control-panel {
        background: #374151;
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
        padding: 10px;
        width: 100%;
    }

    .schedule-overview .e-schedule .e-vertical-view .e-header-cells {
        text-align: center !important;
    }

    .schedule-overview .e-schedule .date-text {
        font-size: 14px;
    }

    .schedule-overview .e-schedule.e-device .date-text {
        font-size: 12px;
    }

    .schedule-overview .e-schedule .weather-image {
        width: 20px;
        height: 20px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .schedule-overview .e-schedule .weather-text {
        font-size: 11px;
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

    .schedule-overview .quick-info-header {
        background-color: white;
        padding: 8px 18px;
    }

    .tailwind-dark .schedule-overview .quick-info-header {
        background-color: #374151;
    }

    .bootstrap5-dark .schedule-overview .quick-info-header {
        background-color: transparent;
    }

    .bootstrap-dark .schedule-overview .quick-info-header {
        background-color: #1a1a1a;
    }

    .fabric-dark .schedule-overview .quick-info-header {
        background-color: #201f1f;
    }

    .fluent-dark .schedule-overview .quick-info-header {
        background-color: #252423;
    }

    .material-dark .schedule-overview .quick-info-header {
        background-color: #424242;
    }

    .highcontrast .schedule-overview .quick-info-header {
        background-color: #000000;
    }

    .schedule-overview .quick-info-header-content {
        justify-content: flex-end;
        display: flex;
        flex-direction: column;
        padding: 5px 10px 5px;
    }

    .tailwind-dark .schedule-overview .quick-info-header-content,
    .bootstrap-dark .schedule-overview .quick-info-header-content,
    .bootstrap5-dark .schedule-overview .quick-info-header-content,
    .fabric-dark .schedule-overview .quick-info-header-content,
    .material-dark .schedule-overview .quick-info-header-content,
    .highcontrast .schedule-overview .quick-info-header-content {
        color: #fff !important;
    }

    .schedule-overview .quick-info-title {
        font-weight: 500;
        font-size: 16px;
        letter-spacing: 0.48px;
        height: 22px;
    }

    .schedule-overview .duration-text {
        font-size: 11px;
        letter-spacing: 0.33px;
        height: 14px;
    }

    .schedule-overview .content-area {
        padding: 10px;
        width: auto;
        margin: unset;
    }

    .schedule-overview .event-content {
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 15px;
    }

    .schedule-overview .meeting-type-wrap,
    .schedule-overview .meeting-subject-wrap,
    .schedule-overview .notes-wrap {
        font-size: 11px;
        color: #666;
        letter-spacing: 0.33px;
        height: 24px;
        padding: 5px;
        display: flex;
    }

    .schedule-overview .event-content div label {
        display: inline-block;
        min-width: 45px;
        color: #666;
    }

    .schedule-overview .event-content div span {
        font-size: 11px;
        color: #151515;
        letter-spacing: 0.33px;
        line-height: 14px;
        padding-left: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .tailwind-dark .schedule-overview .event-content div label,
    .bootstrap-dark .schedule-overview .event-content div label,
    .bootstrap5-dark .schedule-overview .event-content div label,
    .fluent-dark .schedule-overview .event-content div label,
    .fabric-dark .schedule-overview .event-content div label,
    .material-dark .schedule-overview .event-content div label,
    .highcontrast .schedule-overview .event-content div label,
    .tailwind-dark .schedule-overview .event-content div span,
    .bootstrap-dark .schedule-overview .event-content div span,
    .bootstrap5-dark .schedule-overview .event-content div span,
    .fluent-dark .schedule-overview .event-content div span,
    .fabric-dark .schedule-overview .event-content div span,
    .material-dark .schedule-overview .event-content div span,
    .highcontrast .schedule-overview .event-content div span {
        color: #fff;
    }

    .schedule-overview .cell-footer.e-btn {
        background-color: #ffffff;
        border-color: #878787;
        color: #878787;
    }

    .schedule-overview .cell-footer {
        padding-top: 10px;
    }

    .schedule-overview .e-quick-popup-wrapper.e-template .e-cell-popup .e-popup-content {
        padding: 0 14px;
    }

    .schedule-overview .e-quick-popup-wrapper.e-template .e-event-popup .e-popup-footer {
        display: block;
    }

    .schedule-overview .e-quick-popup-wrapper.e-template .e-popup-footer button:first-child {
        margin-right: 5px;
    }

    .schedule-overview .calendar-import.e-upload {
        border: 0;
        padding-left: 0 !important;
    }

    .schedule-overview .calendar-import.e-upload .e-file-select-wrap {
        padding: 0
    }

    .schedule-overview .calendar-import.e-upload .e-file-select-wrap .e-file-drop,
    .calendar-import .e-upload-files {
        display: none;
    }

    .schedule-overview .quick-info-header {
        background-color: white;
        padding: 8px 18px;
    }

    .schedule-overview .content-area {
        padding: 10px;
        width: 100%;
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

    .schedule-overview.e-schedule .weather-text {
        font-size: 11px;
    }

    .schedule-overview.e-schedule .e-month-view .weather-image {
        float: right;
        margin: -20px 2px 0 0;
        width: 20px;
        height: 20px;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-btn {
        height: 50px !important;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item:not(.e-separator) {
        padding: 3.5px;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn {
        padding: 1.5px;
    }

    .e-bigger .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item:not(.e-separator) {
        padding: 5px;
    }

    .e-bigger .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn {
        padding: 6px;
    }

    .bootstrap:not(.e-bigger) .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-btn:hover,
    .bootstrap-dark:not(.e-bigger) .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-btn:hover,
    .bootstrap4:not(.e-bigger) .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-btn:hover {
        border-width: 1.5px;
        padding: unset !important;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-btn.e-tbar-btn .e-icons.e-btn-icon,
    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-btn.e-tbar-btn .e-tbar-btn-text {
        line-height: 23px !important;
        min-height: 23px !important;
        padding: 0px !important;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item.e-template .icon-child {
        height: 23px !important;
    }

    .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item.e-template .text-child {
        line-height: 23px !important;
    }

    .tailwind .schedule-overview.e-schedule .e-left-indent .e-header-cells,
    .tailwind-dark .schedule-overview.e-schedule .e-left-indent .e-header-cells {
        height: 66px;
    }

    .tailwind .schedule-overview .e-more-popup-wrapper .e-more-event-close .e-btn-icon,
    .tailwind-dark .schedule-overview .e-more-popup-wrapper .e-more-event-close .e-btn-icon {
        margin-top: 0px;
    }

    .bootstrap-dark .schedule-overview .overview-content {
        border: 1px solid #505050;
    }

    .bootstrap5-dark .schedule-overview .overview-content {
        border: 1px solid #444c54;
    }

    .material-dark .schedule-overview .overview-content {
        border: 1px solid #616161;
    }

    .bootstrap5 .schedule-overview .overview-toolbar .overview-toolbar-settings {
        border-color: #dee2e6;
    }

    .bootstrap5-dark .schedule-overview .overview-toolbar .overview-toolbar-settings {
        border-color: #444c54;
    }

    .bootstrap-dark .schedule-overview .overview-toolbar .overview-toolbar-settings {
        border-color: #505050;
    }

    .material-dark .schedule-overview .overview-toolbar .overview-toolbar-settings {
        border-color: #616161;
    }

    .bootstrap-dark .schedule-overview .overview-header .overview-titlebar .title-bar-btn,
    .material-dark .schedule-overview .overview-header .overview-titlebar .title-bar-btn,
    .material .schedule-overview .overview-header .overview-titlebar .title-bar-btn {
        box-shadow: none;
    }
</style>

<script>
    import Vue from "vue";
    import { addClass, extend, removeClass, closest, remove, isNullOrUndefined, Internationalization, compile } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, TimelineMonth, Year, TimelineViews,TimelineYear, Resize, DragAndDrop, Timezone, Print, ExcelExport,ICalendarImport, ICalendarExport } from "@syncfusion/ej2-vue-schedule";
    import { DataManager, Predicate, Query } from '@syncfusion/ej2-data';
    import { ButtonPlugin, ButtonComponent, SwitchPlugin, SwitchComponent, CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
    import { UploaderPlugin, TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
    import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
    import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
    import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
    import { MultiSelectPlugin, DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
    import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
    import { ContextMenuPlugin } from '@syncfusion/ej2-vue-navigations';
    MultiSelect.Inject(CheckBoxSelection);


    Vue.use(SchedulePlugin);
    Vue.use(TimePickerPlugin);
    Vue.use(ButtonPlugin);
    Vue.use(UploaderPlugin);
    Vue.use(DropDownButtonPlugin);
    Vue.use(TextBoxPlugin);
    Vue.use(ToolbarPlugin);
    Vue.use(ContextMenuPlugin);
    Vue.use(SwitchPlugin);
    Vue.use(MultiSelectPlugin);
    Vue.use(DropDownListPlugin);
    Vue.use(CheckBoxPlugin);
    Vue.component(SwitchComponent);
    Vue.component(ButtonComponent);

    var dateHeaderTemplate = Vue.component("date-header-template", {
        template: '<div><div class="date-text">{{getDateHeaderText(data.date)}}</div><div v-html=getWeather(data.date)></div></div>',
        data() {
            return {
                intl: new Internationalization(),
                data: {}
            };
        },
        methods: {
            getDateHeaderText: function (value) {
                return this.intl.formatDate(value, { skeleton: 'Ed' });
            },
            getWeather: function (value) {
                switch (value.getDay()) {
                    case 0:
                        return '<img class="weather-image" src="source/schedule/images/weather-clear.svg"/><div class="weather-text">25°C</div>';
                    case 1:
                        return '<img class="weather-image" src="source/schedule/images/weather-clouds.svg"/><div class="weather-text">18°C</div>';
                    case 2:
                        return '<img class="weather-image" src="source/schedule/images/weather-rain.svg"/><div class="weather-text">10°C</div>';
                    case 3:
                        return '<img class="weather-image" src="source/schedule/images/weather-clouds.svg"/><div class="weather-text">16°C</div>';
                    case 4:
                        return '<img class="weather-image" src="source/schedule/images/weather-rain.svg"/><div class="weather-text">8°C</div>';
                    case 5:
                        return '<img class="weather-image" src="source/schedule/images/weather-clear.svg"/><div class="weather-text">27°C</div>';
                    case 6:
                        return '<img class="weather-image" src="source/schedule/images/weather-clouds.svg"/><div class="weather-text">17°C</div>';
                    default:
                        return null;
                }
            }
        }
    });

    var headerTemplateVue = Vue.component("headerTemplate", {
        template:  `<div class="quick-info-header">
        <div class="quick-info-header-content" :style="getHeaderStyles(data)">
        <div class="quick-info-title">{{getHeaderTitle(data)}}</div>
        <div class="duration-text">{{getHeaderDetails(data)}}</div>
        </div></div>`,
        data: function() {
            return {
                intl: new Internationalization(),
                data: {}
            };
        },
        methods: {
    getHeaderStyles: function(data) {
        if (data.elementType === 'cell') {
            return { 'align-items': 'center', 'color': '#919191' };
        } else {
          const scheduleObj = document.querySelector(".e-schedule").ej2_instances[0];
          const resources = scheduleObj.getResourceCollections()[0];
          const resourceData = (resources.dataSource).filter((resource) =>
          resource.CalendarId === data.CalendarId)[0];
          let calendarColor = '#3f51b5';
          if (resourceData) {
            calendarColor = (resourceData.CalendarColor).toString();
          }
          return { 'background': calendarColor, 'color': '#FFFFFF' };
        }
    },
    getHeaderTitle: function(data) {
        return (data.elementType === 'cell') ? 'Add Appointment' : 'Appointment Details';
    },
    getHeaderDetails: function(data) {
      return (
        this.intl.formatDate(data.StartTime, { type: "date", skeleton: "full" }) + " (" +
        this.intl.formatDate(data.StartTime, { skeleton: 'hm' }) + " - " +
        this.intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ")"
      );
    } 
  }
});

var contentTemplateVue = Vue.component("contentTemplate", {
  template: `<div class="quick-info-content"><div class="e-cell-content" v-if="data.elementType === 'cell'">
    <div class="content-area"><ejs-textbox ref="titleObj" id="title" placeholder="Title"></ejs-textbox></div>
    <div class="content-area"><ejs-dropdownlist ref="eventTypeObj" id="eventType" :dataSource="roomData" index="0" :fields="fields" 
    popupHeight="150px" placeholder="Choose Type"></ejs-dropdownlist></div>
    <div class="content-area"><ejs-textbox ref="notesObj" id="notes" placeholder="Notes"></ejs-textbox></div></div>
    <div class="event-content" v-else><div class="meeting-type-wrap"><label>Subject</label>:<span>{{data.Subject}}</span></div>
    <div class="meeting-subject-wrap"><label>Type</label>:<span>{{getEventType(data)}}</span></div>
    <div class="notes-wrap"><label>Notes</label>:<span>{{data.Description}}</span></div></div></div>`,
  data: function() {
    return {
      fields: { text: 'CalendarName', value: 'CalendarId' },
      roomData: [
            { CalendarName: 'My Calendar', CalendarId: 1, CalendarColor: '#c43081' },
            { CalendarName: 'Company', CalendarId: 2, CalendarColor: '#ff7f50' },
            { CalendarName: 'Birthday', CalendarId: 3, CalendarColor: '#AF27CD' },
            { CalendarName: 'Holiday', CalendarId: 4, CalendarColor: '#808000' }
        ],
      data: {}
    };
  },
  methods: {
    getEventType: function(data) {
      const scheduleObj = document.querySelector(".e-schedule").ej2_instances[0];
      const resources = scheduleObj.getResourceCollections()[0];
      const resourceData = (resources.dataSource).filter((resource) =>
      resource.CalendarId === data.CalendarId)[0];
      let calendarText = '';
        if (resourceData) {
            calendarText = resourceData.CalendarText.toString();
        }
      return calendarText;
    }
  }
});

var footerTemplateVue = Vue.component("footerTemplate", {
  template:  `<div class="quick-info-footer"><div class="cell-footer" v-if="data.elementType === 'cell'">
    <ejs-button id="more-details" cssClass="e-flat" content="More Details" v-on:click.native="buttonClickActions"></ejs-button>
    <ejs-button id="add" cssClass="e-flat" content="Add" :isPrimary="true" v-on:click.native="buttonClickActions"></ejs-button>
    </div><div class="event-footer" v-else>
    <ejs-button id="delete" cssClass="e-flat" content="Delete" v-on:click.native="buttonClickActions"></ejs-button>
    <ejs-button id="more-details" cssClass="e-flat" content="More Details" :isPrimary="true" v-on:click.native="buttonClickActions"></ejs-button>
    </div></div>`,
  data: function() {
    return {
      data: {}
    };
  },
  methods: {
    buttonClickActions: function(e) {
      const scheduleObj = document.querySelector(".e-schedule").ej2_instances[0];
      const quickPopup = closest(e.target, '.e-quick-popup-wrapper');
      const getSlotData = function() {
        const titleObj = quickPopup.querySelector("#title").ej2_instances[0];
        const notesObj = quickPopup.querySelector("#notes").ej2_instances[0];
        const eventTypeObj = quickPopup.querySelector("#eventType").ej2_instances[0];
        let cellDetails = scheduleObj.getCellDetails(scheduleObj.getSelectedElements());
        if (isNullOrUndefined(cellDetails)) {
            cellDetails = scheduleObj.getCellDetails(scheduleObj.activeCellsData.element);
        }
        let addObj = {};
        addObj.Id = scheduleObj.getEventMaxID();
        addObj.Subject = isNullOrUndefined(titleObj.value) ? 'Add title' : titleObj.value;
        addObj.StartTime = new Date(+cellDetails.startTime);
        addObj.EndTime = new Date(+cellDetails.endTime);
        addObj.IsAllDay = cellDetails.isAllDay;
        addObj.Description = isNullOrUndefined(notesObj.value) ? 'Add notes' : notesObj.value;
        addObj.CalendarId = eventTypeObj.value;
        return addObj;
      };
      if (e.target.id === "add") {
        const addObj = getSlotData();
        scheduleObj.addEvent(addObj);
      } else if (e.target.id === "delete") {
        const eventDetails = scheduleObj.activeEventData.event;
        let currentAction = "Delete";
        if (eventDetails.RecurrenceRule) {
          currentAction = "DeleteOccurrence";
        }
        scheduleObj.deleteEvent(eventDetails, currentAction);
      } else {
        const isCellPopup = quickPopup.firstElementChild.classList.contains("e-cell-popup");
        const eventDetails = isCellPopup ? getSlotData() : scheduleObj.activeEventData.event;
        let currentAction = isCellPopup ? "Add" : "Save";
        if (eventDetails.RecurrenceRule) {
          currentAction = "EditOccurrence";
        }
        scheduleObj.openEditor(eventDetails, currentAction, true);
      }
      scheduleObj.closeQuickInfoPopup();
    }
  }
});

    export default Vue.extend({
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
                isTimelineView: false,
                buttons: { browse: this.importTemplateFn({ text: 'Import' })[0] },
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
                quickInfoTemplates: {
                  header: function(e) {
                    return { template: headerTemplateVue };
                  },
                  content: function(e) {
                    return { template: contentTemplateVue };
                  },
                  footer: function(e) {
                    return { template: footerTemplateVue };
                  }
                },              
                multiDragTemplate: function () {
                    return {
                        template: Vue.component('SwitchComponent', {
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="multi_Drag" :checked="false" :created="onCreated" :change="onAllowMultiDrag"></ejs-switch></div><div class="text-child" style="font-size:14px;">Allow Multi Drag</div></div>',
                            data: function () { return { data: {} }; },
                            methods : {
                                onCreated: function() {
                                    document.getElementById('multi_Drag').setAttribute('tabindex', '-1');
                                },
                                onAllowMultiDrag: function(args) {
                                    let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
                                    scheduleObj.allowMultiDrag = args.checked;
                                }
                            }
                        })
                    }
                },
                timelineTemplate: function () {
                    return {
                        template: Vue.component('SwitchComponent', {
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="timeline_views" :checked="false" :created="onCreated" :change="onTimelineViewChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Timeline Views</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
                                onCreated: function() {
                                    document.getElementById('timeline_views').setAttribute('tabindex', '-1');
                                },
                                onTimelineViewChange: function(args) {
                                    let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
                                    this.isTimelineView = args.checked;
                                    switch (scheduleObj.currentView) {
                                        case 'Day':
                                        case 'TimelineDay':
                                            scheduleObj.currentView = this.isTimelineView ? 'TimelineDay' : 'Day';
                                            break;
                                        case 'Week':
                                        case 'TimelineWeek':
                                            scheduleObj.currentView = this.isTimelineView ? 'TimelineWeek' : 'Week';
                                            break;
                                        case 'WorkWeek':
                                        case 'TimelineWorkWeek':
                                            scheduleObj.currentView = this.isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                                            break;
                                        case 'Month':
                                        case 'TimelineMonth':
                                            scheduleObj.currentView = this.isTimelineView ? 'TimelineMonth' : 'Month';
                                            break;
                                        case 'Year':
                                        case 'TimelineYear':
                                            scheduleObj.currentView = this.isTimelineView ? 'TimelineYear' : 'Year';
                                            break;
                                        case 'Agenda':
                                            scheduleObj.currentView = 'Agenda';
                                            break;
                                    }
                                },

                            }
                        })
                    }
                },
                groupTemplate: function () {
                    return {
                        template: Vue.component('SwitchComponent', {
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="grouping" :checked="true" :created="onCreated" :change="onGroupingChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Grouping</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
                                onCreated: function() {
                                    document.getElementById('grouping').setAttribute('tabindex', '-1');
                                },
                                onGroupingChange: function(args) {
                                    let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
                                    scheduleObj.group.resources = args.checked ? ['Calendars'] : [];
                                }
                            }
                        })
                    }
                },
                gridlineTemplate: function () {
                    return {
                        template: Vue.component('SwitchComponent', {
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="gridlines" :checked="true" :created="onCreated" :change="onGridlinesChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Gridlines</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
                                onCreated: function() {
                                    document.getElementById('gridlines').setAttribute('tabindex', '-1');
                                },
                                onGridlinesChange: function(args) {
                                    let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
                                    scheduleObj.timeScale.enable = args.checked;
                                }
                            }
                        })
                    }
                },
                autoHeightTemplate: function () {
                    return {
                        template: Vue.component('ButtonComponent', {
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="row_auto_height" :checked="false" :created="onCreated" :change="onRowAutoHeightChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Row Auto Height</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
                                onCreated: function() {
                                    document.getElementById('row_auto_height').setAttribute('tabindex', '-1');
                                },
                                 onRowAutoHeightChange: function(args) {
                                    let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
                                    scheduleObj.rowAutoHeight = args.checked;
                                }
                            }
                        })
                    }
                },
                tooltipTemplate: function () {
                    return {
                        template: Vue.component('ButtonComponent', {
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="tooltip" :checked="false" :created="onCreated" :change="onTooltipChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Tooltip</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
                                onCreated: function() {
                                    document.getElementById('tooltip').setAttribute('tabindex', '-1');
                                },
                                onTooltipChange: function(args) {
                                    let scheduleObj = document.getElementById('scheduler').ej2_instances[0];
                                    scheduleObj.eventSettings.enableTooltip = args.checked;
                                }
                            }
                        })
                    }
                },
                dateHeaderTemplate: function () {
                    return { template: dateHeaderTemplate }
                },
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop,TimelineMonth, TimelineViews, Year, TimelineYear, Print, ExcelExport,ICalendarImport, ICalendarExport]
        },
        methods: {
        onPopupOpen: function(args) {
            if ((args.type == 'QuickInfo' || args.type == 'ViewEventInfo')) {
                if (!args.element.classList.contains('e-template')) {
                    args.element.classList.add('e-template');
                }
                if (!args.target.classList.contains('e-appointment')) {
                    args.element.querySelector('#eventType').ej2_instances[0].index = args.data.CalendarId - 1;
                }
            }
        },
        importTemplateFn: function(data) {
            const template = '<div class="e-template-btn"><span class="e-btn-icon e-icons e-upload-1 e-icon-left"></span>${text}</div>';
            return compile(template.trim())(data);
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
        this.liveTimeUpdate = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
    },
    onToolbarCreated: function() {
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        setInterval(() => { this.updateLiveTime(scheduleObj ? scheduleObj.timezone : 'UTC'); }, 1000);
    },
    onToolbarItemClicked: function(args) {
        let scheduleObj = this.$refs.scheduleObj.ej2Instances;
        switch (args.item.text) {
            case 'Day':
                this.currentView = this.isTimelineView ? 'TimelineDay' : 'Day';
                break;
            case 'Week':
                this.currentView = this.isTimelineView ? 'TimelineWeek' : 'Week';
                break;
            case 'WorkWeek':
                this.currentView = this.isTimelineView ? 'TimelineWorkWeek' : 'WorkWeek';
                break;
            case 'Month':
                this.currentView = this.isTimelineView ? 'TimelineMonth' : 'Month';
                break;
            case 'Year':
                this.currentView = this.isTimelineView ? 'TimelineYear' : 'Year';
                break;
            case 'Agenda':
                this.currentView = 'Agenda';
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
    onContextMenuBeforeOpen: function(args) {
        let newEventElement = document.querySelector('.e-new-event');
        if (newEventElement) {
            remove(newEventElement);
            removeClass([document.querySelector('.e-selected-cell')], 'e-selected-cell');
        }
        let targetElement = args.event.target;
        if (closest(targetElement, '.e-contextmenu')) {
            return;
        }
        let menuObj = this.$refs.menuObj;
        let scheduleObj = this.$refs.scheduleObj;
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
    });
</script>