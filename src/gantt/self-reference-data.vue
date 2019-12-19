<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample demonstrates the way of binding self-referential flat data to the Gantt control.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="SelfData" 
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
    <p>Gantt can be bound either to local or remote data services.
        The <code>dataSource</code> property can be assigned either with the array of JavaScript objects or an instance of <code>DataManager</code>.</p>
    <p>In this demo, the array of self-referential flat data with <code>parentID</code> is assigned as data source to the Gantt.</p>
    
    <p>
        Gantt control features are segregated into individual feature-wise modules. To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { selfData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: selfData,
            height: '450px',             
            taskFields: {
               id: 'taskID',
                name: 'taskName',
                startDate: 'startDate',
                endDate: 'endDate',
                duration: 'duration',
                progress: 'progress',
                dependency: 'predecessor',
                parentID: 'parentID'
            },
            columns: [
                { field: 'taskID', width: 75 },
                { field: 'taskName', width: 250 },
                { field: 'startDate' },
                { field: 'endDate' },
                { field: 'duration' },
                { field: 'predecessor' },
                { field: 'progress' },
            ],
            labelSettings: {
                leftLabel: 'taskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('01/28/2019'),
            projectEndDate: new Date('03/10/2019'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
});
</script>