<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample explains the way of rendering timeline template by mapping template elements to the<a
          target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#timelineTemplate">
          timelineTemplate</a> property.</p>
    </div>
    <div>
      <ejs-gantt ref='gantt' id="labelData" :dataSource="data" :rowHeight="46" :height="height"
        :highlightWeekends='true' :allowSelection='true' :taskFields="taskFields" :labelSettings="labelSettings"
        :columns="columns" :splitterSettings="splitterSettings":projectStartDate="projectStartDate"
        :timelineSettings="timelineSettings"
        :projectEndDate="projectEndDate"
        :timelineTemplate="'timelineTemplates'">
        <template v-slot:timelineTemplates ="{data}">
    <div v-if="data.tier === 'topTier'" class="e-header-cell-label e-gantt-top-cell-text"
        style="width:100%; font-weight: bold;height: 100%;display: flex; justify-content: center ; align-items: center;   "
        title=${data.date}>
        <div
          style="width:100%; height: 100%; display: flex; justify-content: center ; align-items: center;flex-direction: column; ">
          <div style=" line-height: initial; font-weight: normal;">{{ weekDate(data.date) }}</div>
          <div style=" line-height: normal; padding-top: 5px; padding-bottom: 2px; font-weight: normal;">
            {{formatDate(data.date) }}</div>
          <div style="width:20px; height: 20px; line-height: normal;">
            <img style="width:100%; height:100%;" :src="imageString(data.value)">
          </div>
        </div>
    </div>
</template>
</ejs-gantt>
</div>
<div id="description">
  <p>
    In this demo, the <a
          target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#timelineTemplate">
          timelineTemplate</a> property enables the customization of timeline cells with any HTML content,
    allowing for enhanced visual appeal and personalized functionality.
  <p>The template contains these context properties to design the timeline cells.</p>
  <li><code>date</code>: Defines the date of timeline date.</li>
  <li><code>value</code>: Defines the date value to display in the timeline.</li>
  <li><code>tier</code>: Defines the tier of timeline.</li>
  </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { timelineTemplateData } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: timelineTemplateData,
            height: '450px',             
            taskFields: {
              id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency:'Predecessor',
                child: 'subtasks'
            },
            columns: [
            { field: 'TaskID', headerText: 'Task ID' ,visible:false},
                { field: 'TaskName', headerText: 'Task Name' , width: 300},
                { field: 'StartDate', headerText: 'Start Date'},
                { field: 'Duration', headerText: 'Duration'},
                { field: 'Progress', headerText: 'Progress'},
            ],
            labelSettings: {
                leftLabel: "TaskName",
               
            },
        timelineSettings: {

          topTier: {
            unit: 'Day',
          },
          timelineUnitSize: 200,
      },
            treeColumnIndex: 1,
            splitterSettings: {
              columnIndex: 1
            },
            projectStartDate: new Date('03/31/2024'),
            projectEndDate: new Date('04/23/2024'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  },
  methods: {
    weekDate(dateString) {
      const date = new Date(dateString);
    const options = { weekday: 'short'}; 
    return date.toLocaleDateString('en-US', options);
    },
    formatDate(dateString) {
      const date = new Date(dateString);
    const options = { day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
    },
    imageString(value) {
      return "src/gantt/images/"+ value.toLowerCase() +".svg" ;
    }
  }
}
</script>
<style>
.e-header-cell-label.e-gantt-top-cell-text{
  background-color: #fff
}
.fluent2-highcontrast .e-header-cell-label.e-gantt-top-cell-text,
.fluent-dark .e-header-cell-label.e-gantt-top-cell-text,
.fluent2-dark .e-header-cell-label.e-gantt-top-cell-text {
    background-color: #000;
}

.e-gantt .e-gantt-tree-grid-pane .e-timeline-single-header-outer-div {
  height: 70px !important;
}

.e-gantt .e-gantt-chart .e-timeline-single-header-outer-div {
  height: 70px !important;
}

.e-gantt .e-gantt-chart .e-timeline-single-header-cell {
  height: 70px !important;
}
</style>
