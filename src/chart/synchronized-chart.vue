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
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AreaSeries, SplineSeries, LineSeries, SplineAreaSeries, DateTime, Tooltip, Crosshair, Zoom } from "@syncfusion/ej2-vue-charts";
import { synchronizedData } from './financial-data'

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

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
                shared: true,
                header: '', 
                enableMarker: false,
                format: '<b>€${point.y}</b> <br>${point.x} 2023',
                fadeOutDuration: Browser.isDevice ? 2500 : 1000
            },
            yenTooltip: {
                enable: true,
                shared: true,
                header: '', 
                enableMarker: false,
                format: '<b>¥${point.y}</b> <br>${point.x} 2023',
                fadeOutDuration: Browser.isDevice ? 2500 : 1000
            },
            sgdTooltip: {
                enable: true,
                shared: true,
                header: '', 
                enableMarker: false,
                format: '<b>$${point.y}</b> <br>${point.x} 2023',
                fadeOutDuration: Browser.isDevice ? 2500 : 1000
            },
            inrTooltip: {
                enable: true,
                shared: true,
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
        chart: [AreaSeries, SplineSeries, LineSeries, SplineAreaSeries, DateTime, Tooltip, Crosshair, Zoom]
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
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
            args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            let themeColor = [];
            let materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590'];
            let materialDarkColors = ['#9ECB08', '#56AEFF', '#C57AFF', '#61EAA9'];
            let fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47'];
            let bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e'];
            let highContrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773'];
            let bootstrap4Colors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e'];
            let bootstrap5Colors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384'];
            let bootstrap5DarkColors = ['#FD7E14', '#6610F2', '#6F42C1', '#D63384'];
            let fluentColors = ['#1AC9E6', '#DA4CB2', '#EDBB40', '#AF4BCF'];
            let tailwindColors = ['#5A61F6', '#65A30D', '#334155', '#14B8A6'];
            let tailwindDarkColors = ['#8B5CF6', '#22D3EE', '#F87171', '#4ADE80'];
            let fabricdarkColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47'];
            let material3Colors = ['#6355C7', '#00AEE0', '#FFB400', '#F7523F'];
            let material3DarkColors = ['#4EAAFF', '#FA4EAB', '#FFF500', '#17EA58'];
            let fluent2Colors = ['#6200EE', '#09AF74', '#0076E5', '#CB3587'];
            let fluent2HighContrastColors = ['#9BB449', '#2A72D5', '#43B786', '#3F579A'];
            // check the theme
            if (args.chart.theme === 'MaterialDark') {
                themeColor = materialDarkColors;
            }
            else if (args.chart.theme === 'Material') {
                themeColor = materialColors;
            }
            else if (args.chart.theme === "Fabric") {
                themeColor = fabricColors;
            }
            else if (args.chart.theme === "FabricDark") {
                themeColor = fabricdarkColors;
            }
            else if (args.chart.theme === 'Bootstrap5Dark') {
                themeColor = bootstrap5DarkColors;
            }
            else if (args.chart.theme === 'Bootstrap5') {
                themeColor = bootstrap5Colors;
            }
            else if (args.chart.theme === "Bootstrap4") {
                themeColor = bootstrap4Colors;
            }
            else if (args.chart.theme === 'TailwindDark') {
                themeColor = tailwindDarkColors;
            }
            else if (args.chart.theme === 'Tailwind') {
                themeColor = tailwindColors;
            }
            else if (args.chart.theme === "HighContrast") {
                themeColor = highContrastColors;
            }
            else if (args.chart.theme === 'FluentDark') {
                themeColor = fluentColors;
            }
            else if (args.chart.theme === 'Bootstrap') {
                themeColor = bootstrapColors;
            }
            else if (args.chart.theme === 'BootstrapDark') {
                themeColor = bootstrapColors;
            }
            else if (args.chart.theme === 'Material3') {
                themeColor = material3Colors;
            }
            else if (args.chart.theme === 'Material3Dark') {
                themeColor = material3DarkColors;
            }
            else if (args.chart.theme === 'Fluent2') {
                themeColor = fluent2Colors;
            }
            else if (args.chart.theme === 'Fluent2HighContrast' || args.chart.theme === 'Fluent2Dark') {
                themeColor = fluent2HighContrastColors;
            }
            else {
                themeColor = fluentColors;
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