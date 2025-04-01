<template>
    <div class="control-section">
        <div class="control-section">
            <ejs-circularchart3d id="container" ref="pie" style='display:block;' :title='title' :theme='theme' :load='load'
                :enableRotation='enableRotation' :tilt='tilt' :legendSettings="legendSettings" :tooltip="tooltip"
                :enableAnimation='enableAnimation'>
                <e-circularchart3d-series-collection>
                    <e-circularchart3d-series :dataSource='data' xName='x' yName='y' :radius='radius' innerRadius="0%"
                        :explode='explode' :explodeOffset="explodeOffset" :dataLabel="dataLabel"> </e-circularchart3d-series>
                </e-circularchart3d-series-collection>
            </ejs-circularchart3d>
        </div>
        <div id="action-description">
            <p>
                This sample visualizes the gold medals from the Berlin 2023 Olympics using a 3D pie chart. Data points are
                enhanced with tooltip.
            </p>
        </div>
        <div id="description">
            <p>
                In this example, you can see how to render and configure a 3D pie chart. The pie chart is a circular graphic,
                which is ideal for displaying categories as a proportion or a percentage of the whole.
                The radius of the pie chart can be customized using the <code>radius</code> property. You can rotate and tilt
                the pie chart using a mouse or touch-enabled devices.
            </p>
            <p><code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a
                point on touch-enabled devices.</p>
            <p><b>Injecting Module</b></p>
            <p>3D circular chart component features are segregated into individual feature-wise modules. To use pie series,
                you need to inject the
                <code>PieSeries3D</code> module using
                <code>provide: { circularChart3D: [ PieSeries3D ] }</code> method.
            </p>
        </div>
    </div>
</template>
<style scoped>
.control-section {
    min-height: 450px;
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { CircularChart3DComponent, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesDirective, PieSeries3D, CircularChartDataLabel3D, CircularChartLegend3D, CircularChartTooltip3D } from "@syncfusion/ej2-vue-charts";
import {  loadCircular3DChartTheme } from "./theme-color";

let theme = loadCircular3DChartTheme();
export default {
    components: {
        'ejs-circularchart3d': CircularChart3DComponent,
        'e-circularchart3d-series-collection': CircularChart3DSeriesCollectionDirective,
        'e-circularchart3d-series': CircularChart3DSeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            data: [
                { 'x': 'Canada', y: 46, text: 'Canada: 46' },
                { 'x': 'Hungary', y: 30, text: 'Hungary: 30' },
                { 'x': 'Germany', y: 79, text: 'Germany: 79' },
                { 'x': 'Mexico', y: 13, text: 'Mexico: 13' },
                { 'x': 'China', y: 56, text: 'Greece: 26' },
                { 'x': 'India', y: 41, text: 'India: 41' },
                { 'x': 'Bangladesh', y: 25, text: 'Bangladesh: 25' },
                { 'x': 'United States', y: 32, text: 'United States: 32' },
                { 'x': 'Belgium', y: 34, text: 'Belgium: 34' }
            ],
            radius: Browser.isDevice ? '45%' : '75%',
            legendSettings: { visible: false },
            explode: true,
            explodeOffset: Browser.isDevice ? '10%' : '30%',
            dataLabel: {
                visible: true, position: 'Outside',
                name: 'x',
                font: { fontWeight: '600' },
                connectorStyle: { length: Browser.isDevice ? '20px' : '40px' }
            },
            tooltip: { enable: true, format: "<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>", header: "" },
            enableRotation: true,
            tilt: -45,
            enableAnimation: true,
            title: 'Berlin 2023 Special Olympics Gold Medals'
        };
    },
    provide: {
        circularchart3d: [CircularChartLegend3D, PieSeries3D, CircularChartDataLabel3D, CircularChartTooltip3D]
    },
    methods: {
        load: function (args) {
               loadCircular3DChartTheme(args);
        }

    },
};
</script>
  