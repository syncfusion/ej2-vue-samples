<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :isTransposed='isTransposed'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='RangeColumn' xName='Month' high='CA_HighTemp' low='CA_LowTemp' :marker='marker' columnSpacing='0.1' tooltipMappingName='Text'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This sample shows the maximum and minimum temperatures for several months with the default range column series inverted. The tooltip shows the information for the data point.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the range column chart in an inverted manner. You can use <code>IsTransposed</code> property to invert your chart.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a point in touch-enabled devices.
    </p>

    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use range column series, we need to inject
        <code>RangeColumnSeries</code> module using <code>provide: { chart: [RangeColumnSeries] }</code> method.
    </p>
    <p>
      More information about the column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/range-column" aria-label="Navigate to the documentation for Range Column in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, RangeColumnSeries, Category, Tooltip, Legend, DataLabel} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
         theme:theme,
      seriesData: [
        { Month : "Jan", CA_LowTemp : 28, CA_HighTemp : 72, Text : "January", CO_LowTemp : 38, CO_HighTemp : 78 },
        { Month : "Feb", CA_LowTemp : 25, CA_HighTemp : 75, Text : "February", CO_LowTemp : 38, CO_HighTemp : 78 },
        { Month : "Mar", CA_LowTemp : 18, CA_HighTemp : 65, Text : "March", CO_LowTemp : 27, CO_HighTemp : 78 },
        { Month : "Apr", CA_LowTemp : 22, CA_HighTemp : 69, Text : "April", CO_LowTemp : 38, CO_HighTemp : 78 },
        { Month : "May", CA_LowTemp : 56, CA_HighTemp : 87, Text : "May", CO_LowTemp : 28, CO_HighTemp : 79 },
        { Month : "Jun", CA_LowTemp : 48, CA_HighTemp : 75, Text : "June", CO_LowTemp : 38, CO_HighTemp : 78 },
        { Month : "Jul", CA_LowTemp : 40, CA_HighTemp : 78, Text : "July", CO_LowTemp : 37, CO_HighTemp : 66 },
        { Month : "Aug", CA_LowTemp : 35, CA_HighTemp : 73, Text : "August", CO_LowTemp : 38, CO_HighTemp : 78 },
        { Month : "Sep", CA_LowTemp : 43, CA_HighTemp : 64, Text : "September", CO_LowTemp : 25, CO_HighTemp : 52 },
        { Month : "Oct", CA_LowTemp : 38, CA_HighTemp : 77, Text : "October", CO_LowTemp : 38, CO_HighTemp : 78 },
        { Month : "Nov", CA_LowTemp : 28, CA_HighTemp : 54, Text : "November", CO_LowTemp : 20, CO_HighTemp : 60 },
        { Month : "Dec", CA_LowTemp : 29, CA_HighTemp : 56, Text : "December", CO_LowTemp : 20, CO_HighTemp : 60 }
            ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },


      //Initializing Primary Y Axis
          primaryYAxis: {
            title: 'Temperature (In Fahrenheit)',
            labelFormat: '{value}˚F',
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },

        isTransposed: true,

        width : Browser.isDevice ? '100%' : '75%',
     
      tooltip: { 
            enable: true,
            header: '<b>${point.tooltip}</b>',
            format: 'Temperature : <b>${point.low} - ${point.high}</b>',
            enableMarker: false
         },
      marker: { dataLabel:{visible: true, position: 'Outer'} },
      title: "Temperature Variation"
    };
  },
  provide: {
    chart: [RangeColumnSeries, Legend, Category, Tooltip, DataLabel]
  },
  methods: {
    load: function(args) {
        loadChartTheme(args);
    }
  },
 
};
</script>