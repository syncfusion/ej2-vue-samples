<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :pointRender='pointRender' :legendSettings='legendSettings' >
            <e-series-collection>
                <e-series :dataSource='seriesData'  type='Column' xName='x' yName='y' name='Rate' :marker='marker' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
  <div id="action-description">
    <p>
        This sample illustrates inversed axis in chart to plot exchange rate over a period.
    </p>
</div>
<div id="description">
    <p>
    In this example, you can see how to inverse an axis in chart. Here both the X and Y axis are inversed using <code>isInversed</code> property.        
    </p>
    <p> DataLabel are used to represent individual data and its value.</p>
     <p>
      Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p>
        More information on inversed axis can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#isInversed">documentation section</a>.
    </p>
</div>
</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Tooltip, Legend, DataLabel } from "@syncfusion/ej2-vue-charts";
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';
import { Browser, EmitType } from '@syncfusion/ej2-base';

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        seriesData: [
                    { x: '2008', y: 15.1 }, { x: '2009', y: 16 }, { x: '2010', y: 21.4 },
                    { x: '2011', y: 18 }, { x: '2012', y: 16.2 }, { x: '2013', y: 11 },
                    { x: '2014', y: 7.6 }, { x: '2015', y: 1.5 }

      ],
     
      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'Category',
            opposedPosition: true,
            isInversed: true,
            majorGridLines: { width: 0 }
        },


      //Initializing Primary Y Axis
     primaryYAxis:
        {
            edgeLabelPlacement: 'Shift',
            labelIntersectAction: 'Rotate45',
            isInversed: true,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: {
                color: 'transparent'
            }
        },
        pointRender: function(args) {
        let selectedTheme = location.hash.split('/')[1];
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
        chartArea: {
            border: {
                width: 0
            }
        },

       marker: { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } },
         tooltip: {
            enable: true
        },
        legendSettings: { visible: false },

      width: "60%",

      title: "Exchange Rate (INR per USD)"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Tooltip, DataLabel]
  },
  methods: {
    
  },
   
});
</script>