<template>
  <div class="control-section">
    <div class="col-lg-9 control-section">
        <ejs-chart ref="chart" style="display:block;" :loaded="onChartLoad" :primaryXAxis='primaryXAxis' :enableCanvas='enableCanvas' :theme='theme' >
            <e-series-collection>
                <e-series :dataSource='seriesData' :marker='marker' :xName='xName' :yName='yName' :animation='animation' type='Line'> </e-series>
            </e-series-collection>
        </ejs-chart>
     </div>
     <div class="col-lg-3 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                 <tr style="height: 50px">
                      <td style="width: 80%">
                        <div>
                            <ejs-button cssClass="e-info" @click.native="onChange" style="text-transform:none !important">Load 100K Points</ejs-button>
                        </div>
                      </td>
                 </tr>
                 <tr style="height: 50px">
                      <td style="width: 30%">
                          <div>Time Taken</div>
                      </td>
                      <td style="width: 50%">
                           <div>
                               <span id="performanceTime">0ms</span>
                           </div>
                      </td>
                 </tr>
              </table>
     </div>

    <div id="action-description">
    <p>
        This sample demonstrates the performance of EJ2 chart to render 100K points in canvas mode.
    </p>
</div>
<div id="description">
    <p>
        Chart includes several data rendering optimizations to achieve the best possible performance when plotting large volumes of data as well as handling high frequency real-time data.In this demo, chart is rendered with 100K points in canvas mode.
    </p>
</div>

</div>
</template>
<style>
.control-section {
    min-height: 450px;
}
</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { ChartPlugin, LineSeries, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        dt1: 0,
        seriesData: [],
        enableCanvas: true,
        primaryXAxis: {
            majorGridLines: { color: 'transparent' }
        },
        animation: { enable: false },
        xName: 'x',
        yName: 'y',
        marker: {
            visible: false
        }
    };
  },
  provide: {
    chart: [LineSeries, Legend]
  },
  methods: {
    onChange: function (e) {
        let series1= [];
        let point1;
        let value = 0;
        let i;
        for (i = 0; i < 100000; i++) {
            value += (Math.random() * 10 - 5);
            point1 = { x: i, y: value };
            series1.push(point1);
        }
        this.dt1 = new Date().getTime();
        this.$refs.chart.ej2Instances.series[0].dataSource = series1;
        this.$refs.chart.ej2Instances.refresh();
    },
    onChartLoad: function(args) {
        let dt2 = new Date().getTime();
        if (this.dt1) {
            document.getElementById('performanceTime').innerHTML = (dt2 - this.dt1) + 'ms';
        }
        this.dt1 = 0;
    },
 },
   
});
</script>