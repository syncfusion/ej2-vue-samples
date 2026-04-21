<template>
  <div class="control-section">
    <div>
      <ejs-accumulationchart
        ref="accumulation"
        id="accumulation-container"
        :title="title"
        :subTitle="subTitle"
        :titleStyle="titleStyle"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
        :load="load"
        :legendRender="legendRender"
        :enableBorderOnMouseMove="false"
      >
        <e-accumulation-series-collection>
          <e-accumulation-series
            type="Pie"
            :dataSource="data"
            xName="x"
            yName="y"
            :animation="{ enable: false }"
            tooltipMappingName="tooltip"
            :border="{ color: '#ffffff', width: 1 }"
            :radius="radius"
            innerRadius="0%"
            :dataLabel="dataLabel"
          />
        </e-accumulation-series-collection>
      </ejs-accumulationchart>
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates custom legend templates in a pie chart visualizing the world's top 5 oil-producing countries — United States, Saudi Arabia, Russia, Canada, and China. Each pie segment reflects the percentage share of production, and the legend displays country flags and daily output in millions of barrels.
      </p>
    </div>

    <div id="description">
      <p>
        This sample uses the
      <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/legendSettings/#template"
        aria-label="Navigate to the documentation for template in legendSettings in the EJ2 Vue Accumulation Chart control"><code>template</code></a> property of
      <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/legendSettings"
        aria-label="Navigate to the documentation for LegendSettings in the EJ2 Vue Accumulation Chart control"><code>legendSettings</code></a>
      to fully customize legend items.
        The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/accumulation-chart/iacclegendrendereventargs"
            aria-label="Navigate to the documentation for legendRender event in the EJ2 Vue Accumulation Chart control"><code>legendRender</code></a> event dynamically injects country-specific data — including flag images, color-matched labels, and production volumes — into the legend template at render time.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use legend, inject the
        <code>AccumulationLegend</code> module using <code>provide: { accumulationchart: [AccumulationLegend] }</code>.
      </p>
      <p>
        More information on legend customization in accumulation charts can be found in the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/legend/"
            aria-label="Navigate to the documentation for Legend in Vue Accumulation Chart control">documentation</a>.
      </p>

    </div>
  </div>
</template>

<script>
import {
  AccumulationChartComponent,
  AccumulationSeriesDirective,
  AccumulationSeriesCollectionDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  PieSeries,
  AccumulationTooltip
} from '@syncfusion/ej2-vue-charts';
import { loadAccumulationChartTheme } from './theme-color';
import { Browser } from '@syncfusion/ej2-base';

export default {
  name: 'AccumulationLegendTemplate',
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    const isDevice = Browser.isDevice;
    return {
      Browser: Browser, // Make Browser available to the component instance
      title: 'Top 5 Oil Producing Countries (2023)',
      subTitle: 'Source: Wikipedia.org',
      titleStyle: {
        position: 'Custom',
        x: isDevice ? 150 : 492,
        y: 22.75
      },
      data: [
        { x: 'United States', y: 29.55, image: 'United States', text: isDevice ? 'USA: 29.55%' : 'United States: 29.55%', description: '13.4M barrels per day', tooltip: '13.4M' },
        { x: 'Saudi Arabia',  y: 23.83, image: 'Saudi Arabia', text: isDevice ? 'SAU: 23.83%' : 'Saudi Arabia: 23.83%', description: '10.8M barrels per day', tooltip: '10.8M' },
        { x: 'Russia', y: 23.69, image: 'Russia', text: isDevice ? 'RUS: 23.69%' : 'Russia: 23.69%', description: '10.8M barrels per day', tooltip: '10.8M' },
        { x: 'Canada', y: 12.12, image: 'Canada', text: isDevice ? 'CAN: 12.12%' : 'Canada: 12.12%', description: '5.5M barrels per day', tooltip: '5.5M' },
        { x: 'China', y: 10.83, image: 'China', text: isDevice ? 'CHN: 10.83%' : 'China: 10.83%', description: '4.9M barrels per day', tooltip: '4.9M' }
      ],
      dataLabel: {
        visible: true,
        position: isDevice ? 'Inside' : 'Outside',
        name: isDevice ? '' : 'text',
        format: isDevice ? '{value}%' : '',
        enableRotation: isDevice ? true : false,
        font: { size: isDevice ? '8px' : '12px', fontWeight: '600' },
        connectorStyle: { type: 'Line' }
      },
      radius: isDevice ? '65%' : '70%',
      tooltip: {
        enable: true,
        header: '<b>${point.x}</b>',
        format: 'Production: <b>${point.tooltip}</b> barrels/day'
      },
      legendSettings: {
        visible: true,
        width: isDevice ? '35%' : '20%',
        position: 'Right',
        itemPadding: 15,
        template:
          '<div class="legend-template" style="display:flex; align-items:flex-start; gap:' + (isDevice ? '6px' : '8px') + '; opacity:1; max-width:' + (isDevice ? '160px' : '280px') + '; box-sizing:border-box;">' +
              '<img class="e-legend-img" src="" width="' + (isDevice ? '24' : '36') + '" height="' + (isDevice ? '24' : '36') + '" style="flex:0 0 ' + (isDevice ? '24px' : '36px') + '; margin-top:' + (isDevice ? '0px' : '2px') + ';" />' +
              '<div style="display:flex; flex-direction:column; min-width:0; text-align:left;">' +
              '<span class="e-legend-label" style="font-weight:600; font-size:' + (isDevice ? '10px' : '13px') + '; color:LABEL_COLOR; line-height:' + (isDevice ? '12px' : '18px') + '; white-space:normal; overflow-wrap:break-word; word-break:break-word; max-width:' + (isDevice ? '130px' : '220px') + ';"></span>' +
              '<span class="e-legend-desc" style="font-size:' + (isDevice ? '10px' : '12px') + '; margin-top:' + (isDevice ? '0px' : '2px') + '; line-height:' + (isDevice ? '12px' : '15px') + '; white-space:normal; overflow-wrap:break-word; word-break:break-word; max-width:' + (isDevice ? '130px' : '220px') + ';"></span>' +
              '</div>' +
              '</div>'
      }
    };
  },
  provide: {
    accumulationchart: [AccumulationDataLabel, PieSeries, AccumulationLegend, AccumulationTooltip]
  },
  methods: {
    legendRender(args) {
      const chart = this.$refs.accumulation && this.$refs.accumulation.ej2Instances;
      const desc = (this.data.find(function (d) { return d.x === args.text; }) || {}).description;
      const matchedPoint = (chart && chart.series && chart.series[0] && chart.series[0].points)
        ? chart.series[0].points.find(function (p) { return p.x === args.text; })
        : null;
      const opacity = matchedPoint && !matchedPoint.visible ? '0.5' : '1';
      args.template = args.template
        .replace('opacity:1;', 'opacity:' + opacity + ';')
        .replace('LABEL_COLOR', args.fill)
        .replace('src=""', 'src="' + require('./images/' + args.text + '.png') + '"')
        .replace('></span>', '>' + args.text + '</span>')
        .replace(/<span class="e-legend-desc"([^>]*)><\/span>/, '<span class="e-legend-desc"$1>' + desc + '</span>');
    },
    load(args) {
      loadAccumulationChartTheme(args);
    }
  }
};
</script>

<style scoped>
/* optional */
</style>