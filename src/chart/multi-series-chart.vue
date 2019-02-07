<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingColumn' xName='x' yName='y' name='Private Consumption' > </e-series>
                <e-series :dataSource='seriesData1' type='StackingColumn' xName='x' yName='y' name='Government Consumption' > </e-series>
                <e-series :dataSource='seriesData2' type='StackingColumn' xName='x' yName='y' name='Investment' > </e-series>
                <e-series :dataSource='seriesData3' type='StackingColumn' xName='x' yName='y' name='Net Foreign Trade' > </e-series>
                <e-series :dataSource='seriesData4' type='Line' xName='x' yName='y' name='GDP' width=2 :marker='marker'> </e-series>
            
            </e-series-collection>
        </ejs-chart>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
       <a href="http://perspectives.pictet.com/2016/01/29/growth-accelerated-markedly-in-france-and-spain-in-2015/" target="_blank">perspectives.pictet.com</a>
    </div>
   <div id="action-description">
    <p>
        This sample illustrates a combination of line and stacked column series. Tooltip shows the information about the data point.
    </p>
</div>
<div id="description">
   <p>
    In this example, you can see how to render and configure the different type of charts. You can render any combination of series in chart except bar.
    Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
   </p>
    <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            In this example, we have used line and column series. To use column and line feature, we need to inject
            <code>ColumnSeries</code> <code>LineSeries</code> modules using <code> provide: { chart: [ ColumnSeries ] },</code> <code> provide: { chart: [ LineSeries ] },</code>  method.
        </p>
        <p>
            More information on the series can be found in this
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
import { ChartPlugin, LineSeries, StackingColumnSeries, Tooltip, ColumnSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
            { x: '2007', y: 1 }, { x: '2008', y: 0.25 },
            { x: '2009', y: 0.1 }, { x: '2010', y: 1 },
            { x: '2011', y: 0.1 }, { x: '2012', y: -0.25 },
            { x: '2013', y: 0.25 }, { x: '2014', y: 0.6 }

      ],
      seriesData1: [
            { x: '2007', y: 0.5 }, { x: '2008', y: 0.35 },
            { x: '2009', y: 0.9 }, { x: '2010', y: 0.5 },
            { x: '2011', y: 0.25 }, { x: '2012', y: -0.5 },
            { x: '2013', y: 0.5 }, { x: '2014', y: 0.6 }

      ],
      seriesData2: [
            { x: '2007', y: 1.5 }, { x: '2008', y: 0.35 },
            { x: '2009', y: -2.7 }, { x: '2010', y: 0.5 },
            { x: '2011', y: 0.25 }, { x: '2012', y: -0.1 },
            { x: '2013', y: -0.3 }, { x: '2014', y: -0.6 }

      ],
      seriesData3: [
            { x: '2007', y: -1 }, { x: '2008', y: -.35 },
            { x: '2009', y: -0.3 }, { x: '2010', y: -0.5 },
            { x: '2011', y: 0 }, { x: '2012', y: -0.4 },
            { x: '2013', y: 0 }, { x: '2014', y: -0.6 }

      ],
       seriesData4: [
            { x: '2007', y: 2 }, { x: '2008', y: 0.1 },
            { x: '2009', y: -2.7 }, { x: '2010', y: 1.8 },
            { x: '2011', y: 2 }, { x: '2012', y: 0.4 },
            { x: '2013', y: 0.9 }, { x: '2014', y: 0.4 }

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
            visible: true
        },
        tooltip: {
            enable: true
        },

      title: "Annual Growth GDP in France"
    };
  },
  provide: {
    chart: [StackingColumnSeries, LineSeries, Category, ColumnSeries, Legend, Tooltip]
  },
  methods: {
  },
 
});
</script>