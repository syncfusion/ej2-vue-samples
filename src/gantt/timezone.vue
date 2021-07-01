<template>
    <div class="col-lg-12 control-section">
      <div id="action-description">
         <p>This demo explains how the Gantt Chart schedules project in UTC timezone.</p>
      </div>
      <div class="content-wrapper">
        <ejs-gantt
          ref="gantt"
          id="Timezone"
          :dataSource="data"
          :taskFields="taskFields"
          :height="height"
          :includeWeekend="true"
          :timelineSettings="timelineSettings"
          :timezone="timezone"
          :durationUnit="durationUnit"
          :dateFormat="dateFormat"
          :dayWorkingTime="dayWorkingTime"
        >
        </ejs-gantt>
      </div>
    <div id="description">
      <p>
        For example, in this demo, the timezone of Gantt is set to UTC, and the task named <code>Plan timeline</code> has start time as <code>08:00 am</code> but converted based on UTC and rendered at <code>2.30 am</code>.
      </p>
      <p>
        When a user sets any timezone, dates are converted based on the value set to <code>timezone</code> property of Gantt control.
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function () {
    return {
      data: [
        { taskID: 1, taskName: 'Project Schedule', startDate: new Date('02/04/2019 08:00'), endDate: new Date('03/10/2019')},
        { taskID: 2, taskName: 'Planning', startDate: new Date('02/04/2019 08:00'), endDate: new Date('02/10/2019'), parentID: 1},
        { taskID: 3, taskName: 'Plan timeline', startDate: new Date('02/04/2019 08:00'), endDate: new Date('02/10/2019'), duration: 6, progress: '60', parentID: 2 },
        { taskID: 4, taskName: 'Plan budget', startDate: new Date('02/04/2019 08:00'), endDate: new Date('02/10/2019'), duration: 6, progress: '90', parentID: 2 },
        { taskID: 5, taskName: 'Allocate resources', startDate: new Date('02/04/2019 08:00'), endDate: new Date('02/10/2019'), duration: 6, progress: '75', parentID: 2 },
        { taskID: 6, taskName: 'Planning complete', startDate: new Date('02/06/2019 08:00'), endDate: new Date('02/10/2019'), duration: 0,  predecessor: '3FS,4FS,5FS', parentID: 2 },
        { taskID: 7, taskName: 'Design', startDate: new Date('02/13/2019 08:00'), endDate: new Date('02/17/2019 08:00'), parentID: 1, },
        { taskID: 8, taskName: 'Software Specification', startDate: new Date('02/13/2019 08:00'), endDate: new Date('02/15/2019'), duration: 3, progress: '60', predecessor: '6FS', parentID: 7, },
        { taskID: 9, taskName: 'Develop prototype', startDate: new Date('02/13/2019 08:00'), endDate: new Date('02/15/2019'), duration: 3, progress: '100', predecessor: '6FS', parentID: 7, },
        { taskID: 10, taskName: 'Get approval from customer', startDate: new Date('02/16/2019 08:00'), endDate: new Date('02/17/2019 08:00'), duration: 2, progress: '100', predecessor: '9FS', parentID: 7 },
        { taskID: 11, taskName: 'Design complete', startDate: new Date('02/17/2019 08:00'), endDate: new Date('02/17/2019 08:00'), duration: 0, predecessor: '10FS', parentID: 7 }
      ],
      height: "450px",
      dateFormat: "hh:mm a",
      taskFields: {
        id: "taskID",
        name: "taskName",
        startDate: "startDate",
        endDate: "endDate",
        duration: "duration",
        progress: "progress",
        dependency: "predecessor",
        parentID: "parentID",
      },
      timelineSettings: {
        timelineUnitSize: 65,
        topTier: {
          unit: "Day",
          format: "MMM dd, yyyy",
        },
        bottomTier: {
          unit: "Hour",
          format: "hh:mm a",
        },
      },
      durationUnit: "Hour",
      timezone: "UTC",
      dayWorkingTime: [{ from: 0, to: 24 }],
      timezones: [
        { id: "America/New_York", timezone: "(UTC-05:00) Eastern Time" },
        { id: "UTC", timezone: "UTC" },
        { id: "Europe/Moscow", timezone: "(UTC+03:00) Moscow+00 - Moscow" },
        { id: "Asia/Kolkata", timezone: "(UTC+05:30) India Standard Time" },
        { id: "Australia/Perth", timezone: "(UTC+08:00) Western Time - Perth" },
      ],
      fields: { text: "timezone", value: "id" },
    };
  },
  provide: {
    gantt: [Selection],
  },
});
</script>