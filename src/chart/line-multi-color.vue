<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='MultiColoredLine' xName='XValue' yName='YValue' name='Rainfall' width=1.5 pointColorMapping='color' > </e-series>

            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the particulate levels in rainfall with multi colored line series in the chart. 
        Data points are enhanced with individual color and tooltip.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure each point in line type series. 
        Multi colored line charts are used to represent time-dependent data to show the trends at equal intervals with their individual colors by using <code>pointColorMapping</code>.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use multi colored line series, we need to inject
        <code>MultiColoredLineSeries</code> module using
        <code>provide: { chart: [MultiColoredLineSeries] },</code> method.
    </p>
</div>
</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { rainFallData } from './financial-data';
import { ChartPlugin, MultiColoredLineSeries, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    
   let dataValues = [];
    let colors = ['red', 'green', '#ff0097', 'crimson', 'blue', 'darkorange', 'deepskyblue',
        'mediumvioletred', 'violet', 'peru', 'gray', 'deeppink', 'navy'];
    rainFallData.map(function(value, index) {
        dataValues.push({
            XValue: new Date(2017, -index, 1), YValue: value.toFixed(2),
            color: colors[Math.floor(index / 16)]
        });
    });

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
      seriesData: dataValues,

      colors: [
            'red', 'green', '#ff0097', 'crimson', 'blue', 'darkorange', 'deepskyblue',
        'mediumvioletred', 'violet', 'peru', 'gray', 'deeppink', 'navy'

      ],

      //Initializing Primary X Axis
      primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        },

      //Initializing Primary Y Axis
        primaryYAxis:
            {
                rangePadding: 'None',
                minimum: 4,
                maximum: 10,
                title: 'Particulate Matter(PM)',
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
        chartArea: {
            border: {
                width: 0
            }
        },

         legendSettings: { visible: false },
       width : Browser.isDevice ? '100%' : '60%',
      
      tooltip: {
            enable: true, shared: true
        },

      title: "Particulate Levels in Rainfall"
    };
  },
  provide: {
    chart: [DateTime, Tooltip, MultiColoredLineSeries]
  },
  methods: {
   },
   
});
</script>