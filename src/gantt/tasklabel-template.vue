<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample explains the way of rendering label template for left, right, and task labels by mapping template elements to the leftLabel, rightLabel and taskLabel properties in labelSettings.</p>
</div>
    <div>
      <ejs-gantt ref='gantt' id="labelData" :dataSource="data" :rowHeight="46" :height="height"
        :highlightWeekends='true' :allowSelection='true' :taskFields="taskFields" :labelSettings="labelSettings"
        :treeColumnIndex="1" :columns="columns" :splitterSettings="splitterSettings" :resourceFields="resourceFields"
        :resources="resources" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
        <template v-slot:leftLabelTemplate="{data}">
          <div>
            <template>{{data.TaskName}} [ {{ data.Progress }} % ]</template>
          </div>
        </template>
        <template v-slot:rightLabelTemplate="{data}">
          <div v-if="data.ganttProperties.resourceInfo">
            <span v-for="resource in data.ganttProperties.resourceInfo">
              <img :src="'src/gantt/images/' + resource.resourceName + '.png'"
              style="height: 40px;"/>
              <span style="marginLeft:5px;marginRight:5px">{{ resource.resourceName }}</span>
            </span>
          </div>
        </template>
      </ejs-gantt>
    </div>
<div id="description">
    <p>
        In this demo, the label template is rendered using the <code>leftLabel</code>, <code>rightLabel</code> and <code>taskLabel</code> properties in <code>labelSettings</code>.
    </p>
    
    <p>Gantt control features are segregated into individual feature-wise modules.To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { labelData, editingResources } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: labelData,
            height: '450px',             
            taskFields: {
               id: 'TaskID',
               name: 'TaskName',
               startDate: 'StartDate',
               endDate: 'EndDate',
               duration: 'Duration',
               progress: 'Progress',
               dependency: 'Predecessor',
               resourceInfo: 'resources',
               child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 230 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
                { field: 'resources' },
            ],
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
            resources: editingResources,
            labelSettings: {
                leftLabel: "leftLabelTemplate",
                rightLabel: "rightLabelTemplate",
                taskLabel: '${Progress}%'
            },
            splitterSettings: {
                position: "35%"
            },
            projectStartDate: new Date('03/25/2019'),
            projectEndDate: new Date('05/04/2019'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
}
</script>
