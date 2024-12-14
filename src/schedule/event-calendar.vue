<template>
<div class="schedule-vue-sample">
    <div class="col-md-12 control-section event-calendar-control-section">
        <div class="content-wrapper">
            <div>
                <ejs-toolbar :cssClass="'event-calendar-toolbar'" ref="toolbarObj" :clicked="toolbarItemClick">
                    <e-items>
                        <e-item prefixIcon="e-icons e-menu" tooltipText="Menu" cssClass="e-menu-btn"></e-item>
                        <e-item prefixIcon="e-icons e-chevron-left" tooltipText="Previous"
                            cssClass="e-previous"></e-item>
                        <e-item prefixIcon="e-chevron-right" tooltipText="Next" cssClass="e-next"></e-item>
                        <e-item text="new Date().toLocaleDateString()" cssClass="e-date-range"></e-item>
                        <e-item prefixIcon="e-icons e-plus" align="Right" tooltipText="Create" text="Create"
                            cssClass="e-create"></e-item>
                        <e-item type="Separator" align="Right"></e-item>
                        <e-item tooltipText="Today" text="Today" align="Right" cssClass="e-today"></e-item>
                        <e-item type="Separator" align="Right"></e-item>
                        <e-item tooltipText="Day" text="Day" align="Right" cssClass="e-day"></e-item>
                        <e-item tooltipText="Week" text="Week" align="Right" cssClass="e-week"></e-item>
                        <e-item tooltipText="Month" text="Month" align="Right" cssClass="e-month"></e-item>
                        <e-item tooltipText="Agenda" text="Agenda" align="Right" cssClass="e-agenda"></e-item>
                        <e-item tooltipText="Timeline" text="Timeline" align="Right" cssClass="e-timeline"></e-item>
                        <e-item tooltipText="Year" text="Year" align="Right" cssClass="e-year"></e-item>
                    </e-items>
                </ejs-toolbar>
            </div>
            <div class="leftside">
                <ejs-sidebar id="sidebar-left" ref="leftsideObj" width="300px"
                    :mediaQuery="mediaQuery" target=".main-content" :isOpen="sidebarOpen">
                    <div class="table-content">
                        <ejs-calendar id="calendar" ref="calendarObj" :cssClass="'selected-date-calendar'"
                            :start="'Month'" :value="sideBarCalendarDate" :change="onCalendarChange"></ejs-calendar>
                        <br />
                        <div id="container">
                            <ejs-dialog :header="calendarDialogHeaderText" ref="dialogObj" :footerTemplate="'footerTemplate'"
                                :content="'contentTemplate'" :height="height" :beforeOpen="beforeDialogOpen"
                                :animationSettings="animationSettings"
                                :showCloseIcon="showCloseIcon" :target="target" :width="width" :isModal="true"
                                :visible="dialogVisible">
                                <template v-slot:footerTemplate>
                                    <button id="addButton" class="e-control e-btn e-primary" data-ripple="true">
                                        Add
                                    </button>
                                    <button id="saveButton" class="e-control e-btn e-primary" data-ripple="true">
                                        Save
                                    </button>
                                </template>
                                <template v-slot:contentTemplate>
                                    <div>Name</div>
                                    <div id="dialog-elements">
                                        <ejs-textbox floatLabelType="Never" ref="textboxObj" cssClass="e-outline"
                                            placeholder="Enter the calendar name" :value="textBoxValue"
                                            :change="textChange"></ejs-textbox>
                                        <ejs-colorpicker id="color-picker" ref="colorPickerObj"
                                            :value="colorBoxValue" :change="colorChange"></ejs-colorpicker>
                                    </div>
                                </template>
                            </ejs-dialog>
                            <ejs-listview id="listview-def" ref="listViewObj" height="240px"
                                :showCheckBox="showCheckBox" :dataSource="calendarsList" :fields="listViewFields"
                                :showHeader="true" :select="listViewSelect" :actionComplete="listViewActionComplete"
                                :headerTemplate="'listViewHeaderTemplate'" :template="'listTemplate'">
                                <template v-slot:listViewHeaderTemplate>
                                    <div class="calendars-list-header">
                                        <span class="header-text">Calendars</span>
                                        <button class="header-icon e-icons e-plus" id="add"></button>
                                    </div>
                                </template>
                                <template v-slot:listTemplate="{ data }">
                                    <div class="calendar-list-item">
                                        <div class="calendar-name" :title="data.name">
                                            {{ data.name }}
                                        </div>
                                        <div v-if="data.id !== 1" class="calendar-buttons">
                                            <span id="calendar-edit-btn" :data-calendar-id="data.id"
                                                @click="calendarEditClick" class="e-icons e-edit"></span>
                                            <span id="calendar-delete-btn" :data-calendar-id="data.id"
                                                @click="calendarDeleteClick" class="e-icons e-trash"></span>
                                        </div>
                                    </div>
                                </template>
                            </ejs-listview>
                        </div>
                    </div>
                </ejs-sidebar>
                <ejs-sidebar id="sidebar-right" ref="rightSidebarObj" class="default-sidebar" width="300px"
                    target=".main-content" :isOpen="rightSideBarisOpen" position="Right" :created="unplannedSidebarCreated"
                    :close="unplannedSidebarCollapse">
                    <div id="unplanned-events-toolbar">
                        <ejs-toolbar :clicked="unplannedSidebarClicked">
                            <e-items>
                                <e-item prefixIcon="e-icons e-exit-full-screen" cssClass="e-exit"
                                    tooltipText="Open/Close Sidebar"></e-item>
                                <e-item :template="'UnplannedEventsTemplate'"></e-item>
                                <template v-slot:UnplannedEventsTemplate>
                                    <h4 id="headerText">Unplanned Events</h4>
                                </template>
                            </e-items>
                        </ejs-toolbar>
                    </div>
                    <div id="unplanned-events-grid">
                        <ejs-grid id="Grid" ref="gridObj" :dataSource="gridData" :allowPaging="true"
                            :toolbar="toolbar" :allowSelection="true">
                            <e-columns>
                                <e-column field="Subject" headerText="Event" width="120"
                                    textAlign="Left"></e-column>
                                <e-column field="StartTime" headerText="Date" width="140"
                                    :format="'dd MMMM yyyy'"></e-column>
                            </e-columns>
                        </ejs-grid>
                    </div>
                </ejs-sidebar>
            </div>
            <div class="main-content">
                <div class="sidebar-content">
                    <div class="schedule-container">
                        <ejs-schedule id="schedule" ref="scheduleObj" height="650px" :currentView="scheduleCurrentView"
                            :eventSettings="eventSettings" :eventRendered="scheduleEventRendered"
                            :firstDayOfWeek="firstDayOfWeek" :selectedDate="selectedDate"
                            :actionComplete="scheduleActionComplete" :popupOpen="onSchedulePopupOpen"
                            :showHeaderBar="showHeaderBar" :dataBound="updateDateRange">
                            <e-views>
                                <e-view option="Day"></e-view>
                                <e-view option="Week"></e-view>
                                <e-view option="Month"></e-view>
                                <e-view option="Agenda"></e-view>
                                <e-view option="Year"></e-view>
                                <e-view option="TimelineMonth" displayName="Timeline" :group="group"></e-view>
                            </e-views>
                            <e-resources>
                                <e-resource field="ResourceId" title="Resource" :dataSource="resourceDataSource"
                                    name="Resources" textField="name" idField="id" colorField="color">
                                </e-resource>
                            </e-resources>
                        </ejs-schedule>
                    </div>
                    <div class="unplanned-container">
                        <div id="plannedOpen" ref="plannedOpenRef" class="e-icons e-chevron-left-double"></div>
                        <div class="unplanned-text-container">Unplanned events</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
    <p>This demo showcases the way to organize and filter multiple types of events such as Personal, Birthdays, Work,
        and Holidays in the scheduler.</p>
    </div>
    <div id="description">
    <p>In this example the multiple type of appointments such as Personal, Birthdays, Work,
        and Holidays organized with filter option in a single scheduler. It helps the user to view a
        specific or multiple type of appointments at one place.</p>
    <p>The left sidebar helps the user to navigate between the scheduler dates and filter the appointments based
        on their type.</p>
    <p>The Schedule component is configured to show the appointments in colors based on their type to identify
        the appointment type.</p>
    <p>The right sidebar displays the list of unplanned events, which can be useful for the user to plan them later.</p>
    </div>
</div>
</template>
<style>
    .event-calendar-control-section .sidebar-content {
        display: flex;
    }

    .event-calendar-control-section .unplanned-text-container {
        writing-mode: vertical-rl;
        margin: auto;
    }

    .event-calendar-control-section .unplanned-container {
        width: 50px;
        display: block;
        text-align: center;
        padding: 12px 0;
    }

    .event-calendar-control-section .unplanned-events-toolbar h4 {
        font-size: 16px;
    }

    .event-calendar-control-section .unplanned-container div {
        padding: 6px 0;
        font-size: 16px;
        font-weight: 600;
    }

    .event-calendar-control-section .e-sidebar .e-calendar.e-device {
        min-width: 280px !important;
    }

    @media only screen and (max-width: 768px) {
      .event-calendar-control-section .unplanned-container {
        width: 27px;
      }
    }

    .event-calendar-control-section #plannedOpen {
        width: inherit;
    }

    .event-calendar-control-section .e-dlg-content #dialog-elements {
        display: flex;
    }

    .calendar-edit-dialog .dialog-content {
        display: flex;
    }

    .calendar-edit-dialog .dialog-content .calendar-name,
    .event-calendar-control-section .schedule-container {
        flex-grow: 1;
    }

    .event-calendar-control-section .table-content {
        padding: 10px;
    }

    .event-calendar-control-section .calendar-list-container {
        padding-top: 10px;
    }

    .event-calendar-control-section .e-grid .e-headercelldiv {
        font-size: 15px;
        font-weight: bold;
    }

    .event-calendar-control-section .selected-date-calendar.e-calendar {
        max-width: inherit;
    }

    .event-calendar-control-section .selected-date-calendar.e-calendar .e-btn.e-today.e-flat.e-primary,
    .event-calendar-control-section .selected-date-calendar.e-calendar .e-css.e-btn.e-today.e-flat.e-primary {
        display: none;
    }

    .event-calendar-control-section .content-wrapper {
        border: 1px solid #D7D7D7;
    }

    .event-calendar-control-section .event-calendar-toolbar.e-toolbar {
        border-bottom: 1px solid #D7D7D7;
    }

    .event-calendar-control-section .event-calendar-toolbar.e-toolbar .e-toolbar-item.e-create .e-tbar-btn.e-btn {
        background-color: #0f6cbd;
    }

    .event-calendar-control-section .event-calendar-toolbar.e-toolbar .e-toolbar-item.e-create .e-tbar-btn.e-btn .e-btn-icon,
    .event-calendar-control-section .event-calendar-toolbar.e-toolbar .e-toolbar-item.e-create .e-tbar-btn.e-btn .e-tbar-btn-text {
        color: white;
    }

    .event-calendar-control-section .e-list-header,
    .event-calendar-control-section .e-list-header .calendars-list-header,
    .event-calendar-control-section .calendar-list-item.e-checkbox.e-checkbox-left {
        display: flex;
        align-items: center;
    }

    .event-calendar-control-section .e-list-header .e-headertemplate-text,
    .event-calendar-control-section .e-list-header .e-headertemplate-text .header-text {
        flex-grow: 1;
        font-size: 16px;
    }

    .event-calendar-control-section .e-list-header .e-headertemplate-text .header-icon:hover {
        cursor: pointer;
    }

    .event-calendar-control-section .calendars-list-header .e-plus{
      border: none;
      background-color: transparent;
    }

    .event-calendar-control-section .calendar-list-item .calendar-name {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
    }

    .event-calendar-control-section .calendar-list-item .calendar-buttons {
        display: none;
    }

    .event-calendar-control-section .calendar-list-item:hover .calendar-buttons {
        display: flex;
    }

    .event-calendar-control-section .calendar-list-item #calendar-edit-btn,
    .event-calendar-control-section .calendar-list-item #calendar-delete-btn {
        padding: 0 6px;
    }

    .event-calendar-control-section .e-sidebar {
        z-index: 1 !important;
    }
</style>
<script>
import {
  extend,
  Internationalization,
  isNullOrUndefined,
} from '@syncfusion/ej2-base';
import {
  companyData,
  holidayData,
  personalData,
  birthdayData,
} from './datasource';
import {
  SidebarComponent,
  ToolbarComponent,
  ItemDirective,
  ItemsDirective,
} from '@syncfusion/ej2-vue-navigations';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CalendarComponent } from '@syncfusion/ej2-vue-calendars';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import {
  TextBoxComponent,
  ColorPickerComponent,
} from '@syncfusion/ej2-vue-inputs';
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Month,
  TimelineMonth,
  Agenda,
  Week,
  Day,
  Year,
  TimelineViews,
  Resize,
  DragAndDrop,
  addDays,
  addMonths,
  addYears,
  resetTime,
  WEEK_LENGTH,
  MS_PER_MINUTE,
  MS_PER_DAY,
  getWeekFirstDate,
  getWeekLastDate,
  ResourceDirective,
  ResourcesDirective,
} from '@syncfusion/ej2-vue-schedule';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-vue-grids';
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';
import { nextTick } from 'vue';
var intl = new Internationalization();

export default {
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-view': ViewDirective,
    'e-views': ViewsDirective,
    'ejs-toolbar': ToolbarComponent,
    'e-item': ItemDirective,
    'e-items': ItemsDirective,
    'ejs-sidebar': SidebarComponent,
    'ejs-calendar': CalendarComponent,
    'ejs-dialog': DialogComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-listview': ListViewComponent,
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective,
  },
  data: function () {
    return {
      proxy: this,
      sidebarOpen: true,
      mediaQuery: '(min-width: 600px)',
      sideBarCalendarDate: new Date(),
      showCloseIcon: true,
      height: '35%',
      target: '.control-section',
      animationSettings: { effect: 'None' },
      width: '320px',
      showCheckBox: true,
      isAdd: false,
      showHeader: true,
      dateRange: '',
      textBoxValue: '',
      colorBoxValue: '',
      enteredTextValue: '',
      selectedColorValue: '',
      calendarDialogHeaderText: 'New Calendar',
      dialogVisible: false,
      rightSideBarisOpen: false,
      calendarEditClicked: false,
      listViewFields: { id: 'id', text: 'name', isChecked: 'isSelected' },
      activeCalendarData: { id: '0', name: '', color: '#008000ff' },
      pageOptions: { pageSize: 7 },
      calendarsList: [],
      calendars: [
        { name: 'My Calendar', id: 1, color: '#c43081', isSelected: true },
        { name: 'Company', id: 2, color: '#ff7f50', isSelected: true },
        { name: 'Birthday', id: 3, color: '#AF27CD', isSelected: true },
        { name: 'Holiday', id: 4, color: '#808000', isSelected: true },
      ],
      resourceDataSource: [
        { name: 'Nancy', id: 1, color: '#df5286' },
        { name: 'Steven', id: 2, color: '#7fa900' },
        { name: 'Robert', id: 3, color: '#ea7a57' },
        { name: 'Smith', id: 4, color: '#5978ee' },
        { name: 'Micheal', id: 5, color: '#df5286' },
        { name: 'Root', id: 6, color: '#00bdae' },
      ],
      scheduleCurrentView: 'Week',
      selectedDate: new Date(),
      selectedCalendars: [],
      appointmentData: [],
      filteredData: [],
      gridData: [],
      showHeaderBar: false,
      firstDayOfWeek: 0,
      group: { resources: ['Resources'] },
      eventSettings: { dataSource: [] },
    };
  },
  created() {
    this.selectedCalendars = this.getSelectedCalendars();
    this.appointmentData = this.generateCalendarData();
    this.filteredData = this.getFilteredData();
    this.calendarsList = JSON.parse(JSON.stringify(this.calendars));
    this.gridData = extend([], this.filteredData.unPlanned, null, true);
    this.eventSettings.dataSource = extend(
      [],
      this.filteredData.planned,
      null,
      true
    );
  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.$refs.rightSidebarObj.toggle();
      this.$refs.leftsideObj.toggle();
    }
  },
  methods: {
    onCalendarChange(args) {
      if (args.isInteracted && this.$refs.scheduleObj) {
        this.selectedDate = args.value;
      }
    },
    textChange(args) {
      this.enteredTextValue = args.value;
    },
    colorChange(args) {
      this.selectedColorValue = args.currentValue.hex;
    },
    updateDateRange() {
      const dateCollection = this.$refs.scheduleObj.getCurrentViewDates();
      this.dateRange = this.$refs.scheduleObj.getDateRangeText(dateCollection);
      if (this.dateRange !== '' && this.$refs.toolbarObj) {
        const toolbarElement = this.$refs.toolbarObj.$el;
        const dateRangeElement = toolbarElement.querySelector(
          '.e-date-range .e-tbar-btn-text'
        );
        toolbarElement
          .querySelector('.e-date-range .e-tbar-btn')
          .setAttribute('aria-label', this.dateRange);
        dateRangeElement.textContent = this.dateRange;
      }
    },
    getPreviousNextDate(isPrevious) {
      let currentDate = this.$refs.scheduleObj.selectedDate;
      if (this.$refs.scheduleObj) {
        const view = this.$refs.scheduleObj.currentView;
        switch (view) {
          case 'Day':
          case 'Agenda':
            currentDate = addDays(currentDate, isPrevious ? -1 : 1);
            break;
          case 'Week':
            currentDate = addDays(
              currentDate,
              isPrevious ? -WEEK_LENGTH : WEEK_LENGTH
            );
            break;
          case 'Month':
          case 'TimelineMonth':
            currentDate = addMonths(currentDate, isPrevious ? -1 : 1);
            break;
          case 'Year':
            currentDate = addYears(currentDate, isPrevious ? -1 : 1);
            break;
          default:
            break;
        }
      }
      return currentDate;
    },
    setCurrentView(view) {
      const scheduleObj = this.$refs.scheduleObj;
      if (scheduleObj) {
        this.scheduleCurrentView = view;
      }
    },
    unplannedSidebarClicked(args) {
      switch (args.item.cssClass) {
        case 'e-exit':
          this.$refs.rightSidebarObj.toggle();
          break;
        default:
          break;
      }
    },
    onSchedulePopupOpen(args) {
      if (args.type === 'Editor') {
        const formElement = args.element.querySelector('.e-schedule-form');
        if (!args.element.querySelector('.custom-field-row')) {
          const row = document.createElement('div');
          row.className = 'custom-field-row';
          const resourcesRow = args.element.querySelector('.e-resources-row');
          formElement.firstChild.insertBefore(row, resourcesRow);
          const container = document.createElement('div');
          container.className = 'custom-field-container';
          const inputEle = document.createElement('input');
          inputEle.className = 'e-field';
          inputEle.name = 'CalendarId';
          container.appendChild(inputEle);
          row.appendChild(container);
          const dropDownList = new DropDownList({
            dataSource: extend([], this.calendars, null, true),
            cssClass: 'calendar-ddl',
            fields: { text: 'name', value: 'id' },
            value:
              args.data?.CalendarId ||
              this.selectedCalendars?.ids[0] ||
              this.calendars[0]?.id,
            floatLabelType: 'Always',
            placeholder: 'Calendar',
          });
          dropDownList.appendTo(inputEle);
          inputEle.setAttribute('name', 'CalendarId');
        } else {
            const calendarDDL = args.element.querySelector(".calendar-ddl input").ej2_instances[0];
            calendarDDL.dataSource = extend([], this.calendars, null, true);
            calendarDDL.value = args.data?.CalendarId || this.selectedCalendars?.ids[0] || this.calendars[0]?.id;
        }
      } else if (args.type === "QuickInfo" && args.data?.Id == null) {
          args.cancel = true;
      } 
    },
    toolbarItemClick(args) {
      if (!args.item) {
        return;
      }
      const scheduleObj = this.$refs.scheduleObj;
      if (!scheduleObj) {
        return;
      }
      switch (args.item.cssClass) {
        case 'e-menu-btn':
          this.$refs.leftsideObj.toggle();
          break;
        case 'e-create':
          if (this.selectedCalendars.ids.length > 0) {
            const data = {
              StartTime: resetTime(new Date()),
              EndTime: resetTime(addDays(new Date(), 1)),
              ResourceId: this.selectedCalendars.ids[0],
            };
            scheduleObj.openEditor(data, 'Add', true);
          }
          break;
        case 'e-previous':
          this.selectedDate = this.getPreviousNextDate(true);
          break;
        case 'e-next':
          this.selectedDate = this.getPreviousNextDate(false);
          break;
        case 'e-today':
          this.selectedDate = new Date();
          break;
        case 'e-day':
          this.setCurrentView('Day');
          break;
        case 'e-week':
          this.setCurrentView('Week');
          break;
        case 'e-month':
          this.setCurrentView('Month');
          break;
        case 'e-agenda':
          this.setCurrentView('Agenda');
          break;
        case 'e-timeline':
          this.setCurrentView('TimelineMonth');
          break;
        case 'e-year':
          this.setCurrentView('Year');
          break;
        default:
          break;
      }
    },
    unplannedSidebarCollapse() {
      const unplannedElement = document.querySelector('.unplanned-container');
      if (unplannedElement) {
        unplannedElement.style.display = 'block';
      }
    },
    calendarEditClick(e) {
      e.stopImmediatePropagation();
      if (this.$refs.dialogObj && e?.target) {
        const calendarID = Number(e.target.dataset.calendarId);
        this.activeCalendarData = this.calendars.find(
          (item) => item.id === calendarID
        );
        const textValue = this.activeCalendarData.name;
        const colorValue = this.activeCalendarData.color;
        this.calendarEditClicked = true;

        this.$refs.dialogObj.show();
        const saveButton = document.getElementById('saveButton');
        if (saveButton) {
          saveButton.onclick = () => {
            const newValue =
              this.enteredTextValue === '' ? textValue : this.enteredTextValue;
            const newColor =
              this.selectedColorValue === ''
                ? colorValue
                : this.selectedColorValue;
            this.calendars = this.calendars.map((item) => {
              if (item.name === textValue) {
                return { ...item, name: newValue, color: newColor };
              }
              return item;
            });
            this.selectedCalendars = this.getSelectedCalendars();
            this.calendarsList = JSON.parse(JSON.stringify(this.calendars));
            this.$refs.scheduleObj.refreshEvents();
            this.$refs.dialogObj.hide();
          };
        }
      }
    },
    calendarDeleteClick(e) {
      e.stopImmediatePropagation();
      if (e?.target) {
        const calendarID = +e.target.dataset.calendarId;
        this.activeCalendarData = this.calendars.find(
          (item) => item.id === calendarID
        );
        this.$refs.listViewObj.removeItem(this.activeCalendarData);
        this.calendars = this.calendars.filter(
          (item) => item.id !== calendarID
        );
        this.appointmentData = this.appointmentData.filter(
          (item) => item.CalendarId !== calendarID
        );
        this.selectedCalendars = this.getSelectedCalendars();
        const matchingEvents = this.getFilteredData();
        this.eventSettings = { dataSource: matchingEvents.planned };
        this.$refs.scheduleObj.setProperties({
        eventSettings: this.eventSettings,
        });
        this.gridData = matchingEvents.unPlanned;
      }
    },
    generateCalendarData() {
      let collections = [];
      const dataCollections = extend([], [
        ...personalData,
        ...companyData,
        ...birthdayData,
        ...holidayData,
      ], null, true);
      const oldTime = new Date(2021, 3, 1).getTime();
      const newTime = resetTime(new Date()).getTime();
      for (let data of dataCollections) {
        collections = collections.concat(data);
      }
      for (const data of collections) {
        data.IsPlanned = !(data.Id % 2);
        data.IsAllDay = [1, 2].indexOf(data.CalendarId) <= -1;
        const diff = oldTime - resetTime(new Date(data.StartTime)).getTime();
        const hour = Math.floor(Math.random() * (13 - 9) + 9);
        data.StartTime = new Date(
          newTime - diff + (data.IsAllDay ? 0 : hour * 60 * MS_PER_MINUTE)
        );
        data.EndTime = new Date(
          data.StartTime.getTime() +
            (data.IsAllDay ? MS_PER_DAY : MS_PER_MINUTE * 60)
        );
        data.ResourceId = Math.floor(Math.random() * 6) + 1;
      }
      return collections;
    },
    getFilteredData() {
      const planned = [];
      const unPlanned = [];
      for (const data of this.appointmentData) {
        if (this.selectedCalendars.ids.indexOf(data.CalendarId) > -1) {
          if (data.IsPlanned) {
            planned.push(data);
          } else {
            unPlanned.push(data);
          }
        }
      }
      return { planned: planned, unPlanned: unPlanned };
    },
    getSelectedCalendars() {
      const selectedIds = [];
      const selectedItems = [];
      for (let calendar of this.calendars) {
        if (calendar.isSelected) {
          selectedIds.push(calendar.id);
          selectedItems.push(calendar);
        }
      }
      return { ids: selectedIds, items: selectedItems };
    },
    listViewSelect(args) {
      const idFromArgs = Number(args.data.id);
      this.calendars[args.index].isSelected = args.isChecked;
      this.selectedCalendars = this.getSelectedCalendars();
      if (args.isChecked) {
        this.changeCheckboxBackgroundColor(idFromArgs);
      }
      const matchingEvents = this.getFilteredData();
      this.eventSettings = { dataSource: matchingEvents.planned };
      this.$refs.scheduleObj.setProperties({
        eventSettings: this.eventSettings,
      });
      this.gridData = matchingEvents.unPlanned;
    },
    beforeDialogOpen() {
      if (this.calendarEditClicked) {
        this.calendarEditClicked = false;
        this.calendarDialogHeaderText = 'Edit Calendar';
        document.getElementById('addButton').style.display = 'none';
        document.getElementById('saveButton').style.display = 'block';
        if (this.$refs.textboxObj && this.$refs.colorPickerObj) {
          this.textBoxValue = this.activeCalendarData.name;
          this.colorBoxValue = this.activeCalendarData.color;
        }
      } else {
        this.calendarDialogHeaderText = 'New Calendar';
        document.getElementById('addButton').style.display = 'block';
        document.getElementById('saveButton').style.display = 'none';
        if (this.$refs.textboxObj && this.$refs.colorPickerObj) {
          this.textBoxValue = '';
          this.colorBoxValue = '#008000';
        }
      }
    },
    changeCheckboxBackgroundColor(idFromArgs) {
      const listItem = this.$refs.listViewObj.$el.querySelector(`[data-uid="${idFromArgs}"]`);
      if (listItem) {
          const checkboxFrame = listItem.querySelector(".e-checkbox-wrapper .e-frame.e-check, .e-css.e-checkbox-wrapper .e-frame.e-check");
          const selectedItem = this.calendars.find((item) => item.id === idFromArgs);
          if (checkboxFrame && selectedItem?.color) {
            checkboxFrame.style.backgroundColor = selectedItem.color;
            checkboxFrame.style.borderColor = selectedItem.color;
          }
        }
    },
    applyBackgroundColors() {
      this.calendars.forEach((calendar) => {
        const listItem = this.$refs.listViewObj.$el.querySelector(`[data-uid="${calendar.id}"]`);
        if (listItem) {
          const checkboxFrame = listItem.querySelector(
            `.e-checkbox-wrapper .e-frame.e-check, 
            .e-css.e-checkbox-wrapper .e-frame.e-check, 
            .e-checkbox-wrapper .e-frame, 
            .e-css.e-checkbox-wrapper .e-frame`
          );
          if (checkboxFrame) {
            checkboxFrame.style.backgroundColor = calendar.color;
            checkboxFrame.style.borderColor = calendar.color;
          }
        }
      });
    },
    updateTextValue() {
      if (this.isAdd) {
        this.enteredTextValue = this.enteredTextValue
          ? this.enteredTextValue
          : 'New Calendar';
        this.selectedColorValue = this.selectedColorValue
          ? this.selectedColorValue
          : '#008000';
        const newId = this.calendars.length + 1;
        const newItem = {
          name: this.enteredTextValue,
          id: newId,
          color: this.selectedColorValue,
          isSelected: true,
        };
        this.calendars.push(newItem);
        this.selectedCalendars = this.getSelectedCalendars();
        this.calendarsList = JSON.parse(JSON.stringify(this.calendars));

        this.$refs.dialogObj.hide();
        this.isAdd = false;
      }
    },
    listViewActionComplete() {
      let iconAdd = this.$refs.listViewObj.$el.querySelector('.e-plus');
      this.applyBackgroundColors();
      if (iconAdd) {
        iconAdd.onclick = () => {
          this.isAdd = true;
          if (this.$refs.dialogObj) {
            this.$refs.dialogObj.show();
            const addButton = document.getElementById('addButton');
            if (addButton) {
              addButton.onclick = () => {
                this.updateTextValue();
              };
            }
          }
        };
      }
    },
    scheduleEventRendered(args) {
      const categoryColor =
        this.selectedCalendars.items[
          this.selectedCalendars.ids.indexOf(args.data.CalendarId)
        ].color;
      if (!args.element || !categoryColor) {
        return;
      }
      if (this.$refs.scheduleObj.currentView === 'Agenda') {
        args.element.firstChild.style.borderLeftColor = categoryColor;
      } else {
        args.element.style.backgroundColor = categoryColor;
      }
    },
    scheduleActionComplete(args) {
        if (args.requestType === "dateNavigate" || args.requestType === "viewNavigate") {
            this.updateDateRange();
            if (
                args.requestType === "dateNavigate" &&
                resetTime(this.$refs.calendarObj?.value) !== resetTime(this.$refs.scheduleObj.selectedDate)
            ) {
                this.sideBarCalendarDate = this.selectedDate;
            }
        } else if (
            args.requestType === "eventCreated" ||
            args.requestType === "eventChanged" ||
            args.requestType === "eventRemoved") 
          {
            args.addedRecords.forEach((event) => {
                event.IsPlanned = true;
                this.appointmentData.push(event);
            });

            args.changedRecords.forEach((event) => {
                const index = this.appointmentData.findIndex((item) => item.Id === event.Id);
                if (index !== -1) {
                    this.appointmentData[index] = event;
                }
            });

            args.deletedRecords.forEach((event) => {
                const index = this.appointmentData.findIndex((item) => item.Id === event.Id);
                if (index !== -1) {
                    this.appointmentData.splice(index, 1);
                }
            });

            const events = [...args.addedRecords, ...args.changedRecords];
            events.forEach((event) => {
                let calendar = this.selectedCalendars.items.find((item) => item.id === event.CalendarId);
                if (!calendar) {
                    calendar = this.calendars.find((item) => item.id === event.CalendarId);
                    if (calendar) {
                        calendar.isSelected = true;
                        this.selectedCalendars = this.getSelectedCalendars();
                        this.$refs.listViewObj.dataSource = [...this.calendars];
                        const matchingEvents = this.getFilteredData();
                        this.eventSettings = { dataSource: matchingEvents.planned };
                        this.$refs.scheduleObj.setProperties({
                            eventSettings: this.eventSettings,
                        });
                        this.gridData = matchingEvents.unPlanned;
                    }
                }
            });
          }
    },
    unplannedSidebarCreated() {
      const open =
        this.$refs.rightSidebarObj.$el.parentElement?.querySelector(
          '#plannedOpen'
        );
      const unplannedElement =
        this.$refs.rightSidebarObj.$el.parentElement?.querySelector(
          '.unplanned-container'
        );
      this.$refs.rightSidebarObj.toggle();
      if (
        open.classList.contains('e-icons') &&
        open.classList.contains('e-chevron-left-double')
      ) {
        open.onclick = () => {
          this.$refs.rightSidebarObj.show();
          const filteredData = this.getFilteredData();
          if (unplannedElement) {
            unplannedElement.style.display = 'none';
          }
        };
      }
    },
  },
  provide: {
    schedule: [
      Week,
      Day,
      Month,
      Agenda,
      TimelineMonth,
      Year,
      DragAndDrop,
      Resize,
    ],
  },
};
</script>
