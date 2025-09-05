<template>
  <div>
    <div class="col-lg-12 control-section">
      <div style="display: flex; margin-bottom: 10px;">
        <div style="display: flex; align-items: center;">
          <label for="autoUpdateWBS" id="EnableWBS" style="margin-right: 5px; font-size: 15px;">Auto Update WBS</label>
          <ejs-switch id="autoUpdateWBS" :checked="true" v-on:change="autoWBSChange"></ejs-switch>
        </div>
      </div>


      <div class="content-wrapper">
        <ejs-gantt ref="gantt" id="HierarchyProjectview" :dataSource="projectData" :taskFields="taskFields"
          :columns="columns" :editSettings="editSettings" :toolbar="toolbar" :allowSorting="true"
          :enableContextMenu="true" :enableWBS="enableWBS" :treeColumnIndex="2"
          :enableAutoWbsUpdate="enableAutoWbsUpdate" :allowFiltering="true" :filterSettings="filterSettings"
          :selectionSettings="selectionSettings" :splitterSettings="splitterSettings" :gridLines="'Both'"
          :highlightWeekends="true" :timelineSettings="timelineSettings" :labelSettings="labelSettings" :rowHeight="46"
          :taskbarHeight="25" :eventMarkers="eventMarkers" :height="'650px'" :allowUnscheduledTasks="true"
          v-on:dataBound="dataBound" :projectStartDate=projectStartDate :projectEndDate=projectEndDate>
        </ejs-gantt>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates how the Gantt Chart supports Work Breakdown Structure (WBS) codes, including
        automatic updates to WBS codes and predecessors. It ensures data consistency during common operations like
        sorting, filtering, editing, and drag-and-drop—making project tracking more structured and reliable.</p>
    </div>
    <div id="description">
      <p>
        The <strong>Work Breakdown Structure (WBS)</strong> is a hierarchical numbering system used to represent each
        task's position within the overall project structure.
        By enabling the <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enablewbs">enableWBS</a> property, the Gantt
        Chart generates WBS codes and WBS predecessors for all tasks.
      </p>

      <p>
        By default, the <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enableautowbsupdate">enableAutoWbsUpdate</a>
        property is set to <code>false</code>.
        To ensure WBS codes remain accurate after actions such as sorting, filtering, editing, or drag and drop, set
        this property to <code>true</code>.
      </p>

      <p>
        When <code>enableAutoWbsUpdate</code> is enabled, WBS codes are recalculated automatically whenever the task
        hierarchy changes.
        This maintains consistency and structural clarity throughout the project lifecycle.
      </p>

      <p>
        This example showcases how enabling WBS along with automatic updates enhances task tracking and provides a
        clear, organized project view.
      </p>
      <br>
      <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/wbs-column">documentation section</a>.</p>

    </div>

  </div>
</template>

<script>
import { GanttComponent, Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu } from '@syncfusion/ej2-vue-gantt';
import { SwitchComponent } from '@syncfusion/ej2-vue-buttons';
import { WBSData } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-switch': SwitchComponent
  },
  data: function () {
    return {
      enableWBS: true,
      enableAutoWbsUpdate: true,
      projectData: WBSData,
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
      },
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
      },
      eventMarkers: [
        {
          day: new Date('04/02/2025'),
          label: 'Project Initiation'
        }
      ],
      columns: [
        { field: 'TaskID', headerText: 'Task ID', visible: false },
        { field: 'WBSCode', headerText: 'WBS Code', width: '200px' },
        { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '260px' },
        { field: 'StartDate', headerText: 'Start Date', width: '140px' },
        { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190px' },
        { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
        { field: 'Progress', headerText: 'Progress' },
      ],
      toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
      filterSettings: {
        type: 'Menu'
      },
      selectionSettings: {
        mode: 'Row',
        type: 'Single',
        enableToggle: false
      },
      splitterSettings: {
        columnIndex: 4,
      },
      timelineSettings: {
        showTooltip: true,
        topTier: {
          unit: 'Week',
          format: 'dd/MM/yyyy'
        },
        bottomTier: {
          unit: 'Day',
          count: 1
        }
      },
      labelSettings: {
        leftLabel: 'TaskID',
        rightLabel: 'Task Name: ${taskData.TaskName}',
        taskLabel: '${Progress}%'
      },
      projectStartDate: new Date('03/30/2025'),
      projectEndDate: new Date('05/30/2025'),
    };
  },
  provide: {
    gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu]
  },
  methods: {
    autoWBSChange(args) {

      if (this.$refs.gantt.ej2Instances) {
        this.$refs.gantt.ej2Instances.enableAutoWbsUpdate = args.checked;
      }
    },

    dataBound: function () {
      this.$refs.gantt.ej2Instances.element.getElementsByClassName('e-span-label')[0].style.top = '125px';
      this.$refs.gantt.ej2Instances.element.getElementsByClassName('e-gantt-right-arrow')[0].style.top = '131px';
    }
  }
};
</script>
<style>
.fluent2 #EnableWBS,
.fluent2-dark #EnableWBS,
.fluent2-highcontrast #EnableWBS {
  padding: 5px;
  font-size: 15px !important;
  margin-right: -5px !important;
  margin-top: 0px !important;
}

.bootstrap5\.3 #checkboxes {
  margin-top: 0px !important;
}

.e-bigger.fluent2 #EnableWBS,
.e-bigger.fluent2-dark #EnableWBS,
.e-bigger.fluent2-highcontrast #EnableWBS {
  margin: 5px -5px 0px 5px !important;
}

.e-bigger:not(.bootstrap5\.3) #EnableWBS {
  margin: 5px 5px 0px 5px !important;
}
</style>