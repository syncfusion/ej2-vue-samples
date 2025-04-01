<template>
  <div class="schedule-vue-sample">
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <ejs-schedule
          id="Schedule" ref="ScheduleObj" height="100%" width="100%" :cssClass="'schedule-holiday-calendar'" :selectedDate="selectedDate" :eventSettings="eventSettings"
          :rowAutoHeight="rowAutoHeight" :cellClick="clickOnHoliday" :cellDoubleClick="clickOnHoliday" :resizeStop="onEventDragOrResize"
          :dragStop="onEventDragOrResize" :actionBegin="onActionBegin" :eventRendered="onEventRender">
          <e-views>
            <e-view option="Month"></e-view>
          </e-views>
        </ejs-schedule>
      </div>
      <ejs-toast
        ref="toastRef" :title="'Information!'" :cssClass="'e-toast-info'" :content="toastContent"
        :icon="'e-info toast-icons'" :target="'.e-schedule'" :position="position">
      </ejs-toast>
    </div>
    <div class="col-lg-3 property-section">
      <table id="property" title="" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td style="width: 100%">
              <div>
                <ejs-checkbox :label="'Holiday events'" :checked="holidayListCollection" @change="updateHolidayListCollection"
                ></ejs-checkbox>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 100%">
              <div>
                <ejs-checkbox :label="'Scheduling event on holiday'" :checked="holidayEventCollection" @change="updateHolidayEventCollection"
                ></ejs-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>
        This demo illustrates how to add and remove holiday events and perform CRUD operations on holiday dates in the
        Scheduler.
      </p>
    </div>

    <div id="description">
      <p>
          This sample demonstrates how to perform CRUD operations on holiday dates in a calendar. If a user wants to
          schedule an appointment on a holiday, they should check the <code>Scheduling event on holiday</code> checkbox.
          This will enable them to add an appointment on a holiday date.If a holiday list is displayed in the calendar, the
          <code>Holiday events</code> checkbox will be checked. The holiday list is highlighted in a different color.
      </p>
      <ul>
          <li>
              When an action is performed to drag and resize an event, if the <code>Scheduling event on holiday</code>
              checkbox is checked, the appointment can be scheduled on holiday dates. If it is unchecked, the appointment
              cannot have CRUD actions performed on it, and a warning message will be displayed.
          </li>
          <li>
              If a recurring event is added on a holiday date and the <code>Scheduling event on holiday</code> checkbox is
              checked, it allows the event to occur on that dates. If the checkbox is unchecked, it prevents the event from
              occurring, based on the dates in the holiday collection.
          </li>
      </ul>
    </div>
  </div>
</template>

<style>
 .schedule-holiday-calendar.e-schedule .e-appointment.e-read-only .e-appointment-details .e-subject.e-text-center {
    text-align: left;
  }
</style>

<script>
import { scheduleEvent, holidayList } from "./datasource";
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { ToastComponent } from "@syncfusion/ej2-vue-notifications";

export default {
  components: {
    "ejs-schedule": ScheduleComponent,
    "e-view": ViewDirective,
    "e-views": ViewsDirective,
    "ejs-checkbox": CheckBoxComponent,
    "ejs-toast": ToastComponent,
  },
  data() {
    return {
      rowAutoHeight: true,
      eventSettings: { dataSource: scheduleEvent.concat(holidayList) },
      selectedDate: new Date(2024, 7, 5),
      position: { X: "Right", Y: "Top" },
      holidayEventCollection: true,
      holidayListCollection: true,
      toastContent: "",
    };
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Resize, DragAndDrop],
  },
  methods: {
    updateHolidayEventCollection(args) {
      this.holidayEventCollection = args.checked;
      this.$refs.ScheduleObj.refreshEvents();
    },
    updateHolidayListCollection(args) {
      this.holidayListCollection = args.checked;
      this.$refs.ScheduleObj.refreshEvents();
    },
    isEventWithinHolidayRange(eventStartDate, eventEndDate) {
      return holidayList.some((holiday) => {
        const holidayStartDate = new Date(holiday.StartTime);
        const holidayEndDate = new Date(holiday.EndTime);
        return (
          (eventStartDate >= holidayStartDate &&
            eventStartDate <= holidayEndDate) ||
          (eventEndDate >= holidayStartDate &&
            eventEndDate <= holidayEndDate) ||
          (eventStartDate <= holidayStartDate && eventEndDate >= holidayEndDate)
        );
      });
    },
    showToastForAction(actionName, holidayDateRange) {
      if (!holidayDateRange) return;
      const messages = {
        resizeStop: "You cannot resize an event within the holiday date range",
        dragStop: "You cannot drop an event within the holiday date range",
        eventCreate: "You cannot add an event within the holiday date range",
        eventChange: "You cannot edit an event within the holiday date range",
      };

      if (messages[actionName]) {
        this.toastContent = messages[actionName];
        this.$nextTick(() => {
          if (this.$refs.toastRef) {
            this.$refs.toastRef.dataBind();
            this.$refs.toastRef.show();
          }
        });
      }
    },
    onActionBegin(args) {
      const requestType = args.requestType;
      const isCreateOrChange = requestType === 'eventCreate' || requestType === 'eventChange';
      if (isCreateOrChange) {
        const eventData = requestType === 'eventCreate' ? args.data[0] : args.data;
        const adjustedEndTime = eventData.IsAllDay ?
          new Date(eventData.EndTime.setMinutes(eventData.EndTime.getMinutes() - 1)) :
          eventData.EndTime;
        const isHolidayDateRange = !this.holidayEventCollection &&
          !eventData.RecurrenceRule &&
          this.isEventWithinHolidayRange(eventData.StartTime, adjustedEndTime);
        args.cancel = isHolidayDateRange;
        this.showToastForAction(requestType, isHolidayDateRange);
      }
    },
    onEventRender(args) {
      const event = args.data;
      if (!this.holidayEventCollection) {
        if (!event.isHoliday && event.IsAllDay) {
          event.EndTime.setMinutes(event.EndTime.getMinutes() - 1);
        }
        args.cancel =
          !event.isHoliday &&
          this.isEventWithinHolidayRange(event.StartTime, event.EndTime);
      }
      if (event.isHoliday && !this.holidayListCollection) {
        args.cancel = true;
      }
      let categoryColor = args.data.CategoryColor;
      if (args.element && categoryColor) {
        args.element.style.backgroundColor = categoryColor;
      }
    },
    clickOnHoliday(args) {
      args.cancel =
        !this.holidayEventCollection &&
        this.isEventWithinHolidayRange(
          args.startTime,
          args.endTime.setMinutes(args.endTime.getMinutes() - 1)
        );
    },
    onEventDragOrResize(args) {
      const isHolidayDateRange =
        !this.holidayEventCollection &&
        this.isEventWithinHolidayRange(
          args.data.StartTime,
          args.data.EndTime.setMinutes(args.data.EndTime.getMinutes() - 1)
        );
      args.cancel = isHolidayDateRange;
      this.showToastForAction(args.name, isHolidayDateRange);
    },
  },
};
</script>
