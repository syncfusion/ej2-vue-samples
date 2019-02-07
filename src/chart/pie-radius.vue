<template>
  <div class="control-section">
    <div class="control-section">
        <ejs-accumulationchart id="container" ref="pie" style='display:block;' :theme='theme' :legendSettings="legendSettings" :tooltip="tooltip" :enableAnimation='enableAnimation' :enableSmartLabels='enableSmartLabels' >
            <e-accumulation-series-collection>
                <e-accumulation-series  :dataSource='data' xName='x' yName='y' :radius='radius' innerRadius="20%" :dataLabel="dataLabel"> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>

    </div>
    <div id="action-description">
    <p>
        This sample compares countries by population density and total area by using the various radius in pie series.
    </p>
</div>
<div id="description">
    <p>In this example, you can see how to render doughnut chart with different radius. You can use <code>radius</code> mapping property to achieve this feature. <code>dataLabel</code> is used to represent individual data and its value.
     <p><code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>

<p style="font-weight: 500">Injecting Module</p>
<p>
AccumulationChart component features are segregated into individual feature-wise modules. To use legend, we need to Inject <code>AccumulationLegend</code> module using <code>provide: { accumulationchart: [ AccumulationLegend ] }</code> method. 
</p>

</div>

</div>
</template>
<style>
.control-section {
    min-height: 450px;
}
</style>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        data: [
        { x: 'Argentina', y: 505370, r: '100' },
        { x: 'Belgium', y: 551500, r: '118.7' },
        { x: 'Cuba', y: 312685, r: '124.6' },
        { x: 'Dominican Republic', y: 350000, r: '137.5' },
        { x: 'Egypt', y: 301000, r: '150.8' },
        { x: 'Kazakhstan', y: 300000, r: '155.5' },
        { x: 'Somalia', y: 357022, r: '160.6' }
     ],
     radius: 'r',
     legendSettings: { visible: true },
     dataLabel: { visible: true, position: 'Outside', name: 'x'},
     tooltip: {
        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
     },
     enableAnimation: true,
     enableSmartLabels: true,
	};
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
   methods: {

   },
});
</script>