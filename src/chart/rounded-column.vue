<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings' :pointRender='pointRender' :tooltipRender='tooltipRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Tiger' width=2 :marker='marker' :cornerRadius='cornerRadius' > </e-series>
                
            </e-series-collection>
        </ejs-chart>
    </div>
     <div style="float: right; margin-right: 10px;">Source:
         <a href="https://blogs.scientificamerican.com/extinction-countdown/tiger-populations-increasing/" target="_blank">blogs.scientificamerican.com</a>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates a rounded column series. Data points values are showed by using data label.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the column type charts. Column type charts are used for comparing
        the frequency, count, total or average of data in different categories. You can use <code>border</code>,
        <code>fill</code> properties to customize the vertical rect. <code>dataLabel</code> is used to represent individual
        data and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using <code>provide: { chart: [ ColumnSeries ] },</code> method.
    </p>
    <p>
        More information on the column series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, DataLabel, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                    { x: 'BGD', y: 106, text: 'Bangaladesh' },
                    { x: 'BTN', y: 103, text: 'Bhutn' },
                    { x: 'NPL', y: 198, text: 'Nepal' },
                    { x: 'THA', y: 189, text: 'Thiland' },
                    { x: 'MYS', y: 250, text: 'Malaysia' }

              ],


      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 },
            tickPosition: 'Inside',
            labelPosition: 'Inside', labelStyle: { color: '#ffffff' }
        },
        chartArea: { border: { width: 0 } },


      //Initializing Primary Y Axis
          primaryYAxis:
            {
                minimum: 0, maximum: 300, interval: 50, majorGridLines: { width: 0 },
                majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
            },


       width : Browser.isDevice ? '100%' : '60%',

     marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },

       legendSettings: { visible: false },
      
      tooltip: { 
            enable: true
         },

         cornerRadius: {
                    bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10
                },
         title: "Tiger Population - 2016"
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip]
  },
  methods: {
    tooltipRender: function(args) {
         let tooltip = args.text;
            if (tooltip.indexOf('BGD') > -1) {
                tooltip = tooltip.replace('BGD', 'Bangladesh');
            } else if (tooltip.indexOf('BTN') > -1) {
                tooltip = tooltip.replace('BTN', 'Bhutan');
            } else if (tooltip.indexOf('NPL') > -1) {
                tooltip = tooltip.replace('NPL', 'Nepal');
            } else if (tooltip.indexOf('THA') > -1) {
                tooltip = tooltip.replace('THA', 'Thailand');
            } else {
                tooltip = tooltip.replace('MYS', 'Malaysia');
            }
            args.text = tooltip;
    },
    pointRender: function(args) {
       let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
        } else if (selectedTheme === 'highcontrast') {
        args.fill = highContrastColors[args.point.index % 10];
       } else {
         args.fill = bootstrapColors[args.point.index % 10];
       }

    }
  }
 
});
</script>