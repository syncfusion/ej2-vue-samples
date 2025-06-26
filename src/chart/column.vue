<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' :tooltip='tooltip' :load='load' :axisLabelRender='axisLabelRender' :tooltipRender='tooltipRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='walnuts' name='Walnuts' legendShape='Rectangle' columnSpacing=0.4 :cornerRadius='cornerRadius'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='almonds' name='Almonds' legendShape='Rectangle' columnSpacing=0.4 :cornerRadius='cornerRadius'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This Vue column chart example visualizes the production of Walnuts and Almonds for different countries in 2023.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a column chart. The column chart is used to compare the
        frequency, count, total, or average of data in different categories.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in
        touch-enabled devices.
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
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, Tooltip, Legend, Highlight} from "@syncfusion/ej2-vue-charts";

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
          { country: 'Chile', walnuts: 175000, almonds: 11300 },
          { country: 'European Union', walnuts: 140000, almonds: 135000 },
          { country: 'Turkey', walnuts: 67000, almonds: 24000 },
          { country: 'India', walnuts: 33000, almonds: 4200 },
          { country: 'Australia', walnuts: 12000, almonds: 154000 }
        ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
            labelRotation: Browser.isDevice ? -45 : 0,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: { border: { width: 0 }, margin: { bottom: 12 } },
      //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Metric Tons',
            interval: 40000,
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 } 
        },
        width : Browser.isDevice ? '100%' : '75%',
        cornerRadius: { topLeft: 4, topRight: 4 },
        title: 'Walnuts and Almonds Estimated Production for 2023',
        subTitle: 'Source: fas.usda.gov',
        tooltip: { enable: true, header: '<b>${point.x}</b>', format: '${series.name}: <b>${point.y}</b>', enableHighlight: true },
        legendSettings: { visible: true, enableHighlight: true, shapeWidth: 9, shapeHeight: 9 }
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, Category, Tooltip, Highlight]
  },
  methods: {
      axisLabelRender: function (args) {
        let value = parseInt(args.text.replace(/,/g, ''), 10);
        if (value >= 1000) {
            args.text = value / 1000 + 'K';
          }
        },
      tooltipRender: function (args) {
        if (args.text) {
            var value = args.point.y.toLocaleString('en-US');
            args.text = args.series.name + ": <b>" + value + "</b>";
        }
      }
  },
 
};
</script>