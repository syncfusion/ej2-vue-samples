<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' :pointRender='pointRender'
            :chartArea='chartArea' :legendSettings='legendSettings' :tooltip='tooltip' :centerLabel='centerLabel' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :border='border' xName='x' :radius='radius' yName='y' :startAngle='startAngle' :dataLabel='dataLabel'
                 innerRadius='65%' name='Project' borderRadius='3'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This Vue donut chart example visualizes mobile browser statistics. Data labels and the center label provide information about the data in the series.
    </p>
</div>

<div id="description">
    <p> In this example, you can see how to render and configure a donut chart. To create a donut in the pie series, we use the <code>innerRadius</code> property. The <code>centerLabel</code> property allows you to specify the default text that will be rendered in the center. You can also customize the text that will render when the mouse pointer is hovered over one of the donut slices using the <code>hoverTextFormat</code> property.</p>
        <p> <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap a point in touch enabled devices.</p>
      
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
          The Charts component’s features are segregated into individual feature modules. To use pie chart, we need to inject <code>PieSeries</code> module using <code>provide: { chart: [PieSeries] }</code> method.
        </p>
    <p>
      More information about the doughnut series can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart" aria-label="Navigate to the documentation for Doughnut Chart in Vue Accumulation Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

import { loadAccumulationChartTheme, donutPointRender } from "./theme-color";
let theme = loadAccumulationChartTheme();

let seriesColor = ['#FFE066', "#FAB666", "#F68F6A", "#F3646A", "#CC555A", "#9C4649"];
export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data: function() {
    return {
         theme:theme,
         seriesData:
        [{ x: 'Chrome', y: 63.5, DataLabelMappingName: 'Chrome: 63.5%' },
        { x: 'Safari', y: 25.0, DataLabelMappingName: 'Safari: 25.0%' },
        { x: 'Samsung Internet', y: 6.0, DataLabelMappingName: 'Samsung Internet: 6.0%' },
        { x: 'UC Browser', y: 2.5, DataLabelMappingName: 'UC Browser: 2.5%' },
        { x: 'Opera', y: 1.5, DataLabelMappingName: 'Opera: 1.5%' },
        { x: 'Others', y: 1.5, DataLabelMappingName: 'Others: 1.5%' }
        ],

        chartArea: {
            border: {
                width: 0
            }
        },
        dataLabel: {
            visible: true,
            name: 'DataLabelMappingName',
            position: 'Outside',
            font: {
                fontWeight: '600',
              size: Browser.isDevice ? '8px' : '12px'
            },
            connectorStyle: { 
                length:  Browser.isDevice ? '10px' : '20px',
                type: 'Curve'
            }
        },
        centerLabel:{
          text : 'Mobile<br>Browser<br>Statistics<br>2024',
          hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%',
          textStyle: {
                fontWeight: '600',
                size: Browser.isDevice ? '8px' : '15px'
            },
        },
        tooltip: {enable: true ,format:"<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>" , enablehighlight: true, header:"" },
        radius: Browser.isDevice ? '40%' : '70%',
        border: { width: 1, color: '#ffffff' },
        legendSettings: {
            visible: false,
        },
      startAngle: Browser.isDevice ? '70' : '60', 
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {
    pointRender: function (args) {
      donutPointRender(args);
    }
  }

};
</script>