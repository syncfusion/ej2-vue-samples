<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' radius='70%' xName='x' yName='y' startAngle=0 :dataLabel='dataLabel'
                  endAngle=360 innerRadius='40%' name='Project'  explode=true explodeOffset='10%' :explodeIndex='explodeIndex'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
    This sample visualizes the project cost breakdown statistics by using doughnut series. Datalabel shows the Information about the points.
    While hovering on the slice, border will be highlighted.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the pie chart. You can use <code>border</code>, <code>fill</code> properties to customize the pie point. <code>dataLabel</code> is used to represent individual data and its value.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.

    </p>
    <p>
        Inner radius and outer radius of the chart can be changed by <code>innerRadius</code> and <code>radius</code> property.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartPlugin, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme:theme,
      seriesData: [
            { x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
            { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
            { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
            { x: 'Insurance', y: 16, text: '16%' }

      ],
     
      //Initializing Primary X Axis
       primaryXAxis: {
            title: 'Years',
            interval: Browser.isDevice ? 2 : 1,
            labelIntersectAction: 'Rotate45',
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },

      //Initializing Primary Y Axis
      primaryYAxis:
        {
            title: 'Growth',
            minimum: -3,
            maximum: 3,
            interval: 1,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 },
            labelFormat: '{value}B',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        dataLabel: {
                    visible: true,
                    name: 'text',
                    position: 'Inside',
                    font: {
                        fontWeight: '600',
                        color: '#ffffff'
                    }
                    },
        legendSettings: {
            visible: true,
            position: 'Top'
        },
         tooltip: { enable: true},


     explodeIndex: 3,
      title: "Project Cost Breakdown"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {
     
  },
 
});
</script>