<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :subTitle='subTitle'
            :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' type='Pyramid' xName='Foods' yName='Calories' :dataLabel='dataLabel'  name='Food' width='45%' height='80%' neckWidth='15%' gapRatio=0.03 :emptyPointSettings='emptyPointSettings' > </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This Vue Pyramid Chart visualizes food comparison data by using pyramid series.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to render and configure a pyramid chart. This chart is shaped like a triangle, with lines dividing it into sections of varying widths. Depending on the Y coordinate, the width indicates a level of hierarchy among other categories. The DataLabel  represents individual data and its value.</p>
    <p> <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.</p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use pyramid series, we need to inject
        <code>PyramidSeries</code> module using <code>provide: { accumulationchart: [PyramidSeries] },</code> method.
    </p>
    <p>
        More information about the pyramid series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pyramid/" aria-label="Navigate to the documentation for Pyramid Chart in Vue Accumulation Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

import { loadAccumulationChartTheme } from "./theme-color";
let theme = loadAccumulationChartTheme();

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data: function() {
    return {
         theme: theme,
      seriesData: [
        { Foods: "Oils", Calories: 2, DataLabelMappingName: "Oils: 2%" },
        { Foods: "Protein", Calories: 10, DataLabelMappingName: "Protein: 10%" },
        { Foods: "Fruits", Calories: 15, DataLabelMappingName: "Fruits: 15%" },
        { Foods: "Dairy", Calories: 23, DataLabelMappingName: "Dairy: 23%" },
        { Foods: "Vegetables", Calories: 23, DataLabelMappingName: "Vegetables: 23%" },
        { Foods: "Grains", Calories: 27, DataLabelMappingName: "Grains: 27%" }
      ],
        
        dataLabel: {
          name: 'DataLabelMappingName', visible: true, position: 'Outside', connectorStyle: {length: Browser.isDevice ? '10px' : '20px'}, font: {
            fontWeight: '600',  size: Browser.isDevice ? '7px' : '12px' }
        },

        emptyPointSettings: { mode: 'Drop', fill: 'red' },

        legendSettings: {
            visible: false,
            toggleVisibility: false
        },

        tooltip: {  header:'', enable: true, format: '${point.x} : <b>${point.y}% of Daily Intake</b>' , enableHighlight: true},

       
      title: "Food Consumption Pyramid",
      subTitle: 'Source: wikipedia.org'
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {

      textRender: function(args){
            args.text = args.text;
      },
   
   
  },
 
};
</script>