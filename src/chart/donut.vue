<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' 
            :chartArea='chartArea' :legendSettings='legendSettings'  :pointRender='pointRender'  :centerLabel='centerLabel' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :border='border' xName='Browser' :radius='radius' yName='Users' :startAngle='startAngle' :dataLabel='dataLabel'
                 innerRadius='65%' name='Project'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This Vue donut chart example visualizes mobile browser statistics. The center label shows information about the data in the donut series.
    </p>
</div>

<div id="description">
    <p>
      In this example, you can see how to render and configure a donut chart. To create a donut in the pie series, we use the <code>innerRadius</code> property. The <code>centerLabel</code> property allows you to specify the default text that will be rendered in the center. You can also customize the text that will render when the mouse pointer is hovered over one of the donut slices using the <code>hoverTextFormat</code> property.</p>
      
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
          The Charts component’s features are segregated into individual feature modules. To use pie chart, we need to inject <code>PieSeries</code> module using <code>provide: { chart: [PieSeries] }</code> method.
        </p>
    <p>
      More information about the donut series can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart" aria-label="Navigate to the documentation for Doughnut Chart in Vue Accumulation Chart component">documentation section</a>.
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
        [{ Browser: 'Chrome', Users: 61.3, DataLabelMappingName: Browser.isDevice ? 'Chrome:<br> 61.3%' : 'Chrome: 61.3%' }, 
          { Browser: 'Safari', Users: 24.6, DataLabelMappingName: Browser.isDevice ? 'Safari:<br> 24.6%' : 'Safari: 24.6%' },
          { Browser: 'Edge', Users: 5.0, DataLabelMappingName: 'Edge: 5.0%' },
          { Browser: 'Samsung Internet', Users: 2.7, DataLabelMappingName: Browser.isDevice ? 'Samsung Internet:<br> 2.7%' :'Samsung Internet: 2.7%' },
          { Browser: 'Firefox', Users: 2.6, DataLabelMappingName: Browser.isDevice ? 'Firefox:<br> 2.6%' : 'Firefox: 2.6%' },
          { Browser: 'Others', Users: 3.6, DataLabelMappingName: Browser.isDevice ? 'Others: <br> 3.6%' : 'Others: 3.6%' }
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
              
            },
            connectorStyle: { 
                length: '20px',
                type: 'Curve'
            }
        },
        centerLabel:{
          text : 'Mobile<br>Browsers<br>Statistics',
          hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%',
          textStyle: {
                fontWeight: '600',
                size: Browser.isDevice ? '8px' : '15px'
            },
        },
        tooltip: {enable: true ,format:"<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>" , header:"" },
        radius: Browser.isDevice ? '40%' : '70%',
        border: { width: 1 },
        legendSettings: {
            visible: false,
        },
      startAngle: Browser.isDevice ? '30' : '62', 
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {
    pointRender: function(args) {
      donutPointRender(args);
    }

  }

};
</script>