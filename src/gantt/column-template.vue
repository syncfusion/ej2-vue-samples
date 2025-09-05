<template>
  <div class="col-lg-12 control-section">
    <div>
      <ejs-gantt ref='gantt' id="ColumnTemplate" :dataSource="data" :height="height" :rowHeight="46" :taskbarHeight="25"
        :highlightWeekends='true' :taskFields="taskFields" :labelSettings="labelSettings"
        :splitterSettings="splitterSettings" :columns="columns" :resourceFields="resourceFields" :resources="resources"
        :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :queryCellInfo="queryCellInfo">
        <e-columns>
          <e-column field='TaskID' headerText='Task ID' textAlign='Left'></e-column>
          <e-column field='TaskName' headerText='Task Name' width='250'></e-column>
          <e-column field='resources' :template="'columnTemplate'" width='250'>
          </e-column>
          <e-column field='StartDate' headerText='Start Date' width='150'></e-column>
          <e-column field='Duration' headerText='Duration' width='150'></e-column>
          <e-column field='Progress' headerText='Progress' width='150'></e-column>
        </e-columns>
        <template v-slot:columnTemplate="{ data }">
          <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
            <img :src="'src/gantt/images/' + data.ganttProperties.resourceNames + '.png'" style="height: 40px;"
              :alt="data.ganttProperties.resourceNames" />
            <div style="display:inline-block;width:100%;position:relative;">
              {{ data.ganttProperties.resourceNames }}</div>
          </div>
        </template>
      </ejs-gantt>
    </div>

    <div id="action-description">
      <p>This sample demonstrates the usage of template columns in Gantt.
        In this sample, we have shown custom images in the Resources column.</p>
    </div>
    <div id="description">
      <p>The Gantt provides a way to use a custom layout for each cell using the column template feature. The <a
          target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnModel/#template">columns ->
          template</a> property accepts the template for the cell.</p>
      <p>In this demo, using column template, resource column has been presented with employee photo</p>
      <br>
      <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/column-template">documentation section</a>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { GanttComponent, ColumnDirective, ColumnsDirective, Selection } from "@syncfusion/ej2-vue-gantt";
import { templateData, editingResources } from './data-source';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: templateData,
      height: '650px',
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
      splitterSettings: {
        columnIndex: 4
      },
      projectStartDate: new Date('03/24/2025'),
      projectEndDate: new Date('07/06/2025')
    };
  },
  provide: {
    gantt: [Selection]
  },
  methods: {
    queryCellInfo: function (args: any) {
      let gantt = (document.getElementsByClassName('e-gantt')[0] as any).ej2_instances[0];
      if (args.column.field === 'resources' && args.data.ganttProperties.resourceNames && !isNullOrUndefined(args.cell.getElementsByClassName('image')[0])) {
        if (gantt.enableRtl) {
          args.cell.getElementsByClassName('image')[0].children[1].style.right = '30px';
        }
        else {
          args.cell.getElementsByClassName('image')[0].children[1].style.left = '30px';
        }
      }
    }
  }
}
</script>
