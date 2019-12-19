<template>
<div class="control-section">
      <div class="col-md-9 control-section">
           <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='380' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
               <e-column field='taskName' headerText='Task Name' width='190'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
               <e-column field='startDate' headerText='Start Date' width='110' format="yMd"  editType='datepickeredit' textAlign='Right' :validationRules='startdaterules'></e-column>
               <e-column field='duration' headerText='Duration' width='90' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules' type= 'number'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td style="width: 70%">
                        <div>Edit Mode</div>
                    </td>
                    <td style="width: 70%;padding-left: 10px">
                        <ejs-dropdownlist ref='ddl' width='105px' id='ddlelement' :dataSource='ddldata' value='Cell' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div id="action-description">
    <p>
        This sample demonstrates CRUD operations in TreeGrid. You can perform CRUD operations as follows,
    </p>
    <ul>
        <li><code>Add </code> - To add new record, click Add toolbar button.</li>
        <li><code>Edit</code> - To edit record, double click a row or click toolbar Edit button after selected a row.</li>
        <li><code>Delete</code> - To delete record, click toolbar Delete button after selected a row.</li>
        <li><code>Update, Cancel</code> - You can save or discard changes by click toolbar Update and Cancel button respectively.</li>
    </ul>
    <p>
        Also select the edit mode as Cell or Row from property panel to change the mode of editing.
    </p>
</div>
<div id="description">
    <p>
        The TreeGrid supports CRUD operations. This CRUD operations can be configured in TreeGrid using <code>editSettings</code>. Also, it has different modes to manipulate the datasource.
    </p>
    <p>
        The available modes are,
    </p>
    <ul>
        <li><code>Row </code></li>
        <li><code>Cell</code></li>
        <li><code>Dialog</code></li>
    </ul>
    <p>
        In this demo, Row mode is enabled for editing by default. You can start editing any row by double clicking on it or clicking on toolbar’s Edit button, then the currently selected row will be changed to edited state. You can change the row values and save edited data to the datasource.
    </p>
    <p>
        We have also provided an option in property panel to select the edit mode as Cell or Row to change <code>mode</code> of editing.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        TreeGrid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
        <code>
        Edit
        </code> module into the <code>provide</code> section.
    </p>
    <p>
    <br/> More information about Edit Modes can be found in this documentation section.
    </p>
</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Edit, Page, Toolbar, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin, DropDownListPlugin);

export default  Vue.extend({
  data: () => {
    return {
      data: sampleData,
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Cell' },
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: true},
      enddaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
      toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
       ddldata: [
        { Id: 'Row', type: 'Row Editing' },
        { Id: 'Cell', type: 'Cell Editing' }
       ],
      ddlfields: { text: 'type', value: 'Id' }
  };
  },
   provide : {
      treegrid: [Edit, Page, Toolbar]
    },
     methods:{
       onChange: function(e: ChangeEventArgs): void {
           if(e.value === 'Row'){
               this.editSettings = { allowDeleting: true, allowEditing: true, allowAdding: true, mode: <any>e.value };
               this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
           } else {
               this.editSettings = { allowDeleting: true, allowEditing: true, allowAdding: true, mode: <any>e.value };
               this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
           }       
     }
    }
});
</script>