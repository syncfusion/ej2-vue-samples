<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Warmest' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='Coldest' width=2 :marker='marker1'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
       <a href="http://www.yr.no/place/USA/Alaska/Hatcher_Pass/statistics.html" target="_blank">www.yr.no</a>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates the rendering of date time axis in the chart with weather statistics analysis of Alaska for a year.
    </p>
</div>
<div id="description">    
    <p>
        DateTime data is used in this sample and data values are represented using dataLabel. Date time axis uses date time scale and displays the date time values as axis labels. To render dateTime axis, set <code>valueType</code> in axis to <code>DateTime</code>.
        Format for the axis label will be calculated based on intervalType of axis or we can set the format through labelFormat property in axis.
    </p>   
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use DateTime axis, we need to inject
            <code>DateTime</code> module using <code> provide: { chart: [ DateTime ] },</code> method.
        </p>
        <p>
            More information on the DateTime axis can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
        </p>      
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, Legend, DateTime, DataLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
         { x: new Date(2016, 3, 1), y: 6.3 },
         { x: new Date(2016, 4, 1), y: 13.3 }, { x: new Date(2016, 5, 1), y: 18.0 },
         { x: new Date(2016, 6, 1), y: 19.8 }, { x: new Date(2016, 7, 1), y: 18.1 },
         { x: new Date(2016, 8, 1), y: 13.1 }, { x: new Date(2016, 9, 1), y: 4.1 }

      ],
      seriesData1: [
            { x: new Date(2016, 3, 1), y: -5.3 },
            { x: new Date(2016, 4, 1), y: 1.0 }, { x: new Date(2016, 5, 1), y: 6.9 },
            { x: new Date(2016, 6, 1), y: 9.4 }, { x: new Date(2016, 7, 1), y: 7.6 },
            { x: new Date(2016, 8, 1), y: 2.6 }, { x: new Date(2016, 9, 1), y: -4.9 }

      ],
      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'MMM',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            edgeLabelPlacement: 'Shift',
            minimum: -20,
            maximum: 30,
            interval: 10,
            labelFormat: '{value}°C',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },

       marker: {
                    visible: true,
                    height: 10, width: 10,
                    shape: 'Pentagon',
                    dataLabel: { visible: true, position: 'Top' }
                },
       
        marker1: {
                    visible: true, height: 10, width: 10, shape: 'Diamond',
                    dataLabel: { visible: true, position: 'Bottom' }
                },

       width: Browser.isDevice ? '100%' : '60%',
      title: "Alaska Weather Statistics - 2016"
    };
  },
  provide: {
    chart: [LineSeries, Legend, DateTime, DataLabel]
  },
  methods: {
  },
 
});
</script>