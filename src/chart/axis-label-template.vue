<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        id="chartcontainer" :load='load' :loaded='loaded'
        style="display:block" :isTransposed='isTransposed'
        :title="title" :chartArea='chartArea'
        :subTitle="subTitle"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :legendSettings="legendSettings"
        :tooltip="tooltip"
        :width="width" :theme='theme' :annotations='annotations'>
      <template v-slot:xAxisLabelTemplate="{ data }">
        <div id="labelTemplate" class="light-bg" style="display:flex;align-items:center;gap:8px;border-radius:3px;width:130px;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:6px;flex:1;min-width:0;">
            <span style="font-size:12px;width:18px;text-align:right;display:inline-block;">{{ (data.value + 1) + '.' }}</span>
            <span style="font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{ data.label }}</span>
          </div>
          <img :src="`src/chart/images/labelTemplate/${data.label}.png`" :alt="`${data.label} flag`" width="22" height="22" style="border-radius:50%" />
        </div>
      </template>
        <e-series-collection>
          <e-series :dataSource="olympicsGoldData" type="StackingColumn" legendShape="Rectangle" xName="Country" :marker='marker' fill="#FFD700" yName="Count" name="Gold" />
          <e-series :dataSource="olympicsSilverData" type="StackingColumn" legendShape="Rectangle" xName="Country" :marker='marker' fill="#C0C0C0" yName="Count" name="Silver" />
          <e-series :dataSource="olympicsBronzeData" type="StackingColumn" legendShape="Rectangle" xName="Country" :marker='marker' fill="#CD7F32" yName="Count" name="Bronze" />
        </e-series-collection>
      </ejs-chart>
    </div>

    <div id="action-description">
      <p>
        This sample shows the 2024 Olympic medal standings for the top 10 countries using a stacked Column chart. The x-axis uses label templates to display each country’s rank and name (with flag), enabling quick comparison of Gold, Silver, and Bronze totals.
      </p>
    </div>
    <div id="description">
      <p>
        Use the axis label template feature to customize axis labels via the <code>labelTemplate</code> property on the chart axis. Templates can include HTML markup, conditional styling, and embedded icons or images (for example, country flags). This sample binds rank and country to the template while the series plot medal counts.
      </p>
      <p>
        More information on axis labels can be found in the
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/axis-customization/" aria-label="Navigate to the documentation for Axis Customization in Vue Chart component">
          documentation section
        </a>.
      </p>
    </div>
  </div>
</template>

<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries, DataLabel, ChartAnnotation, Category, Legend, Tooltip } from '@syncfusion/ej2-vue-charts';
import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

export default {
  name: 'AxisLabelTemplateSample',
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      theme: theme,
      olympicsGoldData : [
        { Country: 'USA', Count: 40 },
        { Country: 'China', Count: 40 },
        { Country: 'Great Britain', Count: 14 },
        { Country: 'France', Count: 16 },
        { Country: 'Australia', Count: 18 },
        { Country: 'Japan', Count: 20 },
        { Country: 'Italy', Count: 12 },
        { Country: 'Netherlands', Count: 15 },
        { Country: 'Germany', Count: 12 },
        { Country: 'South Korea', Count: 13 }
      ],

      olympicsSilverData : [
        { Country: 'USA', Count: 44 },
        { Country: 'China', Count: 27 },
        { Country: 'Great Britain', Count: 22 },
        { Country: 'France', Count: 26 },
        { Country: 'Australia', Count: 19 },
        { Country: 'Japan', Count: 12 },
        { Country: 'Italy', Count: 13 },
        { Country: 'Netherlands', Count: 7 },
        { Country: 'Germany', Count: 13 },
        { Country: 'South Korea', Count: 9 }
      ],

      olympicsBronzeData : [
        { Country: 'USA', Count: 42 },
        { Country: 'China', Count: 24 },
        { Country: 'Great Britain', Count: 29 },
        { Country: 'France', Count: 22 },
        { Country: 'Australia', Count: 16 },
        { Country: 'Japan', Count: 13 },
        { Country: 'Italy', Count: 15 },
        { Country: 'Netherlands', Count: 12 },
        { Country: 'Germany', Count: 8 },
        { Country: 'South Korea', Count: 10 }
      ],
      isTransposed: true,
      chartArea: { border: { width: 0 } },
      marker: { dataLabel: { visible: true, position: 'Middle' } },
      // Chart text
      title: "Olympic medal standings 2024",
      subTitle: 'Source: www.olympics.com',
      width: Browser.isDevice ? '100%' : '75%',
      legendSettings: { visible: true },
      tooltip: { enable: true },
      annotations: [
          { content: '<img style="margin-top:15px;height:150px;width:220px;opacity:0.5" src="src/chart/images/medals.png" alt="Medals" />', x: 'Netherlands', y: Browser.isDevice ? '90' : '110', coordinateUnits: 'Point' }
      ],
      // Axes
      primaryXAxis: {
        valueType: 'Category',
        majorGridLines: { width: 0 }, lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, isInversed: true,
        labelTemplate: "xAxisLabelTemplate"
      },
      primaryYAxis: {
        visible: false, maximum: 130
      }
    };
  },
  provide: {
    chart: [StackingColumnSeries, Category, Legend, Tooltip, DataLabel, ChartAnnotation]
  },
  methods: {
    load(args) {
        loadChartTheme(args);
    },
    loaded(args) {
        let selectedTheme = loadChartTheme(args);
        const isDark = selectedTheme.includes('Dark') || selectedTheme.includes('HighContrast');
        const labels = document.querySelectorAll('#labelTemplate');
        for (var i = 0; i < labels.length; i++) {
          let element = labels[i];
          element.classList.remove('dark-bg');
          element.classList.remove('light-bg');
          element.classList.add(isDark ? 'dark-bg' : 'light-bg');
        }
    },
  }
};
</script>

<style scoped>
.control-section {
  padding: 12px;
}
.light-bg {
  color: #000000;
}

.dark-bg {
  color: #ffffff;
}

</style>