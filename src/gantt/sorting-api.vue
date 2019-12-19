<template>
<div>
      <div class="col-md-9 control-section">
        <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="SortingAPI" 
                :dataSource= "data"        
                :height = "height"       
                :highlightWeekends= 'true'  
                :allowSelection = 'true'
                :allowSorting = 'true'
                :taskFields= "taskFields"
                :labelSettings= "labelSettings"
                :treeColumnIndex= "1"
                :columns= "columns"
                :splitterSettings= "splitterSettings"
                :projectStartDate= "projectStartDate"
                :projectEndDate= "projectEndDate">
                </ejs-gantt>
      </div>
    </div>
        <div class="col-md-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 30%">
                <div>Column</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div>
                     <ejs-dropdownlist ref='columns' id='columns' width='110px' :dataSource='columnsData' value='TaskID' :fields='columnsFields' :change="columnChange"></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>Direction</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div>
                    <ejs-dropdownlist ref='direction' width='110px' id='direction' :dataSource='directionData' value='Ascending' :fields='directionFields' :change="directionChange"></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>
                    <ejs-button ref='sort' v-on:click.native="sort">Sort</ejs-button>
                </div>

            </td>
            <td style="width: 70%; padding:10px 10px 10px 0px">
                <div>
                    <ejs-button ref='clear' v-on:click.native="clear">Clear</ejs-button>
                </div>
            </td>
        </tr>
    </table>
        </div>
    <div id="action-description">
    <p> The sorting feature enables you to order data in a particular direction. It can be enabled by setting
        <code>allowSorting</code> to <code>true</code>.</p>
</div>

<div id="description">
    <p>
        The sorting feature enables you to order data in a particular direction. It can be enabled by setting the <code>allowSorting</code> to true.
    </p>
    <p>To sort a Gantt column, click the column header. The icons (ascending) and (descending) specify the sort direction of a column.</p>
    <p>By default, the multi-sorting feature is enabled in Gantt. To sort multiple columns, hold the <strong>CTRL</strong> key, and then click the column header. To clear sort for a column, hold the <strong>SHIFT</strong> key, and then click the column header.</p>
    <p>In this demo, select the column and direction from the properties panel, and then click the Sort button. Use the Clear button to remove sort for the sorted column.
    </p>
    
    <p>
        Gantt control features are segregated into individual feature-wise modules. To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use sort, inject the
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
import { DropDownListPlugin, ChangeEventArgs, DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin, ClickEventArgs} from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);
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
                { field: 'TaskID', headerText: 'ID', width: 85 },
                { field: 'TaskName', headerText: 'TaskName', width: 250 },
                { field: 'StartDate', headerText: 'StartDate' },
                { field: 'EndDate', headerText: 'EndDate' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'Progress', headerText: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/25/2019'),
            projectEndDate: new Date('07/28/2019'),
            columnsData: [
                { id: 'TaskID', type: 'TaskID' },
                { id: 'TaskName', type: 'TaskName' },
                { id: 'StartDate', type: 'StartDate' },
                { id: 'EndDate', type: 'EndDate' },
                { id: 'Duration', type: 'Duration' },
                { id: 'Progress', type: 'Progress' }
            ],
            columnsFields: {
                text: 'type', value: 'id'
            },
            directionData: [
                { id: 'Ascending', type: 'Ascending' },
                { id: 'Descending', type: 'Descending' },
            ],
            directionFields: {
                text: 'type', value: 'id'
            }
      };
  },
  provide: {
      gantt: [DayMarkers, Selection, Sort]
  },
  methods: {
      
      sort: function(ClickEventArgs) {
        let columnName = this.$refs.columns.ej2Instances.value;
        let sortType = this.$refs.direction.ej2Instances.value;
        this.$refs.gantt.sortColumn(columnName, sortType, false);
    },
       clear: function(ClickEventArgs) {
        this.$refs.gantt.clearSorting();
    }
  }
});
</script>