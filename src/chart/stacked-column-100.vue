<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y' name='UK' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y1' name='Germany' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y2' name='France' > </e-series>
                <e-series :dataSource='seriesData' type='StackingColumn100' xName='x' yName='y3' name='Italy' > </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        This sample visualizes percentage of domestic product growth of four different countries with default 100% stacked column series in chart. 
        Legend in the sample shows the information about the series.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the 100% stacking column type charts. You can use <code>border</code>,
        <code>fill</code> properties to customize the vertical bar.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use 100% stacking column series, we need
        to inject
        <code>StackingColumnSeries</code> module using <code>provide: { chart: [ StackingColumnSeries ] },</code> method.
    </p>
    <p>
        More information on the stacking column series can be found in this
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
import { ChartPlugin, StackingColumnSeries, Legend, Category, Tooltip} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
               { x: '2006', y: 900, y1: 190, y2: 250, y3: 150 },
               { x: '2007', y: 544, y1: 226, y2: 145, y3: 120 },
               { x: '2008', y: 880, y1: 194, y2: 190, y3: 115 },
               { x: '2009', y: 675, y1: 250, y2: 220, y3: 125 }

              ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            labelIntersectAction: 'Rotate45',
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'GDP (%) per Annum',
            rangePadding: 'None',
            interval: 20,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            lineStyle: {
                width: 0
            }
        },
        chartArea: {
            border: {
                width: 0
            }
        },

        tooltip: {
            enable: true,
            format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>'
        },

      width : Browser.isDevice ? '100%' : '60%',
      title: "Gross Domestic Product Growth"
    };
  },
  provide: {
    chart: [StackingColumnSeries, Category, Tooltip, Legend]
  },

  methods: {
  
  },
 
});
</script>