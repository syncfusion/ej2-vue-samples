<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
         :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='Cardioid (unidirectional)' width=2 drawType='Spline' dashArray='5 5 2' :isClosed='isClosed'> </e-series>
                 <e-series :dataSource='seriesData1' :type='seriesType' xName='x' yName='y' name='Omnidirectional' width=2 drawType='Spline' dashArray='2' :isClosed='isClosed'> </e-series>
                  <e-series :dataSource='seriesData2' :type='seriesType' xName='x' yName='y' name='Bidirectional' width=2 drawType='Spline' :isClosed='isClosed'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
    
    <div class="col-md-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
         <tr style="height: 50px">
                <td style="width: 50%">
                    <div>Series Type
                    </div>
                </td>
                <td style="width: 50%;">
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
        This sample demonstrates polar series with spline type for the microphone type data. The switching between polar and radar series can be done by using <code>Series Type</code> in property panel. 
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the spline type charts. Spline chart connects each point in series
        through a curved line. You can use <code>dashArray</code>, <code>width</code>, <code>fill</code> properties
        to customize the spline. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and
        its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use spline drawtype in Polar series and
        Radar series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>SplineSeries</code> module using <code>provide: { chart: [ PolarSeries, RadarSeries, SplineSeries ] },</code>        method.
    </p>
    <p>
        More information on the polar series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
    </p>
</div>

</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { EmitType } from "@syncfusion/ej2-base";
import { ChartDataService } from "./chartdata.service";
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import {
  ChartPlugin,
  PolarSeries,
  Tooltip,
  Legend,
  Category,
  SplineSeries,
  RadarSeries,
  ChartDrawType
} from "@syncfusion/ej2-vue-charts";
import {
  fabricColors,
  materialColors,
  bootstrapColors,
  highContrastColors
} from "./theme-color";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme:theme,
      seriesData: ChartDataService.prototype.GetPolarSplineData().series1,
      seriesData1: ChartDataService.prototype.GetPolarSplineData().series2,
      seriesData2: ChartDataService.prototype.GetPolarSplineData().series3,
      //Initializing Primary X Axis
      primaryXAxis: {
        minimum: -180,
        maximum: 180,
        interval: 30,
        labelFormat: "{value}°",
        coefficient: Browser.isDevice ? 80 : 100
      },

      tooltip: {
        enable: true
      },
       
      polardata : [ 'Polar', 'Radar' ],

      polarwidth:120,

      seriesType: "Polar",

      title: "Microphone Types Polar Patterns",

      isClosed: false
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, SplineSeries, RadarSeries]
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