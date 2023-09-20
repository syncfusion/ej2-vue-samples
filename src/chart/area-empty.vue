<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legend' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Area' xName='Period' yName='US_InflationRate' name='Andrew' width=2 opacity=0.5 :border='border' :marker='marker'> </e-series>
                <e-series :dataSource='seriesData' type='Area' xName='Period' yName='IN_InflationRate' name='Thomas' width=2 opacity=0.5 :border='border' :marker='diamondMarker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
      This sample illustrates an area series with empty points. 
        Data points with null points are shown here.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render an area series with empty points. Also, a legend is enabled in the shape of the series.
     </p>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
            <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
        </p>
        <p>
          More information about the empty point can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/working-with-data#empty-points">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AreaSeries, Legend, Category,DateTime, Highlight, Tooltip} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

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
      { Period: new Date(2021, 10, 14), US_InflationRate: 2.2, IN_InflationRate: 0.8 }, { Period: new Date(2021, 10, 15), US_InflationRate: 2.0, IN_InflationRate: 1.7 }, { Period: new Date(2021, 10, 16), US_InflationRate: 2.8, IN_InflationRate: 1.8 },
    { Period: new Date(2021, 10, 17), US_InflationRate: 1.6, IN_InflationRate: 2.1 }, { Period: new Date(2021, 10, 18), US_InflationRate: 2.3, IN_InflationRate: null }, { Period: new Date(2021, 10, 19), US_InflationRate: 2.5, IN_InflationRate: 2.3 },
    { Period: new Date(2021, 10, 20), US_InflationRate: 2.9, IN_InflationRate: 1.7 }, { Period: new Date(2021, 10, 21), US_InflationRate: 1.1, IN_InflationRate: 1.5 }, { Period: new Date(2021, 10, 22), US_InflationRate: 1.4, IN_InflationRate: 0.5 },
    { Period: new Date(2021, 10, 23), US_InflationRate: 1.1, IN_InflationRate: 1.3 }
        ],
      //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'DateTime', labelFormat: 'dd MMM', minimum: new Date(2021, 10, 14), maximum:  new Date(2021, 10, 23), majorGridLines: { width: 0 }, edgeLabelPlacement: 'Shift'
        },

      //Initializing Primary Y Axis
         primaryYAxis:
        {
          labelFormat: '{value}MB', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, minimum: 0, maximum: 5, interval: 1
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        tooltip: {
          enable: true,
          format: '${point.x} : <b>${point.y}</b>'
        },
      marker: { visible: true, height: 7, width: 7 , isFilled: true },
      diamondMarker: {  visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true  },
      border: { width:2 },
      width : Browser.isDevice ? '100%' : '75%',
      legend: {enableHighlight : true},
      title: "Data Consumption"
    };
  },
  provide: {
    chart: [AreaSeries, Legend, Category,DateTime, Highlight, Tooltip]
  },
  methods: {
  }
 
};
</script>