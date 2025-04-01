<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='dataEditing' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :tooltip='tooltip' :chartArea='chartArea'
        :width='width'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Column' :dragSettings='dragSettings' xName='Period'
            yName='ProductA_Sales' name='Renewable' width=2 :marker='marker' opacity=1> </e-series>
          <e-series :dataSource='seriesData' type='Line' :dragSettings='dragSettings' xName='Period'
            yName='ProductB_Sales' name='Non-Renewable' width=2 :marker='marker1' opacity=1> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample shows the behavior of the data editing in the chart.
        Drag and drop the points to change the data values dynamically.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to drag and drop the data points in the chart by setting <code>Enable</code>
        property in <code>ChartDataEditSettings</code> to <b>true</b>.
        Also, you can set data editing’s minimum and maximum range using the <code>MinY</code> and <code>MaxY</code>
        properties.
      </p>
      <p>
        More information on the data editing can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/data-editing/" aria-label="Navigate to the documentation for Data Editing in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, LineSeries, Legend, DataEditing, Tooltip, Category } from "@syncfusion/ej2-vue-charts";

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
        { Period: 2005, ProductA_Sales: 21, ProductB_Sales: 28 },
        { Period: 2006, ProductA_Sales: 24, ProductB_Sales: 44 },
        { Period: 2007, ProductA_Sales: 36, ProductB_Sales: 48 },
        { Period: 2008, ProductA_Sales: 38, ProductB_Sales: 50 },
        { Period: 2009, ProductA_Sales: 54, ProductB_Sales: 66 },
        { Period: 2010, ProductA_Sales: 57, ProductB_Sales: 78 },
        { Period: 2011, ProductA_Sales: 70, ProductB_Sales: 84 },
      ],
      dragSettings: { enable: true },
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        intervalType: 'Years',
        labelFormat: 'y',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        title: 'Production(Billion in kWh)',
        labelFormat: '{value}B',
        majorTickLines: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      width: Browser.isDevice ? '100%' : '75%',
      marker: {
        visible: true,
        height: 7,
        width: 7
      },
      marker1: {
        visible: true,
        height: 7,
        width: 7,
        isFilled: true
      },
      tooltip: {
        enable: false
      },
      title: "Electricity - Production",
    };
  },
  provide: {
    chart: [LineSeries, ColumnSeries, Legend, DataEditing, Tooltip, Category]
  },
  methods: {
  }

};
</script>