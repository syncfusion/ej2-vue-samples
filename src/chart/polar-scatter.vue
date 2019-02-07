<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
          :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='2015' drawType='Scatter' :marker='marker'> </e-series>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y1' name='2016' drawType='Scatter'  :marker='marker1'> </e-series>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y2' name='2017' drawType='Scatter' :marker='marker2'> </e-series>
            </e-series-collection>
        </ejs-chart>
        </div>
    <div>
   
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
             <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>Series Type
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='SelectSeriesType' :change='polarType' :dataSource='polardata' index=0 :width='polarwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="action-description">
    <p>
        This sample demonstrates polar series with scatter type for GDP for different countries in recent years. The switching between polar and radar series can be done by using <code>Series Type</code> in property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the scatter type charts. Scatter charts are used to plot financial
        or scientific data. You can use <code>shape</code> property in the marker to change the scatter shape. <code>dataLabel</code>        is used to represent individual data value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use scatter drawtype in Polar series and
        Radar series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>ScatterSeries</code> module using <code>provide: { chart: [ PolarSeries, RadarSeries, ScatterSeries ] },</code>        method.
    </p>
    <p>
        More information on the Polar series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>
#control-container {
  padding: 0px !important;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
  ScatterSeries,
  RadarSeries,
  ChartDrawType
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
        { text: 'Myanmar', x: 'MMR', y: 7.3, y1: 6.3, y2: 7.5 },
        { text: 'India', x: 'IND', y: 7.9, y1: 6.8, y2: 7.2 },
        { text: 'Bangladesh', x: 'BGD', y: 6.8, y1: 6.9, y2: 6.9 },
        { text: 'Cambodia', x: 'KHM', y: 7.0, y1: 7.0, y2: 6.9 },
        { text: 'China', x: 'CHN', y: 6.9, y1: 6.7, y2: 6.6 },
        { text: 'Bhutan', x: 'BTN', y: 6.1, y1: 6.2, y2: 5.9 },
        { text: 'Iceland', x: 'ISL', y: 4.1, y1: 7.2, y2: 5.7 },
        { text: 'Nepal', x: 'NPL', y: 2.7, y1: 0.6, y2: 5.5 },
        { text: 'Pakistan', x: 'PAK', y: 4.0, y1: 4.7, y2: 5.0 },
        { text: 'Poland', x: 'POL', y: 3.9, y1: 2.7, y2: 3.4 },
        { text: 'Australia', x: 'AUS', y: 2.4, y1: 2.5, y2: 3.1 },
        { text: 'Korea', x: 'KOR', y: 2.8, y1: 2.8, y2: 2.7 },
        { text: 'Singapore', x: 'SGP', y: 1.9, y1: 2.0, y2: 2. },
        { text: 'Canada', x: 'CAN', y: 0.9, y1: 1.4, y2: 1.9 },
        { text: 'Germany', x: 'DEU', y: 1.5, y1: 1.8, y2: 1.6 },
        { text: 'Denmark', x: 'DNK', y: 1.6, y1: 1.1, y2: 1.5 },
        { text: 'France', x: 'FRA', y: 1.3, y1: 1.3, y2: 1.4 },
        { text: 'Austria', x: 'AUT', y: 1.0, y1: 1.5, y2: 1.4 }

      ],

      //Initializing Primary X Axis
    primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks',
            interval: 1,
            coefficient: Browser.isDevice ? 80 : 100
        },

      //Initializing Primary Y Axis
       primaryYAxis: {
            minimum: 0, maximum: 8, interval: 2
        },


       marker: { height: 10, width: 10, dataLabel: { name: 'text' } },
       marker1: { height: 10, width: 10, shape: 'Diamond', dataLabel: { name: 'text' } },
       marker2: { height: 10, width: 10, shape: 'Triangle', dataLabel: { name: 'text' } },
     tooltip: {
            enable: true,
            format: '${point.text} : <b>${point.y}%</b>'
        },

       polardata : [ 'Polar', 'Radar' ],

      polarwidth:120,

      seriesType: "Polar",

      title: "Real GDP Growth"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, ScatterSeries, RadarSeries]
  },
  updated: function () {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
   polarType: function(args) {
       this.seriesType = SelectSeriesType.value;  
    }
  },
 
});
</script>