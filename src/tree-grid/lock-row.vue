<template>
<div class="control-section" role="region" aria-label="Tree Grid Control Section">
      <div class="col-md-9 control-section">
            <ejs-treegrid :dataSource='data' ref='treegrid' :height='350' :enableHover='false' childMapping='subtasks' :treeColumnIndex='1' :allowPaging= 'true' :editSettings='editSettings' :toolbar='toolbar' :pageSettings='pageSettings' :rowDataBound='rowDataBound' :beginEdit='beginEdit'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' isPrimaryKey='true' textAlign='Right' :validationRules='taskidrules'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190' :validationRules='tasknamerules'></e-column>
                <e-column field='startDate' headerText='Start Date' width='110' editType='datepickeredit' format="yMd" textAlign='Right' :validationRules='daterules'></e-column>
                <e-column field='duration' headerText='Duration' width='140' editType='numericedit' :edit='editparams' textAlign='Right' :validationRules='durationrules'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section" aria-label="Properties Panel">
            <table id="property" title="Properties" style="width: 100%">
                <tr style="height: 50px">
                    <td style="width: 70%">
                        <div>Disable Rows</div>
                    </td>
                    <td style="width: 70%">
                         <ejs-multiselect ref='rows' width='140px' id='multiselect-checkbox' :dataSource='ddldata' mode='CheckBox' :showDropDownIcon='true' :value='value' :select='onselect' :removed='removed' aria-label="Select Rows to Disable"></ejs-multiselect>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div id="action-description">
    <p>
        This samples demonstrates the way of preventing editing for certain row and disable the locked rows to differentiate edit and non-editable rows in Tree Grid.
    </p>
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
        <li><code>Dialog</code></li>
    </ul>
    <p>
        In this sample, we have provided an option in property panel to prevent editing for certain rows. Using <code>beginEdit</code>  event of Tree Grid, we prevent the editing for selected Task ID row in the dropdown and disable the corresponding row using <code>rowDataBound</code> event of Tree Grid.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid features are segregated into individual feature-wise modules. To use editing feature, we need to inject
        <code>
        Edit
        </code> module into the <code>provide</code> method.
    </p>
</div>
</div>
</template>
<style>
    .material .disableRow .e-rowcell{
        color: rgba(0, 0, 0, .38) !important;
    }
</style>
<!-- custom code start -->
<style>
.fluent2 .disableRow .e-rowcell{
    color: rgba(0, 0, 0, .38) !important;
}
.fluent2-dark .disableRow .e-rowcell{
    color: #757575 !important;
}
.fluent2-highcontrast .disableRow .e-rowcell{
    color: #757575 !important;
}
.material-dark .disableRow .e-rowcell, .fabric-dark .disableRow .e-rowcell,
.bootstrap-dark .disableRow .e-rowcell, .bootstrap5-dark .disableRow .e-rowcell, .highcontrast .disableRow .e-rowcell, 
.tailwind .disableRow .e-rowcell, .tailwind-dark .disableRow .e-rowcell, .fluent-dark .disableRow .e-rowcell, .material3-dark .disableRow .e-rowcell {
    color: #757575 !important;
}
.material3 .disableRow .e-rowcell{
    color: rgba(0, 0, 0, .38) !important;
}
.fabric .disableRow .e-rowcell {
    color: #c8c8c8 !important;
}
.bootstrap .disableRow .e-rowcell, .bootstrap4 .disableRow .e-rowcell, 
.bootstrap5 .disableRow .e-rowcell, .fluent .disableRow .e-rowcell {
    color: rgba(0, 0, 0, .35) !important;
}   
.e-multiselect {
    padding-top: 0px !important;
    padding-left: 0px !important;
}
</style>
<!-- custom code end -->
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Edit, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { MultiSelectComponent, ChangeEventArgs, CheckBoxSelection, DropDownListComponent} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData, lockRowDropDownData } from "./data-source";
import { RowDataBoundEventArgs, BeginEditArgs } from '@syncfusion/ej2-vue-grids';
import { addClass, removeClass, getValue } from '@syncfusion/ej2-base';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-multiselect': MultiSelectComponent
  },  
  data: () => {
    return {
      data: sampleData.slice(0),
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
           ((this as any).$refs.treegrid).refresh();
        },
        removed: function(e: ChangeEventArgs){
            ((this as any).$refs.treegrid).refresh();
        },
        rowDataBound: function(args: RowDataBoundEventArgs) {
                let value:Object[] = <Object[]>((this as any).$refs.rows).ej2Instances.value;
                let rowval = getValue('taskID', args.data );
                if (value.indexOf(rowval) !== -1) {
                    addClass([args.row as Element], 'disableRow');
                } else {
                    removeClass([args.row as Element], 'disableRow');
                }
            },
        beginEdit: function(args: BeginEditArgs) {
                let key = 'taskID';
                let value:Object[] = <Object[]>((this as any).$refs.rows).ej2Instances.value;
                let rowval = getValue('taskID', args.rowData);
                if (value.indexOf(rowval) !== -1) {
                    args.cancel = true;
                }
            }        
     }
}
</script>
