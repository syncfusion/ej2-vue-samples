<template>
<div>
    <div class="col-md-9 control-section">
        <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GridLines" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :columns= "columns"
        :labelSettings= "labelSettings"
        :splitterSettings="splitterSettings"
        :treeColumnIndex= "1"
        :gridLines = "gridLines"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
        </div>
    </div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties">
                <tr>
                    <td style="width: 50%">
                        Grid Lines
                    </td>
                    <td style="width: 50%;padding: 10px 10px 10px 0px">
                        <ejs-dropdownlist id='gridlines' width='100px' :dataSource='linesData' value='Both' :fields='linesFields' :change="lineChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    <div id="action-description">
    <p>This sample demonstrates the visibility of Gantt lines that separate the rows and columns.
        In this sample, you can change the gridlines from the property panel.</p>
    </div>
<div id="description">
    <p>
        The <code>gridLines</code> property is used to control the visibility of line that separates the rows and
        columns.
        Gantt allows us to display the following grid lines:
    </p>
    <ul>
        <li><code>None</code> - Shows no line.</li>
        <li><code>Both</code> - Shows both horizontal and vertical lines.</li>
        <li><code>Horizontal</code> - Shows the horizontal line.</li>
        <li><code>Vertical</code> - Shows the vertical line.</li>
    </ul>
    <p> In this demo, you can modify the visibility of gridlines by selecting values in dropdown.</p>

    <p>Gantt component features are segregated into individual feature-wise modules.To use a selection, inject the
    <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use markers, inject the <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.</p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { DropDownListPlugin, ChangeEventArgs} from '@syncfusion/ej2-vue-dropdowns';
Vue.use(GanttPlugin);
Vue.use(DropDownListPlugin);

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
                { field: 'TaskID', width: 70 },
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
                columnIndex: 2
            },
            gridLines: "Both",
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
            linesFields: { text: 'type', value: 'id' },
            linesData: [
                { id: 'Both', type: 'Both' },
                { id: 'Vertical', type: 'Vertical' },
                { id: 'Horizontal', type: 'Horizontal' },
                { id: 'None', type: 'None' }
            ]
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  },
  methods: {
        lineChange: function(e) {
           this.gridLines = e.value;
        }
    }
});
</script>