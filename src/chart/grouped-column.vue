<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='Year' yName='USA_Total' name='USA Total Medals' width=2 :marker='marker' groupName= 'USA' columnWidth= 0.7 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='Year' yName='USA_Gold' name='USA Gold Medals' width=2 :marker='marker' groupName= 'USA' columnWidth= 0.5 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='Year' yName='UK_Total' name='UK Total Medals' width=2 :marker='marker' groupName= 'UK' columnWidth= 0.7 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='Year' yName='UK_Gold' name='UK Gold Medals' width=2 :marker='marker' groupName= 'UK' columnWidth= 0.5 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='Year' yName='China_Total' name='China Total Medals' width=2 :marker='marker' groupName= 'China' columnWidth= 0.7 columnSpacing= 0.1> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='Year' yName='China_Gold' name='China Gold Medals' width=2 :marker='marker' groupName= 'China' columnWidth= 0.5 columnSpacing= 0.1> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This sample visualizes the Olympic medal count using grouped column series. Data labels are used to display the
        values of data points.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure column charts. Column charts are used for comparing the frequency, count, total, or average of data in different categories. You can group the column series by using the <code>GroupName</code> property.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point
        in touch-enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
    </p>
    <p>
      More information about the grouped column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column#grouped-column">documentation section</a>.
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
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

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
          { Year : "2012", USA_Total : 104, USA_Gold : 46, UK_Total : 65, UK_Gold : 29, China_Total : 91, China_Gold : 38},
          { Year : "2016", USA_Total : 121, USA_Gold : 46, UK_Total : 67, UK_Gold : 27, China_Total : 70, China_Gold : 26},
          { Year : "2020", USA_Total : 113, USA_Gold : 39, UK_Total : 65, UK_Gold : 22, China_Total : 88, China_Gold : 38},
            ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width : 0}, minorTickLines: { width : 0}
        },
        chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
             title: 'Medal Count',
             majorTickLines: { width: 0 },
             lineStyle: { width: 0 }
        },

       width : Browser.isDevice ? '100%' : '75%',
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
 
 
};
</script>