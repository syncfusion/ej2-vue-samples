<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :pointRender='pointRender' :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Users' width=2 :marker='marker' > </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
         <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>Intersect Action
                    </div>
                </td>
                <td>
                    <div>
                          <ejs-dropdownlist id='actionId' :change='actionChange' :dataSource='actiondata' index=0 :width='listwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Edge Label Placement
                    </div>
                </td>
                <td>
                    <div>
                          <ejs-dropdownlist id='labelId' :change='labelChange' :dataSource='labeldata' index=0 :width='listwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
             <tr style="height: 50px">
                <td>
                    <div>Label Position
                    </div>
                </td>
                <td>
                    <div>
                          <ejs-dropdownlist id='positionId' :change='positionChange' :dataSource='positiondata' index=0 :width='listwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
             <tr style="height: 50px">
                <td>
                    <div>Enable Trim: 
                    </div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" id="Trim" unchecked=true  @change='trimChange' :width= 120 >
                    </div>
                </td>
            </tr>
             <tr style="height: 50px">
                <td>
                    <div>Maximum Label Width: </div>
                </td>
                <td>
                    <div>
                        <ejs-numerictextbox value=34 :min="1" width=120 :change='widthChange' id='labelWidth'></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates the rendering of category axis in the chart with internet users of different countries.
    </p>
</div>
<div id="description">
  <p>
        In this example, you can see how to arrange the axis labels and how to trim the axis label smartly. When the Axis labels overlap with each other based on
        the chart dimensions and label size, you can use the 
        <code>labelPlacement</code> property. 
  </p>
  <p>
  Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
  </p>
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use Category axis, we need to inject
            <code>Category</code> module using <code>provide: {chart: [Category]},</code> method.
        </p>
        <p>
            More information on the Category axis can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
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
import { EmitType } from "@syncfusion/ej2-base";
import { NumericTextBox } from '@syncfusion/ej2-vue-inputs';
import {
  ChartPlugin,
  ColumnSeries,
  Tooltip,
  DataLabel,
  Category
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
         theme: theme,
      seriesData: [
        { x: 'South Korea', y: 39 }, { x: 'India', y: 61 },
                { x: 'Pakistan', y: 20 }, { x: 'Germany', y: 65 },
                { x: 'Australia', y: 16 }, { x: 'Italy', y: 29 },
                { x: 'France', y: 45 }, { x: 'United Arab Emitrates', y: 10 },
                { x: 'Russia', y: 41 }, { x: 'Mexico', y: 31 },
                { x: 'Brazil', y: 76 }, { x: 'China', y: 51 }
      ],

      //Initializing Primary X Axis
          primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: 'Hide',
            edgeLabelPlacement: 'None',
            labelPosition: 'Outside'
        },
        chartArea: {
            border: {
                width: 0
            }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
            {
                labelStyle: { size: '0px' },
                majorTickLines: { width: 0 },
                majorGridLines: { width: 0 },
                lineStyle: { width: 0 },
            },
         actiondata : [ 'Hide', 'Trim', 'Wrap', 'MultipleRows', 'Rotate45', 'Rotate90', 'None'],
         labeldata : [ 'None', 'Hide', 'Shift'],
          positiondata : [ 'Outside', 'Inside'],
         listwidth:120,
      marker: {
                    dataLabel: {
                        visible: true,
                        position: Browser.isDevice ? 'Outer' : 'Top',
                        font: { fontWeight: '600', color: Browser.isDevice ? '#404041' : '#ffffff' }
                    }
                },

      tooltip: { enable: true },

      legendSettings: {
        visible: false
      },

      pointRender: function(args) {
        let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        if (selectedTheme && selectedTheme.indexOf("fabric") > -1) {
          args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === "material") {
          args.fill = materialColors[args.point.index % 10];
        } else if (selectedTheme === "highcontrast") {
          args.fill = highContrastColors[args.point.index % 10];
        } else {
          args.fill = bootstrapColors[args.point.index % 10];
        }
      },
      width: "80%",
      title: "Internet Users in Millions"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, DataLabel, Tooltip]
  },
   updated: function () {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.dataBind();
    });
  },
  
  methods: {
    actionChange: function(args) {
     let axis = document.getElementById('actionId').value;
        let primaryXAxis = extend({}, this.primaryXAxis);
            primaryXAxis.labelIntersectAction = axis;
            this.primaryXAxis = primaryXAxis;
    },
     labelChange: function(args) {
       let label = document.getElementById('labelId').value;
        let primaryXAxis = extend({}, this.primaryXAxis);
            primaryXAxis.edgeLabelPlacement = label;
            this.primaryXAxis = primaryXAxis; 
    },
     positionChange: function(args) {
      let position = document.getElementById('positionId').value;
        let primaryXAxis = extend({}, this.primaryXAxis);
            primaryXAxis.labelPosition = position;
            this.primaryXAxis = primaryXAxis; 
    },
     widthChange: function(e) {
      let width = document.getElementById('labelWidth').value;
      let primaryXAxis = extend({}, this.primaryXAxis);
        primaryXAxis.maximumLabelWidth = width;
        this.primaryXAxis = primaryXAxis;  
    },
     trimChange: function(args) {
      let trim = document.getElementById("Trim");
      let primaryXAxis = extend({}, this.primaryXAxis);
      primaryXAxis.enableTrim = trim.checked;
      this.primaryXAxis = primaryXAxis;
    }
  }
});
</script>