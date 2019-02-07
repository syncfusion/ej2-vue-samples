<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :enableSideBySidePlacement='false'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Total' width=2 columnWidth=0.5 :marker='marker' > </e-series>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='Apple' width=2 columnWidth=0.4 :marker='marker1' > </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Orange' width=2 columnWidth=0.3 :marker='marker1' > </e-series>
                <e-series :dataSource='seriesData3' type='Column' xName='x' yName='y' name='Grapes' width=2 columnWidth=0.2 :marker='marker1' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates four column series. Each column is rendered with different column width and it is placed  behind to another one.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the column type charts. Column type charts are used for comparing
        the frequency, count, total or average of data in different categories. You can use <code>border</code>,
        <code>fill</code> properties to customize the vertical rectangle. <code>dataLabel</code> is used to represent individual
        data and its value. You can enable side by side position by <code>enableSideBySidePlacement</code> property.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
    </p>
    <p>
        More information on the column series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>

</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, DataLabel, Tooltip} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
               { x: 'Jamesh', y: 10, text: 'Total 10' },
               { x: 'Michael', y: 9, text: 'Total 9' },
               { x: 'John', y: 11, text: 'Total 11' }

              ],

      seriesData1: [
             { x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }
         ],

       seriesData2: [
             { x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }
        ],

        seriesData3: [
             { x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }
        ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },


      //Initializing Primary Y Axis
         primaryYAxis:
        {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },

        

       width : Browser.isDevice ? '100%' : '60%',

       marker: { dataLabel: { visible: true, name: 'text', position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },

       marker1: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
      
      tooltip: { 
            enable: true,
             shared: true
         },
      
      title: "Fruit Consumption"
    };
  },
  provide: {
    chart: [ColumnSeries, DataLabel, Category, Tooltip]
  },
  methods: {
  },
 
});
</script>