<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' :allowPaging='true' childMapping='subtasks' :treeColumnIndex='1' :pageSettings='pageSettings' :allowReordering='true' :actionComplete='actionComplete' >
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='80' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190'></e-column>
                <e-column field='startDate' headerText='Start Date' width='100' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td style="width: 30%">
                        <div>Column</div>
                    </td>
                    <td style="width: 70%;padding-top:7px; padding-left: 10px;">
                        <ejs-dropdownlist ref='columns' width='100px' id='columns' :dataSource='columnsdata' value='taskID' :fields='colfields' :change="onColChange"></ejs-dropdownlist>                      
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
    </div>
   <div id="action-description">
    <p>This sample demonstrates reordering feature of the TreeGrid columns. Select column name and index from properties panel to reorder the columns. 
       You can also reorder columns by simply drag and drop in the desired column position.
    </p>
</div>
<div id="description">
    <p>Reordering can be enabled by setting <code>allowReordering</code> property as true. 
       Reordering can be done by drag and drop the column header from one index to another index within the TreeGrid.</p>
    <p>The location in which the column to be placed, will be indicated by two arrows symbols.</p>
    <p>In this demo, you can either reorder columns by drag and drop or by selecting column name and column index from the dropdown to reorder the columns.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        TreeGrid features are segregated into individual feature-wise modules. 
        To use reordering feature, we need to inject <code>Reorder</code> module into the <code>provide</code> section.
    </p>
    <p>
        More information about Column Reorder can be found in this documentation section.
    </p>
</div>
  </div>
  
  </template>

  <script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page, Reorder, TreeGridComponent, Column } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs, DropDownListComponent} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";
import { ActionEventArgs } from "@syncfusion/ej2-grids"

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      pageSettings: { pageSize: 10 },
      columnsdata: [
        { Id: 'taskID', type: 'Task ID' },
        { Id: 'taskName', type: 'Task Name' },
        { Id: 'startDate', type: 'Start Date' },
        { Id: 'duration', type: 'Duration' },
        { Id: 'progress', type: 'Progress' }
      ],
      colfields: { text: 'type', value: 'Id' },
      indexdata: [
         { id: 0, name: 1 },
        { id: 1, name: 2 },
        { id: 2, name: 3 },
        { id: 3, name: 4 },
        { id: 4, name: 5 }],
      indexfields: { text: 'name', value: 'id' }
    };
  },
  provide: {
      treegrid: [ Page, Reorder ]
    },
   methods:{
       onColChange: function(e: ChangeEventArgs): void {
        let index = (<TreeGridComponent>this.$refs.treegrid).getColumnIndexByField(<string>e.value);
        var dropdownlistObject = (<DropDownListComponent>this.$refs.index).ej2Instances;
        dropdownlistObject.value = index;
       },
       onChange: function(e: ChangeEventArgs): void {
        let columnName = (<DropDownListComponent>this.$refs.columns).ej2Instances.value;
        let columns = (<TreeGridComponent>this.$refs.treegrid).getColumns() as any;
        let index: number = <number>e.value;
        (<TreeGridComponent>this.$refs.treegrid).reorderColumns(columnName, columns[index].field);
      },
      actionComplete: function(e: ActionEventArgs) {
           if (e.requestType === 'reorder') {
                let columnName = (<DropDownListComponent>this.$refs.columns).ej2Instances.value;
                let index = (<TreeGridComponent>this.$refs.treegrid).getColumnIndexByField(columnName);
                (<DropDownListComponent>this.$refs.index).ej2Instances.value = index;
            }
      }
  }

});
</script>