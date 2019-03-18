<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :tooltip='tooltip' :crosshair='crosshair'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' name='2015' width=2 :marker='marker' > </e-series>
                <e-series :dataSource='seriesData1' :type='seriesType' xName='x' yName='y' name='2016' width=2 :marker='marker' > </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tbody><tr style="height: 50px">
                <td>
                    <div>Indexed
                    </div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" id="box" checked=true  @change='indexed' :width='datawidth' >
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
    <div id="action-description">
      <p>
         This sample demonstrates the rendering of indexed category axis in the chart by using two series.
      </p>
    </div>
<div id="description">
  <p>
  In this example, you can see how to indexed axis in chart. For indexed category axis you can use <code>isIndexed</code> property.
  Hover the chart area to view trackball and its tooltip. Touch and hold to enable trackball in touch enabled devices.
  </p>
  
        <p>
            More information on the indexed axis can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser, extend } from "@syncfusion/ej2-base";
import { EmitType } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  ColumnSeries,
  LineSeries,
  Tooltip,
  Legend,
  Crosshair,
  Category
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
        { x: "Myanmar", y: 7.3 },
        { x: "India", y: 7.9 },
        { x: "Bangladesh", y: 6.8 },
        { x: "Cambodia", y: 7.0 },
        { x: "China", y: 6.9 }
      ],

      seriesData1: [
        { x: "Poland", y: 2.7 },
        { x: "Australia", y: 2.5 },
        { x: "Singapore", y: 2.0 },
        { x: "Canada", y: 1.4 },
        { x: "Germany", y: 1.8 }
      ],
      seriesType: "Column",

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        edgeLabelPlacement: "Shift",
        crosshairTooltip: { enable: true },
        isIndexed: true
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        title: "GDP Growth Rate",
        labelFormat: "{value}%"
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      datatype: ["Line", "Column"],

      datawidth: 120,

      marker: { visible: false, height: 10, width: 10 },
      tooltip: { enable: true, shared: true },

     title: "Real GDP Growth",
      crosshair: { enable: true, lineType: "Vertical", line:{width:1} }
    };
  },
  provide: {
    chart: [ColumnSeries, LineSeries, Category, Legend, Crosshair, Tooltip]
  },
  updated: function() {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    indexed: function(args) {
      let element = document.getElementById("box");
      let primaryXAxis = extend({}, this.primaryXAxis);
      primaryXAxis.isIndexed = element.checked;
      this.primaryXAxis = primaryXAxis;
      if (this.primaryXAxis.isIndexed) {
       this.seriesType = 'Column';
       this.marker.visible = false;
       let primaryXAxis = extend({},this.primaryXAxis);
       primaryXAxis.labelRotation = 0;
       this.primaryXAxis = primaryXAxis;
       let crosshair = extend({}, this.crosshair);
       crosshair.line.width = 1;
       this.crosshair = crosshair;
      } else {
         this.seriesType = 'Line';
         this.marker.visible = true;
       let primaryXAxis = extend({},this.primaryXAxis);
       primaryXAxis.labelRotation = 90;
       this.primaryXAxis = primaryXAxis;
       let crosshair = extend({}, this.crosshair);
       crosshair.line.width = 0;
       this.crosshair = crosshair;
      }
    }
  }
});
</script>