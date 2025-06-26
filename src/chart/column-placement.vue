<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :enableSideBySidePlacement='false' :legendSettings='legendSettings' :axisLabelRender='axisLabelRender' :sharedTooltipRender='sharedTooltipRender' :resized='resized' :load='load'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Column' xName='country' yName='population' name='Total' columnWidth=0.5 :cornerRadius='cornerRadius' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='country' yName='male' name='Male' columnWidth=0.3 :cornerRadius='cornerRadius' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData3' type='Column' xName='country' yName='female' name='Female' columnWidth=0.2 :cornerRadius='cornerRadius' legendShape='Rectangle'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample shows three series of columns in which each column is rendered with a different width and placed behind the previous column.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the column chart. The column chart is used to compare the frequency, count, total, or average of data in different categories. The <code>EnableSideBySidePlacement</code> property is used to enable and disable side-by-side positioning. DataLabel is used to present details about individual data points.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices.
    </p>
    
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
    </p>
    <p>
      More information about the column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column" aria-label="Navigate to the documentation for Column Chart in Vue Chart component">documentation section</a>.
    </p>
</div>

</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";

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
        seriesData1: [
          { country: 'India', population: 1450935791 },
          { country: 'China', population: 1419321278 },
          { country: 'USA', population: 345426571 },
          { country: 'Indonesia', population: 283487931 },
          { country: 'Pakistan', population: 251269164 }
        ],
        seriesData2: [
          { country: 'India', male: 748323427 },
          { country: 'China', male: 723023723 },
          { country: 'USA', male: 173551527 },
          { country: 'Indonesia', male: 142407931 },
          { country: 'Pakistan', male: 127433405 }
        ],
        seriesData3: [
          { country: 'India', female: 702612364 },
          { country: 'China', female: 696297555 },
          { country: 'USA', female: 171875044 },
          { country: 'Indonesia', female: 141080014 },
          { country: 'Pakistan', female: 123835758 }
        ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            majorGridLines: { width: 0 },
            labelRotation: Browser.isDevice ? -45 : 0
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 12 } },
      //Initializing Primary Y Axis
        primaryYAxis: {
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            title: 'Inhabitants (Millions)',
            interval: 300000000
        },
        cornerRadius: { topLeft: 4, topRight: 4 },
        width : Browser.isDevice ? '100%' : '75%',
        title: 'Population Distribution of the Top 5 Most Populous Countries (2024)',
        subTitle: 'Source: statisticstimes.com',
        tooltip: { enable: true, shared: true },
        legendSettings: { visible: true, shapeWidth: 9, shapeHeight: 9, maximumColumns: 1, position: 'Custom', location: { x: 750, y: 80 } },
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Tooltip, Legend]
  },
  methods: {
        load: function (args) {
            let selectedTheme = loadChartTheme(args);
            if (selectedTheme.indexOf('Dark') !== -1 || selectedTheme.indexOf('HighContrast') !== -1) {
                args.chart.legendSettings.border = { width: 1, color: '#FFFFFF' };
            } else {
                args.chart.legendSettings.border = { width: 1, color: '#777777' };
            }
        },
        axisLabelRender: function (args) {
            let value = parseInt(args.text.replace(/,/g, ''), 10);
            if (value >= 1000000) {
                args.text = (value / 1000000).toFixed(0) + 'M';
            }
        },
        sharedTooltipRender: function (args) {
            if (args.text && args.point && args.series) {
                for (let i = 0; i < args.point.length; i++) {
                    if (args.point[i] && args.point[i].y !== undefined) {
                        let formattedValue = args.point[i].y.toLocaleString('en-US');
                        let seriesName = args.series[i] ? args.series[i].name : "Series " + (i + 1);
                        args.text[i] = seriesName + ": <b>" + formattedValue + "</b>";
                    }
                }
            }
        },
        resized: function (args) {
            let maxWidth = args.chart.availableSize.width;
            args.chart.legendSettings.location.x = maxWidth - 115;
        }
  },
 
};
</script>