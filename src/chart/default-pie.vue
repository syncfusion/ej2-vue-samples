<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart  ref='pie' :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :subTitle='subTitle' 
             :legendSettings='legendSettings' :tooltip='tooltip' enableSmartLables='true' :enableAnimation='enableAnimation' :enableBorderOnMouseMove='false' >
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :border='border' :explodeOffset='explodeOffset' :explodeIndex='explodeIndex' :radius='radius'  xName='Browser' yName='Users' :dataLabel='dataLabel' name='Browser' innerRadius='0%' borderRadius='3' explode='true'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div>
    </div>
    <div id="action-description">
    <p>
      This Vue Pie Chart example demonstrates a pie chart for global electricity generation. Datalabels show information about the points.
    </p>
</div>
<div id="description">
    <p>
      In this example, you can see how to render and configure a pie chart. The pie chart is a circular graphic, which is ideal for displaying categories as a proportion or a percentage of the whole. The radius of the pie chart can be customized using the <code>Radius</code> property.
    </p>
    
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
          Accumulation Chart component features are segregated into individual feature-wise modules. To use pie chart, we need to inject <code>PieSeries</code> module using <code>provide: { chart: [PieSeries] }</code> method.
        </p>
    <p>
    <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <p>
        More information about the pie series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#pie-chart" aria-label="Navigate to the documentation for Pie Chart in Vue Accumulation Chart component">documentation section</a>.
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
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, PieSeries, AccumulationDataLabel, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

import { loadAccumulationChartTheme  } from "./theme-color";
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
         seriesData:
        [{ Browser: "Coal", Users: 34.4, DataLabelMappingName: "Coal: 34.4%" },
        { Browser: "Natural Gas", Users: 22.1, DataLabelMappingName: "Natural Gas: 22.1%" },
        { Browser: "Hydro", Users: 14.4, DataLabelMappingName: "Hydro: 14.4%" },
        { Browser: "Nuclear", Users: 9.0, DataLabelMappingName: "Nuclear: 9.0%" },
        { Browser: "Wind", Users: 8.1, DataLabelMappingName: "Wind: 8.1%" },
        { Browser: "Others", Users: 12.0, DataLabelMappingName: "Others: 12.0%" }
        ],

     dataLabel: {
                visible: true,
                position: 'Outside', name: 'DataLabelMappingName',
                font: {
                        size: Browser.isDevice ? '8px' : '12px',
                        fontWeight: '600'
                    },
                connectorStyle: { length: Browser.isDevice ? '10px' : '20px', type: 'Curve'}
                },
                radius: Browser.isDevice ? '40%' : '60%',
        legendSettings: {
            visible: false,
        },
    border: { width: 1, color: 'white' },
    tooltip: {  
        enable: true,
        format: '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>',
        header:'', 
        enableHighlight: true
    },
      enableSmartLabels: true,
      enableAnimation: true,
      startAngle: Browser.isDevice ? '70' : '30', 
      explodeOffset: '10%',
      explodeIndex : 0,
      title: "Global Electricity Generation by Source - 2024",
      subTitle: "Source: wikipedia.org"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  
  methods: {
  }

};
</script>