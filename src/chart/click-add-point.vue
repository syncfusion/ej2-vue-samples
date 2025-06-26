<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart ref="chart" style='display:block' :axisRangeCalculated='axisRangeCalculated' :theme='theme' align='center' id='AddPoint' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :chartMouseClick='chartMouseClick' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' width=3 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample illustrates a chart that allows end users to add new data and update the existing data source by clicking in the chart area. Additionally, clicking on an existing point will remove that data from the existing data source.
    </p>
</div>
<div id="description">
    <p>
        In this example, the X-Axis and Y-Axis data of the currently clicked location are retrieved from the <code>chartMouseClick</code> event arguments and converted into a new point. This point is then added to the existing data source using the <code>addPoint</code> method. If a point with the same coordinates already exists, it will be removed from the data source using the <code>removePoint</code> method.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use the line series, we need to inject the <code>LineSeries</code> module using <code>provide: { chart: [LineSeries] }</code> method.
    </p>
    <p>
        More information on the line series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line" aria-label="Navigate to the documentation for Line Chart in Vue Chart component">documentation section</a>.
    </p> 
</div>
  </div>
</template>

<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, DataLabel, Tooltip, Highlight } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme= loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
        theme: theme,
        seriesData: [
            { x: 20, y: 20 }, 
            { x: 80, y: 80 }
        ],
        //Initializing Primary X Axis
        primaryXAxis: {
            edgeLabelPlacement: 'Shift',
            rangePadding: 'Additional',
            majorGridLines: { width: 0 }
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Value', 
            interval: 20, 
            lineStyle: { width: 0 }, 
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        width : Browser.isDevice ? '100%' : '70%',
        title: "User supplied data",
        marker: {
            visible: true, 
            isFilled: true, 
            border: { width: 2, color: 'White' }, 
            width: 13, 
            height: 13
        },
        tooltip : {
            enable: true, enableHighlight: true
        }
    };
  },
  provide: {
    chart: [LineSeries, DataLabel, Tooltip, Highlight]
  },
  methods: {
    chartMouseClick: function(args) {
        let isRemoved = false;
        if (args.axisData) {
            for (let i = 0; i < this.$refs.chart.ej2Instances.series[0].points.length; i++) {
                let markerWidth = this.$refs.chart.ej2Instances.series[0].marker.width / 2;
                let roundedX = Math.round(args.axisData['primaryXAxis']) + markerWidth;
                let roundedY = Math.round(args.axisData['primaryYAxis']) + markerWidth;
                let pointX = Math.round(this.$refs.chart.ej2Instances.series[0].points[i].x) + markerWidth;
                let pointY = Math.round(this.$refs.chart.ej2Instances.series[0].points[i].y) + markerWidth;
                if ((roundedX === pointX || roundedX + 1 === pointX || roundedX - 1 === pointX) &&
                    (roundedY === pointY || roundedY + 1 === pointY || roundedY - 1 === pointY)) {
                    if (this.$refs.chart.ej2Instances.series[0].points.length > 1) {
                        const points = this.$refs.chart.ej2Instances.series[0].points;
                        const duration = i === 0 || i === points[points.length - 1].index ? 500 : 0;
                        this.$refs.chart.ej2Instances.series[0].removePoint(i, duration);
                    }
                    isRemoved = true;
                }
            }
            if (!isRemoved) {
                    this.$refs.chart.ej2Instances.series[0].addPoint({ x: Math.round(args.axisData['primaryXAxis']), y: Math.round(args.axisData['primaryYAxis']) });
            }
        }
    },
    axisRangeCalculated: function(args) {
        if (args.axis.name === 'primaryXAxis') {
            if (args.interval < 10) {
                args.maximum = args.maximum + 10;
                args.minimum = args.minimum - 10;
                args.interval = 10;
            }
        }
        if (args.axis.name === 'primaryYAxis') {
                if (args.maximum <= 60) {
                    args.interval = 10;
                }
            }
    }
  }
};
</script>