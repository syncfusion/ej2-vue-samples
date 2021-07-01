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
                            iconCss="e-icons e-schedule-timezone">UTC</ejs-button>
                        <ejs-button id="timeBtn" cssClass="title-bar-btn" disabled='true'
                            iconCss="e-icons e-schedule-clock" :content="liveTimeUpdate"></ejs-button>
                    </div>
                    <div class="right-panel">
                        <div class="control-panel">
                            <ejs-button id="printBtn" cssClass="title-bar-btn"
                                iconCss="e-icons e-schedule-print" v-on:click.native="onPrint">Print</ejs-button>
                        </div>
                        <div class="control-panel" style="display: inline-flex;padding-left:15px;">
                            <div class="e-icons e-schedule-import e-btn-icon e-icon-left" style="line-height: 40px;">
                            </div>
                            <ejs-uploader id='icalendar' cssClass='calendar-import' :multiple='multiple'
                                :buttons='buttons' :showFileList='showFileList' allowedExtensions='.ics'
                                :selected='onSelected'></ejs-uploader>
                        </div>
                        <div class="control-panel">
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
                            <e-item prefixIcon='e-icons e-schedule-add-event' tooltipText='New Event' text='New Event'>
                            </e-item>
                            <e-item prefixIcon='e-icons e-schedule-add-recurrence-event'
                                tooltipText='New Recurring Event' text='New Recurring Event'></e-item>
                            <e-item type='Separator'></e-item>
                            <e-item prefixIcon='e-icons e-schedule-day-view' tooltipText='Day' text='Day'></e-item>
                            <e-item prefixIcon='e-icons e-schedule-week-view' tooltipText='Week' text='Week'></e-item>
                            <e-item prefixIcon='e-icons e-schedule-workweek-view' tooltipText='WorkWeek'
                                text='WorkWeek'></e-item>
                            <e-item prefixIcon='e-icons e-schedule-month-view' tooltipText='Month' text='Month'>
                            </e-item>
                            <e-item prefixIcon='e-icons e-schedule-year-view' tooltipText='Year' text='Year'></e-item>
                            <e-item prefixIcon='e-icons e-schedule-agenda-view' tooltipText='Agenda' text='Agenda'>
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
                    <ejs-button id="settingsBtn" iconCss="e-icons e-schedule-toolbar-settings"
                        cssClass="overview-toolbar-settings" iconPosition="Top"
                        v-on:click.native="onSettingsClick">Settings</ejs-button>
                </div>
            </div>
            <div class="overview-content">
                <div class="left-panel">
                    <div class="overview-scheduler">
                        <ejs-schedule id='scheduler' ref="scheduleObj"  height="100%" cssClass='schedule-overview' :currentView='currentView' timezone='UTC' :quickInfoTemplates="quickInfoTemplates" :dateHeaderTemplate="dateHeaderTemplate" :group='group' :eventSettings='eventSettings'>
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
                                <ejs-dropdownlist id='weekFirstDay' width='170px' :dataSource='weekDays'
                                    :change='onWeekDayChange' :value='firstDayOfWeek' :fields='fields'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work week</label>
                            </div>
                            <div class="col-right">
                                <ejs-multiselect id='workWeekDays' cssClass="schedule-workweek" width='170px' :dataSource='weekDays' enableSelectionOrder="false" showClearButton="false"
                                    showDropDownIcon="true" :mode='checkboxMode' :fields='fields' popupHeight='150px' :value='workDays'
                                    :change='onWorkWeekDayChange'></ejs-multiselect>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Resources</label>
                            </div>
                            <div class="col-right">
                                <ejs-multiselect id='resources' cssClass="schedule-workweek" width='170px' index="0" :dataSource='resourceDataSource' 
                                    :mode='checkboxMode' :fields='calendarFields' popupHeight='150px' enableSelectionOrder="false" showClearButton="false" showDropDownIcon="true" 
                                    :value='calendarsValue' :change='onResourceChange'></ejs-multiselect>
                            </div>
                        </div>
                         <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Timezone</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='timezone' width='170px' :dataSource='timezoneData'
                                    :change='onTimezoneChange' value='Etc/GMT' :fields='fields'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Day Start Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='dayStartHour' width='170px' showClearButton='false'
                                    :value='dayStartHourValue' :change='onDayStartHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Day End Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='dayEndHour' width='170px' showClearButton='false'
                                    :value='dayEndHourValue' :change='onDayEndHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work Start Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='workHourStart' width='170px' showClearButton='false'
                                    :value='workStartHourValue' :change='onWorkStartHourChange'>
                                </ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Work End Hour</label>
                            </div>
                            <div class="col-right">
                                <ejs-timepicker id='workHourEnd' width='170px' showClearButton='false'
                                    :value='workEndHourValue' :change='onWorkEndHourChange'></ejs-timepicker>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Slot Duration</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='slotDuration' width='170px' :dataSource='timeSlotDuration'
                                    :change='onTimescaleDurationChange' :value='timeSlotDurationValue'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Slot Interval</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='slotInterval' width='170px' :dataSource='timeSlotCount'
                                    :change='onTimescaleIntervalChange' :value='timeSlotCountValue'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Time Format</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='timeFormat' width='170px' :dataSource='timeFormatdata'
                                    :change='onchangeTimeFormat' :value='timeFormatValue' :fields='fields'
                                    popupHeight='150px'></ejs-dropdownlist>
                            </div>
                        </div>
                        <div class="col-row">
                            <div class="col-left">
                                <label style="line-height: 34px; margin: 0;">Week Numbers</label>
                            </div>
                            <div class="col-right">
                                <ejs-dropdownlist id='weekNumber' width='170px' :dataSource='weekNumberData'
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
    <p>This sample demonstrates the overview of Vue Scheduler with its overall features. Use the toolbar buttons
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

<!-- custom code start -->
<style>
        .material .e-schedule-clock::before {
            content: "\e20c";
        }

        .fabric .e-schedule-clock::before,
        .highcontrast .e-schedule-clock::before {
            content: "\e97f";
        }

        .bootstrap .e-schedule-clock::before {
            content: "\e93e";
        }

        .bootstrap4 .e-schedule-clock::before {
            content: "\e7c7";
        }

        .tailwind .e-schedule-clock::before {
            content: "\e730";
        }

        .material .e-schedule-timezone::before,
        .bootstrap .e-schedule-timezone::before {
            content: "\e30e";
        }

        .fabric .e-schedule-timezone::before,
        .highcontrast .e-schedule-timezone::before {
            content: "\e311";
        }

        .bootstrap4 .e-schedule-timezone::before {
            content: "\e7c9";
        }
        .tailwind .e-schedule-timezone::before {
            content: "\e736";
        }

        .material .e-schedule-print::before {
            content: "\e813";
        }

        .fabric .e-schedule-print::before,
        .bootstrap .e-schedule-print::before,
        .highcontrast .e-schedule-print::before {
            content: "\e7df";
        }

        .bootstrap4 .e-schedule-print::before {
            content: "\e743";
        }

        .tailwind .e-schedule-print::before {
            content: "\e76c";
        }

        .bootstrap4 .e-schedule-import::before {
            content: "\e77a";
        }

        .tailwind .e-schedule-import::before {
            content: "\e76d";
        }

        .material .e-schedule-ical-export::before,
        .fabric .e-schedule-ical-export::before {
            content: "\e711";
        }

        .bootstrap .e-schedule-ical-export::before {
            content: "\e702";
        }

        .bootstrap4 .e-schedule-ical-export::before {
            content: "\e780";
        }

        .highcontrast .e-schedule-ical-export::before {
            content: "\e712";
        }

        .tailwind .e-schedule-ical-export::before {
            content: "\e7bf";
        }

        .material .e-schedule-excel-export::before {
            content: "\e700";
        }

        .fabric .e-schedule-excel-export::before,
        .highcontrast .e-schedule-excel-export::before {
            content: "\242";
        }

        .bootstrap .e-schedule-excel-export::before {
            content: "\e70b";
        }

        .bootstrap4 .e-schedule-excel-export::before {
            content: "\e74e";
        }

        .tailwind .e-schedule-excel-export::before {
            content: "\e780";
        }

        .material .e-schedule-add-event::before,
        .fabric .e-schedule-add-event::before,
        .bootstrap .e-schedule-add-event::before,
        .highcontrast .e-schedule-add-event::before {
            content: "\e823";
        }

        .bootstrap4 .e-schedule-add-event::before {
            content: "\e759";
        }

        .tailwind .e-schedule-add-event::before {
            content: "\e78a";
        }

        .material .e-schedule-add-recurrence-event::before,
        .bootstrap .e-schedule-add-recurrence-event::before {
            content: "\e308";
        }

        .fabric .e-schedule-add-recurrence-event::before,
        .highcontrast .e-schedule-add-recurrence-event::before {
            content: "\e309";
        }

        .bootstrap4 .e-schedule-add-recurrence-event::before {
            content: "\e7c8";
        }

        .tailwind .e-schedule-add-recurrence-event::before {
            content: "\e71d";
        }

        .material .e-schedule-day-view::before {
            content: "\e31b";
        }

        .fabric .e-schedule-day-view::before,
        .highcontrast .e-schedule-day-view::before {
            content: "\e317";
        }

        .bootstrap .e-schedule-day-view::before {
            content: "\e318";
        }

        .bootstrap4 .e-schedule-day-view::before {
            content: "\e7b8";
        }

        .tailwind .e-schedule-day-view::before {
            content: "\e767";
        }

        .material .e-schedule-week-view::before {
            content: "\e315";
        }

        .fabric .e-schedule-week-view::before,
        .highcontrast .e-schedule-week-view::before {
            content: "\e31f";
        }

        .bootstrap .e-schedule-week-view::before {
            content: "\e320";
        }

        .bootstrap4 .e-schedule-week-view::before {
            content: "\e7c0";
        }

        .tailwind .e-schedule-week-view::before {
            content: "\e795";
        }

        .material .e-schedule-workweek-view::before {
            content: "\e314";
        }

        .fabric .e-schedule-workweek-view::before,
        .highcontrast .e-schedule-workweek-view::before {
            content: "\e323";
        }

        .bootstrap .e-schedule-workweek-view::before {
            content: "\e319";
        }

        .bootstrap4 .e-schedule-workweek-view::before {
            content: "\e7c0";
        }

        .tailwind .e-schedule-workweek-view::before {
            content: "\e795";
        }

        .material .e-schedule-month-view::before,
        .material .e-schedule-year-view::before {
            content: "\e93c";
        }

        .fabric .e-schedule-month-view::before,
        .fabric .e-schedule-year-view::before,
        .highcontrast .e-schedule-month-view::before,
        .highcontrast .e-schedule-year-view::before {
            content: "\ea90";
        }

        .bootstrap .e-schedule-month-view::before,
        .bootstrap .e-schedule-year-view::before {
            content: "\ea8f";
        }

        .bootstrap4 .e-schedule-month-view::before,
        .bootstrap4 .e-schedule-year-view::before {
            content: "\e7c4";
        }

        .tailwind .e-schedule-month-view::before,
        .tailwind .e-schedule-year-view::before {
            content: "\e719";
        }

        .material .e-schedule-agenda-view::before {
            content: "\e31d";
        }

        .fabric .e-schedule-agenda-view::before,
        .highcontrast .e-schedule-agenda-view::before {
            content: "\e316";
        }

        .bootstrap .e-schedule-agenda-view::before {
            content: "\e31a";
        }

        .bootstrap4 .e-schedule-agenda-view::before {
            content: "\e7bd";
        }

        .tailwind .e-schedule-agenda-view::before {
            content: "\e718";
        }

        .e-schedule-toolbar-settings::before {
            content: "\e679";
            font-size: 14px;
        }

        .tailwind .e-schedule-toolbar-settings::before {
            content: "\e846";
            font-size: 14px;
        }

        .material .schedule-overview .overview-toolbar .e-toolbar {
            border-style: solid;
        }

        .material .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import .e-upload-browse-btn {
            text-transform: capitalize;
        }

        .highcontrast .schedule-overview .overview-header .overview-titlebar {
            background-color: #ffd939;
        }

        .highcontrast .schedule-overview .overview-header,
        .highcontrast .schedule-overview .overview-content {
            border: 1px solid #969696;
        }

        .highcontrast .schedule-overview .overview-content {
            border-top: 0;
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
        }

        .fabric .schedule-overview .overview-toolbar .overview-toolbar-settings,
        .fabric .schedule-overview .overview-content .right-panel .control-panel {
            background-color: #ffffff;
        }

        .bootstrap .schedule-overview .overview-toolbar .overview-toolbar-settings,
        .bootstrap .schedule-overview .overview-content .right-panel .control-panel {
            background-color: #f8f8f8;
        }

        .highcontrast .schedule-overview .overview-toolbar .overview-toolbar-settings,
        .highcontrast .schedule-overview .overview-content .right-panel .control-panel {
            background-color: #000000;
            border-color: #969696;
            color: #ffffff;
        }

        .schedule-overview .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-btn {
            line-height: 15px;
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

                    .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button,
                    .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button:focus,
                    .schedule-overview .overview-header .overview-titlebar .e-upload.calendar-import button:hover {
                        background-color: transparent;
                        border-color: transparent;
                        box-shadow: none;
                        color: #ffffff;
                        font-size: 12px;
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
                width: 100%;
            }

        .schedule-overview .overview-content {
            border: 1px solid rgba(0, 0, 0, 0.15);
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
                    background: rgba(248, 249, 250, 1);
                    border-left: 1px solid rgba(0, 0, 0, 0.15);
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

        .schedule-resource.e-multi-select-list-wrapper.e-checkbox .e-list-parent li:first-child {
            background-image: none;
            opacity: .5;
            pointer-events: none;
            user-select: none;
        }

        .schedule-overview .quick-info-header {
            background-color: white;
            padding: 8px 18px;
        }

        .schedule-overview .quick-info-header-content {
            justify-content: flex-end;
            display: flex;
            flex-direction: column;
            padding: 5px 10px 5px;
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
            margin: 0;
            padding: 10px;
            width: auto;
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
        }

        .schedule-overview .cell-footer.e-btn {
            background-color: #ffffff;
            border-color: #878787;
            color: #878787;
        }

        .schedule-overview .cell-footer {
            padding-top: 10px;
        }

        .schedule-overview .e-quick-popup-wrapper .e-cell-popup .e-popup-content {
            padding: 0 14px;
        }

        .schedule-overview .e-quick-popup-wrapper .e-event-popup .e-popup-footer {
            display: block;
        }

        .schedule-overview .e-quick-popup-wrapper .e-popup-footer button:first-child {
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

        .schedule-context-menu .e-menu-item .new::before {
            content: '\e7f9';
        }

        .tailwind .schedule-context-menu .e-menu-item .new::before {
            content: '\e78a';
        }

        .schedule-context-menu .e-menu-item .edit::before {
            content: '\ea9a';
        }

        .tailwind .schedule-context-menu .e-menu-item .edit::before {
            content: '\e7d2';
        }

        .schedule-context-menu .e-menu-item .recurrence::before {
            content: '\e308';
            font-weight: bold;
        }

        .tailwind .schedule-context-menu .e-menu-item .recurrence::before {
            content: '\e71d';
            font-weight: bold;
        }

        .schedule-context-menu .e-menu-item .today::before {
            content: '\e322';
        }

        .tailwind .schedule-context-menu .e-menu-item .today::before {
            content: '\e742';
        }

        .schedule-context-menu .e-menu-item .delete::before {
            content: '\e94a';
        }

        .tailwind .schedule-context-menu .e-menu-item .delete::before {
            content: '\e78d';
        }

        .e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {
            font-size: 14px;
        }

        .schedule-context-menu ul .e-menu-item .e-menu-icon {
            font-size: 12px;
        }

        .highcontrast .schedule-context-menu .e-menu-item .today::before,
        .fabric .schedule-context-menu .e-menu-item .today::before {
            content: '\e321';
        }

        .bootstrap .schedule-context-menu .e-menu-item .today::before {
            content: '\e312';
        }

        .highcontrast .schedule-context-menu .e-menu-item .delete::before,
        .fabric .schedule-context-menu .e-menu-item .delete::before {
            content: '\eb00';
        }

        .highcontrast .schedule-context-menu .e-menu-item .new::before,
        .fabric .schedule-context-menu .e-menu-item .new::before {
            content: '\e823';
        }

        .bootstrap4 .schedule-context-menu .e-menu-item .today::before {
            content: '\e7be';
        }

        .bootstrap4 .schedule-context-menu .e-menu-item .edit::before {
            content: '\e78f';
        }

        .bootstrap4 .schedule-context-menu .e-menu-item .delete::before {
            content: '\e773';
        }

        .bootstrap4 .schedule-context-menu .e-menu-item .new::before {
            content: '\e759';
        }

        .bootstrap4 .schedule-context-menu .e-menu-item .recurrence::before {
            content: '\e7c8';
        }

        .highcontrast .schedule-context-menu .e-menu-item .recurrence::before,
        .fabric .schedule-context-menu .e-menu-item .recurrence::before {
            content: '\e309';
            font-weight: bold;
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

        .tailwind .schedule-overview.e-schedule .e-left-indent .e-header-cells {
            height: 66px;
        }

        .tailwind .overview-toolbar .e-toolbar {
            border: 1px solid rgb(229, 231, 235);
        }
</style>
<!-- custom code end -->

<script>
    import Vue from "vue";
    import { addClass, extend, removeClass, closest, remove, isNullOrUndefined, Internationalization } from '@syncfusion/ej2-base';
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
      const quickPopup = scheduleObj.element.querySelector(".e-quick-popup-wrapper");
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
                buttons: { browse: 'Import' },
                exportItems: [
                  { text: 'iCalendar', iconCss: 'e-icons e-schedule-ical-export' },
                  { text: 'Excel', iconCss: 'e-icons e-schedule-excel-export' }
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
                        iconCss: 'e-icons new',
                        id: 'Add'
                    }, {
                        text: 'New Recurring Event',
                        iconCss: 'e-icons recurrence',
                        id: 'AddRecurrence'
                    }, {
                        text: 'Today',
                        iconCss: 'e-icons today',
                        id: 'Today'
                    }, {
                        text: 'Edit Event',
                        iconCss: 'e-icons edit',
                        id: 'Save'
                    }, {
                        text: 'Edit Event',
                        id: 'EditRecurrenceEvent',
                        iconCss: 'e-icons edit',
                        items: [{
                            text: 'Edit Occurrence',
                            id: 'EditOccurrence'
                        }, {
                            text: 'Edit Series',
                            id: 'EditSeries'
                        }]
                    }, {
                        text: 'Delete Event',
                        iconCss: 'e-icons delete',
                        id: 'Delete'
                    }, {
                        text: 'Delete Event',
                        id: 'DeleteRecurrenceEvent',
                        iconCss: 'e-icons delete',
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
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="multi_Drag" :checked="false" :change="onAllowMultiDrag"></ejs-switch></div><div class="text-child" style="font-size:14px;">Allow Multi Drag</div></div>',
                            data: function () { return { data: {} }; },
                            methods : {
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
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="timeline_views" :checked="false" :change="onTimelineViewChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Timeline Views</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
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
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="grouping" :checked="true" :change="onGroupingChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Grouping</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
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
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="gridlines" :checked="true" :change="onGridlinesChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Gridlines</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
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
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="row_auto_height" :checked="false" :change="onRowAutoHeightChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Row Auto Height</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
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
                            template: '<div style="height:46px;line-height:27px;"><div class="icon-child" style="text-align:center;"><ejs-switch id="tooltip" :checked="false" :change="onTooltipChange"></ejs-switch></div><div class="text-child" style="font-size:14px;">Tooltip</div></div>',
                            data: function () { return { data: {} }; },
                            methods: {
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
        } else {
            addClass([settingsPanel], 'hide');
        }
        scheduleObj.refreshEvents();
        },
        generateEvents: function() {
            const eventData = [];
            const eventSubjects = [
            'Bering Sea Gold', 'Technology', 'Maintenance', 'Meeting', 'Travelling', 'Annual Conference', 'Birthday Celebration',
            'Farewell Celebration', 'Wedding Aniversary', 'Alaska: The Last Frontier', 'Deadest Catch', 'Sports Day', 'MoonShiners',
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
            '<span class="e-btn-icon e-icons e-schedule-timezone e-icon-left"></span>' + args.itemData.text;
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