<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref='chart' :theme="theme" style='display:block' :animation="animation" align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :tooltip='tooltip' :pointRender='pointRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Scatter'  xName='x' yName='y' name='Sales' :marker='marker' width=2 :errorBar='errorBar'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
    
    <div class="col-md-4 property-section">
        <table id="property" class="property-panel-table"  title="Properties" style="width: 100%">
            <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>Error Bar Type</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='direction' :change='errorBarDirection' :dataSource='errordata' index=0 :width='listwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Drawing Mode</div>
                </td>
                <td style>
                    <div>
                       <ejs-dropdownlist id='errorBarType' :change='errorBarTypeChange' :dataSource='drawdata' index=0 :width='listwidth' ></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Drawing Direction</div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='drawmode' :change='errorBarMode' :dataSource='directiondata' index=0 :width='listwidth' ></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Vertical Error</div>
                </td>
                <td>
                    <div>
                        <ejs-numerictextbox value=3 :min="1" :max="20" width=120 :step="1" :change='verticalErrorBar' id='vertical'></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr style="height:50px">
                <td>
                    <div>Horizontal Error</div>
                </td>
                <td>
                    <div>
                        <ejs-numerictextbox value=3 :min="1" :max="20" width=120 :step="1" :change='horizontalErrorBar' id='horizontal'></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div id="action-description">
    <p>
        This sample visualizes the errors in sales distribution of a car for a certain period with error bar in the chart. In property panel, the options are available to change error bar type, drawing mode, and drawing direction of error bar by means of dropdown
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the error bar charts. Line type charts are used for cartesian type
        series. You can use error bar by set
        <code>visible</code> property to true. You can change the error bar rendering type using
        <code>type</code> property like fixedValue, percentage, standardDeviation, standardError and custom option of errorBar. To change
        the error bar line length you can use
        <code>verticalError</code> property.
    </p>
    <p>Chart supports the following error bar types.
    </p>
    <ul>
        <li>
            <code>Fixed</code> - Renders a fixed type error bar.</li>
        <li>
            <code>Percentage</code> - Renders a percentage type error bar.</li>
        <li>
            <code>StandardDeviation</code> - Renders a standard deviation type error bar.</li>
        <li>
            <code>StandardError</code> - Renders a standard error type error bar.</li>
        <li>
            <code>Custom</code> - Renders a custom type error bar.</li>
    </ul>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use error bar, we need to inject
        <code>ErrorBar</code> module using
        <code>Chart.Inject(ErroBar)</code> method.
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
import { extend } from '@syncfusion/ej2-base';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-vue-inputs';
import { EmitType } from '@syncfusion/ej2-base';
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';
import { ChartPlugin, ScatterSeries, Category, Tooltip, ErrorBar, ErrorBarMode, ErrorBarType, ErrorBarDirection } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        seriesData: [
                { x: 'IND', y: 24 }, { x: 'AUS', y: 20 }, { x: 'USA', y: 35 },
                { x: 'DEU', y: 27 }, { x: 'ITA', y: 30 },
                { x: 'UK', y: 41 }, { x: 'RUS', y: 26 }

        ],
        
        chartArea: { border: { width: 0 } },

           //Initializing Primary X Axis
         primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
            {
                labelFormat: '{value}%', minimum: 15, maximum: 45, lineStyle: { width: 0 }
            },
        
         marker: { height: 10, width: 10 },

        errorBar: { visible: true, verticalError: 3, horizontalError: 3 },

        tooltip: { enable: true },
        
        legendSettings: {
            visible: false
        },
    
       directiondata : [ 'Both', 'Minus', 'Plus' ],
       errordata : [ 'Fixed', 'Percentage', 'StandardDeviation', 'StandardError', 'Custom' ],
       drawdata : [ 'Vertical', 'Horizontal', 'Both'],
       animation: { enable: false },

      listwidth:120,
      
      title: "Sales Distribution of Car by Region",

    };
  },
  provide: {
    chart: [ScatterSeries, Category, ErrorBar, Tooltip]
  },
  methods: { 
       errorBarDirection:function(args){
           let errordirection = document.getElementById('direction').value;
           this.$refs.chart.ej2Instances.series[0].animation.enable = false;
           this.$refs.chart.ej2Instances.series[0].errorBar.type = errordirection;
           this.$refs.chart.ej2Instances.refresh();

    },
     errorBarTypeChange:function(args){
        let errortype = document.getElementById('errorBarType').value;
        this.$refs.chart.ej2Instances.series[0].animation.enable = false;
        this.$refs.chart.ej2Instances.series[0].errorBar.mode = errortype;
        this.$refs.chart.ej2Instances.refresh();
    },
    pointRender: function(args) {
        let selectedTheme= location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
            args.fill = materialColors[args.point.index % 10];
        } else if (selectedTheme === 'highcontrast') {
            args.fill = highContrastColors[args.point.index % 10];
        } else {
            args.fill = bootstrapColors[args.point.index % 10];
        }
    },
     errorBarMode:function(args) {
        let errormode = document.getElementById('drawmode').value;
        this.$refs.chart.ej2Instances.series[0].animation.enable = false;
        this.$refs.chart.ej2Instances.series[0].errorBar.direction = errormode;
        this.$refs.chart.ej2Instances.refresh();  
    },
    verticalErrorBar: function(e) {
        let vertical = document.getElementById('vertical').value;
        this.$refs.chart.ej2Instances.series[0].animation.enable = false;
        this.$refs.chart.ej2Instances.series[0].errorBar.verticalError = vertical;
        this.$refs.chart.ej2Instances.refresh();  
    },
    horizontalErrorBar: function(e) {
        let horizontal = document.getElementById('horizontal').value;
        this.$refs.chart.ej2Instances.series[0].animation.enable = false;
        this.$refs.chart.ej2Instances.series[0].errorBar.horizontalError = horizontal;
        this.$refs.chart.ej2Instances.refresh();  
     }
  }
  
});
</script>