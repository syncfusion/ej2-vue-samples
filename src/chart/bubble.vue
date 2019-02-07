<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
             :width='width' :tooltip='tooltip' :pointRender='pointRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Bubble' xName='x' size='size' yName='y' name='Pound' width=2 :marker='marker' minRadius=3  maxRadius=8> </e-series>
                
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        This sample visualizes the  Literacy Rate and GDP Growth Rate of world countries by using bubble series in the chart. Tooltip shows the information about the  countries.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the bubble type charts.A bubble chart is a type of chart that displays three dimensions of data. 
        Each points is drawn as a bubble, where bubble's size depends on <code>size</code> property. You can use <code>fill</code> property to customize the data appearance.        
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use bubble series, we need to inject
        <code>BubbleSeries</code> module using <code>provide: { chart: [BubbleSeries] },</code> method.
    </p>
    <p>
        More information on the bubble series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, BubbleSeries, Tooltip} from "@syncfusion/ej2-vue-charts";
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
     seriesData: [
    { x: 92.2, y: 7.8, size: 1.347, text: 'China' },
                    { x: 74, y: 6.5, size: 1.241, text: 'India' },
                    { x: 90.4, y: 6.0, size: 0.238, text: 'Indonesia' },
                    { x: 99.4, y: 2.2, size: 0.312, text: 'US' },
                    { x: 88.6, y: 1.3, size: 0.197, text: 'Brazil' },
                    { x: 99, y: 0.7, size: 0.0818, text: 'Germany' },
                    { x: 72, y: 2.0, size: 0.0826, text: 'Egypt' },
                    { x: 99.6, y: 3.4, size: 0.143, text: 'Russia' },
                    { x: 99, y: 0.2, size: 0.128, text: 'Japan' },
                    { x: 86.1, y: 4.0, size: 0.115, text: 'Mexico' },
                    { x: 92.6, y: 6.6, size: 0.096, text: 'Philippines' },
                    { x: 61.3, y: 1.45, size: 0.162, text: 'Nigeria' },
                    { x: 82.2, y: 3.97, size: 0.7, text: 'Hong Kong' },
                    { x: 79.2, y: 3.9, size: 0.162, text: 'Netherland' },
                    { x: 72.5, y: 4.5, size: 0.7, text: 'Jordan' },
                    { x: 81, y: 3.5, size: 0.21, text: 'Australia' },
                    { x: 66.8, y: 3.9, size: 0.028, text: 'Mongolia' },
                    { x: 78.4, y: 2.9, size: 0.231, text: 'Taiwan' }

],
    
           //Initializing Primary X Axis
     primaryXAxis: {
            title: 'Literacy Rate',
            minimum: 60,
            maximum: 100,
            interval: 5
        },
        
     //Initializing Primary Y Axis
       primaryYAxis: {
            title: 'GDP Growth Rate',
            minimum: 0,
            maximum: 10,
            interval: 2.5
        },

        width : Browser.isDevice ? '100%' : '60%',
      marker: { dataLabel: { name: 'text' } },

       pointRender: function(args) {
       let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    } else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    } else if (selectedTheme === 'highcontrast') {
        args.fill = highContrastColors[args.point.index % 10];
    } else {
        args.fill = bootstrapColors[args.point.index % 10];
    }

   },

       legendSettings: { visible: false },

      tooltip: {
            enable: true,
            format: '${point.text}<br/>Literacy Rate : <b>${point.x}%</b>' +
                '<br/>GDP Annual Growth Rate : <b>${point.y}</b><br/>Population : <b>${point.size} Billion</b>'
        },
      
      title: "World Countries Details"
    };
  },
  provide: {
    chart: [BubbleSeries, Tooltip]
  },
  methods: {
  }
 
});
</script>