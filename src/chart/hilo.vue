<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :crosshair='crosshair' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='data1' :animation='animation' type='Hilo' xName='x' name='Apple Inc' low='low' high='high' > </e-series>

            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the AAPL historical data with default HILO series in the chart. 
        Tooltip and crosshair shows the information about the data and period.
   </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the Hilo type series. You can use <code>border</code>, 
        <code>fill</code> properties to customize the area.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use Hilo series, we need to Inject
        <code>HiloSeries</code> module using <code>provide: { chart: [HiloSeries] },</code> method.
    </p>
    <p>
        More information on the Hilo series can be found in this
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
import { ChartPlugin, Category, HiloSeries, Tooltip, DateTime, Zoom, Crosshair, Logarithmic } from "@syncfusion/ej2-vue-charts";
import { chartData } from './financial-data';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let date1 = new Date(2017, 1, 1);
let returnValue = chartData.filter(filterValue);
function filterValue(value) {
    if (value.x >= date1) {
        return value.x, value.high, value.low;
    }
}


export default Vue.extend({
  data: function() {
    return {
       theme: theme,
       data1: returnValue,
      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            minimum: new Date(2016, 12, 31),
            maximum: new Date(2017, 9, 30),
            majorGridLines: { width: 0 }

        },
        chartArea: {
            border: {
                width: 0
            }
        },

      //Initializing Primary Y Axis
       primaryYAxis: {
            title: 'Price',
            minimum: 100,
            maximum: 180,
            interval: 20,
            labelFormat: '${value}',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
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
        },
        date1: (2017, 1, 1),
        
      title: "AAPL Historical"
    
    };
  },
  provide: {
    chart: [HiloSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair]
  },
  methods: {
  },
 
});
</script>