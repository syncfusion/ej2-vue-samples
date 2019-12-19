<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='380' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='80' textAlign='Right' isPrimaryKey='true' :edit='editparams' :validationRules='taskidrules'></e-column>
               <e-column field='taskName' headerText='Task Name' width='190'  editType= 'stringedit' :validationRules='tasknamerules'></e-column>
               <e-column field='startDate' headerText='Start Date' width='110' format="yMd" :edit='params' textAlign='Right' :validationRules='startdaterules'></e-column>
               <e-column field='duration' headerText='Duration' width='85' textAlign='Right' :edit='editparams' editType='numericedit' :validationRules='durationrules'></e-column>
               <e-column field='progress' headerText='Progress' width='85' textAlign='Right' :edit='editparams'  editType= 'numericedit' :validationRules='progressrules'></e-column>
               <e-column field='approved' headerText='Approved' width='85' textAlign='Right'  editType= 'booleanedit' :displayAsCheckBox='true'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
    <div id="action-description">
        <p>
            This samples demonstrates the TreeGrid Cell Edit template feature. Using Cell Edit Template feature we have rendered the DatePicker component for “<b>Start Date</b>” column.
        </p>
    </div>
    <div id="description">
        <p>
            The cell edit template is used to add a custom component for a particular column by invoking the following functions:
        </p>
        <ul>
            <li><code>create</code> - It is used to create the element at the time of initialization.</li>
            <li><code>write</code> - It is used to create the custom component or assign default value at the time of editing.</li>
            <li><code>read</code> - It is used to read the value from the component at the time of save.</li>
            <li><code>destroy</code> - It is used to destroy the component.</li>
        </ul>
        <p>
            In this demo, we have rendered the DatePicker component for "Start Date” column of TreeGrid using <code>edit</code> property.
        </p>
        <p>
        <br/> More information about Cell Edit template can be found in this documentation section.
        </p>
    </div>
     
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Edit, Page, TreeGridComponent, Column } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { DatePicker } from '@syncfusion/ej2-calendars';
import { sampleData } from "./data-source";
import { getValue } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);

let elem: HTMLElement;
let datePickerObj: DatePicker;

export default  Vue.extend({
  data: () => {
    return {
      data: sampleData,
      editSettings: { allowDeleting: true, allowEditing: true, allowAdding: true, mode: 'Row' },
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      startdaterules : { date: true},
      enddaterules : { date: true},
      durationrules : { number: true , min: 0},
      progressrules : { number: true , min: 0},
      toolbar: ['Add', 'Edit', 'Delete','Cancel'],
      params: {
            create: function() {
                elem = document.createElement('input');
                return elem;
            },
            read: function() {
                return datePickerObj.value;
            },
            destroy: function() {
                datePickerObj.destroy();
            },
            write: function(args: { rowData: Object, column: Column, element: HTMLElement }) {
                let val = getValue('startDate', args.rowData);
                datePickerObj = new DatePicker({
                    value: new Date(val),
                    floatLabelType: 'Never'
                });
                datePickerObj.appendTo(elem);
            }
        }
  };
  },
   provide : {
      treegrid: [Edit, Page]
    },
     methods:{
      
    }
});
</script>