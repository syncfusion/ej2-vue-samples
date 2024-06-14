<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :enableSideBySidePlacement='false'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='ConsumerName' yName='TotalCount' name='Total' width=2 columnWidth=0.5 :marker='dataLebelMarker' > </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='ConsumerName' yName='AppleCount' name='Apple' width=2 columnWidth=0.4 :marker='marker' > </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='ConsumerName' yName='OrangeCount' name='Orange' width=2 columnWidth=0.3 :marker='marker' > </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='ConsumerName' yName='GrapesCount' name='Grapes' width=2 columnWidth=0.2 :marker='marker' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This sample shows four series of columns in which each column is rendered with a different width and placed behind the previous column.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the column chart. The column chart is used to compare the frequency, count, total, or average of data in different categories. The <code>EnableSideBySidePlacement</code> property is used to enable and disable side-by-side positioning. <code>DataLabel</code> is used to present details about individual data points.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
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
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, DataLabel, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
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
        { ConsumerName : "Jamesh", TotalCount : 10, AppleCount : 5, OrangeCount : 4, GrapesCount : 1, DataLabelMappingName : "Total 10" },
        { ConsumerName : "Michael", TotalCount : 9, AppleCount : 4, OrangeCount : 3, GrapesCount : 2, DataLabelMappingName : "Total 9" },
        { ConsumerName : "John", TotalCount : 11, AppleCount : 5, OrangeCount : 4, GrapesCount : 2, DataLabelMappingName : "Total 11" },
        { ConsumerName : "Jack", TotalCount : 8, AppleCount : 5, OrangeCount : 2, GrapesCount : 1, DataLabelMappingName : "Total 8" },
        { ConsumerName : "Lucas", TotalCount : 10, AppleCount : 6, OrangeCount : 3, GrapesCount : 1, DataLabelMappingName : "Total 10" }
      ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, minorTickLines: {width: 0}, interval: 1, majorGridLines: { width: 0 }, majorTickLines: {width: 0}, minorTickLines: {width : 0}
        },
        chartArea: { border: { width: 0 } },


      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'Fruits Count',
          majorTickLines: { width: 0 }, lineStyle: { width: 0 },
        },

       width : Browser.isDevice ? '100%' : '75%',

       marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
      dataLebelMarker: {dataLabel: { visible: true, name: 'DataLabelMappingName', position: Browser.isDevice ? 'Outer' : 'Top', font: {size: '11px',  fontWeight: '600', color: Browser.isDevice ? '' : '#ffffff' } } },
      tooltip: { 
            enable: true,
             shared: true
         },
      
      title: "Fruit Consumption"
    };
  },
  provide: {
    chart: [ColumnSeries, DataLabel, Category, Tooltip, Legend]
  },
  methods: {
  },
 
};
</script>