<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :tooltip='tooltip' :axes='axes'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Pareto' xName='x' yName='y' name='Defect' width=2 :marker='marker' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
       This sample illustrates a Pareto chart with line and column series. Trackball shows the information about the data point
        closest to the mouse.
    </p>
</div>
<div id="description">
  <p>
        In this example, you can see how to render and configure the pareto charts. Pareto charts are used to find the cumulative
        values of of data in different categories. You can use <code>border</code>,
        <code>fill</code> properties to customize the vertical rectangle. <code>dataLabel</code> is used to represent individual
        data and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <br>
   <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use pareto series, we need to inject
        <code>ParetoSeries</code>,<code>ColumnSeries</code> and <code>LineSeries</code> module using
        <code>provide: { chart: [ ParetoSeries, LineSeries, ColumnSeries] }</code> method.
    </p>
    <p>
        More information on the column series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation
            section
        </a>.
    </p>

</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, StackingColumnSeries, Tooltip, ColumnSeries, Category, Legend, ParetoSeries } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
            { x: 'Traffic', y: 56 }, { x: 'Child Care', y: 44.8 },
            { x: 'Transport', y: 27.2 }, { x: 'Weather', y: 19.6 },
            { x: 'Emergency', y: 6.6 }
      ],
      
      //Initializing Primary X Axis
       primaryXAxis: {
            title: 'Defects',
            interval: 1,
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },

      //Initializing Primary Y Axis
     primaryYAxis:
        {
            title: 'Frequency',
            minimum: 0,
            maximum: 150,
            interval: 30,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },

         marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },

      width : Browser.isDevice ? '100%' : '60%',
       legendSettings: {
            visible: false
        },
         tooltip: {
            enable: true,
            shared: true
        },
      title: "Defect vs Frequency"
    };
  },
  provide: {
    chart: [StackingColumnSeries, LineSeries, Category, ColumnSeries, Legend, Tooltip, ParetoSeries]
  },
  methods: {
  },
 
});
</script>