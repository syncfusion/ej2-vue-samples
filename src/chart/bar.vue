<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Bar' xName='x' yName='y' name='Imports' :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Bar' xName='x' yName='y' name='Exports' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://www.gov.uk/" target="_blank">www.gov.uk</a>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the data about UK trade in food groups of the year 2015 with default bar series in the chart. 
        Data points values are showed by using data label.
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
            <code>BarSeries</code> module using <code>provide: { chart: [BarSeries] }</code> method.
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
import { ChartPlugin, BarSeries, Category, Tooltip, Legend, DataLabel} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                 { x: 'Egg', y: 2.2 }, { x: 'Fish', y: 2.4 },
                 { x: 'Misc', y: 3 }, { x: 'Tea', y: 3.1 }

            ],

      seriesData1: [
                { x: 'Egg', y: 1.2 }, { x: 'Fish', y: 1.3 },
                { x: 'Misc', y: 1.5 }, { x: 'Tea', y: 2.2 }

         ],

      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'Category',
            title: 'Food',
            interval: 1,
            majorGridLines: { width: 0 }
        },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
            labelFormat: '{value}B',
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
                            fontWeight: '600', color: '#ffffff'
                        }
                    }
                },

        width : Browser.isDevice ? '100%' : '60%',
     
      tooltip: { 
            enable: true
         },
      
      title: "UK Trade in Food Groups - 2015"
    };
  },
  provide: {
    chart: [BarSeries, Legend, Category, Tooltip, DataLabel]
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