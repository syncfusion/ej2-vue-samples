<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :tooltipRender='tooltipRender' :axisLabelRender='axisLabelRender' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingBar' xName='Height' yName='Female' name='Female' width=2 :marker='marker' columnWidth=0.5> </e-series>
                <e-series :dataSource='seriesData' type='StackingBar' xName='Height' yName='Male' name='Male' width=2 :marker='markerSeries2' columnWidth=0.5> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
      This sample illustrates a stacked bar chart with negative data points. Data point values are shown in data labels.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure negative values in a stacked bar chart. The stacked bar chart stacks points in the series horizontally. You can also use the <code>StackingGroup</code> property to group stacked collections based on category.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
     
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use bar series, we need to inject
            <code>StackingBarSeries</code> module using <code>provide: { chart: [StackingBarSeries] }</code> method.
        </p>
        <p>
          More information about the stacked bar type series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stack-bar" aria-label="Navigate to the documentation for Stacked Bar Chart in Vue Chart component">documentation section</a>.
        </p> 
</div>

</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, StackingBarSeries, Category, Tooltip, Legend, DataLabel, Highlight} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
         theme: theme,
      seriesData: [
        { Height : 4.5, Female : 31, Male : -31, Text : "31 KG", Female_Text : "31 KG" },
        { Height : 4.8, Female : 37, Male : -39, Text : "39 KG", Female_Text : "37 KG" },
        { Height : 5.1, Female : 49, Male : -52, Text : "52 KG", Female_Text : "49 KG" },
        { Height : 5.4, Female : 57, Male : -64, Text : "64 KG", Female_Text : "57 KG" },
        { Height : 5.7, Female : 63, Male : -70, Text : "70 KG", Female_Text : "63 KG" },
        { Height : 6, Female : 69, Male : -74, Text : "74 KG", Female_Text : "69 KG" }
        ],

      //Initializing Primary X Axis
     primaryXAxis: {
            vvalueType: 'Category',
            title: 'Height in Inches',
            interval: 0.3,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        },
      //Initializing Primary Y Axis
          primaryYAxis:
        {
            title: 'Weight (kg)',
            labelFormat: '{value}',
            lineStyle: { width: 0 },
            edgeLabelPlacement: 'Shift',
            rangePadding: 'Round',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        marker: {
            dataLabel: {
            name: 'Female_Text',
            visible: true,
            position: 'Top',
            font: {
                fontWeight: '600'
            }
            }
        },
        markerSeries2: {
            dataLabel: {
            name: 'Text',
            visible: true,
            position: 'Top',
            font: {
                fontWeight: '600'
            }
            }
        },

        width : Browser.isDevice ? '100%' : '75%',
           tooltip: { 
            enable: true
         },
        legendSettings: {
            position: Browser.isDevice ? 'Bottom' : 'Right',
            enableHighlight : true
        },
      title: "Height vs Weight"
    };
  },
  provide: {
    chart: [StackingBarSeries, Legend, Category, Tooltip, DataLabel, Highlight]
  },
  methods: {
   
     tooltipRender: function(args){
        args.text = args.text.indexOf('-') > 0 ? args.text.replace('-', '') : args.text;
        args.text = args.text + " " + "<b>kg</b>";
    },
    axisLabelRender: function (args) {
        if (args.value < 0) {
            args.text = (-args.value).toString();
        }
    },

  },
 
};
</script>