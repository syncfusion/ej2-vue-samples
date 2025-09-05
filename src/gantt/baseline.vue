<template>
  <div id="action-description">
    <p>This sample visualizes the complete car service schedule using the Vue Gantt Chart. Baselines are
      enabled to highlight deviations between planned and actual service dates, helping track schedule accuracy across
      all tasks and milestones.</p>
  </div>
  <div class="control-section">
    <div class="content-wrapper">
      <ejs-gantt ref='gantt' id="GanttBaseline" :dataSource="data" :renderBaseline="true" :taskFields="taskSettings"
        :columns="columns" :timelineSettings="timelineSettings" :labelSettings="labelSettings"
        :splitterSettings="splitterSettings" :tooltipSettings="tooltipSettings" :gridLines="gridLines" :height="'650px'"
        :rowHeight="46" :treeColumnIndex="1" :taskbarHeight="25" :allowSelection="true" :includeWeekend="true"
        :projectStartDate="projectStartDate" :projectEndDate="projectEndDate"
        :parentTaskbarTemplate="parentTaskbarTemplate" :allowResizing="true"
        :baselineColor="themeColors[getCurrentTheme()].baseline" :enableUndoRedo="true"
        :undoRedoActions="['Add', 'Edit', 'Delete']" :queryCellInfo="queryCellInfo"
        :queryTaskbarInfo="queryTaskbarInfo">
        <template v-slot:taskbarTooltipTemplate="{ data }">
          <table class="e-gantt-tooltiptable">
            <tbody>
              <tr class="e-gantt-tooltip-rowcell">
                <td>{{ data.TaskName }}</td>
              </tr>
              <tr>
                <td class="e-gantt-tooltip-label"> Start Time </td>
                <td>:</td>
                <td class="e-gantt-tooltip-value">{{ format(data.StartDate) }}</td>
              </tr>
              <tr>
                <td class="e-gantt-tooltip-label"> End Time</td>
                <td>:</td>
                <td class="e-gantt-tooltip-value">{{ format(data.EndDate) }}</td>
              </tr>
              <tr>
                <td class="e-gantt-tooltip-label"> Planned start time </td>
                <td>:</td>
                <td class="e-gantt-tooltip-value">{{ format(data.BaselineStartDate) }}</td>
              </tr>
              <tr>
                <td class="e-gantt-tooltip-label"> Planned end time </td>
                <td>:</td>
                <td class="e-gantt-tooltip-value">{{ format(data.BaselineEndDate) }}</td>
              </tr>
            </tbody>
          </table>
        </template>
        <template v-slot:parentTaskbarTemplate="{ data }">
          <div class="e-gantt-parent-taskbar e-row-expand e-custom-parent"
            style="height: 10px; margin-top: 17px; background: #f3f4f6; border: 1px solid #9ca3af; border-radius: 5px; text-overflow: ellipsis;">
            <div class="e-gantt-child-progressbar e-custom-progress"
              :style="{ width: data.ganttProperties.progress + '%' }"
              style="height: 100%; background: #9ca3af; border-radius: 5px;"></div>
            <span class="e-label"
              style="position: absolute; top: 0px; right: 6px; font-size: 12px; margin: 0px; text-overflow: ellipsis; white-space: nowrap;">
              {{ data.taskData.TaskName }} | {{ format(data.ganttProperties.startDate) }} -
              {{ format(data.ganttProperties.endDate) }} | {{ data.ganttProperties.duration }} days
            </span>
          </div>
        </template>
      </ejs-gantt>
    </div>
  </div>
  <div id="description">
    <p> In this demo sample, the baseline feature in the Vue Gantt Chart, which helps visualize the variance
      between planned and actual task
      schedules. Baselines provide a clear reference for tracking project deviations and are rendered for all task types
      including child tasks,
      parent tasks, and milestones.</p>
    <p>To enable baselines in the Vue Gantt Chart, set the <a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#renderbaseline">renderBaseline</a> property
      to <code>true</code> and define the planned schedule using the
      <code>baselineStartDate</code> field. You can either specify the <code>baselineEndDate</code> directly or use the
      <code>baselineDuration</code> property to calculate it
      automatically. Setting <code>baselineDuration</code> to zero is particularly useful for milestones, as it clearly
      marks a planned point in time.
      The appearance of baselines can be customized using the <code><a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#baselinecolor">baselineColor</a></code>
      property to visually distinguish planned timelines from actual
      task progress.timelines from actual progress.
    </p>
    <br>
    <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/gantt/baseline">documentation section</a>.</p>
  </div>
</template>

<script>
import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { baselineData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function () {
    return {
      data: baselineData,
      taskSettings: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        baselineStartDate: 'BaselineStartDate',
        baselineEndDate: 'BaselineEndDate',
        baselineDuration: 'baselineDur',
        parentID: 'ParentId',
        duration: 'Duration',
        dependency: 'Predecessor',
        progress: 'Progress'
      },
      parentTaskbarTemplate: 'parentTaskbarTemplate',
      columns: [
        { field: "TaskId", visible: false, headerText: "Task ID" },
        { field: "TaskName", headerText: "Task Name", allowReordering: false, width: 200 },
        { field: 'StartDate', width: 140 },
        { field: 'Duration', width: 125 },
        { field: "BaselineStartDate", headerText: "Baseline Start Date", width: 195 },
        { field: "baselineDur", type: "string", editType: "stringedit", width: 195 },
        { field: "variance", headerText: "Variance", allowEditing: false, width: 140 }
      ],
      gridLines: "Horizontal",
      timelineSettings: {
        topTier: {
          unit: 'Month',
          format: 'MMMM yyyy'
        },
        bottomTier: {
          unit: 'Day'
        }
      },
      labelSettings: {
        rightLabel: 'TaskName'
      },
      splitterSettings: {
        columnIndex: 4
      },
      tooltipSettings: {
        taskbar: "taskbarTooltipTemplate"
      },
      projectStartDate: new Date('07/02/2025'),
      projectEndDate: new Date('09/15/2025'),
      themeColors: {
        'material3': {
          onTime: '#F0FDF4',
          delayed: '#FFF7ED',
          baseline: '#DAA520',
          onTimeProgress: '#15803D',
          delayedProgress: '#C2410C'
        },
        'material3-dark': {
          onTime: '#122A2C',
          delayed: '#282125',
          baseline: '#9CA3AF',
          onTimeProgress: '#22C55E',
          delayedProgress: '#FB923C'
        },
        'tailwind3': {
          onTime: '#F0FDF4',
          delayed: '#FFF7ED',
          baseline: '#DAA520',
          onTimeProgress: '#15803D',
          delayedProgress: '#C2410C'
        },
        'tailwind3-dark': {
          onTime: '#122A2C',
          delayed: '#282125',
          baseline: '#9CA3AF',
          onTimeProgress: '#22C55E',
          delayedProgress: '#FB923C'
        },
        'bootstrap5.3': {
          onTime: '#F0FDF4',
          delayed: '#FFF7ED',
          baseline: '#DAA520',
          onTimeProgress: '#15803D',
          delayedProgress: '#C2410C'
        },
        'bootstrap5.3-dark': {
          onTime: '#122A2C',
          delayed: '#282125',
          baseline: '#9CA3AF',
          onTimeProgress: '#22C55E',
          delayedProgress: '#FB923C'
        },
        'fluent2': {
          onTime: '#F0FDF4',
          delayed: '#FFF7ED',
          baseline: '#DAA520',
          onTimeProgress: '#15803D',
          delayedProgress: '#C2410C'
        },
        'fluent2-dark': {
          onTime: '#122A2C',
          delayed: '#282125',
          baseline: '#9CA3AF',
          onTimeProgress: '#22C55E',
          delayedProgress: '#FB923C'
        },
        'fluent2-highcontrast': {
          onTime: '#122A2C',
          delayed: '#282125',
          baseline: '#9CA3AF',
          onTimeProgress: '#22C55E',
          delayedProgress: '#FB923C'
        }
      }
    };
  },
  provide: {
    gantt: [Selection]
  },
  methods: {
    getCurrentTheme() {
      return Object.keys(this.themeColors).find(function(theme) {
                return document.body.classList.contains(theme);
            }) || 'material3';
    },
    format(value) {
      return this.$refs.gantt.getFormatedDate(value);
    },
    queryTaskbarInfo(args) {
    
      const currentTheme = this.getCurrentTheme();
      const colors = this.themeColors[currentTheme];
      const taskbarColor = !args.data.ganttProperties.baselineStartDate || !args.data.ganttProperties.baselineEndDate || args.data.ganttProperties.startDate <= args.data.ganttProperties.baselineStartDate ? colors.onTime : colors.delayed;
      const progressColor = !args.data.ganttProperties.baselineStartDate || !args.data.ganttProperties.baselineEndDate || args.data.ganttProperties.startDate <= args.data.ganttProperties.baselineStartDate ? colors.onTimeProgress : colors.delayedProgress;
      if (args.taskbarType !== 'ParentTask') {
        if (currentTheme === 'material3' || currentTheme === 'material3-dark') {
          if (args.taskbarType !== 'Milestone') {
            args.taskbarElement.querySelectorAll('.e-gantt-child-taskbar-inner-div')[0].style.setProperty('background', taskbarColor, 'important');
          } else {
            args.taskbarElement.querySelectorAll('.e-gantt-milestone')[0].style.setProperty('border', progressColor, 'important');
            args.rowElement.querySelectorAll('.e-baseline-gantt-milestone-container')[0].style.setProperty('border', colors.baseline, 'important');
          }
        }
        args.taskbarBgColor = taskbarColor;
        args.milestoneColor = progressColor;
        args.taskbarBorderColor = progressColor;
        args.progressBarBgColor = progressColor;
      }
       args.baselineColor = colors.baseline;
    },
    queryCellInfo(args) {
      if (args.column.field === 'variance') {
        const start = args.data.ganttProperties.startDate;
        const baselineStart = args.data.ganttProperties.baselineStartDate;
        const baselineEnd = args.data.ganttProperties.baselineEndDate;
        if (!baselineStart || !baselineEnd || !start || start <= baselineStart) {
          args.data.variance = 0;
          args.data.taskData.variance = 0;
          args.cell.innerText = '0 days';
          return;
        }
        const diffInDays = (start - baselineStart) / (1000 * 60 * 60 * 24);
        const roundedDiff = Math.round(diffInDays);
        args.data.variance = roundedDiff;
        args.data.taskData.variance = roundedDiff;
        args.cell.innerText = roundedDiff + ' days';
      }
    },
    dataBound() {
      this.$refs.gantt.autoFitColumns(['TaskId', 'TaskName', 'StartDate', 'Duration', 'BaselineStartDate', 'baselineDur', 'variance']);
    }
  }
};
</script>

<style scoped>
.e-baseline-bar {
  height: 6px !important;
  margin-top: -12px !important;
}

.fluent2-highcontrast .e-custom-parent,
.e-dark-mode .e-custom-parent {
  background: #232937 !important;
  border: 1px solid #2F3542 !important;
}

.fluent2-highcontrast .e-custom-progress,
.e-dark-mode .e-custom-progress {
  background: #2F3542 !important;
}
</style>