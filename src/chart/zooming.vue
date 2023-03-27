<template>
    <div>
        <div class="control-section">
            <div align='center'>
                <ejs-chart style='display:block;width: 100%' :theme='theme' :chartArea='chartArea' :width='width'
                    align='center' id='chart-zooming' :primaryXAxis='primaryXAxis' :legendSettings='legend'
                    :zoomSettings='zoomSettings' :title='title' :primaryYAxis='primaryYAxis'>
                    <e-series-collection>
                        <e-series :dataSource='series' type='Area' xName='x' yName='y' :animation='animation'
                            :fill='fill' :border='border' width=2 opacity=1>
                        </e-series>
                    </e-series-collection>
                </ejs-chart>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the zooming and panning features of the charts.
            </p>
        </div>
        <div id="description">
            <p>This sample demonstrates the zooming and panning behavior in chart.</p>
            <ul>
                <li>Click and drag the mouse on a chart area to enable selection zooming.</li>
                <li>Hover the mouse on the toolbar at the top right corner of chart area to switch between zooming and
                    panning.</li>
                <li>Pinch in and pinch out the chart area to zoom in or zoom out the chart in touch enabled devices.
                </li>
                <li>Touch and drag to pan the chart.</li>
                <li>Double tap to reset the zoomed chart.</li>
            </ul>
            <p>Chart component supports four types of zooming which can be set using
                <code>enableSelectionZooming</code>, <code>enablePinchZooming</code>,
                <code>enableMouseWheelZooming</code>, <code>enableDeferredZooming</code> property. </p>
            <p>Chart supports two mode of zooming which can be set using <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/documentation/chart/api-zoomSettings.html#mode-zoommode">mode</a></code>
                property.
            </p>
            <ul>
                <li><code>XY</code> - Zoom the chart with respect to both the axis.</li>
                <li><code>X</code> - Zoom the chart with respect to horizontal axis.</li>
                <li><code>Y</code> - Zoom the chart with respect to vertical axis.</li>
            </ul>
            <br>
            <p style="font-weight: 500">Injecting Module</p>
            <p>
                Chart component features are segregated into individual feature-wise modules. To use zooming, we need to
                inject
                <code>Zoom</code> module using <code>provide: { chart: [Zoom] },</code> method.
            </p>
            <p>
                More information on the Zooming can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/chart/zooming/">documentation
                    section</a>.
            </p>
        </div>
        <svg style="height: 0">
            <defs>
                <linearGradient id="material-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                    y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="fabric-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                    y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="bootstrap-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                    y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="bootstrap4-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="highcontrast-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="tailwind-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                    y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="bootstrap5-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="material-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="fabric-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="bootstrap-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="tailwind-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="bootstrap5-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="fluent-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0"
                    y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
                <linearGradient id="fluent-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0"
                    x2="0" y1="0" y2="1">
                    <stop offset="0"></stop>
                    <stop offset="1"></stop>
                </linearGradient>
            </defs>
        </svg>

    </div>
</template>
<style scoped>
#material-gradient-chart stop {
    stop-color: #00bdae;
}

#fabric-gradient-chart stop {
    stop-color: #4472c4;
}

#bootstrap-gradient-chart stop {
    stop-color: #a16ee5;
}

#bootstrap4-gradient-chart stop {
    stop-color: #a16ee5;
}

#highcontrast-gradient-chart stop {
    stop-color: #79ECE4;
}

#tailwind-gradient-chart stop {
    stop-color: #5A61F6;
}

#bootstrap5-gradient-chart stop {
    stop-color: #262E0B;
}

#material-dark-gradient-chart stop {
    stop-color: #9ECB08;
}

#fabric-dark-gradient-chart stop {
    stop-color: #4472c4;
}

#bootstrap-dark-gradient-chart stop {
    stop-color: #a16ee5;
}

#tailwind-dark-gradient-chart stop {
    stop-color: #8B5CF6;
}

#bootstrap5-dark-gradient-chart stop {
    stop-color: #5ECB9B;
}

#fluent-gradient-chart stop {
    stop-color: #614570;
}

#fluent-dark-gradient-chart stop {
    stop-color: #8AB113;
}

.chart-gradient stop[offset="0"] {
    stop-opacity: 0.9;
}

.chart-gradient stop[offset="1"] {
    stop-opacity: 0.3;
}

#control-container {
    padding: 0px !important;
}
</style>

<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, AreaSeries, Zoom, Legend, DateTime, ScrollBar } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, "Contrast");
let themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark'];
let borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113'];

function GetZoomingData() {
    let series = [];
    let point1;
    let value = 80;
    for (let i = 1; i < 500; i++) {
        if (Math.random() > .5) {
            value += Math.random();
        } else {
            value -= Math.random();
        }
        point1 = { x: new Date(1960, i + 2, i), y: Math.round(value) };
        series.push(point1);
    }
    return { 'series': series };
}
let seriesData = GetZoomingData().series;
export default Vue.extend({
    data: function () {
        return {
            theme: theme,
            primaryXAxis: {
                valueType: 'DateTime',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 0 }
            },
            //Initializing Primary Y Axis
            primaryYAxis: {
                title: 'Profit ($)',
                rangePadding: 'None',
                labelFormat: '${value}k',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 }
            },
            legend: {
                visible: false
            },
            animation: { enable: false },
            zoomSettings: {
                enableMouseWheelZooming: true,
                enablePinchZooming: true,
                enableSelectionZooming: true,
                enableScrollbar: true
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            width: Browser.isDevice ? '100%' : '75%',
            border: { width: 1, color: borderColor[themes.indexOf(theme.toLowerCase())] },
            title: 'Sales History of Product X',
            series: seriesData,
            fill: "url(#" + selectedTheme + "-gradient-chart)",
        };
    },
    provide: {
        chart: [AreaSeries, DateTime, Legend, Zoom, ScrollBar]
    },
    methods: {

    }
});
</script>