<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
         :width='width' :legendSettings='legendSettings' :axes='axes' :crosshair='crosshair'>
            <e-series-collection>
                <e-series :dataSource='cData' type='Line' xName='xDate' yName='High' name='Product X' :marker='marker' width=2> </e-series>
                <e-series :dataSource='cData' type='HiloOpenClose' xName='xDate' yAxisName='yAxis' name='Product X' :border='border' bearFillColor= '#2ecd71' bullFillColor= '#e74c3d' width=2  high= 'High' low= 'Low' open= 'Open' close= 'Close'> </e-series>

            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample illustrates crosshair feature in chart. To see crosshair, hover or long press the chart.
    </p>
</div>

<div id="description">
    <p>This sample demonstrates the crosshair behavior in chart. Crosshair is used to inspect or focus on an individual data point.
        You can customize the axis tooltip using <code>crosshairTooltip</code> properties in axis.
    </p>
    <p> 
         Hover the chart area to view crosshair and its tooltip. Touch and hold to enable crosshair in touch enabled devices. 
    </p>
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use Crosshair, we need to inject
            <code>Crosshair</code> module using <code> provide: { chart: [Crosshair] },</code> method.
        </p>
        <p>
            More information on the Crosshair can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-crosshairOptions.html">documentation section</a>.
        </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, HiloOpenCloseSeries, DateTime, Crosshair } from "@syncfusion/ej2-vue-charts";
import { axesData } from './financial-data';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
     cData : axesData,
      //Initializing Primary X Axis
      primaryXAxis: {
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            labelFormat: 'MMM'
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 83, maximum: 87, interval: 1,
            title: 'Millions in USD',
            labelFormat: '{value}M',
            rowIndex: 0,
            crosshairTooltip: {
                enable: true
            }
        },

        axes: [
            {
                majorGridLines: { width: 0 },
                rowIndex: 0,
                opposedPosition: true,
                minimum: 82, maximum: 88, interval: 2,
                name: 'yAxis',
                title: 'Millions in USD (Stock)',
                crosshairTooltip: { enable: true }
            }
        ],

        crosshair: { enable: true },

        legendSettings: { visible: false },

        marker: {
                    visible: true
                },


        width: Browser.isDevice ? '100%' : '80%',

       border: { width: 1.5 },
        
      title: "Conns,Inc Stock Details"
    };
  },
  provide: {
    chart: [LineSeries, DateTime, Crosshair, HiloOpenCloseSeries]
  },
  methods: {
  },
 
});
</script>