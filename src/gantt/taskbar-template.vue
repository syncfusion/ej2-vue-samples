<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt ref="gantt" id="taskbarTemplate" :dataSource="dataSource" :renderBaseline="true"
          :taskFields="taskFields" :columns="columns" :allowSelection="true" :splitterSettings="splitterSettings"
          :treeColumnIndex="treeColumnIndex" :rowHeight="rowHeight" :taskbarHeight="taskbarHeight"
          :dayWorkingTime="dayWorkingTime" :durationUnit="durationUnit" :timelineSettings="timelineSettings"
          :eventMarkers="eventMarkers" :height="height" :taskbarTemplate="'taskbarTemplate'"
          :milestoneTemplate="'milestoneTemplate'" :tooltipSettings="tooltipSettings" :labelSettings="labelSettings"
          :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
          <template v-slot:taskbarTemplate="{data}">
            <div v-if="data.TaskName == 'Oscar moments'" style="height:100%">
              <div class="e-gantt-child-taskbar e-custom-moments" style="height:100%;border-radius:5px;">
                <template v-if="data.ganttProperties.duration < 4">
                  <img class="moments" src="./images/moments.svg" style="height: 32px; width: 32px;" alt="Oscar moments svg">
                </template>
                <template v-else>
                  <img class="moments" src="./images/moments.svg" style="height: 32px; width: 32px;" alt="Oscar moments svg">
                  <span class="e-task-label"
                    style="position:absolute;top:15px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;">{{data.Performance}}</span>
                </template>
              </div>
            </div>
            <div v-else-if="data.TaskName == 'Oscar performance'" style="height:100%">
              <div class="e-gantt-child-taskbar e-custom-performance" style="height:100%;border-radius:5px;">
                <template v-if="data.ganttProperties.duration <= 5">
                  <img class="face-mask" src="./images/face-mask.svg" style="height: 32px; width: 32px;" alt="Oscar performance svg">
                </template>
                <template v-else>
                  <img class="face-mask" src="./images/face-mask.svg" style="height: 32px; width: 32px;" alt="Oscar performance svg">
                  <span class="e-task-label"
                    style="position:absolute;top:5px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;">{{data.Performance}}</span>
                </template>
              </div>
            </div>
            <div v-else style="height:100%">
              <div class="e-gantt-parent-taskbar e-custom-parent"
                style="height:100%;border-radius:5px;text-overflow:ellipsis;">
                <template v-if="data.ganttProperties.duration < 4">
                  <img class="oscar" src="./images/oscar.svg" style="height: 32px; width: 32px;" alt="Oscar svg">
                </template>
                <template v-else>
                  <template v-if="data.taskData.Winner && data.taskData.Movie">
                    <img class="oscar" src="./images/oscar.svg" style="height: 32px; width: 32px;" alt="Oscar svg">
                    <span class="e-task-label"
                      style="position:absolute; top:13px;font-size:14px;">{{data.taskData.Winner}}</span>
                    <span class="e-task-label"
                      style="position:absolute;top:33px;font-size:10px;text-overflow:ellipsis;">{{data.taskData.Movie}}</span>
                  </template>
                  <template v-else-if="data.taskData.Movie">
                    <img class="oscar" src="./images/oscar.svg" style="height: 32px; width: 32px;" alt="Oscar svg">
                    <span class="e-task-label"
                      style="position:absolute; top:13px;font-size:12px;text-overflow:ellipsis;">{{data.taskData.Movie}}</span>
                  </template>
                  <template v-else>
                    <span class="e-task-label"></span>
                  </template>
                </template>
              </div>
            </div>
          </template>
          <template v-slot:milestoneTemplate="{data}">
            <div style="margin-top:-7px;">
              <div style="position:absolute; left: 3px;top: 4px">
                <img class="moments" 
                    height="24" 
                    width="48" 
                    style="z-index:1;left:1px;top:18px" 
                    role="presentation" 
                    src="./images/moments.svg" 
                    alt="Moments svg"/>
                <div class="e-gantt-milestone" 
                    style="width:41px; height:41px; transform: rotate(45deg); background-color: #7ab748 !important; border: 0;left:0px;top:12px">
                </div>
              </div>
            </div>
          </template>
          <template v-slot:tooltipTemplate="{data}">
            <div>
              <template v-if="data.Winner && data.Movie">{{data.Winner}} wins oscar award for {{data.Movie}}</template>
              <template v-else-if="data.Movie">Oscar award for {{data.Movie}}</template>
              <template v-else>{{data.Performance}}</template>
            </div>
          </template>
        </ejs-gantt>
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
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#taskbartemplate">taskbarTemplate</a>
        property accepts either string or HTML element`s ID value, which will be used as the template for the taskbars.
        The summary tasks and the milestone items can also customized using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#parenttaskbartemplate">parentTaskbarTemplate</a> and
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#milestonetemplate">milestoneTemplate</a> properties.
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
import { GanttComponent, Gantt, DayMarkers, Selection } from "@syncfusion/ej2-vue-gantt";
import { customizedData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
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
          day: new Date("03/05/2024 07:09:00 PM"),
          label: "Performance"
        },
        {
          day: new Date("03/05/2024 07:46:00 PM"),
          label: "Moments"
        },
        {
          day: new Date("03/05/2024 07:59:00 PM"),
          label: "Performance"
        },
        {
          day: new Date("03/05/2024 08:08:00 PM"),
          label: "Moments"
        },
        {
          day: new Date("03/05/2024 08:24:00 PM"),
          label: "Moments"
        },
        {
          day: new Date("03/05/2024 08:31:00 PM"),
          label: "Performance"
        },
        {
          day: new Date("03/05/2024 08:47:00 PM"),
          label: "Moments"
        }
      ],
      height: "450px",
      labelSettings: {
        leftLabel: "TaskName"
      },
      projectStartDate: new Date("03/05/2024 06:00 PM"),
      projectEndDate: new Date("03/05/2024 09:50 PM"),
      tooltipSettings: {
        taskbar: 'tooltipTemplate'
      }
    };
  },
  provide: {
    gantt: [DayMarkers, Selection]
  }
}
</script>

<style scoped>
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

 .moments,
 .face-mask,
 .oscar {
  position: relative;
  top: 14px;
  left: 5px;
  padding-right: 4px;
}

 .e-milestone-top {
  border-bottom-color: #7ab748 !important;
  border-bottom: 1px solid #3f51b5;
}

 .e-milestone-bottom {
  border-top-color: #7ab748 !important;
  border-top: 1px solid #3f51b5;
}
</style>
