<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :legendSettings='legendSettings' :title='title' :primaryXAxis='primaryXAxis'
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
      <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
      point or tap a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use spline drawtype in Polar series and
        Radar series, we need to inject
        <code>PolarSeries</code>, <code>RadarSeries</code> and <code>SplineSeries</code> module using <code>provide: { chart: [ PolarSeries, RadarSeries, SplineSeries ] },</code>        method.
    </p>
    <p>
        More information on the polar and radar chart with an spline series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#spline" aria-label="Navigate to the documentation for Polar Spline in Vue Chart component">documentation section</a>.
    </p>
</div>

</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { EmitType } from "@syncfusion/ej2-base";
import { ChartDataService } from "./chart-data";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, PolarSeries, Tooltip, Legend, Category, SplineSeries, RadarSeries, Highlight, ChartDrawType } from "@syncfusion/ej2-vue-charts";
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
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
        enable: true, enableHighlight: true
      },
       
      polardata : [ 'Polar', 'Radar' ],

      polarwidth:120,

      seriesType: "Polar",

      legendSettings: {
        enableHighlight: true
      },
      title: "Microphone Types Polar Patterns",

      isClosed: false
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, SplineSeries, RadarSeries, Highlight]
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
 
};
</script>