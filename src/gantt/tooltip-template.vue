<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample explains the way of rendering tooltip template for taskbar and baseline by mapping template
        elements to the property of taskbar, timeline and baseline in <code>tooltipSettings</code>.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="tooltipData" 
        :dataSource= "data"        
        :height = "height"
        :renderBaseline= 'true'     
        :highlightWeekends= 'true'  
        :allowSelection = 'true'       
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :treeColumnIndex= "1"
        :columns= "columns"
        :splitterSettings= "splitterSettings"
        :tooltipSettings= "tooltipSettings"
        :resourceFields= "resourceFields"
        :resources= "resources"
        :timelineSettings="timelineSettings"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        <template v-slot:taskbarTooltipTemplate="{data}">
<div>
    <table>
        <template v-if="data.ganttProperties.resourceNames">
        <tr>
            <td rowspan="3" style="padding:3px"><img :src="'src/gantt/images/' + data.ganttProperties.resourceNames + '.png'" style="height: 40px;" /></td>
            <td style="padding:3px">Task done By:</td>
            <td style="padding:3px">{{data.ganttProperties.resourceNames}}</td>
        </tr>
        </template>
        <tr>
            <td style="padding:3px">Starts On:</td>
            <td style="padding:3px">{{format(data.StartDate)}}</td>
        </tr>
        <tr>
            <td style="padding:3px">Ends On:</td>
            <td style="padding:3px">{{format(data.EndDate)}}</td>
        </tr>
    </table>
    </div>
</template>
<template v-slot:baselineTooltipTemplate="{data}">
<div id="tooltip">
<table>
    <tbody>
        <tr>
            <td>Planned Start Date: </td>
            <td>{{format(data.BaselineStartDate)}}</td>
        </tr>
        <tr>
            <td>Planned End Date: </td>
            <td>{{format(data.BaselineEndDate)}}</td>
        </tr>
        <tr>
            <td>Current Start Date: </td>
            <td>{{format(data.StartDate)}}</td>
        </tr>
        <tr>
            <td>Current End Date: </td>
            <td>{{format(data.EndDate)}}</td>
        </tr>
    </tbody>
</table>
</div>
</template>
<template v-slot:timelineTooltipTemplate="{ data }">
    <div v-if="data.tier == 'topTier'" v-html="topTierTooltip(data.value, data.date, data.tier)"></div>
    <div v-if="data.tier == 'bottomTier'" v-html="bottomTierTooltip(data.date, data.tier)"></div>
</template>
        </ejs-gantt>
    </div>
<div id="description">
    <p>Tooltip can be enabled or disabled using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings/#showtooltip">tooltipSettings.showTooltip</a> property.In this demo, the
        tooltip template is rendered for <code>taskbar</code>, <code>timeline</code> and <code>baseline</code> using the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings/#taskbar">tooltipSettings.taskbar</a>
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings/#timeline">tooltipSettings.timeline</a>
         and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings/#baseline">tooltipSettings.baseline</a> properties.
    </p>
    <p>
        The baseline feature enables the user to view the deviation between the planned dates and the actual dates of
        the tasks in a project. Baselines can be enabled in Gantt Chart by enabling the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#renderbaseline">renderBaseline</a>
        property along with mapping the data source values for <code>baselineStartDate</code> and <code>baselineEndDate</code> properties.
    </p>
    
    <p>
        Gantt control features are segregated into individual feature-wise modules.To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { tooltipData, editingResources } from './data-source';
import BaselineTemplate from "./tooltip-temp-baseline.vue";
import TaskbarTemplate from "./tooltip-temp-taskbar.vue";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: tooltipData,
            height: '450px',             
            taskFields: {
               id: 'TaskID',
               name: 'TaskName',
               startDate: 'StartDate',
               endDate: 'EndDate',
               duration: 'Duration',
               progress: 'Progress',
               dependency: 'Predecessor',
               baselineStartDate: 'BaselineStartDate',
               baselineEndDate: 'BaselineEndDate',
               child: 'subtasks',
               resourceInfo: 'resources'
            },
            columns: [
                { field: 'TaskID', width: 80 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
                { field: 'BaselineStartDate' },
                { field: 'BaselineEndDate' },
                { field: 'resources' },
            ],
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
            resources: editingResources,
            labelSettings: {
                leftLabel: 'TaskName',
                rightLabel: 'resources'
            },
            splitterSettings: {
                columnIndex: 2
            },
            timelineSettings: {
                showTooltip: true,
                topTier: {
                    unit:'Week',
                },
                bottomTier: {
                    unit: 'Day',
                    count: 1
                }
            },
            tooltipSettings: {
                showTooltip: true,
                taskbar: "taskbarTooltipTemplate",
                baseline: "baselineTooltipTemplate",
                timeline:"timelineTooltipTemplate"
            },
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('05/04/2024'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  },
  methods: {
      format: function(value) {
                return this.$refs.gantt.getFormatedDate(value, 'd/M/y');
            },
        topTierTooltip: function(value, date, tier) {
            var endDate;
            var startDate = new Date(date);
                endDate = new Date(startDate.getTime());
                endDate.setDate(startDate.getDate() + 6);
            var data = this.getTooltipData(startDate, endDate, tier);
            return this.generateTooltipMarkup(value, data);
        },
        bottomTierTooltip: function(date, tier) {
            var startDate = new Date(date);
            var endDate = new Date(startDate.getTime());
            var data = this.getTooltipData(startDate, endDate, tier);
            return this.generateTooltipMarkup(date, data);
        },
        getTooltipData: function(startDate, endDate, tier) {
            var ganttElement = document.getElementsByClassName('e-gantt')[0].ej2_instances[0]
            var activeTasks;
            if (tier === 'topTier') {
                activeTasks = ganttElement.currentViewData.filter(function(task) {
                    var taskStart = new Date(task.StartDate);
                    var taskEnd = new Date(task.EndDate);
                    taskStart.setHours(0, 0, 0, 0);
                    taskEnd.setHours(0, 0, 0, 0);
                    return taskStart >= startDate && taskEnd <= endDate;
                });
            } else {
                activeTasks = ganttElement.currentViewData.filter(function(task) {
                    var taskStart = new Date(task.StartDate);
                    var taskEnd = new Date(task.EndDate);
                    taskStart.setHours(0, 0, 0, 0);
                    taskEnd.setHours(0, 0, 0, 0);
                    return taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime();
                });
            }
            var milestones = activeTasks.filter(function(task) {
                return task.Duration === 0;
            });
            var totalProgress = activeTasks.reduce(function(acc, task) {
                return acc + (task.Progress ? task.Progress : 0);
            }, 0);
            var overallProgress = (activeTasks.length > 0) ? (totalProgress / activeTasks.length).toFixed(2) : 0;
            return { activeTasks: activeTasks.length, milestones: milestones.length, overallProgress: overallProgress };
        },
        generateTooltipMarkup: function(label, tooltipData) {
            var themeIsDark = document.body.classList.contains('tailwind3-dark') ||
            document.body.classList.contains('fluent2-dark') ||
            document.body.classList.contains('material3-dark') ||
            document.body.classList.contains('bootstrap5.3-dark') ||
            document.body.classList.contains('fluent2-highcontrast') ||
            document.body.classList.contains('highcontrast') ||
            document.body.classList.contains('fluent2-dark');

            var borderColor = themeIsDark ?  'black' : 'white';
            return (
                '<div style="padding: 5px;">' +
                '<div style="padding-bottom: 9px; text-align: center; border-bottom: 2px solid ' + borderColor + ';">' +
                '<span style="font-weight: bold; font-size: 14px;">' + label + '</span>' +
                '</div>' +
                '<div style="display: flex; padding-bottom: 5px; padding-top: 9px">' +
                '<span style="font-weight: bold;">Active Tasks:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.activeTasks + '</span>' +
                '</div>' +
                '<div style="display: flex; padding-bottom: 5px;">' +
                '<span style="font-weight: bold;">Milestones:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.milestones + '</span>' +
                '</div>' +
                '<div style="display: flex; padding-bottom: 5px;">' +
                '<span style="font-weight: bold;">Overall Progress:</span>' +
                '<span style="padding-left: 2px;">' + tooltipData.overallProgress + '</span>' +
                '</div>' +
                '</div>'
            );
        }
  }
}
</script>
