<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt ref='gantt'
          id="GanttContainer"
          :dataSource="dataSource"
          :renderBaseline="true"
          :taskFields="taskFields"
          :columns="columns"
          :allowSelection="true"
          :includeWeekend="true"
          :timelineSettings="timelineSettings"
          :tooltipSettings="tooltipSettings"
          :durationUnit="Minute"
          :dateFormat="dateFormat"
          :height="height"
          :dayWorkingTime="dayWorkingTime"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
        ></ejs-gantt>
        <div style="float: right; margin: 10px;">Source:
            <a href="https://en.wikipedia.org/wiki/Service_(motor_vehicle)"
                target='_blank'>https://en.wikipedia.org/</a>
        </div>
      </div>
    </div>

    <div id="action-description">
    <p>This sample visualizes the complete service schedule for a car. Baselines are enabled in this sample to view the
        deviation between the planned dates and actual dates.</p>
</div>

<div id="description">
    <p>
        The baseline feature enables the user to view the deviation between the planned dates and the actual dates of
        the tasks in a project. Baselines can be enabled in Gantt chart by enabling the <code>renderBaseline</code>
        property along
        with mapping the data source values for <code>baselineStartDate</code> and <code>baselineEndDate</code>
        properties.
        The baseline will appear for all type of tasks in the project such as child tasks, parent tasks and also for
        milestones. You can change the color for the baselines using <code>baselineColor</code> property.
    </p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection support, inject the <code>Selection</code> module.
    </p>

</div>
  </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Gantt, Selection } from "@syncfusion/ej2-vue-gantt";
import { baselineData } from "./data-source";
import BaselineTemplate from "./baseline-temp.vue";
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
    return {
            dataSource: baselineData,
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                baselineStartDate: 'BaselineStartDate',
                baselineEndDate: 'BaselineEndDate'
            },
            columns: [
                { field: 'TaskName', headerText: 'Service Name', width: '250', clipMode: 'EllipsisWithTooltip' },
                { field: 'BaselineStartDate', headerText: 'Planned start time' },
                { field: 'BaselineEndDate', headerText: 'Planned end time' },
                { field: 'StartDate', headerText: 'Start time' },
                { field: 'EndDate', headerText: 'End time' },
            ],
            timelineSettings: {
                timelineUnitSize: 65,
                topTier: {
                    unit: 'None',
                },
                bottomTier: {
                    unit: 'Minutes',
                    count: 15,
                    format: 'hh:mm a'
                },
            },
            dateFormat: 'hh:mm a',
            height: '450px',
            dayWorkingTime: [{ from: 0, to: 24 }],
            projectStartDate: new Date('03/05/2018 09:30:00 AM'),
            projectEndDate: new Date('03/05/2018 07:00:00 PM'),
            tooltipSettings: {
              taskbar: function () {
                return { template : BaselineTemplate}
              }        
            }
    };
  },
  provide: {
      gantt: [Selection]
  }
});
</script>