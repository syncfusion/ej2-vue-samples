<template>
<div class="col-lg-12 control-section">
      <div >
           <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='380' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
               <e-column field='taskName' headerText='Task Name' width='190'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
               <e-column field='startDate' headerText='Start Date' width='110' format="yMd"  editType='datepickeredit' textAlign='Right' :edit='editdataparam' :validationRules='startdaterules'></e-column>
               <e-column field='duration' headerText='Duration' width='140' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules' type= 'number'></e-column>
               <e-column field='progress' headerText='Progress' width='150' textAlign='Right' :edit='editparams'  editType= 'numericedit' :validationRules='progressrules'></e-column>
               <e-column field='approved' headerText='Approved' width='85' textAlign='Right'  editType= 'booleanedit' :displayAsCheckBox='true'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
   <div id="action-description">
        <p>This sample demonstrates copy to clipboard functionality of the Tree Grid component. Select rows and click Copy
        button from toolbar to copy content. To copy with header click Copy with header button from toolbar.</p>
        </div>
    <div id='description'>
          <p>The Tree Grid supports CRUD operations. This CRUD operations can be configured in Tree Grid using editSettings. Also, it has
            different modes to manipulate the datasource.</p>
          <ul>
            <li><code>Row</code></li>
            <li><code>Cell</code></li>
            <li><code>Dialog</code></li>
            <li><code>Batch</code></li>
          </ul>
          <p>
            In this demo, Batch mode is enabled for editing by defining <code>editSettings.mode</code> as <code>Batch</code> with
             <code>editSettings.newRowPosition</code> as <code>Below</code>.
            You can start editing by double clicking a cell and can change the cell value. The edited cell will be highlighted while
             navigating to a new cell, so that you know which cells had been edited.
            You can bulk save the edited data to the datasource by click on the toolbar's update button.
         </p>
          <p>Injecting Module:</p>
          <p>Tree Grid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
             <code>Edit</code> module into the <code>services</code>.</p>
          <p>
            More information on the selection configuration can be found in this <code><a target="_blank" 
        href="https://ej2.syncfusion.com/vue/documentation/treegrid/edit/#batch">
        documentation section.
        </a></code>
    </p>
</div>
</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Edit, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

export default  {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: sampleData.slice(0),
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Batch', newRowPosition: 'Below' },
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: ['M/d/yyyy', 'Please enter a valid date']},
      editdataparam : { params: { format:'M/d/yyyy'}},
      enddaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
      toolbar: ['Add', 'Delete', 'Update', 'Cancel']
  };
  },
   provide : {
      treegrid: [Edit, Page, Toolbar]
    },
     methods:{
    }
}
</script>