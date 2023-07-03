<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingBar100' xName='Month' yName='AppleSales' name='Apple' width=2 columnWidth=0.6 :border='border'> </e-series>
                <e-series :dataSource='seriesData' type='StackingBar100' xName='Month' yName='OrangeSales' name='Orange' width=2 columnWidth=0.6 :border='border'> </e-series>
                <e-series :dataSource='seriesData' type='StackingBar100' xName='Month' yName='Wastage' name='Wastage' width=2 columnWidth=0.6 :border='border'> </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
  <div id="action-description">
    <p>
      This Vue 100% stacked bar chart example visualizes a comparison of sales percentages over several months with a default 100% stacked bar series. The legend in the sample shows more information about the series.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the 100% stacked bar chart. The 100% stacked bar chart displays multiple series of data as stacked bars, ensuring that the cumulative value of each stacked element always totals 100%.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use 100% stacking bar series, we need to
        inject
        <code>StackingBarSeries</code> module using <code>provide: { chart: [ StackingBarSeries ] },</code> method.
    </p>
    <p>
      More information about the 100% stacked bar series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stacked-bar">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, StackingBarSeries, Legend, Category, Tooltip, Theme, Highlight} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
      { Month : "Jan", AppleSales : 6, OrangeSales : 6, Wastage : 1 },
        { Month : "Feb", AppleSales : 8, OrangeSales : 8, Wastage : 1.5 },
        { Month : "Mar", AppleSales : 12, OrangeSales : 11, Wastage : 2 },
        { Month : "Apr", AppleSales : 15, OrangeSales : 16, Wastage : 2.5 },
        { Month : "May", AppleSales : 20, OrangeSales : 21, Wastage : 3 },
        { Month : "Jun", AppleSales : 24, OrangeSales : 25, Wastage : 3.5 }
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
            title: 'Sales (In Percentage)',
            lineStyle: { width: 0},
            majorTickLines: {width: 0},
            labelFormat: '{value}',
            edgeLabelPlacement: 'Shift'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        legend: {enableHighlight : true},
        tooltip: {
            enable: true,
            format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
         },
      border: {color: '#ffffff', width:1},
      width : Browser.isDevice ? '100%' : '75%',
      title: "Sales Comparison"
    };
  },
  provide: {
    chart: [StackingBarSeries, Legend, Category, Tooltip, Highlight]
  },
  methods: {
  
  },
 
});
</script>