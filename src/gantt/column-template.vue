<template>
<div class="col-lg-12 control-section">
    <div>
      <ejs-gantt ref='gantt' id="ColumnTemplate" :dataSource="data" :height="height" :highlightWeekends='true'
        :taskFields="taskFields" :labelSettings="labelSettings" :splitterSettings="splitterSettings" :columns= "columns"
        :resourceFields="resourceFields" :resources="resources" :rowHeight='60' :projectStartDate="projectStartDate"
        :projectEndDate="projectEndDate">
        <e-columns>
          <e-column field='TaskID' headerText='Task ID' textAlign='Left'></e-column>
          <e-column field='TaskName' headerText='Task Name' width='250'></e-column>
          <e-column field='resources' :template="'columnTemplate'" width='250'>
          </e-column>
          <e-column field='StartDate' headerText='Start Date' width='150'></e-column>
          <e-column field='Duration' headerText='Duration' width='150'></e-column>
          <e-column field='Progress' headerText='Progress' width='150'></e-column>
        </e-columns>
        <template v-slot:columnTemplate="{data}">
          <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
            <img
              :src="'https://ej2.syncfusion.com/vue/demos/source/gantt/images/' + data.ganttProperties.resourceNames + '.png'"
              height="40px" />
            <div style="display:inline-block;width:100%;position:relative;left:30px">
              {{data.ganttProperties.resourceNames}}</div>
          </div>
        </template>
      </ejs-gantt>
    </div>

<div id="action-description">
    <p>This sample demonstrates the usage of template columns in Gantt. 
        In this sample, we have shown custom images in the Resources column.</p>
</div>
<div id="description">
    <p>The Gantt provides a way to use a custom layout for each cell using the column template feature. The <code>columns -> template</code> property accepts the template for the cell.</p>
    <p>In this demo, using column template, resource column has been presented with employee photo</p>
</div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
import { templateData, editingResources } from './data-source';
import columntempVue from "./column-temp.vue";

Vue.use(GanttPlugin);

export default Vue.extend({
  data: () => {
    return {
           data: templateData,
            height: '450px',             
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                resourceInfo: 'resources',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            columns: [
              { field: 'TaskID', width: 140 },
              { field: 'TaskName', width: 250 },
              { field: 'resources' },
              { field: 'StartDate' },
              { field: 'EndDate' },
              { field: 'Duration' },
              { field: 'Predecessor' },
              { field: 'Progress' },
            ],
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
            resources: editingResources,
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings:{
                columnIndex: 4
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
        };
  },
   provide : {
      gantt: [Selection]
    }
  });
</script>
