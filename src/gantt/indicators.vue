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
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
    </div>

<div id="description">
    <p>
        In this example, <code>indicators</code> are displayed with some custom text in specified day of task, which are defined in dataSource. You can define the indicators with the following properties for tasks:
       <ul>
       <li><code>date</code>: Defines the date value to where we want to display the indicators.</li>
       <li><code>iconClass </code>: Defines the icon to highlight the indicator.</li>
       <li><code>name</code>: Defines text to be displayed in the mentioned date.</li>
       <li><code>tooltip</code>: The text to be displayed when hover the mouse over the indicator.</li>
       </ul>
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
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('07/06/2024'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
}
</script>

<style scoped>
    #Indicators /deep/ .okIcon::before {
    content: '\ea84';
    }
    #Indicators /deep/ .description::before {
    content: '\e30d';
    }   
    .bootstrap4 #Indicators /deep/ .okIcon::before {
    content: '\e7d9';
    }
    .bootstrap4 #Indicators /deep/ .description::before {
    content: '\e7cb';
    }
    .bootstrap5 #Indicators /deep/ .okIcon::before,
    .bootstrap5-dark #Indicators /deep/ .okIcon::before {
    content: '\e72b';
    }
    .bootstrap5 #Indicators /deep/ .description::before,
    .bootstrap-dark #Indicators /deep/ .description::before {
    content: '\e72b';
    }
    .tailwind #Indicators .okIcon::before, .tailwind-dark #Indicators .okIcon::before,
    .material3-dark #Indicators .okIcon::before,.material3 #Indicators .okIcon::before,
    .material3-dark #Indicators .description::before,.material3 #Indicators .description::before  {
         content: '\e72b';
    }
    .tailwind #Indicators .description::before,
    .tailwind-dark #Indicators .description::before
    {
    content: '\e7c0';
    }
    .fabric #Indicators /deep/ .description::before {
    content: '\e310';
    }
    .highcontrast #Indicators /deep/ .description::before {
    content: '\e310';
    }
    .fluent #Indicators /deep/ .okIcon::before,
    .fluent2 #Indicators /deep/ .okIcon::before,
    .fluent2-dark #Indicators /deep/ .okIcon::before,
    .fluent2-highcontrast#Indicators /deep/ .okIcon::before,
    .fluent-dark #Indicators /deep/ .okIcon::before{
        content: '\e72b';
    }
    .fluent #Indicators /deep/ .description::before,
    .fluent2 #Indicators /deep/ .description::before,
    .fluent2-highcontrast #Indicators /deep/ .description::before,
    .fluent2-dark #Indicators /deep/ .description::before,
    .fluent-dark #Indicators /deep/ .description::before{
        content: '\e7c0';
    }

</style>