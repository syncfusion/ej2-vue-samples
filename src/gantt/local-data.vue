<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This demo shows the way of binding an array of JavaScript objects (local JSON datasource) to Gantt.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="LocalData" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'  
        :allowSelection = 'true'       
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
    <p>Gantt can be bound either to local or remote data services.The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#datasource">dataSource</a> property can be assigned either with the array of JavaScript objects or an instance of <code>DataManager</code>.</p>
    <p>In this demo, an array of JavaScript objects is assigned as data source to the Gantt.</p>
    
    <p>
        Gantt control features are segregated into individual feature-wise modules. To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: projectNewData,
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
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                position: "35%"
            },
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('07/06/2024'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
}
</script>
