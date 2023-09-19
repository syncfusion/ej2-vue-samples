<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='waterfallContainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings' :animation='animation'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' width=2 name="USA" :border='border'
                 :connector='connector' :intermediateSumIndexes='intermediate' :sumIndexes='sum' :marker='marker'
                 negativeFillColor='#e56590'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the revenue and profits of a company using the default waterfall series chart. The tooltip provides details on the profits made by each department.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the waterfall chart. The waterfall chart explains the gradual change in the quantitative value of an entity that is subject to changes by increments or decrements.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use Waterfall series, we need to inject
        <code>WaterfallSeries</code> module using <code>provide: { chart: [ WaterfallSeries] },</code> method.
    </p>
    <p>
        More information on the waterfall series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/waterfall">documentation section</a>.
    </p>
</div>
</div>

</template>
<style >
   #waterfallContainer_Series_0_Connector_ {
        stroke-dasharray: 4px 4px;
        stroke-linejoin: round; 
        stroke-linecap: round;
        -webkit-animation: dash 1s linear infinite;
        animation: dash 1s linear infinite;
    }

    @-webkit-keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }

    @keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, WaterfallSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, Legend, DataLabel, ChartTheme} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

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
            { x: 'Income', y: 971 }, { x: 'Sales', y: -101 },
            { x: 'Development', y: -268 },
            { x: 'Revenue', y: 403 }, { x: 'Balance' },
            { x: 'Expense', y: -136 }, { x: 'Tax', y: -365 },
            { x: 'Net Profit' }
        ],
        chartArea: { border: { width: 0 } },

           //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            labelRotation: Browser.isDevice ? -45 : 0,
            labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45', 
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },


      //Initializing Primary Y Axis
          primaryYAxis: {
            minimum: 0, maximum: 1250, interval: 250,
            majorGridLines: { width: 1 },
            lineStyle: {width: 0},
            majorTickLines: { width: 0 },
            title: 'USD',
            labelFormat:'{value}K'
        },

        width: Browser.isDevice ? '100%' : '75%',
        border :{color:'black' , width: 1}, 
        animation: { enable: true },

         marker:  {
            dataLabel: { visible: true, }
         },
         connector: { color: '#5F6A6A', width: 2 },

         sum: [7],
         intermediate: [4],

     
      tooltip: { 
            enable: true,
            header:"",
            format:'<b>${point.x}</b> <br> Product Revenue : <b>${point.y}</b>'
         },
          legendSettings: { visible: false },
      
      title: "Company Revenue and Profit"
    };
  },
  provide: {
    chart: [WaterfallSeries, Category, Legend, Tooltip, DateTime, Zoom, Logarithmic,Crosshair, DataLabel]
  },
  methods: { 
  },
 
};
</script>