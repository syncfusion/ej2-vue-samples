<template>
<div>
<div class="control-section">   
     <h4 id="default" align="center" style="font-family: Segoe UI;font-weight: 500; font-style:normal; font-size:15px;">Bitcoin (USD) Price Range</h4> 
    <div align="center">
        <ejs-rangenavigator ref='range' style='display:block' align='center' id='containerDefault' :valueType='valueType'
         :tooltip='tooltip' :value='value' :width='width' :labelFormat='labelFormat' :theme='theme' 
         :navigatorStyleSettings='navigatorStyleSettings'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series :dataSource='data' type='Area' :fill='fill' :border='border' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
</div>
<div id="action-description">
    <p>
        This sample visualizes the bitcoin price range with area series in the range navigator. Selected range values are enhanced with tooltip.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the range navigator with area type series. <code>tooltip</code> is used to represent selected data value. You can also use <code>selectedRegionColor</code> and <code>unSelectedRegionColor</code> properties to customize selected and unselected area in range navigator.
     </p>     
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
         The range navigator component features are segregated into individual feature-wise modules. To use date-time axis, inject the <code>DateTime</code> module in the <code>provide</code> section
         Inject(DateTime) method. To use the tooltip, inject the <code>RangeTooltip</code> module in the <code>provide</code> section.
        </p>
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
    </defs>
</svg>
</div>
</template>
<style>
    #control-containerDefault {
        padding: 0px !important;
    }

    #containerDefault {
        transform: translate(0, 25%);
    }

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

    .chart-gradient stop[offset="0"] {
        stop-opacity: 0.9;
    }

    .chart-gradient stop[offset="1"] {
        stop-opacity: 0.3;
    }

   
</style>


<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { RangeNavigatorPlugin, AreaSeries, ChartTheme, DateTime, RangeTooltip } from "@syncfusion/ej2-vue-charts";
import { bitCoinData } from "./default-data";

Vue.use(RangeNavigatorPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let themes = ["Material", "Fabric", "Bootstrap", "Highcontrast"];
let borderColor = ["#00bdae", "#4472c4", "#a16ee5", "#79ECE4"];
let regionColor = [ "rgba(0, 189, 174, 0.3)", "rgba(68, 114, 196, 0.3)",
  "rgba(161, 110, 229, 0.3)", "rgba(121, 236, 228, 0.3)" ];

export default Vue.extend({
  data: function() {
    return {
      valueType: "DateTime",
      labelFormat: 'MMM-yy',
      tooltip: { enable: true, displayMode: "Always" },
      value: [new Date('2017-09-01'), new Date('2018-02-01')],
      navigatorStyleSettings: {
        unselectedRegionColor: "transparent",
        selectedRegionColor: regionColor[themes.indexOf(theme)]
      },
      data: bitCoinData,
      width: Browser.isDevice ? "100%" : "80%",
      theme: theme,
      fill: "url(#" + theme.toLowerCase() + "-gradient-chart)",
      border: { width: 2, color: borderColor[themes.indexOf(theme)] }
    };
  },
  
  provide: {
    rangeNavigator: [DateTime, AreaSeries, RangeTooltip]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.range.ej2Instances.refresh();
      });
    },
  methods: {
  
  }
});
</script>