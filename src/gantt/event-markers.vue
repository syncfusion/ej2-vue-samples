<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample visualizes how to notify the important dates in the project timeline.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="EventMarkers" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :treeColumnIndex= "1"
        :columns= "columns"
        :eventMarkers= "eventMarkers"
        :splitterSettings= "splitterSettings"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
    </div>

<div id="description">
    <p>
        In this example, the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#eventmarkers">eventMarkers</a> are used like a bookmark to show the different stages of the project life cycle. You can show the desired text on the date. The Event Markers model has the below properties to customize the marker:
       <ul>
       <li><code>cssClass</code>: Used to assign external CSS styles to that particular marker.</li>
       <li><code>day</code>: Used to set date of the event marker.</li>
       <li><code>label</code>: The desired text can be shown on the vertical line using this property.</li>
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
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('07/06/2024'),
            eventMarkers: [
            {
                day: new Date('04/02/2024'),               
            }, {
                day: new Date('04/09/2024'),
                label: 'Design phase'
            }, {
                day: new Date('04/19/2024'),
                label: 'Research phase'
            }, {
                day: new Date('05/23/2024'),
                label: 'Production phase'
            }, {
                day: new Date('06/20/2024'),
                label: 'Sales and marketing phase'
            }
        ],
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
}
</script>