<template>
  <div class="control-section">
    <div align ='center'>
        <ejs-chart  ref="chart" style='display:block; width: 92%'  :chartArea='chartArea'  align='center' :loaded="onChartLoad" :primaryYAxis='primaryYAxis' :primaryXAxis='primaryXAxis' :enableCanvas='enableCanvas' :title='title' :theme='theme'
        :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :marker='marker' :dataSource='series' type='Area' xName='x' yName='y' :animation='animation' :fill='fill'  :border='border' > </e-series>
            </e-series-collection>
        </ejs-chart>
        
    </div>
    <div>
    <div id="action-description">
    <p>      
        This sample demonstrates the performance of Vue Charts rendering 100K data points.
    </p>
</div>
<div id="description">
    <p>
        Charts includes several data-rendering optimizations to achieve the best possible performance when plotting large volumes of data and handling high-frequency, real-time data. In this demo, an area series is rendered with 100K points.
    </p>
</div>
</div>
<svg style="height: 0">
	<defs>
        <linearGradient id="material-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fabric-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap4-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="highcontrast-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="tailwind-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0"></stop>
                <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap5-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="material-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fabric-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="tailwind-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="bootstrap5-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="fluent-dark-gradient-chart" style="opacity: 0.75" class="chart-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
    </defs>
</svg>
</div>

</template>
<style scoped>
  #material-gradient-chart stop {
        stop-color: #00bdae;
    }

    #fabric-gradient-chart stop {
        stop-color: #4472c4;
    }

    #bootstrap-gradient-chart stop {
        stop-color: #a16ee5;
    }

    #bootstrap4-gradient-chart stop {
        stop-color: #a16ee5;
    }

    #highcontrast-gradient-chart stop {
        stop-color: #79ECE4;
    }

    #tailwind-gradient-chart stop {
        stop-color: #5A61F6;
    }

    #bootstrap5-gradient-chart stop {
        stop-color: #262E0B;
    }

    #material-dark-gradient-chart stop {
        stop-color: #9ECB08;
    }

    #fabric-dark-gradient-chart stop {
        stop-color: #4472c4;
    }

    #bootstrap-dark-gradient-chart stop {
        stop-color: #a16ee5;
    }

    #tailwind-dark-gradient-chart stop {
        stop-color: #8B5CF6;
    }

    #bootstrap5-dark-gradient-chart stop {
        stop-color: #5ECB9B;
    }

    #fluent-gradient-chart stop {
        stop-color: #614570;
    }

    #fluent-dark-gradient-chart stop {
        stop-color: #8AB113;
    }

    .chart-gradient stop[offset="0"] {
        stop-opacity: 0.9;
    }

    .chart-gradient stop[offset="1"] {
        stop-opacity: 0.3;
    }
	#control-container {
		padding: 0px !important;
	}
</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { ChartPlugin, AreaSeries, Legend, DateTime } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark'];
let borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113'];
function GetZoomingData() {
        let series1 = [];
        let point1;
        let pts;
        let value = 0;
        for (pts = 0; pts < 100000; pts++) {
            if (pts % 3 == 0) {
                value -= (Math.random() * (100) / 3) * 4;
            }
            else if (pts % 2 == 0) {
                value += (Math.random() * (100) / 3) * 4;
            }
            if (value < 0) {
                value = value * -1;
            }
            if (value >= 12000) {
                value = Math.floor(Math.random() * 11000) + 1000;
            }
            point1 = { x: new Date(2005, 1, 1).setHours(pts), y: value };
            series1.push(point1);
        }
        return { 'series': series1 };
    }
    let seriesData = GetZoomingData().series;
export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        dt1: 0,
        series: [],
        primaryXAxis: {
           
            intervalType: 'Years',
            valueType: 'DateTime',
            edgeLabelPlacement: 'Shift',
            title: 'Years',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            
        },
        primaryYAxis: {
            interval: 2000,
            minimum: 0,
            maximum: 12000,
            title: 'Values',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        },
        chartArea:  {
        border: {
            width: 0
        }
    },
        width: Browser.isDevice ? '100%' : '75%',
        border: { width: 0.5, color: borderColor[themes.indexOf(theme.toLowerCase())] },
        title: "Chart with 100k points",
        series: seriesData, 
        fill: "url(#" + selectedTheme + "-gradient-chart)",
        marker: {
            visible: false
        },
        legendSettings: { visible: false }
    };
  },
  provide: {
    chart: [AreaSeries, DateTime, Legend]
  },
  
 
      
    

 
   
});
</script>