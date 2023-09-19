<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' 
         :legendSettings='legendSettings' :tooltip='tooltip' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' startAngle=60 :dataLabel='dataLabel' innerRadius='0%' name='RIO' :radius='radius'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This sample shows the gold medal count scored by each country at the Rio Olympic Games using smart labels on the chart.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how the labels can be arranged smartly without overlapping. You can use the <code>EnableSmartLabels</code> property to enable or disable the support.</p>
    <p style="font-weight: 500"> <b>Injecting Module</b> </p>
    <p> Accumulation chart component features are segregated into individual feature-wise modules. To use DataLabel, we need to inject <code>AccumulationDataLabel</code> using <code>provide: {accumulationchart: [AccumulationDataLabel]},</code> method.</p>
    <p>More information on the smart labels can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/data-label/#smart-labels">documentation section</a>.</p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, PieSeries, AccumulationLegend, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { 'x': 'USA', y: 46, text: Browser.isDevice ? 'USA: 46' : 'United States of America: 46' },
        { 'x': 'China', y: 26, text: 'China: 26' },
        { 'x': 'Russia', y: 19, text: 'Russia: 19' },
        { 'x': 'Germany', y: 17, text: 'Germany: 17' },
        { 'x': 'Kazakhstan', y: 3, text: Browser.isDevice ? 'KZ: 3' : 'Kazakhstan: 3' },
        { 'x': 'New Zealand', y: 4, text: Browser.isDevice ? 'NZ: 4' : 'New Zealand: 4' },
        { 'x': 'South Korea', y: 9, text: Browser.isDevice ? 'KR: 9' : 'South Korea: 9' },
        { 'x': 'Great Britain', y: 27, text: Browser.isDevice ? 'GB: 27' : 'Great Britain: 27' },
        { 'x': 'Switzerland', y: 3, text: Browser.isDevice ? 'CH: 3' : 'Switzerland: 3' },
        { 'x': 'Australia', y: 8, text: Browser.isDevice ? 'ASTL: 8' : 'Australia: 8' },
        { 'x': 'Netherlands', y: 8, text: Browser.isDevice ? 'NL: 8' : 'Netherlands: 8' },
        { 'x': 'Colombia', y: 3, text: 'Colombia: 3' },
        { 'x': 'Uzbekistan', y: 4, text: Browser.isDevice ? 'Uzbekistan: <br> 4' : 'Uzbekistan: 4' },
        { 'x': 'Japan', y: 12, text: 'Japan: 12' },
        { 'x': 'France', y: 10, text: 'France: 10' },
        { 'x': 'Italy', y: 8, text: 'Italy: 8' },
        { 'x': 'Argentina', y: 3, text: Browser.isDevice ? 'AR: 3' : 'Argentina: 3' },
        { 'x': 'South Africa', y: 2, text: Browser.isDevice ? 'SA: 2' : 'South Africa: 2' },
        { 'x': 'North Korea', y: 2, text: Browser.isDevice ? 'KP: 2' : 'North Korea: 2' }

      ],

        dataLabel: {
                    visible: true, position: 'Outside',
                    connectorStyle: { length: '20px', type: 'Curve' }, name: 'text',  font: { fontWeight: '600' }
                },
        radius: Browser.isDevice ? '40%' : '70%',
        legendSettings: {
            visible: false,
        },
        tooltip: { 
          header:'',
          enable: true, format: '<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>' },
      
      title: "Rio Olympics Gold"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  methods: {
   },
 
};
</script>