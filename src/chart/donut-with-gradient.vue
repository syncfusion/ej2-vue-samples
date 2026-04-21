<template>
  <div class="control-section">
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='container'
            :pointRender='pointRender' :legendRender='legendRender'
            :legendSettings='legendSettings' :tooltip='tooltip' :enableSmartLabels='true'
            :title='title' :subTitle='subTitle' :titleStyle='titleStyle' :enableBorderOnMouseMove='true' :loaded='chartLoaded' :load='load'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='Country' :radius='radius' yName='Share' :dataLabel='dataLabel' legendShape='Rectangle'
                 innerRadius='65%' name='Share by country'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div id="action-description">
    <p>
      This donut chart example shows the share of e-commerce orders by country in 2025 using a donut chart with radial gradient fills. Each slice is annotated with data labels showing the country name and its exact percentage,
      while the legend on the right provides a quick reference for all countries and their respective values.
    </p>
</div>

  <div id="description">
    <p>
      In this example, you can see how to render and configure a donut chart with a gradient. To apply a
      gradient to each point in the pie series, use the <a href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/iaccpointrendereventargs">pointRender</a>
      event. Through this event, you can customize the color of each point in the donut chart using the <code>radialGradient</code> property,
      which applies a circular gradient from the center outward with multiple color stops to create smooth color transitions across each slice.
    </p>
    <p><code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover over a point or tap on a point on touch-enabled devices.</p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
      The accumulation chart component's features are segregated into individual feature modules. To use pie/doughnut series, we inject the required modules via <code>provide</code>.
    </p>
    <p>
      More information about the donut series can be found in this
      <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart" aria-label="Navigate to the documentation for Donut Chart in Vue Accumulation Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, AccumulationAnnotation
} from "@syncfusion/ej2-vue-charts";

import { loadAccumulationChartTheme } from "./theme-color";

let theme = loadAccumulationChartTheme();

const GradientDonutData = [
    { Country: "Austria",         Share: 38.03, DataLabelMappingName: "Austria: 38.03%"         },
    { Country: "Belgium",         Share: 33.7,  DataLabelMappingName: "Belgium: 33.7%"          },
    { Country: "Germany",         Share: 31.27, DataLabelMappingName: "Germany: 31.27%"         },
    { Country: "The Netherlands", Share: 29.71, DataLabelMappingName: "The Netherlands: 29.71%" },
    { Country: "Lithuania",       Share: 27.72, DataLabelMappingName: "Lithuania: 27.72%"       },
    { Country: "Czechia",         Share: 27.37, DataLabelMappingName: "Czechia: 27.37%"         },
    { Country: "Poland",          Share: 22.1,  DataLabelMappingName: "Poland: 22.1%"           },
    { Country: "Ireland",         Share: 18.87, DataLabelMappingName: "Ireland: 18.87%"         },
    { Country: "Croatia",         Share: 14.88, DataLabelMappingName: "Croatia: 14.88%"         }
];

const baseColors = ['#39B9E6', '#2E79CF', '#4960CF', '#5E47C6', '#8A44C9', '#C24F86', '#D8584E', '#E07245', '#F09A4A'];

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      seriesData: GradientDonutData,
      chartArea: { border: { width: 0 } },
      dataLabel: {
        visible: true,
        name: 'DataLabelMappingName',
        position: 'Outside',
        connectorStyle: { length: '10px' },
        font: { size: '12px' }
      },
      tooltip: { enable: true, header: '', format: '${point.x} : <b>${point.y}%</b>' },
      radius: '70%',
      legendSettings: { visible: true, position: 'Right' },
      title: 'Share of E-commerce Orders by Country - 2025',
      subTitle: 'Source: Data provided by Eurostat European Statistics',
      titleStyle: { position: 'Custom', x: Browser.isDevice ? 160 : 510, y: 15 }
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationAnnotation]
  },
  methods: {
    load: function(args) {
      loadAccumulationChartTheme(args);
    },
    chartLoaded: function(args) {
      let chart = document.getElementById('container');
      if (chart) { chart.setAttribute('title', ''); }
    },
    pointRender: function(args) {
      const idx = args.point.index;
      const base = baseColors[idx % baseColors.length];
      args.radialGradient = {
        cx: 0.5, cy: 0.5, fx: 0.5, fy: 0.5, r: 0.6,
        gradientColorStop: [
          { offset: 0, color: base, opacity: 1, brighten: 0.2, lighten: 0 },
          { offset: 45, color: base, opacity: 1, brighten: 0.1, lighten: 0 },
          { offset: 70, color: base, opacity: 1, brighten: 0, lighten: 0 },
          { offset: 85, color: base, opacity: 1, brighten: -0.1, lighten: 0 },
          { offset: 100, color: base, opacity: 1, brighten: -0.2, lighten: 0 }
        ]
      };
    },
    legendRender: function(args) {
      const country = args.text;
      const dataPoint = GradientDonutData.find(d => d.Country === country);
      if (dataPoint) { args.text = dataPoint.DataLabelMappingName; }
    }
  }
};
</script>