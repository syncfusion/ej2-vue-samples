<template>
    <div class="control-section">
      <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :subTitle='subTitle'
          :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
          :tooltip='tooltip' :legendSettings='legendSettings'>
          <e-series-collection>
            <e-series :dataSource='seriesData' type='Column' columnFacet='Cylinder' xName='year' yName='energy' name='India' columnSpacing=0.3> </e-series>
          </e-series-collection>
        </ejs-chart>
      </div>
      <div id="action-description">
        <p>
          This sample visualizes the year-wise renewable energy generation trends in India using a cylindrical column chart. The chart displays the total renewable energy generation in terawatt-hours (TWh) for each year from 2017 to 2023.
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
  import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, DataLabel, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";
  import { loadChartTheme } from "./theme-color";
  let theme = loadChartTheme();

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
          { year: '2017 - 18', energy: 228.0 },
          { year: '2018 - 19', energy: 261.8 },
          { year: '2019 - 20', energy: 294.3 },
          { year: '2020 - 21', energy: 297.5 },
          { year: '2021 - 22', energy: 322.6 },
          { year: '2022 - 23', energy: 365.59 }
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
          title: 'Total Renewable Power (TWh)',
          labelFormat: '{value}TWh',
          minimum: 150,
          maximum: 400,
          interval: 50,
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 }
        },
        chartArea: {
          border: {
            width: 0
          }
        },
        title: 'Year-wise Renewable Energy Generation Trends in India',
        subTitle: 'Source: wikipedia.org',
        tooltip: {
            enable: true,
            header: '<b>${point.x}</b>',
            format: '${series.name}: <b>${point.y}</b>'
        },
        legendSettings: { visible: false },
        width: Browser.isDevice ? '100%' : '75%'
      };
    },
    provide: {
      chart: [ColumnSeries, Category, DataLabel, Tooltip, Legend]
    },
    methods: {
      load: function (args) {
       loadChartTheme(args);

      }
    },
  };
  </script> 