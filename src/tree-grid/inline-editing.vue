<template>
<div class="control-section">
      <div class="control-section">
           <ejs-treegrid id='editTreegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :selectedRowIndex=2 height='380' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
               <e-column field='taskName' headerText='Task Name' width='190'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
               <e-column field='startDate' headerText='Start Date' width='110' format="yMd"  editType='datepickeredit' textAlign='Right' :edit='editdataparam' :validationRules='startdaterules'></e-column>
               <e-column field='endDate' headerText='End Date' width='110' format="yMd"  editType='datepickeredit' textAlign='Right' :edit='editdataparam' :validationRules='startdaterules'></e-column>
               <e-column field='duration' headerText='Duration' width='140' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules' type= 'number'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      
    <div id="action-description">
    <p>
        This sample demonstrates CRUD operations in Tree Grid. You can perform CRUD operations as follows,
    </p>
    <ul>
        <li><code>Add </code> - To add new record, click Add toolbar button.</li>
        <li><code>Edit</code> - To edit record, double click a row or click toolbar Edit button after selected a row.</li>
        <li><code>Delete</code> - To delete record, click toolbar Delete button after selected a row.</li>
        <li><code>Update, Cancel</code> - You can save or discard changes by click toolbar Update and Cancel button respectively.</li>
        <li><code>Indent</code> - Indents the record to one level of hierarchy.</li>
        <li><code>Outdent</code> - Outdent the record to one level of hierarchy.</li>
    </ul>
</div>
<div id="description">
    <p>
        The Tree Grid supports CRUD operations. This CRUD operations can be configured in Tree Grid using <code>editSettings</code>. Also, it has different modes to manipulate the datasource.
    </p>
    <p>
        The available modes are,
    </p>
    <ul>
        <li><code>Row </code></li>
        <li><code>Cell</code></li>
        <li><code>Batch</code></li>
        <li><code>Dialog</code></li>
    </ul>
    <p>
        In this demo, Row mode is enabled for editing. You can start editing any row by double clicking on it or clicking on toolbar’s Edit button, then the currently selected row will be changed to edited state. You can change the row values and save edited data to the datasource.
    </p>
    
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
        <code>
        Edit
        </code> module into the <code>provide</code> section.
        To use indent and outdent feature, we need to inject
        <code>
        RowDD
        </code> module into the <code>provide</code> section.
    </p>
    <p>
    <br/> More information about Edit Modes can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/editing/row-editing">documentation section</a>.
    </p>
    <p>
        Looking for the full Vue Tree Grid component overview, features, pricing, and documentation? Visit our <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-tree-grid">Vue Tree Grid component</a> page.
    </p>
</div>
</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Edit, Page, Toolbar, RowDD } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
  },  
  data: () => {
    return {
      data: sampleData.slice(0),
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Row' },
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: ['M/d/yyyy', 'Please enter a valid date']},
      editdataparam : { params: { format:'M/d/yyyy'}},
      enddaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
      toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Indent', 'Outdent'],
  };
  },
   provide : {
      treegrid: [Edit, Page, Toolbar, RowDD]
    },
}
</script>