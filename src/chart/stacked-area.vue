<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingArea' xName='x' yName='y' name='Organic' > </e-series>
                <e-series :dataSource='seriesData1' type='StackingArea' xName='x' yName='y' name='Fair-trade' > </e-series>
                <e-series :dataSource='seriesData2' type='StackingArea' xName='x' yName='y' name='Veg Alternatives' > </e-series>
                <e-series :dataSource='seriesData3' type='StackingArea' xName='x' yName='y' name='Others' > </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        Trend in the sales of ethical product is visualized with default stacked area series in chart. 
        Legend in the sample shows the information about the series.
    </p>
</div>
<div id="description">
   <p>
    In this example, you can see how to render and configure the stacking area type charts. Stacks the series on top of another series to avoid the overlapping of series with one another, when rendering more than one area series in same chart.
    You can use <code>fill</code> properties to customize the stacked area. <code>dataLabel</code> is used to represent individual data and its value.
    </p>  
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use stacking area series, we need to inject
            <code>StackingAreaSeries</code> module using <code>provide: { chart: [StackingAreaSeries] }</code> method.
        </p>
        <p>
            More information on the stacking area series can be found in this
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
import { ChartPlugin, StackingAreaSeries, Legend, DateTime} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { x: new Date(2000, 0, 1), y: 0.61 },
                { x: new Date(2001, 0, 1), y: 0.81 }, { x: new Date(2002, 0, 1), y: 0.91 },
                { x: new Date(2003, 0, 1), y: 1 }, { x: new Date(2004, 0, 1), y: 1.19 },
                { x: new Date(2005, 0, 1), y: 1.47 }, { x: new Date(2006, 0, 1), y: 1.74 },
                { x: new Date(2007, 0, 1), y: 1.98 }, { x: new Date(2008, 0, 1), y: 1.99 },
                { x: new Date(2009, 0, 1), y: 1.70 }, { x: new Date(2010, 0, 1), y: 1.48 },
                { x: new Date(2011, 0, 1), y: 1.38 }, { x: new Date(2012, 0, 1), y: 1.66 },
                { x: new Date(2013, 0, 1), y: 1.66 }, { x: new Date(2014, 0, 1), y: 1.67 }
              ],

      seriesData1: [
                { x: new Date(2000, 0, 1), y: 0.03 },
                { x: new Date(2001, 0, 1), y: 0.05 }, { x: new Date(2002, 0, 1), y: 0.06 },
                { x: new Date(2003, 0, 1), y: 0.09 }, { x: new Date(2004, 0, 1), y: 0.14 },
                { x: new Date(2005, 0, 1), y: 0.20 }, { x: new Date(2006, 0, 1), y: 0.29 },
                { x: new Date(2007, 0, 1), y: 0.46 }, { x: new Date(2008, 0, 1), y: 0.64 },
                { x: new Date(2009, 0, 1), y: 0.75 }, { x: new Date(2010, 0, 1), y: 1.06 },
                { x: new Date(2011, 0, 1), y: 1.25 }, { x: new Date(2012, 0, 1), y: 1.55 },
                { x: new Date(2013, 0, 1), y: 1.55 }, { x: new Date(2014, 0, 1), y: 1.65 }
      ],

      seriesData2: [
                { x: new Date(2000, 0, 1), y: 0.48 },
                { x: new Date(2001, 0, 1), y: 0.53 }, { x: new Date(2002, 0, 1), y: 0.57 },
                { x: new Date(2003, 0, 1), y: 0.61 }, { x: new Date(2004, 0, 1), y: 0.63 },
                { x: new Date(2005, 0, 1), y: 0.64 }, { x: new Date(2006, 0, 1), y: 0.66 },
                { x: new Date(2007, 0, 1), y: 0.76 }, { x: new Date(2008, 0, 1), y: 0.77 },
                { x: new Date(2009, 0, 1), y: 0.55 }, { x: new Date(2010, 0, 1), y: 0.54 },
                { x: new Date(2011, 0, 1), y: 0.57 }, { x: new Date(2012, 0, 1), y: 0.61 },
                { x: new Date(2013, 0, 1), y: 0.67 }, { x: new Date(2014, 0, 1), y: 0.67 }

      ],

      seriesData3: [
                { x: new Date(2000, 0, 1), y: 0.23 },
                { x: new Date(2001, 0, 1), y: 0.17 }, { x: new Date(2002, 0, 1), y: 0.17 },
                { x: new Date(2003, 0, 1), y: 0.20 }, { x: new Date(2004, 0, 1), y: 0.23 },
                { x: new Date(2005, 0, 1), y: 0.36 }, { x: new Date(2006, 0, 1), y: 0.43 },
                { x: new Date(2007, 0, 1), y: 0.52 }, { x: new Date(2008, 0, 1), y: 0.72 },
                { x: new Date(2009, 0, 1), y: 1.29 }, { x: new Date(2010, 0, 1), y: 1.38 },
                { x: new Date(2011, 0, 1), y: 1.82 }, { x: new Date(2012, 0, 1), y: 2.16 },
                { x: new Date(2013, 0, 1), y: 2.51 }, { x: new Date(2014, 0, 1), y: 2.61 }

      ],
      //Initializing Primary X Axis
         primaryXAxis: {
            valueType: 'DateTime',
            intervalType: 'Years',
            majorGridLines: { width: 0 },
            labelFormat: 'y',
            edgeLabelPlacement: 'Shift',
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'Spends',
            minimum: 0, maximum: 7, interval: 1,
            labelFormat: '{value}B',
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
        },
        chartArea: {
            border: {
                width: 0
            }
        },

        width : Browser.isDevice ? '100%' : '60%',
      title: "Trend in Sales of Ethical Produce"
    };
  },
  provide: {
    chart: [StackingAreaSeries, Legend, DateTime]
  },
  methods: {
   },
 
});
</script>