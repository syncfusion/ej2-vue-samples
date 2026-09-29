<template>
	<div class="col-lg-12 control-section">
		<div class="content-wrapper">
			<ejs-grid ref="grid" id="Grid" :dataSource="data" :enableVirtualization="true"
				:allowSorting="true" height="400" :allowAdvancedFiltering="true"
				:toolbar="toolbar" :editSettings="editSettings" :advancedFilterSettings="advancedFilterSettings"
				:actionBegin="actionBegin" :load="load" :rowHeight="45">
				<e-columns>
					<e-column field="TicketID" headerText="Ticket ID" textAlign="Right" width="120"
						:isPrimaryKey="true"></e-column>
					<e-column field="Title" headerText="Title" width="260" :allowEditing='false'></e-column>
					<e-column field="TypeofRequest" headerText="Type" width="150" :allowEditing='false'></e-column>
					<e-column field="Assignee" headerText="Assignee" width="150" editType='dropdownedit'></e-column>
					<e-column field="Priority" headerText="Priority" width="130" editType='dropdownedit'></e-column>
					<e-column field="Status" headerText="Status" width="130" editType='dropdownedit'></e-column>
					<e-column field="CreatedDate" headerText="Created Date" width="140" textAlign="Right" format='yMd'
						:allowEditing='false'></e-column>
					<e-column field="DueDate" headerText="Due Date" width="140" textAlign="Right" format='yMd'
						editType='datepickeredit'></e-column>
				</e-columns>
			</ejs-grid>
		</div>

		<div id="action-description">
			<p>This sample demonstrates the Advanced Filter feature of the Data Grid, providing a Query Builder-based
				interface for creating complex filtering criteria. Users can filter records using multiple conditions
				and combine them with logical operators such as "AND" and "OR" to achieve precise results</p>
		</div>
		<div id="description">
			<p>
				In this demo, the Advanced Filter dialog is opened from the toolbar by enabling the
				<code>allowAdvancedFiltering</code> property and adding <code>AdvancedFilter</code> to the toolbar
				items. The Query Builder interface allows users to filter records by defining conditions and rule
				groups, which are applied to the grid when the "Apply" action is performed.
			</p>

			 <p><strong>Injecting Module:</strong></p>
			<p>
				Grid component features are segregated into individual feature-wise modules. To use the Advanced Filter
				feature, inject the <code>AdvancedFilter</code> module.
			</p>
			<p>
				More information on the filter configuration can be found in this
				<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/filtering.html">
					documentation section</a>.
			</p>
			<p>
				Looking for the full Vue Data Grid component overview, features, pricing, and documentation? Visit our
				<a target="_blank" href="https://www.syncfusion.com/vue-components/vue-data-grid">
					Vue Data Grid component</a> page.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Sort, Edit, Toolbar, VirtualScroll, AdvancedFilter } from '@syncfusion/ej2-vue-grids';
import { ticketdata } from './data-source';

const initialAdvancedFilterRule = {
	condition: 'and',
	rules: [{
		field: 'Status',
		label: 'Status',
		type: 'string',
		operator: 'notequal',
		value: 'done'
	}]
};

export default {
	components: {
		'ejs-grid': GridComponent,
		'e-column': ColumnDirective,
		'e-columns': ColumnsDirective
	},
	data: () => ({
		data: ticketdata,
		toolbar: [ 'Edit', 'Delete', 'AdvancedFilter'],
		editSettings: {allowEditing: true, allowDeleting: true, mode: 'Dialog' },
		pageSettings: { pageSize: 50 },
		advancedFilterSettings: {
			queryBuilderSettings: {
				rule: initialAdvancedFilterRule
			}
		}
	}),
	methods: {
		load(args: any) {
			if (((this as any).$refs.grid).ej2Instances.enableVirtualization) {
				args.enableSeamlessScrolling = true;
			}
		},
		actionBegin(args: any) {
			if (args.requestType === 'beginEdit') {
				for (const cols of (this as any).$refs.grid.ej2Instances.columns) {
					if (cols.field === 'Title' || cols.field === 'TypeofRequest' || cols.field === 'CreatedDate') {
						cols.visible = false;
					}
				}
			}
			else if (args.requestType === 'add') {
				for (const cols of (this as any).$refs.grid.ej2Instances.columns) {
					if (cols.field === 'Title' || cols.field === 'TypeofRequest' || cols.field === 'CreatedDate') {
						cols.visible = false;
					}
				}
			}
			else if (args.requestType === 'save' || args.requestType === 'cancel') {
				for (const cols of (this as any).$refs.grid.ej2Instances.columns) {
					if (cols.field === 'Title' || cols.field === 'TypeofRequest' || cols.field === 'CreatedDate') {
						cols.visible = true;
					}
				}
			}
		}
	},
	provide: {
		grid: [Sort, Edit, Toolbar, VirtualScroll, AdvancedFilter]
	}
};
</script>
