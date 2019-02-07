<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowExcelExport='true' :allowPdfExport='true' :allowSorting='true'
        :contextMenuItems="contextMenuItems" :editSettings='editing'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='80' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
               <e-column field='taskName' headerText='Task Name' width='190'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
               <e-column field='startDate' headerText='Start Date' width='105' format="yMd"  editType='datepickeredit' textAlign='Right' :validationRules='startdaterules'></e-column>
               <e-column field='endDate' headerText='End Date' width='105' format="yMd" editType='datepickeredit' textAlign='Right' :validationRules='enddaterules'></e-column>
               <e-column field='duration' headerText='Duration' width='85' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules'></e-column>
               <e-column field='progress' headerText='Progress' width='85' textAlign='Right' :edit='editparams'  editType= 'numericedit' :validationRules='progressrules'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
    <p>This sample demonstrates the usage of context menu in TreeGrid component. Right click anywhere on the Grid to view context
        menu.
    </p>
</div>

<div id="description">
    <p>
        TreeGrid has an option to show the context menu when right click on it. To configure the items in context menu, you should define either default or custom item in <code>contextMenuItems</code> . Each item will be shown based on its target. 
        The default items are 
        <br>
    </p>
    <ul>
            <li><code>Edit</code> - Edit the current record.</li>
            <li><code>Delete</code> - Delete the current record.</li>
            <li><code>Save</code> - Save the edited record.</li>
            <li><code>Cancel</code> - Cancel the edited state.</li>
            <li><code>PdfExport</code> - Export the grid as Pdf format.</li>
            <li><code>ExcelExport</code> - Export the grid as Excel format.</li>
            <li><code>CsvExport</code> - Export the grid as CSV format.</li>
            <li><code>SortAscending</code> - Sort the current column in ascending order.</li>
            <li><code>SortDescending</code> - Sort the current column in descending order.</li>
            <li><code>FirstPage</code> - Go to the first page.</li>
            <li><code>PrevPage</code> - Go to the previous page.</li>
            <li><code>LastPage</code> - Go to the last page.</li>
            <li><code>NextPage</code> - Go to the next page.</li>
            <li><code>Add Row</code>
                <ul>
                    <li><code>Above</code> - Add a new row above the selected row</li>
                    <li><code>Below</code> - Add a new row below the selected row</li>
                </ul>
            </li>
    </ul>
    
    <br/>

    <p>
        In this demo, Context Menu feature has enabled by defining the <code>contextMenuItems</code> property with all default items.
    </p>

    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        TreeGrid features are segregated into individual feature-wise modules. 
        To use context menu feature, we need to inject
        <code>ContextMenu</code> module into the <code>provide</code> section. 
    </p>
</div>


</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, ContextMenu, Sort, Edit, ExcelExport, PdfExport, Page, Resize } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default  Vue.extend({
  data: () => {
    return {
      data: sampleData,
      contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
            'Edit', 'Delete', 'Save', 'Cancel',
            'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
            'LastPage', 'NextPage'],
      editing: { allowDeleting: true, allowEditing: true, mode: 'Row' },
      pageSettings: { pageSize: 10},
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: true},
      enddaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
  };
  },
   provide : {
      treegrid: [ContextMenu, Sort, Edit, ExcelExport, PdfExport, Page, Resize]
    },
   methods:{
      
  }

});
</script>