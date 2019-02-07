<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
         :legendSettings='legendSettings' :tooltip='tooltip' :animation='animation'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='2013' drawType='StackingArea' :animation='animation'> </e-series>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='2014' drawType='StackingArea' :animation='animation' > </e-series>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='2015' drawType='StackingArea' :animation='animation' > </e-series>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='2016' drawType='StackingArea' :animation='animation' > </e-series>
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
        This sample demonstrates polar series with stacking area type for GDP of different countries in recent years. The switching between polar and radar series can be done by using <code>Series Type</code> in property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the stacking area type charts. Stacks the series on top of another
        series to avoid the overlapping of series with one another, when rendering more than one area series in same chart.
        You can use <code>fill</code> properties to customize the stacked area. <code>dataLabel</code> is used to
        represent individual data and its value.
    </p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking area drawtype in Polar series
        and Radar series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>StackingAreaSeries</code> module using <code>provide: { chart: [ PolarSeries, RadarSeries, StackingAreaSeries] },</code>        method.
    </p>
    <p>
        More information on the Numeric axis can be found in this
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
  StackingAreaSeries,
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
        { x: 'JPN', text: 'Japan', y: 5156, y1: 4849, y2: 4382, y3: 4939 },
        { x: 'DEU', text: 'Germany', y: 3754, y1: 3885, y2: 3365, y3: 3467 },
        { x: 'FRA', text: 'France', y: 2809, y1: 2844, y2: 2420, y3: 2463 },
        { x: 'GBR', text: 'UK', y: 2721, y1: 3002, y2: 2863, y3: 2629 },
        { x: 'BRA', text: 'Brazil', y: 2472, y1: 2456, y2: 1801, y3: 1799 },
        { x: 'RUS', text: 'Russia', y: 2231, y1: 2064, y2: 1366, y3: 1281 },
        { x: 'ITA', text: 'Italy', y: 2131, y1: 2155, y2: 1826, y3: 1851 },
        { x: 'IND', text: 'India', y: 1857, y1: 2034, y2: 2088, y3: 2256 },
        { x: 'CAN', text: 'Canada', y: 1843, y1: 1793, y2: 1553, y3: 1529 }

      ],

      //Initializing Primary X Axis
     primaryXAxis: {
            valueType: 'Category',
            labelPlacement: 'OnTicks',
            interval: 1,
            coefficient: Browser.isDevice ? 80 : 100
        },

        legendSettings: {
            visible: true
        },
          tooltip: {
            enable: true
        },
        animation: { enable: true },

        polardata : [ 'Polar', 'Radar' ],

      polarwidth:120,
      seriesType: "Polar",

      title: "GDP, Current Prices (in Billions)"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, StackingAreaSeries, RadarSeries]
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
          this.animation = SelectSeriesType.value;
    }
  }
 
});
</script>