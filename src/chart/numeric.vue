<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :axisLabelRender='axisLabelRender' :load='load' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='England' width=2 :marker='marker' fill='#1e90ff'> </e-series>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='West Indies' width=2 :marker='marker' fill='#b22222'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
     <div style="float: right; margin-right: 10px;">Source:
       <a href="http://www.espncricinfo.com/icc-world-twenty20-2016/engine/current/match/951373.html" target="_blank">www.espncricinfo.com</a>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates the rendering of numeric axis in the chart with England and West indies cricket match data.
    </p>
</div>
<div id="description">
   <p>
        Numeric axis is used to plot numeric data in chart. To render numeric axis, set <code>valueType</code> in axis to <code>Double</code>.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
   </p>
   <p>
    More information on the Numeric axis can be found in this
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
import { EmitType } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Legend, Tooltip, DataLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                    { x: 16, y: 2 }, { x: 17, y: 14 },
                    { x: 18, y: 7 }, { x: 19, y: 7 },
                    { x: 20, y: 10 }

      ],
      seriesData1: [
                    { x: 16, y: 7 }, { x: 17, y: 7 },
                    { x: 18, y: 11 }, { x: 19, y: 8 },
                    { x: 20, y: 24 }


      ],
      //Initializing Primary X Axis
      primaryXAxis: {
            title: 'Death Overs',
            minimum: 15,
            maximum: 21,
            interval: 1,
            majorGridLines: { width: 0 }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
        },

        chartArea: {
            border: {
                width: 0
            }
        },
         tooltip: { enable: true, format: '${point.x}th Over : <b>${point.y} Runs</b>' },
         marker: {
                    dataLabel: {
                        visible: true,
                        position: 'Top',
                        font: {
                            fontWeight: '600'
                        }
                    }
                },

         axisLabelRender: function(args) {
        if (args.axis.orientation === 'Horizontal') {
            args.cancel = args.value === 15 || args.value === 21;
        }
         },
         width: Browser.isDevice ? '100%' : '60%',
         title: "England vs West Indies"
    };
  },
  provide: {
    chart: [ColumnSeries, DataLabel, Tooltip, Legend]
  },
  methods: {
    load: function(args) {
       let selectedTheme = location.hash.split('/')[1];
       selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme === 'highcontrast') {
               args.chart.series[0].fill = '#57BCFF';
               args.chart.series[1].fill = '#E58184';
            }
    }
  },
 
});
</script>