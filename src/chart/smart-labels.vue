<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' enableSmartLabels="true"
         :legendSettings='legendSettings' :tooltip='tooltip' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' startAngle=60 :dataLabel='dataLabel' innerRadius='0%' name='RIO' :radius='radius'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This sample shows the gold medal count scored by each country at the summer olympics 2024 games using smart labels on the chart.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how the labels can be arranged smartly without overlapping. You can use the <code>EnableSmartLabels</code> property to enable or disable the support.</p>
    <p><code>Tooltips</code> are enabled in this example, to see the tooltip in action, hover a point or tap on a point in
    touch enabled devices.</p>
    <p style="font-weight: 500"> <b>Injecting Module</b> </p>
    <p> Accumulation chart component features are segregated into individual feature-wise modules. To use DataLabel, we need to inject <code>AccumulationDataLabel</code> using <code>provide: {accumulationchart: [AccumulationDataLabel]},</code> method.</p>
    <p>More information on the smart labels can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/data-label/#smart-labels" aria-label="Navigate to the documentation for Smart Labels in Vue Accumulation Chart component">documentation section</a>.</p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, PieSeries, AccumulationLegend, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

import { loadAccumulationChartTheme } from "./theme-color";
let theme = loadAccumulationChartTheme();

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
        { x: 'USA', y: 40, text: Browser.isDevice ? 'USA: 40' : 'United States of America: 40' },
        { x: 'China', y: 40, text: 'China: 40' },
        { x: 'Japan', y: 20, text: 'Japan: 20' },
        { x: 'Australia', y: 18, text: Browser.isDevice ? 'AU: 18' : 'Australia: 18' },
        { x: 'France', y: 16, text: 'France: 16' },
        { x: 'Netherlands', y: 15, text: Browser.isDevice ? 'NL: 15' : 'Netherlands: 15' },
        { x: 'Great Britain', y: 14, text: Browser.isDevice ? 'GB: 14' : 'Great Britain: 14' },
        { x: 'South Korea', y: 13, text: Browser.isDevice ? 'SK: 13' : 'South Korea: 13' },
        { x: 'Germany', y: 12, text: Browser.isDevice ? 'GE: 12' : 'Germany: 12' },
        { x: 'Italy', y: 12, text: 'Italy: 12' },
        { x: 'NewZealand', y: 10, text: Browser.isDevice ? 'NZ: 10' : 'New Zealand: 10' },
        { x: 'Canada', y: 9, text: Browser.isDevice ? 'CA: 9' : 'Canada: 9' },
        { x: 'Uzbekistan', y: 8, text: Browser.isDevice ? 'UZB: 8' : 'Uzbekistan: 8' },
        { x: 'Hungary', y: 6, text: Browser.isDevice ? 'HU: 6' : 'Hungary: 6' },
        { x: 'Kenya', y: 4, text: Browser.isDevice ? 'KE: 4' : 'Kenya: 4' },
        { x: 'Georgia', y: 3, text: Browser.isDevice ? 'GE: 3' : 'Georgia: 3' },
        { x: 'North Korea', y: 2, text: Browser.isDevice ? 'NK: 2' : 'North Korea: 2' },
        { x: 'Hong Kong', y: 2, text: Browser.isDevice ? 'HK: 2' : 'South Africa: 2' }

      ],

        dataLabel: {
                    visible: true, position: 'Outside', textWrap: Browser.isDevice ? 'Wrap' : 'Normal',
                    connectorStyle: { length: Browser.isDevice ? '2px' : '20px', type: 'Curve' }, name: 'text',
                    font: { fontWeight: '600', size: Browser.isDevice ? '7px' : '12px', }
                },
        radius: Browser.isDevice ? '40%' : '65%',
        legendSettings: {
            visible: false,
        },
        tooltip: { 
          header:'',
          enable: true, format: '<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>' ,
        enableHighlight: true},

      
      title: "Summer Olympics 2024 - Gold Medals",
      subTitle: 'Source: wikipedia.org'
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  methods: {
   },
 
};
</script>