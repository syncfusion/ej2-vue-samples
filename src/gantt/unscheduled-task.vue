<template>
  <div>
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-gantt
            ref="unscheduleGantt"
            id="unscheduledGantt"
            :dataSource= "dataSource"
            :taskFields= "taskFields"
            :editSettings= "editSettings"
            :toolbar= "toolbar"
            :height= "height"
            :labelSettings= "labelSettings"
            :allowUnscheduledTasks= "allowUnscheduledTasks"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :columns= "columns"
            :splitterSettings= "splitterSettings"
            v-on:toolbarClick= "toolbarClick"
        ></ejs-gantt>
      </div>
    </div>
    <div id="action-description">
      <p>This sample visualizes the support for displaying unscheduled tasks in Gantt and adding empty rows using the custom toolbar button.</p>
    </div>

    <div id="description">
     <p>
        Unscheduled tasks are tasks in a project that are not scheduled with proper dates or duration at the commencement of the project. These tasks can be scheduled properly at any time during project implementation based on factors such as resource availability, dependent tasks, and more.
        This example shows how to display the unscheduled tasks in Gantt by enabling the <code>allowUnscheuldedTask</code> property. This also shows how to add an empty row in Gantt by using a custom toolbar button click action. By using the <code>toolbarClick</code> event and <code>addRecord</code> method, an empty row can be added at the top of the rows with undefined task details.
    </p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a toolbar and add support, inject the <code>Toolbar</code> and <code>Edit</code> modules.
    </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Gantt, Edit, Toolbar, Selection } from "@syncfusion/ej2-vue-gantt";
import { ClickEventArgs } from "@syncfusion/ej2-vue-navigations"
import { unscheduledData } from "./data-source";
Vue.use(GanttPlugin);
export default Vue.extend({
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
        height: '350px',
        labelSettings: {
            leftLabel: 'TaskName',
            rightLabel: 'TaskType'
        },
        columns: [
          {field: 'TaskId', width: 90, },
          {field: 'TaskName', width: 80 },
          {field: 'StartDate', width: 120},
          {field: 'EndDate', width: 120 },
          {field: 'Duration', width: 90 },
          {field: 'TaskType', visible: false}
        ],
        splitterSettings: {
          columnIndex: 4
        },
        allowUnscheduledTasks: true,
        projectStartDate: new Date('01/01/2019'),
        projectEndDate: new Date('01/20/2019')
    };
  },
  provide: {
    gantt: [Edit, Toolbar, Selection]
  },
  methods: {
    toolbarClick: function(args) {
        let data = {
            Duration: null,
            StartDate: null,
            EndDate: null,
            TaskType: ''
        };
        this.$refs.unscheduleGantt.addRecord(data);
    }
  }
});
</script>

<style>
    #unscheduledGantt .e-add-icon:before {
        content: "\e506"
    }
    .bootstrap4 #unscheduledGantt .e-add-icon:before {
        content: "\e783"
    }
</style>
