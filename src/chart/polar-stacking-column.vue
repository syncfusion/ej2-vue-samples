<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
         :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y1' name='6 - 9' drawType='StackingColumn' :border='border' > </e-series>
                 <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y1' name='9 - 11' drawType='StackingColumn' :border='border' > </e-series>
                  <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y2' name='11 - 14' drawType='StackingColumn' :border='border' > </e-series>
                   <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y3' name='14 - 17' drawType='StackingColumn' :border='border' > </e-series>
                 <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y4' name='17 - 20' drawType='StackingColumn' :border='border' > </e-series>
                  <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y5' name='23 Above' drawType='StackingColumn' :border='border' > </e-series>
               
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
        This sample demonstrates polar series with stacking column type. The switching between polar and radar series can be done by using <code>Series Type</code> in property panel. 
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the stacking column type charts. Stacks the points in the series
        vertically and also you can use <code>stackingGroup</code> property to group the stacking collection based
        on categories. You can use <code>border</code>, <code>fill</code> properties to customize the vertical bar. <code>dataLabel</code>        is used to represent individual data and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking column drawtype in Polar series
        and Radar series, we need to inject
        <code>PolarSeries</code> and <code>RadarSeries</code> module using <code>provide: { chart: [ PolarSeries, RadarSeries] },</code>        method.
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
import { ChartDataService } from "./chartdata.service";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
  LineSeries,
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
        { x: "N", y: 1, y1: 0.8, y2: 0.8, y3: 0.3, y4: 0.2, y5: 0.2 },
        { x: "NNE", y: 0.9, y1: 0.7, y2: 0.7, y3: 0.3, y4: 0.2, y5: 0.2 },
        { x: "NE", y: 0.7, y1: 0.8, y2: 0.5, y3: 1.1, y4: 1.2, y5: 0.5 },
        { x: "ENE", y: 0.9, y1: 1, y2: 0.4, y3: 0.9, y4: 1, y5: 0.4 },
        { x: "E", y: 0.9, y1: 0.6, y2: 0.9, y3: 0.5, y4: 0.7, y5: 0.4 },
        { x: "ESE", y: 0.8, y1: 0.5, y2: 0.7, y3: 0.3, y4: 0.8, y5: 0.3 },
        { x: "SE", y: 0.7, y1: 0.4, y2: 0.6, y3: 0.5, y4: 0.5, y5: 0.3 },
        { x: "SSE", y: 1.4, y1: 0.4, y2: 0.5, y3: 0.4, y4: 0.6, y5: 0.2 },
        { x: "S", y: 2, y1: 1.2, y2: 0.6, y3: 0.6, y4: 0.4, y5: 0.4 },
        { x: "SSW", y: 2, y1: 2.5, y2: 2, y3: 1, y4: 0.5, y5: 0.3 },
        { x: "SW", y: 2.2, y1: 2, y2: 1.8, y3: 1, y4: 0.4, y5: 0.2 },
        { x: "WSW", y: 1.8, y1: 1.1, y2: 0.8, y3: 0.1, y4: 0.4, y5: 0.2 },
        { x: "W", y: 1.6, y1: 1.8, y2: 2.1, y3: 1, y4: 0.4, y5: 0.4 },
        { x: "WNW", y: 1.2, y1: 1.2, y2: 1.5, y3: 1.3, y4: 1.1, y5: 1.2 },
        { x: "NW", y: 2, y1: 2.5, y2: 2, y3: 1, y4: 0.2, y5: 0.7 },
        { x: "NNW", y: 1.8, y1: 1.1, y2: 0.8, y3: 0.1, y4: 0.4, y5: 0.2 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        labelPlacement: "OnTicks",
        interval: 1,
        coefficient: Browser.isDevice ? 80 : 100
      },

      border: { color: "white", width: 1 },

      tooltip: { enable: true },

      seriesType: "Polar",

      legendSettings: { visible: true },

      polardata: ["Polar", "Radar"],
      polarwidth: 120,
      title: "Wind Rose Chart"
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, LineSeries, RadarSeries]
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