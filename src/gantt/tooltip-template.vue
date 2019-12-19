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
        :resourceNameMapping= "resourceNameMapping"
        :resourceIDMapping= "resourceIdMapping"
        :resources= "resources"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
    </div>
<div id="description">
    <p>Tooltip can be enabled or disabled using <code>tooltipSettings.showTooltip</code> property.In this demo, the
        tooltip template is rendered for <code>taskbar</code> and <code>baseline</code> using the
        <code>tooltipSettings.taskbar</code> and <code>tooltipSettings.baseline</code> properties.
    </p>
    <p>
        The baseline feature enables the user to view the deviation between the planned dates and the actual dates of
        the tasks in a project. Baselines can be enabled in Gantt chart by enabling the <code>renderBaseline</code>
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
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { tooltipData, editingResources } from './data-source';
import BaselineTemplate from "./tooltip-temp-baseline.vue";
import TaskbarTemplate from "./tooltip-temp-taskbar.vue";
Vue.use(GanttPlugin);
export default Vue.extend({
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
                { field: 'TaskID', width: 70 },
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
            resourceNameMapping: 'resourceName',
            resourceIdMapping: 'resourceId',
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
                taskbar: function () {
                return { template : TaskbarTemplate}
              },
                baseline: function () {
                return { template : BaselineTemplate}
              } 
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('05/04/2019'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
});
</script>