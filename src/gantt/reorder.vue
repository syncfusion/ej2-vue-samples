<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
        <ejs-gantt ref='gantt' id="columnReorder" 
        :dataSource= "data"        
        :height = "height"
        :highlightWeekends= 'true'
        :allowReordering= 'true'
        :actionComplete='actionComplete'   
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
       <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td style="width: 30%">
                        <div>Column</div>
                    </td>
                    <td style="width: 70%;padding-top:7px; padding-left: 10px;">
                        <ejs-dropdownlist ref='columns' width='100px' id='columns' :dataSource='columnsdata' value='TaskID' :fields='colfields' :change="onColChange"></ejs-dropdownlist>                      
                    </td>
                </tr>
                <tr id='' style="height: 50px">
                    <td style="width: 70%">
                        <div>Column Index</div>
                    </td>
                    <td style="width: 70%; padding-left: 10px; padding-right:10px;padding-top:7px">
                        <ejs-dropdownlist ref='index' width='100px' id='index' :dataSource='indexdata' :value=0 :fields='indexfields' :change="onChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    

<div id="action-description">
    <p>This sample demonstrates the reordering feature of the Gantt columns. Select column name and index from properties panel to reorder the columns. 
        You can also reorder columns by simply dragging and dropping them to the desired position.
     </p>
</div>

<div id="description">
     <p>Reordering can be enabled by setting the <code>allowReordering</code> property to true.
            Reordering can be done by dragging and dropping the column header from one index to another index within the TreeGrid part.</p>
     <p>The location in which the column to be placed will be indicated by two arrows symbols.</p>
     <p>In this demo, you can either reorder columns by dragging and dropping or by selecting column name and column index from dropdown to reorder the columns.
     </p>
     <p>
        More information about column reordering can be found in this documentation section.
    </p>
</div>

  </div>
</template>
<!-- custom code start -->
  <style>
    #columnddl {
        min-width: 120px;
    }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { ActionEventArgs } from "@syncfusion/ej2-grids"
import { DropDownListPlugin, ChangeEventArgs, DropDownListComponent} from "@syncfusion/ej2-vue-dropdowns";
import { GanttPlugin, Selection, GanttComponent, Gantt, Reorder} from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from "./data-source";

Vue.use(GanttPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
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
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 3
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
            columns: [
                { field: 'TaskID', headerText: 'ID', width: 100 },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor', headerText: 'Dependency' }
            ],
            columnsdata: [
                 { id: 'TaskID', name: 'ID' },
                 { id: 'TaskName', name: 'Name' },
                 { id: 'StartDate', name: 'Start Date' },
                 { id: 'EndDate', name: 'End Date' },
                 { id: 'Duration', name: 'Duration' },
                 { id: 'Progress', name: 'Progress' },
                 { id: 'Predecessor', name: 'Dependency' }
            ],
            colfields: { text: 'name', value: 'id' },
            indexdata: [
               { id: 0, name: 1 },
               { id: 1, name: 2 },
               { id: 2, name: 3 },
               { id: 3, name: 4 },
               { id: 4, name: 5 },
               { id: 5, name: 6 },
               { id: 6, name: 7 }],
            indexfields: { text: 'name', value: 'id' }
            };
        },
  provide: {
      gantt: [Selection, Reorder]
    },
    methods: {
        onColChange: function(e: ChangeEventArgs): void {
        let index = (<GanttComponent>this.$refs.gantt).ej2Instances.treeGrid.getColumnIndexByField(<string>e.value);
        var dropdownlistObject = (<DropDownListComponent>this.$refs.index).ej2Instances;
        dropdownlistObject.value = index;
       },
       onChange: function(e: ChangeEventArgs): void {
        let columnName = (<DropDownListComponent>this.$refs.columns).ej2Instances.value;
        let columns = (<GanttComponent>this.$refs.gantt).ej2Instances.treeGrid.columns as any;
        let toColumnIndex: number = <number>e.value;
        (<GanttComponent>this.$refs.gantt).reorderColumns(columnName, columns[toColumnIndex].field);
      },
      actionComplete: function(e: ActionEventArgs) {
           if (e.requestType === 'reorder') {
                let columnName = (<DropDownListComponent>this.$refs.columns).ej2Instances.value;
                let index = (<GanttComponent>this.$refs.gantt).ej2Instances.treeGrid.getColumnIndexByField(columnName);
                (<DropDownListComponent>this.$refs.index).ej2Instances.value = index;
            }
      }
  }
  
});
</script>
