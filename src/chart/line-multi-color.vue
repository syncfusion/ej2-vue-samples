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
        This sample shows the particulate levels in rainfall with multi-colored line series in the chart. Data points are enhanced with individual colors and tooltips.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure each point in line type series. 
        Multicolored line charts are used to represent time-dependent data to show the trends at equal intervals with their individual colors by using <code>PointColorMapping</code>.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use multi colored line series, we need to inject
        <code>MultiColoredLineSeries</code> module using
        <code>provide: { chart: [MultiColoredLineSeries] },</code> method.
    </p>
    <p>
          More information about the multi-colored line series can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line#multicolored-line" aria-label="Navigate to the documentation for Multicolored Line in Vue Chart component">documentation section</a>.
    </p> 
</div>
</div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { rainFallData } from './financial-data';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, MultiColoredLineSeries, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    
   let dataValues = [];
    let colors = ['red', 'green', '#ff0097', 'crimson', 'blue', 'darkorange', 'deepskyblue',
        'mediumvioletred', 'violet', 'peru', 'gray', 'deeppink', 'navy'];
    rainFallData.map(function(value, index) {
        dataValues.push({
            XValue: new Date(2017, -index, 1), YValue: value.toFixed(2),
            color: colors[Math.floor(index / 16)]
        });
    });

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
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
       width : Browser.isDevice ? '100%' : '75%',
      
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
   
};
</script>