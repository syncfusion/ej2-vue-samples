<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the frozen rows and columns at both sides of the Grid. Scroll the movable content vertically/horizontally to view the frozen rows/columns with the content.</p>
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
            <ejs-dropdownlist ref='columns' id='columns' :dataSource='columnNames' value='ShipCountry' :fields='fields' :change="columnChange"></ejs-dropdownlist>
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
        <ejs-grid ref='grid' :dataSource="data" height='410' :enableHover='false' :frozenRows='rows'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='Freight' minWidth='10' width='125' format='C2' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' minWidth='10' width='130' freeze='Right'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='150' format="yMd" textAlign='Right' minWidth='10'></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='300' minWidth='10'></e-column>
                <e-column field='ShipAddress' headerText='Ship Address' width='270' minWidth='10'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='250' minWidth='10'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='250' freeze='Left' minWidth='10'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
<ejs-dialog :buttons='alertDlgButtons' ref="alertDialog" v-bind:visible="false" :header='alertHeader' :animationSettings='animationSettings' :content='alertContent' :showCloseIcon='showCloseIcon' :target='target'
            :width='alertWidth'>
        </ejs-dialog>
     <div id="description">
       <p>
           The freezing feature enables the user to freeze certain rows/columns at both sides to scroll remaining movable content. This can be achieved by setting freeze property in column settings.
        </p>
        <p>
       In this demo sample, the `ShipCountry` column freezed at left side and `CustomerID` column freezed at right side using <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#freeze">column->freeze</a></code> property.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
         Grid component features are segregated into individual feature-wise modules. To use frozen rows and columns feature, we need to inject
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
import { GridPlugin, Freeze, freezeDirection, Column } from "@syncfusion/ej2-vue-grids";
import { Browser } from '@syncfusion/ej2-base';
import { DropDownListPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: function() {
    return {
    refresh : true,
	data: orderDetails,
	rows: 2,
	alertHeader: 'Frozen',
	alertContent: 'Atleast one Column should be in movable',
	showCloseIcon: false,
	target: '.control-section',
	alertWidth: '300px',
	animationSettings: { effect: 'None' },
	alertDlgButtons: [{ click: ((<any>this).alertDlgBtnClick as any), buttonModel: { content: 'OK', isPrimary: true } }],
	columnNames: [
		{ id: 'OrderID', name: 'Order ID' },
		{ id: 'Freight', name: 'Freight' },
		{ id: 'CustomerID', name: 'Customer ID' },
		{ id: 'OrderDate', name: 'Order Date' },
		{ id: 'ShipName', name: 'Ship Name' },
		{ id: 'ShipAddress', name: 'Ship Address' },
		{ id: 'ShipCity', name: 'Ship City' },
		{ id: 'ShipCountry', name: 'Ship Country' }
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
        let column: Column = this.$refs.grid.ej2Instances.getColumnByField(columnName);
        let value: string = column.freeze === undefined ? 'Center' : column.freeze;
        this.refresh = this.$refs.directions.ej2Instances.value === value;
        this.$refs.directions.ej2Instances.value = value;
    },
    directionChange: function(e: ChangeEventArgs): void {
        if (this.refresh) {
        let columnName: string = this.$refs.columns.ej2Instances.value;
        let mvblColumns: Column[] = this.$refs.grid.ej2Instances.getMovableColumns();
        if (mvblColumns.length === 1 && columnName === mvblColumns[0].field && e.value !== mvblColumns[0].freeze) {
            ((<any>this).$refs.alertDialog as any).show();
        } else {
            (this.$refs.grid.ej2Instances.getColumnByField(columnName) as any).freeze = e.value === 'Center' ? undefined : e.value as freezeDirection;
            this.$refs.grid.ej2Instances.refreshColumns();
        }
        }
        this.refresh = true;
    },
    alertDlgBtnClick: function() {
        ((<any>this).$refs.alertDialog as any).ej2Instances.hide();
    }
  },
  provide: {
      grid: [Freeze]
  }
});
</script>