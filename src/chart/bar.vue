<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Bar' xName='Country' columnSpacing='0.1' yName='GDP' name='GDP' :marker='marker'> </e-series>
                <e-series :dataSource='seriesData' type='Bar' xName='Country' columnSpacing='0.1' yName='WorldShare' name="Share in World's GDP" :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This Vue bar chart example visualizes GDP data by country for the year 2017 with a default bar series.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the bar chart. The bar chart is similar to the column chart, but the orientation of the y-axis is horizontal rather than vertical.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
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

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
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
        { Country: "Japan", GDP: 1.71, WorldShare: 6.02 },
        { Country: "France", GDP: 1.82, WorldShare: 3.19 },
        { Country: "India", GDP: 6.68, WorldShare: 3.28 },
        { Country: "Germany", GDP: 2.22, WorldShare: 4.56 },
        { Country: "Italy", GDP: 1.50, WorldShare: 2.40 },
        { Country: "Canada", GDP: 3.05, WorldShare: 2.04 },
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 }
      },

      //Initializing Primary Y Axis
      primaryYAxis:
      {
        labelFormat: '{value}%',
        title: 'GDP (In Percentage)',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0
        }
      },

      marker: {
        dataLabel: {
          visible: false,
          position: 'Top',
          font: {
            fontWeight: '600', color: '#ffffff'
          }
        }
      },
      width: Browser.isDevice ? '100%' : '75%',

      tooltip: {
        enable: true
      },
      legend: {enableHighlight : true},
      title: "GDP by Country in 2017"
    };
  },
  provide: {
    chart: [BarSeries, Legend, Category, Tooltip, DataLabel, Highlight]
  },
  methods: {
    load: function (args) {
      let selectedTheme = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
      this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
  },
 
};
</script>