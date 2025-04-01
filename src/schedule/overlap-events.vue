<template>
  <div class="schedule-vue-sample">
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-schedule
          width="100%"
          height="550px"
          :selectedDate="selectedDate"
          :eventSettings="eventSettings"
          :allowOverlap="false"
        ></ejs-schedule>
      </div>
    </div>
    <div id="action-description">
      <p>
        This demo explains how to restrict overlapping appointments within the
        same time range.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, the Scheduler <code>allowOverlap</code> API is used to
        restrict overlapping events, preventing one events from being scheduled
        within the time range of another event. By default, the
        <code>allowOverlap</code> value is set to <code>true</code>. When
        <code>allowOverlap</code> is set to <code>false</code>, unable to add or
        edit events dynamically within the time range of other events, and
        cannot drag or resize events to overlap with other event time ranges.
      </p>
    </div>
  </div>
</template>
<script>
import { scheduleOverlapData } from "./datasource";
import { extend } from "@syncfusion/ej2-base";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";

export default {
  components: {
    "ejs-schedule": ScheduleComponent,
  },
  data: function () {
    return {
      eventSettings: {
        dataSource: extend([], scheduleOverlapData, null, true),
      },
      selectedDate: new Date(2025, 1, 12),
    };
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop],
  },
};
</script>