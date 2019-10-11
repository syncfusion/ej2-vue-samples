<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='waterfallContainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :legendSettings='legendSettings' :animation='animation' :connector='connector' :textRender='textRender'
            :axisLabelRender='axisLabelRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Waterfall' xName='x' yName='y' width=2
                :columnWidth='columnWidth' :connector='connector' :intermediateSumIndexes:='intermediate' :sumIndexes='sum' :marker='marker'
                 negativeFillColor='#e56590'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the revenue and profits of a company by using default waterfall series in the chart. Tooltip shows the information about the profits earned by each department on the company.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the Waterfall type chart. You can use <code>border</code>,
        <code>fill</code> properties to customize the column. <code>dataLabel</code> is used to represent individual data
        and its value.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>

    <p style="font-weight: 500">Injecting Module</p>
    <p>
        chart component features are segregated into individual feature-wise modules. To use Waterfall series, we need to inject
        <code>WaterfallSeries</code> module using <code>provide: { chart: [ WaterfallSeries] },</code> method.
    </p>
    <p>
        More information on the Waterfall series can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>
   #waterfallContainer_Series_0_Connector_ {
        stroke-dasharray: 10px 10px;
        stroke-linejoin: round; stroke-linecap: round;
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
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, WaterfallSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, Legend, DataLabel, ChartTheme} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
        seriesData: [
            { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
            { x: 'Development', y: -688 },
            { x: 'Revenue', y: 1030 }, { x: 'Balance' },
            { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
            { x: 'Net Profit' }
        ],
        chartArea: { border: { width: 0 } },

           //Initializing Primary X Axis
          primaryXAxis: {
            valueType: 'Category',
            majorGridLines: { width: 0 },
            plotOffset: 20
        },


      //Initializing Primary Y Axis
          primaryYAxis: {
            minimum: 0, maximum: 5000, interval: 1000,
            majorGridLines: { width: 0 },
            title: 'Expenditure'
        },

        width: Browser.isDevice ? '100%' : '80%',

        animation: { enable: true },

         marker:  {
            dataLabel: { visible: true, font: { color: '#ffffff' } }
         },
         connector: { color: '#5F6A6A', width: 2 },

         sum: [7],
         intermediate: [4],
         columnWidth: 0.9,

     
      tooltip: { 
            enable: true
         },
          legendSettings: { visible: false },
      
      title: "Company Revenue and Profit"
    };
  },
  provide: {
    chart: [WaterfallSeries, Category, Legend, Tooltip, DateTime, Zoom, Logarithmic,Crosshair, DataLabel]
  },
  methods: { 
    textRender: function(args) {
        let value = Number(args.text) / 1000;
            value = Math.round((value * 100)) / 100;
            args.text = value.toString();
    },
    axisLabelRender: function(args) {
        if (args.axis.name === 'primaryYAxis') {
                args.text = '$' + Number(args.text) / 1000 + 'B';
            }
    }
  },
 
});
</script>