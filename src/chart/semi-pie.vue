<template>
  <div class="control-section">
    <div >
        <ejs-accumulationchart ref='pie' :theme='theme' style='display:block' align='center' id='chartcontainer' 
             :legendSettings='legendSettings' :tooltip='tooltip' :enableAnimation='false' :enableBorderOnMouseMove='false' :annotations='annotations'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :innerRadius='innerRadius' tooltipMappingName='tooltipMappingName' :radius='radius' :startAngle='startAngle' 
                :endAngle='endAngle' xName='Browser' yName='Users' :dataLabel='dataLabel' > </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div>
</div>
 <div id="action-description">
    <p>
      This example demonstrates a semi-pie chart for mobile browsers usage statistics.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render a semi pie chart using <code>StartAngle</code> and <code>EndAngle</code> properties. Data labels are wrapped to fit inside the pie slice. To enable the datalabel wrap feature, use the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/data-label/#text-wrap" aria-label="Navigate to the textWrap property reference for Vue Accumulation Chart DataLabel">textwrap</a> datalabel property.
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

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

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
     
     
    dataLabel: {
        visible: true, position: 'Inside', enableRotation: true, 
        connectorStyle: { length: '20px', type: 'Curve' }, name: 'text',
        font: { fontWeight: '600',  size: Browser.isDevice ? '8px' : '11px', color: "#ffffff" }
        },
               
        legendSettings: {
            visible: false,
        },
        startAngle : 270, endAngle : 90,
          tooltip: { enable: true, format: "<b>${point.x}</b><br>Browser Share: <b>${point.tooltip}</b>", header:'' },

      innerRadius: '40%',
      radius : Browser.isDevice ? '85%' : '100%',
      annotations:[{
        content: Browser.isDevice ? '<div style="font-size:11px; font-weight:600">Browser<br> Market <br />Shares</div>' : '<div style="font-size:14px; font-weight:600">Browser<br> Market <br />Shares</div>',
        region: 'Series',
        x:  Browser.isDevice ? "51%" : "50%",
        y:  Browser.isDevice ? "82%" : "85%" 
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