<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legend'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Viet_Growth' name='Vietnam' opacity=1 width=2 :marker='circleMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Can_Growth' name='Indonesia' opacity=1 width=2 :marker='triangleMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Mal_Growth' name='France' opacity=1 width=2 :marker='diamondMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Egy_Growth' name='Poland' opacity=1 width=2 :marker='rectangleMarker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Ind_Growth' name='Mexico' opacity=1 width=2 :marker='pentagonMarker'> </e-series>
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
    In this example, you can see how to render and configure the line type charts. Line type charts are used to represent time-dependent data, showing trends in data at equal intervals.
    You can use <code>dashArray</code>, <code>width</code>, <code>fill</code> properties to customize the line. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
    </p>
    <p>
      <code>Tooltips</code> are enabled in this example. To see a tooltip in action, hover over or tap on the chart.
    </p>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject
            <code>LineSeries</code> module using <code>provide: { chart: [LineSeries] }</code> method.
        </p>
        <p>
            More information about the line series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line" aria-label="Navigate to the documentation for Line Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>

</div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Legend, Tooltip,DateTime, Category, Highlight } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

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
      { Period : 2016, Can_Growth : 4.8 , Viet_Growth : 7.8 , Mal_Growth : 14.6, Egy_Growth : 8.9, Ind_Growth : 19.0 },
      { Period : 2017, Can_Growth : 5.2 , Viet_Growth : 10.3, Mal_Growth : 15.5, Egy_Growth : 10.3, Ind_Growth : 20.0 },
      { Period : 2018, Can_Growth : 6.2 , Viet_Growth : 15.5, Mal_Growth : 15.4, Egy_Growth : 10.8, Ind_Growth : 20.2 },
      { Period : 2019, Can_Growth : 7.8 , Viet_Growth : 17.5, Mal_Growth : 14.4, Egy_Growth : 9.0, Ind_Growth : 18.4 },
      { Period : 2020, Can_Growth : 9.3 , Viet_Growth : 19.5, Mal_Growth : 11.6, Egy_Growth : 7.9, Ind_Growth : 16.8 },
      { Period : 2021, Can_Growth : 14.3, Viet_Growth : 23.0, Mal_Growth : 13.9, Egy_Growth : 8.5, Ind_Growth : 18.5 },
      { Period : 2022, Can_Growth : 15.6, Viet_Growth : 20.0, Mal_Growth : 12.1, Egy_Growth : 7.4, Ind_Growth : 18.4  },
      { Period : 2023, Can_Growth : 16.0, Viet_Growth : 19.0, Mal_Growth : 10.0, Egy_Growth : 6.4, Ind_Growth : 16.3 },
      { Period : 2024, Can_Growth : 17.0, Viet_Growth : 22.1, Mal_Growth : 10.8, Egy_Growth : 7.1, Ind_Growth : 13.7 },
        
    ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Double",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: 'Volume in million metric tons',
        minimum: 0,
        maximum: 25,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0
        },
        margin: {
          bottom: 12
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
        enableHighlight: true,
        showNearestTooltip: true, header: '<b>${series.name}</b>', format: '${point.x} : <b>${point.y}M</b>'
      },
      legend: {visible : true, enableHighlight: true},
      title: "Annual Crude Steel Production by Country (2016–2024)", subTitle:"Source: wikipedia.org"
    };
  },
  provide: {
    chart: [LineSeries, Legend, Tooltip, Category, DateTime, Highlight]
  },
  methods: {
  }
   
};
</script>