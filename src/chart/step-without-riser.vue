<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepArea' xName='x' yName='y' name='Product Sales'  opacity = 0.1 :border = 'border' step='Center' noRisers=true  :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This Step Area Chart example visualizes the sales data of a product over a 50-year period using the default step
        area series without risers.    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a step area chart without vertical risers. The
        <code>noRisers</code> feature allows the series to appear as a continuous flow without showing vertical lines
        between points. This approach can be useful for highlighting trends without the distraction of risers.
    </p>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use step area series, we need to inject
            <code>StepAreaSeries</code> module using <code>provide: { chart: [StepAreaSeries] }</code> method.
        </p>
        <p>
          More information about the step area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/step-area" aria-label="Navigate to the documentation for Step Area Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StepAreaSeries, Highlight, Tooltip, DateTime} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
         theme: theme,
      seriesData: [
    { x: new Date(1980, 0, 1), y: 23 }, { x: new Date(1981, 0, 1), y: 89 }, { x: new Date(1982, 0, 1), y: 45 },
    { x: new Date(1983, 0, 1), y: 67 }, { x: new Date(1984, 0, 1), y: 76 }, { x: new Date(1985, 0, 1), y: 34 },
    { x: new Date(1986, 0, 1), y: 90 }, { x: new Date(1987, 0, 1), y: 65 }, { x: new Date(1988, 0, 1), y: 77 },
    { x: new Date(1989, 0, 1), y: 43 }, { x: new Date(1990, 0, 1), y: 92 }, { x: new Date(1991, 0, 1), y: 81 },
    { x: new Date(1992, 0, 1), y: 65 }, { x: new Date(1993, 0, 1), y: 87 }, { x: new Date(1994, 0, 1), y: 50 },
    { x: new Date(1995, 0, 1), y: 98 }, { x: new Date(1996, 0, 1), y: 62 }, { x: new Date(1997, 0, 1), y: 75 },
    { x: new Date(1998, 0, 1), y: 64 }, { x: new Date(1999, 0, 1), y: 88 }, { x: new Date(2000, 0, 1), y: 99 },
    { x: new Date(2001, 0, 1), y: 77 }, { x: new Date(2002, 0, 1), y: 65 }, { x: new Date(2003, 0, 1), y: 89 },
    { x: new Date(2004, 0, 1), y: 45 }, { x: new Date(2005, 0, 1), y: 67 }, { x: new Date(2006, 0, 1), y: 56 },
    { x: new Date(2007, 0, 1), y: 78 }, { x: new Date(2008, 0, 1), y: 82 }, { x: new Date(2009, 0, 1), y: 90 },
    { x: new Date(2010, 0, 1), y: 55 }, { x: new Date(2011, 0, 1), y: 65 }, { x: new Date(2012, 0, 1), y: 87 },
    { x: new Date(2013, 0, 1), y: 76 }, { x: new Date(2014, 0, 1), y: 45 }, { x: new Date(2015, 0, 1), y: 67 },
    { x: new Date(2016, 0, 1), y: 89 }, { x: new Date(2017, 0, 1), y: 76 }, { x: new Date(2018, 0, 1), y: 45 },
    { x: new Date(2019, 0, 1), y: 67 }, { x: new Date(2020, 0, 1), y: 89 }
              ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'yyyy', // Format to show only year
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            minimum: new Date(1980, 0, 1), // Start from 1970
            maximum: new Date(2020, 0, 1), // End at 2020
            majorGridLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 4,
            labelIntersectAction: 'Rotate90'
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
            title: 'Sales in Units',
            labelFormat: '{value}',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 100,
            interval: 20,
            majorTickLines: { width: 0 }
        },
        tooltip: {
        enable: true,
        shared: true
        },
        marker: {allowHighlight:false},
        chartArea: {
            border: {
                width: 0
            }
        },  
      width: Browser.isDevice ? '100%': "75%",
      legend: {visible: false},
      title: "Sales of Product Over Time",
      border:{ width:2.5 }
    };
  },
  provide: {
    chart: [StepAreaSeries, Tooltip, Highlight, DateTime]
  },
  methods: {
 
  },
 
};
</script>