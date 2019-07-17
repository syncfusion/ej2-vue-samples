<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='dataEditing' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' :dragSettings='dragSettings' xName='x' yName='y' name='Product A' width=2 :marker='marker' fill='#00BDAE'> </e-series>
                <e-series :dataSource='seriesData1' type='Line' :dragSettings='dragSettings' xName='x' yName='y' name='Product B' width=2 :marker='marker' fill='#357CD2'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
     <p>
         This sample illustrates data editing feature in chart. Drag and drop the points to change the data values dynamically. 
     </p>
 </div>
 
 <div id="description">
    <p>The draggable-points allows data to be moved around the chart. In addition to this, the module fires events such as dragStart, drag and dragComplete.</p> 
     <br>
     <p style="font-weight: 500">Injecting Module</p>
     <p>
          Chart component features are segregated into individual feature-wise modules. To use data editing, we need to inject
          <code>DataEditing</code> module using <code>Chart.Inject(DataEditing)</code> method.
     </p>
     <p>
          More information on the Data Editing can be found in this
          <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-dataEditing.html#properties">documentation section</a>.
     </p> 
 </div>
</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, LineSeries, Legend, DataEditing, Tooltip, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: '2005', y: 21 }, { x: '2006', y: 60 },
        { x: '2007', y: 45 }, { x: '2008', y: 50 },
        { x: '2009', y: 74 }, { x: '2010', y: 65 },
        { x: '2011', y: 85 },
      ],
      seriesData1: [
        { x: '2005', y: 21 }, { x: '2006', y: 22 },
        { x: '2007', y: 36 }, { x: '2008', y: 34 },
        { x: '2009', y: 54 }, { x: '2010', y: 55 },
        { x: '2011', y: 60 }
      ],
      dragSettings: { enable: true },
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        minimum: -0.5,
        maximum: 6.5,
        labelPlacement: 'OnTicks',
        majorGridLines: { width: 0 },
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        title : 'Sales',
        labelFormat: '{value}%',
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width : Browser.isDevice ? '100%' : '60%',
      marker: {
        visible: true,
        height: 10,
        width: 10
      },
      tooltip: {
        enable: true
      },
      title: "Sales prediction of products",
    };
  },
  provide: {
    chart: [LineSeries, ColumnSeries, Legend, DataEditing, Tooltip, Category]
  },
  methods: {
  }
   
});
</script>