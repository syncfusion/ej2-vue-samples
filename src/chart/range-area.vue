<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :zoomSettings='zoomSettings' :seriesRender='seriesRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='RangeArea' xName='x' :border='border' name='India' width=2 opacity=0.5 high='high' low='low'> </e-series>
                
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the data about average sales comparison of two products by using default area series in the chart. 
        Legend in the sample shows the information about the series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the area type charts. Similar to line type series, but the area get closed and filled with series color.
        You can use <code>border</code>, <code>fill</code> properties to customize the area. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
        Legend is enabled in this example with series type shape.
     </p>     
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
            <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
        </p>
        <p>
            More information on the area series can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
        </p> 
</div>

</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, RangeAreaSeries, Category, DateTime, Zoom } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

    let series1 = [];
    let value = 35;
    let point1;

    for (let i = 1; i < 360; i++) {
        if (Math.random() > .5) {
            value += Math.random();
        } else {
            value -= Math.random();
        }
        point1 = {
            x: new Date(2015, 0, i),
            high: value, low: value - 10
        };
        series1.push(point1);
    }

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: series1,
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
      //Initializing Primary Y Axis
      primaryYAxis:
        {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        zoomSettings:
        {
            enableSelectionZooming: true,
            mode: 'X'
        },
       width : Browser.isDevice ? '100%' : '80%',
       legendSettings: {
            visible: false
        },
          border: {
                    width: 2
                },
       seriesRender: function (args) {
            let areathemes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast'];
            let borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4'];
            args.series.border.color = borderColor[areathemes.indexOf(args.series.chart.theme.toLowerCase())];
        },
      title: "Temperature Variation"
    };
  },
  provide: {
    chart: [RangeAreaSeries, Category, DateTime, Zoom]
  },
  methods: {
    
  },
 
});
</script>