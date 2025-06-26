<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings' :tooltipRender='tooltipRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y' width=3 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This Vue StepLine Chart visualizes the global best-selling albums by year from 2007 to 2024.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a step line type chart. This chart forms a step-like
        progression by connecting points using vertical and horizontal lines. <code>Markers</code> are used to represent
        individual data points and their values.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example. To see a tooltip in action, hover over or tap on the chart.
    </p>
    
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use step line series, we need to inject
            <code>StepLineSeries</code> module using <code>provide: { chart: [StepLineSeries] }</code> method.
        </p>
        <p>
          More information about the step line series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/step-line" aria-label="Navigate to the documentation for Step Line Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>

</div>


</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StepLineSeries, Double, Legend, Tooltip, Highlight, DataLabel } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

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
            { x: 2007, y: 6.0, album: 'High School Musical 2', artist: 'Various Artists' },
            { x: 2008, y: 6.8, album: 'Viva la Vida or Death and All His Friends', artist: 'Coldplay' },
            { x: 2009, y: 8.3, album: 'I Dreamed a Dream', artist: 'Susan Boyle' },
            { x: 2010, y: 5.7, album: 'Recovery', artist: 'Eminem' },
            { x: 2011, y: 18.1, album: '21', artist: 'Adele' },
            { x: 2012, y: 8.3, album: '21', artist: 'Adele' },
            { x: 2013, y: 4.0, album: 'Midnight Memories', artist: 'One Direction' },
            { x: 2014, y: 10.0, album: 'Frozen', artist: 'Various Artists' },
            { x: 2015, y: 17.4, album: '25', artist: 'Adele' },
            { x: 2016, y: 2.5, album: 'Lemonade', artist: 'Beyoncé' },
            { x: 2017, y: 6.1, album: '÷', artist: 'Ed Sheeran' },
            { x: 2018, y: 3.5, album: 'The Greatest Showman', artist: 'Hugh Jackman & Various Artists' },
            { x: 2019, y: 3.3, album: '5x20 All the Best!! 1999–2019', artist: 'Arashi' },
            { x: 2020, y: 4.8, album: 'Map of the Soul: 7', artist: 'BTS' },
            { x: 2021, y: 4.68, album: '30', artist: 'Adele' },
            { x: 2022, y: 7.2, album: 'Greatest Works of Art', artist: 'Jay Chou' },
            { x: 2023, y: 6.4, album: 'FML', artist: 'Seventeen' },
            { x: 2024, y: 5.6, album: 'The Tortured Poets Department', artist: 'Taylor Swift' }    
        ],
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Double',
            minimum: 2006,
            maximum: 2025,
            interval: 3,
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },

        //Initializing Primary Y Axis
        primaryYAxis: {
            minimum: 0,
            maximum: 20,
            interval: 4,
            title: 'Sales in million',
            labelFormat: '{value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },

        width : Browser.isDevice ? '100%' : '75%',
        marker: {
            dataLabel: { visible: true, font: { fontWeight: '600' } }
        },
        tooltip: {
            enable: true,
            showNearestTooltip: true,
            header: "<b>${point.x}</b>",
            enableHighlight: true,
            enableMarker: false
        },
        title: 'Worldwide Best-Selling Albums by Year',
        subTitle: 'Source: wikipedia.org',
        legendSettings: { visible: false }
    };
  },
  provide: {
    chart: [StepLineSeries, Legend, Double, Tooltip, Highlight, DataLabel]
  },
  methods: {
    load: function(args) {
        this.theme = loadChartTheme(args);
    },
    tooltipRender: function(args) {
        let data = args.series.dataSource[args.point.index];
        args.text = "Sales: <b>" + data.y + "M</b><br/>Album: <b>" + data.album + "</b><br/>Artist: <b>" + data.artist + "</b>";
    }
  }
 
};
</script>