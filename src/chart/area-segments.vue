<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legend'>
            <e-annotations>
                <e-annotation :content='annotationTemplate' x='90%' y='12%' region='Series'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='MultiColoredArea' xName='XValue' segmentAxis='X' yName='YValue' name='US' width=2 :segments='segments'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the organic revenue data with multi colored area series in the chart. 
        Data points are enhanced with segments and tooltip.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the area type charts. Similar to line type series, but the area get closed and filled with series color.
        You can use <code>border</code>, <code>fill</code> properties to customize the area. <code>marker</code> and <code>dataLabel</code> are used to represent individual data and its value.
        Legend is enabled in this example with series type shape.
     </p>     
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject
            <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method.
        </p>
        <p>
            More information on the area series can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
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
<style>
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
import { ChartPlugin, DateTime, Tooltip, ChartAnnotation, MultiColoredAreaSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

   let dataValues= [];
  [150, 71.5, 106.4, 100.25, 70.0, 106.0, 85.6, 78.5, 76.4, 86.1, 155.6, 160.4].map(function(value, index) {
            dataValues.push({ XValue: new Date(2016, index, 1), YValue: value });
        });

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        annotationTemplate: function () {
                    return {
                        template: Vue.component('annotationTemplate', {
                            template: `<div style='width:80px; padding: 5px;'> <table style='width: 100%'>
                                        <tr><td><div style='width: 10px; height: 10px;background:linear-gradient(#4ca1af, #c4e0e5);border-radius: 15px;'></div>
                                        </td><td style='padding-left: 5px;'>Winter</td></tr>
                                        <tr><td><div style='width: 10px; height: 10px; background:linear-gradient(#ffa751, #ffe259);border-radius: 15px;'></div>
                                        </td><td style='padding-left: 5px;'>Summer</td></tr><tr><td>
                                        <div style='width: 10px; height: 10px; background:linear-gradient(#1d976c, #93f9b9);border-radius: 15px;'></div>
                                        </td><td style='padding-left: 5px;'>Spring</td></tr></table></div>`,
                            data: function () { return { data: {} }; }
                        })
                    }
                },
        theme: theme,
         seriesData: dataValues,

     
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'DateTime',
        labelFormat: 'MMM',
        intervalType: 'Months',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
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
    width: Browser.isDevice ? '100%' : '60%',
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
        enable: true
    },
    content: "<div style='width:80px; padding: 5px;'> <table style='width: 100%'>" +
        "<tr><td><div style='width: 10px; height: 10px;background:linear-gradient(#4ca1af, #c4e0e5);border-radius: 15px;'></div>" +
        "</td><td style='padding-left: 5px;'>Winter</td></tr>" +
        "<tr><td><div style='width: 10px; height: 10px; background:linear-gradient(#ffa751, #ffe259);border-radius: 15px;'></div>" +
        "</td><td style='padding-left: 5px;'>Summer</td></tr><tr><td>" +
        "<div style='width: 10px; height: 10px; background:linear-gradient(#1d976c, #93f9b9);border-radius: 15px;'></div>" +
        "</td><td style='padding-left: 5px;'>Spring</td></tr></table></div>",
    title: 'Organic Revenue in US - 2016'
    };
  },
  provide: {
    chart: [DateTime, Tooltip, ChartAnnotation, MultiColoredAreaSeries]
  },
  methods: {
   },

 
});
</script>