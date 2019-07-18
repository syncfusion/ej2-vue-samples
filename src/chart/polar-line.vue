<template>
  <div class="control-section">
    <div class="col-lg-9 control-section">
        <ejs-chart ref="chart" :theme='theme' style='display:block;' id='chartcontainer' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='data' :isClosed='isClosed' :type='seriesType' drawType='Line' xName='x' yName='y' name='Warmest' width=2 :marker='marker'>
                </e-series>
                <e-series :dataSource='data1' :isClosed='isClosed' :type='seriesType' drawType='Line' xName='x' yName='y' name='Coldest' width=2 :marker='marker1'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
         <div style="float: right; margin-right: 10px;">Source:
            <a href="http://www.yr.no/place/USA/Alaska/Hatcher_Pass/statistics.html" target="_blank">www.yr.no</a>
        </div>
        </div>
        
    <div>
   
     <div class="col-lg-3 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>Series Type:</div>
                        </td>
                        <td style="width: 50%;">
                            <div>
                                <ejs-dropdownlist id='SelectSeriesType' :change='polarType' :dataSource='polardata' index=0 width='120' ></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>Closed:</div>
                        </td>
                        <td style="width: 50%;">
                            <div>
                                <input type="checkbox" @change='isClosedFunc' id="select" checked>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div id="st-lbl">Start Angle: 0</div>
                        </td>
                        <td style="width: 50%;">
                            <div>
                                <input type="range" min="0" max="360" value="0" @touchmove='startAngle' @pointermove='startAngle'  @change='startAngle' id="startangle" style="width:90%">
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div>Inversed:</div>
                        </td>
                        <td style="width: 50%;">
                            <div>
                                <input type="checkbox" @change='isInversedFunc' id="inversed">
                            </div>
                        </td>
                    </tr>
                </table>
    </div>
</div>
<div id="action-description">
    <p>
        This sample demonstrates polar series with line type for Alaska weather statistics data of the year 2016. The angle can be changed and the series can be inversed by using the properties in the panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the column type charts. Column type charts are used for comparing the frequency, count, total or average of data in different categories. You can use <code>border</code>,
        <code>fill</code> properties to customize the data appearance. <code>dataLabel</code> is used to represent individual data and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column feature, we need to inject
        <code>ColumnService</code> into the <code>provide</code> option of chart.
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
import { Browser, extend } from "@syncfusion/ej2-base";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Tooltip, Legend, PolarSeries, Category, LineSeries, RadarSeries, ChartPlugin } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
Vue.use(DropDownListPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
    theme: theme,
    isClosed: true,
      polardata : [ 'Polar', 'Radar' ],
      data: [
        { x: "Jan", y: -7.1 },
        { x: "Feb", y: -3.7 },
        { x: "Mar", y: 0.8 },
        { x: "Apr", y: 6.3 },
        { x: "May", y: 13.3 },
        { x: "Jun", y: 18.0 },
        { x: "Jul", y: 19.8 },
        { x: "Aug", y: 18.1 },
        { x: "Sep", y: 13.1 },
        { x: "Oct", y: 4.1 },
        { x: "Nov", y: -3.8 },
        { x: "Dec", y: -6.8 }
      ],
      data1: [
        { x: "Jan", y: -17.4 },
        { x: "Feb", y: -15.6 },
        { x: "Mar", y: -12.3 },
        { x: "Apr", y: -5.3 },
        { x: "May", y: 1.0 },
        { x: "Jun", y: 6.9 },
        { x: "Jul", y: 9.4 },
        { x: "Aug", y: 7.6 },
        { x: "Sep", y: 2.6 },
        { x: "Oct", y: -4.9 },
        { x: "Nov", y: -13.4 },
        { x: "Dec", y: -16.4 }
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        title: "Months",
        valueType: "Category",
        labelPlacement: "OnTicks",
        interval: 1,
        coefficient: Browser.isDevice ? 80 : 100,
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Temperature (Celsius)",
        minimum: -25,
        maximum: 25,
        interval: 10,
        edgeLabelPlacement: "Shift",
        labelFormat: "{value}°C",
      },
      marker: {
        visible: true,
        height: 10,
        width: 10,
        shape: "Pentagon"
      },
      marker1: {
        visible: true,
        height: 10,
        width: 10,
        shape: "Diamond"
      },
      tooltip: {
        enable: true
      },
      title: "Alaska Weather Statistics - 2016",
      seriesType: 'Polar'
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, LineSeries, RadarSeries]
  },
  methods: {
    isClosedFunc: function(e) {
        let element = e.target;
        this.isClosed = element.checked;
    },
    isInversedFunc: function(e) {
        let element = e.target;
        let primaryXAxis = extend({}, this.primaryXAxis);
        primaryXAxis.isInversed = element.checked;
        this.primaryXAxis = primaryXAxis;
        let primaryYAxis = extend({}, this.primaryYAxis);
        primaryYAxis.isInversed = element.checked;
        this.primaryYAxis = primaryYAxis;
        this.$refs.chart.dataBind();
    },
    startAngle: function(e) {
        let value = parseInt(e.target.value, 10);        
        let primaryXAxis = extend({}, this.primaryXAxis);
        primaryXAxis.startAngle = value;
        this.primaryXAxis = primaryXAxis;
        document.getElementById("st-lbl").innerHTML = "Start Angle: " + value;
        this.$refs.chart.ej2Instances.series[0].animation.enable = false;
        this.$refs.chart.ej2Instances.series[1].animation.enable = false;
    },
    polarType: function(args) {
        this.seriesType = SelectSeriesType.value;
    }
  },
    updated: function() {
      this.$nextTick(function() {
        this.$refs.chart.ej2Instances.refresh();
      });
    },
});
</script>