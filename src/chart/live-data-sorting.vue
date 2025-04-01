<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart ref="chart" style='display:block' :theme='theme' :load='load' align='center'
                id='data-sorting-container' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
                :chartArea='chartArea' :width='width' :axisRangeCalculated='axisRangeCalculated' :pointRender='pointRender' :legendSettings='legend' >
                <e-series-collection>
                    <e-series :dataSource='updatedData' type='Column' xName='x' yName='y' :cornerRadius='cornerRadius'
                        columnWidth=0.7 :marker='marker' :animation='animation'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This column chart demonstrates the dynamic updating of data in real-time. The chart visualizes nitrogen fertilizer use
                per hectare of cropland, updating every few seconds to show sorted data over a span of years.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can observe how the column chart updates dynamically with sorted data using the <code>setData</code>
                method. The data shows nitrogen fertilizer usage from 2010 to 2019, and the chart periodically updates and sorts its
                data to reflect the latest information.
            </p>
            <p style="font-weight: 500"><b>Injecting Module</b></p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use the column series, we
                need to inject the <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code>
                method.
            </p>
            <p>
                More information on the column series can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column"
                    aria-label="Navigate to the documentation for Column Chart in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>
<style scoped>

</style> 
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, DataLabel, sort } from "@syncfusion/ej2-vue-charts";
import { fabricColors, materialColors, bootstrapColors, highContrastColors, fluent2Colors, fluent2HighContrastColors, pointTailwindColors, pointTailwindDarkColors, pointTailwind3Colors, pointTailwind3DarkColors } from './theme-color';
import { loadChartTheme, pointRenderEvent } from "./theme-color";
let theme = loadChartTheme();

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            updatedData: [
                { x: 'India', y: 97.21 },
                { x: 'France', y: 95.21 },
                { x: 'Indonesia', y: 62.74 },
                { x: 'Iceland', y: 61.71 },
                { x: 'United States', y: 57.97 },
                { x: 'Greece', y: 57.51 },
                { x: 'Iran', y: 55.31 },
                { x: 'Canada', y: 48.76 },
                { x: 'Finland', y: 48.50 },
                { x: 'Brazil', y: 45.13 }
            ],
            updatedData2: [
                { x: 'India', y: 102.54 },
                { x: 'France', y: 90.76 },
                { x: 'Indonesia', y: 64.61 },
                { x: 'Iceland', y: 70.95 },
                { x: 'United States', y: 61.52 },
                { x: 'Greece', y: 49.03 },
                { x: 'Iran', y: 33.05 },
                { x: 'Canada', y: 59.83 },
                { x: 'Finland', y: 43.13 },
                { x: 'Brazil', y: 55.56 }
            ],
            updatedData3: [
                { x: 'India', y: 99.33 },
                { x: 'France', y: 94.50 },
                { x: 'Indonesia', y: 64.86 },
                { x: 'Iceland', y: 77.86 },
                { x: 'United States', y: 62.14 },
                { x: 'Greece', y: 47.73 },
                { x: 'Iran', y: 39.97 },
                { x: 'Canada', y: 66.53 },
                { x: 'Finland', y: 43.15 },
                { x: 'Brazil', y: 50.02 }
            ],
            updatedData4: [
                { x: 'India', y: 98.85 },
                { x: 'France', y: 101.11 },
                { x: 'Indonesia', y: 60.72 },
                { x: 'Iceland', y: 71.09 },
                { x: 'United States', y: 60.97 },
                { x: 'Greece', y: 52.07 },
                { x: 'Iran', y: 37.99 },
                { x: 'Canada', y: 58.35 },
                { x: 'Finland', y: 43.41 },
                { x: 'Brazil', y: 58.61 }
            ],
            updatedData5: [
                { x: 'India', y: 100.02 },
                { x: 'France', y: 100.55 },
                { x: 'Indonesia', y: 62.84 },
                { x: 'Iceland', y: 89.05 },
                { x: 'United States', y: 59.46 },
                { x: 'Greece', y: 54.04 },
                { x: 'Iran', y: 42.58 },
                { x: 'Canada', y: 59.90 },
                { x: 'Finland', y: 46.18 },
                { x: 'Brazil', y: 65.06 }
            ],
            updatedData6: [
                { x: 'India', y: 102.54 },
                { x: 'France', y: 103.56 },
                { x: 'Indonesia', y: 60.23 },
                { x: 'Iceland', y: 94.00 },
                { x: 'United States', y: 59.39 },
                { x: 'Greece', y: 50.11 },
                { x: 'Iran', y: 34.23 },
                { x: 'Canada', y: 60.40 },
                { x: 'Finland', y: 44.73 },
                { x: 'Brazil', y: 50.04 }
            ],
            updatedData7: [
                { x: 'India', y: 98.84 },
                { x: 'France', y: 101.95 },
                { x: 'Indonesia', y: 60.86 },
                { x: 'Iceland', y: 89.51 },
                { x: 'United States', y: 58.26 },
                { x: 'Greece', y: 53.20 },
                { x: 'Iran', y: 34.28 },
                { x: 'Canada', y: 57.22 },
                { x: 'Finland', y: 42.99 },
                { x: 'Brazil', y: 51.68 }
            ],
            updatedData8: [
                { x: 'India', y: 100.41 },
                { x: 'France', y: 108.54 },
                { x: 'Indonesia', y: 56.44 },
                { x: 'Iceland', y: 107.98 },
                { x: 'United States', y: 57.75 },
                { x: 'Greece', y: 56.34 },
                { x: 'Iran', y: 35.53 },
                { x: 'Canada', y: 57.49 },
                { x: 'Finland', y: 43.32 },
                { x: 'Brazil', y: 64.56 }
            ],
            updatedData9: [
                { x: 'India', y: 104.45 },
                { x: 'France', y: 102.07 },
                { x: 'Indonesia', y: 61.19 },
                { x: 'Iceland', y: 97.05 },
                { x: 'United States', y: 59.53 },
                { x: 'Greece', y: 55.61 },
                { x: 'Iran', y: 41.84 },
                { x: 'Canada', y: 61.00 },
                { x: 'Finland', y: 44.94 },
                { x: 'Brazil', y: 66.34 }
            ],
            updatedData10: [
                { x: 'India', y: 100.89 },
                { x: 'France', y: 109.48 },
                { x: 'Indonesia', y: 60.33 },
                { x: 'Iceland', y: 108.85 },
                { x: 'United States', y: 58.82 },
                { x: 'Greece', y: 55.54 },
                { x: 'Iran', y: 34.77 },
                { x: 'Canada', y: 55.79 },
                { x: 'Finland', y: 45.03 },
                { x: 'Brazil', y: 61.27 }
            ],
            title: 'Nitrogen Fertilizer Usage',
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                border: { width: 0 },
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                labelRotation: -90,
                labelIntersectAction: 'None',
                interval: 1
            },
            primaryYAxis: {
                interval: 30,
                title: 'Nitrogen Fertilizer Use(KG/Ha)',
                labelFormat: '{value}',
                border: { width: 0 },
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            width: Browser.isDevice ? '100%' : '75%',
            marker: { visible: false, dataLabel: { visible: true, position: 'Top', format: '{value}', enableRotation: Browser.isDevice?true: false, angle : -90, font: { color: '#ffffff', size: Browser.isDevice?'10px':'12px' } } },
            cornerRadius: { topLeft: 5, topRight: 5 },
            animation: { enable: true },
            legend: {visible: false},
            yearIndex: 2,
            intervalId: null
        };
    },
    provide: {
        chart: [ColumnSeries, Category, DataLabel]
    },
    methods: {
        load: function (args) {
            this.updateClearInterval();
            this.intervalId = setInterval(() => {
                let container = document.getElementById('data-sorting-container');
                if (container && container.id === args.chart.element.id) {
                    let newData = (this['updatedData' + this.yearIndex] || []).map(item => ({
                        x: item.x,
                        y: item.y
                    }));
                    if (args.chart.series.length > 0) {
                        let newSource = sort(newData, ['y'], true);
                        args.chart.series[0].setData(newSource, 1400);
                    }
                    this.yearIndex = this.yearIndex < 10 ? this.yearIndex + 1 : 2;
                } else {
                    this.updateClearInterval();
                }
            }, 2000);
        },
        updateClearInterval() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },
        axisRangeCalculated: function (args) {
            if (args.axis.name === 'primaryYAxis') {
                if (args.maximum > 120) {
                    args.interval = 30;
                }
                else {
                    args.interval = 20;
                }
                if (args.maximum > 150) {
                    args.maximum = 150;
                }
            }
        },
        pointRender: function (args) {
            pointRenderEvent(args);
        }

    },

};
</script>
