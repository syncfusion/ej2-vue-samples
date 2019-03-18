<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :tooltip='tooltip' :load='load'>
            <e-annotations>
                <e-annotation :x='annotationX1' y=90 coordinateUnits='Point' content='<div style="color:#FF0000;font-family: bold; font-weight: 600">Christmas Offer<br> Dec 2017</div>'>
                </e-annotation>
                <e-annotation :x='annotationX2' y=90 coordinateUnits='Point' content='<div style="color:#FF0000;font-family: bold; font-weight: 800">New Year Offer<br> Jan 2018</div>'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Product' width=2 > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates sales of a product in business days. 
        Data points in this sample are enhanced with tooltip.
    </p>
</div>
<div id="description">
    <p>
        In this sample, you can see how to render and configure the date time category axis. 
        Date time category axis is used to represent only business days in datetime axis.
    </p>
    <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover a point or tap a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. For datetime category axis, you should inject
        <code>DateTimeCategory</code> module by using
        <code>provide: { chart: [ DateTimeCategory] },</code>method.
    </p>
    <p>
        More information on the datetime category axis can be found in this documentation section.
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, DateTimeCategory, Tooltip, StripLine, ChartAnnotation } from "@syncfusion/ej2-vue-charts";
import {Template} from "./date-category-temp1.vue";
Vue.use(ChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");


let templateContent = function() {
    return { template: Template}
};
export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { x: new Date(2017, 11, 20), y: 21 }, { x: new Date(2017, 11, 21), y: 24 },
                { x: new Date(2017, 11, 22), y: 24 }, { x: new Date(2017, 11, 26), y: 70 },
                { x: new Date(2017, 11, 27), y: 75 }, { x: new Date(2018, 0, 2), y: 82 },
                { x: new Date(2018, 0, 3), y: 53 }, { x: new Date(2018, 0, 4), y: 54 },
                { x: new Date(2018, 0, 5), y: 53 }, { x: new Date(2018, 0, 8), y: 45 }
     ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'DateTimeCategory',
            intervalType: 'Days',
            skeleton: 'Ed',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            stripLines: [
                { visible: true, start: new Date(2017, 11, 20), end: new Date(2017, 11, 27), color: 'skyblue', opacity: 0.5, },
                { visible: true, start: new Date(2018, 0, 2), end: new Date(2018, 0, 8), color: 'pink', opacity: 0.5 },
            ],
            title: 'Business Days'
        },

      //Initializing Primary Y Axis
       primaryYAxis: {
            labelFormat: '{value}M',
            rangePadding: 'None',
            minimum: 0,
            maximum: 100,
            interval: 20,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
        },
        chartArea: {
            border: {
                width: 0
            }
        },

       legendSettings: { visible: false },

       width: Browser.isDevice ? '100%' : '60%',
       tooltip: {
            enable: true
        },
        annotationX1: new Date(2017, 11, 22),
        annotationX2: new Date(2018, 0, 4),
        title: "Sales Comparison of a Product"
    };
  },
  provide: {
    chart: [ColumnSeries, Tooltip, DateTimeCategory, StripLine, ChartAnnotation]
  },
  methods: {
    load: function(args) {
       let selectedTheme = location.hash.split('/')[1];
       selectedTheme = selectedTheme ? selectedTheme : 'Material';
       if (selectedTheme === 'highcontrast') {
        args.chart.annotations[0].content = templateContent;
        args.chart.annotations[1].content = templateContent;
       }
    }
  },
 
});
</script>