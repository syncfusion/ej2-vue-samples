<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' :tooltip='tooltip' :load='load'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='USA Total' width=2 :marker='marker' groupName= 'USA' columnWidth= 0.7 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='USA Gold' width=2 :marker='marker' groupName= 'USA' columnWidth= 0.5 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='UK Total' width=2 :marker='marker' groupName= 'UK' columnWidth= 0.7 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData3' type='Column' xName='x' yName='y' name='UK Gold' width=2 :marker='marker' groupName= 'UK' columnWidth= 0.5 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData4' type='Column' xName='x' yName='y' name='China Total' width=2 :marker='marker' groupName= 'China' columnWidth= 0.7 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData5' type='Column' xName='x' yName='y' name='China Gold' width=2 :marker='marker' groupName= 'China' columnWidth= 0.5 columnSpacing= 0.1> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the Olympic medal count using grouped column series. Data labels are used to display the values of data points.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the column type charts. 
        Column type charts are used for comparing the frequency, count, total or average of data in different categories. 
        You can group the column series by using <code>groupName</code> property.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
    </p>
    <p>
        More information on the column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#column-charts">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, DataLabel, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default Vue.extend({
  data: function() {
    return {
      seriesData: [
               { x: '2012', y: 104 }, { x: '2016', y: 121 }, { x: '2020', y: 113 }
              ],

      seriesData1: [
             { x: '2012', y: 46 }, { x: '2016', y: 46 }, { x: '2020', y: 39 }
         ],

       seriesData2: [
             { x: '2012', y: 65 }, { x: '2016', y: 67 },{ x: '2020', y: 65 }
        ],

        seriesData3: [
               { x: '2012', y: 29 }, { x: '2016', y: 27 },{ x: '2020', y: 22 }
              ],

      seriesData4: [
             { x: '2012', y: 91 }, { x: '2016', y: 70 },{ x: '2020', y: 88 }
         ],

       seriesData5: [
             { x: '2012', y: 38 }, { x: '2016', y: 26 },{ x: '2020', y: 38 }
        ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
            majorGridLines: { width: 0 }, majorTickLines: { width: 0 },
            lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },

       width : Browser.isDevice ? '100%' : '60%',
     marker: 
     { dataLabel: 
           { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } 
           }
           
      },
      tooltip: { 
            enable: true
         },
      
      title: "Olympics Medal Tally"
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip]
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
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    }
  },
 
});
</script>