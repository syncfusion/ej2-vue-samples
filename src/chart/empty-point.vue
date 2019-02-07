<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' :emptytype='emptytype' xName='x' yName='y' name='Profit' width=2 :marker='marker' :emptyPointSettings='emptyPointSettings'> </e-series>
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
                          <ejs-dropdownlist id='SelectSeriesType' :change='edgeMode' :dataSource='datadrop' index=0 :width='listwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Empty Point Mode
                    </div>
                </td>
                <td>
                    <div>
                          <ejs-dropdownlist id='emptypointmode' :change='mode' :dataSource='emptydata' index=0 :width='listwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="action-description">
    <p>
        This sample illustrates the empty point functionality in chart series. The mode of empty point can be changed by using <code>Empty Point Mode</code> in property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the empty points. You can use <code>border</code>,
        <code>fill</code>, <code>mode</code> properties to customize the empty points.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p>
        More information on the empty points can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { extend } from '@syncfusion/ej2-base';
import { Browser } from "@syncfusion/ej2-base";
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import {
  ChartPlugin,
  ColumnSeries,
  SplineSeries,
  AreaSeries,
  EmptyPointMode,
  Category,
  Legend,
  Tooltip
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
        { x: "Rice", y: 80 },
        { x: "Wheat", y: null },
        { x: "Oil", y: 70 },
        { x: "Corn", y: 60 },
        { x: "Gram", y: null },
        { x: "Milk", y: 70 },
        { x: "Peas", y: 80 },
        { x: "Fruit", y: 60 },
        { x: "Butter", y: null }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        title: "Product",
        valueType: "Category",
        interval: 1
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "Profit",
        minimum: 0,
        maximum: 100,
        interval: 20,
        labelFormat: "{value}%"
      },

      seriesType: "Column",
      marker: { visible: true, height: 10, width: 10 },
      emptyPointSettings: {
        fill: "#e6e6e6"
      },

      tooltip: {
        enable: true
      },
      legendSettings: { visible: false },


      datadrop : [ 'Column', 'Area', 'Spline' ],
      emptydata : [ 'Gap', 'Drop', 'Zero', 'Average'],
      listwidth:120,
      emptytype: "Gap",


      title: "Annual Product-Wise Profit Analysis"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Tooltip, SplineSeries, AreaSeries]
  },
  methods: {
    edgeMode: function(args) {
      this.$refs.chart.ej2Instances.series[0].type = SelectSeriesType.value;
      this.$refs.chart.ej2Instances.refresh();
    },
    mode: function(args) {
      let empty = document.getElementById('emptypointmode').value;
      this.$refs.chart.ej2Instances.series[0].emptyPointSettings.mode = empty;
      this.$refs.chart.ej2Instances.refresh();
    }
  }

});
</script>