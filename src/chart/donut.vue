<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' 
            :chartArea='chartArea' :legendSettings='legendSettings' :tooltip='tooltip' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='Browser' yName='Users' :startAngle='startAngle' :dataLabel='dataLabel'
                 innerRadius='40%' name='Project'  explode=true explodeOffset='10%' :explodeIndex='explodeIndex'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This Vue Donut Chart example visualizes the mobile browsers statistics by using doughnut series. Datalabels show information about the points.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure a doughnut chart. To create a doughnut in pie series, customize the <code>InnerRadius</code> property. DataLabels are used to represent individual data and its values.
    </p>
    <p>
      <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <p>
      More information about the doughnut in pie series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartPlugin, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default Vue.extend({
  data: function() {
    return {
         theme:theme,
         seriesData:  Browser.isDevice ? 
        [{ Browser: 'Chrome', Users: 59.28, DataLabelMappingName: 'Chrome: 59.28%' }, 
          { Browser: 'Safari', Users: 5.73, DataLabelMappingName: Browser.isDevice ? 'Safari <br> 5.73%'  : 'Safari: 5.73%' },
          { Browser: 'Opera', Users: 6.12, DataLabelMappingName: 'Opera: 6.12%' },
          { Browser: 'Edge', Users: 7.48, DataLabelMappingName: 'Edge: 7.48%' },
          { Browser: 'Others', Users: 22.41, DataLabelMappingName: 'Others: 22.41%' }
        ] :[
        { Browser : "Chrome", Users : 59.28, DataLabelMappingName : "  Chrome: 59.28%"},
        { Browser : "UC Browser", Users : 4.37, DataLabelMappingName : "  UC Browser: 4.37%"},
        { Browser : "Opera", Users : 3.12, DataLabelMappingName : "  Opera: 3.12%"},
        { Browser : "Sogou Explorer", Users : 1.73, DataLabelMappingName : "  Sogou Explorer: 1.73%"},
        { Browser : "QQ", Users : 3.96, DataLabelMappingName : "  QQ: 3.96%"},
        { Browser : "Safari", Users : 4.73, DataLabelMappingName : "  Safari: 4.73%"},
        { Browser : "Internet Explorer", Users : 6.12, DataLabelMappingName : "  Internet Explorer: 6.12%"},
        { Browser : "Edge", Users : 7.48, DataLabelMappingName : "  Edge: 7.48%"},
        { Browser : "Others", Users : 9.57, DataLabelMappingName : "  Others: 9.57%"}
      ],

        chartArea: {
            border: {
                width: 0
            }
        },
        dataLabel: {
            visible: true,
            name: 'DataLabelMappingName',
            position: 'Outside',
            font: {
                fontWeight: '600',
            },
            connectorStyle: { 
                length: '20px',
                type: 'Curve'
            }
        },
        radius: Browser.isDevice ? '40%' : '75%',
        legendSettings: {
            visible: false,
        },
         tooltip: { 
            enable: true,
            header: '',
            format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>'
        },
      startAngle: Browser.isDevice ? '62' : '0', 
      explodeIndex: 0,
      title: "Mobile Browsers Statistics"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
 
});
</script>