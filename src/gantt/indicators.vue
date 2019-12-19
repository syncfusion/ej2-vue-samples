<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample visualizes how to mention special moment in any mentioned day for a particular task with different icon and label.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="Indicators" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :treeColumnIndex= "1"
        :columns= "columns"
        :splitterSettings= "splitterSettings"
        :eventMarkers= "eventMarkers"
        :indicators="indicators"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
    </div>

<div id="description">
    <p>
        In this example, <code>indicators</code> are displayed with some custom text in specified day of task, which are defined in dataSource. You can define the indicators with the following properties for tasks:
       <li><code>date</code>: Defines the date value to where we want to display the indicators.</li>
       <li><code>iconClass </code>: Defines the icon to highlight the indicator.</li>
       <li><code>name</code>: Defines text to be displayed in the mentioned date.</li>
       <li><code>tooltip</code>: The text to be displayed when hover the mouse over the indicator.</li>
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
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
               child: 'subtasks',
               indicators: 'Indicators'
            },
            columns: [
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
});
</script>

<style>
    #Indicators .okIcon::before {
    content: '\ea84';
    }
    #Indicators .description::before {
    content: '\e30d';
    }   
    .bootstrap4 #Indicators .okIcon::before {
    content: '\e7d9';
    }
    .bootstrap4 #Indicators .description::before {
    content: '\e7cb';
    }
    .fabric #Indicators .description::before {
    content: '\e310';
    }
    .highcontrast #Indicators .description::before {
    content: '\e310';
    }
</style>