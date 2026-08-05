<template>
<div class="col-lg-12 control-section">
<div id="action-description">
	<p>
		This sample demonstrates a product catalog built using the Syncfusion® Vue Data Grid with column templates and a detail template. Each row displays product information through customized templates, including product details, sales trends, pricing, and stock status.
	</p>
</div>
	<div class="content-wrapper">
		<ejs-grid id="Detail-Grid" :dataSource="productData" height="520" allowSorting="true" allowFiltering="true" :filterSettings="filterSettings" :detailTemplate="'detailTemplate'">
			<e-columns>
				<e-column field="ProductID" headerText="ID" width="90" :isPrimaryKey="true"></e-column>
				<e-column field="ProductName" headerText="Product" width="190" :template="'productTemplate'" textAlign="Center"></e-column>
				<e-column field="Category" headerText="Category" width="160" textAlign="Center"></e-column>
				<e-column field="Sales" headerText="Sales" width="120" :template="'salesTemplate'" textAlign="Center"></e-column>
				<e-column field="Price" headerText="Price" width="120" format="C2" textAlign="Right" ></e-column>
				
				<e-column field="Status" headerText="Status" width="140" :template="'statusTemplate'" textAlign="Center"></e-column>
			</e-columns>

			<template v-slot:productTemplate="{ data }">
				<div class="product-cell">
					<img :src="getProductImage(data)" :alt="data.ProductName" class="product-image" />
					<div class="product-copy">
						<strong class="product-name" >{{ data.ProductName }}</strong>
						<div class="product-meta">
							<div class="product-description">{{ data.Description }}</div>
							<div class="product-sku">SKU: {{ data.SKU }}</div>
						</div>
					</div>
				</div>
			</template>

			<template v-slot:salesTemplate="{ data }">
				<div class="sales-cell">
					<div class="sales-number">{{ data.Sales }}</div>
					<div class="sales-growth" :class="{ positive: getTrend(data) >= 0, negative: getTrend(data) < 0 }">
						<span class="trend-icon">{{ getTrend(data) >= 0 ? '↑' : '↓' }}</span>
						<span class="trend-value">{{ Math.abs(getTrend(data)).toFixed(1) }}%</span>
					</div>
				</div>
			</template>

			<template v-slot:statusTemplate="{ data }">
				<div class="status-cell">
					<span :class="['status-badge', data.Status === 'In Stock' ? 'status-badge-success' : 'status-badge-error']">
						{{ data.Status }}
					</span>
					<div class="status-units">{{ data.Units }} units</div>
				</div>
			</template>

			<template v-slot:detailTemplate="{ data }">
				<div class="detail-page">
					<div class="detail-top">
						<div class="product-detail-wrapper">
							<div class="detail-grid">
								<div class="e-card">
									<div class="sub-title">Product Description</div>
									<div class="product-description-text">{{ data.ProductDescription }}</div>
									<div class="highlight-title">Key Highlights</div>
									<ul class="highlight-list">
										<li v-for="(h, idx) in (data.Highlights || [])" :key="idx">
											<div class="bullet"></div>
											<div>{{ h }}</div>
										</li>
									</ul>
								</div>

								<div class="e-card">
									<div class="sub-title">Technical Specifications</div>
									<div class="info-row" v-for="(val, key) in data.Specifications" :key="key">
										<span>{{ key }}</span>
										<span class="spec-value">{{ val }}</span>
									</div>
								</div>

								<div class="e-card pricing-card">
									<div class="sub-title">Pricing Details</div>
									<div class="info-row">
										<span>Current Price</span>
										<span class="current-price">{{ formatCurrency(data.Price) }}</span>
									</div>
									<div class="info-row" v-if="data.OriginalPrice">
										<span>Original Price</span>
										<span class="original-price">{{ formatCurrency(data.OriginalPrice) }}</span>
									</div>
									<div class="info-row">
										<span>Discount</span>
										<span :class="{'discount-price': getDiscount(data) > 0}">{{ getDiscount(data) }}%</span>
									</div>
									<div class="info-row">
											<span >Cost Price</span>
											<span class="cost-price">{{ formatCurrency(data.CostPrice) }}</span>
									</div>
									<div class="info-row">
											<span>Profit Margin</span>
											<span class="profit-margin">{{ data.ProfitMargin || formatProfitMargin(data) }}</span>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</template>

		</ejs-grid>
	</div>

	<div id="description">
	<p>
		The Syncfusion® Vue Data Grid demonstrates the use of detail and column templates to display product inventory. Custom templates are applied to columns such as "Product", "Sales", and "Status".
	</p>
	<p>
		Rows can be expanded to display a detail section using the Syncfusion® Card layout. This section presents product information including detailed descriptions, specifications, and pricing details.
	</p>
	<p>
		<strong>Injecting Module:</strong>
	</p>
	<p>
		Features of the Grid component are segregated into individual feature-wise modules. To use the detail row feature, inject the <code>DetailRow</code> module into the <code>provide</code> section.
	</p>
	<p>
		More information on the detail template can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/row/detail-template">documentation section</a>.
	</p>
	<p>
		Looking for the full Vue Data Grid component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-data-grid">Vue Data Grid component</a> page.
	</p>
</div>
</div>
</template>

<script lang="ts">
import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow, Sort, Filter } from '@syncfusion/ej2-vue-grids';
import { productDetail } from './data-source';

export default {
components: {
	'ejs-grid': GridComponent,
	'e-columns': ColumnsDirective,
	'e-column': ColumnDirective,
},
data() {
	return {
		productData: productDetail,
		filterSettings: { type: 'Excel' },
	};
},
	methods: {
		getTrend(item: any) {
			const prev = item.SalesMonth2 || 1;
			const trend = ((item.Sales - prev) / Math.max(prev, 1)) * 100;
			return parseFloat(trend.toFixed(1));
		},
		getDiscount(item: any) {
			if (!item.OriginalPrice || !item.Price) return 0;
			return Math.round(((item.OriginalPrice - item.Price) / item.OriginalPrice) * 100);
		},
		formatCurrency(val: number) {
			if (val == null) return '';
			try {
				return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
			} catch (e) {
				return '$' + val;
			}
		},
		formatProfitMargin(item: any) {
			if (!item.OriginalPrice || item.OriginalPrice === 0 || item.CostPrice == null) return '0%';
			const margin = Math.round(((item.OriginalPrice - item.CostPrice) / item.OriginalPrice) * 100);
			return `${margin}%`;
		},
	getProductImage(data: any) {
		const name = data.Image || data.ProductName || '';
		const lower = (name + '').toLowerCase();
		if (lower.indexOf('mac') !== -1 || lower.indexOf('macbook') !== -1 || lower.indexOf('laptop') !== -1) return 'src/images/products/MacBook Pro 14.png';
		if (lower.indexOf('iphone') !== -1) return 'src/images/products/iPhone 15 Pro Max.png';
		if (lower.indexOf('samsung') !== -1 || lower.indexOf('galaxy') !== -1) return 'src/images/products/Galaxy S24 Ultra.png';
		if (lower.indexOf('sony') !== -1) return 'src/images/products/Sony WH-1000XM5.png';
		if (lower.indexOf('air') !== -1 || lower.indexOf('head') !== -1 || lower.indexOf('ear') !== -1) return 'src/images/products/AirPods Pro.png';
		if (lower.indexOf('watch') !== -1) return 'src/images/products/Apple Watch Series 9.png';
		if (lower.indexOf('tablet') !== -1 || lower.indexOf('ipad') !== -1) return 'src/images/products/iPad Air 5th Gen.png';
		if (lower.indexOf('monitor') !== -1 || lower.indexOf('lg') !== -1) return 'src/images/products/LG UltraGear 27.png';
		if (lower.indexOf('keyboard') !== -1) return 'src/images/products/Magic Keyboard.png';
		if (lower.indexOf('nintendo') !== -1 || lower.indexOf('switch') !== -1) return 'src/images/products/Nintendo Switch.png';
		return 'src/images/products/MacBook Pro 14.png';
	}
},
provide: {
	grid: [DetailRow, Sort, Filter]
}
};
</script>

<style scoped>
#Detail-Grid .product-cell {
display: flex;
align-items: center;
gap: 14px;
padding: 12px 0;
height: 100%;
text-align: left;
}

#Detail-Grid .product-image {
width: 52px;
height: 52px;
border-radius: 8px;
object-fit: cover;
border: 1px solid rgba(229, 231, 235, 0.9);
background: #f8fafc;
flex-shrink: 0;
transition: transform 0.25s ease;
}

#Detail-Grid .product-image:hover { transform: scale(1.04); }

#Detail-Grid .product-copy { display: flex; flex-direction: column; gap: 2px; min-width: 0; text-align: left; }

#Detail-Grid .product-name { line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

#Detail-Grid .product-meta { display: flex; flex-direction: column; gap: 1px; color: #6b7280; line-height: 1.3; }

#Detail-Grid .product-description, #Detail-Grid .product-sku { display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

#Detail-Grid .product-description { color: #6B7280; font-size:10px}
#Detail-Grid .product-sku { color: #6B7280; font-size:10px }

#Detail-Grid .sales-cell { display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 10px; }
#Detail-Grid .sales-number { margin-right: 6px; }
#Detail-Grid .sales-growth { white-space: nowrap; line-height: 1; display:flex; align-items:center; gap:6px; }
#Detail-Grid .trend-icon { line-height: 1; display:inline-block; transform: translateY(-1px); }
#Detail-Grid .sales-growth.positive .trend-icon,
#Detail-Grid .sales-growth.positive .trend-value { color: #22c55e; }
#Detail-Grid .sales-growth.negative .trend-icon,
#Detail-Grid .sales-growth.negative .trend-value { color: #ef4444; }

#Detail-Grid .status-cell { display: flex; flex-direction: column; gap: 0.25rem; align-items: center; }
#Detail-Grid .status-units { padding-top: 10px; }

#Detail-Grid .status-badge { display: inline-flex; align-items: center;  height: 20px; border: 1px solid; padding: 16px 14px; border-radius: 12px; }
#Detail-Grid .status-badge-success { background: #F0FDF4; border-color: #BBF7D0; color: #15803D; }
#Detail-Grid .status-badge-error { background: #FEF2F2; border-color: #FECACA; color: #DC2626; }

#Detail-Grid .custom-header { display: flex; align-items: center; gap: 3px; white-space: nowrap; }

#Detail-Grid .detail-page { padding: 12px; }
#Detail-Grid .detail-top { display: grid; gap: 12px; align-items: stretch; }
#Detail-Grid .e-detailrow .e-detailcell { padding: 0 !important; overflow: hidden; }
#Detail-Grid .product-detail-wrapper { padding: 0; }
#Detail-Grid .detail-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; height: 100%; }
#Detail-Grid .detail-grid > .e-card { border-radius: 16px; margin: 0; border: 1px solid rgba(128, 128, 128, 0.18); padding: 10px; box-sizing: border-box; justify-content: normal; }
.material3-dark #Detail-Grid .detail-grid > .e-card,
.bootstrap5_3-dark #Detail-Grid .detail-grid > .e-card,
.fluent2-dark #Detail-Grid .detail-grid > .e-card,
.tailwind3-dark #Detail-Grid .detail-grid > .e-card { border-color: rgba(148, 163, 184, 0.24); background: #0f172a; }
#Detail-Grid .sub-title { margin: 0 0 8px 0; display: block; text-align: left; line-height: 21px; font-weight: 600; }
#Detail-Grid .highlight-title { margin: 8px 0 8px 0; display: block; text-align: left; line-height: 21px; font-weight: 600; }
#Detail-Grid .detail-grid > .e-card .product-description-text,
#Detail-Grid .detail-grid > .e-card .info-row,
#Detail-Grid .detail-grid > .e-card .highlight-list { margin-top: 8px; }
#Detail-Grid .product-description-text { line-height: 2; }
#Detail-Grid .highlight-list { list-style: none; padding: 0; margin: 0; }
#Detail-Grid .highlight-list li { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
#Detail-Grid .bullet { width: 10px; height: 10px; background: #a78bfa; border-radius: 50%; box-shadow: 0 0 0 3px #ede9fe; flex-shrink: 0; }
#Detail-Grid .info-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; padding: 4px 0; border-bottom: 1px solid rgba(128, 128, 128, 0.2); }
.material3-dark #Detail-Grid .info-row,
.bootstrap5_3-dark #Detail-Grid .info-row,
.fluent2-dark #Detail-Grid .info-row,
.tailwind3-dark #Detail-Grid .info-row { border-bottom: 1px solid #333a41; }
#Detail-Grid .info-row:last-child { border-bottom: none; }
#Detail-Grid .info-row span { flex: 0 0 38%; }
#Detail-Grid .info-row strong { flex: 1 1 58%; text-align: right; word-break: break-word; }

#Detail-Grid .spec-value { flex: 1 1 58%; text-align: right; word-break: break-word; }
#Detail-Grid .current-price { color: #4338ca; }
#Detail-Grid .original-price {  text-decoration: line-through; }
#Detail-Grid .discount-price { color: #dc2626; }
#Detail-Grid .profit-margin { color: #16a34a; }
#Detail-Grid .pricing-card {  border: 1px solid rgba(15, 23, 42, 0.08); box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06); }
.material3-dark #Detail-Grid .pricing-card,
.bootstrap5_3-dark #Detail-Grid .pricing-card,
.fluent2-dark #Detail-Grid .pricing-card,
.tailwind3-dark #Detail-Grid .pricing-card,
.fluent2-highcontrast #Detail-Grid .pricing-card,
.highcontrast #Detail-Grid .pricing-card { background: #0f172a; border-color: rgba(148, 163, 184, 0.24); box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12); }
#Detail-Grid .pricing-card .sub-title {  margin-bottom: 12px; }
.material3-dark #Detail-Grid .pricing-card .sub-title,
.bootstrap5_3-dark #Detail-Grid .pricing-card .sub-title,
.fluent2-dark #Detail-Grid .pricing-card .sub-title,
.tailwind3-dark #Detail-Grid .pricing-card .sub-title,
.fluent2-highcontrast #Detail-Grid .pricing-card .sub-title,
.highcontrast #Detail-Grid .pricing-card .sub-title { color: #f8fafc; }
#Detail-Grid .pricing-card .info-row { padding: 4px 0; }
.material3-dark #Detail-Grid .pricing-card .info-row span,
.bootstrap5_3-dark #Detail-Grid .pricing-card .info-row span,
.fluent2-dark #Detail-Grid .pricing-card .info-row span,
.tailwind3-dark #Detail-Grid .pricing-card .info-row span,
.fluent2-highcontrast #Detail-Grid .pricing-card .info-row span,
.highcontrast #Detail-Grid .pricing-card .info-row span { color: #cbd5e1; }
@media screen and (max-width: 1000px) {
#Detail-Grid .detail-grid { grid-template-columns: 1fr; }
}
#Detail-Grid .info-row .current-price,
#Detail-Grid .info-row .original-price,
#Detail-Grid .info-row .discount-price,
#Detail-Grid .info-row .cost-price,
#Detail-Grid .info-row .profit-margin {

    flex: 1 1 58%;
    text-align: right;  
    word-break: break-word;

}
 
</style>
