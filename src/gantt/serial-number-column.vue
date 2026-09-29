<template>
  <div>
    <div class="col-lg-12 control-section">

      <div class="content-wrapper">
        <ejs-gantt ref="gantt" id="HierarchyProjectview" :dataSource="projectData" :taskFields="taskFields"
          :columns="columns" :editSettings="editSettings" :toolbar="toolbar" :allowSorting="true"
          :enableContextMenu="true" :allowRowDragAndDrop="true" :allowTaskbarDragAndDrop="true" :treeColumnIndex="2"
          :enableSerialNumber="true" :allowFiltering="true" :filterSettings="filterSettings"
          :selectionSettings="selectionSettings" :splitterSettings="splitterSettings" :gridLines="'Both'"
          :highlightWeekends="true" :timelineSettings="timelineSettings" :labelSettings="labelSettings" :rowHeight="46"
          :taskbarHeight="25" :height="'650px'" :allowUnscheduledTasks="true"
          :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
        </ejs-gantt>
      </div>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates the auto-generated Serial Number column support in the Gantt Chart.
        The component automatically generates sequential row numbers based on the current visible row order
        and keeps them updated during operations such as filtering, editing, hierarchy changes,
        and drag-and-drop actions
      </p>
    </div>

    <div id="description">
      <p>
        The serial number feature automatically generates sequential row numbers for records displayed in the Gantt Chart. When the <strong>
        <a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enableserialnumber">enableSerialNumber</a>
        </strong> property is enabled, serial numbers are assigned based on the current visible row order without requiring a dedicated field in the data source.
      </p>

      <p>
        The numbering is automatically updated whenever the row order changes due to actions such as filtering, searching, expand and collapse, indent and outdent, CRUD operations, row drag-and-drop, and data refresh.
      </p>

      <p style="font-weight: 500">Injecting Module:</p>

      <p>
        Gantt component features are segregated into individual feature-wise modules. To use selection, toolbar,
        editing, filtering, sorting, row drag-and-drop, and virtualization features, inject the
        <code>Selection</code>, <code>Toolbar</code>, <code>Edit</code>, <code>Filter</code>,
        <code>Sort</code>, and <code>RowDD</code> modules using the
        <code>Gantt.Inject(Selection)</code>, <code>Gantt.Inject(Toolbar)</code>,
        <code>Gantt.Inject(Edit)</code>, <code>Gantt.Inject(Filter)</code>,
        <code>Gantt.Inject(Sort)</code>, and <code>Gantt.Inject(RowDD)</code> methods.
      </p>

      <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/serial-number-column">serial number column</a> documentation section.</p>
      <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu, RowDD } from '@syncfusion/ej2-vue-gantt';
import { SerialNumberData } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function () {
    return {
      projectData: SerialNumberData,
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
      columns: [
        { field: 'TaskID', headerText: 'Task ID', visible: false },
        { field: 'SerialNumber', headerText: 'S.No', width: '100px', allowFiltering: false },
        { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '280px' },
        { field: 'StartDate', headerText: 'Start Date', width: '140px' },
        { field: 'Predecessor', headerText: 'Predecessor', width: '190px' },
        { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
        { field: 'Progress', headerText: 'Progress' }
      ],
      toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Indent', 'Outdent', 'ExpandAll', 'CollapseAll', 'Search'],
      filterSettings: {
        type: 'Menu'
      },
      selectionSettings: {
        mode: 'Row',
        type: 'Single',
        enableToggle: false
      },
      splitterSettings: {
        columnIndex: 2,
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
        taskLabel: '${Progress}%'
      },
      projectStartDate: new Date('03/30/2025'),
      projectEndDate: new Date('05/30/2025')
    };
  },
  provide: {
    gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Sort, ContextMenu, RowDD]
  },

};
</script>
