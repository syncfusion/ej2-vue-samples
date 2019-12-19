<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample visualizes how to define the holidays in between the project timeline. </p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="Holidays" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :columns= "columns"
        :treeColumnIndex= "1"
        :holidays= "holidays"
        :splitterSettings= "splitterSettings"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
    </div>

<div id="description">
    <p>
        In this example,<code> holidays </code> are displayed with vertical bar with the desired text using the <code>label</code> property. You can also mention the continuous holidays by specifying the <code>from</code> and <code>to</code> range. For single holiday, you can define from value alone. Holidays are defined as an array of object collection, so that we can display more than one holiday in the project.
    </p>
    <p>
        You can even assign the <code>cssClass</code> to each holiday to change the default color of label and background.
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
               child: 'subtasks'
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
            holidays: [
            {
                from: new Date('04/04/2019'),
                to: new Date('04/04/2019'),
                label: 'Local Holiday'
            }, {
                from: new Date('04/19/2019'),
                to: new Date('04/19/2019'),
                label: 'Good Friday'
            }, {
                from: new Date('04/30/2019'),
                to: new Date('04/30/2019'),
                label: 'Release Holiday'
            }, 
        ],
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
});
</script>