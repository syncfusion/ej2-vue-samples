<template>
    <div class="control-section">
      <div class="col-md-8 control-section">
          <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
             :legendSettings='legendSettings' :tooltip='tooltip' :selectionMode='selectionMode'>
              <e-series-collection>
                  <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Age 0-14' width=2> </e-series>
                  <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='Age 15-64' width=2 > </e-series>
                  <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Age 65 & Above' width=2 > </e-series>
  
              </e-series-collection>
          </ejs-chart>
      </div>
      <div>
        <div class="col-md-4 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td>
                        <div>Selection Mode</div>
                    </td>
                    <td>
                        <ejs-dropdownlist id='selmode' :change='indexChange' :dataSource='indexdata' index=0 :width='indexwidth' ></ejs-dropdownlist>                      
                    </td>
                </tr>
                <tr id='' style="height: 50px">
                    <td style="width: 80%">
                        <div> Enable Multi Selection:</div>
                    </td>
                    <td style="width: 50%; padding-left: 10px; padding-right:10px">
                        <input type="checkbox" id="multiselect" @change='check'>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample illustrates the selection feature in chart. To select a specific point, click  the point. The selection mode can be changed by changing Selection Mode in panel. <code>Multiple selection</code> also can be enabled by <code>Enable MultipleSelection.</code>
        </p>
    </div>
    
    <div id="description">
        <p>
            This sample demonstrates the selection behavior in a chart. Any point or a series can be selected in a chart by clicking
            or touching the point. We can also select the point while loading chart through
            <code>selectedDataIndexes</code> properties. Click to select a point or series, click and drag to enable rectangular selection. Rectangular selection
            will return the collection point that are selected under the region.
        </p>
        <p>
            Tap to select a point or series, double tap and drag to enable rectangular selection in touch enabled devices.
        </p>
        <p>Chart supports seven mode of selection which can be set using
            <code>SelectionMode</code> property.
        </p>
        <ul>
            <li>
                <code>Series</code> - Select the series in chart.</li>
            <li>
                <code>Point</code> - Select a point in the series .</li>
            <li>
                <code>Cluster</code> - Select a group of points in the chart.</li>
            <li>
                <code>DragXY</code> - Rectangular selection with respect to both axis.</li>
            <li>
                <code>DragX</code> - Rectangular selection with respect to horizontal axis.</li>
            <li>
                <code>DragY</code> - Rectangular selection with respect to vertical axis.</li>
            <li>
                <code>Lasso</code> - Select free form of selection area points.</li>
        </ul>
        <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use selection feature, we need to inject
            <code>Selection</code> module using
            <code>provide: { chart: [Selection] },</code> method.
        </p>
    </div>
  
  </div>
  
  </template>
  <style>
  
  </style>
  <script>
  import Vue from "vue";
  import { Browser } from '@syncfusion/ej2-base';
  import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
  import { ChartPlugin, Selection, ScatterSeries, ColumnSeries, Legend, Category } from "@syncfusion/ej2-vue-charts";
  Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

  export default Vue.extend({
    data: function() {
      return {
           theme: theme,
        seriesData: [
        { x: 'CHN', y: 17 }, { x: 'USA', y: 19 },
        { x: 'IDN', y: 29 }, { x: 'JAP', y: 13 },
        { x: 'BRZ', y: 24 }

      ],
      seriesData1: [
      { x: 'CHN', y: 54 }, { x: 'USA', y: 67 },
      { x: 'IDN', y: 65 }, { x: 'JAP', y: 61 },
      { x: 'BRZ', y: 68 }

      ],
      seriesData2: [
      { x: 'CHN', y: 9 }, { x: 'USA', y: 14 },
      { x: 'IDN', y: 6 }, { x: 'JAP', y: 26 },
      { x: 'BRZ', y: 8 }

      ],
    
        //Initializing Primary X Axis
        primaryXAxis: {
            title: 'Countries',
            valueType: 'Category',
             interval: 1,
            labelIntersectAction : 'Rotate90'
        },
 
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Distribution',
            labelFormat: '{value}%',
            interval: 20
        },
        legendSettings: { visible: true, toggleVisibility: false },

        selectionMode: 'Point',
        
      indexdata: ["Point", "Series", "Cluster"],

      indexwidth: 120,
          tooltip: { enable: true, shared: true },
  
      title: "Age Distribution by Country"
      };
    },
    provide: {
      chart: [Selection, Legend, ColumnSeries, Category, ScatterSeries]
    },
     methods: {
      indexChange: function(args) {
        this.$refs.chart.ej2Instances.selectionMode = selmode.value;
        this.$refs.chart.ej2Instances.dataBind();
      },
      check: function(e) {
        this.$refs.chart.ej2Instances.isMultiSelect  = e.target.checked;
        this.$refs.chart.ej2Instances.dataBind();
      }
    },
   
   
  });
  </script>