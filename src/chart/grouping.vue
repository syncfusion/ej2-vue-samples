<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-accumulationchart id="containerPie" ref="pie" style='display:block; width: 92%' :legendSettings="legendSettings" :tooltip="tooltip" :title="title" :textRender="onTextRender" :pointRender="onPointRender" :theme='theme'>
            <e-accumulation-series-collection>
                <e-accumulation-series name='RIO' :animation='animation' :explode='true' :dataSource='data' xName='x' yName='y' :startAngle="startAngle" :endAngle="endAngle" innerRadius="0%" radius="70%"
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
        This sample illustrates the grouping functionality in pie series.  The grouping value can be changed by using <code>Group To</code> property.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to <code>group</code> points in pie chart</p>
    <p> Points having value below the <code>'groupTo'</code> value are grouped and showed as separate point. You can view this points on mouse click and can customize this point using <code>'pointRender'</code> event. </p>
    <p> DataLabel is used to represent individual data and its value.</p>
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
import { AccumulationChartPlugin, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection } from "@syncfusion/ej2-vue-charts";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(AccumulationChartPlugin);
Vue.use(DropDownListPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        groupModeData: ["Point", "Value"],
        theme: theme,
        animation: {
            enable: false
        },
        data: [
        { 'x': 'China', y: 26, text: 'China: 26' },
        { 'x': 'Russia', y: 19, text: 'Russia: 19' },
        { 'x': 'Germany', y: 17, text: 'Germany: 17' },
        { 'x': 'Japan', y: 12, text: 'Japan: 12' },
        { 'x': 'France', y: 10, text: 'France: 10' },
        { 'x': 'South Korea', y: 9, text: 'South Korea: 9' },
        { 'x': 'Great Britain', y: 27, text: 'Great Britain: 27' },
        { 'x': 'Italy', y: 8, text: 'Italy: 8' },
        { 'x': 'Australia', y: 8, text: 'Australia: 8' },
        { 'x': 'Netherlands', y: 8, text: 'Netherlands: 8' },
        { 'x': 'Hungary', y: 8, text: 'Hungary: 8' },
        { 'x': 'Brazil', y: 7, text: 'Brazil: 7' },
        { 'x': 'Spain', y: 7, text: 'Spain: 7' },
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
        connectorStyle: { type: 'Line', length: '5%' },
        font: {
            size: '14px'
        }
    },
    clubvalue: '9',
    startAngle: 0,
    endAngle: 360,
    tooltip: { enable: false },
    title: 'RIO Olympics Gold ',
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
          document.getElementById('clubvalue').innerHTML = currentValue;
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