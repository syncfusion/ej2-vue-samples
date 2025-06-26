<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample visualizes the various phases involved in the manufacturing process of a product,
        which transforms from a conceptual model to a sellable product.</p>
    </div>
    <div>
      <ejs-gantt
        ref="gantt"
        id="GanttContainer"
        :dataSource="data"
        :height="height"
        :toolbar="toolbar"
        :taskFields="taskFields"
        :treeColumnIndex= "1"
        :columns= "columns"
        :splitterSettings="splitterSettings">
       </ejs-gantt>
    </div>

    <div id="description">
       <p>
        The sample demonstrates the zooming support in Gantt Chart. 
            You can zoom in or zoom out the project timeline dynamically with following toolbar buttons.
        <ul>
        <li><code>ZoomIn</code> - To perform zoom in action on Gantt timeline.</li>
        <li><code>ZoomOut </code> - To perform zoom out action on Gantt timeline.</li>
        <li><code>ZoomToFit </code> - To show all tasks with timeline fit into available chart width.</li>
        </ul>
        The zooming feature enables you to view the tasks in the project clearly from minute to year timespan. You need to include 
        <code>ZoomIn</code>, <code>ZoomOut </code> and <code>ZoomToFit </code> buttons in the toolbar for performing zooming actions in Gantt Chart.
        <ul>
        <li><code>ZoomIn</code> - If the user clicks on the <code>ZoomIn</code> icon we have increased the timeline cell width, 
            when the cell size exceeds the specified range then we have changed the timeline view mode.</li>
        <li><code>ZoomOut </code> - If the user clicks on the <code>ZoomOut</code> icon we have decrease the timeline cell width, when the cell size falls
             behind the specified range then we have changed the timeline view mode based on the zooming levels.</li>
        <li><code>ZoomToFit </code> - In project, if the tasks are rendered in different time ranges, when the user clicks on the  <code>ZoomToFit</code> icon, 
            then all the tasks are rendered within the current viewable chart container width.</li>
        </ul>
    </p>
    <p>
        To use a zoom support related icons, inject the <code>Toolbar</code> module into the <code>provide</code> section.
      </p>
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
  data: function() {
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
                { field: 'TaskID'},
                { field: 'TaskName', width: '250' },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' }
      ],
      splitterSettings:{
        position: "35%"
      }
    };
  },
  provide: {
    gantt: [Toolbar]
  }
}
</script>
