<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
        <ejs-accumulationchart id="containerPie" ref="pie" style='display:block; width: 92%' :legendSettings="legendSettings" :tooltip="tooltip" :title="title" :textRender="onTextRender" :pointRender="onPointRender" :theme='theme' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series name='RIO' :animation='animation' :explode='true' :dataSource='data' xName='x' yName='y' :startAngle="startAngle" :endAngle="endAngle" :radius="radius" innerRadius="0%"
                 groupMode='Point' :dataLabel="dataLabel" :groupTo='clubvalue'>
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
    <div class="col-md-4 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                     <tr>
                 <td style="width: 50%">
                       <div>GroupModes:
                       </div>
                </td>
                <td style="width: 50%;">
                    <div>
                        <ejs-dropdownlist id='groupMode' :change='changeMode'  index=0 :dataSource='groupModeData' width='80'></ejs-dropdownlist>
                    </div>
                  </td>
                  </tr>

                    <tr >
                        <td style="width: 30%">
                            <div>Group To                                
                            </div>
                        </td>
                        <td style="width: 40%;">
                            <div data-role="rangeslider">
                                <input type="range" name="clubvalue" value="9" min="0" max="27" @touchmove='onClubvalue' @pointermove='onClubvalue' @change='onClubvalue' autocomplete="off" id="clubvalue" style="width:90%">
                            </div>
                        </td>
                        <td style="width: 30%">
                            <p id="clubtext" style="font-weight: normal; padding-top: 15px;">9</p>
                        </td>
                    </tr>
                </table>
    </div>


    <div id="action-description">
    <p>
        This sample shows the gold medal count scored by each country at the Rio Olympic Games, along with the pie series grouping functionality.
    </p>
</div>
<div id="description">
    <p>In this example, you can see how to group points based on count and values. 
        The slice can be grouped based on the number of points by specifying the <code>GroupMode</code> to <code>Point</code>. 
        For example, if the <code>GroupTo</code> property is set to 10, the chart will display the first 10 points and the remaining entries from the collection will be grouped as a single point. 
        The slice can also be grouped based on values by specifying the <code>GroupMode</code> to <code>Value</code>. 
        For example, if the GroupTo is set to 10, the first 10 points with a lower value will be grouped together and shown as a single point while the others as a slice.</p>
        <p>
            <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
        </p>
    <p>
        More information about the grouping in accumulation chart can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/grouping/">documentation section</a>.
    </p>
</div>

</div>
</template>
<style scoped>
.control-section {
    min-height: 450px;
}
</style>
<script>
import Vue from "vue";

import { AccumulationChartPlugin, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection } from "@syncfusion/ej2-vue-charts";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Browser } from '@syncfusion/ej2-base';

Vue.use(AccumulationChartPlugin);
Vue.use(DropDownListPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i,  'Contrast');

export default Vue.extend({
  data: function() {
    return {
        groupModeData: ["Point", "Value"],
        theme: theme,
        animation: {
            enable: false
        },
        data: [
            { 'x': 'Australia', y: 26, text: 'Australia: 26' },
            { 'x': 'Russia', y: 19, text: 'Russia: 19' },
            { 'x': 'Germany', y: 17, text: 'Germany: 17' },
            { 'x': 'Japan', y: 12, text: 'Japan: 12' },
            { 'x': 'China', y: 10, text: 'China: 10' },
            { 'x': 'South Korea', y: 9, text: 'South Korea: 9' },
            { 'x': 'Great Britain', y: 27, text: 'Great Britain: 27' },
            { 'x': 'Italy', y: 8, text: 'Italy: 8' },
            { 'x': 'France', y: 8, text: 'France: 8' },
            { 'x': 'Spain', y: 7, text: 'Spain: 7' },
            { 'x': 'Hungary', y: 8, text: 'Hungary: 8' },
            { 'x': 'Brazil', y: 7, text: 'Brazil: 7' },
            { 'x': 'Netherlands', y: 8, text: 'Netherlands: 8' },
            { 'x': 'Kenya', y: 6, text: 'Kenya: 6' },
    ],
    //Initializing Legend
    legendSettings: {
        visible: false,
    },
    //Initializing DataLabel
    dataLabel: {
        visible: true,
        position: 'Outside',
        connectorStyle: { type: 'Curve', length: '20px' },
        font: {
            fontWeight: '600',  
        }
    },
    clubvalue: '9',
    startAngle: 0,
    radius: Browser.isDevice ? '40%' : '70%',
    endAngle: 360,
    tooltip: { enable: true, header:'', format:'<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>' },
    title: 'Rio Olympic Gold Medals',
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection]
  },
  methods: {
      changeMode: function(e){
          let accumulationChart = document.getElementById('containerPie').ej2_instances[0];
          let currentValue = e.value  === 'Point' ? 9 : 8;
          document.getElementById('clubtext').innerHTML = currentValue;
          document.getElementById('clubvalue').value = currentValue;
          accumulationChart.series[0].groupMode = e.value;
          accumulationChart.series[0].groupTo = currentValue.toString();
          accumulationChart.series[0].animation.enable = false;
          accumulationChart.removeSvg();
          accumulationChart.refreshSeries();
          accumulationChart.refreshChart();
      },
    onClubvalue: function (e) {
        let clubvalue = document.getElementById('clubvalue').value;
        this.clubvalue = clubvalue;
        document.getElementById('clubtext').innerHTML = clubvalue;
    },
    onTextRender: function (args) {
        args.text = args.point.x + ' ' + args.point.y;
    },
    onPointRender: function (args) {
        if (args.point.isClubbed || args.point.isSliced) {
            args.fill = '#D3D3D3';
        }
    },
  },
    updated: function() {
      this.$nextTick(function() {
        this.$refs.pie.ej2Instances.refresh();
        this.$refs.pie.ej2Instances.removeSvg();
        this.$refs.pie.ej2Instances.refreshSeries();
        this.$refs.pie.ej2Instances.refreshChart();
      });
    }
});
</script>