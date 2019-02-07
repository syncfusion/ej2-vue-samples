<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :isTransposed='isTransposed'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='RangeColumn' xName='x' yName='y' name='California' high='high' low='low' > </e-series>
                <e-series :dataSource='seriesData1' type='RangeColumn' xName='x' yName='y' name='Colorado' high='high' low='low' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://www.usclimatedata.com/climate/united-states/us" target="_blank">www.worldweatheronline.com</a>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates a range column series by inversing its X and Y  Axes. Tooltip shows the information about the data points.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the range column type chart with inverted manner. You can use <code>border</code>,
        <code>fill</code> properties to customize the columns. <code>dataLabel</code> are used to represent individual data
        and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use range column series, we need to inject
        <code>RangeColumnSeries</code> module using <code>provide: { chart: [RangeColumnSeries] }</code> method.
    </p>
    <p>
        More information on the range column series can be found in this
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
import { ChartPlugin, RangeColumnSeries, Category, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme:theme,
      seriesData: [
                { x: 'Jul', low: 28, high: 72 },
                { x: 'Aug', low: 18, high: 65 }, { x: 'Sep', low: 56, high: 87 },
                { x: 'Oct', low: 40, high: 78 },
                { x: 'Nov', low: 43, high: 64 }, { x: 'Dec', low: 28, high: 54 }
            ],

      seriesData1: [
                { x: 'Jul', low: 38, high: 78 },
                { x: 'Aug', low: 27, high: 78 }, { x: 'Sep', low: 28, high: 79 },
                { x: 'Oct', low: 37, high: 66 },
                { x: 'Nov', low: 25, high: 52 }, { x: 'Dec', low: 20, high: 60 }
         ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 }
        },


      //Initializing Primary Y Axis
          primaryYAxis: {
            labelFormat: '{value}˚F',
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },

        isTransposed: true,

        width : Browser.isDevice ? '100%' : '60%',
     
      tooltip: { 
            enable: true
         },
      
      title: "Temperature Variation"
    };
  },
  provide: {
    chart: [RangeColumnSeries, Legend, Category, Tooltip]
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