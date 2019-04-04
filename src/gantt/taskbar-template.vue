<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt
          ref="gantt"
          id="taskbarTemplate"
          :dataSource="dataSource"
          :renderBaseline="true"
          :taskFields="taskFields"
          :columns="columns"
          :allowSelection="true"
          :splitterSettings="splitterSettings"
          :treeColumnIndex="treeColumnIndex"
          :rowHeight="rowHeight"
          :taskbarHeight="taskbarHeight"
          :dayWorkingTime="dayWorkingTime"
          :durationUnit="durationUnit"
          :timelineSettings="timelineSettings"
          :eventMarkers="eventMarkers"
          :height="height"
          :taskbarTemplate="taskbarTemplate"
          :milestoneTemplate="milestoneTemplate"
          :tooltipSettings="tooltipSettings"
          :labelSettings="labelSettings"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
        ></ejs-gantt>
        <div style="float: right; margin: 10px;">
          Source:
          <a
            href="https://en.wikipedia.org/wiki/90th_Academy_Awards"
            target="_blank"
          >https://en.wikipedia.org/</a>
        </div>
      </div>
    </div>
    <div id="action-description">
       <p>This sample visualizes the complete event schedule of the 90th Academy awards.
            Taskbars are customized using template support and timeline header is customized for a better view of the data.
        </p>
    </div>

    <div id="description">
      <p>
        The Gantt chart provides support for customizing taskbar UI using taskbar template feature. The
        <code>taskbarTemplate</code>
        property accepts either string or HTML element`s ID value, which will be used as the template for the taskbars.
        The summary tasks and the milestone items can also customized using the <code>parentTaskbarTemplate</code> and
        <code>milestoneTemplate</code> properties.
        In this demo, we have customized the taskbar UI to display the data from custom columns and the taskbarTemplate
        is assigned with the ID of a SCRIPT element whose content is used as the template.
       </p>
       <p>
        Gantt component features are segregated into individual feature-wise modules. To use markers, inject the
        <code>DayMarkers</code> module.
       </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Gantt, DayMarkers, Selection } from "@syncfusion/ej2-vue-gantt";
import ChildTemplate from "./taskbar-temp.vue";
import MilestoneTemplate from "./taskbar-milestone-temp.vue";
import TooltipTemplate from "./taskbar-tooltip-temp.vue";
import { customizedData } from "./data-source";
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
    return {
      dataSource: customizedData,
      dateFormat: "hh:mm a",
      taskFields: {
        id: "TaskId",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        dependency: "Predecessor"
      },
      columns: [
        { field: "TaskId", headerText: "Event Id" },
        {
          field: "TaskName",
          headerText: "Event Name",
          width: "250",
          clipMode: "EllipsisWithTooltip"
        },
        { field: "StartDate", headerText: "Start Time" },
        { field: "EndDate", headerText: "End Time" },
        { field: "Winner", headerText: "Winner" },
        { field: "Movie", headerText: "Movie" },
        { field: "Performance", headerText: "Moments / Performance Details" }
      ],
      splitterSettings: {
        columnIndex: 1
      },
      treeColumnIndex: 1,
      rowHeight: 75,
      taskbarHeight: 65,
      dayWorkingTime: [{ from: 0, to: 24 }],
      durationUnit: "Minute",
      timelineSettings: {
        timelineUnitSize: 60,
        topTier: {
          unit: "Hour",
          format: 'MMM dd, yyyy'
        },
        bottomTier: {
          unit: "Minutes",
          count: 2,
          format: "h:mm a"
        }
      },
      eventMarkers: [
        {
          day: new Date("03/05/2018 07:09:00 PM"),
          label: "Performance"
        },
        {
          day: new Date("03/05/2018 07:46:00 PM"),
          label: "Moments"
        },
        {
          day: new Date("03/05/2018 07:59:00 PM"),
          label: "Performance"
        },
        {
          day: new Date("03/05/2018 08:08:00 PM"),
          label: "Moments"
        },
        {
          day: new Date("03/05/2018 08:24:00 PM"),
          label: "Moments"
        },
        {
          day: new Date("03/05/2018 08:31:00 PM"),
          label: "Performance"
        },
        {
          day: new Date("03/05/2018 08:47:00 PM"),
          label: "Moments"
        }
      ],
      height: "450px",
      labelSettings: {
        leftLabel: "TaskName"
      },
      projectStartDate: new Date("03/05/2018 06:00 PM"),
      projectEndDate: new Date("03/05/2018 09:50 PM"),
      taskbarTemplate: function() {
        return { template: ChildTemplate };
      },
      milestoneTemplate: function() {
        return { template: MilestoneTemplate };
      },
      tooltipSettings: {
        taskbar: function() {
          return { template: TooltipTemplate };
        }
      }
    };
  },
  provide: {
    gantt: [DayMarkers, Selection]
  }
});
</script>

<style>
.e-custom-parent {
  background-color: #6d619b;
  border: 1px solid #3f51b5;
}

.e-custom-moments {
  background-color: #7ab748;
  border: 1px solid #3f51b5;
}

.e-custom-performance {
  background-color: #ad7a66;
  border: 1px solid #3f51b5;
}

.oscar {
  content: url("images/oscar.svg");
}

.face-mask {
  content: url("images/face-mask.svg");
}

.moments {
  content: url("images/moments.svg");
}

.moments,
.face-mask,
.oscar {
  position: relative;
  top: 14px;
  left: 5px;
  padding-right: 4px;
}

#taskbarTemplate .e-milestone-top {
  border-bottom-color: #7ab748 !important;
  border-bottom: 1px solid #3f51b5;
}

#taskbarTemplate .e-milestone-bottom {
  border-top-color: #7ab748 !important;
  border-top: 1px solid #3f51b5;
}
</style>
