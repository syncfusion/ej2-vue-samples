<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample explains the way of rendering tooltip template for taskbar and baseline by mapping template
        elements to the property of taskbar and baseline in <code>tooltipSettings</code>.</p>
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
        </ejs-gantt>
    </div>
<div id="description">
    <p>Tooltip can be enabled or disabled using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings/#showtooltip">tooltipSettings.showTooltip</a> property.In this demo, the
        tooltip template is rendered for <code>taskbar</code> and <code>baseline</code> using the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings/#taskbar">tooltipSettings.taskbar</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/tooltipSettings/#baseline">tooltipSettings.baseline</a> properties.
    </p>
    <p>
        The baseline feature enables the user to view the deviation between the planned dates and the actual dates of
        the tasks in a project. Baselines can be enabled in Gantt chart by enabling the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#renderbaseline">renderBaseline</a>
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
            tooltipSettings: {
                showTooltip: true,
                taskbar: "taskbarTooltipTemplate",
                baseline: "baselineTooltipTemplate"
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
            }
  }
}
</script>
