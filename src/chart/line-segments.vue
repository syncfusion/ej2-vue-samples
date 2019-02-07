<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' align='center' :theme='theme' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :chartArea='chartArea' :width='width' :legendSettings='legendSettings' :load='load'>
            <e-annotations>
                <e-annotation :content='annotationTemplate' region='Series' x='90%' y='12%'>
                </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='MultiColoredLine' xName='XValue' yName='YValue' :segments='segments' name='Australia' width=2 segmentAxis='Y' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample visualizes the annual mean rainfall data with multi colored line series in the chart. 
        Data points are enhanced with segments and tooltip.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the points in a particular range by using <code>MultiColoredLine</code> series type. 
        Points under the range can be configured with <code>color</code>, <code>width</code>, and <code>dashArray</code>.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject
        <code>MultiColoredLineSeries</code> module using
        <code>provide: { chart: [MultiColoredLineSeries] },</code> method.
    </p>
</div>
</div>
</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ChartAnnotation, MultiColoredLineSeries, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

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

export default Vue.extend({
  data: function() {
    return {
         annotationTemplate: function () {
                    return {
                        template: Vue.component('annotationTemplate', {
                            template: `<div style="width:80px; padding: 5px;">
                                <table style="width: 100%">
                                    <tr>
                                        <td>
                                            <div style='width: 10px; height: 10px; background:blue;border-radius: 15px;'></div>
                                        </td>
                                        <td style="padding-left: 5px;">
                                            High
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style='width: 10px; height: 10px; background:green;;border-radius: 15px;'></div>
                                        </td>
                                        <td style="padding-left: 5px;">
                                            Medium
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div style='width: 10px; height: 10px; background:red;;border-radius: 15px;'></div>
                                        </td>
                                        <td style="padding-left: 5px;">
                                            Low
                                        </td>
                                    </tr>
                                </table>
                            </div>`,
                            data: function () { return { data: {} }; }
                        })
                    }
                },
      seriesData: dataValues,
      theme: theme,
      //Initializing Primary X Axis
      primaryXAxis: {
            valueType: 'DateTime',
            labelFormat: 'y',
            intervalType: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
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
      width : Browser.isDevice ? '100%' : '60%',
      tooltip: {
            enable: true, shared: true
        },
      segments: [{
                   value: 450,
                   color: 'red'
                  }, {
                    value: 500,
                    color: 'green'
                  }, {
                    color: 'blue'
                }],
       title: "Annual Mean Rainfall for Australia"
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
   
});
</script>