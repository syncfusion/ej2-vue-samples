<template>
  <div class="control-section">
    <div>
        <ejs-chart ref='chart' :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :tooltip='tooltip' :width="width" :animation='animation' :pointRender='pointRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :animation='animation' :showMean='showMean' type='BoxAndWhisker' :boxPlotMode='boxType' name="Department" xName='Department' yName='Age' :marker='marker' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
</div>

<div id="action-description">
    <p>This <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-charts/chart-types/box-and-whisker-chart" aria-label="Navigate to explore the Syncfusion<sup>®</sup> Vue Box and Whisker Chart">Vue Box and Whisker</a> example visualizes the employee’s age group in various departments of a company with box and whisker chart.</p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a box and whisker chart or box plot. This chart is used to visualize a group of numerical data through their data quartiles. Box plots may also have lines extending vertically from the boxes (whiskers) indicating variability outside the upper and lower quartiles. <code>Marker</code> and <code>DataLabel</code> are used to represent individual data and its values.
    </p>
    <p>
       <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a point or tap a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use box and whisker series, we need to inject <code>BoxAndWhiskerSeries</code> module using <code>provide: { chart: [BoxAndWhiskerSeries] },</code> method.
    </p>
    <p>
        More information on the box and whisker series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/box-whisker" aria-label="Navigate to the documentation for Box and Whisker in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Category, Tooltip, BoxAndWhiskerSeries } from "@syncfusion/ej2-vue-charts";
import { pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors, pointFluent2Colors, pointFluent2HighContrastColors, pointTailwind3Colors, pointTailwind3DarkColors } from './theme-color';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');     
export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            seriesData: [
                { Department: "Development", Age: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },
                { Department: "Testing", Age: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },
                { Department: "Finance", Age: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] },
                { Department: "R&D", Age: [26, 27, 29, 32, 34, 35, 36, 37, 38, 39, 41, 43, 58] },
                { Department: "Sales", Age: [27, 26, 28, 29, 29, 29, 32, 35, 32, 38, 53] },
                { Department: "Inventory", Age: [21, 23, 24, 25, 26, 27, 28, 30, 34, 36, 38] },
                { Department: "Graphics", Age: [26, 28, 29, 30, 32, 33, 35, 36, 52] },
                { Department: "Training", Age: [28, 29, 30, 31, 32, 34, 35, 36] },
                { Department: "HR", Age: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] }
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                labelIntersectAction: 'Rotate90',
                majorTickLines: { width: 0 },
            },
            chartArea: {
                border: {
                    width: 0
                }
            },

            //Initializing Primary Y Axis
            primaryYAxis:
            {
                minimum: 10, maximum: 60,
                interval: 10, title: 'Age',
                majorGridLines: { width: 1 },
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 }
            },

            boxType: "Normal",
            showMean: true,
            marker: {
                visible: true,
                width: 7,
                height: 7
            },
            width : Browser.isDevice ? '100%' : '75%',
            tooltip: { enable: true , header: ''},

            legendSettings: {
                visible: false
            },
            animation: { enable: true },
            title: "Employees Age Group in Various Departments"
        };
    },
    provide: {
        chart: [Category, BoxAndWhiskerSeries, Tooltip]
    },
    updated: function () {
        this.$nextTick(function () {
            this.$refs.chart.ej2Instances.refresh();
        });
    },

    methods: {
        load: function (args) {
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },

        pointRender: function (args) {
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            if (selectedTheme === 'material-dark') {
                args.fill = pointMaterialDarkColors[args.point.index % 10];
            }
            else if (selectedTheme === 'material') {
                args.fill = pointMaterialColors[args.point.index % 10];
            }
            else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {
                args.fill = pointFabricColors[args.point.index % 10];
            }
            else if (selectedTheme === 'bootstrap5-dark') {
                args.fill = pointBootstrap5DarkColors[args.point.index % 10];
            }
            else if (selectedTheme === 'bootstrap5') {
                args.fill = pointBootstrap5Colors[args.point.index % 10];
            }
            else if (selectedTheme === 'fluent-dark') {
                args.fill = pointFluentDarkColors[args.point.index % 10];
            }
            else if (selectedTheme === 'fluent') {
                args.fill = pointFluentColors[args.point.index % 10];
            }
            else if (selectedTheme === 'bootstrap4' || selectedTheme === 'bootstrap') {
                args.fill = pointBootstrapColors[args.point.index % 10];
            }
            else if (selectedTheme === 'tailwind-dark') {
                args.fill = pointTailwindDarkColors[args.point.index % 10];
            }
            else if (selectedTheme === 'tailwind') {
                args.fill = pointTailwindColors[args.point.index % 10];
            }
            else if (selectedTheme === 'highcontrast') {
                args.fill = pointHighContrastColors[args.point.index % 10];
            }
            else if (selectedTheme === 'fluent2') {
                args.fill = pointFluent2Colors[args.point.index % 10];
            } 
            else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
                args.fill = pointFluent2HighContrastColors[args.point.index % 10];
            }
            else if (selectedTheme === 'tailwind3-dark') {
                args.fill = pointTailwind3DarkColors[args.point.index % 10];
            } 
            else if (selectedTheme === 'tailwind3') {
                args.fill = pointTailwind3Colors[args.point.index % 10];
            }
            else {
                args.fill = pointBootstrapColors[args.point.index % 10];
            }
        }
    },
};
</script>