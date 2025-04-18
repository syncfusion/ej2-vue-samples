<template>
    <div class="control-section">
        <div align='center'>
            <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
                :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
                :axes='axes' :tooltip='tooltip' :legendSettings='legendSettings'>
                <e-annotations>
                    <e-annotation :content="'cloudTemplate'" x='Sun' y=70 coordinateUnits='Point'>
                        <template v-slot:cloudTemplate="{}">
                            <div id="chart_cloud"><img src="./images/cloud.png"
                                    style="width: 41px; height: 41px" alt="Cloud Picture"/></div>
                        </template>
                    </e-annotation>
                    <e-annotation :content="'sunTemplate'" x='Sat' y=35 coordinateUnits='Point' yAxisName='yAxis2'>
                        <template v-slot:sunTemplate="{}">
                            <div id="chart_sun"><img src="./images/sunny.png"
                                    style="width: 41px; height: 41px" alt="Sunny Picture"/></div>
                        </template>
                    </e-annotation>
                </e-annotations>
                <e-series-collection>
                    <e-series :dataSource='seriesData' type='Column' xName='Day' yName='DEU_Temp' name='Germany' width=2
                        :marker='marker'> </e-series>
                    <e-series :dataSource='seriesData' type='Spline' xName='Day' yName='JPN_Temp' yAxisName='yAxis2'
                        name='Japan' width=2 :marker='marker1'> </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div id="action-description">
            <p>
                This example shows how to use a chart's multiple axes to depict temperatures in both Celsius and Fahrenheit.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure multiple axes. 
                Use an Axes collection to render a secondary axis in the chart that can be bound to a specific series using <code>YAxisName</code> and <code>XAxisName</code> properties in the series. 
                You can also customize the secondary axis similar to the primary axis.
            </p>
            <p>
                <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
                point or tap a point in touch enabled devices.
            </p>
            <p>
                More information on the multiple axis can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/axis-customization/#multiple-axis" aria-label="Navigate to the documentation for Multiple Axis in Vue Chart component">documentation
                    section</a>.
            </p>
        </div>
    </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AnnotationsDirective, AnnotationDirective, SplineSeries, ChartAnnotation, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective,
        'e-annotations': AnnotationsDirective,
        'e-annotation': AnnotationDirective
    },
    data: function () {
        return {
            theme: theme,
            seriesData: [
                { Day: "Sun", DEU_Temp: 35, JPN_Temp: 31 },
                { Day: "Mon", DEU_Temp: 40, JPN_Temp: 28 },
                { Day: "Tue", DEU_Temp: 80, JPN_Temp: 29 },
                { Day: "Wed", DEU_Temp: 70, JPN_Temp: 30 },
                { Day: "Thu", DEU_Temp: 65, JPN_Temp: 33 },
                { Day: "Fri", DEU_Temp: 55, JPN_Temp: 32 },
                { Day: "Sat", DEU_Temp: 50, JPN_Temp: 34 },
            ],

            //Initializing Primary X Axis
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                majorTickLines: { width: 0 },
                minorGridLines: { width: 0 }
            },

            //Initializing Primary Y Axis
            primaryYAxis:
            {
                minimum: 0, maximum: 100, interval: 20,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                labelFormat: '{value}°F'
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            axes:
                [
                    {
                        majorGridLines: { width: 0 },
                        lineStyle: { width: 0 },
                        rowIndex: 0, opposedPosition: true,
                        minimum: 24, maximum: 36, interval: 2,
                        name: 'yAxis2',
                        labelFormat: '{value}°C'
                    }
                ],
            marker: { visible: true, width: 7, height: 7, },
            marker1: { visible: true, width: 7, height: 7, isFilled: true },
            width: Browser.isDevice ? '100%' : '75%',
            tooltip: { enable: true },
            legendSettings: {
                visible: false
            },
            title: "Weather Data"
        };
    },
    provide: {
        chart: [SplineSeries, ColumnSeries, Category, Tooltip, ChartAnnotation]
    },
    methods: {
    },
};
</script>