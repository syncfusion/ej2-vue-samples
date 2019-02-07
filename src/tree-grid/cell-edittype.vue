<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='380' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
               <e-column field='taskName' headerText='Task Name' width='180'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
               <e-column field='startDate' headerText='Start Date' width='180' :format="format" :edit='dateparams'  editType='datetimepickeredit' textAlign='Right' :validationRules='startdaterules'></e-column>
               <e-column field='duration' headerText='Duration' width='80' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules'></e-column>
               <e-column field='progress' headerText='Progress' width='85' textAlign='Right' :edit='editparams'  editType= 'numericedit' :validationRules='progressrules'></e-column>
               <e-column field='approved' headerText='Approved' width='80' textAlign='Right'  editType= 'booleanedit' :displayAsCheckBox='true'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates the supported cell edit types of TreeGrid columns. The list of cell edit types are as follows,
        </p>
        <ul>
            <li><code>NumericTextBox</code> component for integers, double, and decimal data types.</li>
            <li><code>TextBox</code> component for string data type.</li>
            <li><code>DropDownList</code> component for list data type.</li>
            <li><code>DatePicker</code> component for date data type.</li>
            <li><code>DateTimePicker</code> component for dateTime data type.</li>
            <li><code>Checkbox</code> component for boolean data type</li>
        </ul>
    </div>
    <div id="description">
        <p>
            The <code>columns.editType</code>  is used to customize the edit type of the particular column. You can set the columns.editType based on data type of the column.
        </p>
        <p>
            In this sample, we show the following editTypes for the TreeGrid columns
        </p>
        <ul>
            <li><code>NumericTextBox</code></li>
            <li><code>TextBox</code></li>
            <li><code>DropDownList</code></li>
            <li><code>DatePicker</code></li>
            <li><code>DateTimePicker</code></li>
            <li><code>Checkbox</code></li>
        </ul>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            TreeGrid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
            <code>
            Edit
            </code> module into the <code>provide</code> section.
        </p>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Edit, Page, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default  Vue.extend({
  data: () => {
    return {
      data: sampleData,
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Row' },
      editparams : { params: { format: 'n' } },
      dateparams: { params: { format: 'M/d/y hh:mm a' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: true},
      enddaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
      format: {format: 'M/d/y hh:mm a', type: 'dateTime'},
      toolbar: ['Add', 'Edit', 'Delete','Update','Cancel'],
     
  };
  },
   provide : {
      treegrid: [Edit, Page]
    },
});
</script>