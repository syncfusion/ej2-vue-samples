<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='RangeColumn' xName='Days' high='IND_HighTemp' low='IND_LowTemp'  :marker='marker' width=2 columnSpacing='0.1' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This Vue range column chart example visualizes the maximum and minimum temperatures for a week in different countries with the default range column series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the range column chart. The range column chart is used to display a range of data by plotting two y-values per data point. The two y-values are used as the upper and lower bounds of a column.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use range column series, we need to inject
        <code>RangeColumnSeries</code> module using <code>provide: { chart: [RangeColumnSeries] }</code> method.
    </p>
    <p>
        More information about the range column type series can be found in this
        <a target="_blank" href="https://helpej2.syncfusion.com/vue/documentation/chart/chart-type/range-column">documentation section</a>.
    </p>
</div>

</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, RangeColumnSeries, Category, Tooltip, Highlight, DataLabel} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
               { Days : "Sun", IND_LowTemp : 3.1, IND_HighTemp : 10.8, GER_LowTemp : 2.5, GER_HighTemp : 9.8  },
               { Days : "Mon", IND_LowTemp : 5.7, IND_HighTemp : 14.4, GER_LowTemp : 4.7, GER_HighTemp : 11.4  },
               { Days : "Tue", IND_LowTemp : 8.4, IND_HighTemp : 16.9, GER_LowTemp : 6.4, GER_HighTemp : 14.4  },
               { Days : "Wed", IND_LowTemp : 9.6, IND_HighTemp : 18.2, GER_LowTemp : 9.6, GER_HighTemp : 17.2 },
               { Days : "Thu", IND_LowTemp : 8.5, IND_HighTemp : 16.1, GER_LowTemp : 7.5, GER_HighTemp : 15.1 },
               { Days : "Fri", IND_LowTemp : 6.0, IND_HighTemp : 12.5, GER_LowTemp : 3.0, GER_HighTemp : 10.5 },
               { Days : "Sat", IND_LowTemp : 1.5, IND_HighTemp : 6.9, GER_LowTemp : 1.2, GER_HighTemp : 7.9  }
              ],

      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
           majorTickLines: { width: 0 },
           minorTickLines: { width: 0 }
        },


      //Initializing Primary Y Axis
          primaryYAxis: {
            title: 'Temperature (In Celsius)',
            labelFormat: '{value}˚C',
            maximum: 20,
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
       width : Browser.isDevice ? '100%' : '75%',
        tooltip: { 
            enable: true,
            header: '<b>${point.x}</b>',
            format: 'Temperature : <b>${point.low} - ${point.high}</b>'
         },
        marker: { dataLabel:{visible: true, position: 'Outer'} },
      title: "Temperature Variation by Week"
    };
  },
  provide: {
    chart: [RangeColumnSeries,  Category, Tooltip, Highlight, DataLabel]
  },
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

    }
  },
 
});
</script>