<template>
  <div class="control-section">
    <div class="content-wrapper">
      <ejs-tab id="element" :heightAdjustMode="'None'" :overflowMode="'Scrollable'" height="500px" headerPlacement="Top"
        @selected="tabSelected">
        <e-tabitems>
          <e-tabitem :header="{ text: 'Line' }" content="#lineCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Column' }" content="#columnCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Spline' }" content="#splineCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Area' }" content="#areaCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Bar' }" content="#barCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Bubble' }" content="#bubbleCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Scatter' }" content="#scatterCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Step line' }" content="#stepLineCharts"></e-tabitem>
          <e-tabitem :header="{ text: 'Range column' }" content="#rangeCharts"></e-tabitem>
        </e-tabitems>
      </ejs-tab>
      <div id="lineCharts"><ejs-chart id='lineChart' :series='[lineSeries]' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
          :chartArea='chartArea' :width='width' @loaded="lineLoaded" @load="lineLoad"></ejs-chart></div>
      <div id="columnCharts" style="display: none"><ejs-chart id='columnChart' :series='[columnSeries]' :primaryXAxis='primaryXAxis'
          :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' @loaded="columnLoaded"
          @load="columnLoad"></ejs-chart></div>
      <div id="splineCharts" style="display: none"><ejs-chart id='splineChart' :series='[splineSeries]' :primaryXAxis='primaryXAxis'
          :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' @loaded="splineLoaded"
          @load="splineLoad"></ejs-chart></div>
      <div id="areaCharts" style="display: none"><ejs-chart id='areaChart' :series='[areaSeries]' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
          :chartArea='chartArea' :width='width' @loaded="areaLoaded" @load="areaLoad"></ejs-chart></div>
      <div id="barCharts" style="display: none"><ejs-chart id='barChart' :series='[barSeries]' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
          :chartArea='chartArea' :width='width' @loaded="barLoaded" @load="barLoad"></ejs-chart></div>
      <div id="bubbleCharts" style="display: none"><ejs-chart id='bubbleChart' :series='[bubbleSeries]' :primaryXAxis='bubbleXAxis' :primaryYAxis='bubbleYAxis'
          :chartArea='chartArea' @pointRender="pointRender" @loaded="bubbleLoaded" @load="bubbleLoad"
          :legendSettings="legendSettings"></ejs-chart></div>
      <div id="scatterCharts" style="display: none"><ejs-chart id='scatterChart' :series='scatterSeries' :primaryXAxis='scatterXAxis'
          :primaryYAxis='scatterYAxis' :chartArea='chartArea' :width='width' @loaded="scatterLoaded"
          @load="scatterLoad"></ejs-chart></div>
      <div id="stepLineCharts" style="display: none"><ejs-chart id='stepLineChart' :series='[stepLineSeries]' :primaryXAxis='primaryXAxis'
          :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' @loaded="stepLoaded"
          @load="stepLoad"></ejs-chart></div>
      <div id="rangeCharts" style="display: none"><ejs-chart id='rangeChart' :series='[rangeSeries]' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
          :chartArea='chartArea' :width='width' @loaded="rangeLoaded" @load="rangeLoad"></ejs-chart></div>
    </div>
  </div>
  <div id="action-description">
    <p>
      This sample demonstrates the animation capabilities of various chart series types in Vue Charts. The chart updates its data dynamically at regular intervals to showcase smooth transitions and animations.
    </p>
  </div>
  <div id="description">
    <p>
      In this example, different types of chart series such as Line, Column, Spline, Area, Bar, Bubble, Scatter, Step Line, and Range Column are animated to demonstrate real-time data updates. 
      The chart dynamically updates with random values using the <code>setData</code> method. Each chart type reflects its unique characteristics and enhances visual understanding through animations.
    </p>
    <p><b>Injecting Module</b></p>
    <p>
      Chart component features are divided into individual, feature-specific modules. To use a particular series, you need to inject the corresponding series module using the <code>Chart.Inject(LineSeries)</code> method.
    </p>
    <p>
      More information on the various chart types can be found in this
      <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line">documentation
        section</a>.
    </p>
  </div>
</template>

<script>
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import {
  ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, SplineSeries, ColumnSeries, SplineAreaSeries,
  BarSeries, BubbleSeries, ScatterSeries, StepLineSeries, RangeColumnSeries, Category, DataLabel, Highlight, Tooltip,
} from '@syncfusion/ej2-vue-charts';
import { Browser } from '@syncfusion/ej2-base';
import { loadChartTheme, bubblePointRender } from "./theme-color";

export default {
  components: {
    'ejs-tab': TabComponent,
    'e-tabitems': TabItemsDirective,
    'e-tabitem': TabItemDirective,
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
  },
  data() {
    return {
      
      primaryXAxis: {
        valueType: "Category",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
      },
      bubbleXAxis: {
        minimum: 1,
        maximum: 7,
        interval: 1,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
      },
      scatterXAxis: {
        minimum: 1,
        interval: 1,
        maximum: 10,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        edgeLabelPlacement: 'Shift'
      },
      primaryYAxis: {
        labelFormat: "{value}",
        maximum: 100,
        minimum: 0,
        edgeLabelPlacement: "Shift",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      },
      bubbleYAxis: {
        minimum: 0,
        maximum: 100,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      },
      scatterYAxis: {
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 80,
        interval: 10,
        rangePadding: 'None'
      },
      chartArea: { border: { width: 0 } },
      width: "100%",
      seriesAnimation: { enable: false },
      legendSettings: { visible: false },
      splineSeries: {
        dataSource: this.getSplineData(),
        xName: "x",
        yName: "y",
        type: "Spline",
        width: 2.5,
        marker: { visible: true, height: 8, width: 8, dataLabel: { visible: true, position:'Outer' } },
        animation: { enable: true }
      },
      lineSeries: {
        dataSource: this.getLineData(),
        xName: "x",
        yName: "y",
        type: "Line",
        width: 2.5,
        marker: { visible: true, height: 8, width: 8, dataLabel: { visible: true, position:'Outer' } },
        animation: { enable: true }
      },
      columnSeries: {
        dataSource: this.getColumnData(),
        xName: "x",
        yName: "y",
        type: "Column",
        marker: { visible: false, dataLabel: { visible: true, position:'Outer' } },
        animation: { enable: true },
        cornerRadius: { topLeft: 4, topRight: 4 }
      },
      areaSeries: {
        dataSource: this.getAreaData(),
        xName: "x",
        yName: "y",
        type: "SplineArea",
        marker: { visible: false, dataLabel: { visible: true, position:'Outer' } },
        animation: { enable: true }
      },
      barSeries: {
        dataSource: this.getBarData(),
        xName: "x",
        yName: "y",
        type: "Bar",
        marker: { visible: false, dataLabel: { visible: true, position:'Outer' } },
        animation: { enable: true },
        cornerRadius: { bottomRight: 4, topRight: 4 }
      },
      bubbleSeries: {
        dataSource: this.getBubbleData(),
        type: "Bubble",
        border: { width: 2 },
        xName: "x",
        yName: "y",
        size: "size",
        animation: { enable: true }
      },
      scatterSeries: [
        {
          dataSource: this.getScatterData(),
          xName: "x",
          yName: "y",
          type: "Scatter",
          marker: { visible: false, width: 8, height: 8, shape: 'Circle', dataLabel: { visible: false } },
          animation: { enable: true }
        },
        {
          dataSource: this.getScatterData(),
          xName: "x",
          yName: "y1",
          type: "Scatter",
          marker: { visible: false, width: 8, height: 8, shape: 'Circle', dataLabel: { visible: false } },
          animation: { enable: true }
        }
      ],
      stepLineSeries: {
        dataSource: this.getStepLineData(),
        xName: "x",
        yName: "y",
        width: 2.5,
        type: "StepLine",
        marker: { visible: false, dataLabel: { visible: false } },
        animation: { enable: true }
      },
      rangeSeries: {
        dataSource: this.getRangeColumnData(),
        xName: "x",
        low: "low",
        high: "high",
        type: "RangeColumn",
        columnSpacing: 0.1,
        marker: { visible: false, dataLabel: { visible: true, position:'Outer' } },
        animation: { enable: true },
        cornerRadius: { topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4 }
      }
    };
  },
  methods: {
    tabSelected(args) {
      const chartIds = [
        'lineChart', 'columnChart', 'splineChart', 'areaChart', 'barChart',
        'bubbleChart', 'scatterChart', 'stepLineChart', 'rangeChart'
      ];
      chartIds.forEach((id, index) => {
        if (index === args.selectedIndex) {
          let chartElement = document.getElementById(id);
          if (chartElement) {
            let chart = chartElement.ej2_instances[0];
            chart.refresh();
          }
        }
      });
    },
    getSplineData() {
      return [
        { x: "1", y: 30 }, { x: "2", y: 10 },
        { x: "3", y: 80 }, { x: "4", y: 20 },
        { x: "5", y: 30 }, { x: "6", y: 5 },
        { x: "7", y: 69 }, { x: "8", y: 15 },
        { x: "9", y: 60 }, { x: "10", y: 70 }
      ];
    },
    getLineData() {
      return [
        { x: "1", y: 10 }, { x: "2", y: 30 },
        { x: "3", y: 80 }, { x: "4", y: 20 },
        { x: "5", y: 30 }, { x: "6", y: 40 },
        { x: "7", y: 69 }, { x: "8", y: 15 },
        { x: "9", y: 60 }, { x: "10", y: 70 }
      ];
    },
    getColumnData() {
      return [
        { x: "1", y: 90 }, { x: "2", y: 10 },
        { x: "3", y: 50 }, { x: "4", y: 20 },
        { x: "5", y: 30 }, { x: "6", y: 70 },
        { x: "7", y: 9 }
      ];
    },
    getAreaData() {
      return [
        { x: "1", y: 10 }, { x: "2", y: 20 },
        { x: "3", y: 80 }, { x: "4", y: 15 },
        { x: "5", y: 30 }, { x: "6", y: 40 },
        { x: "7", y: 69 }, { x: "8", y: 15 }
      ];
    },
    getStepLineData() {
      return [
        { x: "1", y: 10 }, { x: "2", y: 30 },
        { x: "3", y: 80 }, { x: "4", y: 20 },
        { x: "5", y: 30 }, { x: "6", y: 40 },
        { x: "7", y: 69 }, { x: "8", y: 15 },
        { x: "9", y: 60 }, { x: "10", y: 70 }
      ];
    },
    getBarData() {
      return [
        { x: "1", y: 90 }, { x: "2", y: 10 },
        { x: "3", y: 50 }, { x: "4", y: 20 },
        { x: "5", y: 30 }, { x: "6", y: 70 },
        { x: "7", y: 9 }
      ];
    },
    getBubbleData() {
      return [
        { x: "1.5", y: 80, size: 4 }, { x: "2", y: 60, size: 6 },
        { x: "3", y: 70, size: 2 }, { x: "4", y: 13, size: 4 },
        { x: "5", y: 30, size: 3 }, { x: "6", y: 20, size: 4 },
        { x: "6.5", y: 40, size: 6 }
      ];
    },
    getRangeColumnData() {
      return [
        { x: "1", low: 30, high: 60 }, { x: "2", low: 42, high: 73 },
        { x: "3", low: 35, high: 80 }, { x: "4", low: 20, high: 50 },
        { x: "5", low: 30, high: 80 }, { x: "6", low: 10, high: 40 },
        { x: "7", low: 15, high: 69 }
      ];
    },
    getScatterData() {
      let scatterdata = [
        { x: "1", y: 15, y1: 10 }, { x: "1.25", y: 35, y1: 20 },
        { x: "1.5", y: 60, y1: 50 }, { x: "1.75", y: 25, y1: 15 },
        { x: "2", y: 25, y1: 35 }, { x: "2.25", y: 30, y1: 30 },
        { x: "2.5", y: 45, y1: 30 }, { x: "2.75", y: 40, y1: 20 },
        { x: "3", y: 30, y1: 45 }, { x: "3.25", y: 55, y1: 35 },
        { x: "3.5", y: 65, y1: 20 }, { x: "3.75", y: 40, y1: 50 },
        { x: "4", y: 40, y1: 60 }, { x: "4.25", y: 60, y1: 25 },
        { x: "4.5", y: 15, y1: 25 }, { x: "4.75", y: 75, y1: 55 },
        { x: "5", y: 50, y1: 40 }, { x: "5.25", y: 45, y1: 30 },
        { x: "5.5", y: 20, y1: 15 }, { x: "5.75", y: 65, y1: 35 },
        { x: "6", y: 65, y1: 65 }, { x: "6.25", y: 35, y1: 50 },
        { x: "6.5", y: 70, y1: 35 }, { x: "6.75", y: 50, y1: 40 },
        { x: "7", y: 25, y1: 60 }, { x: "7.25", y: 60, y1: 40 },
        { x: "7.25", y: 60, y1: 45 }, { x: "7.5", y: 45, y1: 20 },
        { x: "7.75", y: 30, y1: 15 }, { x: "8", y: 60, y1: 50 },
        { x: "8.25", y: 25, y1: 35 }, { x: "8.5", y: 30, y1: 10 },
        { x: "8.75", y: 45, y1: 25 }, { x: "9", y: 75, y1: 45 },
        { x: "9.25", y: 40, y1: 50 }, { x: "9.5", y: 20, y1: 15 },
        { x: "9.75", y: 30, y1: 40 }, { x: "10", y: 60, y1: 25 }
      ];
      return this.shuffleArray(scatterdata);
    },
    getScatterData1() {
      const scatterdata = [
        { x: '1', y: 60, y1: 45 }, { x: '1.25', y: 40, y1: 30 },
        { x: '1.5', y: 25, y1: 10 }, { x: '1.75', y: 15, y1: 50 },
        { x: '2', y: 15, y1: 65 }, { x: '2.25', y: 35, y1: 50 },
        { x: '2.5', y: 40, y1: 30 }, { x: '2.75', y: 60, y1: 25 },
        { x: '3', y: 65, y1: 25 }, { x: '3.25', y: 30, y1: 15 },
        { x: '3.5', y: 20, y1: 60 }, { x: '3.75', y: 50, y1: 40 },
        { x: '4', y: 50, y1: 35 }, { x: '4.25', y: 55, y1: 50 },
        { x: '4.5', y: 75, y1: 15 }, { x: '4.75', y: 45, y1: 60 },
        { x: '5', y: 45, y1: 50 }, { x: '5.25', y: 35, y1: 30 },
        { x: '5.5', y: 30, y1: 20 }, { x: '5.75', y: 55, y1: 40 },
        { x: '6', y: 70, y1: 55 }, { x: '6.25', y: 60, y1: 25 },
        { x: '6.5', y: 15, y1: 40 }, { x: '6.75', y: 40, y1: 15 },
        { x: '7', y: 30, y1: 25 }, { x: '7.25', y: 60, y1: 35 },
        { x: '7.5', y: 60, y1: 35 }, { x: '7.75', y: 25, y1: 15 },
        { x: '8', y: 25, y1: 10 }, { x: '8.25', y: 50, y1: 30 },
        { x: '8.5', y: 45, y1: 65 }, { x: '8.75', y: 55, y1: 20 },
        { x: '9', y: 50, y1: 60 }, { x: '9.25', y: 30, y1: 45 },
        { x: '9.5', y: 10, y1: 20 }, { x: '9.75', y: 40, y1: 35 },
        { x: '10', y: 55, y1: 15 }
      ];
      return this.shuffleArray(scatterdata);
    },
    getScatterData2() {
      const scatterdata = [
        { x: '1', y: 70, y1: 25 }, { x: '1.25', y: 55, y1: 40 },
        { x: '1.5', y: 45, y1: 40 }, { x: '1.75', y: 30, y1: 45 },
        { x: '2', y: 20, y1: 55 }, { x: '2.25', y: 30, y1: 45 },
        { x: '2.5', y: 10, y1: 35 }, { x: '2.75', y: 25, y1: 15 },
        { x: '3', y: 50, y1: 20 }, { x: '3.25', y: 60, y1: 30 },
        { x: '3.5', y: 25, y1: 60 }, { x: '3.75', y: 50, y1: 45 },
        { x: '4', y: 30, y1: 15 }, { x: '4.25', y: 55, y1: 20 },
        { x: '4.5', y: 65, y1: 75 }, { x: '4.75', y: 45, y1: 35 },
        { x: '5', y: 60, y1: 45 }, { x: '5.25', y: 35, y1: 10 },
        { x: '5.5', y: 15, y1: 30 }, { x: '5.75', y: 30, y1: 60 },
        { x: '6', y: 55, y1: 50 }, { x: '6.25', y: 25, y1: 45 },
        { x: '6.5', y: 35, y1: 10 }, { x: '6.75', y: 20, y1: 30 },
        { x: '7', y: 40, y1: 65 }, { x: '7.25', y: 30, y1: 45 },
        { x: '7.5', y: 30, y1: 60 }, { x: '7.75', y: 45, y1: 30 },
        { x: '8', y: 60, y1: 45 }, { x: '8.25', y: 50, y1: 40 },
        { x: '8.5', y: 20, y1: 25 }, { x: '8.75', y: 70, y1: 15 },
        { x: '9', y: 75, y1: 15 }, { x: '9.25', y: 30, y1: 50 },
        { x: '9.5', y: 50, y1: 35 }, { x: '9.75', y: 55, y1: 20 },
        { x: '10', y: 15, y1: 70 }
      ];
      return this.shuffleArray(scatterdata);
    },
    getScatterData3() {
      const scatterdata = [
        { x: '1', y: 20, y1: 30 }, { x: '1.25', y: 30, y1: 20 },
        { x: '1.5', y: 35, y1: 60 }, { x: '1.75', y: 40, y1: 30 },
        { x: '2', y: 55, y1: 20 }, { x: '2.25', y: 45, y1: 35 },
        { x: '2.5', y: 60, y1: 45 }, { x: '2.75', y: 25, y1: 30 },
        { x: '3', y: 45, y1: 15 }, { x: '3.25', y: 50, y1: 45 },
        { x: '3.5', y: 50, y1: 35 }, { x: '3.75', y: 15, y1: 40 },
        { x: '4', y: 15, y1: 70 }, { x: '4.25', y: 45, y1: 55 },
        { x: '4.5', y: 75, y1: 10 }, { x: '4.75', y: 60, y1: 25 },
        { x: '5', y: 30, y1: 55 }, { x: '5.25', y: 45, y1: 35 },
        { x: '5.5', y: 60, y1: 25 }, { x: '5.75', y: 40, y1: 45 },
        { x: '6', y: 10, y1: 50 }, { x: '6.25', y: 20, y1: 65 },
        { x: '6.5', y: 65, y1: 40 }, { x: '6.75', y: 30, y1: 30 },
        { x: '7', y: 25, y1: 65 }, { x: '7.25', y: 35, y1: 40 },
        { x: '7.5', y: 20, y1: 45 }, { x: '7.75', y: 60, y1: 50 },
        { x: '8', y: 35, y1: 60 }, { x: '8.25', y: 25, y1: 45 },
        { x: '8.5', y: 30, y1: 15 }, { x: '8.75', y: 50, y1: 70 },
        { x: '9', y: 45, y1: 75 }, { x: '9.25', y: 20, y1: 35 },
        { x: '9.5', y: 40, y1: 50 }, { x: '9.75', y: 45, y1: 30 },
        { x: '10', y: 50, y1: 25 }
      ];
      return this.shuffleArray(scatterdata);
    },
    getScatterData4() {
      const scatterdata = [
        { x: '1', y: 50, y1: 60 }, { x: '1.25', y: 45, y1: 55 },
        { x: '1.5', y: 15, y1: 30 }, { x: '1.75', y: 55, y1: 20 },
        { x: '2', y: 60, y1: 45 }, { x: '2.25', y: 55, y1: 35 },
        { x: '2.5', y: 55, y1: 20 }, { x: '2.75', y: 30, y1: 50 },
        { x: '3', y: 70, y1: 50 }, { x: '3.25', y: 25, y1: 35 },
        { x: '3.5', y: 30, y1: 35 }, { x: '3.75', y: 45, y1: 60 },
        { x: '4', y: 65, y1: 15 }, { x: '4.25', y: 20, y1: 70 },
        { x: '4.5', y: 25, y1: 75 }, { x: '4.75', y: 35, y1: 25 },
        { x: '5', y: 40, y1: 60 }, { x: '5.25', y: 50, y1: 30 },
        { x: '5.5', y: 20, y1: 10 }, { x: '5.75', y: 35, y1: 40 },
        { x: '6', y: 35, y1: 45 }, { x: '6.25', y: 30, y1: 25 },
        { x: '6.5', y: 30, y1: 70 }, { x: '6.75', y: 60, y1: 20 },
        { x: '7', y: 45, y1: 25 }, { x: '7.25', y: 40, y1: 35 },
        { x: '7.5', y: 20, y1: 55 }, { x: '7.75', y: 50, y1: 40 },
        { x: '8', y: 50, y1: 40 }, { x: '8.25', y: 35, y1: 55 },
        { x: '8.5', y: 60, y1: 35 }, { x: '8.75', y: 30, y1: 60 },
        { x: '9', y: 10, y1: 65 }, { x: '9.25', y: 25, y1: 50 },
        { x: '9.5', y: 40, y1: 50 }, { x: '9.75', y: 30, y1: 25 },
        { x: '10', y: 65, y1: 30 }
      ];
      return this.shuffleArray(scatterdata);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    splineLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    lineLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    columnLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    areaLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    barLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    bubbleLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    scatterLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    stepLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    rangeLoaded(args) {
      args.chart.element.setAttribute("title", "");
    },
    lineClearInterval() {
      if (this.lineIntervalId) {
        clearInterval(this.lineIntervalId);
        this.lineIntervalId = null;
      }
    },
    columnClearInterval() {
      if (this.columnIntervalId) {
        clearInterval(this.columnIntervalId);
        this.columnIntervalId = null;
      }
    },
    splineClearInterval() {
      if (this.splineIntervalId) {
        clearInterval(this.splineIntervalId);
        this.splineIntervalId = null;
      }
    },
    areaClearInterval() {
      if (this.areaIntervalId) {
        clearInterval(this.areaIntervalId);
        this.areaIntervalId = null;
      }
    },
    barClearInterval() {
      if (this.barIntervalId) {
        clearInterval(this.barIntervalId);
        this.barIntervalId = null;
      }
    },
    bubbleClearInterval() {
      if (this.bubbleIntervalId) {
        clearInterval(this.bubbleIntervalId);
        this.bubbleIntervalId = null;
      }
    },
    scatterClearInterval() {
      if (this.scatterIntervalId) {
        clearInterval(this.scatterIntervalId);
        this.scatterIntervalId = null;
      }
    },
    stepLineClearInterval() {
      if (this.stepLineIntervalId) {
        clearInterval(this.stepLineIntervalId);
        this.stepLineIntervalId = null;
      }
    },
    rangeClearInterval() {
      if (this.rangeIntervalId) {
        clearInterval(this.rangeIntervalId);
        this.rangeIntervalId = null;
      }
    },
    splineLoad(args) {
      loadChartTheme(args);
      this.splineClearInterval();
      this.splineIntervalId = setInterval(() => {
        let container = document.getElementById('splineChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newData = this.getSplineData().map(item => ({
            x: item.x,
            y: Math.floor(Math.random() * (90 - 10 + 1)) + 10
          }));
          if (args.chart.series.length > 0) {
            args.chart.series[0].setData(newData, 1400);
          }
        } else {
          this.splineClearInterval();
        }
      }, 2000);
    },
    lineLoad(args) {
      loadChartTheme(args);
      this.lineClearInterval();
      this.lineIntervalId = setInterval(() => {
        let container = document.getElementById('lineChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newData = this.getLineData().map(item => ({
            x: item.x,
            y: Math.floor(Math.random() * (95 - 10 + 1)) + 10
          }));
          if (args.chart.series.length > 0) {
            args.chart.series[0].setData(newData, 1400);
          }
        } else {
          this.lineClearInterval();
        }
      }, 2000);
    },
    columnLoad(args) {
      loadChartTheme(args);
      this.columnClearInterval();
      this.columnIntervalId = setInterval(() => {
        let container = document.getElementById('columnChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newData = this.getColumnData().map(item => ({
            x: item.x,
            y: Math.floor(Math.random() * (95 - 10 + 1)) + 10
          }));
          if (args.chart.series.length > 0) {
            args.chart.series[0].setData(newData, 1400);
          }
        } else {
          this.columnClearInterval();
        }
      }, 2000);
    },
    areaLoad(args) {
      loadChartTheme(args);
      this.areaClearInterval();
      this.areaIntervalId = setInterval(() => {
        let container = document.getElementById('areaChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newData = this.getAreaData().map(item => ({
            x: item.x,
            y: Math.floor(Math.random() * (95 - 10 + 1)) + 10
          }));
          if (args.chart.series.length > 0) {
            args.chart.series[0].setData(newData, 1400);
          }
        } else {
          this.areaClearInterval();
        }
      }, 2000);
    },
    barLoad(args) {
      loadChartTheme(args);
      this.barClearInterval();
      this.barIntervalId = setInterval(() => {
        let container = document.getElementById('barChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newData = this.getBarData().map(item => ({
            x: item.x,
            y: Math.floor(Math.random() * (95 - 10 + 1)) + 10
          }));
          if (args.chart.series.length > 0) {
            args.chart.series[0].setData(newData, 1400);
          }
        } else {
          this.barClearInterval();
        }
      }, 2000);
    },
    bubbleLoad(args) {
      loadChartTheme(args);
      this.bubbleClearInterval();
      this.bubbleIntervalId = setInterval(() => {
        let container = document.getElementById('bubbleChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newBubbleData = this.getBubbleData().map(item => ({
            ...item,
            y: Math.random() * (95 - 5) + 5,
            size: Math.random() * (9.5 - 3.5) + 3.5
          }));
          args.chart.series[0].setData(this.shuffleArray(newBubbleData), 1400);
        } else {
          this.bubbleClearInterval();
        }
      }, 2000);
    },
    scatterLoad(args) {
      loadChartTheme(args);
      this.scatterClearInterval();
      let index = 1;
      const datasets = [this.shuffleArray(this.getScatterData()), this.shuffleArray(this.getScatterData1()), this.shuffleArray(this.getScatterData2()), this.shuffleArray(this.getScatterData3()), this.shuffleArray(this.getScatterData4())];
      this.scatterIntervalId = setInterval(() => {
        let container = document.getElementById('scatterChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const scatterDataSource = datasets[index % datasets.length];
          index++;
          if (scatterDataSource && scatterDataSource.length > 0) {
            args.chart.series[0].setData(scatterDataSource, 2000);
            args.chart.series[1].setData(scatterDataSource, 2000);
          }
        } else {
          this.scatterClearInterval();
        }
      }, 2000);
    },
    stepLoad(args) {
      loadChartTheme(args);
      this.stepLineClearInterval();
      this.stepLineIntervalId = setInterval(() => {
        let container = document.getElementById('stepLineChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newData = this.getStepLineData().map(item => ({
            x: item.x,
            y: Math.floor(Math.random() * (95 - 10 + 1)) + 10
          }));
          if (args.chart.series.length > 0) {
            args.chart.series[0].setData(newData, 1400);
          }
        } else {
          this.stepLineClearInterval();
        }
      }, 2000);
    },
    rangeLoad(args) {
      loadChartTheme(args);
      this.rangeClearInterval();
      this.rangeIntervalId = setInterval(() => {
        let container = document.getElementById('rangeChart');
        if (container && container.children.length > 0 && container.id === args.chart.element.id) {
          const newData = this.getRangeColumnData().map(item => ({
            x: item.x,
            high: Math.floor(Math.random() * (95 - 50 + 1)) + 50,
            low: Math.floor(Math.random() * (45 - 5 + 1)) + 5
          }));
          if (args.chart.series.length > 0) {
            args.chart.series[0].setData(newData, 1400);
          }
        } else {
          this.rangeClearInterval();
        }
      }, 2000);
    },
    pointRender(args) {
      bubblePointRender(args)
    }
  },

  provide: {
    chart: [LineSeries, SplineSeries, ColumnSeries, SplineAreaSeries, BarSeries, BubbleSeries,
      ScatterSeries, StepLineSeries, RangeColumnSeries, Category, DataLabel, Highlight, Tooltip]
  }
};
</script>

<style>
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#element {
  width: 100%;
}
</style>
