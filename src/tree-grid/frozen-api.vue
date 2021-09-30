<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the freeze direction feature of the Tree Grid. Scroll the movable content horizontally to view the frozen columns
        with the content.</p>
    </div>  
     <div class="control-section">
     <div class="grid-freezeprop">
            <div class="grid-freezecol">
                <div class="grid-freezecol">
                    <span>
                        Column
                    </span>
                    </div>
                    <div class="grid-freezecol">
            <ejs-dropdownlist ref='columns' id='columns' :dataSource='columnNames' value='taskName' :fields='fields' :change="columnChange"></ejs-dropdownlist>
            </div>
                </div>
            <div class="grid-freezecol">
                <div class="grid-freezecol">
                    <span>
                        Freeze Direction
                    </span>
                    </div>
                    <div class="grid-freezecol">
            <ejs-dropdownlist ref='directions' id='direction' :dataSource='directions' value='Left' :fields='fields' :change="directionChange"></ejs-dropdownlist>
            </div>
                </div>
            </div>
        <ejs-treegrid ref='treegrid' id='treegrid' :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height=410 :enableHover='false'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='100' textAlign='Right' freeze='Left'></e-column>
                <e-column field='taskName' headerText='Task Name' width='250'></e-column>
                <e-column field='startDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='150' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='130' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='130' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' textAlign='Left' width='160'></e-column>
                <e-column field='designation' headerText='Designation' width='190'></e-column>
                <e-column field='employeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                <e-column field='approved' headerText='Approved' width='140' displayAsCheckBox=true textAlign='Left' freeze='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
<ejs-dialog :buttons='alertDlgButtons' ref="alertDialog" v-bind:visible="false" :header='alertHeader' :animationSettings='animationSettings' :content='alertContent' :showCloseIcon='showCloseIcon' :target='target'
            :width='alertWidth'>
        </ejs-dialog>
     <div id="description">
       <p>
The freezing feature enables the user to freeze certain rows/columns at both sides to scroll remaining movable
        content. This can be achieved by setting. This can be achieved by setting freeze property in column settings.        </p>
        <p>
      In this demo sample, the <b>Task ID</b> columns freezed at left side and <b>Approved</b> column freezed at
        right side using <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#freeze">column->freeze</a></code> property.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid component features are segregated into individual feature-wise modules. To use frozen rows and columns feature, we need to inject
         <code>Freeze</code> into the <code>provide</code> section.
    </p>
    </div>

</div>
</template>
<!-- custom code start -->
<style scoped>
 .grid-freezeprop{
   padding-bottom: 5px;
        }
        .grid-freezecol {
            display: inline-block;
            padding-right: 10px;
        }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { freezeDirection, Column } from "@syncfusion/ej2-vue-grids";
import { Browser } from '@syncfusion/ej2-base';
import { DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { TreeGridPlugin, Freeze, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: function() {
    return {
    refresh : true,
	data: sampleData,
	rows: 2,
	alertHeader: 'Frozen',
	alertContent: 'Atleast one Column should be in movable',
	showCloseIcon: false,
	target: '.control-section',
	alertWidth: '300px',
	animationSettings: { effect: 'None' },
	alertDlgButtons: [{ click: ((<any>this).alertDlgBtnClick as any), buttonModel: { content: 'OK', isPrimary: true } }],
	columnNames: [
		{ id: 'taskID', name: 'Task ID' },
		{ id: 'taskName', name: 'Task Name' },
		{ id: 'startDate', name: 'Start Date' },
		{ id: 'endDate', name: 'End Date' },
		{ id: 'duration', name: 'Duration' },
		{ id: 'progress', name: 'Progress' },
		{ id: 'priority', name: 'Priority' },
        { id: 'designation', name: 'Designation' },
        { id: 'employeeID', name: 'Employee ID' },
		{ id: 'approved', name: 'Approved' }
		],
	fields: { text: 'name', value: 'id' },
	directions: [
		{ id: 'Left', name: 'Left' },
		{ id: 'Right', name: 'Right' },
		{ id: 'Center', name: 'Center' }
		],
		};
  },
  methods: {
    columnChange: function(e: ChangeEventArgs): void {
        let columnName: string = <string>e.value;
        let column: Column = this.$refs.treegrid.ej2Instances.grid.getColumnByField(columnName);
        let value: string = column.freeze === undefined ? 'Center' : column.freeze;
        this.refresh = this.$refs.directions.ej2Instances.value === value;
        this.$refs.directions.ej2Instances.value = value;
    },
    directionChange: function(e: ChangeEventArgs): void {
        if (this.refresh) {
        let columnName: string = this.$refs.columns.ej2Instances.value;
        let mvblColumns: Column[] = this.$refs.treegrid.ej2Instances.grid.getMovableColumns();
        if (mvblColumns.length === 1 && columnName === mvblColumns[0].field && e.value !== mvblColumns[0].freeze) {
            ((<any>this).$refs.alertDialog as any).show();
        } else {
            (this.$refs.treegrid.ej2Instances.grid.getColumnByField(columnName) as any).freeze = e.value === 'Center' ? undefined : e.value as freezeDirection;
            this.$refs.treegrid.ej2Instances.grid.refreshColumns();
        }
        }
        this.refresh = true;
    },
    alertDlgBtnClick: function() {
        ((<any>this).$refs.alertDialog as any).ej2Instances.hide();
    }
  },
  provide: {
      treegrid: [Freeze]
  }
});
</script>