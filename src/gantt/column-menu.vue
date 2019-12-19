<template>
<div class="col-lg-12 control-section">
<div id="action-description">
     <p>This sample demonstrates the default functionalities of the  column menu. Click on multiple icon of each column to open the column menu.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="ColumnMenu" 
        :dataSource= "data"        
        :height = "height"
        :showColumnMenu= 'true'
        :allowFiltering= 'true'
        :allowSorting= 'true'     
        :allowResizing= 'true'
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :columns= "columns"
        :labelSettings= "labelSettings"
        :splitterSettings= "splitterSettings"
        :treeColumnIndex= "1"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate"
        >
        </ejs-gantt>
    </div>

<div id="description">
    <p>
        Gantt has an option to show column menu while clicking multiple icon of each column. The column menu has an integrated option to interact with the features such as sorting, filtering, column chooser, and autoFit.  
        This feature can be enabled by setting <code>showColumnMenu</code> to true.
        The default items are,
        <br>
    </p>
    <ul>
            <li><code>SortAscending</code> - Sorts the current column in ascending order.</li>
            <li><code>SortDescending</code> - Sorts the current column in descending order.</li>
            <li><code>AutoFit</code> - Auto-fit current column.</li>
            <li><code>AutoFitAll</code> - Auto-fit all columns.</li>
            <li><code>ColumnChooser</code> - Chooses the column visibility.</li>
            <li><code>Filter</code> - Filters the current column.</li>
    </ul>
    <br/>

    <p>
        In this demo, the column menu feature is enabled by setting <code>showColumnMenu</code> to true with sorting, filtering, column chooser, and autoFit options.
    </p>
    <p>
        More information about column menu can be found in this documentation section.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, Sort, Resize, ColumnMenu, Filter} from "@syncfusion/ej2-vue-gantt";
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
               { field: 'TaskID', headerText: 'ID', width: 110 },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor', headerText: 'Dependency' }
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings:{
                columnIndex: 4
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
           
      };
  },
  provide: {
      gantt: [Selection, Sort, Resize, ColumnMenu, Filter]
  }
});
</script>
