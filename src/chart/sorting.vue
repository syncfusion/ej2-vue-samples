<template>
    <div class="control-section">
      <div class="col-md-8 control-section">
          <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
              :chartArea='chartArea' :tooltip='tooltip'>
              <e-series-collection>
                  <e-series :dataSource='seriesData' :type='seriesType'  xName='x' yName='car' name='Car' width=2> </e-series>
                  <e-series :dataSource='seriesData' :type='seriesType'  xName='x' yName='trucks' name='Trucks' width=2 > </e-series>
                  <e-series :dataSource='seriesData' :type='seriesType'  xName='x' yName='bike' name='Bike' width=2 > </e-series>
                   <e-series :dataSource='seriesData' :type='seriesType'  xName='x' yName='cycle' name='Cycle' width=2 > </e-series>
  
              </e-series-collection>
          </ejs-chart>
      </div>
     <div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tbody>
                <tr style="height: 50px">
                    <td>
                        <div>Descending</div>
                    </td>
                    <td>
                        <div>
                             <input type="checkbox" id="dec" @change='changeEvent'  disabled />
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div>Sort By</div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist ref="dropdown" id='SelectSeriesType' :change='changeEvent' :dataSource='dropdata' index=0 :width='serieswidth' ></ejs-dropdownlist>                      
                            
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
    <p>
       This sample visualizes sales for vehicle range for different zone with default stacked column series in chart. Legend in the sample shows the information about those series.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to sort the series data in chart. To sort the data points of the series, use the <code>sort</code> method. This method determines whether the series data points should be sorted by their arguments or values.</p>
    <p>Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap a point in touch enabled devices.</p>
    <p style="font-weight: 500"> Injecting Module </p>
    <p>Chart component features are segregated into individual feature-wise modules. To use stacking column series, we need to inject StackingColumnSeries module using  <code>provide: { chart: [StackingColumnSeries] },</code> method.</p>
    <p>
        More information on the stacking column series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>
  
  </div>
  
  </template>
  <style>
  
  </style>
  <script>
  import Vue from "vue";
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartPlugin, StackingColumnSeries, Legend, Category, Tooltip, sort } from "@syncfusion/ej2-vue-charts";
  Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

  export default Vue.extend({
    data: function() {
      return {
           theme: theme,
        seriesData: [
          { x: 'Asia', car: 120, trucks: 90, bike: 180, cycle: 90 },
        { x: 'Canada', car: 100, trucks: 80, bike: 90, cycle: 80 },
        { x: 'Europe', car: 80, trucks: 90, bike: 60, cycle: 50 },
        { x: 'Africa', car: 40, trucks: 20, bike: 30, cycle: 30 },
        { x: 'Mexico', car: 40, trucks: 50, bike: 80, cycle: 50 },
        { x: 'US', car: 140, trucks: 90, bike: 75, cycle: 70 }

      ],
    
        //Initializing Primary X Axis
          primaryXAxis: {
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            interval: 1, lineStyle: { width: 0 },
            labelIntersectAction: 'Rotate45', valueType: 'Category'
        },
 
        //Initializing Primary Y Axis
          primaryYAxis:
            {
                title: 'Sales', lineStyle: { width: 0 },
                majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
                minorGridLines: { width: 1 }, minorTickLines: { width: 0 },
                labelFormat: '{value}K',
            },
        chartArea: {
            border: {
                width: 0
            }
        },
        dropdata: ["None", "X", "Y"],

      serieswidth: 120,
      seriesType: "StackingColumn",

    tooltip: {
            enable: true
        },
        title: "Vehicle Sales by Region"
      };
    },
    provide: {
      chart: [StackingColumnSeries, Category, Legend, Tooltip]
    },
     updated: function () {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
    methods: {
      changeEvent: function(args) {
       this.sortDataSource(this.$refs.dropdown.ej2Instances.value);
    },
        sortDataSource: function (value) {
        let element = document.getElementById('dec');
        let isDecending = element.checked;
        element.disabled = false;
        let sortData = [];
        if (value === 'X') {
            sortData = sort(this.seriesData, ['x'], isDecending);
        } else if (value === 'Y') {
            sortData = sort(this.seriesData, ['car', 'trucks', 'bike', 'cycle'], isDecending);
        } else {
            element.disabled = true;
            sortData = this.seriesData;
        }
        this.$refs.chart.ej2Instances.series[0].animation.enable = false;
        this.$refs.chart.ej2Instances.series[1].animation.enable = false;
        this.$refs.chart.ej2Instances.series[2].animation.enable = false;
        this.$refs.chart.ej2Instances.series[3].animation.enable = false;
        this.$refs.chart.ej2Instances.series[0].dataSource = sortData;
        this.$refs.chart.ej2Instances.series[1].dataSource = sortData;
        this.$refs.chart.ej2Instances.series[2].dataSource = sortData;
        this.$refs.chart.ej2Instances.series[3].dataSource = sortData;
    }
    },
   
  });
  </script>