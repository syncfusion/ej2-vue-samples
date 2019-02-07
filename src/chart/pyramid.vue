<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :legendSettings='legendSettings' :tooltip='tooltip' :load='load'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' type='Pyramid' xName='x' yName='y' :dataLabel='dataLabel'  name='Food' width='45%' height='80%' neckWidth='15%' gapRatio=0.03 explode='true' :emptyPointSettings='emptyPointSettings' > </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
        This sample visualizes food comparison data by using pyramid series. 
        Datalabel shows the Information about the points.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to render pyramid chart.<code>dataLabel</code> is used to represent individual data and its value.</p>
    <p> <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>
    <p> <code>Legends</code> are disabled in this example, the information about it can be read using <code>Tooltip</code>.</p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use pyramid series, we need to inject
        <code>PyramidSeries</code> module using <code>provide: { accumulationchart: [PyramidSeries] },</code> method.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartPlugin, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
            { x: 'Sweet Treats', y: 120, text: '120 cal' },
            { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
            { x: 'Vegetables', y: 470, text: '470 cal' },
            { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
            { x: 'Fruits', y: 520, text: '520 cal' },
            { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' }
      ],
     
      //Initializing Primary X Axis
       primaryXAxis: {
            title: 'Years',
            interval: Browser.isDevice ? 2 : 1,
            labelIntersectAction: 'Rotate45',
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },

      //Initializing Primary Y Axis
      primaryYAxis:
        {
            title: 'Growth',
            minimum: -3,
            maximum: 3,
            interval: 1,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 },
            labelFormat: '{value}B',
        },
        
        dataLabel: {
                name: 'text', visible: true, position: 'Inside', font: {
                    fontWeight: '600'
                }
        },

        emptyPointSettings: { mode: 'Drop', fill: 'red' },

        legendSettings: {
            visible: false
        },

        tooltip: { enable: true, format: '${point.x} : <b>${point.y} cal</b>' },

       
      title: "Food Comparison Chart"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {

      textRender: function(args){
            args.text = args.text;
      },
    load: function(args) {
         if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
                args.accumulation.series[0].width = '80%';
                args.accumulation.series[0].height = '60%';
            }
    },
   
    resized: function(args) {
        let accumulation = this.$refs.args.chart;
            let bounds = document.getElementById('chartcontainer').getBoundingClientRect();
            if (bounds.width < bounds.height) {
                accumulation.series[0].width = '80%';
                accumulation.series[0].height = '60%';
            } else {
                accumulation.series[0].width = '45%';
                accumulation.series[0].height = '80%';
            }

    }
  },
 
});
</script>