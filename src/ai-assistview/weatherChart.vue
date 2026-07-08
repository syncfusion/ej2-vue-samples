<template>
    <div class="chart-container">
        <ejs-chart
            :primaryXAxis="primaryXAxis"
            :primaryYAxis="primaryYAxis"
            :axes="axes"
            :chartArea="chartArea"
            :series="series"
            :tooltip="tooltip"
            :legendSettings="legendSettings"
            title="Weather Data"
            :width="chartWidth"
        />
    </div>
</template>

<script>
import {
    ChartComponent,
    ColumnSeries,
    SplineSeries,
    Category,
    Tooltip,
    Legend,
    DataLabel
} from "@syncfusion/ej2-vue-charts";
import { Browser } from "@syncfusion/ej2-base";

export default {
    name: "WeatherChart",

    components: {
        "ejs-chart": ChartComponent
    },

    provide: {
        chart: [ColumnSeries, SplineSeries, Category, Tooltip, Legend, DataLabel]
    },

    props: {
        columnData: { type: Array, default: () => [] },
        splineData: { type: Array, default: () => [] }
    },

    data() {
        return {
            chartWidth: Browser.isDevice ? '100%' : '75%',
            primaryXAxis: {
                valueType: 'Category',
                majorGridLines: { width: 0 },
                minorGridLines: { width: 0 },
                majorTickLines: { width: 0 }
            },
            primaryYAxis: {
                minimum: 0,
                maximum: 100,
                interval: 20,
                lineStyle: { width: 0 },
                labelFormat: '{value}°F',
                majorTickLines: { width: 0 }
            },
            axes: [
                {
                    majorGridLines: { width: 0 },
                    rowIndex: 0,
                    opposedPosition: true,
                    lineStyle: { width: 0 },
                    minimum: 24,
                    maximum: 36,
                    interval: 2,
                    name: 'yAxis',
                    labelFormat: '{value}°C',
                    majorTickLines: { width: 0 }
                }
            ],
            chartArea: { border: { width: 0 } },
            tooltip: { enable: true, enableHighlight: true },
            legendSettings: { visible: false }
        };
    },

    computed: {
        series() {
            return [
                {
                    type: 'Column',
                    dataSource: this.columnData,
                    xName: 'x',
                    yName: 'y',
                    name: 'Germany',
                    marker: { visible: true, height: 7, width: 7 }
                },
                {
                    type: 'Spline',
                    dataSource: this.splineData,
                    xName: 'x',
                    yName: 'y',
                    width: 2,
                    yAxisName: 'yAxis',
                    name: 'Japan',
                    marker: { visible: true, width: 7, height: 7, isFilled: true }
                }
            ];
        }
    }
};
</script>

<style scoped>
.chart-container {
    width: fit-content;
    max-width: 100%;
    overflow-x: auto;
}
</style>