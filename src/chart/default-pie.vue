<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart  ref='pie' :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
             :legendSettings='legendSettings' :tooltip='tooltip' enableSmartLables='true' :enableAnimation='enableAnimation' :enableBorderOnMouseMove='false' >
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle'  :explodeOffset='explodeOffset' :explodeIndex='explodeIndex' :radius='radius'  xName='Browser' yName='Users' :dataLabel='dataLabel' name='Browser' innerRadius='0%'  explode='true'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div>
    </div>
    <div id="action-description">
    <p>
      This Vue Pie Chart example demonstrates a pie chart for mobile browsers usage statistics. Datalabels show information about the points.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure a pie chart. The pie chart is a circular graphic, which is ideal for displaying categories as a proportion or a percentage of the whole. The radius of the pie chart can be customized using the <code>Radius</code> property.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <p>
        More information about the pie series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#pie-chart">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { AccumulationChartPlugin, AccumulationTooltip, PieSeries, AccumulationDataLabel, AccumulationLegend } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
         seriesData: Browser.isDevice ?
        [{ Browser: 'Chrome', Users: 59.28, DataLabelMappingName: 'Chrome: 59.28%' },
          { Browser: 'Safari', Users: 4.73, DataLabelMappingName: Browser.isDevice ? 'Safari <br> 4.73%' :  'Safari: 4.73%' },
          { Browser: 'Opera', Users: 6.12, DataLabelMappingName: 'Opera: 6.12%' },
          { Browser: 'Edge', Users: 7.48, DataLabelMappingName: 'Edge: 7.48%' },
          { Browser: 'Others', Users: 22.39, DataLabelMappingName: 'Others: 22.39%' }
        ] : [
          { Browser: "Chrome", Users: 59.28, DataLabelMappingName: "  Chrome: 59.28%" },
          { Browser: "UC Browser", Users: 4.37, DataLabelMappingName: "  UC Browser: 4.37%" },
          { Browser: "Opera", Users: 3.12, DataLabelMappingName: "  Opera: 3.12%" },
          { Browser: "Sogou Explorer", Users: 1.73, DataLabelMappingName: "  Sogou Explorer: 1.73%" },
          { Browser: "QQ", Users: 3.96, DataLabelMappingName: "  QQ: 3.96%" },
          { Browser: "Safari", Users: 4.73, DataLabelMappingName: "  Safari: 4.73%" },
          { Browser: "Internet Explorer", Users: 6.12, DataLabelMappingName: "  Internet Explorer: 6.12%" },
          { Browser: "Edge", Users: 7.48, DataLabelMappingName: "  Edge: 7.48%" },
          { Browser: "Others", Users: 9.57, DataLabelMappingName: "  Others: 9.57%" },
        ],

     dataLabel: {
                visible: true,
                position: 'Outside', name: 'DataLabelMappingName',
                font: {
                        fontWeight: '600'
                    },
                connectorStyle: { length: '20px', type: 'Curve'}
                },
                radius: Browser.isDevice ? '40%' : '70%',
        legendSettings: {
            visible: false,
        },

    tooltip: {  
        enable: true,
        format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',
        header:'', 
    },
      enableSmartLabels: true,
      enableAnimation: true,
      startAngle: Browser.isDevice ? '55' : '35', 
      explodeOffset: '10%',
      explodeIndex : 0,
      title: "Browser Market Share"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  
  methods: {
  }

});
</script>