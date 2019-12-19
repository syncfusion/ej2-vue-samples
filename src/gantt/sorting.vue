<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample demonstrates the Gantt multi-sorting feature. To sort two or more columns, hold the CTRL key, and click the column header.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="Sorting" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'  
        :allowSelection = 'true'
        :selectedRowIndex = '0'
        :allowSorting = 'true'
        :sortSettings = "sortSettings"
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :treeColumnIndex= "1"
        :columns= "columns"
        :splitterSettings= "splitterSettings"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
    </div>
<div id="description">
    <p>
        The sorting feature enables you to order data in a particular direction. It can be enabled by setting <code>allowSorting</code> to true.
    </p>
    <p>To sort a Gantt column, click the column header. The icons (ascending) and (descending) specifies the sort direction of a column.
    </p>

    <p>By default, the multi-sorting feature is enabled in Gantt. To sort multiple columns, hold the <strong>CTRL</strong> key, and then click the column header. To clear sort for a column, hold the <strong>SHIFT</strong> key, and then click the column header.</p>
    <p>In this demo, multiple sorting enabled on load time by assigning multiple columns into <code>sortSettings</code> property.</p>
    
    <p>
        Gantt control features are segregated into individual feature-wise modules.To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method. To use sort, inject the
        <code>Sort</code> module using the <code>Gantt.Inject(Sort)</code> method.To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers, Sort } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: editingData,
            height: '450px',             
            taskFields: {
               id: 'TaskID',
               name: 'TaskName',
               startDate: 'StartDate',
               endDate: 'EndDate',
               duration: 'Duration',
               progress: 'Progress',
               dependency: 'Predecessor',
               child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', width: 110 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                position: '30%'
            },
            sortSettings: { columns: [{ field: 'TaskName', direction: 'Ascending' }, { field: 'TaskID', direction: 'Ascending' }] },
            projectStartDate: new Date('03/25/2019'),
            projectEndDate: new Date('07/28/2019'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection, Sort]
  }
});
</script>