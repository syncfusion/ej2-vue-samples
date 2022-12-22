<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme'  align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' >
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y'  name='2015' width=2 :marker='marker' > </e-series>
                <e-series :dataSource='seriesData1' :type='seriesType' xName='x' yName='y'  name='2016' width=2 :marker='marker' > </e-series>
               
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
  </p>
  
        <p>
            More information on the indexed axis can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser, extend } from "@syncfusion/ej2-base";
import { EmitType } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  ColumnSeries,
  LineSeries,
  Legend,
  Category,  DataLabel,
} from "@syncfusion/ej2-vue-charts";
import { Data } from "@syncfusion/ej2-grids";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: "India", y: 7.3 },
        { x: "Myanmar", y: 7.9 },
        { x: "Bangladesh", y: 6.8 },
        { x: "Cambodia", y: 7.0 },
        { x: "China", y: 6.9 }
      ],

      seriesData1: [
        { x: "Australia", y: 2.7 },
        { x: "Poland", y: 2.5 },
        { x: "Singapore", y: 2.0 },
        { x: "Canada", y: 1.4 },
        { x: "Germany", y: 1.8 }
      ],
      seriesType: "Column",
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        isIndexed: true,
        labelRotation: Browser.isDevice ? -45 : 0,
        labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}%"
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      marker: {
        dataLabel: {
          visible: true,
          position: Browser.isDevice ? 'Outer': "Top",
          font: {
            fontWeight: "600",
          }
        }
      },
      datatype: ["Line", "Column"],
      datawidth: 120,

     

     title: "Real GDP Growth",
    };
  },
  provide: {
    chart: [ColumnSeries, LineSeries, Category, DataLabel, Legend]
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
      } else {
         this.seriesType = 'Line';
         this.marker.visible = true;
       let primaryXAxis = extend({},this.primaryXAxis);
       primaryXAxis.labelRotation = 90;
       this.primaryXAxis = primaryXAxis;
      }
    }
  }
});
</script>