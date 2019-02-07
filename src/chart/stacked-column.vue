<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='x' yName='y' name='UK' > </e-series>
                <e-series :dataSource='seriesData1' type='StackingColumn' xName='x' yName='y' name='Germany' > </e-series>
                <e-series :dataSource='seriesData2' type='StackingColumn' xName='x' yName='y' name='France' > </e-series>
                <e-series :dataSource='seriesData3' type='StackingColumn' xName='x' yName='y' name='Italy' > </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
        <div style="float: right; margin-right: 10px;">Source:
       <a href="https://www.cyberagent.co.jp/en/newsinfo/press/detail/id=12026" target="_blank">www.cyberagent.co.jp</a>
    </div>
   <div id="action-description">
    <p>
        This sample visualizes mobile game market for different countries with default stacked column series in chart. Legend in the sample shows the information about those series.
    </p>
</div>
<div id="description">
  <p>
    In this example, you can see how to render and configure the stacking column type charts. Stacks the points in the series vertically and also you can use <code>stackingGroup</code> property to group the stacking collection based on categories.
    You can use <code>border</code>, <code>fill</code> properties to customize the vertical bar. <code>dataLabel</code> is used to represent individual data and its value.
  </p>
  <p>
    Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
  </p>
   <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use stacking column series, we need to inject
            <code>StackingColumnSeries</code> module using <code>provide: { chart: [StackingColumnSeries] }</code> method.
        </p>
        <p>
            More information on the stacking column series can be found in this
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
import { ChartPlugin, StackingColumnSeries, Legend, Category, Tooltip} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { x: '2014', y: 111.1 },
                { x: '2015', y: 127.3 },
                { x: '2016', y: 143.4 },
                { x: '2017', y: 159.9 }

              ],

      seriesData1: [
                { x: '2014', y: 76.9 },
                { x: '2015', y: 99.5 },
                { x: '2016', y: 121.7 },
                { x: '2017', y: 142.5 }

      ],

      seriesData2: [
                { x: '2014', y: 66.1 },
                { x: '2015', y: 79.3 },
                { x: '2016', y: 91.3 },
                { x: '2017', y: 102.4 }
      ],

      seriesData3: [
                { x: '2014', y: 34.1 },
                { x: '2015', y: 38.2 },
                { x: '2016', y: 44.0 },
                { x: '2017', y: 51.6 }
      ],

      //Initializing Primary X Axis
          primaryXAxis: {
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            lineStyle: { width: 0 },
            labelIntersectAction: 'Rotate45',
            valueType: 'Category'
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'Sales',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 500,
            interval: 100,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}B',
        },
        chartArea: {
            border: {
                width: 0
            }
        },

      tooltip: {
            enable: true
        },

        width : Browser.isDevice ? '100%' : '60%',
      title: "Mobile Game Market by Country"
    };
  },
  provide: {
    chart: [StackingColumnSeries, Legend, Category, Tooltip]
  },
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

    }
  },
 
});
</script>