<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea'
        :width='width' :crosshair='crosshair' :legendSettings="legendSettings">
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Product X' width=2 :marker='marker'>
          </e-series>
          <e-series :dataSource='seriesData1' type='Line' xName='x' yName='y' name='Product Y' width=2 :marker='marker'>
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample shows the plotting of local data in a stock price analysis of two products over a period of time.
      </p>
    </div>
    <div id="description">
      <p>
        The Charts control supports data binding. The <code>DataSource</code> property can be assigned either as list of objects or with instance of <code>DataManager</code>.
      </p>
      <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a
        point or tap a point in touch enabled devices.
      </p>
      <p>
        In this demo, the list of objects is assigned as the data source to the Charts control. The chart can be bound to IEnumerable, IQueryable, and ObservableCollection data sources.
      </p>
      <p>
        More information on the local data binding can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/working-with-data/#local-data" aria-label="Navigate to the documentation for Local Data in Vue Chart component">documentation
          section</a>.
      </p>
    </div>

  </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Legend, Tooltip, DateTime, Highlight, Crosshair } from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";
let theme = loadChartTheme();

let series1 = [];
let series2 = [];
let point1;
let point2;
let value = 80;
let value1 = 90;
let i;
for (i = 1; i < 500; i++) {

  if (Math.random() > .5) {
    value += Math.random();
    value1 += Math.random();
  } else {
    value -= Math.random();
    value1 -= Math.random();
  }
  point1 = { x: new Date(1960, (i + 1), i), y: Math.round(value) };
  point2 = { x: new Date(1960, (i + 1), i), y: Math.round(value1) };
  series1.push(point1);
  series2.push(point2);
}

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      seriesData: series1,
      seriesData1: series2,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        majorGridLines: { width: 0 },
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift'
      },
      //Initializing Primary Y Axis
      primaryYAxis:
      {
        title: 'Price',
        labelFormat: '${value}',
        rangePadding: 'None',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      crosshair: {
        enable: true,
        line: {
          color: 'rgba(204,214,235,0.25)',
          width: Browser.isDevice ? 50 : 20,
        },
        lineType: 'Vertical'
      },
      width: Browser.isDevice ? "100%" : "75%",
      legendSettings: { enableHighlight: true },
      marker: {
        visible: false,
      },
      tooltip: {
        enable: true, shared: true
      },
      title: "Stock Price Analysis"
    };
  },
  provide: {
    chart: [LineSeries, DateTime, Legend, Tooltip, Highlight, Crosshair]
  },
  methods: {
  },

};
</script>