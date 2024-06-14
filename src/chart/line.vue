<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Viet_Growth' name='Vietnam' opacity=1 width=2 :marker='circleMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Can_Growth' name='Canada' opacity=1 width=2 :marker='triangleMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Mal_Growth' name='Malaysia' opacity=1 width=2 :marker='diamondMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Egy_Growth' name='Egypt' opacity=1 width=2 :marker='rectangleMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Ind_Growth' name='Indonesia' opacity=1 width=2 :marker='pentagonMarker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This Vue Line Chart example represents the crude steel production annual growth data with default line series in the chart. 
        Data points are enhanced with markers and tooltips.
    </p>
</div>
<div id="description">
    <p>
      Vue Line Chart represents and visualizes time-dependent data to show the trends at equal intervals. In this example, you can see how to render and configure a line chart. <code>Markers</code> are used to represent individual data and its values.
    </p>
    <p>
      <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
     
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject
            <code>LineSeries</code> module using <code>provide: { chart: [LineSeries] }</code> method.
        </p>
        <p>
            More information about the line series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line#line" aria-label="Navigate to the documentation for Line Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>

</div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Legend, Tooltip,DateTime, Category, Highlight } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
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
      { Period : new Date(2012, 1, 1), Can_Growth : 13.5, Viet_Growth : 5.3, Mal_Growth : 5.6, Egy_Growth : 6.6, Ind_Growth : 2.3 },
      { Period : new Date(2013, 1, 1), Can_Growth : 12.4, Viet_Growth : 5.6, Mal_Growth : 4.7, Egy_Growth : 6.8, Ind_Growth : 2.6 },
      { Period :new Date(2014, 1, 1), Can_Growth : 12.7, Viet_Growth : 5.9, Mal_Growth : 4.3, Egy_Growth : 6.5, Ind_Growth : 4.4 },
      { Period : new Date(2015, 1, 1), Can_Growth : 12.5, Viet_Growth : 5.7, Mal_Growth : 3.8, Egy_Growth : 5.5, Ind_Growth : 4.9 },
      { Period : new Date(2016, 1, 1), Can_Growth : 12.7, Viet_Growth : 7.8, Mal_Growth : 2.8, Egy_Growth : 5.0, Ind_Growth : 4.8 },
      { Period : new Date(2017, 1, 1), Can_Growth : 13.7, Viet_Growth : 10.3, Mal_Growth : 2.8, Egy_Growth : 6.8, Ind_Growth : 5.3 },
      { Period : new Date(2018, 1, 1), Can_Growth : 13.4, Viet_Growth : 15.5, Mal_Growth : 4.1, Egy_Growth : 7.8, Ind_Growth : 6.2  },
      { Period :new Date(2019, 1, 1), Can_Growth : 12.9, Viet_Growth : 17.5, Mal_Growth : 6.8, Egy_Growth : 7.3, Ind_Growth : 7.8 },
      { Period :  new Date(2020, 1, 1), Can_Growth : 11.0, Viet_Growth : 19.5, Mal_Growth : 7.1, Egy_Growth : 8.2, Ind_Growth : 9.3 },
        
    ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
        labelFormat: 'yyyy',
        intervalType: 'Years'
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: 'Million Metric Tons',
        minimum: 0,
        maximum: 20,
        interval: 4,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width : Browser.isDevice ? '100%' : '75%',
      circleMarker: { visible: true, height: 7, width: 7 , shape: 'Circle' , isFilled: true },
      triangleMarker: { visible: true, height: 6, width: 6 , shape: 'Triangle' , isFilled: true },
      diamondMarker: {  visible: true, height: 7, width: 7 , shape: 'Diamond' , isFilled: true  },
      rectangleMarker: { visible: true, height: 5, width: 5 , shape: 'Rectangle' , isFilled: true },
      pentagonMarker: { visible: true, height: 7, width: 7 , shape: 'Pentagon' , isFilled: true },
      tooltip: {
        enable: true,
      },
      legend: {enableHighlight : true},
      title: "Crude Steel Production Annual Growth"
    };
  },
  provide: {
    chart: [LineSeries, Legend, Tooltip, Category,DateTime, Highlight]
  },
  methods: {
  }
   
};
</script>