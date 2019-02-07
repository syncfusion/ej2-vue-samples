<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartDashLine' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :crosshair='crosshair'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Banana' dashArray=5 width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='Apple' dashArray=10 width=2 :marker='markerSeries2'> </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates a line series with dash array. 
        Dashed lines are animated by using css animation.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the line type charts. Line type charts are used to represent time-dependent
        data, showing trends in data at equal intervals. You can use
        <code>dashArray</code>,
        <code>width</code>,
        <code>fill</code> properties to customize the line.
        <code>marker</code> and
        <code>dataLabel</code> are used to represent individual data and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject
        <code>LineSeries</code> module using
        <code>provide: { chart: [LineSeries, Legend, DateTime, Tooltip, Crosshair]},</code> method.
    </p>
    <p>
        More information on the line series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>


</template>
<style>
 #chartDashLine_Series_1,
    #chartDashLine_Series_0 {
        stroke-dasharray: 10px 10px;
        stroke-linejoin: round; stroke-linecap: round;
        -webkit-animation: dash 1s linear infinite;
        animation: dash 1s linear infinite;
    }

    #chartDashLine_Series_0_Point_3_Symbol {
        -webkit-animation: opac 1s ease-out infinite;
        animation: opac 1s ease-out infinite;
    }

    @-webkit-keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }

    @keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }

    @keyframes opac {
        0% {
            stroke-opacity: 1;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0;
            stroke-width: 10px;
        }
    }
</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, DateTime, Legend, Tooltip, Crosshair } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                    { x: new Date(2005, 0, 1), y: 12 }, { x: new Date(2006, 0, 1), y: 10.6 },
                    { x: new Date(2007, 0, 1), y: 15.6 }, { x: new Date(2008, 0, 1), y: 38.6 },
                    { x: new Date(2009, 0, 1), y: 27.4 }, { x: new Date(2010, 0, 1), y: 23.5 },
                    { x: new Date(2011, 0, 1), y: 16.6 }

                ],

      seriesData1: [
                    { x: new Date(2005, 0, 1), y: 9.5 }, { x: new Date(2006, 0, 1), y: 19.9 },
                    { x: new Date(2007, 0, 1), y: 25.2 }, { x: new Date(2008, 0, 1), y: 36 },
                    { x: new Date(2009, 0, 1), y: 16.6 }, { x: new Date(2010, 0, 1), y: 14.2 }, { x: new Date(2011, 0, 1), y: 10.3 }

      ],
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            labelFormat: '{value}%',
            rangePadding: 'None',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 40,
            interval: 10,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
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
      markerSeries2: {
                visible: true,
                width: 10,
                height: 10,
                shape: 'Diamond'
                },


      width : Browser.isDevice ? '100%' : '60%',
       tooltip: {
        enable: true,
        shared: true
      },
      crosshair: {
            enable: true,
            line: {
                color: 'rgba(204,214,235,0.25)',
                width: Browser.isDevice ? 50 : 20,
            },
            lineType: 'Vertical'
        },

      
      title: "Fruits Production Statistics"
    };
  },
  provide: {
    chart: [LineSeries, Legend, DateTime, Tooltip, Crosshair]
  },
  methods: {
  },
 
});
</script>