<template>
  <div>
    <div class="col-lg-8 control-section sb-property-border">
      <ejs-chart ref="chart" :theme='theme' style='display:block;' id='chartcontainer' :primaryXAxis='primaryXAxis'
        :primaryYAxis='primaryYAxis' :title='title' :tooltip='tooltip' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='data' :isClosed='isClosed' :type='seriesType' drawType='Line' xName='Month'
            yName='GER_Temp' name='Germany' width=2 :marker='marker'>
          </e-series>
          <e-series :dataSource='data' :isClosed='isClosed' :type='seriesType' drawType='Line' xName='Month'
            yName='ENG_Temp' name='England' width=2 :marker='marker'>
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div>

      <div class="col-lg-4 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
          <tr style="height: 50px">
            <td style="width: 50%">
              <div>Series Type:</div>
            </td>
            <td style="width: 50%;">
              <div>
                <ejs-dropdownlist id='SelectSeriesType' :change='polarType' :dataSource='polardata' index=0
                  width='120'></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 50%">
              <div id="closed">Closed:</div>
            </td>
            <td style="width: 50%;">
              <div>
                <input type="checkbox" @change='isClosedFunc' id="select" checked aria-labelledby="Checkbox checked">
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 50%">
              <div id="st-lbl">Start Angle: 0</div>
            </td>
            <td style="width: 50%;">
              <div>
                <input type="range" min="0" max="360" value="0" @touchmove='startAngle' @pointermove='startAngle'
                  @change='startAngle' id="startangle" style="width:90%" aria-labelledby="Slider">
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 50%">
              <div id="Inversed">Inversed:</div>
            </td>
            <td style="width: 50%;">
              <div>
                <input type="checkbox" @change='isInversedFunc' id="inversed" aria-labelledby="Checkbox unchecked">
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div id="action-description">
      <p>This <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-charts/chart-types/radar-chart" aria-label="Navigate to explore the Syncfusion<sup>®</sup> Vue Polar Radar Line Chart">Vue Polar Radar Line Chart</a> example visualizes data about Alaska Weather Statistics - 2016 with a default polar line series.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure polar and radar charts with a line series. 
        The type of series can be changed using the <b>Series Type</b> dropdown list in the properties panel. 
        Also, the angle can be changed and the series can be inversed using <code>Start Angle</code> and <code>Inversed</code> properties.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use column feature, we need to
        inject
        <code>ColumnService</code> into the <code>provide</code> option of chart.
      </p>
      <p>
        More information on the polar and radar chart with a line series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#line" aria-label="Navigate to the documentation for Polar Line in Vue Chart component">documentation section</a>.
    </p>
    </div>
  </div>

</template>
<style scoped>
#control-container {
  padding: 0px !important;
}
#inversed:hover {
    cursor: pointer;
}
</style>
<script>
import { Browser, extend } from "@syncfusion/ej2-base";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Tooltip, Legend, PolarSeries, Category, LineSeries, RadarSeries, ChartComponent, SeriesDirective, SeriesCollectionDirective, Highlight } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function () {
    return {
      theme: theme,
      isClosed: true,
      polardata: ['Polar', 'Radar'],
      data: [
        { Month: "Jan", GER_Temp: -7.1, ENG_Temp: -17.4 },
        { Month: "Feb", GER_Temp: -3.7, ENG_Temp: -15.6 },
        { Month: "Mar", GER_Temp: 0.8, ENG_Temp: -12.3 },
        { Month: "Apr", GER_Temp: 6.3, ENG_Temp: -5.3 },
        { Month: "May", GER_Temp: 13.3, ENG_Temp: 1.0 },
        { Month: "Jun", GER_Temp: 18.0, ENG_Temp: 6.9 },
        { Month: "Jul", GER_Temp: 19.8, ENG_Temp: 9.4 },
        { Month: "Aug", GER_Temp: 18.1, ENG_Temp: 7.6 },
        { Month: "Sep", GER_Temp: 13.1, ENG_Temp: 2.6 },
        { Month: "Oct", GER_Temp: 4.1, ENG_Temp: -4.9 },
        { Month: "Nov", GER_Temp: -3.8, ENG_Temp: -13.4 },
        { Month: "Dec", GER_Temp: -6.8, ENG_Temp: -16.4 },
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        title: "Months",
        valueType: "Category",
        labelPlacement: "OnTicks",
        interval: 1,
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
        isFilled: true,
        visible: true,
        height: 7,
        width: 7,
        shape: "Pentagon"
      },
      legendSettings: {
        enableHighlight: true
      },
      tooltip: {
        enable: true
      },
      title: "Alaska Weather Statistics - 2016",
      seriesType: 'Polar'
    };
  },
  provide: {
    chart: [Tooltip, Legend, PolarSeries, Category, LineSeries, RadarSeries, Highlight]
  },
  methods: {
    isClosedFunc: function (e) {
      let element = e.target;
      this.isClosed = element.checked;
    },
    isInversedFunc: function (e) {
      let element = e.target;
      let primaryXAxis = extend({}, this.primaryXAxis);
      primaryXAxis.isInversed = element.checked;
      this.primaryXAxis = primaryXAxis;
      let primaryYAxis = extend({}, this.primaryYAxis);
      primaryYAxis.isInversed = element.checked;
      this.primaryYAxis = primaryYAxis;
      this.$refs.chart.dataBind();
    },
    startAngle: function (e) {
      let value = parseInt(e.target.value, 10);
      let primaryXAxis = extend({}, this.primaryXAxis);
      primaryXAxis.startAngle = value;
      this.primaryXAxis = primaryXAxis;
      document.getElementById("st-lbl").innerHTML = "Start Angle: " + value;
      this.$refs.chart.ej2Instances.series[0].animation.enable = false;
      this.$refs.chart.ej2Instances.series[1].animation.enable = false;
    },
    polarType: function (args) {
      this.seriesType = SelectSeriesType.value;
    }
  },
  updated: function () {
    this.$nextTick(function () {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
};
</script>