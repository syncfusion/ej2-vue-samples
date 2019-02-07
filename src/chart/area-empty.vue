<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' name='France' width=2 opacity=0.8> </e-series>
                <e-series :dataSource='seriesData1' type='Area' xName='x' yName='y' name='US' width=2 opacity=0.8> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        This sample illustrates an area series with empty points. 
        Data points with null points are dropped here.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render a area series with empty points. Similar to line type series, but the area get closed and filled with series color.
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
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, AreaSeries, Legend, Category} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: [
               { x: '2002', y: 2 }, { x: '2003', y: 1.7 }, { x: '2004', y: 1.8 }, { x: '2005', y: 2.1 },
               { x: '2006', y: 2.3 }, { x: '2007', y: 1.7 }, { x: '2008', y: 1.5 }, { x: '2009', y: 1.8 },
               { x: '2010', y: 2 }, { x: 2011, y: 3.1 }
        ],

      seriesData1: [
             { x: '2002', y: 2.2 }, { x: '2003', y: 3.4 }, { x: '2004', y: 2.8 }, { x: '2005', y: null },
             { x: '2006', y: null }, { x: '2007', y: 2.5 }, { x: '2008', y: 2.9 }, { x: '2009', y: 3.8 },
             { x: '2010', y: 1.4 }, { x: 2011, y: 3.1 }
      ],
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 2,
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'Rates',
            labelFormat: '{value}M',
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },

      width : Browser.isDevice ? '100%' : '60%',
      title: "Inflation Rate"
    };
  },
  provide: {
    chart: [AreaSeries, Legend, Category]
  },
  methods: {
  }
 
});
</script>