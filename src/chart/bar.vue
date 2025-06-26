<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData1' type='Bar' xName='year' columnSpacing=0.3 yName='count' name='Apple' :cornerRadius='cornerRadius' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData2' type='Bar' xName='year' columnSpacing=0.3 yName='count' name='Xiaomi' :cornerRadius='cornerRadius' legendShape='Rectangle'> </e-series>
                <e-series :dataSource='seriesData3' type='Bar' xName='year' columnSpacing=0.3 yName='count' name='Oppo' :cornerRadius='cornerRadius' legendShape='Rectangle'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This example demonstrates the global smartphone sales trends by brand from 2021 to 2023 using a bar chart. The
        data is visualized with bars representing unit sales for different brands, highlighting the comparative
        performance of each brand over the years.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the bar chart. The bar chart is similar to the column
        chart, but the orientation of the y-axis is horizontal rather than vertical.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover over a point or tap on a
        point in touch-enabled devices.
    </p>
    
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use bar series, we need to inject
            <code>BarSeries</code> module using <code>provide: { chart: [BarSeries] }</code> method.
        </p>
        <p>
          More information about the bar series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/bar" aria-label="Navigate to the documentation for Bar Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>

</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, BarSeries, Category, Tooltip, Legend, DataLabel, Highlight} from "@syncfusion/ej2-vue-charts";

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
          { year: '2021', count: 237 },
          { year: '2022', count: 226.4 },
          { year: '2023', count: 234.6 }
      ],
      seriesData2: [
          { year: '2021', count: 190 },
          { year: '2022', count: 153.1 },
          { year: '2023', count: 145.9 }
      ],
      seriesData3: [
          { year: '2021', count: 143 },
          { year: '2022', count: 103.3 },
          { year: '2023', count: 103.1 }
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }
      },

      //Initializing Primary Y Axis
      primaryYAxis:
      {
        labelFormat: '{value}M',
        title: 'Units Sold (in Millions)',
        maximum: 300,
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        },
        margin: {
          bottom: 12
        }
      },
      cornerRadius: { bottomRight: 4, topRight: 4 },
      width: Browser.isDevice ? '100%' : '75%',
      tooltip: {
        enable: true,
        enableHighlight: true,
        header: '<b>${series.name}</b>',
        format: '${point.x} : <b>${point.y}</b>'
      },
      legend: { enableHighlight: true, shapeWidth: 9, shapeHeight: 9 },
      title: 'Global Smartphone Sales Trends by Brand (2021-2023)',
      subTitle: 'Source: wikipedia.org'
    };
  },
  provide: {
    chart: [BarSeries, Legend, Category, Tooltip, DataLabel, Highlight]
  },
  methods: {
    load: function (args) {
      loadChartTheme(args);
    }
  },
 
};
</script>