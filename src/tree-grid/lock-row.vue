<template>
<div class="control-section">
      <div class="col-md-9 control-section">
            <ejs-treegrid :dataSource='data' ref='treegrid' :enableHover='false' childMapping='subtasks' :treeColumnIndex='1' :allowPaging= 'true' :editSettings='editSettings' :toolbar='toolbar' :pageSettings='pageSettings' :rowDataBound='rowDataBound' :beginEdit='beginEdit'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' isPrimaryKey='true' textAlign='Right' :validationRules='taskidrules'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190' :validationRules='tasknamerules'></e-column>
                <e-column field='startDate' headerText='Start Date' width='110' editType='datepickeredit' format="yMd" textAlign='Right' :validationRules='daterules'></e-column>
                <e-column field='duration' headerText='Duration' width='90' editType='numericedit' :edit='editparams' textAlign='Right' :validationRules='durationrules'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td style="width: 70%">
                        <div>Disable Rows</div>
                    </td>
                    <td style="width: 70%">
                         <ejs-multiselect ref='rows' width='140px' id='multiselect-checkbox' :dataSource='ddldata' mode='CheckBox' :showDropDownIcon='true' :value='value' :select='onselect' :removed='removed'></ejs-multiselect>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div id="action-description">
    <p>
        This samples demonstrates the way of preventing editing for certain row and disable the locked rows to differentiate edit and non-editable rows in TreeGrid.
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
        In this sample, we have provided an option in property panel to prevent editing for certain rows. Using <code>beginEdit</code>  event of treegrid, we prevent the editing for selected Task ID row in the dropdown and disable the corresponding row using <code>rowDataBound</code> event of TreeGrid.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        TreeGrid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
        <code>
        Edit
        </code> module into the <code>provide</code> method.
    </p>
</div>
</div>
</template>
<style>
    .material .disableRow .e-rowcell{
        color: rgba(0, 0, 0, .38);
    }
</style>
<!-- custom code start -->
<style>
    .fabric .disableRow .e-rowcell{
        color: #c8c8c8;
    }
    .bootstrap .disableRow .e-rowcell{
        color: rgba(0, 0, 0, .35);
    }
    .bootstrap4 .disableRow .e-rowcell{
        color: rgba(0, 0, 0, .35)
    }
    .highcontrast .disableRow .e-rowcell{
        color: #757575;
    }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Edit, Page, Toolbar, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { MultiSelectPlugin, ChangeEventArgs, MultiSelectComponent, CheckBoxSelection, DropDownListPlugin} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData, lockRowDropDownData } from "./data-source";
import { RowDataBoundEventArgs, BeginEditArgs } from '@syncfusion/ej2-vue-grids';
import { addClass, removeClass, getValue } from '@syncfusion/ej2-base';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(MultiSelectPlugin);
Vue.use(CheckBoxPlugin)

export default  Vue.extend({
  data: () => {
    return {
      data: sampleData,
      editSettings: { allowEditing: true, mode: 'Row' },
      pageSettings: {pageSize: 10},
      editparams : { params: { format: 'n' } },
      taskidrules : { required: true , number: true},
      tasknamerules : { required: true},
      daterules : { date: true},
      durationrules : { number: true , min: 0},
      toolbar: ['Edit', 'Update', 'Cancel'],
      ddldata: lockRowDropDownData,
      value: [2,6]
  };
  },
   provide : {
      treegrid: [Edit, Page, Toolbar],
      multiselect: [CheckBoxSelection]
    },
     methods:{
        onselect: function(e: ChangeEventArgs): void {
           (<TreeGridComponent>this.$refs.treegrid).refresh();
        },
        removed: function(e: ChangeEventArgs){
            (<TreeGridComponent>this.$refs.treegrid).refresh();
        },
        rowDataBound: function(args: RowDataBoundEventArgs) {
                let value:Object[] = <Object[]>(<MultiSelectComponent>this.$refs.rows).ej2Instances.value;
                let rowval = getValue('taskID', args.data );
                if (value.indexOf(rowval) !== -1) {
                    addClass([args.row as Element], 'disableRow');
                } else {
                    removeClass([args.row as Element], 'disableRow');
                }
            },
        beginEdit: function(args: BeginEditArgs) {
                let key = 'taskID';
                let value:Object[] = <Object[]>(<MultiSelectComponent>this.$refs.rows).ej2Instances.value;
                debugger;
                let rowval = getValue('taskID', args.rowData);
                if (value.indexOf(rowval) !== -1) {
                    args.cancel = true;
                }
            }        
     }
});
</script>