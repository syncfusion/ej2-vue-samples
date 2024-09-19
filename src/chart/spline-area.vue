<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legend' :tooltip='tooltip' >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='SplineArea' xName='Period' yName='US_InflationRate' name='US' width=2 opacity=0.5 :border='border' :marker='circleMarker'> </e-series>
                <e-series :dataSource='seriesData' type='SplineArea' xName='Period' yName='FR_InflationRate' name='France' width=2 opacity=0.5 :border='border' :marker='diamondMarker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>

<div id="action-description">
    <p>
      This Vue Spline Area Chart example visualizes the inflation rate comparision for two countries by using spline area series.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure the spline area chart. This chart plots a fitted curve through each data point in a series. It is used to represent time-dependent data and show trends in data at equal intervals.
     </p>     
      
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use spline area series, we need to inject
            <code>SplineAreaSeries</code> module using <code>provide: { chart: [SplineAreaSeries] }</code> method.
        </p>
        <p>
          More information about the spline area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/spline-area" aria-label="Navigate to the documentation for Spline Area Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>
</div>


</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, SplineAreaSeries, Legend, DateTime, Highlight , Tooltip} from "@syncfusion/ej2-vue-charts";

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
            { Period : new Date(2002, 1, 1), US_InflationRate : 2.2, FR_InflationRate : 2    },
            { Period : new Date(2003, 1, 1), US_InflationRate : 3.4, FR_InflationRate : 1.7  },
            { Period : new Date(2004, 1, 1), US_InflationRate : 2.8, FR_InflationRate : 1.8, },
            { Period : new Date(2005, 1, 1), US_InflationRate : 1.6, FR_InflationRate : 2.1, },
            { Period : new Date(2006, 1, 1), US_InflationRate : 2.3, FR_InflationRate : 2.3, },
            { Period : new Date(2007, 1, 1), US_InflationRate : 2.5, FR_InflationRate : 1.7, },
            { Period : new Date(2008, 1, 1), US_InflationRate : 2.9, FR_InflationRate : 1.5, },
            { Period : new Date(2009, 1, 1), US_InflationRate : 1.1, FR_InflationRate : 0.5, },
            { Period : new Date(2010, 1, 1), US_InflationRate : 1.4, FR_InflationRate : 1.5, },
            { Period : new Date(2011, 1, 1), US_InflationRate : 1.1, FR_InflationRate : 1.3, }
      ],
      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'yyyy',
            majorGridLines: { width: 0 },
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            minimum: new Date(2001, 0, 1), maximum: new Date(2012, 0, 1),
        },
      //Initializing Primary Y Axis
        primaryYAxis: {
            labelFormat: '{value}%',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 4,
            interval: 1,
            majorTickLines: { width: 0 },   
        },
      chartArea: {
        border: {
          width: 0
        }
      },
      border: {
          width:2
        },
        circleMarker:  { visible: true, height: 6, width: 6 , shape: 'Circle' , isFilled: true },
        diamondMarker:  { visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true },
       width : Browser.isDevice ? '100%' : '75%',
       legend: {enableHighlight : true},
       tooltip: {
        enable: true
      },
      title: "Inflation Rate in Percentage"
    };
  },
  provide: {
    chart: [SplineAreaSeries, Legend, DateTime, Highlight, Tooltip]
  },
  methods: {
   },
 
};
</script>