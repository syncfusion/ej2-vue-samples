<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
         :width='width' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y1' name='Mobile Subscriptions' width=2 drawType='Column' :border='border' :marker='marker' > </e-series>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y1' name='Population in Millions' width=2 drawType='Column' :border='border' :marker='marker' > </e-series>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y2' name='3G/4G Subscriptions' width=2 drawType='Column' :border='border' :marker='marker' > </e-series>
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
        This sample demonstrates polar series with column type for mobile market subscriptions in different countries. The switching between polar and radar series can be done by using <code>Series Type</code> in property panel. 
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the column type charts. Column type charts are used for comparing
        the frequency, count, total or average of data in different categories. You can use <code>border</code>,
        <code>fill</code> properties to customize the vertical rect. <code>dataLabel</code> is used to represent individual
        data and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column drawtype in Polar series and
        Radar series, we need to inject
        <code>PolarSeries</code> and <code>RadarSeries</code> module using <code>provide: { chart: [ PolarSeries, RadarSeries ] },</code>        method.
    </p>
    <p>
        More information on the column series can be found in this
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
import { ChartDataService } from "./chartdata.service";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
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
        { text: 'Japan', x: 'JPN', y: 137.9, y1: 127.6, y2: 108.8 },
        { text: 'Indonesia', x: 'IDN', y: 85.0, y1: 246.9, y2: 45.5 },
        { text: 'Russia', x: 'RUS', y: 237.1, y1: 143.5, y2: 41.2 },
        { text: 'Vietnam', x: 'VNM', y: 127.7, y1: 88.8, y2: 18.0 },
        { text: 'Pakistan', x: 'PAK', y: 126.1, y1: 179.2, y2: null },
        { text: 'Nigeria', x: 'NGA', y: 175.0, y1: 168.8, y2: 12.7 },
        { text: 'Germany', x: 'DEU', y: 113.6, y1: 81.9, y2: 46.0 },
        { text: 'Bangladesh', x: 'BGS', y: 116.0, y1: 154.7, y2: 34.6 },
        { text: 'Philippines', x: 'PHL', y: 109.5, y1: 96.7, y2: 16.6 },
        { text: 'Mexico', x: 'MEX', y: 102.7, y1: 120.8, y2: 19.8 }

      ],

      //Initializing Primary X Axis
     primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks', interval: 1,
            coefficient: Browser.isDevice ? 80 : 100
        },


      //Initializing Primary Y Axis
     primaryYAxis: {
            labelFormat: '{value}M'
        },


      border: { width: 1, color: 'white' },

       marker: { dataLabel: { name: 'text' } },

     tooltip: {
            enable: true,
            format: '${point.text} : <b>${point.y}%</b>'
        },
      polardata : [ 'Polar', 'Radar' ],

      polarwidth:120,

      title: "Top 10 Mobile Markets by Number of Subscriptions",
      seriesType: "Polar"
       
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, RadarSeries]
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
  }
  
});
</script>