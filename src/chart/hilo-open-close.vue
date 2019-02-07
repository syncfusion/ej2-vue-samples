<template>
  <div class="control-section">
        <h4 align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;">AAPL Historical</h4>
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :crosshair='crosshair' :tooltip='tooltip'
            :axisLabelRender='axisLabelRender'>
            <e-series-collection>
                <e-series :dataSource='data1' :animation='animation' type='HiloOpenClose' xName='x' name='Apple Inc' low='low' high='high' open='open' close='close' bearFillColor='#2ecd71' bullFillColor='#e74c3d' > </e-series>

            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the AAPL historical data with default HILO Open Close series in the chart. 
        Tooltip and crosshair shows the information about the data and period.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the Hilo Open Close type Series. You can use <code>border</code>, 
        <code>fill</code> properties to customize the area.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use Hilo Open Close series, we need to Inject
        <code>HiloOpenCloseSeries</code> module using <code>provide: { chart: [HiloOpenCloseSeries] },</code> method.
    </p>
    <p>
        More information on the Hilo Open Close series can be found in this
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
import { ChartPlugin, Category, HiloOpenCloseSeries, Tooltip, DateTime, Zoom, Crosshair, Logarithmic } from "@syncfusion/ej2-vue-charts";
import { chartData } from './stock-chart-data';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let date1 = new Date(2017, 1, 1);

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        data1: chartData,
      //Initializing Primary X Axis
      primaryXAxis: {
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
             majorGridLines: { width: 0 }
     },

      //Initializing Primary Y Axis
       primaryYAxis: {
            title: 'Price',
            labelFormat: 'n0',
           lineStyle: { width: 0 },
            majorTickLines: { width: 0 },rangePadding: "None"
        },
        chartArea: {
            border: {
                width: 0
            }
        },

        legendSettings: { visible: false },

        width: Browser.isDevice ? '100%' : '80%',

      animation: { enable: true },

      tooltip: {
            enable: true, shared: true
        },
         crosshair: {
            enable: true, lineType: 'Vertical', line: {
                width: 0,
            }
        }
    };
  },
  provide: {
    chart: [HiloOpenCloseSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]
  },
  methods: {
    axisLabelRender: function(args){
         if (args.axis.title === 'Price') {
                args.text = '$' + args.text;
            }
    }
   }
   
 
});
</script>