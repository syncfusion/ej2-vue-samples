<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt ref="unscheduleGantt" id="unscheduledGantt" :dataSource= "dataSource" :taskFields= "taskFields"
          :editSettings= "editSettings" :toolbar= "toolbar":height="height" :rowHeight="46" :taskbarHeight="25"
          :labelSettings= "labelSettings" :allowUnscheduledTasks= "allowUnscheduledTasks" :projectStartDate= "projectStartDate"
          :projectEndDate= "projectEndDate" :columns= "columns" :splitterSettings= "splitterSettings"
          v-on:toolbarClick= "toolbarClick">
        </ejs-gantt>
      </div>
    </div>
    <div id="action-description">
      <p>This sample visualizes the support for displaying unscheduled tasks in Gantt and adding empty rows using the custom toolbar button.</p>
    </div>

    <div id="description">
      <p>
        Unscheduled tasks are tasks in a project that are not scheduled with proper dates or duration at the commencement of the project. These tasks can be scheduled properly at any time during project implementation based on factors such as resource availability, dependent tasks, and more.
        This example shows how to display the unscheduled tasks in Gantt by enabling the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowunscheduledtasks">allowUnscheduledTasks</a> property. This also shows how to add an empty row in Gantt by using a custom toolbar button click action. By using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbarclick">toolbarClick</a> event and <code>addRecord</code> method, an empty row can be added at the top of the rows with undefined task details.
      </p>
      <p style="font-weight: 500">Injecting Module:</p>
      <p>
        Gantt component features are segregated into individual feature-wise modules. To use selection, toolbar and add support,
        inject the <code>Selection</code>, <code>Toolbar</code> and <code>Edit</code> modules using the <code>provide</code> section.
      </p>
      <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/scheduling-tasks#unscheduled-tasks">documentation section</a>.</p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Edit, Toolbar, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { unscheduledData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
    return {
      dataSource: unscheduledData,
      taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true
      },
      toolbar: [{ text: 'Insert task', tooltipText: 'Insert task at top', id: 'toolbarAdd', prefixIcon: 'e-add-icon tb-icons' }],
      height: '650px',
      labelSettings: {
        leftLabel: 'TaskName',
        rightLabel: 'TaskType'
      },
      columns: [
        {field: 'TaskId', width: 90, },
        {field: 'TaskName', width: 100 },
        {field: 'StartDate', width: 180},
        {field: 'EndDate', width: 120 },
        {field: 'Duration', width: 150 }
      ],
      splitterSettings: {
        columnIndex: 4
      },
      allowUnscheduledTasks: true,
      highlightWeekends: true,
      projectStartDate: new Date('12/29/2024'),
      projectEndDate: new Date('02/14/2025'),
    };
  },
  provide: {
    gantt: [Edit, Toolbar, Selection, DayMarkers]
  },
  methods: {
    toolbarClick: function() {
      let data = {
          Duration: null,
          StartDate: null,
          EndDate: null,
          TaskType: ''
      };
      this.$refs.unscheduleGantt.addRecord(data);
    }
  }
}
</script>

<style scoped>
.e-add-icon:before {
  content: "\e836";
  font-size : 16px;
  font-family : "e-icons"
}
#unscheduledGantt ::v-deep  .e-add-icon:before {
  content: "\e506";
  font-size : 16px;
  font-family : "e-icons"
}
.bootstrap4 #unscheduledGantt ::v-deep  .e-add-icon:before {
  content: "\e783";
  font-size : 16px;
  font-family : "e-icons"
}
.bootstrap5 #unscheduledGantt ::v-deep  .e-add-icon:before,
.bootstrap5-dark #unscheduledGantt ::v-deep  .e-add-icon:before,
.tailwind #unscheduledGantt ::v-deep .e-add-icon:before,.tailwind-dark #unscheduledGantt ::v-deep .e-add-icon:before,
.material3-dark #unscheduledGantt ::v-deep .e-add-icon:before ,.material3 #unscheduledGantt ::v-deep .e-add-icon:before,
.tailwind3 #unscheduledGantt ::v-deep .e-add-icon:before,.tailwind3-dark #unscheduledGantt ::v-deep .e-add-icon:before {
  content: "\e836";
  font-size : 16px;
  font-family : "e-icons"
}
.fluent #unscheduledGantt ::v-deep .e-add-icon:before,
.fluent-dark #unscheduledGantt ::v-deep .e-add-icon:before,
.fluent2 #unscheduledGantt ::v-deep .e-add-icon:before,
.fluent2-highcontrast #unscheduledGantt ::v-deep .e-add-icon:before,
.fluent2-dark #unscheduledGantt ::v-deep .e-add-icon:before,
.bootstrap5_3 #Unscheduled ::v-deep .e-add-icon:before,
.bootstrap5_3-dark-lite #Unscheduled ::v-deep .e-add-icon:before,
.bootstrap5_3-dark #Unscheduled ::v-deep .e-add-icon:before, 
.bootstrap5_3-lite #Unscheduled ::v-deep .e-add-icon:before{
  content: "\e836" !important;
  font-size : 16px;
  font-family : "e-icons"
}

</style>
