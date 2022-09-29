<template>
    <div class="control-section">
      <div align='center'>
          <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
              :chartArea='chartArea'  :tooltip='tooltip' :width='width' :margin="margin" >
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
        In this example, you can see how to render an area series with negative points. Similar to line type series, but the area gets closed and filled with series color. You can use  <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/series/#border">border</a></code> and <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/series/#fill">fill</a></code> properties to customize the area. Also, the legend is enabled with the shape of the series type.
     </p>    
        <br>
          <p style="font-weight: 500">Injecting Module</p>
          <p>
              Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
              <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
          </p>
          <p>
              More information on the area series can be found in this
              <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#area-charts">documentation section</a>.
          </p> 
  </div>
  </div>
  
  </template>
  <style scoped>
  
  </style>
  <script>
  import Vue from "vue";
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartPlugin, AreaSeries, Legend, Category , Tooltip} from "@syncfusion/ej2-vue-charts";
  
  Vue.use(ChartPlugin);
  
  let selectedTheme = location.hash.split("/")[1];
  selectedTheme = selectedTheme ? selectedTheme : "Material";
  let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
  
  export default Vue.extend({
    data: function() {
      return {
        theme: theme,
        margin: {left : Browser.isDevice ? 2 : 10, right : Browser.isDevice ? 2 : 10, top : Browser.isDevice ? 2 : 10, bottom : Browser.isDevice ? 2 : 10},
        seriesData:  [
                { x: 'Onion', y: 3000 },
                { x: 'Potato', y: 4000 },
                { x: 'Tomato', y: -4000 },
                { x: 'Corn', y: -2000 },
                { x: 'Carrot', y: 5000 },
            ],
  
        seriesData1:[
                { x: 'Onion', y: 2000 },
                { x: 'Potato', y: 3000 },
                { x: 'Tomato', y: 4000 },
                { x: 'Corn', y: 2000 },
                { x: 'Carrot', y: 3000 },
            ],
        seriesData2: [
                { x: 'Onion', y: 2000 },
                { x: 'Potato', y: -1000 },
                { x: 'Tomato', y: -3000 },
                { x: 'Corn', y: 4000 },
                { x: 'Carrot', y: 1000 },
            ],    
        //Initializing Primary X Axis
          primaryXAxis: {
              valueType: 'Category',
              majorGridLines: { width: 0 },
              edgeLabelPlacement: 'Shift'
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
        width : Browser.isDevice ? '100%' : '60%',
        title: "Profit and Loss",
        tooltip:{ enable:true }
      };
    },
    provide: {
      chart: [AreaSeries, Legend, Category, Tooltip]
    },
    methods: {
    }
   
  });
  </script>