<template>
	<div class="col-lg-12 control-section">
		<div id="action-description">
			<p>This sample demonstrates the Row Number feature in the Data Grid, which automatically displays sequential
				row numbers in a dedicated column. It provides a simple way to identify the position of records in the
				current grid view.</p>
		</div>
		<div class="content-wrapper">
			<ejs-grid id="Grid" ref="grid" :dataSource="data" :allowSorting="true" :allowFiltering="true"
				:allowPdfExport="true" :allowExcelExport="true" :enableVirtualization="true"
				:filterSettings="filterSettings" :toolbar="toolbar"
				:toolbarClick="toolbarClick" :editSettings="editSettings" :height="365" :actionBegin="actionBegin"
				:load="load" :rowHeight="45">
				<e-columns>
					<e-column type="rowNumber" textAlign="Center"></e-column>
					<e-column field="ProductID" headerText="Product ID" width="120" :visible="false" textAlign="Right"
						:isPrimaryKey="true" type="number"></e-column>
					<e-column field="ProductName" headerText="Products" width="160" :allowEditing="false"
						:validationRules="requiredRule"></e-column>
					<e-column field="Category" headerText="Category" width="140"
						:allowEditing="false" :validationRules="requiredRule"></e-column>
					<e-column field="SellingPrice" headerText="Price" width="130" format="C" textAlign="Right"
						editType="numericedit" :validationRules="priceRule" :filter="menuFilter"
						:edit="numericEdit"></e-column>
					<e-column field="AvailableStock" headerText="In-Stock" width="120" textAlign="Right"
						:template="'availableStockTemplate'" editType="numericedit" :validationRules="priceRule"
						:filter="menuFilter" :edit="numericEdit"></e-column>
					<e-column field="SoldStock" headerText="Sold" width="120" textAlign="Right"
						:template="'soldStockTemplate'" editType="numericedit" :validationRules="priceRule"
						:filter="menuFilter" :edit="numericEdit"></e-column>
				</e-columns>

				<template v-slot:availableStockTemplate="{ data }">
					<span>{{ data.AvailableStock }} {{ data.Unit }}</span>
				</template>
				<template v-slot:soldStockTemplate="{ data }">
					<span>{{ data.SoldStock }} {{ data.Unit }}</span>
				</template>
			</ejs-grid>
		</div>
		<div id="description">
			<p>
				In this demo, the row number column is enabled by setting the <code>columns->type</code> property to
				<code>RowNumber</code>. The grid automatically generates and maintains row numbers for all displayed
				records,
				updating them appropriately during operations such as paging, sorting, filtering and grouping.
			</p>
			<p>
				More information on row numbers can be found in this
				<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/row">
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
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, Edit, Toolbar, VirtualScroll, PdfExport, ExcelExport, LoadEventArgs } from '@syncfusion/ej2-vue-grids';
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { groceryProducts } from './data-source';

export default {
	components: {
		'ejs-grid': GridComponent,
		'e-columns': ColumnsDirective,
		'e-column': ColumnDirective
	},
	data: () => ({
		data: groceryProducts.slice(),
		filterSettings: { type: 'CheckBox' },
		pageSettings: { pageSize: 50 },
		toolbar: ['Delete', 'Update', 'Cancel', 'ExcelExport', 'PdfExport'],
		editSettings: { allowEditing: true, allowDeleting: true, mode: 'Cell' },
		requiredRule: { required: true },
		priceRule: { required: true, min: 0 },
		menuFilter: { type: 'Menu' },
		numericEdit: { params: { showSpinButton: false } }
	}),
	methods: {
		toolbarClick(args: ClickEventArgs) {
			const grid = (this as any).$refs.grid;
			if (args.item.id === 'Grid_excelexport') {
				grid.excelExport();
			} else if (args.item.id === 'Grid_pdfexport') {
				grid.pdfExport();
			}
		},
		actionBegin(args: any) {
			if (args.requestType === 'save' && args.action === 'add') {
				if (args.data.Category === 'Beverages' || args.data.Category === 'Dairy Products') {
					args.data.Unit = 'Litre';
				} else if (args.data.Category === 'Fruits' || args.data.Category === 'Vegetables' || args.data.Category === 'Nuts' || args.data.Category === 'Rices') {
					args.data.Unit = 'Kg';
				} else {
					args.data.Unit = 'Pack';
				}
			}
		},
		load(args: LoadEventArgs) {
			if (((this as any).$refs.grid).ej2Instances.enableVirtualization) {
				args.enableSeamlessScrolling = true;
			}
		}
	},
	provide: {
		grid: [Sort, Filter, Edit, Toolbar, VirtualScroll, PdfExport, ExcelExport]
	}
};
</script>
