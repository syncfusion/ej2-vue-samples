<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :load='load' :annotations='annotations'>
           
            <e-series-collection>
                <e-series :dataSource='seriesData' type='MultiColoredLine' xName='XValue' yName='YValue' :segments='segments' name='Australia' width=2 segmentAxis='Y' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the annual mean rainfall in Australia with multi-colored line series in the chart. Data points are enhanced with segments and tooltips.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the points in a particular range by using
        <code>MultiColoredLine</code> series. Points under the range can be customized with
        <code>Color</code> and
        <code>DashArray</code>properties in the ChartSegment.
    </p>
    <p>
        <code>Tooltips</code>are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject
        <code>MultiColoredLineSeries</code> module using
        <code>provide: { chart: [MultiColoredLineSeries] },</code> method.
    </p>
    <p>
          More information about the line series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line#line">documentation section</a>.
    </p> 
</div>
</div>
</template>
<style scoped>
 .chartCircle {
        width: 10px;
        height: 10px;
        border-radius: 15px;
    }
    .blueCircle {
        color: blue;
        font-weight: bold;
    }
    .greenCircle {
        color: green;
        font-weight: bold;
    }
    .redCircle {
        color: red;
        font-weight: bold;
    }
    .chartPadding {
        padding-left: 5px;
        font-size: 14px;
    }
    .ellipse[id*=_Trackball_0] {
        stroke-opacity: 1;
    }
    .ellipse[id*=_Trackball_1] {
        stroke-width: 1.2 !important;
        stroke: white !important;
    }
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ChartAnnotation, MultiColoredLineSeries, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

 let dataValues = [];
    [
        380, 410, 310, 540, 510, 330, 490, 470, 472, 460, 550, 420, 380, 430, 385, 520, 580, 420, 350, 505,
        535, 410, 204, 400, 415, 408, 415, 350, 375, 500, 390, 450, 440, 350, 400, 365, 490, 400, 520, 510,
        395, 380, 404, 400, 500, 390, 610, 380, 390, 420, 440, 570, 600, 380, 410, 405, 480, 320, 420, 440,
        320, 280, 320, 400, 390, 460, 470, 490, 420, 480, 410, 420, 580, 410, 380, 480, 360, 650, 680, 720,
        580, 480, 520, 440, 420, 430, 380, 520, 410, 540, 400, 390, 460, 470, 490, 420, 480, 470, 490, 330,
        520, 480, 580, 590, 600, 310, 480, 500, 400, 508, 480, 460, 700, 705, 480, 410, 480,
    ].map(function(value, index) {
        dataValues.push({ XValue: new Date(1900 + index, 0, 1), YValue: value });
    });

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
      seriesData: dataValues,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'DateTime', minimum : new Date(1910, 0, 1), maximum : new Date(2010, 0, 1), majorGridLines: {width : 0},
            edgeLabelPlacement: 'Shift',
        },

      //Initializing Primary Y Axis
      primaryYAxis:
            {
                labelFormat: '{value}mm',
                rangePadding: 'None',
                minimum: 200,
                maximum: 800,
                interval: 100,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
      chartArea: {
            border: {
                width: 0
            }
        },
      legendSettings: { visible: false },
      width : Browser.isDevice ? '100%' : '75%',
      tooltip: {
            enable: true, shared: true, header:'Rainfall', format: '${point.x} : <b>${point.y}</b>'
        },
        annotations: [{
            content: "<div style='color:green; font-weight:bold; font-size:14px'>Medium</div>",
            region: 'Series',
            x: Browser.isDevice ? '24%' : '20%',
            y: Browser.isDevice ? '44%' : '48%'
        },
        {
            content: "<div style='color:blue; font-weight:bold;font-size:14px'>High</div>",
            region: 'Series',
            x: '68%',
            y: '10%'
        },
        {
            content: "<div style='color:red; font-weight:bold; font-size:14px'>Low</div>",
            region: 'Series',
            x: '95%',
            y: '84%'
        },
        ],
      segments: [{
                   value: 450,
                   color: 'red'
                  }, {
                    value: 500,
                    color: 'green'
                  }, {
                    color: 'blue'
                }],
       title: "Annual Mean Rainfall in Australia"
    };
  },
  provide: {
    chart: [DateTime, Tooltip, ChartAnnotation, MultiColoredLineSeries]
  },
  methods: {
    load: function(args) {
      if (args.chart.theme === 'highcontrast') {
               args.chart.series[0].segments[0].color = '#FF4741';
               args.chart.series[0].segments[1].color = '#00B400';
               args.chart.series[0].segments[2].color = '#3F9BFF';
            }
    }
  },
   
};
</script>