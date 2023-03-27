<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'  :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='cData' type='RangeArea' xName='x' :border='border' width=2 opacity=0.4 high='high' low='low' :enableTooltip='enableTooltip'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This Vue Range Area Chart example visualizes minimum and maximum temperatures of different days with default range area series.
    </p>
</div>
<div id="description">
    <p>In this example, you can see how to render and configure the range area chart. This chart is used to display continuous data points as a set of lines varying between high and low values over time intervals and across different categories.
     </p>     
      <br>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use range area series, we need to inject
            <code>RangeAreaSeries</code> module using <code>provide: { chart: [RangeAreaSeries] }</code> method.
        </p>
        <p>
          More information about the area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#area-charts">documentation section</a>.
        </p> 
</div>

</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, RangeAreaSeries, DateTime, LineSeries, Tooltip} from "@syncfusion/ej2-vue-charts";
import { chartDataValues } from './financial-data';
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
         cData : chartDataValues,
      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'DateTime',
          labelFormat: 'dd MMM',
          edgeLabelPlacement: (Browser.isDevice) ? 'Shift' : 'Hide',
          majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
      //Initializing Primary Y Axis
      primaryYAxis:
        {
          labelFormat: '{value}˚C',
                        lineStyle: { width: 0 },
                        minimum: -10,
                        maximum: 25,
                        interval: 5,
                        majorTickLines: { width: 0 }
        },
        marker: {
        visible :true,
        width : 7 ,
        height : 7
        },
      enableTooltip:true,
       width : Browser.isDevice ? '100%' : '75%',
       legendSettings: {
            visible: false
        },
          border: {
                    width: 2
                },
        tooltip: {
            enable: true,
            format: 'Temperature : <b>${point.low} - ${point.high}</b>',
            shared: false,
            header: '<b>${point.x}</b>'
        },
      title: "Temperature Variation by Month"
    };
  },
  provide: {
    chart: [RangeAreaSeries,  DateTime, LineSeries, Tooltip]
  },
  methods: {
    
  },
 
});
</script>