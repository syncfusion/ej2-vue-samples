<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='Year' yName='General' name='General Motors' width=2 columnWidth=0.5 :border='border' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='Year' yName='Honda' name='Honda' width=2 columnWidth=0.5 :border='border' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='Year' yName='Suzuki' name='Suzuki' width=2 columnWidth=0.5 :border='border' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='Year' yName='BMW' name='BMW' width=2 columnWidth=0.5 :border='border'> </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        This Vue 100% stacked column chart example visualizes motor vehicle production by manufacturer with a default stacked column series. The legend in the sample shows the information about those series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the 100% stacked column chart. The 100% stacked column chart displays multiple series of data as stacked columns, ensuring that the cumulative proportion of each stacked element always totals 100%.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use 100% stacking column series, we need
        to inject
        <code>StackingColumnSeries</code> module using <code>provide: { chart: [ StackingColumnSeries ] },</code> method.
    </p>
    <p>
        More information about the 100% stacked column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stacked-column" aria-label="Navigate to the documentation for 100% Stacked Column Chart in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StackingColumnSeries, Legend, Category, Tooltip, Highlight} from "@syncfusion/ej2-vue-charts";

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
        { Year : "2013", General : 9628912, Honda : 4298390, Suzuki : 2842133, BMW : 2006366 },
        { Year : "2014", General : 9609326, Honda : 4513769, Suzuki : 3016710, BMW : 2165566 },
        { Year : "2015", General : 7485587, Honda : 4543838, Suzuki : 3034081, BMW : 2279503 },
        { Year : "2016", General : 7793066, Honda : 4999266, Suzuki : 2945295, BMW : 2359756 },
        { Year : "2017", General : 6856880, Honda : 5235842, Suzuki : 3302336, BMW : 2505741 },
              ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelIntersectAction: 'Rotate45',
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            rangePadding: 'None',
            interval: 20,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },   
            minorTickLines: { width: 0 },
            lineStyle: {
                width: 0
            }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        tooltip: {
            enable: true,
            format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
        },
      border: {color: '#ffffff', width:1},
      legend: {enableHighlight : true},
      width : Browser.isDevice ? '100%' : '75%',
      title: "Motor Vehicle Production by Manufacturer"
    };
  },
  provide: {
    chart: [StackingColumnSeries, Category, Tooltip, Legend, Highlight]
  },

  methods: {
  
  },
 
};
</script>