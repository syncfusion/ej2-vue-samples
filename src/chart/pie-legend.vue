<template>
  <div class="control-section">
    <div class="control-section">
      <ejs-accumulationchart
        id="container"
        ref="pie"
        style="display:block;"
        :theme="theme"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
        :enableBorderOnMouseMove='false'
        :annotations='annotations' selectionMode='Point'
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            :dataSource="data"
            xName="x"
            yName="y"
            :innerRadius= "innerRadius"
            borderRadius="3" :border="border" 
            :dataLabel="dataLabel"
          ></e-accumulation-series>
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>
    <div id="action-description">
      <p>This sample demonstrates a donut chart showcasing mobile browser usage statistics, with legends displayed at the bottom of the chart.</p>
    </div>
    <div id="description">
      <p> In this example, you can see how to render a donut chart with legends. You can use <code>radius</code> and <code>innerRadius</code> properties to render the donut.</p>
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
        { 'x': 'China', y: 35, text: '35%' },
        { 'x': 'India', y: 30, text: '30%' },
        { 'x': 'USA', y: 10.7, text: '10.7%' },
        { 'x': 'Indonesia', y: 7, text: '7%' },
        { 'x': 'Brazil', y: 5.3, text: '5.3%' },
        { 'x': 'Others', y: 12, text: '12%' },
      ],
      innerRadius: '50%',
      radius: Browser.isDevice ? '80%' : '85%',
      legendSettings: {
        visible: true,
        toggleVisibility: false,
        position: 'Bottom', textWrap: 'Wrap'
      },
      border: { width: 1, color: '#ffffff' },
      dataLabel: {
        visible: false,
      },
      startAngle: 30,
      tooltip: {
        enable: true,
        format:  '<b>${point.x}</b><br>Percentage: <b>${point.y}%</b>',
        header:""  ,
        enableHighlight: true,
      },
      annotations:[{
        content: Browser.isDevice ? " " : "<div style='font-Weight:600;font-size:14px'>Internet Users <br> by Country<br>2025</div>",
        region: 'Series',
        x: '50%',
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
