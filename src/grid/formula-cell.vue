<template>
	<div class="col-lg-12 control-section">
		<div class="content-wrapper">
			<ejs-grid id="FormulaCellGrid" :dataSource="data" :editSettings="editSettings" :enableAutoFill="true"
				clipMode="EllipsisWithTooltip" :selectionSettings="selectionSettings" :height="400">
				<e-columns>
					<e-column field="OrderID" headerText="Order ID" width="100" :isPrimaryKey="true" textAlign="Right"
						:validationRules="requiredRule"></e-column>
					<e-column field="ProductName" headerText="Product Name" width="200" :validationRules="requiredRule"
						:allowEditing="false"></e-column>
					<e-column field="Category" headerText="Category" width="130" :allowEditing="false"></e-column>
					<e-column field="Quantity" headerText="Quantity" width="120" textAlign="Right"
						editType="numericedit" :edit="numericEdit"></e-column>
					<e-column field="PricePerUnit" headerText="Price Per Unit" width="140" textAlign="Right"
						editType="numericedit" format="C2" :edit="numericEdit"></e-column>
					<e-column field="GrossAmount" headerText="Gross Amount" width="150" textAlign="Right"
						:allowFormula="true" format="C2"></e-column>
					<e-column field="TaxAmount" headerText="Tax Amount" width="130" textAlign="Right"
						:allowFormula="true" format="C2" :allowEditing="false"></e-column>
					<e-column field="TotalAmount" headerText="Total Amount" width="150" textAlign="Right"
						:allowFormula="true" format="C2"></e-column>
				</e-columns>
			</ejs-grid>
		</div>
		<div id="action-description">
			<p>This sample demonstrates the Formula Cell feature in the Data Grid, which brings spreadsheet-like
				calculations directly into grid cells. It enables formulas to be dynamically defined and evaluated based
				on the values of other cells within the same row.</p>
		</div>
		<div id="description">
			<p>
				In this demo, formulas are configured directly in the data source and are automatically evaluated during
				the initial rendering of the grid. Whenever the values of dependent cells change, the calculated fields
				are instantly recalculated and updated. Formula calculations are enabled for the Gross Amount, Tax
				Amount, and Total Amount columns by setting the <code>allowFormula</code> property to <code>true</code>.
				Double-click a cell to edit its value and recalculate formulas automatically.</p>
			<p>
				The formulas used are:
			</p>
			<ul>
				<li><b>Gross Amount</b> = Quantity × Price Per Unit</li>
				<li><b>Tax Amount</b> = Gross Amount × 0.07</li>
				<li><b>Total Amount</b> = Gross Amount + Tax Amount</li>
			</ul>
			<p>
				When the "Quantity" or "Price Per Unit" values are modified, the Data Grid automatically recalculates
				the related formula-driven columns, ensuring that all computed values remain accurate and synchronized
				in real time.
			</p>
			<p><strong>Injecting Module:</strong></p>
			<p>
				The Grid component organizes its features into separate, feature-specific modules. To enable the Formula
				Cell feature, inject the <code>Formula</code>and <code>Edit</code> module into the services collection.
			</p>
			<p>
				More information on formula cells can be found in <a target="_blank"
					href="https://ej2.syncfusion.com/vue/documentation/grid/editing">
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
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Edit, Formula } from '@syncfusion/ej2-vue-grids';
import { formulaData } from './data-source';

export default {
	components: {
		'ejs-grid': GridComponent,
		'e-columns': ColumnsDirective,
		'e-column': ColumnDirective
	},
	data: () => ({
		data: formulaData.slice(),
		editSettings: { allowEditing: true, mode: 'Cell' },
		selectionSettings: { mode: 'Cell', cellSelectionMode: 'Box', type: 'Multiple' },
		requiredRule: { required: true },
		categoryEdit: { params: { dataSource: ['Beverages', 'Confections', 'Dairy Products', 'Grains/Cereals', 'Meat/Poultry', 'Produce', 'Seafood'], popupHeight: '300px' } },
		numericEdit: { params: { showSpinButton: false } }
	}),
	provide: {
		grid: [Selection, Edit, Formula]
	}
};
</script>
