<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='December 2007' width=2 :marker='marker' > </e-series>
                <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='December 2008' width=2 :marker='marker1' > </e-series>
                <e-series :dataSource='seriesData2' type='Line' xName='x' yName='y' name='December 2009' width=2 :marker='marker2' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
     <div style="float: right; margin-right: 10px;">Source:
       <a href="http://www.marketingprofs.com/charts/2012/7064/facebook-stats-five-years-of-worldwide-growth" target="_blank">www.marketingprofs.com</a>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates the rendering of symbols in chart. In line based series, data points can be annotated by using symbols.
    </p>
</div>
<div id="description">
   <p>
       Each points in a series can be represented as a symbol through marker. We can also customize the shape, size and color of a symbol through <code>marker</code> properties. 
    </p>
     <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
     </p>
      <br>
        <p>
            More information on the marker can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-markerOptionModel.html">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, Category, Legend, Tooltip} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
               { x: 'WW', y: 12, text: 'World Wide' },
                { x: 'EU', y: 9.9, text: 'Europe' },
                { x: 'APAC', y: 4.4, text: 'Asia Pacific' },
                { x: 'LATAM', y: 6.4, text: 'Latin America' },
                { x: 'MEA', y: 30, text: 'Middle East Africa' },
                { x: 'NA', y: 25.3, text: 'North America' }

              ],

      seriesData1: [
            { x: 'WW', y: 22, text: 'World Wide' },
                { x: 'EU', y: 26, text: 'Europe' },
                { x: 'APAC', y: 9.3, text: 'Asia Pacific' },
                { x: 'LATAM', y: 28, text: 'Latin America' },
                { x: 'MEA', y: 45.7, text: 'Middle East Africa' },
                { x: 'NA', y: 35.9, text: 'North America' }

         ],

       seriesData2: [
             { x: 'WW', y: 38.3, text: 'World Wide' },
                { x: 'EU', y: 45.2, text: 'Europe' },
                { x: 'APAC', y: 18.2, text: 'Asia Pacific' },
                { x: 'LATAM', y: 46.7, text: 'Latin America' },
                { x: 'MEA', y: 61.5, text: 'Middle East Africa' },
                { x: 'NA', y: 64, text: 'North America' }

        ],

      //Initializing Primary X Axis
       primaryXAxis: {
            title: 'Countries', valueType: 'Category',
            interval: 1, labelIntersectAction: 'Rotate45',
            majorGridLines: { width: 0 },
        },


      //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Penetration', rangePadding: 'None',
            labelFormat: '{value}%', minimum: 0,
            lineStyle: { width: 0},
            maximum: 75, interval: 15
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        width: "60%",
       marker: {
                    visible: true, width: 10, height: 10,
                    shape: 'Diamond', dataLabel: { name: 'text' }
                },
      marker1: {
                    visible: true, width: 10, height: 10,
                    shape: 'Pentagon', dataLabel: { name: 'text' }
                },
        marker2: {
                    visible: true,
                    width: 10, height: 10,
                    shape: 'Triangle',
                    dataLabel: { name: 'text' }
                },
      tooltip: { 
            enable: true
         },
          legendSettings: { visible: false },
      
      title: "FB Penetration of Internet Audience"
    };
  },
  provide: {
    chart: [LineSeries, Legend, Category, Tooltip]
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