<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample demonstrates the timeline zooming feature in the Gantt Chart. Use the toolbar options to zoom in, zoom out, or adjust the timeline to fit all tasks within the available chart width.</p>
    </div>
    <div>
      <ejs-gantt ref="gantt" id="GanttContainer" :dataSource="data" :height="height" :rowHeight="46" :taskbarHeight="25"
        :toolbar="toolbar" :taskFields="taskFields" :treeColumnIndex="1" :columns="columns"
        :splitterSettings="splitterSettings">
      </ejs-gantt>
    </div>

    <div id="description">
      <p>
        This sample demonstrates the timeline zooming functionality in the Gantt Chart. The toolbar provides built-in options to adjust the timeline scale and navigate project schedules at different levels of detail.</p>
        <ul>
          <li><code>ZoomIn</code> - Increases the timeline scale to display task details more closely.</li>
          <li><code>ZoomOut </code> - Decreases the timeline scale to provide a broader view of the project schedule.</li>
          <li><code>ZoomToFit </code> - Automatically adjusts the timeline so that all tasks are visible within the current chart area.</li>
      </ul>
      <p>Zooming dynamically updates the timeline view mode and cell width, allowing project schedules to be viewed across different time spans, ranging from detailed task-level views to high-level project overviews.</p>
      <p style="font-weight: 500">Injecting Module:</p>
      <p>
        Gantt component features are segregated into individual feature-wise modules. To use zoom support,
        inject the <code>Toolbar</code> module using the <code>provide</code> section.
      </p>
      <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/time-line/zooming">zooming</a> documentation section.</p>
      <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { zoomingData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function () {
    return {
      data: zoomingData,
      height: "450px",
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        child: "subtasks"
      },
      toolbar: ["ZoomIn", "ZoomOut", "ZoomToFit"],
      columns: [
        { field: 'TaskID' },
        { field: 'TaskName', width: '280' },
        { field: 'StartDate' },
        { field: 'EndDate' },
        { field: 'Duration' },
        { field: 'Predecessor' },
        { field: 'Progress' }
      ],
      splitterSettings: {
        columnIndex: 3
      },
      projectStartDate: new Date('03/26/2025'),
      projectEndDate: new Date('06/01/2025')
    };
  },
  provide: {
    gantt: [Toolbar]
  }
}
</script>
