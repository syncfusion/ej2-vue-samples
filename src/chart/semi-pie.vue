<template>
  <div class="control-section">
    <div >
        <ejs-accumulationchart ref='pie' :theme='theme' style='display:block' align='center' id='chartcontainer' 
             :legendSettings='legendSettings' :enableAnimation='false' :enableBorderOnMouseMove='false' :annotations='annotations'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :innerRadius='innerRadius' borderRadius="3" :radius='radius' :startAngle='startAngle' 
                :endAngle='endAngle' xName='Browser' yName='Users' :dataLabel='dataLabel' :border='border' > </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div>
</div>
 <div id="action-description"> 
    <p>
      This example demonstrates a semi-pie chart for mobile browsers usage statistics. Data label shows the information about the points.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render a semi pie chart using <code>StartAngle</code> and <code>EndAngle</code> properties. Data labels are wrapped to fit inside the pie slice. To enable the datalabel wrap feature, use the <code>textWrap</code> datalabel property.
    </p>
     
    <p>
      More information on the data labels can be found in this  
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/data-label/" aria-label="Navigate to the documentation for Datalabel in Vue Accumulation Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, PieSeries, AccumulationDataLabel, AccumulationLegend ,ChartAnnotation} from "@syncfusion/ej2-vue-charts";

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
         enableAnimation : false,
      seriesData: [
      { Browser :  "Chrome", Users : 100, text : 'Chrome (100M)<br>40%', tooltipMappingName: '40%'},
        { Browser :  "UC Browser", Users : 40, text : 'UC Browser (40M)<br>16%', tooltipMappingName: '16%'  },
        { Browser :  "Opera", Users : 30, text : 'Opera (30M)<br>12%', tooltipMappingName: '12%'  },
        { Browser :  "Safari", Users : 30, text : 'Safari (30M)<br>12%', tooltipMappingName: '12%'  },
        { Browser :  "Firefox", Users : 25, text : 'Firefox (25M)<br>10%', tooltipMappingName: '10%'  },
        { Browser :  "Others", Users : 25, text : 'Others (25M)<br>10%', tooltipMappingName: '10%' },

      ],
     
    border: { color: '#ffffff', width: 1},
    dataLabel: {
        visible: true, position: 'Inside', enableRotation: true, 
        connectorStyle: { length: '20px', type: 'Curve' }, name: 'text',
        font: { fontWeight: '600',  size: Browser.isDevice ? '7px' : '11px' }
        },
               
        legendSettings: {
            visible: false,
        },
        startAngle : 270, endAngle : 90,

      innerRadius: '50%',
      radius : '100%',
      annotations:[{
        content: Browser.isDevice ? '<div style="font-size:10px; font-weight:600">Browser<br> Market <br />Shares</div>' : '<div style="font-size:14px; font-weight:600">Browser<br> Market <br />Shares</div>',
        region: 'Series',
        x: "50%",
        y: "85%" 
       },
      ]
     
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, ChartAnnotation]
  },
   updated: function() {
      this.$nextTick(function() {
        this.$refs.pie.ej2Instances.refresh();
        this.$refs.pie.ej2Instances.removeSvg();
        this.$refs.pie.ej2Instances.refreshSeries();
        this.$refs.pie.ej2Instances.refreshChart();
      });
    },
  methods: {
  }
   
};
</script>