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
        :enableBorderOnMouseMove='false'
        :annotations='annotations'
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            :dataSource="data"
            xName="x"
            yName="y"
            :startAngle="startAngle"
            :innerRadius= "innerRadius"
            :radius = "radius"
            :dataLabel="dataLabel"
          ></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>
    <div id="action-description">
      <p>This sample demonstrates a donut chart showcasing mobile browser usage statistics, with legends displayed at the bottom of the chart.</p>
    </div>
    <div id="description">
      <p> This example demonstrates how to render a donut chart with legends positioned at the bottom. The legend can be arranged in horizontal, vertical, or auto layout modes. Using the <code>maximumColumns</code> property, you can define the maximum number of columns in auto layout. Additionally, a fixed width option ensures uniform legend sizes for a polished appearance.</p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
AccumulationChart component features are segregated into individual feature-wise modules. To use legend, we need to Inject <code>AccumulationLegend</code> module using <code>provide: { accumulationchart: [ AccumulationLegend ] }</code> method. 
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
import { loadAccumulationChartTheme } from "./theme-color";
let theme = loadAccumulationChartTheme();
let fluent2Colors = ["#6200EE", "#09AF74", "#0076E5", "#CB3587", "#E7910F", "#66CD15", "#F3A93C", "#107C10", "#C19C00"];

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
        { 'x': 'Chrome', y: 57.28, text: '57.28%' },
        { 'x': 'UC Browser', y: 4.37, text: '4.37%' },
        { 'x': 'Internet Explorer', y: 6.12, text: '6.12%' },
        { 'x': 'QQ', y: 5.96, text: '5.96%' },
        { 'x': 'Edge', y: 7.48, text: '7.48%' },
        { 'x': 'Others', y: 14.06, text: '14.06%' },
      ],
      innerRadius: '50%',
      radius: Browser.isDevice ? '80%' : '85%',
      legendSettings: {
        visible: true,
        toggleVisibility: false,
        position: 'Bottom',
        maximumColumns: Browser.isDevice ? 2 : 3,
        fixedWidth: true
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
        header:""  ,
        enableHighlight: true,
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
    labelRender(args) {
      let selectedTheme = (location.hash.split('/')[1] || 'Fluent2').toLowerCase();
      if (selectedTheme === 'fluent2') {
        args.fill = fluent2Colors[args.point.index % fluent2Colors.length];
      }
    }
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
