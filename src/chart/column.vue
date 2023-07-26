<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' :tooltip='tooltip' :load='load' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='Country' yName='GoldMedal' name='Gold' width=2 :marker='marker' tooltipMappingName='MappingName' columnSpacing='0.1'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='Country' yName='SilverMedal' name='Silver' width=2 :marker='marker' tooltipMappingName='MappingName' columnSpacing='0.1'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='Country' yName='BronzeMedal' name='Bronze' width=2 :marker='marker' tooltipMappingName='MappingName' columnSpacing='0.1'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This Vue column chart example visualizes the medal count from the Rio Olympics with the default column series in the chart.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure a column chart. The column chart is used to compare the frequency, count, total, or average of data in different categories.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
    </p>
    <p>
      More information about the column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, DataLabel, Tooltip, Legend, Highlight} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
        { Country : "GBR", GoldMedal : 27, SilverMedal : 23, BronzeMedal : 17, MappingName : "Great Britain" },
        { Country : "CHN", GoldMedal : 26, SilverMedal : 18, BronzeMedal : 26, MappingName : "China" },
        { Country : "AUS", GoldMedal : 8, SilverMedal : 11, BronzeMedal : 10, MappingName : "Australia" },
        { Country : "RUS", GoldMedal : 19, SilverMedal : 17, BronzeMedal : 20, MappingName : "Russia" },
        { Country : "GER", GoldMedal : 17, SilverMedal : 10, BronzeMedal : 15, MappingName : "Germany" },
        { Country : "UA", GoldMedal : 2, SilverMedal : 5, BronzeMedal : 24, MappingName : "Ukraine" },       
        { Country : "ES", GoldMedal : 7, SilverMedal : 4, BronzeMedal : 6, MappingName : "Spain" },
        { Country : "UZB", GoldMedal : 4, SilverMedal : 2, BronzeMedal : 7, MappingName : "Uzbekistan" },
        { Country : "JPN", GoldMedal : 12, SilverMedal : 8, BronzeMedal : 21, MappingName : "Japan" },
        { Country : "NL", GoldMedal : 46, SilverMedal : 37, BronzeMedal : 38, MappingName : "NetherLand" },
        { Country : "USA", GoldMedal : 8, SilverMedal : 7, BronzeMedal : 4, MappingName : "United States" },
      ],

      //Initializing Primary X Axis
        primaryXAxis: {
             valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0 ,
        },
        chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
             title: 'Medal Count',
             maximum: 50,
             interval: 10,
             majorTickLines: { width: 0 }, lineStyle: { width: 0 }, 
        },

       width : Browser.isDevice ? '100%' : '75%',
     marker:
           {  dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } }},
      legend: {enableHighlight : true},
      tooltip: { 
            enable: true,
            header: '<b>${point.tooltip}</b>',
            shared: true
         }, 
      title: "Olympic Medal Counts - RIO",
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip, Highlight]
  },
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
         if (selectedTheme === 'highcontrast') {
            args.chart.series[0].marker.dataLabel.font.color = '#000000';
            args.chart.series[1].marker.dataLabel.font.color = '#000000';
            args.chart.series[2].marker.dataLabel.font.color = '#000000';
            }
    }
  },
 
});
</script>