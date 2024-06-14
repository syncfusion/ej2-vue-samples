<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legend' :annotations='annotations'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='MultiColoredArea' xName='XValue' segmentAxis='X' yName='YValue' name='US' width=2 :segments='segments'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the data on US season retail sales growth using a multi-colored area series in the chart. Data points are enhanced with segments and tooltips.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure points in a particular range by using <code>MultiColoredArea</code> series. Points within the range can be configured with the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/chartSegment/#color" aria-label="Navigate to the color property reference for Vue Chart component">color</a> property in chart segment.
     </p>
     <p>
        The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/chart/tooltip/" aria-label="Navigate to the tooltip property reference for Vue Chart component">tooltip</a> is enabled in this example, to see the tooltip in action, hover a point or tap a point in touch enabled devices.
    </p>     
      
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
            <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
        </p>
        <p>
            More information about the multi-colored area series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/area#multicolored-area" aria-label="Navigate to the documentation for Multicolored Area Chart in Vue Chart component">documentation section</a>.
        </p> 
       
</div>
<svg style="height: 0">
    <defs>
        <linearGradient id="winter" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="summer" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
        <linearGradient id="spring" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0"></stop>
            <stop offset="1"></stop>
        </linearGradient>
    </defs>
</svg>
</div>

</template>
<style scoped>
#winter stop {
        stop-color: #4ca1af;
    }

    #winter stop[offset="0"] {
        stop-color: #c4e0e5;
    }

    #winter stop[offset="1"] {
        stop-color: #4ca1af;
    }

    #summer stop {
        stop-color: #ffa751;
    }

    #summer stop[offset="0"] {
        stop-color: #ffe259;
    }

    #summer stop[offset="1"] {
        stop-color: #ffa751;
    }

    #spring stop {
        stop-color: #1d976c;
    }

    #spring stop[offset="0"] {
        stop-color: #93f9b9;
    }

    #spring stop[offset="1"] {
        stop-color: #1d976c;
    }
</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, DateTime, Tooltip, ChartAnnotation, MultiColoredAreaSeries } from "@syncfusion/ej2-vue-charts";

   let dataValues= [];
  [150, 71.5, 106.4, 100.25, 70.0, 106.0, 85.6, 78.5, 76.4, 86.1, 155.6, 160.4].map(function(value, index) {
            dataValues.push({ XValue: new Date(2016, index, 1), YValue: value });
        });

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
        theme: theme,
         seriesData: dataValues,
     
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'DateTime', labelFormat: 'MMM', intervalType: 'Months', majorGridLines: { width: 0 }, majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        labelRotation: Browser.isDevice ? -45 : 0,
        labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45' 
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        labelFormat: '${value}K',
        rangePadding: 'None',
        minimum: 0,
        maximum: 200,
        interval: 50,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    width: Browser.isDevice ? '100%' : '75%',
    legend: { visible: false },
    segments: [{
        value: new Date(2016, 4, 1),
        color: 'url(#winter)'
    }, {
        value: new Date(2016, 8, 1),
        color: 'url(#summer)'
    }, {
        color: 'url(#spring)'
    }],
    tooltip: {
        enable: true,
        header: '<b>Revenue</b>',
        format: '${point.x} : <b>${point.y}</b>',
        shared: true
    },
    title: 'US Season Retail Sales Growth',

    annotations:[{
        content: '<div style= "width: 10px; height: 10px; color: #4ca1af; font-weight: bold; padding-left: 12px; font-size: 14px;">Winter</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(2016, 1, 20),
        y: 120
       },
       {
        content: '<div style="width: 10px; height: 10px; color: #ffa751; font-weight: bold; padding-left: 12px; font-size: 14px;">Summer</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(2016, 4, 20),
        y: 120
       },
       {
        content: '<div style="width: 10px; height: 10px; color: #93f9b9; font-weight: bold; padding-left: 12px; font-size: 14px;">Spring</div>',
        region: 'Series',
        coordinateUnits: 'Point',
        x: new Date(2016, 9, 20),
        y: 168
       },
      ],
    };
  },
  provide: {
    chart: [DateTime, Tooltip, ChartAnnotation, MultiColoredAreaSeries]
  },
  methods: {
   },

 
};
</script>