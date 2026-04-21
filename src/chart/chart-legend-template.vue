<template>
	<div class="control-section">
		<div align="center">
			<ejs-chart ref="chartcontainer" id="chartcontainer" :subTitle="subTitle" style="display:block" :theme="theme" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
				:chartArea="chartArea"  :width='width' :tooltip="tooltip" :series='series' :title="title" :legendSettings="legendSettings" :loaded="loaded" :load="load" :legendRender="legendRender" :legendClick="legendClick">
				<e-series-collection>
					<e-series v-for="(s, idx) in series" :key="idx" :dataSource="s.dataSource" type="Column" :xName="s.xName" :yName="s.yName" :name="s.name" :fill="s.fill" :columnSpacing="s.columnSpacing" :animation="s.animation">
					</e-series>
				</e-series-collection>
			</ejs-chart>
		</div>
		<div id="action-description">
			<p>
				This sample demonstrates customizable legend templates using all-time Summer Olympic medal data. It displays Gold, Silver, and Bronze medal counts for five countries — Argentina, Austria,
				Ethiopia, Iran, and India. Each legend entry features a medal icon rendered through a custom
				legend template to enhance visual clarity and data interpretation.
			</p>
		</div>
		<div id="description">
			<p>
				This sample shows how to render and configure a custom legend template in a Column chart.
				The legend items are customized using the
				<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/#template"
					aria-label="Navigate to the documentation for template in LegendSettings in the EJ2 Chart control"><code>template</code></a>
				property of
				<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/legendSettings/"
					aria-label="Navigate to the documentation for LegendSettings in the EJ2 Chart control"><code>legendSettings</code></a>,
				which allows embedding custom HTML content such as medal images and styled text into each legend item.
			</p>
			<p>
				The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/#legendrender"
					aria-label="Navigate to the documentation for legendRender event in EJ2 Chart control"><code>legendRender</code></a>
				event is used to dynamically update the template content for each series — setting the medal icon image and
				label text per series. The
				<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/#legendclick"
					aria-label="Navigate to the documentation for legendClick event in EJ2 Chart control"><code>legendClick</code></a>
				event is used to toggle the opacity of the clicked legend item to visually indicate the hidden series.
			</p>
			<p>
				<code>Tooltip</code> is enabled in this example. To see a tooltip in action, hover over or tap on the chart.
			</p>
			<p><b>Injecting Module</b></p>
			<p>
				Chart component features are segregated into individual feature-wise modules. To use column series, inject the
				<code>ColumnSeries</code>, <code>Category</code>, <code>Tooltip</code>, and <code>Legend</code> modules using
				<code>provide: { chart: [ColumnSeries, Category, Tooltip, Legend] }</code> in the component options.
			</p>
			<p>
				More information on chart legends can be found in the
				<a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/legend"
					aria-label="Navigate to the documentation for Legend in TypeScript Chart control">documentation</a>.
			</p>
		</div>
	</div>
</template>
<script>
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";
import { Browser } from '@syncfusion/ej2-base';
import { loadChartTheme } from "./theme-color";


export default {
	name: 'ChartLegendTemplate',
	components: {
		'ejs-chart': ChartComponent,
		'e-series-collection': SeriesCollectionDirective,
		'e-series': SeriesDirective
	},
	data() {
		const isDevice = Browser.isDevice;
		return {
			Browser: Browser, // Make Browser available to the component instance
			theme: loadChartTheme(),
			title: 'All-Time Summer Olympic Medal Count by Country',
			subTitle: 'Source: Wikipedia.org',
			primaryXAxis: {
				valueType: 'Category',
				labelPlacement: 'OnTicks',
				edgeLabelPlacement: 'Shift',
				majorGridLines: { width: 0 }
			},
			primaryYAxis: {
				interval: 10,
				minimum: 0,
				maximum: 50,
				title: 'Medal Count',
				lineStyle: { width: 0 },
				majorTickLines: { width: 0 }
			},
			chartArea: { border: { width: 0 } },
			tooltip: { enable: true, header: '<b>${point.x}</b>', format: '${series.name} Medals : <b>${point.y}</b>' },
			width: isDevice ? '100%' : '75%',
			MedalData: [
				{ Country: 'Argentina', Gold: 22, Silver: 27, Bronze: 31 },
				{ Country: 'Austria',   Gold: 22, Silver: 35, Bronze: 44 },
				{ Country: 'Ethiopia',  Gold: 24, Silver: 16, Bronze: 22 },
				{ Country: 'Iran',      Gold: 27, Silver: 29, Bronze: 32 },
				{ Country: 'India',     Gold: 10, Silver: 10, Bronze: 21 }
			],
			series: [
				{ dataSource: null, xName: 'Country', yName: 'Gold',   name: 'Gold',   columnSpacing: 0.1, animation: { enable: false } },
				{ dataSource: null, xName: 'Country', yName: 'Silver', name: 'Silver',  columnSpacing: 0.1, animation: { enable: false } },
				{ dataSource: null, xName: 'Country', yName: 'Bronze', name: 'Bronze', columnSpacing: 0.1, animation: { enable: false } }
			],
			legendSettings: {
				visible: true,
				position: 'Right',
				template: '<div style="display:flex;align-items:center;gap:' + (isDevice ? '1px' : '8px') + ';opacity:1;">' +
					'<img src="" width="20" height="20" />' +
					'<span style="font-size:' + (isDevice ? '9px' : '14px') + ';"></span>' +
					'</div>'
			}
		};
	},
	provide: {
		chart: [ColumnSeries, Legend, Category, Tooltip]
	},
	mounted() {
		this.series.forEach(s => { s.dataSource = this.MedalData; });
	},
	methods: {
			legendRender(args) {
				const chart = this.$refs.chartcontainer && this.$refs.chartcontainer.ej2Instances;
				let matchedSeries = chart && chart.series && chart.series.find(function (s) { return s.name === args.text; });
				let opacity = matchedSeries && !matchedSeries.visible ? '0.5' : '1';
				args.template = args.template
					.replace('opacity:1;', 'opacity:' + opacity + ';')
					.replace('src=""', 'src="' + require('./images/' + args.text.toLowerCase() + '-medal.png') + '"')
					.replace('font-size:', 'color:' + args.fill + ';font-weight:bold;font-size:')
					.replace('></span>', '>' + args.text + '</span>');
			},
		load(args) {
			loadChartTheme(args);
		}
	}
};
</script>

<style scoped>

</style>



