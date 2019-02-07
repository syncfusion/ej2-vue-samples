<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :tooltipRender='tooltipRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y' name='Female' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='StackingBar' xName='x' yName='y' name='Male' width=2 :marker='markerSeries2'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates stacked bar with negative data points. Data points values are showed by using data label.
    </p>
</div>
<div id="description">
    <p>
    In this example, you can see how to render and configure the bar type charts. Similar to column charts, but the orientation of y axis is horizontal instead of vertical.
    You can use <code>border</code>, <code>fill</code> properties to customize the data appearance. <code>dataLabel</code> is used to represent individual data and its value.
    </p>
    <p>
      Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
     <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use bar series, we need to inject
            <code>StackingBarSeries</code> module using <code>provide: { chart: [StackingBarSeries] }</code> method.
        </p>
        <p>
            More information on the bar series can be found in this
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
import { ChartPlugin, StackingBarSeries, Category, Tooltip, Legend, DataLabel} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { x: '4.5', y: 31 }, { x: '4.8', y: 37 },
                { x: '5.1', y: 49 }, { x: '5.4', y: 57 },
                { x: '5.7', y: 63 }, { x: '6', y: 69 }
            ],
      seriesData1: [
                { x: '4.5', y: -31, text: '31 KG' }, { x: '4.8', y: -39, text: '39 KG' },
                { x: '5.1', y: -52, text: '52 KG' }, { x: '5.4', y: -64, text: '64 KG' },
                { x: '5.7', y: -70, text: '70 KG' }, { x: '6', y: -74, text: '74 KG' }
         ],
      //Initializing Primary X Axis
     primaryXAxis: {
            valueType: 'Category',
            title: 'Height in Inches',
            minorGridLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            majorGridLines: { width: 0 }
        },
      //Initializing Primary Y Axis
          primaryYAxis:
        {
            labelFormat: '{value} KG',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        marker: {
            dataLabel: {
            visible: true,
            position: 'Top',
                font: {
                        fontWeight: '600'
                        }
                    }
                },
        markerSeries2: {
                    dataLabel: {
                        name: 'text',
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600'
                        }
                    }
                },

        width : Browser.isDevice ? '100%' : '80%',
           tooltip: { 
            enable: true
         },
        legendSettings: {
            position: Browser.isDevice ? 'Auto' : 'Right'
        },
      title: "Sales Comparison"
    };
  },
  provide: {
    chart: [StackingBarSeries, Legend, Category, Tooltip, DataLabel]
  },
  methods: {
   
     tooltipRender: function(args){
        args.text = args.text.indexOf('-') > 0 ? args.text.replace('-', '') : args.text;
    }  

  },
 
});
</script>