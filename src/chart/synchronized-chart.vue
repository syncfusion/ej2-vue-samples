<template>
    <div class="control-section">
        <div class="chart-row">
            <div class="col" id="container1">
                <ejs-chart style='display:block' v-model:theme='theme' align='center' id='chartcontainer1' :title='lineSeriesTitle'
                    :primaryXAxis='primaryXAxis' :primaryYAxis='linePrimaryYAxis' :chartArea='chartArea' :tooltip='euroTooltip'
                    :zoomSettings='zoomSettings' :titleStyle='titleStyle' :zoomComplete='zoomComplete'
                    :chartMouseLeave='chartMouseLeave1' :chartMouseMove='chartMouseMove1' :load='load' :chartMouseUp='chartMouseUp1'
                    :crosshair='crosshair' ref="chart1">
                    <e-series-collection>
                        <e-series :dataSource='seriesData' type='Line' xName='USD' yName='EUR' width = 2
                            :emptyPointSetting='emptyPointSettings'> </e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
            <div class="col" id="container2">
                <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer2' :title='splineSeriesTitle'
                    :primaryXAxis='primaryXAxis' :primaryYAxis='splinePrimaryYAxis' :chartArea='chartArea' :tooltip='yenTooltip'
                    :zoomSettings='zoomSettings' :titleStyle='titleStyle' :zoomComplete='zoomComplete'
                    :chartMouseLeave='chartMouseLeave2' :chartMouseMove='chartMouseMove2' :load='load' :chartMouseUp='chartMouseUp2'
                    :crosshair='crosshair' ref="chart2">
                    <e-series-collection>
                        <e-series :dataSource='seriesData' type='Line' xName='USD' yName='JPY' width = 2>
                        </e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
        <div class="chart-row">
            <div class="col" id="container3">
                <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer3' :title='AreaSeriesTitle'
                    :primaryXAxis='primaryXAxis' :primaryYAxis='areaPrimaryYAxis' :chartArea='chartArea' :tooltip='sgdTooltip'
                    :zoomSettings='zoomSettings' :titleStyle='titleStyle' :zoomComplete='zoomComplete'
                    :chartMouseLeave='chartMouseLeave3' :chartMouseMove='chartMouseMove3' :load='load' :chartMouseUp='chartMouseUp3'
                    :crosshair='crosshair' ref="chart3">
                    <e-series-collection>
                        <e-series :dataSource='seriesData' type='Area' xName='USD' yName='SGD' opacity=0.6 :border='border'>
                        </e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
            <div class="col" id="container4">
                <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer4' :title='splinelineAreaSeriesTitle'
                    :primaryXAxis='primaryXAxis' :primaryYAxis='splineAreaPrimaryYAxis' :chartArea='chartArea' :tooltip='inrTooltip'
                    :zoomSettings='zoomSettings' :titleStyle='titleStyle' :zoomComplete='zoomComplete'
                    :chartMouseLeave='chartMouseLeave4' :chartMouseMove='chartMouseMove4' :load='load' :chartMouseUp='chartMouseUp4'
                    :crosshair='crosshair' ref="chart4">
                    <e-series-collection>
                        <e-series :dataSource='seriesData' type='Area' xName='USD' yName='INR' opacity=0.6
                            :border='border'>
                        </e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            This example visualizes the history of currency exchange rates using synchronized charts.
        </p>
    </div>
    <div id="description">
        <p>
            This demo showcases the synchronization of multiple charts, with crosshair, tooltip, and zooming functionalities
            synchronized across the charts. Hover over or zoom in on one chart to observe the corresponding impact on the
            other charts as well.
        </p>
        <p>
            <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over or tap on the chart.
        </p>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use line series and area series, we need to
            inject
            <code>LineSeries</code> and
            <code>AreaSeries</code> module using
            <code>provide: { chart: [LineSeries, AreaSeries] }</code> method.
        </p>
        <p>
            More information on the user interaction can be found in this
            <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/chart/cross-hair-and-track-ball" aria-label="Navigate to the documentation for Crosshair and Trackball in Vue Chart component">documentation
                section</a>.
        </p>
    </div>
</template>
<style>
#control-container {
    padding: 1px !important;
}

.chart-row {
    display: flex;
}

.col {
    width: 50%;
    margin: 10px;
    height: 270px;
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AreaSeries, SplineSeries, LineSeries, SplineAreaSeries, DateTime, Tooltip, Crosshair, Zoom, Highlight } from "@syncfusion/ej2-vue-charts";
import { synchronizedData } from './financial-data'


import { loadChartTheme } from './theme-color';
import { keyBootstrap4Colors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointBootstrapColors, pointFabricColors, pointFluent2Colors, pointFluent2DarkColors, pointFluentColors, pointFluentDarkColors, pointHighContrastColors, pointMaterial3Colors, pointMaterial3DarkColors, pointMaterialColors, pointMaterialDarkColors, pointTailwind3Colors, pointTailwind3DarkColors, pointTailwindColors, pointTailwindDarkColors } from './theme-color';
let theme = loadChartTheme();

let zoomFactor = 0;
let zoomPosition = 0;

export default {
    components: {
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective
    },
    data: function () {
        return {
            theme: theme,
            seriesData: synchronizedData,
            //Initializing Primary X Axis
            primaryXAxis: {
                minimum: new Date(2023, 1, 18),
                maximum: new Date(2023, 7, 18),
                valueType: 'DateTime',
                labelFormat: 'MMM d',
                lineStyle: { width: 0 },
                majorGridLines: { width: 0 },
                interval: Browser.isDevice ? 2 : 1,
                edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
                labelRotation: Browser.isDevice ? -45 : 0
            },
             //Initializing Primary Y Axis
            linePrimaryYAxis: {
                labelFormat: 'n2',
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                minimum: 0.86,
                maximum: 0.96,
                interval: 0.025
            },
            splinePrimaryYAxis: {
                labelFormat: '{value}',
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                minimum: 120,
                maximum: 152,
                interval: 8,
                labelPadding: 8
            },
            areaPrimaryYAxis: {
                labelFormat: 'n2',
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                minimum: 1.30,
                maximum: 1.37,
                interval: 0.0175
            },
            splineAreaPrimaryYAxis: {
                labelFormat: 'n1',
                majorTickLines: { width: 0 },
                lineStyle: { width: 0 },
                minimum: 79,
                maximum: 85,
                interval: 1.5
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            border: { width: 2 },
            zoomSettings: {
                enableMouseWheelZooming: true,
                enablePinchZooming: true,
                enableScrollbar: false,
                enableDeferredZooming: false,
                enablePan: true,
                mode: 'X',
                toolbarItems: ['Pan', 'Reset']
            },
            euroTooltip: {
                enable: true,
                showNearestTooltip: true,
                header: '', 
                enableMarker: false,
                format: '<b>€${point.y}</b> <br>${point.x} 2023',
                fadeOutDuration: Browser.isDevice ? 2500 : 1000,
                enableHighlight: true
            },
            yenTooltip: {
                enable: true,
                showNearestTooltip: true,
                header: '', 
                enableMarker: false,
                format: '<b>¥${point.y}</b> <br>${point.x} 2023',
                fadeOutDuration: Browser.isDevice ? 2500 : 1000,
                enableHighlight: true
            },
            sgdTooltip: {
                enable: true,
                showNearestTooltip: true,
                header: '', 
                enableMarker: false,
                format: '<b>$${point.y}</b> <br>${point.x} 2023',
                fadeOutDuration: Browser.isDevice ? 2500 : 1000
            },
            inrTooltip: {
                enable: true,
                showNearestTooltip: true,
                header: '', 
                enableMarker: false,
                format: '<b>₹${point.y}</b> <br>${point.x} 2023',
                fadeOutDuration: Browser.isDevice ? 2500 : 1000
            },
            emptyPointSettings: { mode: 'Drop' },
            selectionPattern: 'Box',
            titleStyle: { textAlignment: 'Near' },
            selectionMode: 'Point',
            border: { width: 2 },
            lineSeriesTitle: "US to EURO",
            AreaSeriesTitle: "US to SGD",
            splineSeriesTitle: "US to Yen",
            splinelineAreaSeriesTitle: "US to INR",
            crosshair: { enable: true, lineType: 'Vertical', dashArray: '2,2' },
            charts: []
        };
    },
    provide: {
        chart: [AreaSeries, SplineSeries, LineSeries, SplineAreaSeries, DateTime, Tooltip, Crosshair, Zoom, Highlight]
    },
    methods: {
        zoomComplete: function (args) {
            if (args.axis.name === 'primaryXAxis') {
                zoomFactor = args.currentZoomFactor;
                zoomPosition = args.currentZoomPosition;
                this.zoomCompleteFunction(args);
            }
        },
        chartMouseLeave1: function (args) {
            this.$refs.chart2.ej2Instances.hideCrosshair();
            this.$refs.chart3.ej2Instances.hideCrosshair();
            this.$refs.chart4.ej2Instances.hideCrosshair();
            this.$refs.chart2.ej2Instances.hideTooltip();
            this.$refs.chart3.ej2Instances.hideTooltip();
            this.$refs.chart4.hideTooltip();
        },
        chartMouseUp1: function (args) {
            if (Browser.isDevice || this.$refs.chart1.ej2Instances.startMove) {
                this.$refs.chart2.ej2Instances.hideCrosshair();
                this.$refs.chart3.ej2Instances.hideCrosshair();
                this.$refs.chart4.ej2Instances.hideCrosshair();
                this.$refs.chart2.ej2Instances.hideTooltip();
                this.$refs.chart3.ej2Instances.hideTooltip();
                this.$refs.chart4.hideTooltip();
            }
        },
        chartMouseMove1: function (args) {
            if ((!Browser.isDevice && !this.$refs.chart1.ej2Instances.isTouch  && !this.$refs.chart1.ej2Instances.isChartDrag) || this.$refs.chart1.ej2Instances.startMove) {
                this.$refs.chart2.ej2Instances.startMove = this.$refs.chart3.ej2Instances.startMove = this.$refs.chart4.ej2Instances.startMove = this.$refs.chart1.ej2Instances.startMove;
                this.$refs.chart2.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart3.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart4.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart2.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart3.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart4.ej2Instances.showCrosshair(args.x, args.y);
            }
        },
        chartMouseMove2: function (args) {
            if ((!Browser.isDevice && !this.$refs.chart2.ej2Instances.isTouch && !this.$refs.chart2.ej2Instances.isChartDrag) || this.$refs.chart2.ej2Instances.startMove) {
                this.$refs.chart1.ej2Instances.startMove = this.$refs.chart3.ej2Instances.startMove = this.$refs.chart4.ej2Instances.startMove = this.$refs.chart2.ej2Instances.startMove;
                this.$refs.chart1.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart3.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart4.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart1.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart3.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart4.ej2Instances.showCrosshair(args.x, args.y);
            }
        },
        chartMouseLeave2: function (args) {
            this.$refs.chart1.ej2Instances.hideCrosshair();
            this.$refs.chart3.ej2Instances.hideCrosshair();
            this.$refs.chart4.ej2Instances.hideCrosshair();
            this.$refs.chart1.ej2Instances.hideTooltip();
            this.$refs.chart3.ej2Instances.hideTooltip();
            this.$refs.chart4.ej2Instances.hideTooltip();
        },
        chartMouseUp2: function (args) {
            if (Browser.isDevice || this.$refs.chart2.ej2Instances.startMove) {
                this.$refs.chart1.ej2Instances.hideCrosshair();
                this.$refs.chart3.ej2Instances.hideCrosshair();
                this.$refs.chart4.ej2Instances.hideCrosshair();
                this.$refs.chart1.ej2Instances.hideTooltip();
                this.$refs.chart3.ej2Instances.hideTooltip();
                this.$refs.chart4.ej2Instances.hideTooltip();
            }
        },
        chartMouseMove3: function (args) {
            if ((!Browser.isDevice && !this.$refs.chart3.ej2Instances.isTouch && !this.$refs.chart3.ej2Instances.isChartDrag) || this.$refs.chart3.ej2Instances.startMove) {
                this.$refs.chart1.ej2Instances.startMove = this.$refs.chart2.ej2Instances.startMove = this.$refs.chart4.ej2Instances.startMove = this.$refs.chart3.ej2Instances.startMove;
                this.$refs.chart1.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart2.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart4.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart1.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart2.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart4.ej2Instances.showCrosshair(args.x, args.y);
            }
        },
        chartMouseLeave3: function (args) {
            this.$refs.chart1.ej2Instances.hideCrosshair();
            this.$refs.chart2.ej2Instances.hideCrosshair();
            this.$refs.chart4.ej2Instances.hideCrosshair();
            this.$refs.chart1.ej2Instances.hideTooltip();
            this.$refs.chart2.ej2Instances.hideTooltip();
            this.$refs.chart4.ej2Instances.hideTooltip();
        },
        chartMouseUp3: function (args) {
            if (Browser.isDevice || this.$refs.chart3.ej2Instances.startMove) {
                this.$refs.chart1.ej2Instances.hideCrosshair();
                this.$refs.chart2.ej2Instances.hideCrosshair();
                this.$refs.chart4.ej2Instances.hideCrosshair();
                this.$refs.chart1.ej2Instances.hideTooltip();
                this.$refs.chart2.ej2Instances.hideTooltip();
                this.$refs.chart4.ej2Instances.hideTooltip();
            }
        },
        chartMouseMove4: function (args) {
            if ((!Browser.isDevice && !this.$refs.chart4.ej2Instances.isTouch && !this.$refs.chart4.ej2Instances.isChartDrag) || this.$refs.chart4.ej2Instances.startMove) {
                this.$refs.chart1.ej2Instances.startMove = this.$refs.chart2.ej2Instances.startMove = this.$refs.chart3.ej2Instances.startMove = this.$refs.chart4.ej2Instances.startMove;
                this.$refs.chart1.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart2.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart3.ej2Instances.showTooltip(args.x, args.y);
                this.$refs.chart1.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart2.ej2Instances.showCrosshair(args.x, args.y);
                this.$refs.chart3.ej2Instances.showCrosshair(args.x, args.y);
            }
        },
        chartMouseLeave4: function (args) {
            this.$refs.chart1.ej2Instances.hideCrosshair();
            this.$refs.chart2.ej2Instances.hideCrosshair();
            this.$refs.chart3.ej2Instances.hideCrosshair();
            this.$refs.chart1.ej2Instances.hideTooltip();
            this.$refs.chart2.ej2Instances.hideTooltip();
            this.$refs.chart3.ej2Instances.hideTooltip();
        },
        chartMouseUp4: function (args) {
            if (Browser.isDevice || this.$refs.chart4.ej2Instances.startMove) {
                this.$refs.chart1.ej2Instances.hideCrosshair();
                this.$refs.chart2.ej2Instances.hideCrosshair();
                this.$refs.chart3.ej2Instances.hideCrosshair();
                this.$refs.chart1.ej2Instances.hideTooltip();
                this.$refs.chart2.ej2Instances.hideTooltip();
                this.$refs.chart3.ej2Instances.hideTooltip();
            }
        },
        load: function (args) {
            loadChartTheme(args);
            let themeColor = [];
            // check the theme
            if (args.chart.theme === 'MaterialDark') {
            themeColor = pointMaterialDarkColors;
        }
        else if (args.chart.theme === 'Material') {
            themeColor = pointMaterialColors;
        }
        else if (args.chart.theme === "Fabric") {
            themeColor = pointFabricColors;
        }
        else if (args.chart.theme === "FabricDark") {
            themeColor = pointFabricColors;
        }
        else if (args.chart.theme === 'Bootstrap5Dark') {
            themeColor = pointBootstrap5DarkColors;
        }
        else if (args.chart.theme === 'Bootstrap5') {
            themeColor = pointBootstrap5Colors;
        }
        else if (args.chart.theme === "Bootstrap4") {
            themeColor = keyBootstrap4Colors;
        }
        else if (args.chart.theme === 'TailwindDark') {
            themeColor = pointTailwindDarkColors;
        }
        else if (args.chart.theme === 'Tailwind') {
            themeColor = pointTailwindColors;
        }
        else if (args.chart.theme === "HighContrast") {
            themeColor = pointHighContrastColors;
        }
        else if (args.chart.theme === 'FluentDark') {
            themeColor = pointFluentDarkColors;
        }
        else if (args.chart.theme === 'Bootstrap') {
            themeColor = pointBootstrapColors;
        }
        else if (args.chart.theme === 'BootstrapDark') {
            themeColor = pointBootstrapColors;
        }
        else if (args.chart.theme === 'Material3') {
            themeColor = pointMaterial3Colors;
        }
        else if (args.chart.theme === 'Material3Dark') {
            themeColor = pointMaterial3DarkColors;
        }
        else if (args.chart.theme === 'Fluent2') {
            themeColor = pointFluent2Colors;
        }
        else if (args.chart.theme === 'Fluent2HighContrast' || args.chart.theme === 'Fluent2Dark') {
            themeColor = pointFluent2DarkColors;
        } else if (args.chart.theme === 'Tailwind3Dark') {
            themeColor = pointTailwind3DarkColors;
        }
        else if (args.chart.theme === 'Tailwind3') {
            themeColor = pointTailwind3Colors;
        }
        else {
            themeColor = pointFluentColors;
        }
            // check the container
            if (args.chart.element.id === 'chartcontainer1') {
                args.chart.series[0].fill = themeColor[0];
            }
            else if (args.chart.element.id === 'chartcontainer2') {
                args.chart.series[0].fill = themeColor[1];
            }
            else if (args.chart.element.id === 'chartcontainer3') {
                args.chart.series[0].fill = themeColor[2];
            }
            else if (args.chart.element.id === 'chartcontainer4') {
                args.chart.series[0].fill = themeColor[3];
            }
        },
        zoomCompleteFunction: function (args) {
            for (var i = 0; i < this.charts.length; i++) {
                if (args.axis.series[0].chart.element.id !== this.charts[i].element.id) {
                    this.charts[i].primaryXAxis.zoomFactor = zoomFactor;
                    this.charts[i].primaryXAxis.zoomPosition = zoomPosition;
                    this.charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
                    this.charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
                }
            }
        }
    },
    mounted() {
        this.charts = [this.$refs.chart1.ej2Instances, this.$refs.chart2.ej2Instances, this.$refs.chart3.ej2Instances, this.$refs.chart4.ej2Instances];
    }
  };
  </script>