<template>
  <div class="control-section">
    <div class="control-section">
      <ejs-accumulationchart
      :title='title'
        id="container"
        ref="pie"
        style="display:block;"
        :theme="theme"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
        selectionMode="Point"
        :enableBorderOnMouseMove='false'
        :annotations='annotations'
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            :dataSource="data"
            xName="x"
            yName="y"
            :startAngle="startAngle"
            innerRadius="43%"
            :dataLabel="dataLabel"
          ></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>
    <div id="action-description">
      <p>This sample shows statistics on expenditure made in a year using the donut chart with legends shown at the right side of the chart.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render a doughnut chart with legends. You can use <code>Radius</code> and <code>InnerRadius</code> properties to render the doughnut. Here, the legend text is wrapped using the <code>TextWrap</code> property.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        AccumulationChart component features are segregated into individual feature-wise modules. To use legend, we need to Inject
        <code>AccumulationLegend</code> into the
        <code>provide</code> option.
      </p>
      <p>
        More information about the legend feature can be found in this 
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/legend/" aria-label="Navigate to the documentation for Legend in Vue Accumulation Chart component">documentation section</a>.
    </p>
    </div>
  </div>
</template>
<style scoped>
.control-section {
  min-height: 450px;
}
</style>
<script>
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
  AccumulationSelection,
  Selection,
  ChartAnnotation
} from "@syncfusion/ej2-vue-charts";
import { Browser } from '@syncfusion/ej2-base';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
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
      data: [
        { 'x': 'Internet Explorer', y: 6.12, text: '6.12%' }, { 'x': 'Chrome', y: 57.28, text: '57.28%' },
        { 'x': 'Safari', y: 4.73, text: '4.73%' },
        { 'x': 'QQ', y: 5.96, text: '5.96%' },
        { 'x': 'UC Browser', y: 4.37, text: '4.37%' },
        { 'x': 'Edge', y: 7.48, text: '7.48%' },
        { 'x': 'Others', y: 14.06, text: '14.06%' },
      ],
      legendSettings: {
        visible: true,
        toggleVisibility: false,
        position: Browser.isDevice ? "Bottom" : "Right",
        textWrap:'Wrap', height: Browser.isDevice ? '20%' : '30%', width: Browser.isDevice ? '80%' :'20%',
        maximumLabelWidth: 66  
      },

      title: Browser.isDevice ? 'Browser Market Share' : '',
      dataLabel: {
        name: 'text',
        visible: true,
        font: {
          fontWeight: '600',
          color: '#ffffff'
        }
      },
      startAngle: 30,
      tooltip: {
        enable: true,
        format:  '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',
        header:""  
      },
      annotations:[{
        content: Browser.isDevice ? " " : "<div style='font-Weight:600;font-size:14px'>Browser<br>Market<br> Share</div>",
        region: 'Series',
        x: '52%',
        y: '50%'
       },
      ]
    };
  },
  methods: {
  },
  provide: {
    accumulationchart: [
      AccumulationLegend,
      PieSeries,
      AccumulationDataLabel,
      AccumulationTooltip,
      AccumulationSelection,
      Selection,
      ChartAnnotation
    ]
  }
};
</script>