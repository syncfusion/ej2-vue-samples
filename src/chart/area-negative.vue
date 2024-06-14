<template>
    <div class="control-section">
      <div align='center'>
          <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
              :chartArea='chartArea'  :tooltip='tooltip' :width='width' :margin="margin" :legendSettings='legend'>
              <e-series-collection>
                  <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' name='Company A' width=2 opacity=0.75 :border='border' :marker='marker'> </e-series>
                  <e-series :dataSource='seriesData1' type='Area' xName='x' yName='y' name='Company B' width=2 opacity=0.75 :border='border' :marker='marker1'> </e-series>
                  <e-series :dataSource='seriesData2' type='Area' xName='x' yName='y' name='Company C' width=2 opacity=0.75 :border='border' :marker='marker2'> </e-series>
              </e-series-collection>
          </ejs-chart>
      </div>
     <div id="action-description">
        <p>
        This sample illustrates an area series with negative values. Data points with negative values are shown here.
    </p>
  </div>
  <div id="description">
    <p>
      In this example, you can see how to render an area series with negative values. Similar to line type series, but the area gets closed and filled with series color. You can use <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/border/" aria-label="Navigate to the border property reference for Vue Chart component">border</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/seriesModel/#fill" aria-label="Navigate to the fill property reference for Vue Chart component">fill</a> properties to customize the area. Also, the legend is enabled with the shape of the series type.
     </p>    
       
          <p style="font-weight: 500"><b>Injecting Module</b></p>
          <p>
              Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
              <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
          </p>
          <p>
              More information on the negative points can be found in this
              <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/working-with-data#empty-points" aria-label="Navigate to the documentation for Empty points in Vue Chart component">documentation section</a>.
          </p> 
  </div>
  </div>
  
  </template>
  <style scoped>
  
  </style>
  <script>
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AreaSeries, Legend, DateTime , Tooltip, Highlight} from "@syncfusion/ej2-vue-charts";
  
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
        margin: {left : Browser.isDevice ? 2 : 10, right : Browser.isDevice ? 2 : 10, top : Browser.isDevice ? 2 : 10, bottom : Browser.isDevice ? 2 : 10},
        seriesData:  [
                { x: new Date(2017, 0, 1) , y: 3000 },
                { x: new Date(2018, 0, 1) , y: 4000 },
                { x: new Date(2019, 0, 1) , y: -4000 },
                { x: new Date(2020, 0, 1) , y: -2000 },
                { x: new Date(2021, 0, 1) , y: 5000 },
            ],
  
        seriesData1:[
                { x: new Date(2017, 0, 1) , y: 2000 },
                { x: new Date(2018, 0, 1) , y: 3000 },
                { x: new Date(2019, 0, 1) , y: 4000 },
                { x: new Date(2020, 0, 1) , y: 2000 },
                { x: new Date(2021, 0, 1) , y: 3000 },
            ],
        seriesData2: [
                { x: new Date(2017, 0, 1) , y: 2000 },
                { x: new Date(2018, 0, 1) , y: -1000 },
                { x: new Date(2019, 0, 1) , y: -3000 },
                { x: new Date(2020, 0, 1) , y: 4000 },
                { x: new Date(2021, 0, 1) , y: 1000 },
            ],    
        //Initializing Primary X Axis
          primaryXAxis: {
            valueType: 'DateTime', labelFormat: 'y', majorGridLines: { width: 0 }, minimum:new Date(2017, 0, 1), maximum: new Date(2021, 0, 1), intervalType: 'Years', edgeLabelPlacement: 'Shift'
          },
  
        //Initializing Primary Y Axis
           primaryYAxis:
          {
              labelFormat: '${value}', interval: 2000, maximum: 8000, minimum: -4000,
              lineStyle: { width: 0},
              majorTickLines: { width: 0}
          },
          chartArea: {
              border: {
                  width: 0
              }
          },
        border: { width: 2 },
        marker: { visible : true, isFilled : true , width : 7 , height : 7 , shape : "Circle"},
        marker1: {visible:true, isFilled : true , width : 7 , height : 7 , shape : "Diamond"},
        marker2: {visible:true, isFilled : true , width : 5 , height : 5 , shape : "Rectangle"},
        width : Browser.isDevice ? '100%' : '75%',
        legend: {enableHighlight : true},
        title: "Profit and Loss",
        tooltip:{ enable:true }
      };
    },
    provide: {
      chart: [AreaSeries, Legend, DateTime, Tooltip, Highlight]
    },
    methods: {
    }
   
  };
  </script>