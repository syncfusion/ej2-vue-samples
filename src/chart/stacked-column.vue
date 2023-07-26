<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :axisLabelRender='OnChartAxisLabelRender' :legendSettings='legend' >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='Year' yName='General' name='General Motors' width=2 columnWidth=0.6 :border='border' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='Year' yName='Honda' name='Honda' width=2 columnWidth=0.6 :border='border' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='Year' yName='Suzuki' name='Suzuki' width=2 columnWidth=0.6 :border='border' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='Year' yName='BMW' name='BMW' width=2 columnWidth=0.6 :border='border'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
      This Vue stacked column chart example visualizes motor vehicle production by manufacturer with a default stacked column series. The legend in the sample shows more information about those series.
    </p>
</div>
<div id="description">
  <p>
    In this example, you can see how to render and configure the stacked column chart. The stacked column chart stacks points in the series vertically. You can also use the <code>StackingGroup</code> property to group stacked collections based on category.
  </p>
  <p>
    <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
  </p>
   <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use stacking column series, we need to inject
            <code>StackingColumnSeries</code> module using <code>provide: { chart: [StackingColumnSeries] }</code> method.
        </p>
        <p>
          More information about the stacked column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stack-column">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, StackingColumnSeries, Legend, Category, Tooltip, Highlight} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
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
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            lineStyle: { width: 0 },
            labelIntersectAction: 'Rotate45',
            valueType: 'Category'
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'Vehicles Production (In Millions)',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
        },
        chartArea: {
            border: {
                width: 0
            }
        },

      tooltip: {
            enable: true
        },
        legend: {enableHighlight : true},
        border: {color: '#ffffff', width:1},
        width : Browser.isDevice ? '100%' : '75%',
      title: "Motor Vehicle Production by Manufacturer"
    };
  },
  provide: {
    chart: [StackingColumnSeries, Legend, Category, Tooltip, Highlight]
  },
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

    },
    OnChartAxisLabelRender : function(args){
      if(args.value > 999999 || args.value < -999999) {
      args.text = args.text.replace("0000000","0M").replace("000000", "M");
      }
  },
    }
});
</script>