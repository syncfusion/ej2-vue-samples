<template>
  <div class="control-section">
    <div align='center'>
    <ejs-chart ref="chart" :theme='theme' style='display:block;' :chartArea='chartArea' :width='width' align='center' id='chart-vertical' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :isTransposed='vertical' :loaded='loaded'>
        <e-series-collection>
            <e-series :dataSource='data1' type='Line' xName='x' yName='y' width=2 :animation='animation1'>
            </e-series>
        </e-series-collection>
    </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates the vertical chart by changing the orientation of x-axis to vertical and y-axis to horizontal.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the vertical type charts. To render a chart in vertical manner, you can use
        <code>isTransposed</code> in chart.
    </p>
</div>

</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, LineSeries, getElement } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        clrInterval: 0,

        data1: [{x: 0, y: 0}],

        primaryXAxis: {
            title: 'Time (s)', majorGridLines: { width: 0 } 
        },

    primaryYAxis: {
        title: 'Velocity (m/s)', majorGridLines: { width: 0 }, minimum: -15, maximum: 15, interval: 5
    },
    marker: {
        visible: false
    },
    animation1: {
        enable: false
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    width: Browser.isDevice ? '100%' : '60%',
    vertical: true,
    count: 0,
    title: 'Indonesia - Seismograph Analysis'
    };
  },
  provide: {
    chart: [LineSeries]
  },
  methods: {
    loaded: function (args) {
        this.clrInterval =
            setInterval(() => {
                args.chart.series[0].dataSource = this.liveData(args.chart.series[0].dataSource, args.chart.series[0]);
                args.chart.refresh();
            },
      100);
    },
    liveData: function(data, series) {
        this.count = this.count + 1;
        let newData = data;
        if (this.count > 350 || getElement('chart-vertical') === null) {
            clearInterval(this.clrInterval);
        } else if (this.count > 300) {
            newData.push({ x: this.getXValue(data), y: this.getYValue(0, 0) });
        } else if (this.count > 250) {
            newData.push({ x: this.getXValue(data), y: this.getYValue(-2, 1) });
        } else if (this.count > 180) {
            newData.push({ x: this.getXValue(data), y: this.getYValue(-3, 2) });
        } else if (this.count > 100) {
            newData.push({ x: this.getXValue(data), y: this.getYValue(-7, 6) });
        } else if (this.count < 50) {
            newData.push({ x: this.getXValue(data), y: this.getYValue(-3, 3) });
        } else {
            newData.push({ x: this.getXValue(data), y: this.getYValue(-9, 9) });
        }
        return newData;
    },
    getXValue: function (data) {
        return data.length;
    },
    getYValue: function (min, max) {
        return Math.random() * (max - min) + min;
    }
  },
   
});
</script>