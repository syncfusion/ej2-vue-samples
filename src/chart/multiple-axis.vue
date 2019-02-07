<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :axes='axes' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-annotations>
                <e-annotation :content='cloudTemplate' x='Sun' y=35 coordinateUnits='Point' verticalAlignment='Top'>
                </e-annotation>
                <e-annotation :content='sunTemplate' x='Sat' y=34 coordinateUnits='Point' yAxisName='yAxis'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Germany'> </e-series>
                <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' yAxisName='yAxis' name='Japan' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample illustrates multiple axis in chart to represent the temperature in Celsius in an axis and Fahrenheit  in another axis.
    </p>
</div>
<div id="description">
        <p>
        In this example, you can see how to render and configure multipe axes. Use axes collection to render secondary axis to the chart and bind it to the specify series.
        You can also customize the axis line and its labels similar to primary axis.
        </p>
        <p> 
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
        </p>
         <p>
            More information on the multiple axis can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, ChartAnnotation, ColumnSeries, Category, Tooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         cloudTemplate: function () {
                    return {
                        template: Vue.component('cloudTemplate', {
                            template: `<div id="chart_cloud"><img src="src/chart/images/cloud.png"  style="width: 41px; height: 41px"/></div>`,
                            data: function () { return { data: {} }; }
                        })
                    }
                },
        sunTemplate: function () {
                    return {
                        template: Vue.component('sunTemplate', {
                            template: `<div id="chart_sun"><img src="src/chart/images/sunny.png"  style="width: 41px; height: 41px"/></div>`,
                            data: function () { return { data: {} }; }
                        })
                    }
                },
      theme: theme,
      seriesData: [
                { x: 'Sun', y: 35 }, { x: 'Mon', y: 40 },
                { x: 'Tue', y: 80 }, { x: 'Wed', y: 70 }, { x: 'Thu', y: 65 }, { x: 'Fri', y: 55 },
                { x: 'Sat', y: 50 }
      ],
      seriesData1: [
            { x: 'Sun', y: 30 }, { x: 'Mon', y: 28 },
            { x: 'Tue', y: 29 }, { x: 'Wed', y: 30 }, { x: 'Thu', y: 33 }, { x: 'Fri', y: 32 },
            { x: 'Sat', y: 34 }
     ],
     
      //Initializing Primary X Axis
      primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            labelIntersectAction: 'Rotate90',
            majorGridLines: { width: 0 },
        },


      //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 0, maximum: 100, interval: 20,
            lineStyle: { width: 0 },
            labelFormat: '{value}°F'
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        axes:
        [
            {
                majorGridLines: { width: 0 },
                rowIndex: 0, opposedPosition: true,
                lineStyle: { width: 0 }, majorTickLines: { width: 0 },
                minimum: 24, maximum: 36, interval: 2,
                name: 'yAxis', minorTickLines: { width: 0 },
                labelFormat: '{value}°C'
            }
        ],
       marker: { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } },
       width: Browser.isDevice ? '100%' : '60%',
       tooltip: { enable: true },
        legendSettings: {
            visible: false
        },
      title: "Weather Condition JPN vs DEU"
    };
  },
  provide: {
    chart: [LineSeries, ColumnSeries, Category, Tooltip, ChartAnnotation]
  },
  methods: {
  },
 
});
</script>