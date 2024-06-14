<template>
    <div class="control-section">
      <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
          :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
          :tooltip='tooltip'>
          <e-series-collection>
            <e-series :dataSource='seriesData' type='Column' columnFacet='Cylinder' xName='x' yName='y' width=2
              columnSpacing=0.1 tooltipMappingName='tooltipMappingName'> </e-series>
          </e-series-collection>
        </ejs-chart>
      </div>
      <div id="action-description">
        <p>
          This sample visualizes the gold medal count from the Rio Olympics using a cylindrical column chart.
        </p>
      </div>
      <div id="description">
        <p>
          In this example, you can observe the rendering and configuration of a cylindrical column chart. The cylindrical column chart serves the purpose of comparing the frequency, count, total, or average of data across various categories using a cylindrical shape.
        </p>
        <p>
          Tooltips have been enabled in this example. To experience the tooltip functionality, simply hover over a point or tap on it in touch-enabled devices.
        </p>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
          Chart component features are segregated into individual feature-wise modules. To use column series, we need to
          inject
          <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
        </p>
        <p>
          More information on the column series can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column#cylindrical-column-chart" aria-label="Navigate to the documentation for Cylindrical Column Chart in Vue Chart component">documentation
            section</a>.
        </p>
      </div>
    </div>
  </template>
  <style scoped></style>
  <script>
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, DataLabel, Tooltip } from "@syncfusion/ej2-vue-charts";
  
  let selectedTheme = location.hash.split("/")[1];
  selectedTheme = selectedTheme ? selectedTheme : "Material";
  let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
  export default {
    components: {
      'ejs-chart': ChartComponent,
      'e-series-collection': SeriesCollectionDirective,
      'e-series': SeriesDirective
    },
    data: function () {
      return {
        theme: theme,
        seriesData: [
          { x: 'China', y: 26, tooltipMappingName: 'China' },
          { x: 'Australia', y: 8, tooltipMappingName: 'Australia' },
          { x: 'Germany', y: 17, tooltipMappingName: 'Germany' },
          { x: 'Spain', y: 7, tooltipMappingName: 'Spain' },
          { x: 'Japan', y: 12, tooltipMappingName: 'Japan' },
          { x: 'USA', y: 46, tooltipMappingName: 'United States' }
        ],
        //Initializing Primary X Axis
        primaryXAxis: {
          valueType: 'Category',
          interval: 1,
          majorGridLines: { width: 0 },
          labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
          labelRotation: Browser.isDevice ? -45 : 0,
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 }
        },
  
        //Initializing Primary Y Axis
        primaryYAxis:
        {
          title: 'Medal Count',
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          maximum: 50,
          interval: 10
        },
        chartArea: {
          border: {
            width: 0
          }
        },
        tooltip: { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" },
        width: Browser.isDevice ? '100%' : '75%',
        title: "Olympic Gold Medal Counts - RIO"
      };
    },
    provide: {
      chart: [ColumnSeries, Category, DataLabel, Tooltip]
    },
    methods: {
      load: function (args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
      }
    },
  };
  </script> 