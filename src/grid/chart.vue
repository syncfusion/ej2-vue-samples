<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
	    <p>
            This sample demonstrates how to visualize grid data in a chart using the context menu feature. You will need to enable the
            context menu feature to access this functionality. <code>Right-click</code> on any row,
            select your preferred chart type, and a dialog will appear showing that data as a chart based on your category and series.
        </p>
        </div>
        <div class="content-wrapper">
            <ejs-grid ref='gridInstance' id='GridChart' :dataSource='data' :height="500" gridLines='Both'
                :allowFiltering="true" :filterSettings="filterSettings" :allowSorting="true"
                :allowMultiSorting="true" :allowSelection="true" :selectionSettings="selectionSettings"
                :contextMenuItems="contextMenuItems" :contextMenuClick="contextMenuClick" :created="created" :queryCellInfo="queryCellInfo">
                <e-columns>
                    <e-column type='checkbox' width='50' freeze='Left' textAlign='Center' :customAttributes="{ class: 'grid-chart-checkbox-css' }"></e-column>
                    <e-column field='Product' headerText='Products' width='200' :template="'productTemplate'" freeze='Left'></e-column>
                    <e-column field='Category' headerText='Categories' width='160' :template="'categoryTemplate'"></e-column>
                    <e-column field='Year' headerText='Year' width='140' textAlign='Right'></e-column>
                    <e-column field='Online' headerText='Online' format='C2'
                        textAlign='Right' width='160'></e-column>
                    <e-column field='Retail' headerText='Retail' format='C2'
                        textAlign='Right' width='160'></e-column>
                    <e-column field='ProfitLoss' headerText='Profit/Loss' format='C2'
                        textAlign='Right' width='200'></e-column>
                    <e-column field='UnitsSold' headerText='Units Sold' format='C2'
                        textAlign='Right' width='160'></e-column>
                    <e-column field='Revenue' headerText='Revenue' format='C2'
                        textAlign='Right' width='160' freeze='Right'></e-column>
                </e-columns>
                <template v-slot:productTemplate="{ data }">
                    <div class="e-product-info">
                        <img :src="'src/grid/images/product/' + data.Image + '.png'" :alt="data.Product" />
                        <span>{{ data.Product }}</span>
                    </div>
                </template>
                <template v-slot:categoryTemplate="{ data }">
                    <div class="e-category-info">
                    	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path :d="data.CategoryIcon" fill="black" />
                        </svg>
                        <span>{{ data.Category }}</span>
                    </div>
                </template>
            </ejs-grid>
        </div>

        <div id="description">
            <p>
                The sample supports various chart types - <code>Line</code>, <code>Area</code>, <code>Column</code>,
                <code>Bar</code>, <code>Scatter</code>, <code>Pie</code> and their stacked variations.
                Charts are rendered using the <code>&#64;syncfusion/ej2-grid-chart</code> package's <code>render</code> method,
                which requires category, series and optional chart properties.
            </p>
            <p>
                This example uses categories like 'Product' and 'Year' with series data for 'Online', 'Retail' and
                'Revenue' in the chart visualization.
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, ContextMenu, ContextMenuClickEventArgs, Filter, Sort, Freeze, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-vue-grids';
import { sales } from './data-source';
import { GridChart, CategorySeries, ChartChanges, ChartPopupArgs, UpdateChartArgs } from '@syncfusion/ej2-grid-chart';
import { ChartModel, MarginModel, AccumulationChartModel, ILoadedEventArgs, IAccLoadedEventArgs } from '@syncfusion/ej2-charts';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { loadAccumulationChartTheme, loadChartTheme } from './grid-chart-theme-color';

export default {
    components: {
        'ejs-grid': GridComponent,
        'e-column': ColumnDirective,
        'e-columns': ColumnsDirective
    },
    data: () => {
        return {
            data: sales,
            filterSettings: { type: 'Menu' },
            selectionSettings: { type: 'Multiple' },
            contextMenuItems: ['Bar', 'StackingBar', 'StackingBar100', 'Pie',
                'Column', 'StackingColumn', 'StackingColumn100',
                'Line', 'StackingLine', 'StackingLine100',
                'Area', 'StackingArea', 'StackingArea100',
                'Scatter'
            ],
            gridChart: null 
        }
    },
    methods: {
        queryCellInfo(args: QueryCellInfoEventArgs) {
            if ((args.column as Column).field === 'ProfitLoss') {
                const profitLoss: number | undefined = (args.data as { ProfitLoss?: number }).ProfitLoss;
                if (profitLoss !== undefined) {
                    (args.cell as Element).classList.add(profitLoss < 0 ? 'e-gridchart-sales-loss' : 'e-gridchart-sales-profit');
                }
            }
        },
        updateChartSettings(args: UpdateChartArgs) {
            const chartMargin: MarginModel = args.changes.chart.margin as MarginModel;
            if (!isNullOrUndefined(chartMargin)) {
                const accumulationChartMargin: MarginModel = args.changes.accumulationChart.margin as MarginModel;
                if (chartMargin && chartMargin.top && accumulationChartMargin && accumulationChartMargin.top) {
                    accumulationChartMargin.top = chartMargin.top = chartMargin.top < 20 ? 20 : chartMargin.top > 100 ? 100 : chartMargin.top;
                } else if (chartMargin && chartMargin.bottom && accumulationChartMargin && accumulationChartMargin.bottom) {
                    accumulationChartMargin.bottom = chartMargin.bottom = chartMargin.bottom < 20 ? 20 : chartMargin.bottom > 100 ? 100 : chartMargin.bottom;
                } else if (chartMargin && chartMargin.left && accumulationChartMargin && accumulationChartMargin.left) {
                    accumulationChartMargin.left = chartMargin.left = chartMargin.left < 20 ? 20 : chartMargin.left > 100 ? 100 : chartMargin.left;
                } else if (chartMargin && chartMargin.right && accumulationChartMargin && accumulationChartMargin.right) {
                    accumulationChartMargin.right = chartMargin.right = chartMargin.right < 20 ? 20 : chartMargin.right > 100 ? 100 : chartMargin.right;
                }
            }
        },
        created() {
            var grid = (this as any).$refs.gridInstance.$el.ej2_instances[0];
            (this as any).gridChart = new GridChart({
                enablePropertyPanel: true,
                allowExport: true,
                enableRtl: grid.enableRtl,
                locale: grid.locale,
                updateChartSettings: (this as any).updateChartSettings
            });
        },
        contextMenuClick(args: ContextMenuClickEventArgs) {
            if (args.chartType && args.gridInstance) {
                const chartArgs: ChartPopupArgs = {
                    gridInstance: args.gridInstance,
                    chartType: args.chartType,
                    records: args.records as Object[],
                };
                const chartModel: ChartModel = {
                    primaryXAxis: {
                        valueType: 'Category',
                        labelRotation: 315,
                    },
                    primaryYAxis: {
                        title: 'Sales in amount',
                        titleStyle: { size: '11px' }
                    },
                    load: (args: ILoadedEventArgs) => {
                        loadChartTheme(args);
                    }
                };
                const accumulationChartModel: AccumulationChartModel = {
                    load: (args: IAccLoadedEventArgs) => {
                        loadAccumulationChartTheme(args);
                    }
                };
                chartModel.margin = accumulationChartModel.margin = { top: 20, bottom: 20, right: 20, left: 20 };
                const model: ChartChanges = { chart: chartModel, accumulationChart: accumulationChartModel };
                const categorySeries: CategorySeries = {
                    category: ['Product', 'Year'],
                    series: ['Online', 'Retail', 'Revenue'],
                };
                (this as any).gridChart.render(chartArgs, model, categorySeries);
            }
        },
    },
    provide: {
        grid: [ContextMenu, Filter, Sort, Freeze]
    }
}
</script>

<style>
#GridChart .e-gridcontent .e-product-info,
#GridChart .e-gridcontent .e-category-info {
  display: flex;
  align-items: center;
}

#GridChart .e-gridcontent .e-product-info img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

#GridChart .e-gridcontent .e-product-info span,
#GridChart .e-gridcontent .e-category-info span {
  margin: 0px 10px;
}

#GridChart .e-gridcontent .e-gridchart-sales-loss {
    color: red;
}

#GridChart .e-gridcontent .e-gridchart-sales-profit {
    color: green;
}

.material3-dark #GridChart .e-gridcontent .e-category-info path,
.bootstrap5\.3-dark #GridChart .e-gridcontent .e-category-info path,
.fluent2-dark #GridChart .e-gridcontent .e-category-info path,
.tailwind3-dark #GridChart .e-gridcontent .e-category-info path,
.fluent2-highcontrast #GridChart .e-gridcontent .e-category-info path,
.fluent-dark #GridChart .e-gridcontent .e-category-info path,
.highcontrast #GridChart .e-gridcontent .e-category-info path {
    fill: white;
}

.fluent2-highcontrast #GridChart .e-gridcontent .e-row:hover .e-category-info path,
.fluent2-highcontrast #GridChart .e-gridcontent .e-rowcell.e-selectionbackground .e-category-info path {
    fill: black;
}

#GridChart .grid-chart-checkbox-css {
    padding-left: 8px;
    padding-right: 8px;
}

.e-bigger #GridChart .grid-chart-checkbox-css {
    padding-left: 12px;
    padding-right: 12px;
}

#GridChart .grid-chart-checkbox-css .e-headerchkcelldiv {
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
}

#GridChart .grid-chart-checkbox-css .e-checkbox-wrapper .e-label {
    margin: 0px;
}
</style>