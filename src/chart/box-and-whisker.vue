<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref='chart' :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :tooltip='tooltip' :animation='animation' :pointRender='pointRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :animation='animation' :showMean='showMean' type='BoxAndWhisker' :boxPlotMode='boxType' xName='x' yName='y' name='Department' :marker='marker' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
    
    <div class="col-md-4 property-section">
        <table id="property" class="property-panel-table"  title="Properties" style="width: 100%">
            <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>Mode</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='modeid' :change='mode' :dataSource='modedata' index=0 :width='listwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
                <tr style="height: 50px">
                <td style="width: 50%">
                    <div>Mean: </div>
                </td>
                <td style="width: 50%; padding-left: 10px; padding-right: 10px">
                    <div>
                        <input type="checkbox" id="mean" checked=true @change='meanCheck'> 
                    </div>
                </td>
            </tr>

        </table>
    </div>
</div>

<div id="action-description">
    <p>
        This sample visualizes the employee's age group in various departments of a country with box and whisker type series in the chart. Mode of box and whisker series can be changed by <code>Mode</code> in property panel. To display the <code>mean</code> value in a series, enable the Mean in the property panel.
    </p>
</div>
<div id="description">
    <p>
       In this example, you can see how to render and configure the box and whisker type charts. Similar to line type series, but the area get closed and filled with series color. You can use <code>border</code>, <code>fill</code> properties to customize the area. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value. Legend is enabled in this example with series type shape.
    </p>
   
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use box and whisker series, we need to inject <code>BoxAndWhiskerSeries</code> module using <code>provide: { chart: [BoxAndWhiskerSeries] },</code> method.
    </p>
    <p>
        More information on the error bar can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { EmitType } from '@syncfusion/ej2-base';
import { ChartPlugin, Category, Tooltip, BoxAndWhiskerSeries, getSaturationColor } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

let materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',
        '#ea7a57', '#404041', '#00bdae'];
let fabricColors= ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',
        '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];
let bootstrapColors =  ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',
        '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];
export default Vue.extend({
  data: function() {
    return {
         theme: theme,
        seriesData: [
                { x: 'Development', y: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },
                    { x: 'Testing', y: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },
                    { x: 'HR', y: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] },
                    { x: 'Finance', y: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] },
                    { x: 'R&D', y: [26, 27, 29, 32, 34, 35, 36, 37, 38, 39, 41, 43, 58] },
                    { x: 'Sales', y: [27, 26, 28, 29, 29, 29, 32, 35, 32, 38, 53] },
                    { x: 'Inventory', y: [21, 23, 24, 25, 26, 27, 28, 30, 34, 36, 38] },
                    { x: 'Graphics', y: [26, 28, 29, 30, 32, 33, 35, 36, 52] },
                    { x: 'Training', y: [28, 29, 30, 31, 32, 34, 35, 36] }
        ],
        
           //Initializing Primary X Axis
             primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            labelIntersectAction: 'Trim'
        },
        chartArea: {
            border: {
                width: 0
            }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 10, maximum: 60,
            interval: 10, title: 'Age',
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }
        },
        
        
      
        boxType: "Normal",
        showMean: true,
         marker: {
                    visible: true,
                    width: 10,
                    height: 10
                },

        tooltip: { enable: true },
        
        legendSettings: {
            visible: false
        },

       modedata : [ 'Normal', 'Exclusive', 'Inclusive', ],
       animation: { enable: false },

      listwidth:120,
        modetype: "Normal",
      title: "Employee Age Group in Various Department"

    };
  },
  provide: {
    chart: [Category, BoxAndWhiskerSeries, Tooltip]
  },
  updated: function () {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.refresh();
    });
  },

  methods: { 
      load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
   
        mode: function(args) {   
          this.boxType = modeid.value;
       
    },

    meanCheck: function(args) {
        let target = document.getElementById('mean');
        this.showMean = target.checked;
    },
     pointRender: function (args) {
        let selectedTheme= location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
            args.fill = materialColors[args.point.index % 10];
        } else {
            args.fill = bootstrapColors[args.point.index % 10];
        }
        args.border.color = getSaturationColor(args.fill, -0.6);
    }

   
  },
 
  
});
</script>